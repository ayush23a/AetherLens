import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Search, Filter, Download, Heart, ShoppingCart, Sparkles } from 'lucide-react';

const mockImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Beautiful sunset landscape',
    price: 'Free',
    contributor: 'John Doe',
    tags: ['sunset', 'landscape', 'nature'],
    aiCaption: 'A breathtaking golden sunset over rolling hills, perfect for inspiring content and peaceful vibes.'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Modern office workspace',
    price: '₹25',
    contributor: 'Jane Smith',
    tags: ['office', 'workspace', 'modern'],
    aiCaption: 'Clean, minimalist office space with natural lighting - ideal for business and productivity content.'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Coffee and laptop setup',
    price: 'Free',
    contributor: 'Mike Johnson',
    tags: ['coffee', 'laptop', 'work'],
    aiCaption: 'Cozy coffee shop workspace setup perfect for remote work and lifestyle branding.'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Creative design tools',
    price: '₹30',
    contributor: 'Sarah Wilson',
    tags: ['design', 'creative', 'tools'],
    aiCaption: 'Professional design workspace with colorful tools and materials for creative inspiration.'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Technology and innovation',
    price: 'Free',
    contributor: 'Alex Brown',
    tags: ['technology', 'innovation', 'future'],
    aiCaption: 'Cutting-edge technology visualization representing innovation and digital transformation.'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/1181413/pexels-photo-1181413.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Team collaboration',
    price: '₹40',
    contributor: 'Emma Davis',
    tags: ['team', 'collaboration', 'meeting'],
    aiCaption: 'Dynamic team meeting showcasing collaboration and modern workplace culture.'
  }
];

export const ImageBrowse: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('relevant');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = ['all', 'nature', 'business', 'technology', 'lifestyle', 'abstract'];
  const priceOptions = ['all', 'free', 'paid'];
  const sortOptions = ['relevant', 'newest', 'popular', 'price-low', 'price-high'];

  const filteredImages = mockImages.filter(image => {
    const matchesSearch = searchQuery === '' || 
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesPrice = priceFilter === 'all' || 
      (priceFilter === 'free' && image.price === 'Free') ||
      (priceFilter === 'paid' && image.price !== 'Free');
    
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-amber-200">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>

              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
              >
                {priceOptions.map(option => (
                  <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>
                    {option.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </option>
                ))}
              </select>

              <button className="flex items-center space-x-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-all duration-200">
                <Filter className="h-4 w-4" />
                <span>More Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-amber-800">
            {filteredImages.length} images found
          </h3>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-amber-200"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Watermark for free images */}
                {image.price === 'Free' && (
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    AetherLens
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200">
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* AI Caption indicator */}
                <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                  <Sparkles className="h-3 w-3" />
                  <span>AI</span>
                </div>
              </div>

              <div className="p-4">
                <h4 className="font-semibold text-amber-800 mb-2 truncate">{image.title}</h4>
                <p className="text-sm text-amber-600 mb-2">by {image.contributor}</p>
                <div className="flex items-center justify-between">
                  <span className={`font-bold ${image.price === 'Free' ? 'text-green-600' : 'text-amber-600'}`}>
                    {image.price}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {image.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-amber-800">{selectedImage.title}</h3>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-amber-600 hover:text-amber-800 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      className="w-full rounded-lg"
                    />
                    {selectedImage.price === 'Free' && (
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-2 rounded">
                        AetherLens
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">AI-Generated Caption</h4>
                      <p className="text-amber-700 bg-amber-50 p-3 rounded-lg border border-amber-200">
                        {selectedImage.aiCaption}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">Details</h4>
                      <div className="space-y-2 text-amber-700">
                        <div>Contributor: {selectedImage.contributor}</div>
                        <div>Price: <span className="font-semibold">{selectedImage.price}</span></div>
                        <div>Tags: {selectedImage.tags.join(', ')}</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2">
                        <Download className="h-5 w-5" />
                        <span>Download</span>
                      </button>
                      <button className="px-4 py-3 border border-amber-300 text-amber-700 rounded-lg hover:bg-amber-50 transition-all duration-200">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button className="px-4 py-3 border border-amber-300 text-amber-700 rounded-lg hover:bg-amber-50 transition-all duration-200">
                        <ShoppingCart className="h-5 w-5" />
                      </button>
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