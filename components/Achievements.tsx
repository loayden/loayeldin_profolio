'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Achievements() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = useState<'international' | 'national'>('international');

  const achievements = {
    international: [
      {
        medal: '🥇',
        title: '1st Place – MRC Greece 2024',
        country: '🇬🇷',
        category: 'International',
        details: 'Mediterranean Robotics Competition',
        date: '2024',
      },
      {
        medal: '🥈',
        title: '2nd Place Worldwide – Robo Tourney USA',
        country: '🇺🇸',
        category: 'International',
        details: 'Creative & Think Awards',
        date: '2024',
      },
      {
        medal: '🥉',
        title: '3rd Place Worldwide – Robo Tourney USA 2024',
        country: '🇺🇸',
        category: 'International',
        details: 'Additional Award Category',
        date: '2024',
      },
      {
        medal: '🏅',
        title: '4th Place Worldwide – SeaPerch',
        country: '🌍',
        category: 'International',
        details: 'Best Maneuver & Team Spirit Awards',
        date: '2024',
      },
      {
        medal: '🥇',
        title: '1st Place Africa – Young Innovators',
        country: '🇿🇦',
        category: 'International',
        details: 'Continental Championship',
        date: '2023',
      },
      {
        medal: '🌍',
        title: 'Represented Egypt in 6 Countries',
        country: '🌐',
        category: 'International',
        details: 'USA, China, Turkey, UAE, Morocco, Greece',
        date: '2023-2024',
      },
    ],
    national: [
      {
        medal: '🥇',
        title: 'Multiple Wins – Egypt Open Robotics Championship',
        country: '🇪🇬',
        category: 'National',
        details: 'Multiple victories across different years',
        date: '2023-2024',
      },
      {
        medal: '🥇',
        title: 'RoboRave Egypt – International Qualification',
        country: '🇪🇬',
        category: 'National',
        details: 'Qualified for international competition',
        date: '2023',
      },
      {
        medal: '🥈',
        title: 'Robo Tourney Egypt – 2nd Place',
        country: '🇪🇬',
        category: 'National',
        details: 'California International Qualification',
        date: '2023',
      },
      {
        medal: '🏆',
        title: 'African Innovation & Technology Forum',
        country: '🇪🇬',
        category: 'National',
        details: 'Multiple top rankings and recognitions',
        date: '2023-2024',
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const currentAchievements = achievements[selectedCategory];

  return (
    <section
      id="achievements"
      ref={ref}
      className="section-padding relative"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-700/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold font-display">
              🏆 <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              International competitor with 20+ awards. Represented Egypt globally across 6+ countries with consistent excellence.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-700 to-gold-500 mx-auto" />
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 flex-wrap"
          >
            {(['international', 'national'] as const).map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-lg font-bold text-lg smooth-transition ${
                  selectedCategory === category
                    ? 'bg-gold-700 text-black glow-gold'
                    : 'glass border border-gold-700/30 text-gold-400 hover:border-gold-700/60'
                }`}
              >
                {category === 'international' ? '🌍 International' : '🇪🇬 National'}
              </motion.button>
            ))}
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {currentAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="glass rounded-lg p-8 border border-gold-700/20 hover:border-gold-700/50 smooth-transition group relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-700/10 to-transparent opacity-0 group-hover:opacity-100 smooth-transition -z-10" />

                {/* Medal and Country */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl group-hover:scale-125 smooth-transition transform-gpu">
                    {achievement.medal}
                  </div>
                  <span className="text-3xl">{achievement.country}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-gold-300 smooth-transition">
                  {achievement.title}
                </h3>

                {/* Details */}
                <p className="text-gold-400 font-semibold mb-3">{achievement.details}</p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm">
                  <span className="px-3 py-1 bg-gold-700/20 rounded-full text-gold-300">
                    {achievement.category}
                  </span>
                  <span className="text-gray-400">{achievement.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass rounded-lg p-8 border border-gold-700/20"
          >
            <h3 className="text-2xl font-bold mb-8">Competition Timeline</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-700 to-gold-700/20 transform md:-translate-x-1/2" />

              {/* Timeline Items */}
              <div className="space-y-8 pl-12 md:pl-0">
                {['2024: Greece, USA Competitions', '2023: Africa & Regional Championships', '2022-2023: Initial International Competitions'].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                    className={`flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="flex-1 md:text-right md:pr-8 md:pl-0 pl-0">
                      <div className="p-4 bg-white/5 rounded-lg border border-gold-700/20 hover:border-gold-700/50 smooth-transition inline-block w-full md:w-auto">
                        <h4 className="font-bold text-gold-400">{item}</h4>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 top-4 w-8 h-8 bg-gold-700 rounded-full border-4 border-dark-950 transform md:-translate-x-1/2 -translate-x-1/2 flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { emoji: '🌍', label: 'Countries Visited', value: '6+' },
              { emoji: '🏆', label: 'Total Awards', value: '20+' },
              { emoji: '🎖️', label: 'Gold Medals', value: '5+' },
              { emoji: '🥇', label: '1st Places', value: '8+' },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass rounded-lg p-6 text-center border border-gold-700/20 hover:border-gold-700/50 smooth-transition"
              >
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
