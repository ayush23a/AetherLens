import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Search, Filter, Download, Heart, ShoppingCart, Sparkles, Layout } from 'lucide-react';

const mockTemplates = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Business Presentation Template',
    price: '₹50',
    contributor: 'Design Pro',
    category: 'Business',
    tags: ['presentation', 'business', 'professional'],
    aiCaption: 'Professional business presentation template with modern design elements and clean typography.'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Social Media Post Template',
    price: 'Free',
    contributor: 'Creative Studio',
    category: 'Social Media',
    tags: ['social', 'media', 'post'],
    aiCaption: 'Eye-catching social media template perfect for Instagram and Facebook posts.'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/1181463/pexels-photo-1181463.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Email Newsletter Template',
    price: '₹30',
    contributor: 'Mail Masters',
    category: 'Marketing',
    tags: ['email', 'newsletter', 'marketing'],
    aiCaption: 'Professional email newsletter template with responsive design and engaging layout.'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/1181498/pexels-photo-1181498.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Website Landing Page',
    price: '₹75',
    contributor: 'Web Wizards',
    category: 'Web Design',
    tags: ['website', 'landing', 'web'],
    aiCaption: 'Modern landing page template with conversion-focused design and mobile optimization.'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Brand Identity Package',
    price: '₹100',
    contributor: 'Brand Builders',
    category: 'Branding',
    tags: ['branding', 'identity', 'logo'],
    aiCaption: 'Complete brand identity package with logo variations and brand guidelines.'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Infographic Template',
    price: 'Free',
    contributor: 'Info Graphics',
    category: 'Infographic',
    tags: ['infographic', 'data', 'visualization'],
    aiCaption: 'Data visualization infographic template with modern charts and clean design.'
  }
];

export const Templates: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);

  const categories = ['all', 'Business', 'Social Media', 'Marketing', 'Web Design', 'Branding', 'Infographic'];

  const filteredTemplates = mockTemplates.filter(template => {
    const matchesSearch = searchQuery === '' || 
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Professional Templates
          </h1>
          <p className="text-xl text-amber-600 max-w-3xl mx-auto">
            Ready-to-use templates for presentations, social media, websites, and more
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-amber-200">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-amber-500 text-white'
                      : 'bg-white text-amber-700 border border-amber-300 hover:bg-amber-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-amber-200 cursor-pointer"
              onClick={() => setSelectedTemplate(template)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={template.src}
                  alt={template.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200">
                      <Layout className="h-6 w-6" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200">
                      <Download className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                  <Sparkles className="h-3 w-3" />
                  <span>AI Enhanced</span>
                </div>

                <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {template.category}
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-bold text-amber-800 mb-2 text-lg">{template.title}</h4>
                <p className="text-sm text-amber-600 mb-3">by {template.contributor}</p>
                <p className="text-sm text-amber-700 mb-4">{template.aiCaption}</p>
                
                <div className="flex items-center justify-between">
                  <span className={`font-bold text-lg ${template.price === 'Free' ? 'text-green-600' : 'text-amber-600'}`}>
                    {template.price}
                  </span>
                  <div className="flex space-x-2">
                    <button className="p-2 text-amber-600 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-amber-600 hover:text-amber-800 hover:bg-amber-50 rounded-full transition-all duration-200">
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Template Modal */}
        {selectedTemplate && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-amber-800 mb-2">{selectedTemplate.title}</h3>
                    <p className="text-amber-600">by {selectedTemplate.contributor}</p>
                  </div>
                  <button
                    onClick={() => setSelectedTemplate(null)}
                    className="text-amber-600 hover:text-amber-800 transition-colors text-2xl"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <img
                      src={selectedTemplate.src}
                      alt={selectedTemplate.title}
                      className="w-full rounded-lg shadow-lg"
                    />
                    
                    <div className="flex gap-3">
                      <button className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2">
                        <Download className="h-5 w-5" />
                        <span>Download Template</span>
                      </button>
                      <button className="px-4 py-3 border border-amber-300 text-amber-700 rounded-lg hover:bg-amber-50 transition-all duration-200">
                        <Heart className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-3">AI Description</h4>
                      <p className="text-amber-700 bg-amber-50 p-4 rounded-lg border border-amber-200">
                        {selectedTemplate.aiCaption}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-3">Template Details</h4>
                      <div className="space-y-3 text-amber-700">
                        <div className="flex justify-between">
                          <span>Category:</span>
                          <span className="font-semibold">{selectedTemplate.category}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Price:</span>
                          <span className="font-semibold">{selectedTemplate.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Format:</span>
                          <span className="font-semibold">PSD, AI, PNG</span>
                        </div>
                        <div className="flex justify-between">
                          <span>License:</span>
                          <span className="font-semibold">Commercial</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-3">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedTemplate.tags.map(tag => (
                          <span key={tag} className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">
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
      </div>
    </div>
  );
};