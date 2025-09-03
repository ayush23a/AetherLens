import React, { useState } from 'react';
import { Header } from '../components/Header';
import { useAuth } from '../contexts/AuthContext';
import { Upload, DollarSign, TrendingUp, Image, Eye, Download, Sparkles, Plus, FileText } from 'lucide-react';

export const ContributorDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [isDragging, setIsDragging] = useState(false);

  const portfolioStats = {
    totalUploads: 45,
    totalEarnings: 2850,
    monthlyDownloads: 120,
    pendingReview: 3
  };

  const recentUploads = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=200',
      title: 'Beautiful sunset landscape',
      status: 'approved',
      earnings: 125,
      downloads: 25
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200',
      title: 'Modern office workspace',
      status: 'pending',
      earnings: 0,
      downloads: 0
    }
  ];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-xl p-8 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Creator Studio</h1>
              <p className="text-white/90">Welcome back, {user?.name}! Ready to share your creativity?</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">₹{portfolioStats.totalEarnings}</div>
              <div className="text-sm text-white/80">Total Earnings</div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                <Image className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-800">{portfolioStats.totalUploads}</div>
                <div className="text-sm text-amber-600">Total Uploads</div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-800">₹{portfolioStats.totalEarnings}</div>
                <div className="text-sm text-amber-600">Earnings</div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <Download className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-800">{portfolioStats.monthlyDownloads}</div>
                <div className="text-sm text-amber-600">Monthly Downloads</div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-800">{portfolioStats.pendingReview}</div>
                <div className="text-sm text-amber-600">Pending Review</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg mb-8 border border-amber-200">
          <div className="flex border-b border-amber-200 overflow-x-auto">
            {['overview', 'upload', 'portfolio', 'earnings', 'analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 py-4 px-6 font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'text-amber-600 border-b-2 border-amber-500 bg-amber-50'
                    : 'text-amber-700 hover:text-amber-900 hover:bg-amber-50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-amber-800 mb-4">Recent Performance</h3>
                    <div className="space-y-4">
                      {recentUploads.map((upload) => (
                        <div key={upload.id} className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                          <img src={upload.src} alt={upload.title} className="w-16 h-16 rounded object-cover" />
                          <div className="flex-1">
                            <div className="font-semibold text-amber-800">{upload.title}</div>
                            <div className="text-sm text-amber-600">
                              {upload.downloads} downloads • ₹{upload.earnings} earned
                            </div>
                            <div className={`text-xs px-2 py-1 rounded inline-block mt-1 ${
                              upload.status === 'approved' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                            }`}>
                              {upload.status}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-amber-800 mb-4">AI Suggestions</h3>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 border border-purple-200">
                      <div className="flex items-start space-x-3">
                        <Sparkles className="h-6 w-6 text-purple-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-purple-800 mb-2">Trending Tags</h4>
                          <p className="text-purple-700 text-sm mb-3">
                            Images with these tags are performing well this week:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {['sustainability', 'remote work', 'AI technology', 'wellness'].map(tag => (
                              <span key={tag} className="bg-purple-200 text-purple-700 px-2 py-1 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'upload' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-amber-800">Upload New Content</h3>
                
                {/* Upload Area */}
                <div
                  className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                    isDragging
                      ? 'border-amber-400 bg-amber-50'
                      : 'border-amber-300 hover:border-amber-400 hover:bg-amber-50'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <Upload className="h-16 w-16 text-amber-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-amber-800 mb-2">
                    Drag and drop your images here
                  </h4>
                  <p className="text-amber-600 mb-6">
                    or click to select files from your computer
                  </p>
                  <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200">
                    Select Files
                  </button>
                  <p className="text-sm text-amber-500 mt-4">
                    Supported formats: JPG, PNG, TIFF • Max size: 50MB
                  </p>
                </div>

                {/* AI Enhancement Options */}
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-4 flex items-center">
                    <Sparkles className="h-5 w-5 mr-2" />
                    AI Enhancement Options
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-purple-300 text-purple-500 focus:ring-purple-200" />
                      <span className="text-purple-700">Auto-generate tags</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-purple-300 text-purple-500 focus:ring-purple-200" />
                      <span className="text-purple-700">Generate description</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-purple-300 text-purple-500 focus:ring-purple-200" />
                      <span className="text-purple-700">Suggest pricing</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-purple-300 text-purple-500 focus:ring-purple-200" />
                      <span className="text-purple-700">Quality enhancement</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-6">Your Portfolio</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {recentUploads.map((upload) => (
                    <div key={upload.id} className="group">
                      <div className="relative overflow-hidden rounded-lg aspect-square mb-3">
                        <img
                          src={upload.src}
                          alt={upload.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2">
                          <div className={`px-2 py-1 rounded text-xs font-semibold ${
                            upload.status === 'approved' 
                              ? 'bg-green-500 text-white' 
                              : 'bg-yellow-500 text-white'
                          }`}>
                            {upload.status}
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-center">
                            <div className="text-lg font-bold">{upload.downloads}</div>
                            <div className="text-sm">downloads</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-amber-800 truncate">{upload.title}</div>
                      <div className="text-sm text-green-600 font-semibold">₹{upload.earnings}</div>
                    </div>
                  ))}
                  
                  {/* Add New Button */}
                  <div 
                    className="aspect-square border-2 border-dashed border-amber-300 rounded-lg flex flex-col items-center justify-center text-amber-500 hover:border-amber-400 hover:text-amber-600 transition-all duration-300 cursor-pointer"
                    onClick={() => setActiveTab('upload')}
                  >
                    <Plus className="h-8 w-8 mb-2" />
                    <span className="text-sm font-medium">Add New</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'earnings' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-amber-800">Earnings & Payouts</h3>
                  <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200">
                    Request Payout
                  </button>
                </div>

                {/* Earnings Summary */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200">
                    <div className="text-center">
                      <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-amber-800">₹{portfolioStats.totalEarnings}</div>
                      <div className="text-sm text-amber-600">Total Earnings</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200">
                    <div className="text-center">
                      <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-amber-800">₹420</div>
                      <div className="text-sm text-amber-600">This Month</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200">
                    <div className="text-center">
                      <FileText className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-amber-800">₹2430</div>
                      <div className="text-sm text-amber-600">Available</div>
                    </div>
                  </div>
                </div>

                {/* Earnings History */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-4">Recent Earnings</h4>
                  <div className="space-y-3">
                    {[
                      { date: '2025-01-15', amount: 125, downloads: 5, image: 'Sunset landscape' },
                      { date: '2025-01-14', amount: 80, downloads: 3, image: 'Coffee workspace' },
                      { date: '2025-01-13', amount: 215, downloads: 8, image: 'Business meeting' }
                    ].map((earning, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                        <div>
                          <div className="font-medium text-amber-800">{earning.image}</div>
                          <div className="text-sm text-amber-600">{earning.downloads} downloads • {earning.date}</div>
                        </div>
                        <div className="font-bold text-green-600">+₹{earning.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-amber-800">Performance Analytics</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-4">Top Performing Images</h4>
                    <div className="space-y-3">
                      {recentUploads.filter(u => u.status === 'approved').map((upload) => (
                        <div key={upload.id} className="flex items-center space-x-3">
                          <img src={upload.src} alt={upload.title} className="w-12 h-12 rounded object-cover" />
                          <div className="flex-1">
                            <div className="font-medium text-amber-800 text-sm">{upload.title}</div>
                            <div className="text-xs text-amber-600">{upload.downloads} downloads</div>
                          </div>
                          <div className="text-sm font-bold text-green-600">₹{upload.earnings}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-4">Growth Metrics</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-amber-700">Downloads this month</span>
                        <span className="font-bold text-amber-800">+15%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-amber-700">Revenue growth</span>
                        <span className="font-bold text-green-600">+22%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-amber-700">Portfolio views</span>
                        <span className="font-bold text-amber-800">+8%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};