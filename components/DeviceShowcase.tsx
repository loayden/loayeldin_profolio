'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowRight } from 'react-icons/hi2';

export default function DeviceShowcase() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const colorVariants = [
    { name: 'Matte Black', class: 'from-neutral-900 to-neutral-800 shadow-neutral-900/50', dot: '⚫' },
    { name: 'Silver Titanium', class: 'from-neutral-200 to-neutral-300 shadow-neutral-400/30', dot: '⚪' },
    { name: 'iOS Blue', class: 'from-ios-blue/90 to-ios-blue shadow-ios-blue/40', dot: '🔵' },
    { name: 'Space Gray', class: 'from-neutral-700 to-neutral-600 shadow-neutral-700/40', dot: '⚫' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="device"
      ref={ref}
      className="section-padding relative min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-20 lg:space-y-24"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-h2">
              Device <span className="gradient-text">Showcase</span>
            </h2>
            <p className="text-body text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Lightweight titanium frame with premium anti-reflective glass lenses. Multiple viewing angles and color variants.
            </p>
          </motion.div>

          {/* Main Product Views Carousel */}
          <motion.div variants={itemVariants} className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            {/* 3D Product Render */}
            <div className="lg:w-1/2 relative group">
              <motion.div
                animate={{ 
                  rotateY: inView ? [0, 8, -8, 0] : 0, 
                  rotateX: [0, 3, -2, 0],
                  scale: inView ? [1, 1.02, 1] : 1
                }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full aspect-[4/3] max-w-lg mx-auto lg:mx-0"
              >
                {/* Glasses - Front View */}
                <div className="relative mx-auto w-80 h-40 lg:w-96 lg:h-52 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl shadow-2xl ios-shadow-xl border-[3px] border-neutral-700/60 glass-dark hover:ios-glow-lg cursor-grab active:cursor-grabbing">
                  {/* Left Lens */}
                  <div className="absolute left-8 top-3 w-28 h-34 lg:w-36 lg:h-44 bg-gradient-to-br from-neutral-50/95 via-neutral-100/80 to-neutral-200/70 rounded-3xl shadow-xl border-[1px] border-white/30 backdrop-blur-sm" />
                  {/* Right Lens */}
                  <div className="absolute right-8 top-3 w-28 h-34 lg:w-36 lg:h-44 bg-gradient-to-br from-neutral-50/95 via-neutral-100/80 to-neutral-200/70 rounded-3xl shadow-xl border-[1px] border-white/30 backdrop-blur-sm" />
                  {/* Bridge */}
                  <div className="absolute left-1/2 top-20 w-16 h-3 bg-gradient-to-r from-neutral-700 to-neutral-600 rounded-full shadow-md -translate-x-1/2 transform -rotate-1" />
                  {/* Frame Details */}
                  <div className="absolute inset-2 bg-gradient-to-b from-neutral-800/80 rounded-2xl border border-neutral-600/50 shadow-inner" />
                  {/* AR Elements */}
                  <div className="absolute left-24 top-12 w-8 h-8 bg-ios-blue/70 rounded-full blur-xl shadow-lg ios-glow animate-pulse" />
                  <div className="absolute right-24 top-14 w-6 h-6 bg-ios-green/60 rounded-full blur-lg shadow-md ios-glow animate-ping [animation-delay:1s]" />
                  {/* Arms */}
                  <div className="absolute -left-20 top-1/2 w-32 h-3.5 bg-neutral-850 rounded-lg shadow-lg transform -translate-y-1/2 -rotate-12 border border-neutral-700/80" />
                  <div className="absolute -right-20 top-1/2 w-32 h-3.5 bg-neutral-850 rounded-lg shadow-lg transform -translate-y-1/2 rotate-12 border border-neutral-700/80" />
                  {/* Lens Reflection */}
                  <div className="absolute left-20 top-8 w-12 h-8 bg-white/20 rounded-2xl blur-sm shadow-inner -skew-x-12" />
                </div>
              </motion.div>
              <p className="text-center mt-8 text-caption font-mono text-neutral-400 group-hover:text-ios-blue smooth-transition">
                Interactive 3D Model • Rotate to explore
              </p>
            </div>

            {/* Views & Dimensions */}
            <div className="lg:w-1/2 space-y-12">
              {/* View Selector */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {['front', 'side', 'top', 'isometric'].map((view) => (
                  <motion.button
                    key={view}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-xl font-semibold text-sm glass ios-shadow-md hover:ios-glow-sm smooth-transition bg-white/5 border border-neutral-600/30"
                  >
                    {view.charAt(0).toUpperCase() + view.slice(1)} View
                  </motion.button>
                ))}
              </motion.div>

              {/* Dimension Callouts */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 glass-dark rounded-3xl border border-neutral-700/40">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">55g</div>
                    <div className="text-caption uppercase tracking-wide text-neutral-400">Weight</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-ios-blue mb-1">142mm</div>
                    <div className="text-caption uppercase tracking-wide text-neutral-400">Width</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-ios-green mb-1">48mm</div>
                    <div className="text-caption uppercase tracking-wide text-neutral-400">Height</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-ios-orange mb-1">1080p</div>
                    <div className="text-caption uppercase tracking-wide text-neutral-400">Display</div>
                  </div>
                </div>

                {/* Material Closeups */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    variants={itemVariants}
                    className="glass p-6 rounded-2xl group hover:ios-glow"
                  >
                    <h4 className="font-bold text-lg mb-4 gradient-text">Titanium Frame</h4>
                    <p className="text-body text-neutral-400 mb-6">
                      Grade 5 titanium alloy. Hypoallergenic, ultra-lightweight, corrosion resistant.
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="aspect-square bg-gradient-to-b from-neutral-200 to-neutral-300 rounded-xl ios-shadow-md group-hover:scale-105 smooth-transition" />
                      <div className="aspect-square bg-gradient-to-br from-neutral-300/70 blur-sm rounded-xl" />
                      <div className="aspect-square border-2 border-neutral-400/50 rounded-xl p-2">
                        <div className="w-full h-full bg-gradient-to-r from-neutral-100 to-neutral-200 rounded shadow-inner" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={itemVariants}
                    className="glass p-6 rounded-2xl group hover:ios-glow"
                  >
                    <h4 className="font-bold text-lg mb-4 gradient-text">AR Glass Lenses</h4>
                    <p className="text-body text-neutral-400 mb-6">
                      Anti-reflective coating. 99.9% light transmission. Scratch resistant.
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="aspect-square bg-gradient-to-t from-neutral-50/90 rounded-2xl shadow-lg border backdrop-blur-sm group-hover:scale-105 smooth-transition" />
                      <div className="aspect-square bg-neutral-100/80 blur rounded-2xl" />
                      <div className="aspect-square border border-neutral-300/70 rounded-2xl overflow-hidden">
                        <div className="w-full h-1/2 bg-gradient-to-r from-white/50 rounded-t shadow-sm" />
                        <div className="w-full h-1/2 bg-neutral-50/90 shadow-inner" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Color Variants */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <div>
              <h3 className="text-h2 mb-6">Color Variants</h3>
              <p className="text-body text-neutral-400 max-w-2xl mx-auto">
                Premium finishes available in 4 sophisticated colorways.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:gap-6 items-center">
              {colorVariants.map((variant, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="group"
                >
                  <div className={`w-24 h-16 lg:w-28 lg:h-20 rounded-2xl shadow-lg ios-shadow-lg group-hover:ios-glow-lg smooth-transition ${variant.class}`} />
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xl">{variant.dot}</span>
                    <span className="font-semibold text-caption uppercase tracking-wide">{variant.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.a
              href="#gallery"
              className="btn-primary ios-glow-sm px-12 py-4 text-lg inline-flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Colors <HiArrowRight />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

