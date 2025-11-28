import { UserRole } from '../App';
import { ArrowLeft, Bell, User, Calendar, DollarSign, MessageCircle, FileText, Award, School, Baby, CheckCircle, Clock, AlertCircle, ChevronRight, Mail, Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface ParentDashboardProps {
  onNavigate: (view: UserRole) => void;
}

export function ParentDashboard({ onNavigate }: ParentDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');

  const circulars = [
    {
      title: 'Annual Day Celebration - 15th December',
      school: 'Delhi Public School',
      date: '25 Nov 2025',
      priority: 'high',
      read: false,
    },
    {
      title: 'Parent-Teacher Meeting Schedule',
      school: 'Delhi Public School',
      date: '24 Nov 2025',
      priority: 'medium',
      read: false,
    },
    {
      title: 'Winter Break Holiday Notice',
      school: 'Delhi Public School',
      date: '20 Nov 2025',
      priority: 'low',
      read: true,
    },
  ];

  const olympiadUpdates = [
    {
      title: 'Math Olympiad Registration Open',
      date: '1st Dec 2025',
      description: 'Registration for National Mathematics Olympiad is now open',
      status: 'Open',
    },
    {
      title: 'Science Olympiad Results',
      date: '15th Nov 2025',
      description: 'Your child scored 85/100 - Rank 124 State Level',
      status: 'Completed',
    },
  ];

  const feeReminders = [
    {
      title: 'Term 2 Fees - Due Soon',
      amount: '₹25,000',
      dueDate: '5th Dec 2025',
      status: 'Pending',
    },
    {
      title: 'Library Fee',
      amount: '₹2,500',
      dueDate: '10th Dec 2025',
      status: 'Pending',
    },
  ];

  const schoolEvents = [
    {
      title: 'Annual Sports Day',
      date: '8th Dec 2025',
      time: '9:00 AM',
      location: 'School Playground',
    },
    {
      title: 'Science Exhibition',
      date: '12th Dec 2025',
      time: '2:00 PM',
      location: 'Science Lab',
    },
  ];

  const children = [
    {
      name: 'Aarav Sharma',
      class: 'Class 8-A',
      rollNo: '15',
      image: 'https://images.unsplash.com/photo-1623303366639-0e330d7c3d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzdHVkZW50JTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzY0MjYzODAxfDA&ixlib=rb-4.1.0&q=80&w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onNavigate('home')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <Baby className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-900">Parent Portal</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-gray-900">Anita Desai</p>
                  <p className="text-gray-500 text-xs">Parent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: School },
              { id: 'circulars', label: 'Circulars', icon: FileText },
              { id: 'olympiad', label: 'Olympiad', icon: Award },
              { id: 'fees', label: 'Fees', icon: DollarSign },
              { id: 'messages', label: 'Messages', icon: MessageCircle },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-4 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-teal-600 text-teal-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Welcome Banner with Child Info */}
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl p-8 text-white">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <ImageWithFallback
                  src={children[0].image}
                  alt={children[0].name}
                  className="w-24 h-24 rounded-2xl object-cover border-4 border-white/30"
                />
                <div className="flex-1">
                  <h2 className="text-white mb-2">Welcome, Anita!</h2>
                  <p className="text-teal-100 mb-4">
                    Stay updated with {children[0].name}'s school activities and performance
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="bg-white/20 px-4 py-2 rounded-full">
                      {children[0].class}
                    </div>
                    <div className="bg-white/20 px-4 py-2 rounded-full">
                      Roll No: {children[0].rollNo}
                    </div>
                    <div className="bg-white/20 px-4 py-2 rounded-full">
                      Delhi Public School
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">2 New</span>
                </div>
                <p className="text-gray-900 mb-1">5</p>
                <p className="text-gray-500 text-sm">Unread Circulars</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs">Due</span>
                </div>
                <p className="text-gray-900 mb-1">₹27,500</p>
                <p className="text-gray-500 text-sm">Pending Fees</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">Soon</span>
                </div>
                <p className="text-gray-900 mb-1">2</p>
                <p className="text-gray-500 text-sm">Upcoming Events</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">Active</span>
                </div>
                <p className="text-gray-900 mb-1">3</p>
                <p className="text-gray-500 text-sm">Olympiad Registered</p>
              </div>
            </div>

            {/* Recent Circulars & Notices */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-gray-900">Recent Circulars & Notices</h3>
                </div>
                <button
                  onClick={() => setActiveTab('circulars')}
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {circulars.slice(0, 3).map((circular, index) => (
                  <div
                    key={index}
                    className={`border rounded-2xl p-6 transition-all ${
                      circular.read
                        ? 'border-gray-200 bg-gray-50'
                        : 'border-teal-200 bg-teal-50 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-gray-900">{circular.title}</h4>
                          {!circular.read && (
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <School className="w-4 h-4" />
                            <span>{circular.school}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{circular.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {circular.priority === 'high' && (
                          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">
                            Important
                          </span>
                        )}
                        <button className="text-teal-600 hover:text-teal-700 transition-colors">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fee Reminders & Events Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Fee Reminders */}
              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="text-gray-900">Fee Reminders</h3>
                </div>

                <div className="space-y-4">
                  {feeReminders.map((fee, index) => (
                    <div
                      key={index}
                      className="border border-orange-200 bg-orange-50 rounded-xl p-5"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-gray-900 mb-1">{fee.title}</p>
                          <p className="text-orange-600">{fee.amount}</p>
                        </div>
                        <AlertCircle className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Due: {fee.dueDate}</span>
                        <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                          Pay Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-orange-300 hover:text-orange-600 transition-colors">
                  View Payment History
                </button>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900">Upcoming School Events</h3>
                </div>

                <div className="space-y-4">
                  {schoolEvents.map((event, index) => (
                    <div
                      key={index}
                      className="border border-blue-200 bg-blue-50 rounded-xl p-5"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-gray-900 mb-2">{event.title}</p>
                          <div className="flex flex-col space-y-1 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-colors">
                  View School Calendar
                </button>
              </div>
            </div>

            {/* Olympiad Updates */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-gray-900">Olympiad Updates</h3>
                </div>
                <button
                  onClick={() => setActiveTab('olympiad')}
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {olympiadUpdates.map((update, index) => (
                  <div
                    key={index}
                    className="border border-green-200 bg-green-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-gray-900">{update.title}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            update.status === 'Open'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {update.status}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">{update.description}</p>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>{update.date}</span>
                        </div>
                      </div>
                      {update.status === 'Open' && (
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                          Register
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <h3 className="text-gray-900 mb-6">Messages with School</h3>
              
              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-xl p-4 hover:border-teal-300 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <School className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-gray-900">Class Teacher - Ms. Priya</p>
                        <span className="text-gray-500 text-sm">2 hours ago</span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Regarding Aarav's performance in recent tests. Please schedule a meeting.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-gray-900">You</p>
                        <span className="text-gray-500 text-sm">1 day ago</span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Thank you for the update. I will visit the school tomorrow at 3 PM.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all shadow-md">
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40">
        <div className="grid grid-cols-5 gap-1 px-2 py-2">
          {[
            { id: 'dashboard', icon: School, label: 'Home' },
            { id: 'circulars', icon: FileText, label: 'Notices' },
            { id: 'olympiad', icon: Award, label: 'Olympiad' },
            { id: 'fees', icon: DollarSign, label: 'Fees' },
            { id: 'messages', icon: MessageCircle, label: 'Messages' },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center py-2 rounded-xl transition-colors ${
                  activeTab === tab.id
                    ? 'bg-teal-50 text-teal-600'
                    : 'text-gray-600'
                }`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
