import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const pages = [
    { name: 'home', label: 'Home', icon: '~' },
    { name: 'about', label: 'About', icon: 'ℹ' },
    { name: 'experience', label: 'Experience', icon: '⚡' },
    { name: 'projects', label: 'Projects', icon: '⚗' },
    { name: 'skills', label: 'Skills', icon: '⚙' },
    { name: 'contact', label: 'Contact', icon: '📡' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-green-400 font-mono text-xl font-bold"
          >
            miten@portfolio:~
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-1">
            {pages.map((page) => (
              <motion.button
                key={page.name}
                onClick={() => onNavigate(page.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                  currentPage === page.name
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'text-gray-400 hover:text-green-400 hover:bg-green-500/10'
                }`}
              >
                <span className="mr-2">{page.icon}</span>
                {page.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-green-400 hover:text-green-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-black/40 backdrop-blur-md border-t border-green-500/20">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {pages.map((page) => (
            <button
              key={page.name}
              onClick={() => onNavigate(page.name)}
              className={`block px-3 py-2 text-sm font-mono transition-colors w-full text-left ${
                currentPage === page.name
                  ? 'text-green-400 bg-green-500/10'
                  : 'text-gray-400 hover:text-green-400'
              }`}
            >
              <span className="mr-2">{page.icon}</span>
              {page.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;