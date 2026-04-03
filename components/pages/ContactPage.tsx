'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Navbar from '@/components/Navbar-Loay';
import Footer from '@/components/Footer-Loay';

const contactInfo = [
  { icon: faEnvelope, label: 'Email', value: 'loayeldin77@gmail.com', href: 'mailto:loayeldin77@gmail.com' },
  { icon: faPhone, label: 'Phone', value: '+20 114 499 922', href: 'tel:+20114499922' },
  { icon: faMapMarkerAlt, label: 'Location', value: 'Cairo, Egypt', href: '#' },
];

const socialLinks = [
  { icon: faGithub, label: 'GitHub', href: 'https://github.com/loayeldin77', color: 'hover:text-white' },
  { icon: faLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/loayeldin77', color: 'hover:text-blue-400' },
  { icon: faTwitter, label: 'Twitter', href: 'https://twitter.com/loayeldin77', color: 'hover:text-sky-400' },
  { icon: faWhatsapp, label: 'WhatsApp', href: 'https://wa.me/20114499922', color: 'hover:text-green-400' },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-500/10 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Get In <span className="text-gold-400">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed"
          >
            Let&apos;s collaborate on innovative projects or discuss opportunities
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass border-gold-500/20 rounded-2xl p-8 text-center hover:border-gold-400/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:from-gold-500/30 group-hover:to-gold-600/30 transition-all duration-300">
                  <FontAwesomeIcon icon={item.icon} className="text-2xl text-gold-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.label}</h3>
                <p className="text-gold-400">{item.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="glass border-gold-500/20 rounded-2xl p-8 lg:p-12 mb-16">
            <h2 className="text-2xl font-bold text-center text-white mb-8">
              Connect On <span className="text-gold-400">Social Media</span>
            </h2>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`w-16 h-16 glass border-gold-500/30 rounded-xl flex items-center justify-center text-gold-400 ${social.color} hover:border-gold-400/50 transition-all duration-300`}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-2xl" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass border-gold-500/20 rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-center text-white mb-8">
              Send A <span className="text-gold-400">Message</span>
            </h2>
            <form className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:border-gold-400 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:border-gold-400 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-neutral-300 text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:border-gold-400 focus:outline-none transition-colors"
                  placeholder="Message subject"
                />
              </div>
              <div>
                <label className="block text-neutral-300 text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:border-gold-400 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
