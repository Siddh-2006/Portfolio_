import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { userData } from '../../data/userData';
import { Code, Database, Shield, Cpu, Globe, PenTool as Tool } from 'lucide-react';

const SkillsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const skillCategories = [
    {
      id: 'languages',
      name: 'Languages',
      icon: <Code className="w-6 h-6" />,
      skills: userData.skills.languages,
      color: 'green'
    },
    {
      id: 'frameworks',
      name: 'Frameworks & Tools',
      icon: <Tool className="w-6 h-6" />,
      skills: userData.skills.frameworks,
      color: 'blue'
    },
    // {
    //   id: 'cybersecurity',
    //   name: 'Cybersecurity',
    //   icon: <Shield className="w-6 h-6" />,
    //   skills: ['Volatility', 'Wireshark', 'NMAP', 'SPARTA', 'DNSENUM', 'NESSUS', 'AMASS', 'Autopsy', 'Digital Forensics', 'Penetration Testing'],
    //   color: 'red'
    // },
    {
      id: 'ai_ml',
      name: 'AI & Machine Learning',
      icon: <Cpu className="w-6 h-6" />,
      skills: ['TensorFlow', 'PyTorch', 'Keras', 'scikit-learn', 'OpenCV', 'Neural Networks', 'Deep Learning', 'Computer Vision'],
      color: 'purple'
    },
    {
      id: 'web',
      name: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      skills: ['React', 'Next.js', 'Node.js', 'HTML5', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
      color: 'orange'
    },
    {
      id: 'database',
      name: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Database Design', 'Query Optimization'],
      color: 'teal'
    }
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return skillCategories;
    }
    return skillCategories.filter(cat => cat.id === activeCategory);
  };

  const getSkillLevel = (skill: string) => {
    // Simulate skill levels based on the skill name
    const highLevel = ['Python', 'JavaScript', 'React', 'Node.js', 'HTML5', 'CSS', 'TensorFlow', 'PyTorch'];
    const mediumLevel = ['C++', 'TypeScript', 'Next.js', 'MySQL', 'PostgreSQL'];
    
    if (highLevel.includes(skill)) return 90;
    if (mediumLevel.includes(skill)) return 75;
    return 60;
  };

  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                : 'bg-black/40 text-gray-400 hover:text-white border border-gray-700 hover:border-green-500/50'
            }`}
          >
            All Skills
          </motion.button>
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 text-white`
                  : 'bg-black/40 text-gray-400 hover:text-white border border-gray-700 hover:border-green-500/50'
              }`}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-12"
          >
            {getFilteredSkills().map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-black/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 rounded-lg flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const skillLevel = getSkillLevel(skill);
                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        className="bg-black/60 rounded-xl p-4 border border-gray-600/50 hover:border-green-500/50 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-white">{skill}</h3>
                          <span className={`text-${category.color}-400 text-sm font-mono`}>
                            {skillLevel}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skillLevel}%` }}
                            transition={{ delay: 0.5 + skillIndex * 0.05, duration: 1 }}
                            className={`bg-gradient-to-r from-${category.color}-500 to-${category.color}-400 h-2 rounded-full`}
                          />
                        </div>
                        
                        {/* Skill level indicator */}
                        <div className="flex justify-between text-xs text-gray-400 mt-2">
                          <span>Beginner</span>
                          <span>Expert</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: 'Programming Languages', count: userData.skills.languages.length, color: 'green' },
            { label: 'Frameworks & Tools', count: userData.skills.frameworks.length, color: 'blue' },
            { label: 'Years of Experience', count: '2+', color: 'purple' },
            { label: 'Projects Completed', count: '10+', color: 'pink' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className={`bg-black/40 backdrop-blur-md border border-${stat.color}-500/20 rounded-xl p-6 text-center hover:border-${stat.color}-500/40 transition-all duration-300`}
            >
              <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>
                {stat.count}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl border border-green-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Always staying updated with the latest technologies and best practices in AI, cybersecurity, and web development.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Quantum Computing', 'Blockchain', 'Advanced AI', 'Cloud Security', 'DevOps'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/30 hover:border-green-500/50 transition-all duration-300"
              >
                📚 Learning {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;