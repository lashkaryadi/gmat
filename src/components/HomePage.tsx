import { UserRole } from '../App';
import { GraduationCap, Briefcase, Users, School, ShoppingBag, BookOpen, Award, TrendingUp, MessageCircle, ChevronRight, Star, CheckCircle, Building2, UserCheck, Baby, Package } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import CountUp from 'react-countup';

interface HomePageProps {
  onNavigate: (view: UserRole) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const stakeholders = [
    {
      icon: Building2,
      title: 'Educational Institutions',
      description: 'Schools, Colleges & Universities',
      color: 'from-green-400 to-green-600',
      count: '5,000+',
    },
    {
      icon: UserCheck,
      title: 'Job Seekers',
      description: 'Teachers, Tutors, Principals & Staff',
      color: 'from-emerald-400 to-emerald-600',
      count: '50,000+',
    },
    {
      icon: GraduationCap,
      title: 'Students',
      description: 'Learning & Competition Platform',
      color: 'from-teal-400 to-teal-600',
      count: '2,00,000+',
    },
    {
      icon: Baby,
      title: 'Parents',
      description: 'Stay Connected with Schools',
      color: 'from-lime-400 to-lime-600',
      count: '1,50,000+',
    },
    {
      icon: Package,
      title: 'Vendors',
      description: 'Educational Products & Services',
      color: 'from-green-500 to-green-700',
      count: '1,000+',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Mathematics Teacher',
      image: 'https://images.unsplash.com/photo-1758797316117-8d133af25f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZWFjaGVyJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzY0MjYzNzk5fDA&ixlib=rb-4.1.0&q=80&w=400',
      text: 'I found my dream job within 2 weeks! The AI matching system really works.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'School Principal',
      image: 'https://images.unsplash.com/photo-1572847748080-bac263fae977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjQyNjM3OTh8MA&ixlib=rb-4.1.0&q=80&w=400',
      text: 'Hiring qualified teachers has never been easier. The platform is fantastic!',
      rating: 5,
    },
    {
      name: 'Anita Desai',
      role: 'Parent',
      image: 'https://images.unsplash.com/photo-1624434070018-4a74c7d91715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBwYXJlbnRzJTIwY2hpbGRyZW58ZW58MXx8fHwxNzY0MjYzODAwfDA&ixlib=rb-4.1.0&q=80&w=400',
      text: 'I stay updated with my child\'s school activities and Olympiad performance effortlessly.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-green-700">Get Me a Tutor</h1>
                <p className="text-gray-500 text-xs">Education Ecosystem Platform</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="#stakeholders" className="text-gray-700 hover:text-green-600 transition-colors">About Us</a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => onNavigate('admin')}
                className="hidden sm:block px-4 py-2 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors"
              >
                Admin
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition-all shadow-lg shadow-green-200">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-6">
                <span className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>India's Leading Education Ecosystem</span>
                </span>
              </div>
              
              <h1 className="text-gray-900 mb-6">
                Connecting India's Education Community
              </h1>
              <p className="text-gray-600 mb-8">
                A comprehensive platform bringing together Educational Institutions, Job Seekers, Students, Parents, and Vendors. Join over 4 lakh+ members in revolutionizing education in India.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => onNavigate('jobseeker')}
                  className="group px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Briefcase className="w-5 h-5" />
                    <span>Find Jobs</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                <button
                  onClick={() => onNavigate('institution')}
                  className="group px-6 py-4 bg-white border-2 border-green-600 text-green-600 rounded-2xl hover:bg-green-50 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Hire Talent</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                <button
                  onClick={() => onNavigate('student')}
                  className="group px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span>Olympiad</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                <button
                  onClick={() => onNavigate('parent')}
                  className="group px-6 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-2xl hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg shadow-teal-200 hover:shadow-xl hover:shadow-teal-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Baby className="w-5 h-5" />
                    <span>Parent Login</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>

              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Verified Profiles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>AI Matching</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-green-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1572847748080-bac263fae977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjQyNjM3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Indian Students in Classroom"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Job Success Rate</p>
                    <p className="text-green-700">95%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Active Users</p>
                    <p className="text-emerald-700">4L+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Counter Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="mb-2">
                <CountUp end={5000} duration={2.5} separator="," suffix="+" />
              </div>
              <p className="text-green-100">Institutions</p>
            </div>
            <div className="text-center text-white">
              <div className="mb-2">
                <CountUp end={50000} duration={2.5} separator="," suffix="+" />
              </div>
              <p className="text-green-100">Job Seekers</p>
            </div>
            <div className="text-center text-white">
              <div className="mb-2">
                <CountUp end={200000} duration={2.5} separator="," suffix="+" />
              </div>
              <p className="text-green-100">Students</p>
            </div>
            <div className="text-center text-white">
              <div className="mb-2">
                <CountUp end={1000} duration={2.5} separator="," suffix="+" />
              </div>
              <p className="text-green-100">Vendors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <section id="stakeholders" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Five Pillars of Our Ecosystem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connecting all stakeholders in the education sector for seamless collaboration and growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stakeholders.map((stakeholder, index) => {
              const Icon = stakeholder.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-green-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stakeholder.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{stakeholder.title}</h3>
                  <p className="text-gray-600 mb-4">{stakeholder.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-green-600">{stakeholder.count}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}

            {/* Vendor Card */}
            <div
              onClick={() => onNavigate('vendor')}
              className="group cursor-pointer bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-8 hover:border-green-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Become a Vendor</h3>
              <p className="text-gray-600 mb-4">Sell educational products & services</p>
              <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Why Choose Get Me a Tutor?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive features designed for every stakeholder in the education ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-3">AI-Powered Matching</h3>
              <p className="text-gray-600">Smart algorithms match the right talent with the right opportunities</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-gray-900 mb-3">Verified Profiles</h3>
              <p className="text-gray-600">All institutions and job seekers go through rigorous verification</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-gray-900 mb-3">Olympiad Platform</h3>
              <p className="text-gray-600">Comprehensive competitive exam preparation with analytics</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-lime-100 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-lime-600" />
              </div>
              <h3 className="text-gray-900 mb-3">Parent Connect</h3>
              <p className="text-gray-600">Stay updated with school activities, fees, and circulars</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <School className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-3">Institution Dashboard</h3>
              <p className="text-gray-600">Powerful tools for recruitment and candidate management</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <ShoppingBag className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-gray-900 mb-3">Vendor Marketplace</h3>
              <p className="text-gray-600">Access to quality educational products and services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of educators, institutions, and families across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-3xl p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Join India's Leading Education Ecosystem?</h2>
          <p className="text-green-100 mb-8">
            Join thousands of institutions, educators, students, and parents who trust Get Me a Tutor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('jobseeker')}
              className="px-8 py-4 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started Today
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-white">Get Me a Tutor</span>
              </div>
              <p className="text-gray-400 text-sm">Connecting India's education community</p>
            </div>
            
            <div>
              <h4 className="text-white mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Upload Resume</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Career Resources</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">For Institutions</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">Post Jobs</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Search Candidates</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Pricing Plans</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Get Me a Tutor. All rights reserved. Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
