'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiEnvelope, HiPhone, HiMapPin, HiCodeBracket, HiRocketLaunch } from 'react-icons/hi2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faChalkboardTeacher, faTrophy } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1]
      },
    },
  };

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/loayeldin77', icon: faGithub, brand: true },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/loayeldin77', icon: faLinkedin, brand: true },
    { name: 'Twitter', href: 'https://twitter.com/loayeldin77', icon: faTwitter, brand: true },
    { name: 'WhatsApp', href: 'https://wa.me/20114499922', icon: faWhatsapp, brand: true },
  ];

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Competitions', href: '/competitions' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative border-t border-gold-500/20 bg-black/50 backdrop-blur-md">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-gold-500/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent mb-3">
                Loay Eldin
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Award-Winning Robotics Engineer & Full Stack Developer. 
                Building intelligent systems and empowering future innovators.
              </p>
            </div>
            
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 bg-gold-500/10 border border-gold-500/30 rounded-lg flex items-center justify-center text-gold-300 hover:bg-gold-500/20 hover:border-gold-400/50 transition-all duration-300"
                >
                  <span className="text-lg"><FontAwesomeIcon icon={link.icon} /></span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-bold text-gold-300">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-gold-300 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-bold text-gold-300">Expertise</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <HiCodeBracket className="text-gold-400 text-lg" />
                <span className="text-neutral-400 text-sm">Full Stack Development</span>
              </div>
              <div className="flex items-center gap-3">
                <HiRocketLaunch className="text-gold-400 text-lg" />
                <span className="text-neutral-400 text-sm">Robotics & AI</span>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faChalkboardTeacher} className="text-gold-400 text-lg" />
                <span className="text-neutral-400 text-sm">Tech Education</span>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faTrophy} className="text-gold-400 text-lg" />
                <span className="text-neutral-400 text-sm">Competitive Excellence</span>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-bold text-gold-300">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <HiEnvelope className="text-gold-400 text-lg" />
                <a
                  href="mailto:loayeldin77@gmail.com"
                  className="text-neutral-400 hover:text-gold-300 transition-colors text-sm"
                >
                  loayeldin77@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <HiPhone className="text-gold-400 text-lg" />
                <a
                  href="tel:+20114499922"
                  className="text-neutral-400 hover:text-gold-300 transition-colors text-sm"
                >
                  +20 114 499 922
                </a>
              </div>
              <div className="flex items-center gap-3">
                <HiMapPin className="text-gold-400 text-lg" />
                <span className="text-neutral-400 text-sm">Cairo, Egypt</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gold-500/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-neutral-400 text-sm">
              © {currentYear} Loay Eldin Mohamed Mahmoud. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-neutral-400 text-sm">
              <span>dev by FRع</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
