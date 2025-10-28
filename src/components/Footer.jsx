import React from 'react';
import { motion } from 'framer-motion';

// Import your logo
import O2Logo from '../assets/O2-Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-black to-gold-900/10 border-t border-gold-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={O2Logo} 
                alt="O2 Hexagon Logo" 
                className="h-12 w-auto" // Slightly larger in footer
              />
              <span className="text-3xl font-display font-bold text-gold-400">
                O2 HEXAGON
              </span>
            </div>
            <p className="text-gold-200 max-w-md leading-relaxed">
              Where night becomes legend. Experience premium nightlife in an atmosphere 
              of pure elegance and sophistication across our two exclusive locations.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-display font-bold text-gold-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gold-200 hover:text-gold-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-display font-bold text-gold-300 mb-4">
              Information
            </h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Age Policy', 'Dress Code'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gold-200 hover:text-gold-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gold-500/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gold-400/70 text-sm">
            © {currentYear} O2 Hexagon. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {['Instagram', 'Facebook', 'Twitter'].map((platform) => (
              <motion.a
                key={platform}
                href="#"
                whileHover={{ scale: 1.2, color: '#facc15' }}
                className="text-gold-400/70 hover:text-gold-400 transition-colors duration-300"
              >
                {platform}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;