'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HiCodeBracket, 
  HiCpuChip, 
  HiEye, 
  HiPaintBrush, 
  HiChartBar, 
  HiAcademicCap 
} from 'react-icons/hi2';

export default function Skills() {
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

  const skillCategories = [
    {
      icon: HiCodeBracket,
      title: 'Web Development',
      color: 'ios-blue',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React.js (Hooks, Components, State Management)', level: 85 },
        { name: 'Next.js (App Router)', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'Node.js', level: 70 },
        { name: 'TypeScript', level: 85 },
        { name: 'Full Stack Systems', level: 80 },
      ]
    },
    {
      icon: HiCpuChip,
      title: 'Robotics & Embedded Systems',
      color: 'ios-green',
      skills: [
        { name: 'Raspberry Pi', level: 85 },
        { name: 'Arduino', level: 90 },
        { name: 'Sensors & Automation', level: 80 },
        { name: 'Embedded C/C++', level: 75 },
        { name: 'Circuit Design', level: 70 },
        { name: 'Robot Operating System (ROS)', level: 65 },
      ]
    },
    {
      icon: HiEye,
      title: 'AI & Computer Vision',
      color: 'ios-purple',
      skills: [
        { name: 'OpenCV (Basics)', level: 70 },
        { name: 'Smart Systems Integration', level: 75 },
        { name: 'Machine Learning Fundamentals', level: 65 },
        { name: 'Image Processing', level: 70 },
        { name: 'Pattern Recognition', level: 60 },
      ]
    },
    {
      icon: HiPaintBrush,
      title: 'Design & Creative Tools',
      color: 'ios-pink',
      skills: [
        { name: 'Adobe Photoshop', level: 80 },
        { name: 'UI/UX Basics', level: 75 },
        { name: 'Figma', level: 70 },
        { name: 'Web Design Principles', level: 85 },
        { name: 'Responsive Design', level: 90 },
      ]
    },
    {
      icon: HiChartBar,
      title: 'Marketing & Business Tools',
      color: 'ios-orange',
      skills: [
        { name: 'Digital Marketing Fundamentals', level: 75 },
        { name: 'SEO Basics', level: 70 },
        { name: 'Social Media Strategy', level: 80 },
        { name: 'Content Creation', level: 85 },
        { name: 'Analytics & Data Analysis', level: 70 },
        { name: 'Business Development', level: 65 },
      ]
    },
    {
      icon: HiAcademicCap,
      title: 'Teaching & Leadership',
      color: 'gold',
      skills: [
        { name: 'Teaching Programming & Robotics', level: 90 },
        { name: 'Mentoring Students', level: 85 },
        { name: 'Public Speaking', level: 80 },
        { name: 'Team Leadership', level: 85 },
        { name: 'Curriculum Development', level: 75 },
        { name: 'Workshop Facilitation', level: 80 },
      ]
    },
  ];

  return (
    <section id="skills" ref={ref} className="relative py-24 lg:py-32 section-padding overflow-hidden">
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
              <HiCodeBracket className="text-gold-400 text-xl" />
              <span className="text-gold-200">Technical Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
              <span className="bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technical skillset spanning web development, robotics, AI, design, 
              marketing, and education. Building intelligent systems and empowering future innovators.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass border-neutral-700/50 rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:border-gold-400/50 hover:glass-gold"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 rounded-xl text-white`}>
                    <category.icon className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gold-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-neutral-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gold-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-neutral-800/80 rounded-full h-2.5 overflow-hidden border border-neutral-700/50">
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          animate={inView ? { width: `${skill.level}%`, opacity: 1 } : { width: 0, opacity: 0 }}
                          transition={{ 
                            duration: 1.2, 
                            delay: index * 0.1 + skillIndex * 0.05,
                            ease: [0.25, 0.1, 0.25, 1]
                          }}
                          className={`h-full bg-gradient-to-r from-${category.color}-400 to-${category.color}-500 rounded-full relative`}
                        >
                          <motion.div
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants} className="glass-gold rounded-3xl p-12 text-center border border-gold-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gold-300 mb-8">
              Technical Proficiency Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">8+</div>
                <div className="text-neutral-400 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">30+</div>
                <div className="text-neutral-400 text-sm">Technologies</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">50+</div>
                <div className="text-neutral-400 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">6</div>
                <div className="text-neutral-400 text-sm">Skill Categories</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
