'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faGlobe, faMedal, faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Competitions() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const internationalCompetitions = [
    {
      medal: 'gold',
      place: '1st Place',
      competition: 'MRC Greece 2024',
      location: 'Greece 🇬🇷',
      description: 'Mediterranean Robotics Championship',
      highlight: true,
    },
    {
      medal: 'silver',
      place: '2nd Place Worldwide',
      competition: 'Robo Tourney USA',
      location: 'United States 🇺🇸',
      description: 'Creative Award + Think Award',
      highlight: true,
    },
    {
      medal: 'silver',
      place: '2nd Place',
      competition: 'Robo Tourney USA 2024',
      location: 'California, USA 🇺🇸',
      description: 'Qualified for international finals',
      highlight: true,
    },
    {
      medal: 'bronze',
      place: '3rd Place',
      competition: 'Robo Tourney USA 2024',
      location: 'California, USA 🇺🇸',
      description: 'Multiple category wins',
      highlight: true,
    },
    {
      medal: '🏅',
      place: '4th Place Worldwide',
      competition: 'SeaPerch International',
      location: 'United States 🇺🇸',
      description: 'Best Maneuver + Team Spirit Awards',
      highlight: true,
    },
    {
      medal: 'gold',
      place: '1st Place Africa',
      competition: 'Young Innovators Program',
      location: 'South Africa 🇿🇦',
      description: 'African Innovation Championship',
      highlight: true,
    },
    {
      medal: 'globe',
      place: 'Represented Egypt',
      competition: 'International Robotics Olympiad',
      location: 'China 🇨🇳',
      description: 'Global robotics competition',
      highlight: false,
    },
    {
      medal: 'globe',
      place: 'Represented Egypt',
      competition: 'World Robotics Championship',
      location: 'Turkey 🇹🇷',
      description: 'International showcase',
      highlight: false,
    },
    {
      medal: 'globe',
      place: 'Represented Egypt',
      competition: 'Gulf Robotics Festival',
      location: 'UAE 🇦🇪',
      description: 'Regional championship',
      highlight: false,
    },
    {
      medal: 'globe',
      place: 'Represented Egypt',
      competition: 'Africa Robotics Challenge',
      location: 'Morocco 🇲🇦',
      description: 'Continental competition',
      highlight: false,
    },
  ];

  const nationalCompetitions = [
    {
      medal: 'gold',
      place: '1st Place',
      competition: 'Egypt Open Robotics Championship',
      location: 'Cairo, Egypt 🇪🇬',
      description: 'National robotics champion',
      highlight: true,
    },
    {
      medal: 'silver',
      place: '2nd Place',
      competition: 'RoboRave Egypt',
      location: 'Alexandria, Egypt 🇪🇬',
      description: 'Qualified for international finals',
      highlight: true,
    },
    {
      medal: 'silver',
      place: '2nd Place',
      competition: 'Robo Tourney Egypt',
      location: 'Giza, Egypt 🇪🇬',
      description: 'California qualification spot',
      highlight: true,
    },
    {
      medal: 'trophy',
      place: 'Top 3',
      competition: 'African Innovation & Technology Forum',
      location: 'Cairo, Egypt 🇪🇬',
      description: 'Multiple category rankings',
      highlight: true,
    },
  ];

  return (
    <section id="competitions" ref={ref} className="relative py-24 lg:py-32 section-padding overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-gold-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-gold-400/8 to-transparent rounded-full blur-3xl"
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
              <FontAwesomeIcon icon={faTrophy} className="text-2xl text-gold-400" />
              <span className="text-gold-200">Global Recognition</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
              <span className="bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">
                International Competitions
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-neutral-300 font-medium">
                & Global Achievements
              </span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
              Representing Egypt on the world stage, competing against the best robotics engineers 
              and innovators from across the globe.
            </p>
          </motion.div>

          {/* International Competitions */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <FontAwesomeIcon icon={faGlobe} className="text-3xl text-gold-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-gold-300">
                <FontAwesomeIcon icon={faGlobe} className="text-2xl mr-2" /> International Achievements
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internationalCompetitions.map((competition, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative group ${
                    competition.highlight 
                      ? 'glass-gold border-gold-500/30 gold-glow-sm' 
                      : 'glass border-neutral-700/50'
                  } rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:border-gold-400/50`}
                >
                  {competition.highlight && (
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500/20 to-gold-600/10 rounded-2xl blur -z-10" />
                  )}
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl">
                      {competition.medal === 'gold' && <FontAwesomeIcon icon={faMedal} className="text-yellow-400" />}
                      {competition.medal === 'silver' && <FontAwesomeIcon icon={faMedal} className="text-gray-300" />}
                      {competition.medal === 'bronze' && <FontAwesomeIcon icon={faMedal} className="text-amber-600" />}
                      {competition.medal === 'globe' && <FontAwesomeIcon icon={faGlobe} className="text-gold-400" />}
                      {competition.medal === 'trophy' && <FontAwesomeIcon icon={faTrophy} className="text-gold-400" />}
                    </div>
                    <div className="flex-1">
                      <div className="text-gold-400 font-bold text-lg mb-1">
                        {competition.place}
                      </div>
                      <div className="text-white font-semibold text-xl mb-2">
                        {competition.competition}
                      </div>
                      <div className="flex items-center gap-2 text-neutral-400 text-sm mb-3">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gold-400 mr-1" />
                        {competition.location}
                      </div>
                      <div className="text-neutral-300 text-sm leading-relaxed">
                        {competition.description}
                      </div>
                    </div>
                  </div>
                  
                  {competition.highlight && (
                    <div className="flex items-center gap-1 text-gold-400 text-sm">
                      <FontAwesomeIcon icon={faStar} className="text-gold-300 mr-1" />
                      <span>Major Achievement</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* National Competitions */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl text-gold-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-gold-300">
                National & Regional Excellence
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {nationalCompetitions.map((competition, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass border-neutral-700/50 rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:border-gold-400/50 hover:glass-gold"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl">
                      {competition.medal === 'gold' && <FontAwesomeIcon icon={faMedal} className="text-yellow-400" />}
                      {competition.medal === 'silver' && <FontAwesomeIcon icon={faMedal} className="text-gray-300" />}
                      {competition.medal === 'bronze' && <FontAwesomeIcon icon={faMedal} className="text-amber-600" />}
                      {competition.medal === 'globe' && <FontAwesomeIcon icon={faGlobe} className="text-gold-400" />}
                      {competition.medal === 'trophy' && <FontAwesomeIcon icon={faTrophy} className="text-gold-400" />}
                    </div>
                    <div className="flex-1">
                      <div className="text-gold-400 font-bold text-lg mb-1">
                        {competition.place}
                      </div>
                      <div className="text-white font-semibold text-xl mb-2">
                        {competition.competition}
                      </div>
                      <div className="flex items-center gap-2 text-neutral-400 text-sm mb-3">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gold-400 mr-1" />
                        {competition.location}
                      </div>
                      <div className="text-neutral-300 text-sm leading-relaxed">
                        {competition.description}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Summary */}
          <motion.div variants={itemVariants} className="glass-gold rounded-3xl p-12 text-center border border-gold-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gold-300 mb-8">
              Global Impact Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">6+</div>
                <div className="text-neutral-400 text-sm">Countries</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">15+</div>
                <div className="text-neutral-400 text-sm">International Awards</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">3+</div>
                <div className="text-neutral-400 text-sm">Continents</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">50+</div>
                <div className="text-neutral-400 text-sm">Global Competitors</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
