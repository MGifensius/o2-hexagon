import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      title: "Visit Our Venues",
      details: ["123 Luxe Avenue, Downtown District", "456 Harbor View, Bayfront Promenade"],
      description: "Experience luxury at our premium locations",
      icon: (
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gold-500/10 rounded-lg flex items-center justify-center border border-gold-500/30">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      )
    },
    {
      title: "Contact Us",
      details: ["+1 (555) 123-HEXA", "+1 (555) 123-O2CLUB"],
      description: "24/7 reservation and inquiry line",
      icon: (
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gold-500/10 rounded-lg flex items-center justify-center border border-gold-500/30">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
      )
    },
    {
      title: "Email Inquiries",
      details: ["reservations@o2hexagon.com", "events@o2hexagon.com"],
      description: "Quick response guaranteed within 24 hours",
      icon: (
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gold-500/10 rounded-lg flex items-center justify-center border border-gold-500/30">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      )
    },
    {
      title: "Operating Hours",
      details: ["Wednesday - Sunday: 9PM - 4AM", "Monday - Tuesday: Private Events Only"],
      description: "Extended weekend luxury experience",
      icon: (
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gold-500/10 rounded-lg flex items-center justify-center border border-gold-500/30">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gold-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gold-200 max-w-3xl mx-auto px-4">
            Ready to experience the ultimate nightlife? Contact us for reservations, 
            events, or any inquiries about O2 Hexagon.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex items-start space-x-4 md:space-x-6 p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-gold-900/10 to-gold-600/5 border border-gold-500/20 backdrop-blur-sm group hover:border-gold-500/40 transition-all duration-300"
              >
                {item.icon}
                <div className="flex-1 min-w-0"> {/* Added min-w-0 for text truncation */}
                  <h3 className="text-lg md:text-xl font-display font-bold text-gold-300 mb-2 md:mb-3">
                    {item.title}
                  </h3>
                  <div className="space-y-1 mb-2">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gold-200 font-medium text-sm md:text-base">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-gold-400/70 text-xs md:text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-gold-900/10 to-gold-600/5 border border-gold-500/20"
            >
              <h3 className="text-lg md:text-xl font-display font-bold text-gold-300 mb-4 flex items-center">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gold-500/10 rounded-lg flex items-center justify-center border border-gold-500/30 mr-3">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                Connect With Us
              </h3>
              <div className="flex flex-wrap gap-4 md:gap-6">
                {[
                  { 
                    name: 'Instagram', 
                    icon: (
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth="2"/>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="2"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Facebook', 
                    icon: (
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    )
                  },
                  { 
                    name: 'Twitter', 
                    icon: (
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    )
                  }
                ].map((platform) => (
                  <motion.a
                    key={platform.name}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center space-x-2 text-gold-200 hover:text-gold-400 transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gold-500/10 rounded-lg flex items-center justify-center border border-gold-500/30 group-hover:border-gold-400 transition-colors duration-300">
                      {platform.icon}
                    </div>
                    <span className="font-medium text-sm md:text-base hidden sm:block">{platform.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-gold-900/10 to-gold-600/5 border border-gold-500/20 backdrop-blur-sm"
          >
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gold-500/10 rounded-lg flex items-center justify-center border border-gold-500/30 mr-3 md:mr-4">
                <svg className="w-4 h-4 md:w-6 md:h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-gold-300">
                Make a Reservation
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="md:col-span-2 lg:col-span-1">
                  <label className="block text-gold-200 mb-1 md:mb-2 font-medium text-sm md:text-base">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-black/50 border border-gold-500/30 rounded-lg text-white placeholder-gold-200/50 focus:border-gold-400 focus:outline-none transition-colors duration-300 text-sm md:text-base"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                  <label className="block text-gold-200 mb-1 md:mb-2 font-medium text-sm md:text-base">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-black/50 border border-gold-500/30 rounded-lg text-white placeholder-gold-200/50 focus:border-gold-400 focus:outline-none transition-colors duration-300 text-sm md:text-base"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="md:col-span-2 lg:col-span-1">
                  <label className="block text-gold-200 mb-1 md:mb-2 font-medium text-sm md:text-base">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-black/50 border border-gold-500/30 rounded-lg text-white placeholder-gold-200/50 focus:border-gold-400 focus:outline-none transition-colors duration-300 text-sm md:text-base"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                  <label className="block text-gold-200 mb-1 md:mb-2 font-medium text-sm md:text-base">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-black/50 border border-gold-500/30 rounded-lg text-white placeholder-gold-200/50 focus:border-gold-400 focus:outline-none transition-colors duration-300 text-sm md:text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gold-200 mb-1 md:mb-2 font-medium text-sm md:text-base">Number of Guests</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-black/50 border border-gold-500/30 rounded-lg text-white focus:border-gold-400 focus:outline-none transition-colors duration-300 text-sm md:text-base"
                  required
                >
                  <option value="">Select number of guests</option>
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                  ))}
                  <option value="9+">9+ guests (VIP booking)</option>
                </select>
              </div>

              <div>
                <label className="block text-gold-200 mb-1 md:mb-2 font-medium text-sm md:text-base">Special Requests</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-black/50 border border-gold-500/30 rounded-lg text-white placeholder-gold-200/50 focus:border-gold-400 focus:outline-none transition-colors duration-300 resize-none text-sm md:text-base"
                  placeholder="Any special requirements or requests..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(234, 179, 8, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gold-500 text-black py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-gold-400 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Reserve Now</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;