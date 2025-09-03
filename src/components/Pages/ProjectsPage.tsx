import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { userData } from '../../data/userData';
import { Github, ExternalLink, Code, Zap, Calendar, Tag } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of innovative solutions and creative implementations
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {userData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div 
                className="bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 h-full hover:border-purple-500/40 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-purple-500/10"
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {project.name}
                    </h2>
                    <p className="text-purple-400 font-semibold mb-3">{project.description}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <Calendar size={14} />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.links.website && (
                      <motion.a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-500/40 transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="w-10 h-10 bg-gray-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-500/40 transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 px-3 py-1 rounded-full text-sm border border-pink-500/30 hover:border-pink-500/50 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Project Highlights Preview */}
                <div className="space-y-2">
                  {project.highlights.slice(0, 2).map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-3 text-gray-300">
                      <Zap className="text-purple-400 mt-1 flex-shrink-0" size={14} />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                  {project.highlights.length > 2 && (
                    <p className="text-purple-400 text-sm font-semibold">
                      Click to see {project.highlights.length - 2} more highlights...
                    </p>
                  )}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-black/90 border border-purple-500/30 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-3xl font-bold text-white">
                    {userData.projects[selectedProject].name}
                  </h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-purple-400 mb-4">Project Details</h3>
                    <p className="text-gray-300 mb-4">{userData.projects[selectedProject].description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="text-purple-400" size={16} />
                        <span className="text-gray-300">{userData.projects[selectedProject].duration}</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {userData.projects[selectedProject].technologies.map((tech, index) => (
                          <span
                            key={tech}
                            className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-4">Key Highlights</h3>
                    <div className="space-y-3">
                      {userData.projects[selectedProject].highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300">{highlight}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex gap-4">
                      {userData.projects[selectedProject].links.website && (
                        <a
                          href={userData.projects[selectedProject].links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                      {userData.projects[selectedProject].links.github && (
                        <a
                          href={userData.projects[selectedProject].links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                          <Github size={16} />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional Projects Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20"
        >
          <Code className="text-purple-400 mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Currently working on exciting new projects involving AI/ML, blockchain, and advanced web applications.
            Stay tuned for updates!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold"
          >
            <Github size={16} />
            View GitHub Profile
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;