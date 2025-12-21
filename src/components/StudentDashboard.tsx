import { UserRole } from '../App';
import { ArrowLeft, Trophy, Target, TrendingUp, BookOpen, Video, FileText, Award, Star, Clock, ChevronRight, Bell, User, Calendar, Play, Download, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Sidebar } from './ui/Sidebar';

interface StudentDashboardProps {
  onNavigate: (view: UserRole) => void;
  user: { id: string; name: string; role: UserRole };
}

export function StudentDashboard({ onNavigate, user }: StudentDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const performanceData = [
    { subject: 'Math', score: 85 },
    { subject: 'Science', score: 92 },
    { subject: 'English', score: 78 },
    { subject: 'Social', score: 88 },
    { subject: 'Hindi', score: 80 },
  ];

  const progressData = [
    { month: 'Jul', score: 75 },
    { month: 'Aug', score: 78 },
    { month: 'Sep', score: 82 },
    { month: 'Oct', score: 85 },
    { month: 'Nov', score: 87 },
  ];

  const olympiadLeaderboard = [
    { rank: 1, name: 'Arjun Patel', score: 98, state: 'Gujarat', badge: 'gold' },
    { rank: 2, name: 'Priya Sharma', score: 96, state: 'Karnataka', badge: 'silver' },
    { rank: 3, name: 'Rohan Kumar', score: 95, state: 'Maharashtra', badge: 'bronze' },
    { rank: 124, name: 'Aarav Sharma (You)', score: 85, state: 'Karnataka', badge: 'participant', isUser: true },
  ];

  const upcomingOlympiads = [
    {
      title: 'National Mathematics Olympiad',
      date: '15th Dec 2025',
      time: '10:00 AM',
      level: 'State Level',
      registered: true,
      countdown: '18 days',
    },
    {
      title: 'Science Olympiad',
      date: '22nd Dec 2025',
      time: '2:00 PM',
      level: 'National Level',
      registered: false,
      countdown: '25 days',
    },
  ];

  const learningResources = [
    {
      title: 'Advanced Algebra',
      type: 'Video Course',
      duration: '4 hours',
      progress: 60,
      image: 'https://images.unsplash.com/photo-1542725752-e9f7259b3881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBib29rcyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NDE3NzMzMXww&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      title: 'Physics Fundamentals',
      type: 'E-Book',
      duration: '250 pages',
      progress: 35,
      image: 'https://images.unsplash.com/photo-1572847748080-bac263fae977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjQyNjM3OTh8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
  ];

  const practiceTests = [
    { title: 'Math Practice Test 1', questions: 50, duration: '90 min', attempted: true, score: 42 },
    { title: 'Science Mock Test 2', questions: 40, duration: '60 min', attempted: false, score: null },
    { title: 'English Grammar Test', questions: 30, duration: '45 min', attempted: true, score: 26 },
  ];

  const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex">
      <Sidebar
        userRole={user?.role as 'student' || 'student'}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main content area */}
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => onNavigate('home')}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors lg:hidden"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-900">Student Portal</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Bell className="w-6 h-6 text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
                </button>
                <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-gray-900">{user?.name || 'Aarav Sharma'}</p>
                    <p className="text-gray-500 text-xs">Class 8-A</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Tabs - hidden on desktop when sidebar is available */}
        <div className="bg-white border-b border-gray-200 lg:hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: Target },
                { id: 'olympiad', label: 'Olympiad Zone', icon: Trophy },
                { id: 'learning', label: 'Learning', icon: BookOpen },
                { id: 'tests', label: 'Practice Tests', icon: FileText },
                { id: 'progress', label: 'My Progress', icon: TrendingUp },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-4 border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
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
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-600 rounded-3xl p-8 text-white">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h2 className="text-white mb-2">Welcome back, Aarav! 🎓</h2>
                  <p className="text-blue-100 mb-4">
                    Keep up the great work! You're in the top 15% of your class.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/20 px-4 py-2 rounded-full flex items-center space-x-2">
                      <Trophy className="w-4 h-4" />
                      <span>Rank: 124/1000</span>
                    </div>
                    <div className="bg-white/20 px-4 py-2 rounded-full flex items-center space-x-2">
                      <Star className="w-4 h-4" />
                      <span>850 Points</span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <Award className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-blue-600">Top 15%</span>
                </div>
                <p className="text-gray-900 mb-1">124</p>
                <p className="text-gray-500 text-sm">State Rank</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-blue-600">+12</span>
                </div>
                <p className="text-gray-900 mb-1">15</p>
                <p className="text-gray-500 text-sm">Tests Completed</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-blue-600">5 New</span>
                </div>
                <p className="text-gray-900 mb-1">12</p>
                <p className="text-gray-500 text-sm">Badges Earned</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 blue-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-blue-600">87%</span>
                </div>
                <p className="text-gray-900 mb-1">87%</p>
                <p className="text-gray-500 text-sm">Average Score</p>
              </div>
            </div>

            {/* Upcoming Olympiads */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-gray-900">Upcoming Olympiads</h3>
                </div>
                <button
                  onClick={() => setActiveTab('olympiad')}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {upcomingOlympiads.map((olympiad, index) => (
                  <div
                    key={index}
                    className={`border rounded-2xl p-6 transition-all ${
                      olympiad.registered
                        ? 'border-blue-200 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-gray-900">{olympiad.title}</h4>
                          {olympiad.registered && (
                            <CheckCircle className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{olympiad.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{olympiad.time}</span>
                          </div>
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                            {olympiad.level}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <p className="text-blue-600 text-sm">Starts in</p>
                          <p className="text-gray-900">{olympiad.countdown}</p>
                        </div>
                        {olympiad.registered ? (
                          <button className="px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                            Registered ✓
                          </button>
                        ) : (
                          <button className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all shadow-md">
                            Register Now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance & Learning Resources Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Subject Performance */}
              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <h3 className="text-gray-900 mb-6">Subject Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="score" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Learning Resources */}
              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-gray-900">Continue Learning</h3>
                  <button
                    onClick={() => setActiveTab('learning')}
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {learningResources.map((resource, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center space-x-4 p-4">
                        <ImageWithFallback
                          src={resource.image}
                          alt={resource.title}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="text-gray-900 mb-1">{resource.title}</h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                            {resource.type === 'Video Course' ? (
                              <Video className="w-4 h-4" />
                            ) : (
                              <BookOpen className="w-4 h-4" />
                            )}
                            <span>{resource.type}</span>
                            <span>•</span>
                            <span>{resource.duration}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-blue-500 rounded-full h-2 transition-all"
                              style={{ width: `${resource.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          <Play className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'olympiad' && (
          <div className="space-y-6">
            {/* Olympiad Header */}
            <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-500 rounded-3xl p-8 text-white">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-10 h-10 text-blue-500" />
                </div>
                <h2 className="text-white mb-2">Olympiad Zone</h2>
                <p className="text-blue-100">Compete with the best students across India!</p>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-gray-900">State Leaderboard - Mathematics</h3>
              </div>

              <div className="space-y-3">
                {olympiadLeaderboard.map((entry, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-5 rounded-xl transition-all ${
                      entry.isUser
                        ? 'bg-blue-50 border-2 border-blue-300'
                        : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        entry.badge === 'gold' ? 'bg-blue-400' :
                        entry.badge === 'silver' ? 'bg-gray-300' :
                        entry.badge === 'bronze' ? 'bg-blue-400' :
                        'bg-gray-200'
                      }`}>
                        {entry.rank <= 3 ? (
                          <Trophy className={`w-6 h-6 ${entry.badge === 'gold' || entry.badge === 'bronze' ? 'text-white' : 'text-gray-700'}`} />
                        ) : (
                          <span className="text-gray-700">#{entry.rank}</span>
                        )}
                      </div>
                      <div>
                        <p className={`${entry.isUser ? 'text-blue-700' : 'text-gray-900'}`}>
                          {entry.name}
                        </p>
                        <p className="text-gray-500 text-sm">{entry.state}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-900">{entry.score}/100</p>
                      <p className="text-gray-500 text-sm">Score</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scorecard Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900">Math Olympiad</p>
                    <p className="text-gray-500 text-sm">Your Score</p>
                  </div>
                </div>
                <p className="text-gray-900 mb-2">85/100</p>
                <p className="text-blue-600 text-sm">+5 from last attempt</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900">State Rank</p>
                    <p className="text-gray-500 text-sm">Karnataka</p>
                  </div>
                </div>
                <p className="text-gray-900 mb-2">#124</p>
                <p className="text-blue-600 text-sm">Top 15% students</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 blue-100 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900">Badges Earned</p>
                    <p className="text-gray-500 text-sm">This year</p>
                  </div>
                </div>
                <p className="text-gray-900 mb-2">12</p>
                <p className="text-blue-600 text-sm">3 more to gold level</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="space-y-6">
            {/* Progress Analytics */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <h3 className="text-gray-900 mb-6">Performance Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Subject Distribution */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <h3 className="text-gray-900 mb-6">Subject Score Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={performanceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry) => entry.subject}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="score"
                    >
                      {performanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <h3 className="text-gray-900 mb-6">Study Statistics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-8 h-8 text-blue-600" />
                      <div>
                        <p className="text-gray-900">Study Time</p>
                        <p className="text-gray-500 text-sm">This week</p>
                      </div>
                    </div>
                    <p className="text-blue-600">12.5 hrs</p>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-8 h-8 text-blue-600" />
                      <div>
                        <p className="text-gray-900">Resources Completed</p>
                        <p className="text-gray-500 text-sm">This month</p>
                      </div>
                    </div>
                    <p className="text-blue-600">8</p>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-8 h-8 text-blue-600" />
                      <div>
                        <p className="text-gray-900">Tests Taken</p>
                        <p className="text-gray-500 text-sm">This month</p>
                      </div>
                    </div>
                    <p className="text-blue-600">15</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tests' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <h3 className="text-gray-900 mb-6">Practice Tests</h3>
              
              <div className="space-y-4">
                {practiceTests.map((test, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-gray-900 mb-2">{test.title}</h4>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                          <span>{test.questions} Questions</span>
                          <span>•</span>
                          <span>{test.duration}</span>
                          {test.attempted && test.score && (
                            <>
                              <span>•</span>
                              <span className="text-blue-600">Score: {test.score}/{test.questions}</span>
                            </>
                          )}
                        </div>
                      </div>
                      {test.attempted ? (
                        <button className="px-6 py-2.5 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                          Review Answers
                        </button>
                      ) : (
                        <button className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all shadow-md">
                          Start Test
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40 lg:hidden">
        <div className="grid grid-cols-5 gap-1 px-2 py-2">
          {[
            { id: 'dashboard', icon: Target, label: 'Home' },
            { id: 'olympiad', icon: Trophy, label: 'Olympiad' },
            { id: 'learning', icon: BookOpen, label: 'Learn' },
            { id: 'tests', icon: FileText, label: 'Tests' },
            { id: 'progress', icon: TrendingUp, label: 'Progress' },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center py-2 rounded-xl transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-600'
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
