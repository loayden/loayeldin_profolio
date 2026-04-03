'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from './ThemeProvider';

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

  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { name: 'Overview', href: '#overview' },
    { name: 'Device', href: '#device' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Interactions', href: '#interactions' },
    { name: 'Use Cases', href: '#usecases' },
    { name: 'Specs', href: '#specs' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-dark'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#overview"
            whileHover={{ scale: 1.05 }}
            className="text-2xl md:text-3xl font-bold gradient-text font-display"
          >
            AR Glasses
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              className="text-sm md:text-base font-medium text-neutral-300 hover:text-ios-blue/90 smooth-transition"
            >
              {item.name}
            </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block p-2 rounded-full bg-ios-blue/10 border border-ios-blue/30 hover:bg-ios-blue/20 smooth-transition"
            aria-label="Toggle theme"
            title="Toggle Light/Dark Mode"
          >
            {theme === 'dark' ? <HiSun className="w-5 h-5 text-ios-orange" /> : <HiMoon className="w-5 h-5 text-neutral-300" />}
          </motion.button>

          {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-ios-blue text-2xl"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark mt-4 p-6 rounded-lg space-y-4"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-gold-700 font-medium smooth-transition"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="w-full p-3 bg-ios-blue/10 border border-ios-blue/20 rounded-xl backdrop-blur-sm hover:bg-ios-blue/20 transition-colors"
            >
              <span className="font-semibold text-sm">
                {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
