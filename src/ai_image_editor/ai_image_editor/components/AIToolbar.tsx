"use client";
import React from "react";
import { useFileAIStore, type AITransformationType } from "@/store/useFileAIStore";
import { FaMagic, FaImage, FaSyncAlt, FaClone, FaStar, FaExpandArrowsAlt, FaUser, FaCrop } from "react-icons/fa";

const toolsConfig = [
  {
    id: "removebg" as AITransformationType,
    icon: FaMagic,
    name: "Remove Background",
    description: "AI-powered background removal"
  },
  {
    id: "bgremove" as AITransformationType,
    icon: FaImage,
    name: "Background Remove",
    description: "Fast background removal"
  },
  {
    id: "changebg" as AITransformationType,
    icon: FaSyncAlt,
    name: "Change Background",
    description: "Replace with AI-generated background"
  },
  {
    id: "dropshadow" as AITransformationType,
    icon: FaClone,
    name: "Drop Shadow",
    description: "Add realistic drop shadow"
  },
  {
    id: "retouch" as AITransformationType,
    icon: FaStar,
    name: "AI Retouch",
    description: "Enhance image quality"
  },
  {
    id: "upscale" as AITransformationType,
    icon: FaExpandArrowsAlt,
    name: "AI Upscale",
    description: "Increase resolution with AI"
  },
  {
    id: "facecrop" as AITransformationType,
    icon: FaUser,
    name: "Face Crop",
    description: "Auto-crop around faces"
  },
  {
    id: "smartcrop" as AITransformationType,
    icon: FaCrop,
    name: "Smart Crop",
    description: "AI-powered intelligent cropping"
  }
];

export default function AIToolbar() {
  const { 
    uploadedFile, 
    activeTransformation, 
    isTransforming,
    setActiveTransformation,
    setIsTransforming,
    setTransformedImageUrl,
    setError
  } = useFileAIStore();

  const handleToolClick = async (toolId: AITransformationType) => {
    if (!uploadedFile || isTransforming || activeTransformation === toolId) {
      return;
    }

    try {
      setError(null);
      setIsTransforming(true);
      setActiveTransformation(toolId);

      const response = await fetch("/api/imagekit/transform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileId: uploadedFile.fileId,
          transformation: toolId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to apply transformation");
      }

      const { transformedUrl } = await response.json();
      setTransformedImageUrl(transformedUrl);
    } catch (error) {
      console.error("Transformation error:", error);
      setError("Failed to apply transformation. Please try again.");
      setActiveTransformation(null);
    } finally {
      setIsTransforming(false);
    }
  };

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="glassmorphism rounded-2xl p-3 shadow-2xl bg-white/95 backdrop-blur-[10px] border border-white/20">
        <div className="flex flex-col space-y-3">
          {toolsConfig.map((tool) => {
            const IconComponent = tool.icon;
            const isActive = activeTransformation === tool.id;
            const isDisabled = !uploadedFile || isTransforming;
            
            return (
              <div key={tool.id} className="relative group">
                <button
                  className={`tool-button w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30"
                      : isDisabled
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-0.5"
                  }`}
                  onClick={() => handleToolClick(tool.id)}
                  disabled={isDisabled}
                  data-testid={`tool-${tool.id}`}
                >
                  <IconComponent className="text-lg" />
                </button>
                <div className="absolute left-16 top-0 bg-gray-900 text-white text-sm rounded-lg py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                  <div className="font-semibold">{tool.name}</div>
                  <div className="text-xs text-gray-300">{tool.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
