'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      icon: '💻',
      category: 'Web Development',
      skills: [
        'HTML5 & CSS3',
        'JavaScript (ES6+)',
        'React.js (Hooks & Components)',
        'Next.js (App Router)',
        'Node.js',
        'PHP',
        'Full Stack Systems',
      ],
    },
    {
      icon: '🤖',
      category: 'Robotics & Embedded Systems',
      skills: [
        'Arduino Programming',
        'Raspberry Pi',
        'Sensors & Actuators',
        'Automation Systems',
        'Embedded C/C++',
        'IoT Integration',
      ],
    },
    {
      icon: '🧠',
      category: 'AI & Computer Vision',
      skills: [
        'OpenCV',
        'Machine Learning Basics',
        'Smart Systems',
        'Image Processing',
        'AI Integration',
        'Neural Networks',
      ],
    },
    {
      icon: '🎨',
      category: 'Design & Creative Tools',
      skills: [
        'Adobe Photoshop',
        'UI/UX Fundamentals',
        'Figma',
        'Responsive Design',
        'Design Systems',
        'Visual Hierarchy',
      ],
    },
    {
      icon: '📈',
      category: 'Marketing & Business',
      skills: [
        'Digital Marketing',
        'SEO Fundamentals',
        'Social Media Strategy',
        'Content Creation',
        'Brand Development',
        'Analytics',
      ],
    },
    {
      icon: '🧑‍🏫',
      category: 'Teaching & Leadership',
      skills: [
        'Programming Instruction',
        'Robotics Mentoring',
        'Public Speaking',
        'Team Leadership',
        'Curriculum Design',
        'Community Building',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding relative bg-gradient-to-b from-transparent via-dark-800/20 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-700 to-gold-500" />
            <p className="text-gray-400 text-lg">
              Expertise across full stack development, robotics, AI, and leadership
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="glass rounded-lg p-8 border border-gold-700/20 hover:border-gold-700/50 smooth-transition group"
              >
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 smooth-transition">
                  {category.icon}
                </div>

                {/* Category Title */}
                <h3 className="text-2xl font-bold mb-6 text-white">
                  {category.category}
                </h3>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      className="flex items-center gap-3 text-gray-300 group/item"
                    >
                      <span className="text-gold-400 text-lg group-hover/item:scale-125 smooth-transition">
                        ✦
                      </span>
                      <span className="group-hover/item:text-gold-400 smooth-transition">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gold-700/10 to-transparent opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Summary */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-lg p-8 border border-gold-700/20 mt-8"
          >
            <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Frontend', techs: ['React', 'Next.js', 'Tailwind', 'TypeScript'] },
                { name: 'Backend', techs: ['Node.js', 'PHP', 'REST APIs'] },
                { name: 'Robotics', techs: ['Arduino', 'Raspberry Pi', 'C/C++'] },
                { name: 'Tools', techs: ['Git', 'Docker', 'VS Code'] },
              ].map((stack, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white/5 rounded-lg border border-gold-700/10 hover:border-gold-700/30 smooth-transition"
                >
                  <h4 className="font-bold text-gold-400 mb-3">{stack.name}</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    {stack.techs.map((tech, i) => (
                      <li key={i}>• {tech}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
