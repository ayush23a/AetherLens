import React from "react";
import ImageKitAITransformation from "@/components/ImageKitAITransformation";
import AIToolbar from "@/components/AIToolbar";
import { useFileAIStore } from "@/store/useFileAIStore";

export default function Home() {
  const { reset } = useFileAIStore();

  const handleReset = () => {
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AIToolbar />
      
      <div className="ml-20 mr-6">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900" data-testid="app-title">
                AetherLens AI Editor
              </h1>
              <p className="text-gray-600 mt-1">Professional AI-powered image transformations</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>ImageKit Connected</span>
              </div>
              <button
                className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium"
                onClick={handleReset}
                data-testid="reset-button"
              >
                Reset
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-8">
          <ImageKitAITransformation />
        </div>
      </div>
    </div>
  );
}