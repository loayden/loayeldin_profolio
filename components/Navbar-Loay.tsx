'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Competitions', href: '/competitions' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-gold border-gold-500/20 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent font-display">
              L.E
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                <Link
                  href={item.href}
                  className="text-sm md:text-base font-medium text-neutral-300 hover:text-gold-300 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link
              href="/contact"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold rounded-lg gold-glow-sm hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Get In Touch
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gold-400 text-2xl p-2 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
          </motion.button>
        </div>

        {/* Mobile Menu - Enhanced for better mobile experience */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-gold border-gold-500/20 mt-4 p-4 rounded-xl space-y-3 backdrop-blur-md max-h-[80vh] overflow-y-auto"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-neutral-300 hover:text-gold-300 font-medium text-lg py-3 px-4 rounded-lg hover:bg-gold-500/10 touch-manipulation min-h-[48px] flex items-center transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full px-6 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold rounded-xl flex items-center justify-center gap-2 touch-manipulation min-h-[56px] hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Get In Touch
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
