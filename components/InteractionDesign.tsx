'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiSpeakerWave, HiEye } from 'react-icons/hi2';

export default function InteractionDesign() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const interactions = [
    {
      type: 'Gesture',
      icon: '✋',
      title: 'Natural Hand Gestures',
      description: 'Pinch, swipe, tap – intuitive controls without controllers',
      demos: [
        'Swipe left/right: Menu navigation',
        'Pinch in/out: Zoom AR content',
        'Double tap: Select/activate',
        'Fist pump: Home gesture'
      ]
    },
    {
      type: 'Voice',
      icon: '🎤',
      title: 'Context-Aware Voice',
      description: 'Siri integration with AR context awareness',
      demos: [
        'Hey Siri – Wake word detection',
        'Contextual commands',
        'Continuous conversation',
        'Multi-language support'
      ]
    },
    {
      type: 'Eye Tracking',
      icon: '👁️',
      title: 'Gaze Selection',
      description: 'Natural eye movement for precise selection',
      demos: [
        'Look & blink: Select items',
        'Dwell time: Hover effects',
        'Smooth pursuit tracking',
        'Calm rejection filters'
      ]
    },
    {
      type: 'Head',
      icon: '🤝',
      title: '6DoF Head Tracking',
      description: 'Natural head movement controls viewport',
      demos: [
        'Look around: 360° exploration',
        'Nod: Confirm actions',
        'Shake: Cancel/dismiss',
        'Tilt: Menu access'
      ]
    },
  ];

  const accessibilityFeatures = [
    'Dynamic text scaling',
    'High contrast mode',
    'VoiceOver support',
    'Reduced motion option',
    'Magnification gestures',
    'Color blindness correction'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="interactions" ref={ref} className="section-padding py-32 relative bg-gradient-to-r from-ios-blue/5 via-neutral-950 to-ios-green/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20 lg:space-y-28"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h2 className="text-h2">
              Interaction <span className="gradient-text">Design</span>
            </h2>
            <p className="text-body text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Gesture, voice, eye-tracking, and head movements. Zero-learning-curve controls built for everyday AR use.
            </p>
          </motion.div>

          {/* Gesture Grid */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12">
            {interactions.map((interaction, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="card group p-10 lg:p-12 relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-ios-blue/20 rounded-3xl blur-3xl opacity-30 lg:opacity-50 group-hover:opacity-100 smooth-transition" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-5 bg-gradient-to-br from-ios-blue to-ios-cyan rounded-3xl glass ios-glow-lg w-20 h-20 flex items-center justify-center text-3xl shrink-0 group-hover:rotate-12 smooth-transition">
                      <span>{interaction.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:gradient-text smooth-transition">
                        {interaction.title}
                      </h3>
                      <p className="text-body text-neutral-300">{interaction.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {interaction.demos.map((demo, i) => (
                      <motion.div
                        key={i}
                        className="group/item flex items-center gap-3 p-4 glass-dark rounded-xl border border-neutral-700/50 hover:border-ios-blue/50 backdrop-blur-sm hover:ios-glow smooth-transition text-caption font-medium"
                        whileHover={{ x: 6 }}
                      >
                        <div className="w-2 h-2 bg-ios-blue rounded-full ios-glow opacity-80 group-hover/item:opacity-100 group-hover/item:scale-125 smooth-transition" />
                        <span>{demo}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gesture Demo Animations */}
          <motion.div variants={itemVariants} className="space-y-16">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 gradient-text">See Gestures in Action</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Swipe Demo */}
              <motion.div className="card p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-ios-blue/5 to-ios-green/5" />
                <div className="relative">
                  <div className="w-32 h-20 mx-auto mb-6 bg-neutral-900 rounded-2xl shadow-2xl border glass-dark" />
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-white to-neutral-100 rounded-2xl shadow-lg flex items-center justify-center font-bold text-lg mx-auto mb-6 ios-glow"
                    animate={{ x: [0, 100, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                  >
                    👋
                  </motion.div>
                  <h4 className="font-bold text-xl mb-2">Swipe Navigation</h4>
                  <p className="text-caption text-neutral-400">Left/Right menu scrolling</p>
                </div>
              </motion.div>

              {/* Pinch Demo */}
              <motion.div className="card p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-ios-green/5 to-ios-orange/5" />
                <div className="relative">
                  <div className="w-32 h-32 mx-auto mb-6 bg-neutral-900 rounded-2xl shadow-2xl border glass-dark relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-ios-blue to-ios-cyan rounded-xl blur-sm opacity-30 animate-pulse"
                      animate={{ scale: [0.8, 1.4, 0.8] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute left-8 top-1/2 w-4 h-4 bg-white rounded-full shadow-lg ios-glow -translate-y-1/2"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div 
                      className="absolute right-8 top-1/2 w-4 h-4 bg-white rounded-full shadow-lg ios-glow -translate-y-1/2"
                      animate={{ scale: [1.5, 1, 1.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    />
                  </div>
                  <h4 className="font-bold text-xl mb-2">Pinch Zoom</h4>
                  <p className="text-caption text-neutral-400">Scale AR content naturally</p>
                </div>
              </motion.div>

              {/* Eye Tracking Demo */}
              <motion.div className="card p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/50" />
                <div className="relative">
                  <div className="w-24 h-24 mx-auto mb-6 bg-neutral-900 rounded-full shadow-2xl border-4 border-neutral-800/50 glass-dark relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-4 bg-gradient-to-br from-ios-orange/50 rounded-full blur-xl ios-glow animate-pulse"
                      animate={{ scale: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute -bottom-2 -right-2 w-16 h-16 border-4 border-ios-blue/60 rounded-full animate-ping"
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                  </div>
                  <h4 className="font-bold text-xl mb-2">Gaze Selection</h4>
                  <p className="text-caption text-neutral-400">Look + blink to select</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Accessibility */}
          <motion.div variants={itemVariants} className="card p-12 text-center">
            <h3 className="text-3xl font-bold mb-12 gradient-text">Accessibility First</h3>
            <p className="text-body mb-12 text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              Full VoiceOver support, dynamic type scaling, reduced motion respect, and color accommodation built to WCAG AA standards.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center gap-3 p-4 glass-dark rounded-xl border border-neutral-700/50 hover:border-ios-blue hover:ios-glow smooth-transition text-caption font-medium"
                  whileHover={{ x: 8 }}
                >
                  <div className="w-2 h-2 bg-ios-blue rounded-full ios-glow group-hover:scale-125 smooth-transition" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Structure */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h4 className="text-xl font-bold mb-8 gradient-text flex items-center gap-3">
                <span className="text-2xl">✋</span> Gesture Priority
              </h4>
              <ol className="space-y-3 text-caption text-neutral-400 list-decimal list-inside font-mono">
                <li>Swipe (Menu)</li>
                <li>Pinch (Zoom)</li>
                <li>Double Tap (Select)</li>
                <li>Air Tap (Click)</li>
              </ol>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-8 text-ios-green flex items-center gap-3">
                <span className="text-2xl">🔊</span> Voice Fallback
              </h4>
              <ol className="space-y-3 text-caption text-neutral-400 list-decimal list-inside font-mono">
                <li>Siri Integration</li>
                <li>Context Commands</li>
                <li>Continuous Mode</li>
              </ol>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

