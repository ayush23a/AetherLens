import React, { useState } from "react";
import { Header } from "../components/Header";
import { useAuth } from "../contexts/AuthContext";
import {
  Download,
  Heart,
  ShoppingCart,
  CreditCard,
  Star,
  TrendingUp,
  Image,
  Package,
} from "lucide-react";

export const ClientDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  const recentDownloads = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=200",
      title: "Beautiful sunset landscape",
      downloadedAt: "2 hours ago",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200",
      title: "Modern office workspace",
      downloadedAt: "1 day ago",
    },
  ];

  const favorites = [
    {
      id: 3,
      src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200",
      title: "Coffee and laptop setup",
      price: "Free",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=200",
      title: "Creative design tools",
      price: "₹30",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to from-amber-500 to-orange-500 rounded-2xl shadow-xl p-8 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-white/90">
                Ready to find your next perfect image?
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">
                {user?.imagesUsed}/{user?.imagesLimit}
              </div>
              <div className="text-sm text-white/80">Images used</div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                <Download className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-800">
                  {user?.imagesUsed || 0}
                </div>
                <div className="text-sm text-amber-600">Downloaded</div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-800">12</div>
                <div className="text-sm text-amber-600">Favorites</div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-800">₹150</div>
                <div className="text-sm text-amber-600">Total Spent</div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-800">
                  {user?.subscription || "Free"}
                </div>
                <div className="text-sm text-amber-600">Plan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Status */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-amber-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">
                Current Plan: {user?.subscription || "Free"}
              </h3>
              <div className="w-full bg-amber-200 rounded-full h-3 mb-2">
                <div
                  className="bg-gradient-to-r from-amber-400 to-orange-400 h-3 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      ((user?.imagesUsed || 0) / (user?.imagesLimit || 10)) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
              <p className="text-amber-600">
                {(user?.imagesLimit || 10) - (user?.imagesUsed || 0)} images
                remaining this month
              </p>
            </div>

            <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 flex items-center space-x-2">
              <CreditCard className="h-5 w-5" />
              <span>Upgrade Plan</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg mb-8 border border-amber-200">
          <div className="flex border-b border-amber-200">
            {["overview", "downloads", "favorites", "collections"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 px-6 font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? "text-amber-600 border-b-2 border-amber-500 bg-amber-50"
                      : "text-amber-700 hover:text-amber-900 hover:bg-amber-50"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              )
            )}
          </div>

          <div className="p-6">
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Recent Activity */}
                <div>
                  <h3 className="text-xl font-bold text-amber-800 mb-4">
                    Recent Activity
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-amber-700 mb-3">
                        Recent Downloads
                      </h4>
                      <div className="space-y-3">
                        {recentDownloads.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg"
                          >
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-12 h-12 rounded object-cover"
                            />
                            <div className="flex-1">
                              <div className="font-medium text-amber-800">
                                {item.title}
                              </div>
                              <div className="text-sm text-amber-600">
                                {item.downloadedAt}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-amber-700 mb-3">
                        Quick Stats
                      </h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-amber-50 rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-amber-700">This Month</span>
                            <span className="font-bold text-amber-800">
                              {user?.imagesUsed || 0} downloads
                            </span>
                          </div>
                        </div>
                        <div className="p-3 bg-amber-50 rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-amber-700">Favorites</span>
                            <span className="font-bold text-amber-800">
                              12 images
                            </span>
                          </div>
                        </div>
                        <div className="p-3 bg-amber-50 rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-amber-700">Collections</span>
                            <span className="font-bold text-amber-800">
                              3 collections
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommended */}
                <div>
                  <h3 className="text-xl font-bold text-amber-800 mb-4">
                    Recommended for You
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {favorites.map((item) => (
                      <div key={item.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-lg aspect-square mb-2">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Download className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="text-sm font-medium text-amber-800 truncate">
                          {item.title}
                        </div>
                        <div className="text-sm text-amber-600">
                          {item.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "downloads" && (
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-6">
                  Download History
                </h3>
                <div className="space-y-4">
                  {recentDownloads.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-amber-800">
                          {item.title}
                        </div>
                        <div className="text-sm text-amber-600">
                          {item.downloadedAt}
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
                        Re-download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "favorites" && (
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-6">
                  Your Favorites
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {favorites.map((item) => (
                    <div key={item.id} className="group">
                      <div className="relative overflow-hidden rounded-lg aspect-square mb-3">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30">
                            <Download className="h-5 w-5" />
                          </button>
                          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30">
                            <Heart className="h-5 w-5 fill-current" />
                          </button>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-amber-800 truncate">
                        {item.title}
                      </div>
                      <div className="text-sm text-amber-600">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "collections" && (
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-6">
                  Your Collections
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {["Work Projects", "Personal", "Inspiration"].map(
                    (collection) => (
                      <div
                        key={collection}
                        className="bg-amber-50 rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <Package className="h-8 w-8 text-amber-600" />
                          <div>
                            <h4 className="font-bold text-amber-800">
                              {collection}
                            </h4>
                            <p className="text-sm text-amber-600">4 images</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {favorites.slice(0, 2).map((item) => (
                            <img
                              key={item.id}
                              src={item.src}
                              alt={item.title}
                              className="w-full aspect-square object-cover rounded"
                            />
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Upgrade CTA */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Unlock More with AetherLens Plus
          </h2>
          <p className="text-white/90 mb-6">
            Get 50 monthly downloads, premium AI features, and priority support
            for just ₹200/month
          </p>
          <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
            Upgrade to Plus
          </button>
        </div>
      </div>
    </div>
  );
};
