'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiDevicePhoneMobile, HiDeviceTablet, HiCloud, HiShieldCheck, HiBell } from 'react-icons/hi2';

export default function Ecosystem() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const ecosystemApps = [
    {
      icon: HiDevicePhoneMobile,
      title: 'iPhone Companion App',
      description: 'Real-time notifications, quick controls, AR content management',
      image: '📱',
      features: ['Gesture pairing', 'Battery sync', 'Content library'],
    },
    {
      icon: HiDeviceTablet,
      title: 'iPad Control Dashboard',
      description: 'Advanced configuration, performance monitoring, deep customization',
      image: '📱',
      features: ['Eye-tracking calibration', 'Firmware updates', 'Data analytics'],
    },
    {
      icon: HiCloud,
      title: 'iCloud Sync',
      description: 'Seamless data sync across all Apple devices',
      image: '☁️',
      features: ['Contacts & notifications', 'AR experiences', 'Personalization'],
    },
    {
      icon: HiShieldCheck,
      title: 'Privacy & Security',
      description: 'Enterprise-grade data protection built for iOS',
      image: '🔒',
      features: ['Eye-tracking privacy', 'Local processing', 'Secure enclave'],
    },
    {
      icon: HiBell,
      title: 'Notification Hub',
      description: 'Context-aware notifications in AR overlay',
      image: '🔔',
      features: ['Prioritized display', 'Gesture dismiss', 'Do Not Disturb'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="ecosystem"
      ref={ref}
      className="section-padding relative bg-gradient-to-b from-ios-blue/2 to-neutral-950/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16 lg:space-y-20"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-h2">
              iOS <span className="gradient-text">Ecosystem</span>
            </h2>
            <p className="text-body text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Deep integration with iPhone, iPad, iCloud, and Apple services. Companion apps for setup, control, and content management.
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-ios-blue to-ios-green mx-auto" />
          </motion.div>

          {/* App Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystemApps.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="card group"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 bg-gradient-to-br from-ios-blue/20 to-ios-green/20 rounded-2xl glass ios-glow-sm shrink-0 w-20 h-20 flex items-center justify-center text-2xl">
                      <IconComponent className="w-8 h-8 text-ios-blue group-hover:scale-110 smooth-transition" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg lg:text-xl font-bold mb-2 group-hover:gradient-text smooth-transition">
                        {app.title}
                      </h3>
                      <p className="text-body text-neutral-400 mb-4 leading-relaxed">
                        {app.description}
                      </p>
                      <div className="space-y-1">
                        {app.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-caption text-neutral-500">
                            <span className="w-1.5 h-1.5 bg-ios-green rounded-full ios-glow-sm" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* iOS Device Mockups */}
          <motion.div
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* iPhone Mockup */}
            <div className="relative group">
              <div className="relative mx-auto max-w-sm glass-dark rounded-3xl p-6 shadow-2xl ios-shadow-lg hover:ios-glow-lg smooth-transition">
                {/* iPhone Frame */}
                <div className="bg-neutral-900 rounded-3xl p-4 border-4 border-neutral-800/50 shadow-inner">
                  {/* Screen */}
                  <div className="bg-neutral-950 rounded-2xl p-4 h-80 overflow-hidden shadow-2xl">
                    <div className="space-y-4">
                      {/* Status Bar */}
                      <div className="flex items-center justify-between text-caption font-mono text-neutral-400">
                        <span>9:41</span>
                        <span>100% 🔋</span>
                      </div>
                      {/* AR Glasses Card */}
                      <div className="card p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-ios-blue to-ios-green rounded-2xl ios-glow flex items-center justify-center text-white font-bold text-sm">
                            AR
                          </div>
                          <div>
                            <h4 className="font-bold text-body text-white">VisionAR Glasses</h4>
                            <p className="text-caption text-neutral-400">Connected</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <div className="text-center p-2 bg-white/5 rounded-xl text-caption">
                            <div className="text-lg mb-1">8h 23m</div>
                            <div>Battery</div>
                          </div>
                          <div className="text-center p-2 bg-white/5 rounded-xl text-caption">
                            <div className="text-lg mb-1">24°</div>
                            <div>Eye Track</div>
                          </div>
                          <div className="text-center p-2 bg-white/5 rounded-xl text-caption">
                            <div className="text-lg mb-1">✓</div>
                            <div>Gestures</div>
                          </div>
                        </div>
                        <div className="flex gap-2 pt-4">
                          <button className="btn-tertiary flex-1">Quick Settings</button>
                          <button className="btn-primary px-4 py-2 text-xs flex-1">Open App</button>
                        </div>
                      </div>
                      {/* Notifications */}
                      <div className="space-y-2 mt-8">
                        <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl glass">
                          <div className="w-10 h-10 bg-ios-orange/20 rounded-xl flex items-center justify-center ios-glow">
                            📨
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-caption truncate">Messages</p>
                            <p className="text-caption text-neutral-500 truncate">New AR experience available</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center mt-6 text-caption font-mono text-neutral-500 group-hover:text-ios-blue smooth-transition">
                iPhone Companion App Interface
              </p>
            </div>

            {/* iPad Mockup */}
            <div className="relative group">
              <div className="relative mx-auto max-w-4xl glass-dark rounded-[3rem] p-8 shadow-2xl ios-shadow-lg hover:ios-glow-lg smooth-transition">
                {/* iPad Screen */}
                <div className="bg-neutral-900 rounded-[2.5rem] p-8 border-8 border-neutral-800/50 shadow-inner overflow-hidden">
                  <div className="h-[500px] bg-neutral-950 rounded-[1.5rem] p-8 shadow-2xl grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-bold mb-6 gradient-text">Performance Dashboard</h3>
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 bg-ios-green rounded-full ios-glow" />
                            <span className="font-mono text-caption">Battery</span>
                          </div>
                          <div className="w-full bg-neutral-800 rounded-xl h-3">
                            <div className="bg-gradient-to-r from-ios-green to-ios-orange h-3 rounded-xl w-4/5 shadow-glow-sm" />
                          </div>
                          <span className="text-caption font-mono ml-1">8h 23m remaining</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 bg-ios-blue rounded-full ios-glow" />
                            <span className="font-mono text-caption">Eye Tracking</span>
                          </div>
                          <div className="w-full bg-neutral-800 rounded-xl h-3">
                            <div className="bg-gradient-to-r from-ios-blue h-3 rounded-xl w-3/4 shadow-glow-sm" />
                          </div>
                          <span className="text-caption font-mono ml-1">99% accuracy</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-6 gradient-text">Active Gestures</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                          <div className="w-12 h-12 bg-ios-orange/20 rounded-xl ios-glow flex items-center justify-center text-xl font-bold text-ios-orange">
                            Swipe
                          </div>
                          <div>
                            <p className="font-semibold text-body">Swipe Navigation</p>
                            <p className="text-caption text-neutral-400">Menu scrolling, page navigation</p>
                          </div>
                          <span className="px-3 py-1 bg-ios-orange/20 text-ios-orange text-caption font-bold rounded-full ml-auto">
                            Active
                          </span>
                        </div>
                        <div className="flex items-center gap-4 p-4 glass rounded-2xl opacity-60">
                          <div className="w-12 h-12 bg-ios-blue/20 rounded-xl flex items-center justify-center text-xl font-bold text-ios-blue">
                            Pinch
                          </div>
                          <div>
                            <p className="font-semibold text-body">Pinch Zoom</p>
                            <p className="text-caption text-neutral-400">AR content scaling</p>
                          </div>
                          <span className="px-3 py-1 bg-neutral-700/50 text-neutral-400 text-caption font-bold rounded-full ml-auto">
                            Standby
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center mt-8 text-caption font-mono text-neutral-500 group-hover:text-ios-blue smooth-transition">
                iPad Advanced Control Dashboard
              </p>
            </div>
          </motion.div>

          {/* Features Table */}
          <motion.div variants={itemVariants} className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 font-bold text-body text-neutral-200 border-b border-neutral-700/50">Feature</th>
                  <th className="p-4 font-bold text-body text-neutral-200 border-b border-neutral-700/50">iPhone</th>
                  <th className="p-4 font-bold text-body text-neutral-200 border-b border-neutral-700/50">iPad</th>
                  <th className="p-4 font-bold text-body text-neutral-200 border-b border-neutral-700/50">Glasses</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-800/50">
                  <td className="p-4 font-semibold text-body">Quick Controls</td>
                  <td className="p-4 text-caption text-neutral-300">✓ Widget</td>
                  <td className="p-4 text-caption text-neutral-300">✓ Full Dashboard</td>
                  <td className="p-4 text-caption text-neutral-300">✓ Gestures</td>
                </tr>
                <tr className="border-b border-neutral-800/50">
                  <td className="p-4 font-semibold text-body">iCloud Sync</td>
                  <td className="p-4 text-caption text-neutral-300">✓ Personalization</td>
                  <td className="p-4 text-caption text-neutral-300">✓ Data Backup</td>
                  <td className="p-4 text-caption text-neutral-300">✓ Real-time</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-body">Privacy Controls</td>
                  <td className="p-4 text-caption text-neutral-300">✓ Passcode</td>
                  <td className="p-4 text-caption text-neutral-300">✓ Profiles</td>
                  <td className="p-4 text-caption text-neutral-300">✓ Eye-lock</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

