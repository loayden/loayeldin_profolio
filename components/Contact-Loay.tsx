'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { HiEnvelope, HiPhone, HiMapPin, HiChatBubbleLeftRight, HiPaperAirplane } from 'react-icons/hi2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact-loay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: HiEnvelope,
      label: 'Email',
      value: 'loayeldin77@gmail.com',
      href: 'mailto:loayeldin77@gmail.com',
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+20 114 499 922',
      href: 'tel:+20114499922',
    },
    {
      icon: HiMapPin,
      label: 'Location',
      value: 'Cairo, Egypt',
      href: null,
    },
    {
      icon: HiChatBubbleLeftRight,
      label: 'WhatsApp',
      value: '+20 114 499 922',
      href: 'https://wa.me/20114499922',
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-32 section-padding overflow-hidden">
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
              <HiEnvelope className="text-gold-400 text-xl" />
              <span className="text-gold-200">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
              <span className="bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or exciting projects. 
              Whether you want to build something amazing together or just say hello, feel free to reach out!
            </p>
          </motion.div>

          {/* Contact Content */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-gold border-gold-500/30 rounded-2xl p-8 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-gold-300 mb-8">Send a Message</h3>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
                    Something went wrong. Please try again later.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gold-200 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gold-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gold-200 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                      placeholder="Project Collaboration, Job Opportunity, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gold-200 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold rounded-2xl gold-glow-md hover:gold-glow-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <HiPaperAirplane className="text-xl" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass border-neutral-700/50 rounded-2xl p-8 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-gold-300 mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-neutral-800/50 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center text-black">
                        <info.icon className="text-xl" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gold-200 font-medium mb-1">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white hover:text-gold-300 transition-colors"
                            target={info.href?.startsWith('http') ? '_blank' : '_self'}
                            rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-gold border-gold-500/30 rounded-2xl p-8 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-gold-300 mb-8">Connect Online</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <motion.a
                    href="https://github.com/loayeldin"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="p-4 glass border-neutral-700/50 rounded-xl text-center hover:border-gold-400/50 transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">🐙</div>
                    <div className="text-sm font-medium text-white">GitHub</div>
                    <div className="text-xs text-neutral-400">View Projects</div>
                  </motion.a>
                  
                  <motion.a
                    href="https://linkedin.com/in/loayeldin"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="p-4 glass border-neutral-700/50 rounded-xl text-center hover:border-gold-400/50 transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">💼</div>
                    <div className="text-sm font-medium text-white">LinkedIn</div>
                    <div className="text-xs text-neutral-400">Professional</div>
                  </motion.a>
                  
                  <motion.a
                    href="https://twitter.com/loay_eldin"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="p-4 glass border-neutral-700/50 rounded-xl text-center hover:border-gold-400/50 transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">🐦</div>
                    <div className="text-sm font-medium text-white">Twitter</div>
                    <div className="text-xs text-neutral-400">Updates</div>
                  </motion.a>
                  
                  <motion.a
                    href="https://wa.me/201234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="p-4 glass border-neutral-700/50 rounded-xl text-center hover:border-gold-400/50 transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-2xl mb-2 text-green-400" />
                    <div className="text-sm font-medium text-white">WhatsApp</div>
                    <div className="text-xs text-neutral-400">Quick Chat</div>
                  </motion.a>
                </div>
              </div>

              {/* Response Time */}
              <div className="glass border-neutral-700/50 rounded-2xl p-6 backdrop-blur-md text-center">
                <div className="text-gold-300 font-medium mb-2">Response Time</div>
                <div className="text-white text-2xl font-bold mb-1">24-48 Hours</div>
                <div className="text-neutral-400 text-sm">
                  I'll get back to you as soon as possible
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
