import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Search, Sparkles, Upload, DollarSign, Star, TrendingUp, Users, Zap } from 'lucide-react';

export const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <img src="milkyway.jpg" alt="blended" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-1"/>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-green-100/50"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-800 mb-6 animate-fadeInUp">
            Discover the Perfect
            <span className="block bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              Visual Store
            </span>
          </h1>
          
          <p className="text-xl text-amber-700 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Access millions of high-quality stock images, create with AI, and join our community of creators
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-400">
            <Link
              to="/images"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Exploring
            </Link>
            <Link
              to="/auth"
              className="px-8 py-4 border-2 border-amber-500 text-amber-700 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Join AetherLens
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-800 mb-12">
            Why Choose AetherLens?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">AI-Powered Creation</h3>
              <p className="text-amber-600">Generate stunning images with our advanced AI tools and get intelligent captions for your content.</p>
            </div>
            
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Affordable Pricing</h3>
              <p className="text-amber-600">Start free with 10 images, then pay just ₹50 for 20 more or ₹200 for 50 monthly images.</p>
            </div>
            
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Earn as Creator</h3>
              <p className="text-amber-600">Upload your images and earn 25% revenue share from downloads. Set your own prices for premium content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-800 mb-12">
            Simple, Transparent Pricing
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-amber-800 mb-2">Free</h3>
                <div className="text-4xl font-bold text-amber-600 mb-4">₹0</div>
                <p className="text-amber-600 mb-6">Perfect for trying out AetherLens</p>
                
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-amber-700">10 image downloads</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-amber-700">Basic search & filters</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-amber-700">Watermarked images</span>
                  </li>
                </ul>
                
                <Link
                  to="/auth"
                  className="block w-full py-3 px-6 bg-amber-100 text-amber-700 rounded-lg font-semibold hover:bg-amber-200 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-amber-800 mb-2">Standard</h3>
                <div className="text-4xl font-bold text-amber-600 mb-4">₹50</div>
                <p className="text-amber-600 mb-6">For occasional users</p>
                
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-amber-700">20 additional downloads</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-amber-700">No watermarks</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-amber-700">Commercial license</span>
                  </li>
                </ul>
                
                <button className="block w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105">
                  Choose Standard
                </button>
              </div>
            </div>

            {/* Plus Plan */}
            <div className="relative p-8 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4 bg-white text-amber-600 px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Plus</h3>
                <div className="text-4xl font-bold text-white mb-4">₹200</div>
                <p className="text-white/90 mb-6">For regular creators</p>
                
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-300 mr-2" />
                    <span className="text-white">50 monthly downloads</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-300 mr-2" />
                    <span className="text-white">Premium AI features</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-300 mr-2" />
                    <span className="text-white">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-300 mr-2" />
                    <span className="text-white">Extended license</span>
                  </li>
                </ul>
                
                <button className="block w-full py-3 px-6 bg-white text-amber-600 rounded-lg font-semibold hover:bg-amber-50 transition-all duration-200 transform hover:scale-105">
                  Choose Plus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-amber-800">10M+</div>
              <div className="text-amber-600">Images</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-amber-800">500K+</div>
              <div className="text-amber-600">Contributors</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-amber-800">1M+</div>
              <div className="text-amber-600">AI Generations</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-amber-800">4.9</div>
              <div className="text-amber-600">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Creative Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of creators and businesses who trust AetherLens for their visual content needs.
          </p>
          <Link
            to="/auth"
            className="inline-flex items-center px-8 py-4 bg-white text-amber-600 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Search className="w-5 h-5 mr-2" />
            Start Exploring Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AetherLens</h3>
              <p className="text-amber-200">The ultimate platform for stock images, AI-generated content, and creative collaboration.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Browse</h4>
              <ul className="space-y-2 text-amber-200">
                <li><Link to="/images" className="hover:text-white transition-colors">Images</Link></li>
                <li><Link to="/templates" className="hover:text-white transition-colors">Templates</Link></li>
                <li><Link to="/ai-solutions" className="hover:text-white transition-colors">AI Solutions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Sell</h4>
              <ul className="space-y-2 text-amber-200">
                <li><Link to="/contributor-dashboard" className="hover:text-white transition-colors">Become a Contributor</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Submission Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Earnings</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2025 AetherLens. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style >{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>

  );
};