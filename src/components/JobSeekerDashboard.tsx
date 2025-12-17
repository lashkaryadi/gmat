import { UserRole } from '../App';
import { ArrowLeft, Briefcase, MapPin, Clock, Building2, TrendingUp, Upload, Award, CheckCircle, Filter, Search, Bell, User, FileText, GraduationCap, BookOpen, Star, DollarSign, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Sidebar } from '../components/ui/Sidebar';

interface JobSeekerDashboardProps {
  onNavigate: (view: UserRole) => void;
  onLogout: () => void;
  user: { id: string; name: string; role: UserRole };
}

export function JobSeekerDashboard({ onNavigate, onLogout, user }: JobSeekerDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const profileCompletion = 75;

  const aiRecommendedJobs = [
    {
      title: 'Senior Mathematics Teacher',
      school: 'Delhi Public School, Bangalore',
      location: 'Bangalore, Karnataka',
      salary: '₹45,000 - ₹60,000/month',
      type: 'Full-time',
      posted: '2 days ago',
      match: 95,
      verified: true,
    },
    {
      title: 'Physics Teacher (PGT)',
      school: 'Kendriya Vidyalaya, Mumbai',
      location: 'Mumbai, Maharashtra',
      salary: '₹40,000 - ₹55,000/month',
      type: 'Full-time',
      posted: '1 week ago',
      match: 92,
      verified: true,
    },
    {
      title: 'Primary School Teacher',
      school: 'The Heritage School, Kolkata',
      location: 'Kolkata, West Bengal',
      salary: '₹35,000 - ₹45,000/month',
      type: 'Full-time',
      posted: '3 days ago',
      match: 88,
      verified: true,
    },
    {
      title: 'Vice Principal',
      school: 'Modern Public School, Pune',
      location: 'Pune, Maharashtra',
      salary: '₹70,000 - ₹90,000/month',
      type: 'Full-time',
      posted: '5 days ago',
      match: 85,
      verified: true,
    },
  ];

  const upcomingInterviews = [
    {
      school: 'Ryan International School',
      position: 'English Teacher',
      date: '28 Nov 2025',
      time: '10:00 AM',
      mode: 'Video Call',
    },
    {
      school: 'Apeejay School',
      position: 'Chemistry Teacher',
      date: '30 Nov 2025',
      time: '2:00 PM',
      mode: 'In-Person',
    },
  ];

  const certifications = [
    { name: 'CTET Certified', verified: true },
    { name: 'B.Ed Degree', verified: true },
    { name: 'M.Sc Mathematics', verified: true },
    { name: 'Teaching Experience: 8 Years', verified: false },
  ];

  const courses = [
    {
      title: 'Advanced Teaching Methods',
      progress: 60,
      duration: '4 weeks',
      image: 'https://images.unsplash.com/photo-1542725752-e9f7259b3881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBib29rcyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NDE3NzMzMXww&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      title: 'Classroom Management Skills',
      progress: 30,
      duration: '3 weeks',
      image: 'https://images.unsplash.com/photo-1572847748080-bac263fae977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjQyNjM3OTh8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        userRole={user.role as 'jobseeker'}
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
                  aria-label="Go back to home"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-900">Get Me a Tutor</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="View notifications"
                >
                  <Bell className="w-6 h-6 text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face"
                  alt={user.name || "User"}
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-200"
                />
                <div className="hidden sm:block">
                  <p className="text-gray-900">{user.name || "User"}</p>
                  <p className="text-gray-500 text-xs">{user.role[0].toUpperCase() + user.role.slice(1)}</p>
                </div>
                <button className="ml-4 px-4 py-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition" onClick={onLogout}>Logout</button>
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
                { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
                { id: 'jobs', label: 'Find Jobs', icon: Search },
                { id: 'applications', label: 'Applications', icon: FileText },
                { id: 'profile', label: 'Profile', icon: User },
                { id: 'courses', label: 'Courses', icon: BookOpen },
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
            {/* Profile Completion Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex-1">
                  <h2 className="text-white mb-2">Complete Your Profile</h2>
                  <p className="text-blue-100 mb-4">
                    {profileCompletion}% complete - Add more details to get better job matches!
                  </p>
                  <div className="w-full bg-blue-700 rounded-full h-3 mb-4">
                    <div
                      className="bg-white rounded-full h-3 transition-all duration-500"
                      style={{ width: `${profileCompletion}%` }}
                    ></div>
                  </div>
                  <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-200">
                    Complete Profile
                  </button>
                </div>
                <div className="hidden md:block">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-blue-600">+12%</span>
                </div>
                <p className="text-gray-900 mb-1">48</p>
                <p className="text-gray-500 text-sm">Matched Jobs</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-blue-600">+5</span>
                </div>
                <p className="text-gray-900 mb-1">12</p>
                <p className="text-gray-500 text-sm">Applications</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-blue-600">2 New</span>
                </div>
                <p className="text-gray-900 mb-1">2</p>
                <p className="text-gray-500 text-sm">Interviews</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-blue-600">Top 5%</span>
                </div>
                <p className="text-gray-900 mb-1">850</p>
                <p className="text-gray-500 text-sm">Profile Views</p>
              </div>
            </div>

            {/* AI Recommended Jobs */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900">AI Recommended Jobs</h3>
                    <p className="text-gray-500 text-sm">Jobs matching your profile and preferences</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 transition-colors">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {aiRecommendedJobs.map((job, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="text-gray-900">{job.title}</h4>
                              {job.verified && (
                                <CheckCircle className="w-5 h-5 text-blue-600" />
                              )}
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600 mb-2">
                              <Building2 className="w-4 h-4" />
                              <span>{job.school}</span>
                            </div>
                          </div>
                          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                            {job.match}% Match
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="w-4 h-4" />
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{job.posted}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <button className="px-6 py-2.5 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                          Save
                        </button>
                        <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full transition-all shadow-md group-hover:shadow-lg">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Interviews & Certifications */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Upcoming Interviews */}
              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900">Upcoming Interviews</h3>
                </div>

                <div className="space-y-4">
                  {upcomingInterviews.map((interview, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-gray-900 mb-1">{interview.school}</p>
                          <p className="text-gray-600 text-sm">{interview.position}</p>
                        </div>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                          {interview.mode}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{interview.date} • {interview.time}</span>
                        <button className="text-blue-600 hover:text-blue-700 transition-colors">
                          Details →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-colors">
                  View All Interviews
                </button>
              </div>

              {/* Certifications & Badges */}
              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900">Certifications & Badges</h3>
                </div>

                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="flex items-center space-x-3">
                        {cert.verified ? (
                          <CheckCircle className="w-5 h-5 text-blue-600" />
                        ) : (
                          <Clock className="w-5 h-5 text-blue-600" />
                        )}
                        <span className="text-gray-900">{cert.name}</span>
                      </div>
                      {cert.verified ? (
                        <span className="text-blue-600 text-sm">Verified</span>
                      ) : (
                        <button className="text-blue-600 text-sm hover:text-blue-700 transition-colors">
                          Verify
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-md">
                  <div className="flex items-center justify-center space-x-2">
                    <Upload className="w-4 h-4" />
                    <span>Add Certificate</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <h3 className="text-gray-900 mb-6">My Learning Courses</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all"
                  >
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-gray-900 mb-2">{course.title}</h4>
                      <p className="text-gray-600 text-sm mb-4">Duration: {course.duration}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-gray-600">Progress</span>
                          <span className="text-blue-600">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-full h-2 transition-all"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all">
                        Continue Learning
                      </button>
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
            { id: 'dashboard', icon: TrendingUp, label: 'Home' },
            { id: 'jobs', icon: Search, label: 'Jobs' },
            { id: 'applications', icon: FileText, label: 'Applied' },
            { id: 'courses', icon: BookOpen, label: 'Courses' },
            { id: 'profile', icon: User, label: 'Profile' },
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
