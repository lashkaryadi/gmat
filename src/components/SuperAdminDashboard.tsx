import { UserRole } from '../App';
import { ArrowLeft, Shield, Users, Building2, GraduationCap, ShoppingBag, TrendingUp, DollarSign, CheckCircle, AlertCircle, MapPin, Edit, Moon, Sun, Bell, User, Eye, FileText, Award, Ban, Search } from 'lucide-react';
import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SuperAdminDashboardProps {
  onNavigate: (view: UserRole) => void;
}

export function SuperAdminDashboard({ onNavigate }: SuperAdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);

  const platformStats = [
    { label: 'Institutions', value: 5124, growth: '+12%' },
    { label: 'Job Seekers', value: 52340, growth: '+18%' },
    { label: 'Students', value: 205678, growth: '+25%' },
    { label: 'Parents', value: 156234, growth: '+20%' },
    { label: 'Vendors', value: 1245, growth: '+8%' },
    { label: 'District Reps', value: 2487, growth: '+5%' },
  ];

  const revenueData = [
    { month: 'Jul', revenue: 850000 },
    { month: 'Aug', revenue: 920000 },
    { month: 'Sep', revenue: 1050000 },
    { month: 'Oct', revenue: 1180000 },
    { month: 'Nov', revenue: 1320000 },
  ];

  const userDistribution = [
    { name: 'Institutions', value: 5124, color: '#3b82f6' },
    { name: 'Job Seekers', value: 52340, color: '#10b981' },
    { name: 'Students', value: 205678, color: '#8b5cf6' },
    { name: 'Parents', value: 156234, color: '#06b6d4' },
    { name: 'Vendors', value: 1245, color: '#f97316' },
  ];

  const kycQueue = [
    {
      id: 'KYC-2025-1524',
      name: 'Delhi Public School',
      type: 'Institution',
      date: '27 Nov 2025',
      status: 'Pending',
      docs: 5,
    },
    {
      id: 'KYC-2025-1523',
      name: 'Priya Sharma',
      type: 'Job Seeker',
      date: '27 Nov 2025',
      status: 'Under Review',
      docs: 3,
    },
    {
      id: 'KYC-2025-1522',
      name: 'EduMart Supplies',
      type: 'Vendor',
      date: '26 Nov 2025',
      status: 'Pending',
      docs: 4,
    },
  ];

  const subscriptionRevenue = [
    {
      plan: 'Annual Plan',
      subscribers: 1245,
      revenue: '₹1,86,75,000',
      growth: '+15%',
    },
    {
      plan: 'Monthly Plan',
      subscribers: 2340,
      revenue: '₹35,10,000',
      growth: '+8%',
    },
    {
      plan: 'Free Trial',
      subscribers: 3456,
      revenue: '₹0',
      growth: '+12%',
    },
  ];

  const districtRepresentatives = [
    { state: 'Maharashtra', reps: 358, active: 342, revenue: '₹45,60,000' },
    { state: 'Karnataka', reps: 245, active: 238, revenue: '₹32,40,000' },
    { state: 'Gujarat', reps: 198, active: 185, revenue: '₹28,50,000' },
    { state: 'Tamil Nadu', reps: 287, active: 275, revenue: '₹38,20,000' },
    { state: 'West Bengal', reps: 234, active: 220, revenue: '₹29,80,000' },
  ];

  const olympiadStats = [
    { exam: 'Math Olympiad', registered: 45234, completed: 38456, avgScore: 72 },
    { exam: 'Science Olympiad', registered: 38567, completed: 31245, avgScore: 68 },
    { exam: 'English Olympiad', registered: 29345, completed: 24567, avgScore: 75 },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-40 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onNavigate('home')}
                className={`p-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-full transition-colors`}
              >
                <ArrowLeft className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className={darkMode ? 'text-white' : 'text-gray-900'}>Super Admin Portal</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-full transition-colors`}
              >
                {darkMode ? (
                  <Sun className="w-6 h-6 text-gray-300" />
                ) : (
                  <Moon className="w-6 h-6 text-gray-600" />
                )}
              </button>
              <button className={`relative p-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-full transition-colors`}>
                <Bell className={`w-6 h-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className={`flex items-center space-x-3 pl-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border-l`}>
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <p className={darkMode ? 'text-white' : 'text-gray-900'}>Admin</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
              { id: 'users', label: 'User Management', icon: Users },
              { id: 'kyc', label: 'KYC Verification', icon: CheckCircle },
              { id: 'reps', label: 'District Reps', icon: MapPin },
              { id: 'revenue', label: 'Revenue', icon: DollarSign },
              { id: 'olympiad', label: 'Olympiad', icon: Award },
              { id: 'cms', label: 'CMS', icon: Edit },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-4 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-red-600 text-red-600'
                      : `border-transparent ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`
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
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h2 className="text-white mb-2">Super Admin Dashboard</h2>
                  <p className="text-red-100">
                    Welcome! Platform has 420K+ active users across India.
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <Shield className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Global Statistics */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {platformStats.map((stat, index) => (
                <div key={index} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl p-6 shadow-md border`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${
                      index === 0 ? 'bg-blue-100' :
                      index === 1 ? 'bg-green-100' :
                      index === 2 ? 'bg-purple-100' :
                      index === 3 ? 'bg-cyan-100' :
                      index === 4 ? 'bg-orange-100' :
                      'bg-red-100'
                    } rounded-xl flex items-center justify-center`}>
                      {index === 0 && <Building2 className="w-6 h-6 text-blue-600" />}
                      {index === 1 && <Users className="w-6 h-6 text-green-600" />}
                      {index === 2 && <GraduationCap className="w-6 h-6 text-purple-600" />}
                      {index === 3 && <Users className="w-6 h-6 text-cyan-600" />}
                      {index === 4 && <ShoppingBag className="w-6 h-6 text-orange-600" />}
                      {index === 5 && <MapPin className="w-6 h-6 text-red-600" />}
                    </div>
                    <span className="text-green-600 text-sm">{stat.growth}</span>
                  </div>
                  <p className={`${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>{stat.value.toLocaleString()}</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Revenue Chart */}
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl p-8 shadow-md border`}>
              <h3 className={darkMode ? 'text-white mb-6' : 'text-gray-900 mb-6'}>Monthly Revenue</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="month" stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                  <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                  <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1f2937' : '#fff', border: 'none', borderRadius: '8px' }} />
                  <Line type="monotone" dataKey="revenue" stroke="#dc2626" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* User Distribution & India Map Placeholder */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* User Distribution */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl p-8 shadow-md border`}>
                <h3 className={`${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>User Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={userDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry) => entry.name}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {userDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1f2937' : '#fff', border: 'none', borderRadius: '8px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* India Map - District Representatives */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl p-8 shadow-md border`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={darkMode ? 'text-white' : 'text-gray-900'}>District Representatives Map</h3>
                  <span className={`px-4 py-2 rounded-full text-sm ${darkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-700'}`}>
                    2,487 Active Reps
                  </span>
                </div>
                
                {/* India Map Visual Representation */}
                <div className="relative h-64 bg-gradient-to-br from-orange-100 to-green-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                    <p className="text-gray-900 mb-2">India Coverage</p>
                    <p className="text-gray-600 text-sm">Representatives across 28 states and 8 UTs</p>
                  </div>
                  
                  {/* Scattered Map Pins */}
                  <div className="absolute top-8 left-12 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-16 right-20 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-12 left-24 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 right-16 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>

                <button
                  onClick={() => setActiveTab('reps')}
                  className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all shadow-md"
                >
                  View All Representatives
                </button>
              </div>
            </div>

            {/* KYC Queue & Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* KYC Verification Queue */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl p-8 shadow-md border`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={darkMode ? 'text-white' : 'text-gray-900'}>KYC Verification Queue</h3>
                  <button
                    onClick={() => setActiveTab('kyc')}
                    className="text-red-600 hover:text-red-700 transition-colors"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {kycQueue.map((item, index) => (
                    <div
                      key={index}
                      className={`border rounded-xl p-5 ${
                        darkMode ? 'border-gray-700 hover:border-red-500' : 'border-gray-200 hover:border-red-300'
                      } transition-colors`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className={darkMode ? 'text-white mb-1' : 'text-gray-900 mb-1'}>{item.name}</p>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.type} • {item.id}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          item.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-4">
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{item.docs} documents</span>
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-xs">
                            Approve
                          </button>
                          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-xs">
                            Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subscription Revenue */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl p-8 shadow-md border`}>
                <h3 className={`${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Subscription Revenue</h3>
                
                <div className="space-y-4">
                  {subscriptionRevenue.map((sub, index) => (
                    <div
                      key={index}
                      className={`p-5 rounded-xl ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className={darkMode ? 'text-white' : 'text-gray-900'}>{sub.plan}</h4>
                        <span className="text-green-600 text-sm">{sub.growth}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{sub.subscribers} subscribers</p>
                        </div>
                        <p className="text-red-600">{sub.revenue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reps' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className={`${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>District Representatives</h2>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>2,487 representatives across India</p>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl p-8 shadow-md border`}>
              <h3 className={`${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>State-wise Distribution</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`${darkMode ? 'border-gray-700' : 'border-gray-200'} border-b`}>
                      <th className={`text-left py-4 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>State</th>
                      <th className={`text-left py-4 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Total Reps</th>
                      <th className={`text-left py-4 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Active Reps</th>
                      <th className={`text-left py-4 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Revenue Generated</th>
                      <th className={`text-left py-4 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {districtRepresentatives.map((rep, index) => (
                      <tr key={index} className={`${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50'} border-b transition-colors`}>
                        <td className={`py-4 px-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{rep.state}</td>
                        <td className={`py-4 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{rep.reps}</td>
                        <td className={`py-4 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{rep.active}</td>
                        <td className="py-4 px-4 text-green-600">{rep.revenue}</td>
                        <td className="py-4 px-4">
                          <button className="text-red-600 hover:text-red-700 transition-colors">
                            View Details →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'kyc' && (
          <div className="space-y-6">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl p-8 shadow-md border`}>
              <h3 className={`${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>KYC Verification Queue</h3>
              
              <div className="space-y-4">
                {kycQueue.map((item, index) => (
                  <div
                    key={index}
                    className={`border rounded-2xl p-6 ${
                      darkMode ? 'border-gray-700' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className={darkMode ? 'text-white' : 'text-gray-900'}>{item.name}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            item.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        <div className={`flex items-center space-x-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <span>{item.type}</span>
                          <span>•</span>
                          <span>{item.id}</span>
                          <span>•</span>
                          <span>{item.docs} documents</span>
                          <span>•</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <button className="px-6 py-2.5 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                          <div className="flex items-center space-x-2">
                            <Eye className="w-4 h-4" />
                            <span>Review</span>
                          </div>
                        </button>
                        <button className="px-6 py-2.5 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                          Approve
                        </button>
                        <button className="px-6 py-2.5 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'olympiad' && (
          <div className="space-y-6">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl p-8 shadow-md border`}>
              <h3 className={`${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Olympiad Statistics</h3>
              
              <div className="space-y-4">
                {olympiadStats.map((olympiad, index) => (
                  <div
                    key={index}
                    className={`border rounded-xl p-6 ${
                      darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h4 className={`${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>{olympiad.exam}</h4>
                        <div className="grid grid-cols-3 gap-6">
                          <div>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Registered</p>
                            <p className={darkMode ? 'text-white' : 'text-gray-900'}>{olympiad.registered.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Completed</p>
                            <p className={darkMode ? 'text-white' : 'text-gray-900'}>{olympiad.completed.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Avg Score</p>
                            <p className="text-green-600">{olympiad.avgScore}%</p>
                          </div>
                        </div>
                      </div>
                      <button className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:from-red-600 hover:to-red-700 transition-all shadow-md">
                        Manage
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cms' && (
          <div className="space-y-6">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-3xl p-8 shadow-md border`}>
              <h3 className={`${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Content Management System</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className={darkMode ? 'text-white' : 'text-gray-900'}>Homepage Banners</h4>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>Manage hero banners and promotional content</p>
                  <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                    Edit Banners
                  </button>
                </div>

                <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className={darkMode ? 'text-white' : 'text-gray-900'}>Olympiad Content</h4>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>Manage exam questions and schedules</p>
                  <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors">
                    Manage Content
                  </button>
                </div>

                <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Edit className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className={darkMode ? 'text-white' : 'text-gray-900'}>Notifications</h4>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>Send platform-wide announcements</p>
                  <button className="w-full px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors">
                    Create Notification
                  </button>
                </div>

                <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className={darkMode ? 'text-white' : 'text-gray-900'}>Blog Posts</h4>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>Manage platform blog and articles</p>
                  <button className="w-full px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors">
                    Manage Blog
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
