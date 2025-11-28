import { UserRole } from '../App';
import { ArrowLeft, ShoppingBag, Package, TrendingUp, DollarSign, Upload, Star, Eye, ShoppingCart, BookOpen, Plus, Bell, User, Filter, Search, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface VendorDashboardProps {
  onNavigate: (view: UserRole) => void;
}

export function VendorDashboard({ onNavigate }: VendorDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddProduct, setShowAddProduct] = useState(false);

  const salesData = [
    { month: 'Jul', sales: 45000 },
    { month: 'Aug', sales: 52000 },
    { month: 'Sep', sales: 48000 },
    { month: 'Oct', sales: 65000 },
    { month: 'Nov', sales: 72000 },
  ];

  const products = [
    {
      name: 'Complete Mathematics Kit',
      category: 'Study Material',
      price: '₹1,299',
      sold: 145,
      rating: 4.8,
      stock: 50,
      image: 'https://images.unsplash.com/photo-1542725752-e9f7259b3881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBib29rcyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NDE3NzMzMXww&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      name: 'Science Lab Equipment Set',
      category: 'Lab Equipment',
      price: '₹3,499',
      sold: 89,
      rating: 4.6,
      stock: 25,
      image: 'https://images.unsplash.com/photo-1572847748080-bac263fae977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjQyNjM3OTh8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      name: 'English Grammar Workbook',
      category: 'Books',
      price: '₹499',
      sold: 234,
      rating: 4.9,
      stock: 120,
      image: 'https://images.unsplash.com/photo-1542725752-e9f7259b3881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBib29rcyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NDE3NzMzMXww&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      name: 'Olympiad Preparation Bundle',
      category: 'Study Material',
      price: '₹2,199',
      sold: 167,
      rating: 4.7,
      stock: 75,
      image: 'https://images.unsplash.com/photo-1558574555-f50ad3eea6d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBsaWJyYXJ5JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzY0MjYzNzk5fDA&ixlib=rb-4.1.0&q=80&w=400',
    },
  ];

  const recentOrders = [
    {
      orderId: '#ORD-2025-1524',
      product: 'Complete Mathematics Kit',
      customer: 'Delhi Public School',
      quantity: 15,
      amount: '₹19,485',
      status: 'Delivered',
      date: '25 Nov 2025',
    },
    {
      orderId: '#ORD-2025-1523',
      product: 'Science Lab Equipment Set',
      customer: 'Modern Public School',
      quantity: 5,
      amount: '₹17,495',
      status: 'Processing',
      date: '24 Nov 2025',
    },
    {
      orderId: '#ORD-2025-1522',
      product: 'English Grammar Workbook',
      customer: 'Ryan International',
      quantity: 50,
      amount: '₹24,950',
      status: 'Shipped',
      date: '23 Nov 2025',
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
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-900">Vendor Portal</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowAddProduct(true)}
                className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hidden md:flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Product</span>
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-gray-900">EduMart Supplies</p>
                  <p className="text-gray-500 text-xs">Verified Vendor</p>
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
              { id: 'products', label: 'My Products', icon: Package },
              { id: 'orders', label: 'Orders', icon: ShoppingCart },
              { id: 'analytics', label: 'Analytics', icon: BarChart },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-4 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-orange-600 text-orange-600'
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
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 text-white">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h2 className="text-white mb-2">Welcome, EduMart Supplies! 🛍️</h2>
                  <p className="text-orange-100">
                    You have 12 new orders and ₹72,000 in sales this month.
                  </p>
                </div>
                <button
                  onClick={() => setShowAddProduct(true)}
                  className="px-6 py-3 bg-white text-orange-600 rounded-full hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add New Product</span>
                </button>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-green-600">+12%</span>
                </div>
                <p className="text-gray-900 mb-1">₹72,000</p>
                <p className="text-gray-500 text-sm">Monthly Revenue</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-blue-600">+8</span>
                </div>
                <p className="text-gray-900 mb-1">48</p>
                <p className="text-gray-500 text-sm">Total Orders</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-purple-600">12 Active</span>
                </div>
                <p className="text-gray-900 mb-1">24</p>
                <p className="text-gray-500 text-sm">Products Listed</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <span className="text-yellow-600">4.8/5</span>
                </div>
                <p className="text-gray-900 mb-1">4.8</p>
                <p className="text-gray-500 text-sm">Average Rating</p>
              </div>
            </div>

            {/* Sales Chart */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <h3 className="text-gray-900 mb-6">Sales Overview</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="sales" stroke="#f97316" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Top Products & Recent Orders */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Top Products */}
              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-gray-900">Top Selling Products</h3>
                  <button
                    onClick={() => setActiveTab('products')}
                    className="text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {products.slice(0, 3).map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors"
                    >
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-gray-900">{product.name}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <span>{product.sold} sold</span>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span>{product.rating}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-orange-600">{product.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-gray-900">Recent Orders</h3>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className="text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {recentOrders.map((order, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-gray-900 mb-1">{order.orderId}</p>
                          <p className="text-gray-600 text-sm">{order.customer}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{order.date}</span>
                        <span className="text-orange-600">{order.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="space-y-6">
            {/* Products Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-gray-900 mb-2">My Products</h2>
                <p className="text-gray-600">Manage your product catalog</p>
              </div>
              <button
                onClick={() => setShowAddProduct(true)}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-md flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>Add Product</span>
              </button>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all group"
                >
                  <div className="relative">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-gray-900">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-gray-900 flex-1">{product.name}</h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{product.category}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-orange-600">{product.price}</p>
                      <div className="text-sm text-gray-600">
                        Stock: {product.stock}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span>{product.sold} sold</span>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>248 views</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 px-4 py-2 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors">
                        Edit
                      </button>
                      <button className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                        View Stats
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <h3 className="text-gray-900 mb-6">All Orders</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-gray-700">Order ID</th>
                      <th className="text-left py-4 px-4 text-gray-700">Product</th>
                      <th className="text-left py-4 px-4 text-gray-700">Customer</th>
                      <th className="text-left py-4 px-4 text-gray-700">Quantity</th>
                      <th className="text-left py-4 px-4 text-gray-700">Amount</th>
                      <th className="text-left py-4 px-4 text-gray-700">Status</th>
                      <th className="text-left py-4 px-4 text-gray-700">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4 text-gray-900">{order.orderId}</td>
                        <td className="py-4 px-4 text-gray-900">{order.product}</td>
                        <td className="py-4 px-4 text-gray-600">{order.customer}</td>
                        <td className="py-4 px-4 text-gray-600">{order.quantity}</td>
                        <td className="py-4 px-4 text-orange-600">{order.amount}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-600">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add Product Modal */}
      {showAddProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between rounded-t-3xl">
              <h3 className="text-gray-900">Add New Product</h3>
              <button
                onClick={() => setShowAddProduct(false)}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  placeholder="e.g. Complete Mathematics Kit"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Category</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none">
                    <option>Study Material</option>
                    <option>Books</option>
                    <option>Lab Equipment</option>
                    <option>Stationery</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Price (₹)</label>
                  <input
                    type="text"
                    placeholder="e.g. 1,299"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Stock Quantity</label>
                <input
                  type="number"
                  placeholder="e.g. 50"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Product Description</label>
                <textarea
                  rows={6}
                  placeholder="Describe your product..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Product Images</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-orange-500 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-gray-500 text-sm mt-2">PNG, JPG up to 10MB</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  onClick={() => setShowAddProduct(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-md">
                  Add Product
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
            { id: 'products', icon: Package, label: 'Products' },
            { id: 'orders', icon: ShoppingCart, label: 'Orders' },
            { id: 'analytics', icon: BarChart, label: 'Analytics' },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center py-2 rounded-xl transition-colors ${
                  activeTab === tab.id
                    ? 'bg-orange-50 text-orange-600'
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
