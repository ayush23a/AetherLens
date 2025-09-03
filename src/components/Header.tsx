import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Camera, User, ShoppingCart, Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/images?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleUserAction = () => {
    if (user) {
      if (user.role === 'admin') {
        navigate('/admin-dashboard');
      } else if (user.role === 'contributor') {
        navigate('/contributor-dashboard');
      } else {
        navigate('/client-dashboard');
      }
    } else {
      navigate('/auth');
    }
  };

  return (
    <header className="bg-gradient-to-r from-amber-50 to-orange-50 shadow-lg sticky top-0 z-50 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <Camera className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              AetherLens
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/images" className="px-4 py-2 text-amber-700 hover:text-amber-900 hover:bg-amber-100 rounded-lg transition-all duration-200">
              Images
            </Link>
            <Link to="/templates" className="px-4 py-2 text-amber-700 hover:text-amber-900 hover:bg-amber-100 rounded-lg transition-all duration-200">
              Templates
            </Link>
            <Link to="/ai-solutions" className="px-4 py-2 text-amber-700 hover:text-amber-900 hover:bg-amber-100 rounded-lg transition-all duration-200">
              AI Solutions
            </Link>
            <Link to="/business" className="px-4 py-2 text-amber-700 hover:text-amber-900 hover:bg-amber-100 rounded-lg transition-all duration-200">
              Business Services
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Search millions of images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-amber-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white/80 backdrop-blur-sm"
              />
            </div>
          </form>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-amber-600 hover:text-amber-800 hover:bg-amber-100 rounded-full transition-all duration-200">
              <ShoppingCart className="h-5 w-5" />
            </button>
            
            <button
              onClick={handleUserAction}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">
                {user ? user.name : 'Sign In'}
              </span>
            </button>

            {user && (
              <button
                onClick={logout}
                className="p-2 text-amber-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-200"
              >
                <LogOut className="h-5 w-5" />
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-amber-600 hover:text-amber-800 hover:bg-amber-100 rounded-lg transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-amber-200 bg-white/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/images"
                className="block px-3 py-2 text-amber-700 hover:text-amber-900 hover:bg-amber-100 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Images
              </Link>
              <Link
                to="/templates"
                className="block px-3 py-2 text-amber-700 hover:text-amber-900 hover:bg-amber-100 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Templates
              </Link>
              <Link
                to="/ai-solutions"
                className="block px-3 py-2 text-amber-700 hover:text-amber-900 hover:bg-amber-100 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Solutions
              </Link>
              <Link
                to="/business"
                className="block px-3 py-2 text-amber-700 hover:text-amber-900 hover:bg-amber-100 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Business Services
              </Link>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="px-3 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search images..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-amber-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};