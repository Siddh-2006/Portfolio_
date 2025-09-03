import React from 'react';
import { motion } from 'framer-motion';
import { userData } from '../../data/userData';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

const ExperiencePage: React.FC = () => {
  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {userData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="relative"
            >
              <div className="bg-black/40 backdrop-blur-md border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Company Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center gap-3 mb-4 lg:mb-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{exp.company}</h2>
                      <p className="text-blue-400 font-semibold">{exp.position}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-right">
                    <div className="flex items-center gap-2 text-gray-400 lg:justify-end">
                      <Calendar size={16} />
                      <span className="font-mono">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 lg:justify-end">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-400 mb-4">Key Responsibilities & Achievements:</h3>
                  {exp.description.map((desc, descIndex) => (
                    <motion.div
                      key={descIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + descIndex * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-black/20 rounded-lg hover:bg-black/40 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack Used */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h4 className="text-md font-semibold text-purple-400 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Volatility', 'Wireshark', 'Autopsy', 'NMAP', 'SPARTA', 'DNSENUM', 'NESSUS', 'AMASS'].map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + techIndex * 0.05 }}
                        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {userData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, rotateX: 2 }}
                className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                </div>
                <p className="text-green-400 font-semibold">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mt-2">{cert.date}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-3 text-sm"
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready for New Challenges</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Always eager to learn and contribute to innovative projects in AI, cybersecurity, and web development.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;