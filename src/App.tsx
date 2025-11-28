import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { JobSeekerDashboard } from './components/JobSeekerDashboard';
import { InstitutionDashboard } from './components/InstitutionDashboard';
import { ParentDashboard } from './components/ParentDashboard';
import { StudentDashboard } from './components/StudentDashboard';
import { VendorDashboard } from './components/VendorDashboard';
import { SuperAdminDashboard } from './components/SuperAdminDashboard';

export type UserRole = 'home' | 'jobseeker' | 'institution' | 'parent' | 'student' | 'vendor' | 'admin';

export default function App() {
  const [currentView, setCurrentView] = useState<UserRole>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onNavigate={setCurrentView} />;
      case 'jobseeker':
        return <JobSeekerDashboard onNavigate={setCurrentView} />;
      case 'institution':
        return <InstitutionDashboard onNavigate={setCurrentView} />;
      case 'parent':
        return <ParentDashboard onNavigate={setCurrentView} />;
      case 'student':
        return <StudentDashboard onNavigate={setCurrentView} />;
      case 'vendor':
        return <VendorDashboard onNavigate={setCurrentView} />;
      case 'admin':
        return <SuperAdminDashboard onNavigate={setCurrentView} />;
      default:
        return <HomePage onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderView()}
    </div>
  );
}
