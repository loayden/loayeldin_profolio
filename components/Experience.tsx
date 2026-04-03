'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiTrophy, HiAcademicCap, HiCodeBracket, HiMapPin, HiCalendar } from 'react-icons/hi2';

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const timeline = [
    {
      year: '2024',
      title: 'MRC Greece 2024 Champion',
      organization: 'Mediterranean Robotics Championship',
      location: 'Greece 🇬🇷',
      type: 'competition',
      description: '1st Place in Mediterranean Robotics Championship, competing against teams from across Europe and the Middle East.',
      achievements: ['🥇 1st Place Overall', 'Best Technical Design', 'Innovation Award'],
      icon: HiTrophy,
    },
    {
      year: '2024',
      title: 'Robo Tourney USA Finals',
      organization: 'International Robotics Competition',
      location: 'California, USA 🇺🇸',
      type: 'competition',
      description: 'Represented Egypt in international finals, securing multiple awards in different categories.',
      achievements: ['🥈 2nd Place Worldwide', '🥉 3rd Place Creative Award', 'Think Award Winner'],
      icon: HiTrophy,
    },
    {
      year: '2024',
      title: 'Tech Educator & Mentor',
      organization: 'Young Innovators Program',
      location: 'Cairo, Egypt 🇪🇬',
      type: 'education',
      description: 'Leading robotics and programming workshops for young students, mentoring the next generation of innovators.',
      achievements: ['100+ Students Mentored', '10+ Workshops Conducted', 'Curriculum Development'],
      icon: HiAcademicCap,
    },
    {
      year: '2023',
      title: 'SeaPerch International',
      organization: 'Underwater Robotics Competition',
      location: 'United States 🇺🇸',
      type: 'competition',
      description: '4th Place Worldwide in underwater robotics competition with special recognition for maneuverability and teamwork.',
      achievements: ['🏅 4th Place Worldwide', 'Best Maneuver Award', 'Team Spirit Award'],
      icon: HiTrophy,
    },
    {
      year: '2023',
      title: 'Full Stack Developer',
      organization: 'Freelance & Projects',
      location: 'Remote 🌍',
      type: 'work',
      description: 'Developing modern web applications using React, Next.js, and Node.js for international clients.',
      achievements: ['20+ Projects Delivered', 'React & Next.js Expertise', 'Global Client Base'],
      icon: HiCodeBracket,
    },
    {
      year: '2023',
      title: 'Young Innovators Africa Champion',
      organization: 'African Innovation Forum',
      location: 'South Africa 🇿🇦',
      type: 'competition',
      description: '1st Place in African innovation competition, showcasing robotics solutions for African challenges.',
      achievements: ['🥇 1st Place Africa', 'Best Innovation', 'Social Impact Award'],
      icon: HiTrophy,
    },
    {
      year: '2022',
      title: 'Egypt Open Robotics Champion',
      organization: 'National Robotics Championship',
      location: 'Cairo, Egypt 🇪🇬',
      type: 'competition',
      description: 'National champion in robotics, qualifying for international competitions and representing Egypt.',
      achievements: ['🥇 National Champion', 'Technical Excellence', 'International Qualification'],
      icon: HiTrophy,
    },
    {
      year: '2022',
      title: 'RoboRave Egypt',
      organization: 'International Robotics Qualifier',
      location: 'Alexandria, Egypt 🇪🇬',
      type: 'competition',
      description: '2nd Place in national qualifier, securing spot in international finals.',
      achievements: ['🥈 2nd Place National', 'International Finals Qualification', 'Best Design'],
      icon: HiTrophy,
    },
    {
      year: '2021',
      title: 'Robotics Instructor',
      organization: 'Tech Education Centers',
      location: 'Giza, Egypt 🇪🇬',
      type: 'education',
      description: 'Started teaching robotics and programming to young students, developing curriculum and workshops.',
      achievements: ['50+ Students Taught', 'Custom Curriculum', 'Parent Satisfaction 95%'],
      icon: HiAcademicCap,
    },
  ];

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      competition: 'gold',
      education: 'ios-green',
      work: 'ios-blue',
    };
    return colors[type] || 'gold';
  };

  const getTypeIcon = (type: string) => {
    const icons: { [key: string]: string } = {
      competition: '🏆',
      education: '🧑‍🏫',
      work: '💻',
    };
    return icons[type] || '🏆';
  };

  return (
    <section id="experience" ref={ref} className="relative py-24 lg:py-32 section-padding overflow-hidden">
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
              <HiCalendar className="text-gold-400 text-xl" />
              <span className="text-gold-200">Experience Timeline</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
              <span className="bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">
                Journey of Excellence
              </span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
              A timeline of achievements, competitions, teaching experiences, and professional growth 
              spanning multiple countries and disciplines.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 via-gold-400 to-gold-500 transform md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 md:gap-12`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-gold-400 rounded-full border-4 border-black transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 gold-glow-md" />
                  
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-20 md:ml-0`}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      className={`glass border-neutral-700/50 rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:border-${getTypeColor(item.type)}-400/50 hover:glass-gold ${
                        index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                      } md:max-w-lg lg:max-w-xl`}
                    >
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`px-3 py-1 bg-${getTypeColor(item.type)}-500/20 text-${getTypeColor(item.type)}-300 text-xs font-medium rounded-full border border-${getTypeColor(item.type)}-500/30 flex items-center gap-1`}>
                          {getTypeIcon(item.type)}
                          <span className="capitalize">{item.type}</span>
                        </div>
                        <div className="text-gold-400 font-bold">
                          {item.year}
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className={`text-xl font-bold text-white mb-2 flex items-center gap-2 ${
                        index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        <item.icon className="text-gold-400 text-xl" />
                        {item.title}
                      </h3>
                      
                      {/* Organization */}
                      <div className={`text-${getTypeColor(item.type)}-300 font-medium mb-1`}>
                        {item.organization}
                      </div>
                      
                      {/* Location */}
                      <div className="flex items-center gap-2 text-neutral-400 text-sm mb-4">
                        <HiMapPin className="text-gold-400" />
                        {item.location}
                      </div>
                      
                      {/* Description */}
                      <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="space-y-2">
                        {item.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center gap-2 text-sm text-gold-200">
                            <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div variants={itemVariants} className="glass-gold rounded-3xl p-12 text-center border border-gold-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gold-300 mb-8">
              Experience Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">4+</div>
                <div className="text-neutral-400 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">15+</div>
                <div className="text-neutral-400 text-sm">Competitions</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">100+</div>
                <div className="text-neutral-400 text-sm">Students Mentored</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">6+</div>
                <div className="text-neutral-400 text-sm">Countries</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
