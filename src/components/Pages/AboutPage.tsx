import React from 'react';
import { motion } from 'framer-motion';
import { userData } from '../../data/userData';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
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
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all duration-300">
              <h2 className="text-2xl font-bold text-green-400 mb-4">Personal Info</h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="text-green-400">📧</span>
                  <span>{userData.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">📱</span>
                  <span>+91-{userData.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-green-400" size={16} />
                  <span>Surat, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">🎯</span>
                  <span>AI Enthusiast & DSA Expert</span>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Interests</h2>
              <div className="grid grid-cols-2 gap-3">
                {['Artificial Intelligence', 'Cybersecurity', 'Web Development', 'Data Science', 'Digital Forensics', 'Machine Learning'].map((interest, index) => (
                  <motion.span
                    key={interest}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg text-sm text-center cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300">
              <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                <GraduationCap size={24} />
                Education
              </h2>
              
              <div className="space-y-6">
                {userData.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.2 }}
                    className="border-l-2 border-purple-500/30 pl-6 relative"
                  >
                    <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-2 top-2"></div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-purple-300">{edu.institute}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="flex items-center gap-2 text-green-400">
                          <Award size={16} />
                          <span className="font-mono">{edu.grade}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar size={16} />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'CGPA', value: '8.3', color: 'green' },
            { label: 'Projects', value: '5+', color: 'blue' },
            { label: 'Skills', value: '15+', color: 'purple' },
            // { label: 'Experience', value: '1+ Year', color: 'pink' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className={`bg-black/40 backdrop-blur-md border border-${stat.color}-500/20 rounded-xl p-6 text-center hover:border-${stat.color}-500/40 transition-all duration-300`}
            >
              <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;