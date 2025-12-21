import { useState, useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { JobSeekerDashboard } from './components/JobSeekerDashboard';
import { InstitutionDashboard } from './components/InstitutionDashboard';
import { ParentDashboard } from './components/ParentDashboard';
import { StudentDashboard } from './components/StudentDashboard';
import { SuperAdminDashboard } from './components/SuperAdminDashboard';
import { LoginForm } from './components/LoginForm';
import { SignupForm } from './components/SignupForm';
import { setToken, getToken, removeToken } from './api/jwt';
import { whoami } from './api/auth';

export type UserRole = 'home' | 'jobseeker' | 'institution' | 'parent' | 'student' | 'admin';

type AuthUser = { id: string; name: string; role: UserRole } | null;

export default function App() {
  const [currentView, setCurrentView] = useState<UserRole>('home');
  const [authUser, setAuthUser] = useState<AuthUser>(null);
  const [showAuth, setShowAuth] = useState<'login' | 'signup' | null>(null);
  const [loading, setLoading] = useState(true); // Track initial loading state

  // Check for existing token and verify it on app load
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const userData = await whoami();

        if (userData) {
          const userInfo = { id: userData.id, name: userData.name, role: userData.role as UserRole };
          setAuthUser(userInfo);
          setCurrentView(userData.role as UserRole);
        }
      } catch (error) {
        // Token is invalid/expired, it will be removed by the whoami function
        console.error('Token verification failed:', error);
      }

      setLoading(false);
    };

    initializeAuth();
  }, []);

  function handleLogin(token: string, user: any) {
    setToken(token);
    const userInfo = { id: user.id, name: user.name, role: user.role as UserRole };
    setAuthUser(userInfo);
    setShowAuth(null);
    setCurrentView(user.role as UserRole);
  }

  async function handleSignup(token: string, userId: string) {
    setToken(token);
    setShowAuth(null);
    try {
      // Get the full user data after signup using the token
      const userData = await whoami();
      if (userData) {
        const userInfo = { id: userData.id, name: userData.name, role: userData.role as UserRole };
        setAuthUser(userInfo);
        setCurrentView(userData.role as UserRole);
      }
    } catch (error) {
      console.error('Error fetching user data after signup:', error);
      setCurrentView('home');
    }
  }

  function handleLogout() {
    removeToken();
    setAuthUser(null);
    setCurrentView('home');
  }

  const renderView = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="text-lg">Loading...</div>
        </div>
      );
    }

    if (showAuth === 'login') {
      return <LoginForm onLogin={handleLogin} onNavigateHome={() => { setShowAuth(null); setCurrentView('home'); }} />;
    }
    if (showAuth === 'signup') {
      return <SignupForm onSignup={handleSignup} onNavigateHome={() => { setShowAuth(null); setCurrentView('home'); }} />;
    }
    if (authUser) {
      // Example: Route by role for now
      switch (authUser.role) {
        case 'jobseeker':
          return <JobSeekerDashboard onNavigate={setCurrentView} onLogout={handleLogout} user={authUser} />;
        case 'institution':
          return <InstitutionDashboard onNavigate={setCurrentView} onLogout={handleLogout} user={authUser} />;
        case 'parent':
          return <ParentDashboard onNavigate={setCurrentView} onLogout={handleLogout} user={authUser} />;
        case 'student':
          return <StudentDashboard onNavigate={setCurrentView} onLogout={handleLogout} user={authUser} />;
        case 'admin':
          return <SuperAdminDashboard onNavigate={setCurrentView} onLogout={handleLogout} user={authUser} />;
        default:
          return <HomePage onNavigate={setCurrentView} />;
      }
    }
    // If not logged in, show homepage with auth triggers
    return <HomePage onNavigate={setCurrentView} onShowLogin={() => setShowAuth('login')} onShowSignup={() => setShowAuth('signup')} />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderView()}
    </div>
  );
}

