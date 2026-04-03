'use client';

import { motion } from 'framer-motion';
import { useInView } from './useInView';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const features = [
    {
      icon: '🚀',
      title: 'Innovation-Driven',
      description: 'Building cutting-edge solutions in robotics, AI, and web technologies. Competing and winning at the highest international levels.',
    },
    {
      icon: '🎯',
      title: 'Full Stack Excellence',
      description: 'Mastering modern web development with React, Next.js, and cloud technologies. Creating responsive, performant applications.',
    },
    {
      icon: '🎓',
      title: 'Passionate Mentor',
      description: 'Teaching and inspiring the next generation of developers and engineers. Building communities and sharing knowledge globally.',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-700 to-gold-500" />
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a <span className="text-gold-400 font-semibold">19-year-old innovator</span> from <span className="text-gold-400 font-semibold">Egypt</span> with a passion for pushing technological boundaries. At the intersection of <span className="text-gold-400 font-semibold">robotics, AI, and web development</span>, I create intelligent systems that solve real-world problems.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Having represented Egypt in over <span className="text-gold-400 font-semibold">15 international competitions</span> across the USA, China, Europe, and Africa, I've developed a competitive spirit combined with collaborative leadership. My wins include <span className="text-gold-400 font-semibold">1st Place at MRC Greece 2024</span> and <span className="text-gold-400 font-semibold">2nd Place Worldwide at Robo Tourney USA</span>.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond competitions, I'm dedicated to <span className="text-gold-400 font-semibold">teaching and mentoring</span> students in programming and robotics. I believe in lifting others up while continuously learning and pushing my own limits.
              </p>

              <motion.a
                href="#achievements"
                whileHover={{ x: 10 }}
                className="inline-flex items-center gap-2 text-gold-400 font-semibold mt-4 hover:text-gold-300 smooth-transition"
              >
                View my achievements →
              </motion.a>
            </div>

            {/* Features Grid */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-lg p-6 hover:bg-white/10 smooth-transition border border-gold-700/20 hover:border-gold-700/50"
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-12"
          >
            {[
              { label: 'Competitions', value: '15+' },
              { label: 'Awards Won', value: '20+' },
              { label: 'Students Mentored', value: '100+' },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass rounded-lg p-6 text-center border border-gold-700/20"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
