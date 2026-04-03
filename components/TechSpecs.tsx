'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TechSpecs() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const techSpecs = {
    display: 'Dual micro-OLED • 1080p per eye • 90Hz refresh',
    materials: 'Grade 5 Titanium • AR glass lenses • Silicone nose pads',
    battery: '450mAh • 8-12 hours typical use • 30min wireless charge',
    connectivity: 'Wi-Fi 6E • Bluetooth 5.3 • eSIM (5G capable)',
    sensors: '6DoF IMU • Eye-tracking cameras • Ambient light sensor • Proximity',
    audio: 'Bone conduction • Spatial audio • 4 mics with beamforming',
    dimensions: '142 × 48 × 142mm • 55g weight',
    protection: 'IP54 sweat & water • MIL-STD-810H durability',
  };

  const chartData = {
    batteryLife: { full: 12, typical: 10, light: 8 },
    latency: 12,
    fov: 52,
    brightness: 3000,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="specs"
      ref={ref}
      className="section-padding py-32 relative bg-gradient-to-b from-neutral-950 to-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-24"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h2 className="text-h2">
              <span className="gradient-text">Technical</span> Specifications
            </h2>
            <p className="text-body text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade performance optimized for all-day AR use. Cutting-edge optics and sensors in premium lightweight package.
            </p>
          </motion.div>

          {/* Key Specs Table */}
          <motion.div variants={itemVariants}>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Primary Specs */}
              <div className="space-y-8">
                <div className="card p-10">
                  <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Core Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-ios-blue rounded-full ios-glow" /> Display
                      </h4>
                      <ul className="space-y-2 text-body mb-8">
                        <li className="font-mono text-caption flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ios-green rounded-full" /> Dual 1080p micro-OLED</li>
                        <li className="font-mono text-caption flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ios-green rounded-full" /> 90Hz refresh rate</li>
                        <li className="font-mono text-caption flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ios-green rounded-full" /> 52° FOV</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-ios-orange rounded-full ios-glow" /> Battery & Power
                      </h4>
                      <ul className="space-y-2 text-body mb-8">
                        <li className="font-mono text-caption flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ios-orange rounded-full" /> 450mAh capacity</li>
                        <li className="font-mono text-caption flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ios-orange rounded-full" /> 8-12h daily use</li>
                        <li className="font-mono text-caption flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ios-orange rounded-full" /> Wireless charging</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-ios-green rounded-full ios-glow" /> Connectivity
                      </h4>
                      <ul className="space-y-2 text-body">
                        <li className="font-mono text-caption flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ios-green rounded-full" /> Wi-Fi 6E (2.4/5/6GHz)</li>
                        <li className="font-mono text-caption flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ios-green rounded-full" /> Bluetooth 5.3</li>
                        <li className="font-mono text-caption flex items-center gap-2"><span className="w-1.5 h-1.5 bg-ios-green rounded-full" /> eSIM 5G capable</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-neutral-400 rounded-full" /> Physical
                      </h4>
                      <ul className="space-y-2 text-body">
                        <li className="font-mono text-caption flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" /> 55g titanium frame</li>
                        <li className="font-mono text-caption flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" /> IP54 rating</li>
                        <li className="font-mono text-caption flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" /> MIL-STD-810H tested</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Charts & Performance */}
              <div className="space-y-8 lg:pt-12">
                {/* Battery Life Chart */}
                <motion.div variants={itemVariants} className="card p-8">
                  <h4 className="font-bold text-xl mb-6 flex items-center gap-3 gradient-text">
                    Battery Performance
                  </h4>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3 text-caption font-mono">
                        <div className="w-2 h-2 bg-gradient-to-r from-ios-green to-ios-orange rounded-full ios-glow" />
                        Typical Use
                        <span className="ml-auto font-bold text-body">10 hours</span>
                      </div>
                      <div className="w-full bg-neutral-800 rounded-xl h-4 overflow-hidden">
                        <motion.div 
                          className="h-4 bg-gradient-to-r from-ios-green to-ios-orange rounded-xl shadow-glow-md"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 0.83 }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3 text-caption font-mono">
                        <div className="w-2 h-2 bg-ios-blue rounded-full ios-glow" />
                        Light Use
                        <span className="ml-auto font-bold text-body">12 hours</span>
                      </div>
                      <div className="w-full bg-neutral-800 rounded-xl h-4 overflow-hidden">
                        <motion.div 
                          className="h-4 bg-gradient-to-r from-ios-blue rounded-xl shadow-glow-md"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1.2, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Performance Metrics */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 p-8 glass-dark rounded-3xl border border-neutral-700/40 ios-shadow-lg">
                  <div className="text-center p-6">
                    <div className="text-4xl font-bold gradient-text mb-2">12ms</div>
                    <div className="text-caption uppercase tracking-wide text-neutral-400 font-mono">Motion Latency</div>
                  </div>
                  <div className="text-center p-6">
                    <div className="text-4xl font-bold text-ios-blue mb-2">52°</div>
                    <div className="text-caption uppercase tracking-wide text-neutral-400 font-mono">Field of View</div>
                  </div>
                  <div className="text-center p-6">
                    <div className="text-4xl font-bold text-ios-green mb-2">3000 nits</div>
                    <div className="text-caption uppercase tracking-wide text-neutral-400 font-mono">Peak Brightness</div>
                  </div>
                  <div className="text-center p-6">
                    <div className="text-4xl font-bold text-ios-orange mb-2">99%</div>
                    <div className="text-caption uppercase tracking-wide text-neutral-400 font-mono">Eye Accuracy</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Sensor Array */}
          <motion.div variants={itemVariants} className="card p-12 lg:p-16">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4 gradient-text">Sensor Suite</h3>
              <p className="text-body text-neutral-400 max-w-2xl mx-auto">
                12 high-precision sensors for spatial awareness and input detection
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: '🎯', name: '6DoF IMU', desc: 'Head tracking', color: 'ios-blue' },
                { icon: '👁️', name: 'Eye Cameras', desc: 'Gaze detection', color: 'ios-green' },
                { icon: '💡', name: 'ALS', desc: 'Auto brightness', color: 'ios-orange' },
                { icon: '📡', name: 'UWB', desc: 'Spatial positioning', color: 'ios-cyan' },
                { icon: '🎤', name: '4x Mics', desc: 'Beamforming audio', color: 'neutral-400' },
                { icon: '🌡️', name: 'Proximity', desc: 'Context awareness', color: 'neutral-400' },
              ].map((sensor, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-2xl glass text-center border-2 border-${sensor.color}/20 hover:border-${sensor.color}/50 hover:ios-glow smooth-transition`}
                >
                  <div className="text-3xl mb-3">{sensor.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{sensor.name}</h4>
                  <p className="text-caption text-neutral-500">{sensor.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

