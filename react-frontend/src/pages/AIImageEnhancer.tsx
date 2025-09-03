import React from "react";
import { Header } from "../components/Header";
// import ImageEditor from "../../../ai_image_editor/components/ImageEditor";

export const AIImageEnhancer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6">
          AI Image Enhancer
        </h1>
        <p className="text-lg text-indigo-600 mb-8">
          Enhance and edit your images with AI tools:
        </p>

        {/* ✅ Render the editor */}
        {/* <ImageEditor /> */}
      </div>
    </div>
  );
};