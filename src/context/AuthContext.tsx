import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User as FirebaseUser,
} from 'firebase/auth';
import { User, UserRole } from '../types';
import { apiRequest } from '../services/api';
import { auth, googleProvider } from '../firebase';
import {
  syncUserToFirestore,
  fetchUserProfileFromFirestore,
} from '../services/firestoreService';

interface AuthContextType {
  user: User | null;
  firebaseUser: FirebaseUser | null;
  isFirebaseReady: boolean;
  role: UserRole;
  token: string | null;
  isLoading: boolean;
  roleDetails: any;
  isAuthModalOpen: boolean;
  authModalRole: UserRole | null;
  openAuthModal: (initialRole?: UserRole) => void;
  closeAuthModal: () => void;
  switchPersona: (role: UserRole, email?: string) => Promise<void>;
  login: (emailOrPhone: string, pass: string) => Promise<void>;
  googleAuth: (
    googleEmail: string,
    googleName: string,
    googlePhoto: string,
    targetRole: UserRole,
    firebaseIdToken?: string
  ) => Promise<{ isNewUser: boolean; googleUser?: any }>;
  signInWithFirebaseGoogle: (
    targetRole: UserRole
  ) => Promise<{ isNewUser: boolean; googleUser?: any }>;
  registerRole: (formData: any) => Promise<void>;
  adminLogin: (usernameOrEmail: string, pass: string) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  firebaseUser: null,
  isFirebaseReady: false,
  role: 'customer',
  token: null,
  isLoading: true,
  roleDetails: null,
  isAuthModalOpen: false,
  authModalRole: null,
  openAuthModal: () => {},
  closeAuthModal: () => {},
  switchPersona: async () => {},
  login: async () => {},
  googleAuth: async () => ({ isNewUser: false }),
  signInWithFirebaseGoogle: async () => ({ isNewUser: false }),
  registerRole: async () => {},
  adminLogin: async () => {},
  logout: () => {},
  refreshUser: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('aharlocal_token'));
  const [role, setRole] = useState<UserRole>('customer');
  const [roleDetails, setRoleDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalRole, setAuthModalRole] = useState<UserRole | null>(null);

  const openAuthModal = (initialRole?: UserRole) => {
    setAuthModalRole(initialRole || null);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setAuthModalRole(null);
  };

  const refreshUser = async () => {
    try {
      if (!localStorage.getItem('aharlocal_token')) {
        if (import.meta.env.PROD) {
          setUser(null);
          setRole('customer');
          setRoleDetails(null);
          return;
        }
        await switchPersona('customer');
        return;
      }
      const data = await apiRequest('/api/auth/me');
      setUser(data.user);
      setRole(data.user.role);
      setRoleDetails(data.roleDetails);
    } catch {
      localStorage.removeItem('aharlocal_token');
      setToken(null);
      if (import.meta.env.PROD) {
        setUser(null);
        setRole('customer');
        setRoleDetails(null);
        return;
      }
      await switchPersona('customer');
    } finally {
      setIsLoading(false);
    }
  };

  const switchPersona = async (targetRole: UserRole, email?: string) => {
    setIsLoading(true);
    try {
      const data = await apiRequest('/api/auth/demo-switch', {
        method: 'POST',
        body: JSON.stringify({ role: targetRole, email }),
      });
      localStorage.setItem('aharlocal_token', data.token);
      setToken(data.token);
      setUser(data.user);
      setRole(data.user.role);
      setRoleDetails(data.roleDetails);
    } catch (err) {
      console.error('Switch persona error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (emailOrPhone: string, pass: string) => {
    setIsLoading(true);
    try {
      const data = await apiRequest('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ emailOrPhone, password: pass }),
      });
      localStorage.setItem('aharlocal_token', data.token);
      setToken(data.token);
      setUser(data.user);
      setRole(data.user.role);
      await refreshUser();
    } finally {
      setIsLoading(false);
    }
  };

  const googleAuth = async (
    googleEmail: string,
    googleName: string,
    googlePhoto: string,
    targetRole: UserRole,
    firebaseIdToken?: string
  ) => {
    setIsLoading(true);
    try {
      const res = await apiRequest('/api/auth/google-auth', {
        method: 'POST',
        body: JSON.stringify({
          googleEmail,
          googleName,
          googlePhoto,
          role: targetRole,
          firebaseIdToken,
        }),
      });

      if (!res.isNewUser && res.token) {
        localStorage.setItem('aharlocal_token', res.token);
        setToken(res.token);
        setUser(res.user);
        setRole(res.user.role);
        setRoleDetails(res.roleDetails);
        closeAuthModal();
        return { isNewUser: false };
      }

      return { isNewUser: true, googleUser: res.googleUser };
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithFirebaseGoogle = async (targetRole: UserRole) => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const fbUser = result.user;
      setFirebaseUser(fbUser);

      const firebaseIdToken = await fbUser.getIdToken();
      if (fbUser.emailVerified) {
        try {
          await syncUserToFirestore(fbUser, targetRole);
        } catch (fsErr) {
          console.warn('Firestore profile sync warning:', fsErr);
        }
      }

      return await googleAuth(
        fbUser.email || '',
        fbUser.displayName || fbUser.email?.split('@')[0] || 'User',
        fbUser.photoURL || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
        targetRole,
        firebaseIdToken
      );
    } finally {
      setIsLoading(false);
    }
  };

  const registerRole = async (formData: any) => {
    setIsLoading(true);
    try {
      const res = await apiRequest('/api/auth/register-role', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      if (res && res.token) {
        localStorage.setItem('aharlocal_token', res.token);
        setToken(res.token);
        setUser(res.user);
        setRole(res.user.role);
        setRoleDetails(res.roleDetails);

        if (auth.currentUser && auth.currentUser.emailVerified) {
          try {
            await syncUserToFirestore(auth.currentUser, formData.role, {
              phone: formData.phone,
              dob: formData.dob,
              gender: formData.gender,
              address: formData.address,
            });
          } catch (fsErr) {
            console.warn('Firestore registration sync warning:', fsErr);
          }
        }

        closeAuthModal();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const adminLogin = async (usernameOrEmail: string, pass: string) => {
    setIsLoading(true);
    try {
      const res = await apiRequest('/api/auth/admin-login', {
        method: 'POST',
        body: JSON.stringify({ usernameOrEmail, password: pass }),
      });
      if (res && res.token) {
        localStorage.setItem('aharlocal_token', res.token);
        setToken(res.token);
        setUser(res.user);
        setRole('admin');
        closeAuthModal();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    signOut(auth).catch(() => {});
    localStorage.removeItem('aharlocal_token');
    setToken(null);
    setUser(null);
    setRole('customer');
    setRoleDetails(null);
    openAuthModal('customer');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      setFirebaseUser(fbUser);
      setIsFirebaseReady(true);

      if (fbUser && fbUser.emailVerified) {
        try {
          await fetchUserProfileFromFirestore(fbUser.uid);
        } catch (err) {
          console.warn('Firestore initial profile read warning:', err);
        }
      }
    });

    refreshUser();
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        firebaseUser,
        isFirebaseReady,
        role,
        token,
        isLoading,
        roleDetails,
        isAuthModalOpen,
        authModalRole,
        openAuthModal,
        closeAuthModal,
        switchPersona,
        login,
        googleAuth,
        signInWithFirebaseGoogle,
        registerRole,
        adminLogin,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
