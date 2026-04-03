'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { HiEnvelope, HiPhone, HiGlobeAlt } from 'react-icons/hi2';
import { HiArrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

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

  const contactMethods = [
    {
      icon: HiEnvelope,
      label: 'Email',
      value: 'loay.eldin@example.com',
      href: 'mailto:loay.eldin@example.com',
    },
    {
      icon: HiPhone,
      label: 'WhatsApp',
      value: '+20 (123) 456-7890',
      href: 'https://wa.me/201234567890',
    },
    {
      icon: HiGlobeAlt,
      label: 'Location',
      value: 'Egypt',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/loayeldin',
      color: 'hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/loayeldin',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Twitter',
      icon: () => <span className="text-xl">𝕏</span>,
      href: 'https://twitter.com/loayeldin',
      color: 'hover:text-gray-400',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to collaborate on your next project? Reach out and let's create something amazing.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-700 to-gold-500 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="md:col-span-1 space-y-6">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 8 }}
                    className="glass rounded-lg p-6 border border-gold-700/20 hover:border-gold-700/50 smooth-transition group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl text-gold-400 group-hover:scale-110 smooth-transition">
                        <Icon />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold mb-1">{method.label}</h4>
                        <p className="text-gold-400 text-sm group-hover:text-gold-300 smooth-transition">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gold-700/20">
                <h4 className="font-bold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        className={`text-2xl text-gold-400 ${social.color} smooth-transition`}
                        title={social.name}
                      >
                        <Icon />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 glass rounded-lg p-8 border border-gold-700/20"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-gold-700/20 rounded-lg focus:border-gold-700/60 focus:outline-none smooth-transition text-white placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-gold-700/20 rounded-lg focus:border-gold-700/60 focus:outline-none smooth-transition text-white placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-gold-700/20 rounded-lg focus:border-gold-700/60 focus:outline-none smooth-transition text-white placeholder-gray-500"
                    placeholder="Project Collaboration"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-gold-700/20 rounded-lg focus:border-gold-700/60 focus:outline-none smooth-transition text-white placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm"
                  >
                    ✗ Error sending message. Please try again.
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gold-700 text-black font-bold rounded-lg hover:glow-gold-lg smooth-transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitStatus === 'loading' ? (
                    <>
                      <span className="animate-spin">⟳</span> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <HiArrowRight className="text-lg" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-lg p-12 border border-gold-700/20 text-center space-y-4"
          >
            <h3 className="text-3xl font-bold">Prefer Direct Communication?</h3>
            <p className="text-gray-400 mb-6">
              Click the button below to chat with me on WhatsApp instantly.
            </p>
            <motion.a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 smooth-transition"
            >
              <HiPhone className="text-xl" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
