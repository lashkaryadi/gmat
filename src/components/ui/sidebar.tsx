import React from 'react';
import { 
  Home, 
  Users, 
  Briefcase, 
  BookOpen, 
  Trophy, 
  Award, 
  DollarSign, 
  Calendar, 
  FileText, 
  MessageCircle,
  GraduationCap,
  Building2,
  Baby,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  userRole: 'jobseeker' | 'student' | 'parent' | 'institution' | 'vendor' | 'admin';
  activeTab?: string;
  onTabChange: (tab: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  userRole, 
  activeTab, 
  onTabChange,
  sidebarOpen,
  setSidebarOpen
}) => {
  // Define navigation items based on user role
  const getNavigationItems = () => {
    switch (userRole) {
      case 'jobseeker':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'jobs', label: 'Find Jobs', icon: Briefcase },
          { id: 'applications', label: 'Applications', icon: FileText },
          { id: 'profile', label: 'Profile', icon: Users },
          { id: 'courses', label: 'Courses', icon: BookOpen },
        ];
      case 'student':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'olympiad', label: 'Olympiad Zone', icon: Trophy },
          { id: 'learning', label: 'Learning', icon: BookOpen },
          { id: 'tests', label: 'Practice Tests', icon: FileText },
          { id: 'progress', label: 'My Progress', icon: Award },
        ];
      case 'parent':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'circulars', label: 'Circulars', icon: FileText },
          { id: 'olympiad', label: 'Olympiad', icon: Trophy },
          { id: 'fees', label: 'Fees', icon: DollarSign },
          { id: 'messages', label: 'Messages', icon: MessageCircle },
        ];
      case 'institution':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'browse', label: 'Browse Candidates', icon: Users },
          { id: 'jobs', label: 'My Jobs', icon: Briefcase },
          { id: 'subscription', label: 'Subscription', icon: Award },
        ];
      default:
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'browse', label: 'Browse', icon: Users },
          { id: 'profile', label: 'Profile', icon: Users },
        ];
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <>
      {/* Sidebar for desktop */}
      <div 
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
              {userRole === 'jobseeker' && <Briefcase className="w-6 h-6 text-white" />}
              {userRole === 'student' && <GraduationCap className="w-6 h-6 text-white" />}
              {userRole === 'parent' && <Baby className="w-6 h-6 text-white" />}
              {userRole === 'institution' && <Building2 className="w-6 h-6 text-white" />}
              {userRole === 'vendor' && <GraduationCap className="w-6 h-6 text-white" />}
              {userRole === 'admin' && <GraduationCap className="w-6 h-6 text-white" />}
            </div>
            <span className="text-gray-900 font-semibold capitalize">{userRole} Portal</span>
          </div>
        </div>

        <nav className="px-4 py-6">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onTabChange(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-4 text-white">
            <h4 className="font-medium mb-2">Need help?</h4>
            <p className="text-sm text-blue-100 mb-3">
              Our support team is here to assist you
            </p>
            <button className="w-full px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </>
  );
};