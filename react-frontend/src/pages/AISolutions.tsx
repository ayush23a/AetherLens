import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Sparkles, Wand2, Image, Type, Palette, Cpu, ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export const AISolutions: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  const aiTools = [
    {
      id: 'image-generator',
      title: 'AI Image Generator',
      description: 'Create stunning images from text descriptions using advanced AI models',
      icon: Image,
      color: 'from-purple-400 to-pink-400',
      features: ['Text-to-image generation', 'Multiple styles', 'High resolution', 'Commercial license']
    },
    {
      id: 'caption-generator',
      title: 'Smart Caption Generator',
      description: 'Generate engaging captions and descriptions for your images automatically',
      icon: Type,
      color: 'from-blue-400 to-cyan-400',
      features: ['AI-powered analysis', 'SEO optimized', 'Multiple tones', 'Instant generation']
    },
    {
      id: 'style-transfer',
      title: 'Style Transfer',
      description: 'Transform your images with artistic styles and filters using AI',
      icon: Palette,
      color: 'from-green-400 to-emerald-400',
      features: ['Artistic styles', 'Photo enhancement', 'Color grading', 'Batch processing']
    },
    {
      id: 'AI-Image Enhancer',
      title: 'AI-Image Enhancer',
      description: 'Breathtaking clarity unveiled—AI-enhanced for stunning detail and vibrance',
      icon: Wand2,
      color: 'from-orange-400 to-red-400',
      features: ['Upscaling resolution and restoring pixel quality', 'Edge refinement', 'Delivering natural-looking improvements with little user input', 'Removing unwanted artifacts and sharpening fine details']

    }
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Sparkles className="h-8 w-8 text-amber-600" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              AI Solutions
            </h1>
          </div>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto mb-8">
            Harness the power of artificial intelligence to create, enhance, and optimize your visual content
          </p>

          <div className="flex justify-center">
            <button className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* AI Tools Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {aiTools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <div
                key={tool.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-200 cursor-pointer"
                onClick={() => setSelectedTool(selectedTool === tool.id ? null : tool.id)}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-amber-800 mb-2">{tool.title}</h3>
                      <p className="text-amber-600 mb-4">{tool.description}</p>

                      <div className="grid grid-cols-2 gap-2">
                        {tool.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-amber-700">
                            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button className="mt-6 flex items-center space-x-2 text-amber-600 hover:text-amber-800 font-semibold transition-colors duration-200">
                        <span>Try {tool.title}</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Tool Interface */}
                {selectedTool === tool.id && (
                  <div className="border-t border-amber-200 p-6 bg-amber-50/50">
                    {tool.id === "image-generator" && (
                      <div className="text-center py-6">
                        {/* <p className="text-indigo-600 mb-6">Choose your AI image generator:</p> */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <button
                            onClick={() => navigate("/fastapi-image-gen")}
                            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow hover:from-indigo-600 hover:to-purple-600 transition"
                          >
                            Generate Image
                          </button>
                           {/*<button
                            onClick={() => navigate("/streamlit-image-gen")}
                            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow hover:from-orange-600 hover:to-red-600 transition"
                          >
                            Streamlit Generator
                          </button> */}
                        </div>
                      </div>
                    )}


                    {tool.id === 'caption-generator' && (
                      <div className="space-y-4">
                        {/*<h4 className="font-semibold text-amber-800">Upload Image for Caption</h4> */}
                        
                          <a href = "https://caption-lens-1756919109222.vercel.app/">
                            <button 
                              className = "px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition"
                            >
                              Generate Captions
                            </button>
                          </a>
                      </div>
                    )}

                    {(tool.id === 'style-transfer' || tool.id === 'background-remover') && (
                      <div className="text-center py-8">
                        <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <p className="text-amber-600 mb-4">Upload an image to start using this tool</p>
                        <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200">
                          Upload Image
                        </button>
                      </div>
                    )}

                    {tool.id === 'AI-Image Enhancer' && (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <p className="text-amber-600 mb-4">
                          Redirect to the dedicated AI Image Enhancer workspace
                        </p>
                        {/* change this to deployed route */}
                        <a href="http://localhost:3000">
                          <button
                            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200"
                          >
                            Open AI Image Enhancer
                          </button>
                        </a>
                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Features Section */}
        <section className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-amber-200">
          <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">
            Powered by Advanced AI
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-amber-800 mb-2">Latest Models</h3>
              <p className="text-amber-600">Using cutting-edge AI models for the best results</p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-amber-800 mb-2">Smart Enhancement</h3>
              <p className="text-amber-600">Intelligent image optimization and enhancement</p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wand2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-amber-800 mb-2">One-Click Magic</h3>
              <p className="text-amber-600">Professional results with simple, intuitive tools</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
