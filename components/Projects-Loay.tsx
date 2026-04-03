'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowRight, HiCodeBracket, HiCpuChip, HiRocketLaunch, HiEye, HiAcademicCap } from 'react-icons/hi2';

export default function Projects() {
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

  const projects = [
    {
      title: 'AI-Powered Robotics Control System',
      description: 'Advanced control system for autonomous robots using machine learning algorithms and computer vision for real-time decision making.',
      techStack: ['React', 'Python', 'OpenCV', 'TensorFlow', 'Arduino'],
      category: 'AI & Robotics',
      image: '/api/placeholder/400/250',
      github: 'https://github.com/loayeldin/ai-robotics-control',
      live: 'https://ai-robotics-demo.vercel.app',
      featured: true,
      icon: HiCpuChip,
    },
    {
      title: 'Full-Stack E-Commerce Platform',
      description: 'Modern e-commerce solution with React, Next.js, and Node.js featuring real-time inventory, payment processing, and admin dashboard.',
      techStack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web Development',
      image: '/api/placeholder/400/250',
      github: 'https://github.com/loayeldin/ecommerce-platform',
      live: 'https://ecommerce-demo.vercel.app',
      featured: true,
      icon: HiCodeBracket,
    },
    {
      title: 'Educational Robotics Kit',
      description: 'Comprehensive robotics learning platform for students with interactive tutorials, simulation environment, and project-based learning.',
      techStack: ['React', 'Three.js', 'Node.js', 'Arduino', 'Raspberry Pi'],
      category: 'Education & Robotics',
      image: '/api/placeholder/400/250',
      github: 'https://github.com/loayeldin/edu-robotics-kit',
      live: 'https://edu-robotics.vercel.app',
      featured: true,
      icon: HiRocketLaunch,
    },
    {
      title: 'Smart Home Automation System',
      description: 'IoT-based home automation system with voice control, mobile app interface, and integration with popular smart home devices.',
      techStack: ['React Native', 'Node.js', 'MQTT', 'Arduino', 'Raspberry Pi'],
      category: 'IoT & Automation',
      image: '/api/placeholder/400/250',
      github: 'https://github.com/loayeldin/smart-home-automation',
      live: null,
      featured: false,
      icon: HiCpuChip,
    },
    {
      title: 'Computer Vision Security System',
      description: 'AI-powered security system with real-time face detection, motion tracking, and alert system using computer vision techniques.',
      techStack: ['Python', 'OpenCV', 'React', 'Flask', 'TensorFlow'],
      category: 'AI & Computer Vision',
      image: '/api/placeholder/400/250',
      github: 'https://github.com/loayeldin/vision-security',
      live: null,
      featured: false,
      icon: HiEye,
    },
    {
      title: 'Competition Robot Controller',
      description: 'Specialized robot control system designed for international robotics competitions with precision movement and sensor integration.',
      techStack: ['C++', 'Arduino', 'ROS', 'Python', 'Sensors'],
      category: 'Robotics',
      image: '/api/placeholder/400/250',
      github: 'https://github.com/loayeldin/competition-robot',
      live: null,
      featured: false,
      icon: HiCpuChip,
    },
    {
      title: 'Portfolio Website Builder',
      description: 'Dynamic portfolio generator with customizable templates, real-time editing, and deployment integration for developers and designers.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel', 'GitHub API'],
      category: 'Web Development',
      image: '/api/placeholder/400/250',
      github: 'https://github.com/loayeldin/portfolio-builder',
      live: 'https://portfolio-builder.vercel.app',
      featured: false,
      icon: HiCodeBracket,
    },
    {
      title: 'Student Management System',
      description: 'Comprehensive educational platform for managing student progress, assignments, and communication between teachers and students.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT'],
      category: 'Education',
      image: '/api/placeholder/400/250',
      github: 'https://github.com/loayeldin/student-management',
      live: 'https://student-mgmt.vercel.app',
      featured: false,
      icon: HiAcademicCap,
    },
    {
      title: 'Autonomous Drone Navigation',
      description: 'Self-navigating drone system with GPS integration, obstacle avoidance, and computer vision for autonomous flight operations.',
      techStack: ['Python', 'OpenCV', 'Arduino', 'GPS', 'Sensors'],
      category: 'Robotics & AI',
      image: '/api/placeholder/400/250',
      github: 'https://github.com/loayeldin/drone-navigation',
      live: null,
      featured: false,
      icon: HiCpuChip,
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI & Robotics': 'ios-purple',
      'Web Development': 'ios-blue',
      'Education & Robotics': 'ios-green',
      'IoT & Automation': 'ios-orange',
      'AI & Computer Vision': 'ios-pink',
      'Robotics': 'ios-cyan',
      'Education': 'ios-green',
      'Robotics & AI': 'ios-purple',
    };
    return colors[category] || 'ios-blue';
  };

  return (
    <section id="projects" ref={ref} className="relative py-24 lg:py-32 section-padding overflow-hidden">
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
              <HiCodeBracket className="text-gold-400 text-xl" />
              <span className="text-gold-200">Project Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
              <span className="bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
              A curated collection of my best work spanning web development, robotics, AI systems, 
              and educational platforms. Each project represents a unique challenge and innovative solution.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="space-y-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gold-300 mb-8">
              ⭐ Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-gold border-gold-500/30 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-gold-400/50 hover:gold-glow-md"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 px-3 py-1 glass-gold rounded-full text-xs font-medium text-gold-200 border border-gold-500/30">
                      {project.category}
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <project.icon className="text-3xl text-gold-400" />
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 bg-${getCategoryColor(project.category)}-500/20 text-${getCategoryColor(project.category)}-300 text-xs font-medium rounded-full border border-${getCategoryColor(project.category)}-500/30`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors"
                      >
                        <HiCodeBracket className="text-lg" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors"
                        >
                          <HiArrowRight className="text-lg" />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Projects */}
          <motion.div variants={itemVariants} className="space-y-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gold-300 mb-8">
              🚀 All Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass border-neutral-700/50 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:border-gold-400/50 hover:glass-gold"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-2 bg-gradient-to-br from-${getCategoryColor(project.category)}-500 to-${getCategoryColor(project.category)}-600 rounded-lg text-white`}>
                      <project.icon className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">
                        {project.title}
                      </h4>
                      <div className="text-xs text-gold-400 font-medium mb-2">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 bg-${getCategoryColor(project.category)}-500/10 text-${getCategoryColor(project.category)}-300 text-xs font-medium rounded border border-${getCategoryColor(project.category)}-500/20`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs text-neutral-500">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      <HiCodeBracket className="text-sm" />
                      <span className="text-xs font-medium">Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gold-400 hover:text-gold-300 transition-colors"
                      >
                        <HiArrowRight className="text-sm" />
                        <span className="text-xs font-medium">Demo</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Projects Summary */}
          <motion.div variants={itemVariants} className="glass-gold rounded-3xl p-12 text-center border border-gold-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gold-300 mb-8">
              Project Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">50+</div>
                <div className="text-neutral-400 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">15+</div>
                <div className="text-neutral-400 text-sm">Open Source</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">8+</div>
                <div className="text-neutral-400 text-sm">Technologies</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">3</div>
                <div className="text-neutral-400 text-sm">Categories</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
