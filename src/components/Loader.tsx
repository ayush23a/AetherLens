import React from 'react';
import { Camera, Star, Image } from 'lucide-react';

export const Loader: React.FC = () => {
  return (
   <div className="fixed inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-50 flex items-center justify-center overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <Star
            key={i}
            className={`absolute text-amber-300 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 8 + 4}px`,
            }}
          />
        ))}
      </div>

      {/* Floating photo elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 3}s`,
            }}
          >
            <Image className="w-8 h-8 text-amber-400" />
          </div>
        ))}
      </div>

      {/* Main loader content */}
      <div className="relative z-10 text-center">
        <div className="relative">
          <Camera className="w-16 h-16 text-amber-600 mx-auto mb-4 animate-bounce" />
          <div className="absolute -top-2 -right-2">
            <div className="w-4 h-4 bg-amber-400 rounded-full animate-ping"></div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-amber-800 mb-2 animate-fadeIn">
          AetherLens
        </h1>
        
        <p className="text-amber-600 text-lg mb-8 animate-fadeIn animation-delay-500">
          Capturing moments, creating possibilities
        </p>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-amber-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-progress"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animate-progress {
          animation: progress 3s ease-out;
        }
      `}</style>
    </div>
  );
};