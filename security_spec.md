# AharLocal Firestore Security Specification

## 1. Data Invariants
1. **Default-Deny Catch-All**: No collection or document is readable or writable unless explicitly matched and permitted.
2. **Verified Identity**: All authenticated writes require `request.auth != null && request.auth.token.email_verified == true`.
3. **PII Isolation (Split Collection)**:
   - Public user metadata (`users/{userId}`) stores only non-PII fields (`uid`, `displayName`, `role`, `photoUrl`, `language`, `isActive`, `createdAt`, `updatedAt`).
   - Sensitive PII (`email`, `phone`, `dob`, `gender`, `address`, `paymentMethod`, `upiId`) is isolated in `users/{userId}/private/info` and readable/writable only by `isOwner(userId)` or `isAdmin()`.
4. **Privilege Escalation Prevention**:
   - Users cannot self-assign `role == 'admin'` during profile creation.
   - Non-admins cannot change `role`, `isActive`, or `uid` on update.
   - `isAdmin()` verifies either `/admins/$(request.auth.uid)` exists OR verified bootstrapped admin email (`beraanimesh008@gmail.com` with `email_verified == true`).
5. **Relational & Master Gate Integrity**:
   - `restaurants/{restaurantId}/menu/{foodId}` verifies parent `/restaurants/$(restaurantId)` exists (`exists()`) and `ownerUid == get(...).data.ownerUid`.
   - `orders/{orderId}` verifies parent restaurant exists (`exists()`) and `customerUid == request.auth.uid`, initial `status == 'pending'`.
   - `orders/{orderId}/items/{itemId}` verifies parent `/orders/$(orderId)` exists and checks ownership (`customerUid` / `restaurantOwnerUid` / `deliveryPartnerUid`) via `get()`.
6. **Terminal State Locking & Action-Based Updates**:
   - Orders with `status` in `['delivered', 'cancelled']` cannot be modified by non-admins.
   - Updates split into explicit action branches (`affectedKeys().hasOnly(...)`) for customer cancellation, restaurant fulfillment, rider pickup/delivery, and admin override.
7. **Temporal Integrity**: `createdAt == request.time` on create; `updatedAt == request.time` on update; `createdAt` is immutable.
8. **Secure List Queries**: Every `allow list` rule evaluates `resource.data` directly (no `get()`/`exists()` inside `allow list`, no blanket `isSignedIn()` reads).

## 2. The "Dirty Dozen" Adversarial Payloads
1. **Shadow Field Injection (User Profile)**: `{ uid, displayName: "Test", role: "customer", language: "en", isActive: true, isAdmin: true, createdAt, updatedAt }` -> MUST FAIL (`hasOnly` blocks `isAdmin`).
2. **Self-Assigned Admin Role**: Creating `/users/{uid}` with `role: "admin"` as a regular user -> MUST FAIL (`role in ['customer', 'restaurant', 'delivery']`).
3. **Role Escalation Update**: Updating `/users/{uid}` with `{ role: "admin" }` -> MUST FAIL (`affectedKeys().hasOnly(['displayName', 'photoUrl', 'language', 'updatedAt'])`).
4. **Unverified Email Write**: Authenticated user with `email_verified: false` creating `/orders/{orderId}` -> MUST FAIL.
5. **Admin Email Spoofing**: Authenticated user with `email: "beraanimesh008@gmail.com"` and `email_verified: false` reading `/users/other/private/info` -> MUST FAIL.
6. **Cross-User PII Read**: Authenticated user A reading `/users/userB/private/info` -> MUST FAIL.
7. **ID Poisoning (1.5KB Junk ID)**: Creating `/orders/<200-char-id>` or `/orders/bad$id` -> MUST FAIL (`isValidId` rejects >128 chars or non-alphanumeric/`_`/`-`).
8. **Resource Exhaustion (Oversized String)**: Creating `/restaurants/{id}` with 5000-char `name` -> MUST FAIL (`name.size() <= 160`).
9. **Orphaned Order Creation**: Creating `/orders/{orderId}` referencing a non-existent `restaurantId` -> MUST FAIL (`exists()` check).
10. **Customer Spoofing Order Owner**: Creating `/orders/{orderId}` with `customerUid: "victimUid"` -> MUST FAIL (`customerUid == request.auth.uid`).
11. **Terminal State Tampering**: Updating an order whose existing `status == 'delivered'` back to `'pending'` as customer or restaurant -> MUST FAIL.
12. **Blanket Order List Query**: Executing un-filtered `getDocs(collection(db, 'orders'))` as non-admin -> MUST FAIL (`allow list` enforces `resource.data.customerUid == request.auth.uid || resource.data.restaurantOwnerUid == request.auth.uid || resource.data.deliveryPartnerUid == request.auth.uid`).
