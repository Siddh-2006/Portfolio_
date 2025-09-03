import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { userData } from '../../data/userData';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: `https://github.com/${userData.github}`,
      color: 'gray',
      handle: `@${userData.github}`
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: `https://linkedin.com/in/${userData.linkedin}`,
      color: 'blue',
      handle: `@${userData.linkedin}`
    },
    {
      name: 'LeetCode',
      icon: <ExternalLink size={20} />,
      url: `https://leetcode.com/${userData.leetcode}`,
      color: 'orange',
      handle: `@${userData.leetcode}`
    }
  ];

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
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities in AI, cybersecurity, or web development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-black/40 backdrop-blur-md border border-pink-500/20 rounded-2xl p-8 hover:border-pink-500/40 transition-all duration-300">
              <h2 className="text-2xl font-bold text-pink-400 mb-6 flex items-center gap-2">
                <MessageCircle size={24} />
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-black/20 rounded-lg hover:bg-black/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href={`mailto:${userData.email}`} className="text-green-400 hover:text-green-300 font-semibold">
                      {userData.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-black/20 rounded-lg hover:bg-black/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href={`tel:+91${userData.phone}`} className="text-blue-400 hover:text-blue-300 font-semibold">
                      +91-{userData.phone}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-black/20 rounded-lg hover:bg-black/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-purple-400 font-semibold">Surat, Gujarat, India</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300">
              <h2 className="text-2xl font-bold text-purple-400 mb-6">Connect With Me</h2>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-black/20 rounded-lg hover:bg-black/40 transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br from-${social.color}-500 to-${social.color}-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white">{social.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white">{social.name}</p>
                      <p className="text-gray-400 text-sm">{social.handle}</p>
                    </div>
                    <ExternalLink className="text-gray-500 group-hover:text-white transition-colors" size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-green-400 mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-gray-400 text-sm">Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">&lt;24h</div>
                  <div className="text-gray-400 text-sm">Response Time</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-black/40 backdrop-blur-md border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300">
              <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                <Send size={24} />
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-gray-400 text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/60 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-gray-400 text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/60 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-gray-400 text-sm font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/60 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <label className="block text-gray-400 text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/60 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </motion.button>
              </form>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl border border-green-500/20"
            >
              <h3 className="text-lg font-bold text-white mb-3">Let's Build Something Amazing Together!</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Whether you have a project idea, need consultation on AI/ML implementations, cybersecurity solutions, 
                or just want to discuss the latest in technology, I'm always excited to connect with fellow innovators 
                and problem solvers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;