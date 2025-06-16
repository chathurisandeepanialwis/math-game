import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ProgressContextType {
  totalStars: number;
  sessionStars: number;
  addStar: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

interface ProgressProviderProps {
  children: ReactNode;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children }) => {
  const [totalStars, setTotalStars] = useState(0);
  const [sessionStars, setSessionStars] = useState(0);

  const addStar = () => {
    setTotalStars(prev => prev + 1);
    setSessionStars(prev => prev + 1);
  };

  return (
    <ProgressContext.Provider value={{ totalStars, sessionStars, addStar }}>
      {children}
    </ProgressContext.Provider>
  );
};