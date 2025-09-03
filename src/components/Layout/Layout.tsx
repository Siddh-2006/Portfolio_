import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Scene3D from '../3D/Scene3D';
import Terminal from '../Terminal/Terminal';
import Navigation from '../Navigation/Navigation';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);

  const toggleTerminal = () => {
    setIsTerminalVisible(!isTerminalVisible);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white overflow-x-hidden">
      {/* <Scene3D /> */}
      
      {/* Navigation */}
      <Navigation currentPage={currentPage} onNavigate={onNavigate} />
      
      {/* Main Content */}
      <motion.main
        key={currentPage}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        {children}
      </motion.main>

      {/* Terminal */}
      <Terminal
        currentPage={currentPage}
        onNavigate={onNavigate}
        isVisible={isTerminalVisible}
        onToggle={toggleTerminal}
      />

      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      <div className="fixed top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
      <div className="fixed bottom-32 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
    </div>
  );
};

export default Layout;