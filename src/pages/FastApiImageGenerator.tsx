// src/pages/FastApiImageGenerator.tsx

import React, { useState } from 'react';
import { Header } from '../components/Header'; // Assuming Header is in this path
import { Sparkles, Send, Loader, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FastApiImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      // The backend server is running on http://localhost:8000
      const response = await fetch('http://localhost:8000/api/v1/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt }),
      });

      if (!response.ok) {
        // Try to get a detailed error message from the backend
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setGeneratedImage(data.image_base64);

    } catch (err: any) {
      console.error("Failed to generate image:", err);
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
           <Link to="/ai-solutions" className="text-sm text-indigo-600 hover:underline mb-4 inline-block">&larr; Back to AI Solutions</Link>
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="h-8 w-8 text-indigo-500" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              FastAPI Image Generator
            </h1>
          </div>
          <p className="text-lg text-indigo-700 max-w-2xl mx-auto">
            Generate stunning visuals from your text prompts using the Stability AI model via our FastAPI backend.
          </p>
        </div>

        {/* Prompt Input Section */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., An astronaut riding a horse on Mars, digital art"
              className="w-full p-4 pr-32 text-lg border-2 border-indigo-200 rounded-full focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-shadow"
              disabled={isLoading}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader className="animate-spin h-5 w-5" /> : <Send className="h-5 w-5" />}
              <span>Generate</span>
            </button>
          </div>
        </div>

        {/* Display Area */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 min-h-[400px] flex justify-center items-center border border-indigo-200">
          {isLoading && (
            <div className="text-center text-indigo-600">
              <Loader className="h-12 w-12 animate-spin mx-auto mb-4" />
              <p className="font-semibold text-lg">Generating your masterpiece...</p>
              <p className="text-sm">This can take a moment, especially the first time.</p>
            </div>
          )}
          {error && (
            <div className="text-center text-red-600 bg-red-100 p-4 rounded-lg">
               <AlertTriangle className="h-8 w-8 mx-auto mb-2"/>
              <p className="font-bold">Error</p>
              <p>{error}</p>
            </div>
          )}
          {generatedImage && (
            <div className="w-full max-w-lg">
                <img 
                    src={`data:image/png;base64,${generatedImage}`} 
                    alt="Generated from prompt" 
                    className="rounded-lg shadow-xl w-full"
                />
            </div>
          )}
          {!isLoading && !error && !generatedImage && (
             <div className="text-center text-gray-500">
                <p>Your generated image will appear here.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};