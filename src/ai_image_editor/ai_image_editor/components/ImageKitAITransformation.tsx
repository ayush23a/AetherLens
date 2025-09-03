"use client";
import React, { useRef, useState, useEffect } from "react";
import { useFileAIStore } from "@/store/useFileAIStore";
import { FaCloudUploadAlt, FaDownload, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export default function ImageKitAITransformation() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const {
    uploadedFile,
    progress,
    isUploading,
    activeTransformation,
    transformedImageUrl,
    isTransforming,
    error,
    setUploadedFile,
    setProgress,
    setIsUploading,
    setActiveTransformation,
    setTransformedImageUrl,
    setError,
    reset,
  } = useFileAIStore();

  const [authParams, setAuthParams] = useState<any>(null);

  useEffect(() => {
    // Get ImageKit auth parameters
    const getAuthParams = async () => {
      try {
        const response = await fetch("/api/imagekit/auth");
        if (response.ok) {
          const params = await response.json();
          setAuthParams(params);
        }
      } catch (error) {
        console.error("Failed to get auth params:", error);
      }
    };
    
    getAuthParams();
  }, []);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    if (file.size > 100 * 1024 * 1024) { // 100MB limit
      setError("File size must be less than 100MB.");
      return;
    }

    uploadFile(file);
  };

  const uploadFile = async (file: File) => {
    if (!authParams) {
      setError("Authentication not ready. Please try again.");
      return;
    }

    setError(null);
    setIsUploading(true);
    setProgress(0);

    try {
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setProgress((prev: number) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return prev;
          }
          return Math.min(prev + Math.random() * 15, 90);
        });
      }, 200);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", file.name);
      formData.append("token", authParams.token);
      formData.append("signature", authParams.signature);
      formData.append("expire", authParams.expire);
      formData.append("publicKey", process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "public_0aERNsDnwO5fXuia2sJjCA15LVc=");
      formData.append("folder", "/myimages");

      const response = await fetch("https://upload.imagekit.io/api/v1/files/upload", {
        method: "POST",
        body: formData,
      });

      clearInterval(progressInterval);
      setProgress(100);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Upload failed with status:", response.status, errorText);
        throw new Error(`Upload failed: ${response.status} - ${errorText}`);
      }

      const result = await response.json();

      const uploadedFileData = {
        url: result.url,
        fileId: result.fileId,
        name: result.name,
        type: "image" as const,
        thumbnailUrl: result.thumbnailUrl,
        size: result.size,
        format: result.fileType?.toUpperCase(),
        dimensions: result.width && result.height ? `${result.width} × ${result.height}` : undefined,
      };

      setUploadedFile(uploadedFileData);
    } catch (error) {
      console.error("Upload error:", error);
      setError("Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const showOriginalImage = () => {
    setActiveTransformation(null);
    setTransformedImageUrl(null);
  };

  const downloadImage = () => {
    if (!uploadedFile) return;

    const imageUrl = transformedImageUrl || uploadedFile.url;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `transformed_${uploadedFile.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getTransformationName = (transformation: string) => {
    const names: Record<string, string> = {
      removebg: "Background Removed",
      bgremove: "Background Removed (Efficient)",
      changebg: "Background Changed",
      dropshadow: "Drop Shadow Added",
      retouch: "AI Retouched",
      upscale: "AI Upscaled",
      facecrop: "Face Cropped",
      smartcrop: "Smart Cropped",
    };
    return names[transformation] || "Transformed";
  };

  if (!uploadedFile) {
    return (
      <div className="max-w-2xl mx-auto">
        <div
          className={`image-dropzone rounded-2xl p-12 text-center bg-white shadow-sm border-2 border-dashed transition-all duration-300 ${
            dragOver
              ? "border-blue-500 bg-blue-50 scale-105"
              : "border-gray-300 hover:border-blue-500 hover:bg-blue-50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          data-testid="upload-dropzone"
        >
          <div className="mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCloudUploadAlt className="text-2xl text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Your Image</h3>
            <p className="text-gray-600 mb-6">Drag and drop your image here, or click to browse</p>

            <button
              className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl"
              onClick={() => fileInputRef.current?.click()}
              data-testid="upload-button"
            >
              Choose Image
            </button>

            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
              data-testid="file-input"
            />
          </div>

          <div className="text-xs text-gray-500">
            Supports: JPG, PNG, WebP, GIF (Max 100MB)
          </div>
        </div>

        {isUploading && (
          <div className="mt-6" data-testid="upload-progress">
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
              {Math.round(progress)}% uploaded
            </p>
          </div>
        )}

        {error && (
          <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4" data-testid="upload-error">
            <div className="flex items-center">
              <FaExclamationTriangle className="text-red-600 mr-2" />
              <span className="text-red-700">{error}</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Image Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-gray-900" data-testid="image-title">
            {isTransforming
              ? "Applying transformation..."
              : activeTransformation
              ? getTransformationName(activeTransformation)
              : "Original Image"}
          </h2>
          {activeTransformation && !isTransforming && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium" data-testid="transformation-badge">
              {getTransformationName(activeTransformation)}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-3">
          {transformedImageUrl && !isTransforming && (
            <button
              className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium"
              onClick={showOriginalImage}
              data-testid="show-original-button"
            >
              Show Original
            </button>
          )}
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            onClick={downloadImage}
            data-testid="download-button"
          >
            <FaDownload className="mr-2 inline" />
            Download
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-center">
          <div className="relative">
            {/* Loading State */}
            {isTransforming && (
              <div className="absolute inset-0 bg-white bg-opacity-90 rounded-xl flex items-center justify-center z-10" data-testid="transformation-loader">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-700 font-medium">Applying AI transformation...</p>
                  <p className="text-sm text-gray-500 mt-1">This may take a few seconds</p>
                </div>
              </div>
            )}

            {/* Image Display */}
            <div className="transformation-preview rounded-xl overflow-hidden shadow-lg">
              <img
                src={transformedImageUrl || uploadedFile.url}
                alt="Image preview"
                className="max-w-full max-h-96 object-contain"
                data-testid="image-display"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image Information */}
      <div className="mt-6 bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Image Details</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="text-gray-500">Format</div>
            <div className="font-medium" data-testid="image-format">
              {uploadedFile.format || "Unknown"}
            </div>
          </div>
          <div>
            <div className="text-gray-500">Dimensions</div>
            <div className="font-medium" data-testid="image-dimensions">
              {uploadedFile.dimensions || "Unknown"}
            </div>
          </div>
          <div>
            <div className="text-gray-500">File Size</div>
            <div className="font-medium" data-testid="image-size">
              {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
            </div>
          </div>
          <div>
            <div className="text-gray-500">Status</div>
            <div className="font-medium text-green-600" data-testid="image-status">
              <FaCheckCircle className="inline mr-1" />
              Ready
            </div>
          </div>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-6 text-center" data-testid="error-section">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaExclamationTriangle className="text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-red-900 mb-2">Transformation Failed</h3>
          <p className="text-red-700 mb-4">{error}</p>
          <button
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            onClick={() => setError(null)}
            data-testid="retry-button"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
