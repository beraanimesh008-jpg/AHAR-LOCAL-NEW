import React, { useState, useEffect } from 'react';
import { GoogleMapProvider } from './components/maps/GoogleMapProvider';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider, useCart } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/common/Header';
import { NotificationDrawer } from './components/common/NotificationDrawer';
import { CustomerView } from './components/customer/CustomerView';
import { RestaurantPanel } from './components/restaurant/RestaurantPanel';
import { DeliveryPartnerApp } from './components/delivery/DeliveryPartnerApp';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AppNotification } from './types';
import { apiRequest } from './services/api';
import { subscribeToUserNotifications } from './services/firestoreService';

const MainAppContent: React.FC = () => {
  const { role, user, token, firebaseUser, isFirebaseReady } = useAuth();
  const [quotaExceeded, setQuotaExceeded] = useState(false);
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  // Quota exceeded listener (Section 8 Case A of Google Maps Platform Skill)
  useEffect(() => {
    const handleQuota = () => setQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', handleQuota);
    return () => window.removeEventListener('gmp-quota-exceeded', handleQuota);
  }, []);

  const fetchNotifications = async () => {
    if (!token || !user) {
      setNotifications([]);
      return;
    }
    try {
      const data: AppNotification[] = await apiRequest('/api/notifications');
      setNotifications(data);
    } catch {
      // Ignore background notification fetch errors
    }
  };

  useEffect(() => {
    if (!token || !user) {
      setNotifications([]);
      return;
    }
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 8000);
    return () => clearInterval(interval);
  }, [user, token]);

  useEffect(() => {
    if (!isFirebaseReady || !firebaseUser || !firebaseUser.emailVerified) return;
    const unsubscribe = subscribeToUserNotifications(firebaseUser.uid, (fsNotifs) => {
      if (fsNotifs.length > 0) {
        setNotifications((prev) => {
          const existingIds = new Set(prev.map((n) => String(n.id)));
          const mapped: AppNotification[] = fsNotifs
            .filter((n) => !existingIds.has(String(n.id)))
            .map((n, idx) => ({
              id: Number(n.id) || Date.now() + idx,
              user_id: user?.id || 0,
              role: role,
              title: n.title || 'Update',
              title_bn: n.titleBn || n.title || 'আপডেট',
              message: n.message || '',
              message_bn: n.messageBn || n.message || '',
              type: n.type || 'order_status',
              is_read: n.isRead ? 1 : 0,
              created_at: new Date().toISOString(),
            }));
          return mapped.length > 0 ? [...mapped, ...prev] : prev;
        });
      }
    });
    return () => unsubscribe();
  }, [isFirebaseReady, firebaseUser, user?.id, role]);

  const handleMarkAsRead = async (id: number) => {
    try {
      await apiRequest(`/api/notifications/${id}/read`, { method: 'PUT' });
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, is_read: 1 } : n))
      );
    } catch (e) {
      console.error(e);
    }
  };

  const unreadCount = notifications.filter((n) => !n.is_read).length;

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 selection:bg-orange-500 selection:text-white">
      {/* Tier 2 In-App Quota Banner (Mandated by Google Maps Platform Skill) */}
      {quotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      {/* Main Top Header */}
      <Header
        unreadNotificationsCount={unreadCount}
        onOpenNotifications={() => setIsNotifOpen(true)}
      />

      {/* Main Role-Based Views */}
      <main className="flex-1">
        {role === 'customer' && <CustomerView />}
        {role === 'restaurant' && <RestaurantPanel />}
        {role === 'delivery' && <DeliveryPartnerApp />}
        {role === 'admin' && <AdminDashboard />}
      </main>

      {/* Notifications Drawer */}
      <NotificationDrawer
        isOpen={isNotifOpen}
        onClose={() => setIsNotifOpen(false)}
        notifications={notifications}
        onMarkAsRead={handleMarkAsRead}
      />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <CartProvider>
          <GoogleMapProvider>
            <MainAppContent />
          </GoogleMapProvider>
        </CartProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}
