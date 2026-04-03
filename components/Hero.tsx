'use client';

import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center pt-24 px-4 lg:pt-32 section-padding overflow-hidden">
      {/* Subtle AR overlay bgs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-ios-blue/20 to-ios-green/10 rounded-3xl blur-xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 right-20 w-80 h-80 bg-gradient-to-b from-ios-orange/15 rounded-full blur-2xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center space-y-12 lg:space-y-16"
      >
        {/* Hero Badge */}
        <motion.div variants={itemVariants}>
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-2xl text-caption font-medium backdrop-blur-md ios-glow-sm"
          >
            Next-Gen iOS AR Eyewear
          </motion.span>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={itemVariants}>
          <h1 className="text-h1 lg:leading-[1.1] mb-6">
            VisionAR Glasses
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants}>
          <h2 className="text-h2 gradient-text mb-8 max-w-3xl mx-auto">
            Lightweight AR Smart Eyewear for Seamless iOS Ecosystem Integration
          </h2>
        </motion.div>

        {/* Value Proposition */}
        <motion.div variants={itemVariants} className="space-y-6 max-w-2xl mx-auto">
          <p className="text-body text-neutral-200/90">
            Premium titanium frame (55g) with dual micro-OLED 1080p displays. 
            8-12 hour battery. Gesture, voice, eye-tracking controls.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-caption font-medium text-neutral-400">
            <span>Wi-Fi 6E • Bluetooth 5.3 • eSIM</span>
            <span>Anti-reflective glass • Dark/Light mode</span>
          </div>
        </motion.div>

        {/* Device Mockup - CSS 3D Glasses */}
        <motion.div 
          variants={itemVariants}
          className="relative max-w-md mx-auto pt-8 lg:max-w-lg"
          style={{ perspective: '1000px' }}
        >
          <motion.div
            animate={{ rotateY: [0, 5, -5, 0], rotateX: [0, 3, -3, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Glasses Frame */}
            <div className="relative mx-auto w-72 h-32 bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-full shadow-2xl ios-shadow-lg border-4 border-neutral-700/50 glass">
              {/* Lens Left */}
              <div className="absolute left-4 top-2 w-24 h-28 bg-gradient-to-b from-neutral-100/90 to-neutral-200/70 rounded-3xl shadow-inner border border-white/20 blur-sm" />
              {/* Lens Right */}
              <div className="absolute right-4 top-2 w-24 h-28 bg-gradient-to-b from-neutral-100/90 to-neutral-200/70 rounded-3xl shadow-inner border border-white/20 blur-sm" />
              {/* Bridge */}
              <div className="absolute left-1/2 top-12 w-12 h-2 bg-neutral-700 rounded-full shadow-md -translate-x-1/2" />
              {/* Arms */}
              <div className="absolute left-[-1rem] top-1/2 w-24 h-3 bg-neutral-800 rounded-lg shadow-lg -translate-y-1/2 rotate-[-10deg]" />
              <div className="absolute right-[-1rem] top-1/2 w-24 h-3 bg-neutral-800 rounded-lg shadow-lg -translate-y-1/2 rotate-[10deg]" />
              {/* AR Glow */}
              <div className="absolute left-12 top-8 w-8 h-8 bg-ios-blue/60 rounded-full blur-xl ios-glow animate-pulse" />
              <div className="absolute right-12 top-8 w-6 h-6 bg-ios-green/50 rounded-full blur-lg ios-glow animate-ping [animation-delay:-1s]" />
            </div>
            {/* Reflection */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 rounded-full blur" />
          </motion.div>
          <p className="text-caption mt-4 font-mono text-neutral-500">3/4 Perspective Render • Titanium Matte Black</p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
        >
          <motion.a
            href="#device"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary ios-glow-sm"
          >
            Explore Design <HiArrowRight className="ml-2 inline -translate-y-[1px]" />
          </motion.a>
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary glass"
          >
            View Gallery
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

