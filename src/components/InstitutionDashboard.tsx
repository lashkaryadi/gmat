import type { UserRole } from '../App';
import {
  ArrowLeft,
  Building2,
  Users,
  Briefcase,
  Eye,
  UserCheck,
  TrendingUp,
  Plus,
  Search,
  Filter,
  MapPin,
  GraduationCap,
  Star,
  CheckCircle,
  Bell,
  User,
  FileText,
  DollarSign,
  Calendar,
  ChevronRight,
  Award
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface InstitutionDashboardProps {
  onNavigate: (view: UserRole) => void;
}

export function InstitutionDashboard({ onNavigate }: InstitutionDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showPostJob, setShowPostJob] = useState(false);

  const topMatches = [
    {
      name: 'Priya Sharma',
      role: 'Mathematics Teacher',
      experience: '8 years',
      education: 'M.Sc Mathematics, B.Ed',
      location: 'Bangalore, Karnataka',
      match: 95,
      verified: true,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Physics Teacher',
      experience: '12 years',
      education: 'M.Sc Physics, B.Ed',
      location: 'Bangalore, Karnataka',
      match: 92,
      verified: true,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Anita Desai',
      role: 'English Teacher',
      experience: '6 years',
      education: 'M.A English, B.Ed',
      location: 'Bangalore, Karnataka',
      match: 88,
      verified: true,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    },
  ];

  const activeJobs = [
    {
      title: 'Senior Mathematics Teacher',
      applications: 48,
      shortlisted: 12,
      posted: '2 weeks ago',
      status: 'Active',
    },
    {
      title: 'Physics Teacher (PGT)',
      applications: 32,
      shortlisted: 8,
      posted: '1 week ago',
      status: 'Active',
    },
    {
      title: 'Vice Principal',
      applications: 25,
      shortlisted: 6,
      posted: '3 weeks ago',
      status: 'Active',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onNavigate('home')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Go back to home"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-900">Get Me a Tutor</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowPostJob(true)}
                className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition-all shadow-md hidden md:flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Post Job</span>
              </button>
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
                  alt="Anita Desai"
                  className="w-10 h-10 rounded-full object-cover border-2 border-teal-200"
                />
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
              { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
              { id: 'browse', label: 'Browse Candidates', icon: Search },
              { id: 'jobs', label: 'My Jobs', icon: Briefcase },
              { id: 'subscription', label: 'Subscription', icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-4 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-green-600 text-green-600'
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
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h2 className="text-white mb-2">Welcome back, Delhi Public School!</h2>
                  <p className="text-blue-100">
                    You have 48 new applications and 3 upcoming interviews this week.
                  </p>
                </div>
                <button
                  onClick={() => setShowPostJob(true)}
                  className="px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Post New Job</span>
                </button>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-blue-600">+18%</span>
                </div>
                <p className="text-gray-900 mb-1">1,248</p>
                <p className="text-gray-500 text-sm">Profile Views</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-green-600">+8</span>
                </div>
                <p className="text-gray-900 mb-1">26</p>
                <p className="text-gray-500 text-sm">Shortlisted</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-purple-600">3 Active</span>
                </div>
                <p className="text-gray-900 mb-1">3</p>
                <p className="text-gray-500 text-sm">Active Jobs</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="text-orange-600">+12 New</span>
                </div>
                <p className="text-gray-900 mb-1">105</p>
                <p className="text-gray-500 text-sm">Total Applications</p>
              </div>
            </div>

            {/* AI Top Matches Section */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900">AI Top Matches</h3>
                    <p className="text-gray-500 text-sm">Candidates matching your requirements</p>
                  </div>
                </div>
                <button className="text-green-600 hover:text-green-700 transition-colors">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {topMatches.map((candidate, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl p-6 hover:border-green-300 hover:shadow-lg transition-all group"
                  >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                      <ImageWithFallback
                        src={candidate.image}
                        alt={candidate.name}
                        className="w-20 h-20 rounded-2xl object-cover"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="text-gray-900">{candidate.name}</h4>
                              {candidate.verified && (
                                <CheckCircle className="w-5 h-5 text-green-600" />
                              )}
                            </div>
                            <p className="text-gray-600">{candidate.role}</p>
                          </div>
                          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                            {candidate.match}% Match
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <GraduationCap className="w-4 h-4" />
                            <span>{candidate.education}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Award className="w-4 h-4" />
                            <span>{candidate.experience}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{candidate.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <button className="px-6 py-2.5 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors">
                          View Profile
                        </button>
                        <button className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition-all shadow-md group-hover:shadow-lg">
                          Shortlist
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Jobs Overview */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-gray-900">Active Job Postings</h3>
                <button
                  onClick={() => setActiveTab('jobs')}
                  className="text-green-600 hover:text-green-700 transition-colors"
                >
                  Manage All
                </button>
              </div>

              <div className="space-y-4">
                {activeJobs.map((job, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-6 hover:border-green-300 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-gray-900">{job.title}</h4>
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                            {job.status}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                          <span>{job.applications} Applications</span>
                          <span>•</span>
                          <span>{job.shortlisted} Shortlisted</span>
                          <span>•</span>
                          <span>Posted {job.posted}</span>
                        </div>
                      </div>
                      <button className="text-green-600 hover:text-green-700 transition-colors flex items-center space-x-1">
                        <span>View Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'browse' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name, role, or skills..."
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                  />
                </div>
                <button className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-green-500 hover:text-green-600 transition-colors flex items-center justify-center space-x-2">
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-md">
                  Search
                </button>
              </div>
            </div>

            {/* Candidate Database */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <h3 className="text-gray-900 mb-6">Candidate Database</h3>
              <div className="space-y-4">
                {topMatches.map((candidate, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl p-6 hover:border-green-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                      <ImageWithFallback
                        src={candidate.image}
                        alt={candidate.name}
                        className="w-20 h-20 rounded-2xl object-cover"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="text-gray-900">{candidate.name}</h4>
                          {candidate.verified && (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          )}
                        </div>
                        <p className="text-gray-600 mb-2">{candidate.role}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <GraduationCap className="w-4 h-4" />
                            <span>{candidate.education}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Award className="w-4 h-4" />
                            <span>{candidate.experience}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{candidate.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <button className="px-6 py-2.5 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors">
                          View Profile
                        </button>
                        <button className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition-all shadow-md">
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'subscription' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-gray-900 mb-4">Choose Your Plan</h2>
              <p className="text-gray-600">Select the perfect plan for your institution's hiring needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="bg-white rounded-3xl p-8 shadow-md border-2 border-gray-200 hover:border-gray-300 transition-colors">
                <div className="text-center mb-6">
                  <h3 className="text-gray-900 mb-2">Free Trial</h3>
                  <div className="mb-4">
                    <span className="text-gray-900">₹0</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600 text-sm">Perfect for trying out the platform</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>1 Job Posting</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Basic Candidate Search</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Email Support</span>
                  </li>
                </ul>

                <button className="w-full px-6 py-3 border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-50 transition-colors">
                  Start Free Trial
                </button>
              </div>

              {/* Annual Plan - Featured */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 shadow-xl transform scale-105 relative">
                <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 rounded-bl-2xl rounded-tr-2xl text-sm">
                  Most Popular
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-white mb-2">Annual Plan</h3>
                  <div className="mb-4">
                    <span className="text-white">₹15,000</span>
                    <span className="text-green-100">/year</span>
                  </div>
                  <p className="text-green-100 text-sm">Save ₹3,000 compared to monthly</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2 text-white">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span>Unlimited Job Postings</span>
                  </li>
                  <li className="flex items-center space-x-2 text-white">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span>Advanced AI Matching</span>
                  </li>
                  <li className="flex items-center space-x-2 text-white">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span>Full Database Access</span>
                  </li>
                  <li className="flex items-center space-x-2 text-white">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-center space-x-2 text-white">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span>Analytics Dashboard</span>
                  </li>
                  <li className="flex items-center space-x-2 text-white">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span>Featured Institution Badge</span>
                  </li>
                </ul>

                <button className="w-full px-6 py-3 bg-white text-green-600 rounded-xl hover:bg-gray-100 transition-colors">
                  Subscribe Now
                </button>
              </div>

              {/* Monthly Plan */}
              <div className="bg-white rounded-3xl p-8 shadow-md border-2 border-gray-200 hover:border-gray-300 transition-colors">
                <div className="text-center mb-6">
                  <h3 className="text-gray-900 mb-2">Monthly Plan</h3>
                  <div className="mb-4">
                    <span className="text-gray-900">₹1,500</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600 text-sm">Flexible monthly billing</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>5 Job Postings/month</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>AI Matching</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Database Access</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Email Support</span>
                  </li>
                </ul>

                <button className="w-full px-6 py-3 border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-50 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Post Job Modal */}
      {showPostJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
              <h3 className="text-gray-900">Post a New Job</h3>
              <button
                onClick={() => setShowPostJob(false)}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div>
                <label htmlFor="job-title" className="block text-gray-700 mb-2">Job Title</label>
                <input
                  id="job-title"
                  type="text"
                  placeholder="e.g. Senior Mathematics Teacher"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="department" className="block text-gray-700 mb-2">Department</label>
                <select 
                  id="department"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                >
                  <option>Teaching Staff</option>
                  <option>Administrative Staff</option>
                  <option>Management</option>
                  <option>Support Staff</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="employment-type" className="block text-gray-700 mb-2">Employment Type</label>
                  <select 
                    id="employment-type"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                  >
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience-required" className="block text-gray-700 mb-2">Experience Required</label>
                  <select 
                    id="experience-required"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                  >
                    <option>0-2 years</option>
                    <option>3-5 years</option>
                    <option>6-10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="salary-range" className="block text-gray-700 mb-2">Salary Range (₹)</label>
                  <input
                    id="salary-range"
                    type="text"
                    placeholder="e.g. 40,000 - 60,000"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-gray-700 mb-2">Location</label>
                  <input
                    id="location"
                    type="text"
                    placeholder="e.g. Bangalore, Karnataka"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="job-description" className="block text-gray-700 mb-2">Job Description</label>
                <textarea
                  id="job-description"
                  rows={6}
                  placeholder="Describe the role, responsibilities, and requirements..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none resize-none"
                ></textarea>
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  onClick={() => setShowPostJob(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-md">
                  Post Job
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40">
        <div className="grid grid-cols-4 gap-1 px-2 py-2">
          {[
            { id: 'dashboard', icon: TrendingUp, label: 'Home' },
            { id: 'browse', icon: Search, label: 'Browse' },
            { id: 'jobs', icon: Briefcase, label: 'Jobs' },
            { id: 'subscription', icon: Award, label: 'Plans' },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center py-2 rounded-xl transition-colors ${
                  activeTab === tab.id
                    ? 'bg-green-50 text-green-600'
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
