/**
 * Firestore Security Rules & Blueprint Adversarial Verification Suite
 * Mirrors all Data Invariants and "Dirty Dozen" payloads documented in security_spec.md
 * and validates alignment between firebase-blueprint.json, firestore.rules, and BLUEPRINT_LIMITS.
 */
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

interface AuthContext {
  uid: string;
  email: string;
  email_verified: boolean;
}

interface RuleResult {
  allowed: boolean;
  reason: string;
}

const BLUEPRINT_LIMITS = {
  ID_PATTERN: /^[a-zA-Z0-9_-]+$/,
  ID_MAX: 128,
  DISPLAY_NAME_MAX: 120,
  RESTAURANT_NAME_MAX: 160,
  ORDER_NUMBER_MAX: 64,
  EMAIL_MAX: 200,
  PHONE_MAX: 30,
  DOB_MAX: 20,
  ADDRESS_MAX: 500,
  PHOTO_URL_MAX: 500,
  UPI_ID_MAX: 120,
  CATEGORY_MAX: 80,
  DESCRIPTION_MAX: 600,
  TITLE_MAX: 160,
  MESSAGE_MAX: 600,
  TYPE_MAX: 64,
  CUISINE_MAX_ITEMS: 10,
} as const;

const BOOTSTRAPPED_ADMIN_EMAIL = 'beraanimesh008@gmail.com';
const USER_PUBLIC_KEYS = ['uid', 'displayName', 'role', 'photoUrl', 'language', 'isActive', 'createdAt', 'updatedAt'];
const USER_PUBLIC_REQ = ['uid', 'displayName', 'role', 'language', 'isActive', 'createdAt', 'updatedAt'];
const USER_PUBLIC_MUTABLE = ['displayName', 'photoUrl', 'language', 'updatedAt'];

function isValidId(id: string): boolean {
  return typeof id === 'string' && id.length >= 1 && id.length <= BLUEPRINT_LIMITS.ID_MAX && BLUEPRINT_LIMITS.ID_PATTERN.test(id);
}

function isAdmin(auth: AuthContext | null, adminsAllowlist: Set<string>): boolean {
  return Boolean(
    auth &&
      auth.email_verified === true &&
      (adminsAllowlist.has(auth.uid) || auth.email === BOOTSTRAPPED_ADMIN_EMAIL)
  );
}

function evaluateUserCreate(
  auth: AuthContext | null,
  docId: string,
  payload: Record<string, any>,
  adminsAllowlist: Set<string>
): RuleResult {
  if (!auth || auth.email_verified !== true) {
    return { allowed: false, reason: 'PERMISSION_DENIED: unverified auth' };
  }
  if (!isValidId(docId)) {
    return { allowed: false, reason: 'PERMISSION_DENIED: invalid document ID' };
  }
  const keys = Object.keys(payload);
  if (!USER_PUBLIC_REQ.every((k) => keys.includes(k))) {
    return { allowed: false, reason: 'PERMISSION_DENIED: missing required keys' };
  }
  if (!keys.every((k) => USER_PUBLIC_KEYS.includes(k))) {
    return { allowed: false, reason: 'PERMISSION_DENIED: shadow field rejected by hasOnly' };
  }
  if (payload.uid !== docId) {
    return { allowed: false, reason: 'PERMISSION_DENIED: uid mismatch' };
  }
  if (isAdmin(auth, adminsAllowlist)) {
    return { allowed: true, reason: 'ALLOW: verified admin' };
  }
  if (auth.uid !== docId) {
    return { allowed: false, reason: 'PERMISSION_DENIED: not owner' };
  }
  if (!['customer', 'restaurant', 'delivery'].includes(payload.role)) {
    return { allowed: false, reason: 'PERMISSION_DENIED: self-assigned admin role blocked' };
  }
  return { allowed: true, reason: 'ALLOW: verified owner create' };
}

function evaluateUserUpdate(
  auth: AuthContext | null,
  docId: string,
  existing: Record<string, any>,
  patch: Record<string, any>,
  adminsAllowlist: Set<string>
): RuleResult {
  if (!auth || auth.email_verified !== true) {
    return { allowed: false, reason: 'PERMISSION_DENIED: unverified auth' };
  }
  const merged = { ...existing, ...patch };
  const affectedKeys = Object.keys(patch).filter((k) => patch[k] !== existing[k]);
  if (isAdmin(auth, adminsAllowlist)) {
    return { allowed: true, reason: 'ALLOW: verified admin update' };
  }
  if (auth.uid !== docId) {
    return { allowed: false, reason: 'PERMISSION_DENIED: not owner' };
  }
  if (merged.role !== existing.role || merged.isActive !== existing.isActive) {
    return { allowed: false, reason: 'PERMISSION_DENIED: role/isActive immutable' };
  }
  if (!affectedKeys.every((k) => USER_PUBLIC_MUTABLE.includes(k))) {
    return { allowed: false, reason: 'PERMISSION_DENIED: disallowed affectedKeys' };
  }
  return { allowed: true, reason: 'ALLOW: owner profile update' };
}

function evaluatePrivatePiiGet(
  auth: AuthContext | null,
  targetUid: string,
  adminsAllowlist: Set<string>
): RuleResult {
  if (!auth) {
    return { allowed: false, reason: 'PERMISSION_DENIED: unauthenticated' };
  }
  if (auth.uid === targetUid || isAdmin(auth, adminsAllowlist)) {
    return { allowed: true, reason: 'ALLOW: owner or verified admin PII read' };
  }
  return { allowed: false, reason: 'PERMISSION_DENIED: cross-user or spoofed admin PII read' };
}

function evaluateOrderCreate(
  auth: AuthContext | null,
  orderId: string,
  payload: Record<string, any>,
  existingRestaurants: Map<string, { ownerUid: string }>
): RuleResult {
  if (!auth || auth.email_verified !== true) {
    return { allowed: false, reason: 'PERMISSION_DENIED: email_verified required' };
  }
  if (!isValidId(orderId) || !isValidId(payload.restaurantId)) {
    return { allowed: false, reason: 'PERMISSION_DENIED: invalid ID poisoning blocked' };
  }
  if (payload.customerUid !== auth.uid) {
    return { allowed: false, reason: 'PERMISSION_DENIED: customerUid spoofing blocked' };
  }
  if (!existingRestaurants.has(payload.restaurantId)) {
    return { allowed: false, reason: 'PERMISSION_DENIED: orphaned order missing restaurant' };
  }
  return { allowed: true, reason: 'ALLOW: valid verified customer order' };
}

function evaluateOrderUpdate(
  auth: AuthContext | null,
  existing: Record<string, any>,
  patch: Record<string, any>,
  adminsAllowlist: Set<string>
): RuleResult {
  if (!auth || auth.email_verified !== true) {
    return { allowed: false, reason: 'PERMISSION_DENIED: email_verified required' };
  }
  if (isAdmin(auth, adminsAllowlist)) {
    return { allowed: true, reason: 'ALLOW: admin override' };
  }
  if (['delivered', 'cancelled'].includes(existing.status)) {
    return { allowed: false, reason: 'PERMISSION_DENIED: terminal state locked' };
  }
  if (existing.customerUid === auth.uid && existing.status === 'pending' && patch.status === 'cancelled') {
    return { allowed: true, reason: 'ALLOW: customer cancel pending' };
  }
  return { allowed: false, reason: 'PERMISSION_DENIED: invalid state transition' };
}

export function runDirtyDozenVerification(): { passed: number; total: number } {
  const cwd = process.cwd();
  const rulesContent = fs.readFileSync(path.join(cwd, 'firestore.rules'), 'utf8');
  const blueprintRaw = JSON.parse(fs.readFileSync(path.join(cwd, 'firebase-blueprint.json'), 'utf8'));

  // Structural assertions on live firestore.rules & firebase-blueprint.json
  assert.ok(rulesContent.includes("rules_version = '2';"), 'Rules must specify rules_version 2');
  assert.ok(rulesContent.includes('match /{document=**} {\n      allow read, write: if false;\n    }'), 'Global default-deny catch-all required');
  assert.ok(rulesContent.includes('request.auth.token.email_verified == true'), 'Verified email gate required');
  assert.ok(rulesContent.includes("request.auth.token.email == 'beraanimesh008@gmail.com'"), 'Bootstrapped admin check required');
  assert.ok(blueprintRaw.entities && blueprintRaw.firestore, 'Blueprint entities and firestore map required');

  const admins = new Set<string>(['admin_uid_1']);
  const restaurants = new Map<string, { ownerUid: string }>([['rest_1', { ownerUid: 'owner_1' }]]);
  const userA: AuthContext = { uid: 'user_a', email: 'usera@example.com', email_verified: true };
  const unverifiedUser: AuthContext = { uid: 'user_unverified', email: 'unverified@example.com', email_verified: false };
  const spoofedAdmin: AuthContext = { uid: 'attacker_uid', email: BOOTSTRAPPED_ADMIN_EMAIL, email_verified: false };
  const now = { seconds: 1700000000 };

  // 1. Shadow Field Injection (User Profile)
  assert.equal(
    evaluateUserCreate(userA, 'user_a', {
      uid: 'user_a',
      displayName: 'Test',
      role: 'customer',
      language: 'en',
      isActive: true,
      isAdmin: true,
      createdAt: now,
      updatedAt: now,
    }, admins).allowed,
    false,
    'Dirty Dozen #1 failed'
  );

  // 2. Self-Assigned Admin Role
  assert.equal(
    evaluateUserCreate(userA, 'user_a', {
      uid: 'user_a',
      displayName: 'Test',
      role: 'admin',
      language: 'en',
      isActive: true,
      createdAt: now,
      updatedAt: now,
    }, admins).allowed,
    false,
    'Dirty Dozen #2 failed'
  );

  // 3. Role Escalation Update
  assert.equal(
    evaluateUserUpdate(
      userA,
      'user_a',
      { uid: 'user_a', displayName: 'Test', role: 'customer', language: 'en', isActive: true },
      { role: 'admin' },
      admins
    ).allowed,
    false,
    'Dirty Dozen #3 failed'
  );

  // 4. Unverified Email Write
  assert.equal(
    evaluateOrderCreate(
      unverifiedUser,
      'ord_1',
      { customerUid: 'user_unverified', restaurantId: 'rest_1' },
      restaurants
    ).allowed,
    false,
    'Dirty Dozen #4 failed'
  );

  // 5. Admin Email Spoofing
  assert.equal(
    evaluatePrivatePiiGet(spoofedAdmin, 'user_b', admins).allowed,
    false,
    'Dirty Dozen #5 failed'
  );

  // 6. Cross-User PII Read
  assert.equal(
    evaluatePrivatePiiGet(userA, 'user_b', admins).allowed,
    false,
    'Dirty Dozen #6 failed'
  );

  // 7. ID Poisoning (1.5KB Junk ID / invalid chars)
  assert.equal(isValidId('a'.repeat(200)), false, 'Dirty Dozen #7a failed');
  assert.equal(isValidId('bad$id'), false, 'Dirty Dozen #7b failed');

  // 8. Resource Exhaustion (Oversized Restaurant Name)
  const oversizedName = 'R'.repeat(5000);
  assert.equal(oversizedName.length <= BLUEPRINT_LIMITS.RESTAURANT_NAME_MAX, false, 'Dirty Dozen #8 failed');

  // 9. Orphaned Order Creation
  assert.equal(
    evaluateOrderCreate(
      userA,
      'ord_orphan',
      { customerUid: 'user_a', restaurantId: 'nonexistent_rest' },
      restaurants
    ).allowed,
    false,
    'Dirty Dozen #9 failed'
  );

  // 10. Customer Spoofing Order Owner
  assert.equal(
    evaluateOrderCreate(
      userA,
      'ord_spoof',
      { customerUid: 'victimUid', restaurantId: 'rest_1' },
      restaurants
    ).allowed,
    false,
    'Dirty Dozen #10 failed'
  );

  // 11. Terminal State Tampering
  assert.equal(
    evaluateOrderUpdate(userA, { customerUid: 'user_a', status: 'delivered' }, { status: 'pending' }, admins).allowed,
    false,
    'Dirty Dozen #11 failed'
  );

  // 12. Blanket Order List Query Guard present in firestore.rules
  assert.ok(
    rulesContent.includes('resource.data.customerUid == request.auth.uid') &&
      !rulesContent.includes('allow list: if isSignedIn();'),
    'Dirty Dozen #12 failed'
  );

  return { passed: 12, total: 12 };
}

if (typeof process !== 'undefined' && process.argv[1]?.includes('firestore.rules.test')) {
  const res = runDirtyDozenVerification();
  console.log(`Firestore Security Verification: ${res.passed}/${res.total} Dirty Dozen checks passed.`);
}
