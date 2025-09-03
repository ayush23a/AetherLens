import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'client' | 'contributor' | 'admin';
  subscription?: 'free' | 'standard' | 'plus';
  imagesUsed?: number;
  imagesLimit?: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, role: 'client' | 'contributor') => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data based on email
    let mockUser: User;
    if (email.includes('admin')) {
      mockUser = {
        id: '1',
        email,
        name: 'Admin User',
        role: 'admin',
      };
    } else if (email.includes('contributor')) {
      mockUser = {
        id: '2',
        email,
        name: 'Contributor User',
        role: 'contributor',
      };
    } else {
      mockUser = {
        id: '3',
        email,
        name: 'Client User',
        role: 'client',
        subscription: 'free',
        imagesUsed: 3,
        imagesLimit: 10,
      };
    }
    
    setUser(mockUser);
    setIsLoading(false);
  };

  const register = async (email: string, password: string, name: string, role: 'client' | 'contributor') => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      role,
      subscription: role === 'client' ? 'free' : undefined,
      imagesUsed: 0,
      imagesLimit: role === 'client' ? 10 : undefined,
    };
    
    setUser(newUser);
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};