import React, { useState } from 'react';
import { Header } from '../components/Header';
import { useAuth } from '../contexts/AuthContext';
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  BarChart3, 
  PieChart,
  Eye,
  Flag,
  CreditCard,
  Activity
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const systemStats = {
    totalUsers: 12450,
    totalRevenue: 185200,
    monthlyGrowth: 15.2,
    pendingModeration: 23,
    totalAssets: 125000,
    activeContributors: 3200
  };

  const pendingContent = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=200',
      title: 'Beautiful sunset landscape',
      contributor: 'John Doe',
      uploadedAt: '2 hours ago',
      price: 'Free'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200',
      title: 'Modern office workspace',
      contributor: 'Jane Smith',
      uploadedAt: '4 hours ago',
      price: '₹25'
    }
  ];

  const recentTransactions = [
    { id: 1, type: 'purchase', user: 'Alice Johnson', amount: 50, item: 'Premium Package', date: '1 hour ago' },
    { id: 2, type: 'payout', user: 'Mike Wilson', amount: 125, item: 'Contributor Earnings', date: '2 hours ago' },
    { id: 3, type: 'subscription', user: 'Sarah Davis', amount: 200, item: 'Plus Membership', date: '3 hours ago' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-white/90">Welcome back, {user?.name}! Here's your platform overview.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">₹{systemStats.totalRevenue.toLocaleString()}</div>
              <div className="text-sm text-white/80">Total Revenue</div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-amber-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-blue-500" />
              <div>
                <div className="text-lg font-bold text-amber-800">{systemStats.totalUsers.toLocaleString()}</div>
                <div className="text-xs text-amber-600">Total Users</div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-amber-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-8 w-8 text-green-500" />
              <div>
                <div className="text-lg font-bold text-amber-800">₹{systemStats.totalRevenue.toLocaleString()}</div>
                <div className="text-xs text-amber-600">Revenue</div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-amber-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-purple-500" />
              <div>
                <div className="text-lg font-bold text-amber-800">{systemStats.monthlyGrowth}%</div>
                <div className="text-xs text-amber-600">Growth</div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-amber-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-8 w-8 text-orange-500" />
              <div>
                <div className="text-lg font-bold text-amber-800">{systemStats.pendingModeration}</div>
                <div className="text-xs text-amber-600">Pending</div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-amber-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-2">
              <Eye className="h-8 w-8 text-cyan-500" />
              <div>
                <div className="text-lg font-bold text-amber-800">{systemStats.totalAssets.toLocaleString()}</div>
                <div className="text-xs text-amber-600">Assets</div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-amber-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-emerald-500" />
              <div>
                <div className="text-lg font-bold text-amber-800">{systemStats.activeContributors.toLocaleString()}</div>
                <div className="text-xs text-amber-600">Contributors</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg mb-8 border border-amber-200">
          <div className="flex border-b border-amber-200 overflow-x-auto">
            {['overview', 'moderation', 'users', 'financial-reporting'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 py-4 px-6 font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'text-amber-600 border-b-2 border-amber-500 bg-amber-50'
                    : 'text-amber-700 hover:text-amber-900 hover:bg-amber-50'
                }`}
              >
                {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* System Health */}
                  <div>
                    <h3 className="text-xl font-bold text-amber-800 mb-4">System Health</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                        <span className="text-green-700">Server Status</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-green-600 font-semibold">Online</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                        <span className="text-green-700">Database</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-green-600 font-semibold">Healthy</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <span className="text-yellow-700">CDN Performance</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-yellow-600 font-semibold">95ms avg</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div>
                    <h3 className="text-xl font-bold text-amber-800 mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-amber-800">Content approved</div>
                          <div className="text-xs text-amber-600">5 images by contributors</div>
                        </div>
                        <div className="text-xs text-amber-500">10 min ago</div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                        <Users className="h-5 w-5 text-blue-500" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-amber-800">New user registered</div>
                          <div className="text-xs text-amber-600">Client: alice@example.com</div>
                        </div>
                        <div className="text-xs text-amber-500">25 min ago</div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                        <CreditCard className="h-5 w-5 text-green-500" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-amber-800">Payment processed</div>
                          <div className="text-xs text-amber-600">₹200 Plus subscription</div>
                        </div>
                        <div className="text-xs text-amber-500">1 hour ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'moderation' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-amber-800">Content Moderation</h3>
                  <div className="flex items-center space-x-2 text-amber-600">
                    <AlertTriangle className="h-5 w-5" />
                    <span>{systemStats.pendingModeration} items pending review</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {pendingContent.map((content) => (
                    <div key={content.id} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200">
                      <div className="flex items-start space-x-4">
                        <img src={content.src} alt={content.title} className="w-24 h-24 rounded-lg object-cover" />
                        
                        <div className="flex-1">
                          <h4 className="font-bold text-amber-800 mb-1">{content.title}</h4>
                          <p className="text-amber-600 text-sm mb-2">by {content.contributor}</p>
                          <p className="text-amber-500 text-xs mb-3">Uploaded {content.uploadedAt}</p>
                          
                          <div className="flex items-center space-x-2 mb-4">
                            <span className="text-sm text-amber-700">Price:</span>
                            <span className="font-semibold text-amber-800">{content.price}</span>
                          </div>

                          <div className="flex space-x-3">
                            <button className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                              <CheckCircle className="h-4 w-4" />
                              <span>Approve</span>
                            </button>
                            <button className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                              <XCircle className="h-4 w-4" />
                              <span>Reject</span>
                            </button>
                            <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
                              <Flag className="h-4 w-4" />
                              <span>Flag</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-amber-800">User Management</h3>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200 text-center">
                    <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-amber-800">8,240</div>
                    <div className="text-sm text-amber-600">Clients</div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200 text-center">
                    <Users className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-amber-800">3,200</div>
                    <div className="text-sm text-amber-600">Contributors</div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200 text-center">
                    <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-amber-800">1,010</div>
                    <div className="text-sm text-amber-600">Plus Members</div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-amber-200">
                  <div className="p-6">
                    <h4 className="font-bold text-amber-800 mb-4">Recent User Activity</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Alice Johnson', action: 'Purchased Plus membership', time: '5 min ago', type: 'subscription' },
                        { name: 'Mike Wilson', action: 'Uploaded 3 new images', time: '15 min ago', type: 'upload' },
                        { name: 'Sarah Davis', action: 'Downloaded 5 images', time: '30 min ago', type: 'download' },
                        { name: 'Tom Brown', action: 'Reported inappropriate content', time: '1 hour ago', type: 'report' }
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                          <div>
                            <div className="font-medium text-amber-800">{activity.name}</div>
                            <div className="text-sm text-amber-600">{activity.action}</div>
                          </div>
                          <div className="text-xs text-amber-500">{activity.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'financial-reporting' && (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Financial Dashboard Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-amber-800 flex items-center">
                    <DollarSign className="h-6 w-6 mr-2" />
                    Financial Dashboard
                  </h3>
                  
                  {/* Revenue Overview */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-4">Revenue Overview</h4>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="text-2xl font-bold text-green-600">₹{(systemStats.totalRevenue * 0.3).toLocaleString()}</div>
                        <div className="text-sm text-green-700">This Month</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="text-2xl font-bold text-blue-600">₹{(systemStats.totalRevenue * 0.1).toLocaleString()}</div>
                        <div className="text-sm text-blue-700">Last Month</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-amber-700">Subscription Revenue</span>
                        <span className="font-bold text-amber-800">₹{(systemStats.totalRevenue * 0.6).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-amber-700">Individual Purchases</span>
                        <span className="font-bold text-amber-800">₹{(systemStats.totalRevenue * 0.4).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Processing */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-4">Recent Transactions</h4>
                    <div className="space-y-3">
                      {recentTransactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                          <div>
                            <div className="font-medium text-amber-800">{transaction.user}</div>
                            <div className="text-sm text-amber-600">{transaction.item}</div>
                            <div className="text-xs text-amber-500">{transaction.date}</div>
                          </div>
                          <div className={`font-bold ${
                            transaction.type === 'payout' ? 'text-red-600' : 'text-green-600'
                          }`}>
                            {transaction.type === 'payout' ? '-' : '+'}₹{transaction.amount}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Payout Queue */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-4">Pending Payouts</h4>
                    <div className="space-y-3">
                      {[
                        { contributor: 'John Doe', amount: 450, requested: '2 days ago' },
                        { contributor: 'Jane Smith', amount: 220, requested: '1 day ago' },
                        { contributor: 'Mike Johnson', amount: 180, requested: '6 hours ago' }
                      ].map((payout, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                          <div>
                            <div className="font-medium text-amber-800">{payout.contributor}</div>
                            <div className="text-sm text-amber-600">Requested {payout.requested}</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="font-bold text-amber-800">₹{payout.amount}</span>
                            <button className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors">
                              Approve
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reporting Dashboard Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-amber-800 flex items-center">
                    <BarChart3 className="h-6 w-6 mr-2" />
                    Reporting Dashboard
                  </h3>
                  
                  {/* Key Metrics */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-4">Key Performance Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <PieChart className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                        <div className="text-lg font-bold text-purple-600">85%</div>
                        <div className="text-sm text-purple-700">User Retention</div>
                      </div>
                      
                      <div className="text-center p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                        <Activity className="h-8 w-8 text-cyan-500 mx-auto mb-2" />
                        <div className="text-lg font-bold text-cyan-600">2.4M</div>
                        <div className="text-sm text-cyan-700">Monthly Views</div>
                      </div>
                    </div>
                  </div>

                  {/* Content Performance */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-4">Content Performance</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="text-amber-700">Total Downloads Today</span>
                        <span className="font-bold text-amber-800">1,234</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="text-amber-700">New Uploads Today</span>
                        <span className="font-bold text-amber-800">89</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="text-amber-700">Search Queries</span>
                        <span className="font-bold text-amber-800">5,678</span>
                      </div>
                    </div>
                  </div>

                  {/* User Engagement */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-4">User Engagement</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-amber-700">Daily Active Users</span>
                          <span className="font-bold text-amber-800">2,890</span>
                        </div>
                        <div className="w-full bg-amber-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-amber-400 to-orange-400 h-2 rounded-full" style={{ width: '78%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-amber-700">Conversion Rate</span>
                          <span className="font-bold text-amber-800">12.5%</span>
                        </div>
                        <div className="w-full bg-amber-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full" style={{ width: '62%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-amber-700">Content Approval Rate</span>
                          <span className="font-bold text-amber-800">94.2%</span>
                        </div>
                        <div className="w-full bg-amber-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{ width: '94%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Geographic Distribution */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-4">Top Regions</h4>
                    <div className="space-y-3">
                      {[
                        { region: 'India', percentage: 45, users: 5598 },
                        { region: 'United States', percentage: 22, users: 2739 },
                        { region: 'United Kingdom', percentage: 15, users: 1868 },
                        { region: 'Canada', percentage: 10, users: 1245 },
                        { region: 'Others', percentage: 8, users: 1000 }
                      ].map((region, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <span className="text-amber-700 text-sm">{region.region}</span>
                              <span className="text-amber-800 font-semibold text-sm">{region.percentage}%</span>
                            </div>
                            <div className="w-full bg-amber-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-amber-400 to-orange-400 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${region.percentage}%` }}
                              ></div>
                            </div>
                            <div className="text-xs text-amber-600 mt-1">{region.users.toLocaleString()} users</div>
                          </div>
                        </div>
                      ))}
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