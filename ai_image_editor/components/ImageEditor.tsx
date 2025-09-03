import React from "react";

const ImageEditor: React.FC = () => {
  return (
    <div className="p-8 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">
        AI Image Editor
      </h2>
      <p className="text-indigo-500">
        Your editor UI goes here (toolbar, canvas, settings).
      </p>
    </div>
  );
};

export default ImageEditor;