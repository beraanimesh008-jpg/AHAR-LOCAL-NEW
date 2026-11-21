import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  collection,
  query,
  where,
  onSnapshot,
  writeBatch,
  Unsubscribe,
} from 'firebase/firestore';
import { User as FirebaseUser } from 'firebase/auth';
import {
  db,
  auth,
  OperationType,
  handleFirestoreError,
  BLUEPRINT_LIMITS,
  sanitizeStr,
  sanitizeId,
} from '../firebase';
import { UserRole } from '../types';

export interface FirestoreUserProfile {
  uid: string;
  displayName: string;
  role: UserRole;
  photoUrl?: string;
  language: 'en' | 'bn';
  isActive: boolean;
}

export interface FirestoreUserPrivateInfo {
  uid: string;
  email: string;
  phone?: string;
  dob?: string;
  gender?: 'Male' | 'Female' | 'Other' | 'Not specified';
  address?: string;
  paymentMethod?: 'upi' | 'bank' | 'cod';
  upiId?: string;
}

export interface FirestoreCartState {
  uid: string;
  restaurantId?: string;
  deliveryAddress: string;
  deliveryLat: number;
  deliveryLng: number;
}

export async function syncUserToFirestore(
  firebaseUser: FirebaseUser,
  role: UserRole = 'customer',
  extra?: Partial<FirestoreUserPrivateInfo> & { language?: 'en' | 'bn' }
): Promise<void> {
  if (!firebaseUser?.uid || !firebaseUser.emailVerified) return;

  const uid = sanitizeId(firebaseUser.uid);
  const publicPath = `users/${uid}`;
  const privatePath = `users/${uid}/private/info`;

  // Client cannot self-assign admin role during registration
  const safeRole: UserRole = role === 'admin' ? 'customer' : role;
  const displayName = sanitizeStr(firebaseUser.displayName || firebaseUser.email?.split('@')[0], BLUEPRINT_LIMITS.DISPLAY_NAME_MAX, 'User');
  const photoUrl = firebaseUser.photoURL ? sanitizeStr(firebaseUser.photoURL, BLUEPRINT_LIMITS.PHOTO_URL_MAX) : '';

  try {
    const publicRef = doc(db, 'users', uid);
    const existingSnap = await getDoc(publicRef);

    if (!existingSnap.exists()) {
      const publicPayload: Record<string, any> = {
        uid,
        displayName,
        role: safeRole,
        language: extra?.language === 'en' ? 'en' : 'bn',
        isActive: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };
      if (photoUrl) publicPayload.photoUrl = photoUrl;
      await setDoc(publicRef, publicPayload);
    } else {
      const updatePayload: Record<string, any> = {
        displayName,
        language: extra?.language === 'en' ? 'en' : 'bn',
        updatedAt: serverTimestamp(),
      };
      if (photoUrl) updatePayload.photoUrl = photoUrl;
      await setDoc(publicRef, updatePayload, { merge: true });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, publicPath);
  }

  try {
    const privateRef = doc(db, 'users', uid, 'private', 'info');
    const privatePayload: Record<string, any> = {
      uid,
      email: sanitizeStr(firebaseUser.email, BLUEPRINT_LIMITS.EMAIL_MAX),
      updatedAt: serverTimestamp(),
    };
    if (extra?.phone) privatePayload.phone = sanitizeStr(extra.phone, BLUEPRINT_LIMITS.PHONE_MAX);
    if (extra?.dob) privatePayload.dob = sanitizeStr(extra.dob, BLUEPRINT_LIMITS.DOB_MAX);
    if (extra?.gender) privatePayload.gender = extra.gender;
    if (extra?.address) privatePayload.address = sanitizeStr(extra.address, BLUEPRINT_LIMITS.ADDRESS_MAX);
    if (extra?.paymentMethod) privatePayload.paymentMethod = extra.paymentMethod;
    if (extra?.upiId) privatePayload.upiId = sanitizeStr(extra.upiId, BLUEPRINT_LIMITS.UPI_ID_MAX);

    await setDoc(privateRef, privatePayload, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, privatePath);
  }
}

export async function fetchUserProfileFromFirestore(uid: string): Promise<{
  publicProfile: FirestoreUserProfile | null;
  privateInfo: FirestoreUserPrivateInfo | null;
}> {
  const safeUid = sanitizeId(uid);
  const publicPath = `users/${safeUid}`;
  const privatePath = `users/${safeUid}/private/info`;

  let publicProfile: FirestoreUserProfile | null = null;
  let privateInfo: FirestoreUserPrivateInfo | null = null;

  try {
    const snap = await getDoc(doc(db, 'users', safeUid));
    if (snap.exists()) {
      publicProfile = snap.data() as FirestoreUserProfile;
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, publicPath);
  }

  try {
    const pSnap = await getDoc(doc(db, 'users', safeUid, 'private', 'info'));
    if (pSnap.exists()) {
      privateInfo = pSnap.data() as FirestoreUserPrivateInfo;
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, privatePath);
  }

  return { publicProfile, privateInfo };
}

export async function saveCartLocationToFirestore(
  uid: string,
  cartState: Omit<FirestoreCartState, 'uid'>
): Promise<void> {
  if (!auth.currentUser || !auth.currentUser.emailVerified) return;
  const safeUid = sanitizeId(uid);
  const path = `users/${safeUid}/private/cart`;

  try {
    const payload: Record<string, any> = {
      uid: safeUid,
      deliveryAddress: sanitizeStr(cartState.deliveryAddress, BLUEPRINT_LIMITS.ADDRESS_MAX, 'Kolkata'),
      deliveryLat: Number(cartState.deliveryLat) || 22.5429,
      deliveryLng: Number(cartState.deliveryLng) || 88.3653,
      updatedAt: serverTimestamp(),
    };
    if (cartState.restaurantId) {
      payload.restaurantId = sanitizeId(cartState.restaurantId);
    }
    await setDoc(doc(db, 'users', safeUid, 'private', 'cart'), payload, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function fetchCartLocationFromFirestore(uid: string): Promise<FirestoreCartState | null> {
  if (!auth.currentUser) return null;
  const safeUid = sanitizeId(uid);
  const path = `users/${safeUid}/private/cart`;

  try {
    const snap = await getDoc(doc(db, 'users', safeUid, 'private', 'cart'));
    return snap.exists() ? (snap.data() as FirestoreCartState) : null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

export async function syncOrderToFirestore(params: {
  orderId: string | number;
  orderNumber: string;
  customerName: string;
  restaurantId: string | number;
  restaurantOwnerUid?: string;
  restaurantName: string;
  deliveryAddress: string;
  deliveryLat: number;
  deliveryLng: number;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  tax: number;
  grandTotal: number;
  paymentMethod: 'cod' | 'upi' | 'razorpay' | 'cashfree';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'cod';
  items: { foodId: string | number; foodName: string; price: number; quantity: number; totalPrice: number }[];
}): Promise<void> {
  const currentUser = auth.currentUser;
  if (!currentUser || !currentUser.emailVerified) return;

  const safeOrderId = sanitizeId(params.orderId);
  const safeRestId = sanitizeId(params.restaurantId);
  const customerUid = sanitizeId(currentUser.uid);
  const path = `orders/${safeOrderId}`;

  try {
    // Only write to Firestore orders collection if the restaurant doc exists in Firestore
    const restSnap = await getDoc(doc(db, 'restaurants', safeRestId));
    if (!restSnap.exists()) {
      return;
    }

    const restOwnerUid = sanitizeId(restSnap.data().ownerUid || params.restaurantOwnerUid || customerUid);
    const batch = writeBatch(db);

    const orderRef = doc(db, 'orders', safeOrderId);
    batch.set(orderRef, {
      id: safeOrderId,
      orderNumber: sanitizeStr(params.orderNumber, BLUEPRINT_LIMITS.ORDER_NUMBER_MAX, `ORD-${safeOrderId}`),
      customerUid,
      customerName: sanitizeStr(params.customerName, BLUEPRINT_LIMITS.DISPLAY_NAME_MAX, 'Customer'),
      restaurantId: safeRestId,
      restaurantOwnerUid: restOwnerUid,
      restaurantName: sanitizeStr(params.restaurantName, BLUEPRINT_LIMITS.RESTAURANT_NAME_MAX, 'Restaurant'),
      deliveryAddress: sanitizeStr(params.deliveryAddress, BLUEPRINT_LIMITS.ADDRESS_MAX, 'Kolkata'),
      deliveryLat: Number(params.deliveryLat) || 22.5429,
      deliveryLng: Number(params.deliveryLng) || 88.3653,
      subtotal: Math.max(0, Number(params.subtotal) || 0),
      deliveryFee: Math.max(0, Number(params.deliveryFee) || 0),
      discount: Math.max(0, Number(params.discount) || 0),
      tax: Math.max(0, Number(params.tax) || 0),
      grandTotal: Math.max(0, Number(params.grandTotal) || 0),
      paymentMethod: params.paymentMethod,
      paymentStatus: params.paymentStatus,
      status: 'pending',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    for (const item of params.items) {
      const safeItemId = sanitizeId(`item_${item.foodId}`);
      const itemRef = doc(db, 'orders', safeOrderId, 'items', safeItemId);
      batch.set(itemRef, {
        id: safeItemId,
        orderId: safeOrderId,
        customerUid,
        restaurantOwnerUid: restOwnerUid,
        foodId: sanitizeId(item.foodId),
        foodName: sanitizeStr(item.foodName, BLUEPRINT_LIMITS.RESTAURANT_NAME_MAX, 'Dish'),
        price: Math.max(0, Number(item.price) || 0),
        quantity: Math.max(1, Number(item.quantity) || 1),
        totalPrice: Math.max(0, Number(item.totalPrice) || 0),
        createdAt: serverTimestamp(),
      });
    }

    await batch.commit();
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export function subscribeToUserOrders(
  uid: string,
  role: UserRole,
  onOrders: (orders: any[]) => void
): Unsubscribe {
  const safeUid = sanitizeId(uid);
  const path = 'orders';
  const fieldName =
    role === 'restaurant'
      ? 'restaurantOwnerUid'
      : role === 'delivery'
      ? 'deliveryPartnerUid'
      : 'customerUid';

  const q = query(collection(db, path), where(fieldName, '==', safeUid));
  return onSnapshot(
    q,
    (snapshot) => {
      onOrders(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    },
    (error) => {
      handleFirestoreError(error, OperationType.LIST, path);
    }
  );
}

export function subscribeToUserNotifications(
  uid: string,
  onNotifications: (notifs: any[]) => void
): Unsubscribe {
  const safeUid = sanitizeId(uid);
  const path = 'notifications';
  const q = query(collection(db, path), where('userUid', '==', safeUid));
  return onSnapshot(
    q,
    (snapshot) => {
      onNotifications(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    },
    (error) => {
      handleFirestoreError(error, OperationType.LIST, path);
    }
  );
}
