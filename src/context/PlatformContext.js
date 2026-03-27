'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const PlatformContext = createContext();

export function PlatformProvider({ children }) {
  const [platform, setPlatform] = useState('threads'); // 'threads' | 'instagram'

  return (
    <PlatformContext.Provider value={{ platform, setPlatform }}>
      {children}
    </PlatformContext.Provider>
  );
}

export function usePlatform() {
  const context = useContext(PlatformContext);
  if (!context) {
    throw new Error('usePlatform must be used within a PlatformProvider');
  }
  return context;
}
