import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Loader } from './components/Loader';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Homepage } from './pages/Homepage';
import { AuthPage } from './pages/AuthPage';
import { ClientDashboard } from './pages/ClientDashboard';
import { ContributorDashboard } from './pages/ContributorDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { ImageBrowse } from './pages/ImageBrowse';
import { Templates } from './pages/Templates';
import { AISolutions } from './pages/AISolutions';
import { BusinessServices } from './pages/BusinessServices';
import { AIImageEnhancer } from './pages/AIImageEnhancer';
import { FastApiImageGenerator } from "./pages/FastApiImageGenerator";
import { StreamlitImageGen } from "./pages/StreamlitImageGen";



function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/images" element={<ImageBrowse />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/ai-solutions" element={<AISolutions />} />
      <Route path="/business" element={<BusinessServices />} />
      <Route path="/ai-image-enhancer" element={<AIImageEnhancer />} />
      <Route path="/fastapi-image-gen" element={<FastApiImageGenerator />} />
  <Route path="/streamlit-image-gen" element={<StreamlitImageGen />} />

      
      {/* Protected Routes */}
      <Route 
        path="/client-dashboard" 
        element={user ? <ClientDashboard /> : <Navigate to="/auth" />} 
      />
      <Route 
        path="/contributor-dashboard" 
        element={user?.role === 'contributor' || user?.role === 'admin' ? <ContributorDashboard /> : <Navigate to="/auth" />} 
      />
      <Route 
        path="/admin-dashboard" 
        element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/auth" />} 
      />
    </Routes>
  );
}

function App() {
  useEffect(() => {
    // Dynamically add the AI agent script
    const script = document.createElement("script");
    script.src =
      "https://cdn.jotfor.ms/agent/embedjs/019904c5e84f78b89d98246880863a7dfd5f/embed.js?skipWelcome=1&maximizable=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;