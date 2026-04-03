'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [selectedFilter, setSelectedFilter] = useState<'all' | 'web' | 'robotics' | 'ai'>('all');

  const projects = [
    {
      id: 1,
      title: 'Advanced Robotics Control System',
      category: 'robotics',
      description: 'Autonomous robot control system using Arduino, Raspberry Pi, and sensor integration for international competitions.',
      tech: ['Arduino', 'Raspberry Pi', 'C++', 'Embedded Systems'],
      github: 'https://github.com',
      image: '🤖',
      award: '🥇 1st Place MRC Greece 2024',
    },
    {
      id: 2,
      title: 'React Dashboard Platform',
      category: 'web',
      description: 'Full-stack dashboard application with real-time data visualization, user authentication, and advanced filtering.',
      tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      image: '📊',
      featured: true,
    },
    {
      id: 3,
      title: 'AI-Powered Computer Vision System',
      category: 'ai',
      description: 'Machine learning model for object detection and image recognition using OpenCV and TensorFlow.',
      tech: ['OpenCV', 'Python', 'TensorFlow', 'AI/ML'],
      github: 'https://github.com',
      image: '👁️',
    },
    {
      id: 4,
      title: 'Next.js E-Commerce Platform',
      category: 'web',
      description: 'Full-featured e-commerce platform with product catalog, shopping cart, and secure payment integration.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Stripe'],
      github: 'https://github.com',
      image: '🛍️',
      featured: true,
    },
    {
      id: 5,
      title: 'Autonomous Underwater Robot',
      category: 'robotics',
      description: 'SeaPerch competition entry with real-time navigation, obstacle avoidance, and mission completion systems.',
      tech: ['Robotics', 'Arduino', 'Sensors', 'C++'],
      github: 'https://github.com',
      image: '🌊',
      award: '🏅 4th Place SeaPerch + Best Maneuver',
    },
    {
      id: 6,
      title: 'IoT Smart Home System',
      category: 'robotics',
      description: 'Connected smart home automation using IoT devices, cloud integration, and mobile control interface.',
      tech: ['IoT', 'Node.js', 'React', 'AWS'],
      github: 'https://github.com',
      image: '🏠',
    },
  ];

  const filteredProjects = projects.filter(
    (project) => selectedFilter === 'all' || project.category === selectedFilter
  );

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
      id="projects"
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-700 to-gold-500" />
            <p className="text-gray-400 text-lg">
              Portfolio of award-winning projects spanning web development, robotics, and AI
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3"
          >
            {(['all', 'web', 'robotics', 'ai'] as const).map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-lg font-semibold text-sm smooth-transition ${
                  selectedFilter === filter
                    ? 'bg-gold-700 text-black glow-gold'
                    : 'glass border border-gold-700/30 text-gold-400 hover:border-gold-700/60'
                }`}
              >
                {filter === 'all'
                  ? '⭐ All Projects'
                  : filter === 'web'
                  ? '💻 Web Dev'
                  : filter === 'robotics'
                  ? '🤖 Robotics'
                  : '🧠 AI/ML'}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`glass rounded-lg border border-gold-700/20 hover:border-gold-700/50 overflow-hidden smooth-transition group ${
                  project.featured ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Image Area */}
                <div className="relative h-48 bg-gradient-to-br from-gold-700/20 to-transparent flex items-center justify-center overflow-hidden">
                  <div className="text-8xl transform group-hover:scale-110 smooth-transition">
                    {project.image}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gold-700 text-black text-xs font-bold rounded-full">
                      ⭐ Featured
                    </div>
                  )}

                  {/* Award Badge */}
                  {project.award && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gold-700/90 text-black text-xs font-bold rounded-full">
                      {project.award}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl font-bold group-hover:text-gold-400 smooth-transition">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-semibold bg-gold-700/20 text-gold-400 rounded-full border border-gold-700/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-gold-700/20">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold text-sm smooth-transition"
                    >
                      <FaGithub className="text-lg" />
                      Code
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold text-sm smooth-transition ml-auto"
                    >
                      View
                      <HiArrowTopRightOnSquare className="text-lg" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-gray-400 mb-6">
              Want to see more projects or collaborate?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gold-700 text-black font-bold rounded-lg hover:glow-gold-lg smooth-transition"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
