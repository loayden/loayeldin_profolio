'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'GitHub', href: 'https://github.com/loayeldin', icon: FaGithub },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/loayeldin', icon: FaLinkedin },
    { name: 'Email', href: 'mailto:loay.eldin@example.com', icon: FaEnvelope },
  ];

  return (
    <footer className="relative border-t border-gold-700/10 bg-dark-900/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-2xl font-bold gradient-text font-display">LE</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Award-winning Full Stack Developer & Robotics Engineer from Egypt. Building intelligent systems and empowering future innovators.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="font-bold text-white">Quick Links</h4>
              <nav className="space-y-2">
                {['About', 'Skills', 'Achievements', 'Projects', 'Contact'].map((link) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="block text-gray-400 hover:text-gold-400 text-sm smooth-transition"
                  >
                    {link}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="font-bold text-white">Connect</h4>
              <div className="flex gap-4">
                {footerLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-2xl text-gold-400 hover:text-gold-300 smooth-transition"
                      title={link.name}
                    >
                      <Icon />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gold-700/10 my-8" />

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500"
          >
            <p>
              © {currentYear} Loay Eldin Mohamed Mahmoud. All rights reserved. | Represented Egypt globally across 6+ countries.
            </p>

            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ color: '#C9A14A' }}
                className="hover:text-gold-400 smooth-transition"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#C9A14A' }}
                className="hover:text-gold-400 smooth-transition"
              >
                Terms of Service
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-gold-700 text-black rounded-lg hover:glow-gold-lg smooth-transition md:flex hidden items-center justify-center"
        title="Back to top"
      >
        ↑
      </motion.button>
    </footer>
  );
}
