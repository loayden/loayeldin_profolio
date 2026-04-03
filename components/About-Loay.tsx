'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiUser, HiRocketLaunch, HiHeart, HiAcademicCap } from 'react-icons/hi2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCode, faRobot, faChalkboardTeacher, faTrophy, faRocket, faBook, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1]
      },
    },
  };

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-32 section-padding overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-gold-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-t from-gold-400/8 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-20 lg:space-y-24"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-gold rounded-full text-sm font-medium backdrop-blur-md gold-glow-sm border border-gold-500/20">
              <HiUser className="text-gold-400 text-xl" />
              <span className="text-gold-200">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
              <span className="bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">
                Building the Future
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-neutral-300 font-medium">
                Through Innovation & Education
              </span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
              19-year-old Full Stack Developer, Robotics Engineer, and Tech Educator from Egypt. 
              Passionate about building intelligent systems, competing globally, and empowering the next generation of innovators.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass border-neutral-700/50 rounded-2xl p-8 backdrop-blur-md hover:border-gold-400/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gold-300 mb-6 flex items-center gap-3">
                  <HiRocketLaunch className="text-gold-400" />
                  My Journey
                </h3>
                <div className="space-y-6 text-neutral-300 leading-relaxed">
                  <p>
                    As a 19-year-old engineer from Egypt, I've dedicated my life to pushing the boundaries 
                    of what's possible with technology. My journey began with a curiosity about how things work, 
                    which evolved into a passion for robotics and artificial intelligence.
                  </p>
                  <p>
                    This passion has taken me across the globe, representing Egypt in prestigious international 
                    competitions in the USA, China, Turkey, UAE, Morocco, Greece, and South Africa. Each competition 
                    has not only tested my technical skills but has also taught me invaluable lessons in innovation, 
                    perseverance, and cross-cultural collaboration.
                  </p>
                  <p>
                    Beyond competitions, I find immense fulfillment in teaching and mentoring. I believe that 
                    knowledge grows when shared, and I'm committed to empowering young minds to explore the 
                    fascinating world of technology and robotics.
                  </p>
                </div>
              </motion.div>

              {/* Core Values */}
              <div className="glass-gold border-gold-500/30 rounded-2xl p-8 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-gold-300 mb-6 flex items-center gap-3">
                  <HiHeart className="text-gold-400" />
                  Core Values
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold-400 rounded-full" />
                      <span className="text-gold-200 font-medium">Innovation</span>
                    </div>
                    <p className="text-sm text-neutral-400">
                      Pushing boundaries and creating solutions that matter
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold-400 rounded-full" />
                      <span className="text-gold-200 font-medium">Excellence</span>
                    </div>
                    <p className="text-sm text-neutral-400">
                      Striving for perfection in every endeavor
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold-400 rounded-full" />
                      <span className="text-gold-200 font-medium">Education</span>
                    </div>
                    <p className="text-sm text-neutral-400">
                      Sharing knowledge and empowering others
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold-400 rounded-full" />
                      <span className="text-gold-200 font-medium">Global Impact</span>
                    </div>
                    <p className="text-sm text-neutral-400">
                      Making a difference on the world stage
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats & Highlights */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Quick Stats */}
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass border-neutral-700/50 rounded-2xl p-8 backdrop-blur-md hover:border-gold-400/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gold-300 mb-6 flex items-center gap-3">
                  <FontAwesomeIcon icon={faGlobe} className="text-2xl text-gold-400" />
                  Global Impact
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gold-400 mb-2">6+</div>
                    <div className="text-sm text-neutral-400">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gold-400 mb-2">15+</div>
                    <div className="text-sm text-neutral-400">Awards</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gold-400 mb-2">100+</div>
                    <div className="text-sm text-neutral-400">Students Mentored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gold-400 mb-2">50+</div>
                    <div className="text-sm text-neutral-400">Projects</div>
                  </div>
                </div>
              </motion.div>

              {/* Expertise Areas */}
              <div className="glass-gold border-gold-500/30 rounded-2xl p-8 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-gold-300 mb-6 flex items-center gap-3">
                  <HiAcademicCap className="text-gold-400" />
                  Expertise Areas
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ios-blue-500 to-ios-blue-600 rounded-xl flex items-center justify-center text-white">
                      <FontAwesomeIcon icon={faCode} className="text-2xl" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Full Stack Development</div>
                      <div className="text-sm text-neutral-400">React, Next.js, Node.js, TypeScript</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ios-green-500 to-ios-green-600 rounded-xl flex items-center justify-center text-white">
                      <FontAwesomeIcon icon={faRobot} className="text-2xl" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Robotics & AI</div>
                      <div className="text-sm text-neutral-400">Arduino, Raspberry Pi, Computer Vision</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center text-white">
                      <FontAwesomeIcon icon={faChalkboardTeacher} className="text-2xl" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Tech Education</div>
                      <div className="text-sm text-neutral-400">Mentoring, Workshops, Curriculum Development</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ios-purple-500 to-ios-purple-600 rounded-xl flex items-center justify-center text-white">
                      <FontAwesomeIcon icon={faTrophy} className="text-2xl" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Competitive Excellence</div>
                      <div className="text-sm text-neutral-400">International Competitions, Innovation Challenges</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Touch */}
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass border-neutral-700/50 rounded-2xl p-8 backdrop-blur-md hover:border-gold-400/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gold-300 mb-6">Beyond Technology</h3>
                <div className="space-y-4 text-neutral-300">
                  <p>
                    When I'm not coding or building robots, you'll find me exploring new technologies, 
                    reading about space exploration, or mentoring young students who share my passion for innovation.
                  </p>
                  <p>
                    I believe that the future belongs to those who believe in the beauty of their dreams, 
                    and I'm committed to turning ambitious dreams into reality through technology and education.
                  </p>
                  <div className="pt-4 flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gold-500/20 text-gold-300 text-sm font-medium rounded-full border border-gold-500/30">
                      <FontAwesomeIcon icon={faRocket} className="mr-2" /> Space Enthusiast
                    </span>
                    <span className="px-3 py-1 bg-gold-500/20 text-gold-300 text-sm font-medium rounded-full border border-gold-500/30">
                      <FontAwesomeIcon icon={faBook} className="mr-2" /> Lifelong Learner
                    </span>
                    <span className="px-3 py-1 bg-gold-500/20 text-gold-300 text-sm font-medium rounded-full border border-gold-500/30">
                      <FontAwesomeIcon icon={faGlobe} className="mr-2" /> Global Citizen
                    </span>
                    <span className="px-3 py-1 bg-gold-500/20 text-gold-300 text-sm font-medium rounded-full border border-gold-500/30">
                      <FontAwesomeIcon icon={faLightbulb} className="mr-2" /> Problem Solver
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
