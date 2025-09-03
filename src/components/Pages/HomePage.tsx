import React from 'react';
import { motion } from 'framer-motion';
import { userData } from '../../data/userData';
import { ChevronDown, Terminal, Code, Database } from 'lucide-react';

const HomePage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center"
      >
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 text-green-400 animate-pulse">
          <Terminal size={24} />
        </div>
        <div className="absolute top-32 right-16 text-blue-400 animate-bounce">
          <Code size={20} />
        </div>
        <div className="absolute bottom-40 left-20 text-purple-400 animate-pulse">
          <Database size={18} />
        </div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.h1 
            className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {userData.name}
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60%' }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 mx-auto mb-8 rounded-full"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-xl md:text-3xl text-gray-300 font-mono mb-4">
            {userData.title}
          </p>
          <p className="text-lg text-gray-400 mb-2">
            Sardar Vallabhbhai National Institute of Technology, Surat
          </p>
          <p className="text-green-400 font-mono text-lg">
            CGPA: 9.72 | Roll No: U23AI017
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Passionate AI enthusiast and cybersecurity researcher, crafting innovative solutions 
              through cutting-edge technology and creative problem-solving.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="text-green-400 text-2xl mb-3">🎯</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">AI & ML</h3>
                <p className="text-gray-400">Developing intelligent systems with PyTorch, TensorFlow, and cutting-edge algorithms</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-black/40 backdrop-blur-md border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="text-blue-400 text-2xl mb-3">🛡️</div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Cybersecurity</h3>
                <p className="text-gray-400">Expert in digital forensics, penetration testing, and security analysis</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="text-purple-400 text-2xl mb-3">💻</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Full Stack</h3>
                <p className="text-gray-400">Building modern web applications with React, Next.js, and Node.js</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <p className="text-green-400 font-mono mb-4 animate-pulse">
            Type "help" in terminal for navigation commands
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="text-green-400" size={32} />
          </motion.div>
        </motion.div>

        {/* Floating Terminal Hint */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="fixed bottom-20 left-8 bg-black/80 backdrop-blur-md border border-green-500/30 rounded-lg p-4 font-mono text-sm text-green-400 max-w-xs hidden lg:block"
        >
          <div className="flex items-center gap-2 mb-2">
            <Terminal size={16} />
            <span>Quick Commands:</span>
          </div>
          <div className="text-xs text-gray-400 space-y-1">
            <div>cd about - View profile</div>
            <div>cd projects - See work</div>
            <div>cd skills - Tech stack</div>
            <div>ls - List contents</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;