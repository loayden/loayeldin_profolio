'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faGlobe, faRobot, faChalkboardTeacher, faMedal } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1] 
      },
    },
  };

  return (
    <section 
      ref={ref}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 lg:pt-28 overflow-hidden"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-gold-500/15 via-gold-400/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-gold-400/10 via-transparent to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-conic from-gold-500/5 via-transparent to-gold-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-gradient-to-r from-gold-500/20 via-gold-400/30 to-gold-500/20 rounded-full blur-2xl"
        />
      </div>

      {/* Floating Country Flags - Hidden on mobile for cleaner look */}
      <div className="hidden md:block">
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-10 md:left-20 text-4xl md:text-5xl opacity-60"
        >
          🇪🇬
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-48 right-10 md:right-32 text-3xl md:text-4xl opacity-40"
        >
          🇺🇸
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-48 left-16 md:left-28 text-3xl md:text-4xl opacity-50"
        >
          🇬🇷
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-40 left-1/4 text-2xl md:text-3xl opacity-30"
        >
          🇨🇳
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-32 right-16 md:right-24 text-2xl md:text-3xl opacity-40"
        >
          🇹🇷
        </motion.div>
      </div>

      {/* Floating Achievement Badges - Smaller on mobile */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden md:block absolute top-1/3 left-4 md:left-12 glass-gold rounded-xl p-3 border border-gold-500/30 gold-glow-sm"
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faMedal} className="text-2xl text-yellow-400" />
          <span className="text-xs text-gold-200 font-medium">MRC Greece<br/>Champion</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:block absolute top-1/2 right-4 md:right-12 glass-gold rounded-xl p-3 border border-gold-500/30 gold-glow-sm"
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faMedal} className="text-2xl text-gray-300" />
          <span className="text-xs text-gold-200 font-medium">Robo Tourney<br/>USA 2nd</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="hidden md:block absolute bottom-1/4 left-8 md:left-20 glass rounded-xl p-3 border border-neutral-700/50"
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faTrophy} className="text-2xl text-gold-400" />
          <span className="text-xs text-neutral-300 font-medium">15+ Awards<br/>Global</span>
        </div>
      </motion.div>

      {/* Main Content with Parallax */}
      <motion.div
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center space-y-6 md:space-y-8 relative z-10"
      >
        {/* Premium Badge */}
        <motion.div variants={itemVariants}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 glass-gold rounded-full text-sm font-medium backdrop-blur-md gold-glow-sm border border-gold-500/30"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-500"></span>
            </span>
            <span className="text-gold-200">Available for Opportunities</span>
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={itemVariants} className="space-y-3 md:space-y-4">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-bold leading-[0.95] mb-2 md:mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-white via-gold-100 to-gold-300 bg-clip-text text-transparent">
              Loay Eldin
            </span>
          </motion.h1>
          <motion.h2 
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-300 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Mohamed Mahmoud
          </motion.h2>
        </motion.div>

        {/* Title with animated underline */}
        <motion.div variants={itemVariants} className="relative inline-block px-4">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gold-400 mb-2 max-w-4xl mx-auto leading-relaxed tracking-wide">
            Full Stack Developer | Robotics Engineer | React Developer | Tech Educator
          </h3>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
          />
        </motion.div>

        {/* Tagline with enhanced gradient */}
        <motion.div variants={itemVariants} className="px-4">
          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 max-w-5xl mx-auto leading-tight">
            Award-Winning Robotics Engineer & Builder of
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent"> Intelligent Systems</span>
          </h4>
        </motion.div>

        {/* Subheadline with emphasis */}
        <motion.div 
          variants={itemVariants}
          className="glass rounded-2xl px-4 py-3 md:px-6 md:py-4 border border-gold-500/20 max-w-3xl mx-auto mx-4"
        >
          <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed">
            <span className="text-gold-400 font-semibold">Represented Egypt</span> in international competitions across 
            <span className="text-white font-medium"> USA, China, Europe, and Africa</span>
          </p>
        </motion.div>

        {/* Enhanced Achievement Stats - Mobile Optimized */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 pt-6 md:pt-8 px-4"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass-gold rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-gold-500/30 gold-glow-sm touch-manipulation"
          >
            <FontAwesomeIcon icon={faTrophy} className="text-2xl sm:text-3xl md:text-4xl mb-1 md:mb-2 text-gold-400" />
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 md:mb-1">15+</div>
            <div className="text-xs sm:text-sm text-gold-200 leading-tight">International<br className="md:hidden"/> Awards</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass border-neutral-700/50 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:border-gold-400/50 hover:glass-gold touch-manipulation"
          >
            <FontAwesomeIcon icon={faGlobe} className="text-2xl sm:text-3xl md:text-4xl mb-1 md:mb-2 text-gold-400" />
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 md:mb-1">6+</div>
            <div className="text-xs sm:text-sm text-gold-200 leading-tight">Countries<br className="md:hidden"/> Represented</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass border-neutral-700/50 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:border-gold-400/50 hover:glass-gold touch-manipulation"
          >
            <FontAwesomeIcon icon={faRobot} className="text-2xl sm:text-3xl md:text-4xl mb-1 md:mb-2 text-gold-400" />
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 md:mb-1">50+</div>
            <div className="text-xs sm:text-sm text-gold-200 leading-tight">Robotics<br className="md:hidden"/> Projects</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass-gold rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-gold-500/30 gold-glow-sm touch-manipulation"
          >
            <FontAwesomeIcon icon={faChalkboardTeacher} className="text-2xl sm:text-3xl md:text-4xl mb-1 md:mb-2 text-gold-400" />
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 md:mb-1">100+</div>
            <div className="text-xs sm:text-sm text-gold-200 leading-tight">Students<br className="md:hidden"/> Mentored</div>
          </motion.div>
        </motion.div>

        {/* CTAs - Mobile Optimized with larger touch targets */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-6 md:pt-8 px-4"
        >
          <motion.a
            href="#competitions"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold rounded-xl md:rounded-2xl gold-glow-md hover:gold-glow-lg transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 min-h-[56px] touch-manipulation"
          >
            View Achievements <FontAwesomeIcon icon={faTrophy} className="text-lg sm:text-xl" />
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-4 glass-gold text-gold-200 font-medium rounded-xl md:rounded-2xl border border-gold-500/30 hover:border-gold-400/50 gold-glow-sm transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 min-h-[56px] touch-manipulation"
          >
            View Projects <HiArrowRight className="text-lg sm:text-xl" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gold-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
