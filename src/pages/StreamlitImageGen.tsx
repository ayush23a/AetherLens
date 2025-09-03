import React from "react";
import { Header } from "../components/Header";

export const StreamlitImageGen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6">Streamlit Image Generator</h1>
        <p className="text-lg text-indigo-600 mb-6">
          This will redirect you to the Streamlit app.
        </p>
        <a
          href="http://localhost:8501"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow hover:from-orange-600 hover:to-red-600 transition"
        >
          Open Streamlit App
        </a>
      </div>
    </div>
  );
};
