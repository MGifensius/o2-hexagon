import React from 'react';
import { motion } from 'framer-motion';

// Import location images - replace with your actual images
const locationImages = {
  downtown: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
  bayfront: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop"
};

const About = () => {
  const locations = [
    {
      id: 1,
      name: "O2 Hexagon Downtown",
      address: "123 Luxe Avenue, Downtown District",
      description: "Our flagship venue featuring state-of-the-art sound systems, VIP lounges, and an exclusive rooftop experience.",
      image: locationImages.downtown,
      features: ["VIP Lounges", "Rooftop Bar", "Premium Sound", "24/7 Service"]
    },
    {
      id: 2,
      name: "O2 Hexagon Bayfront",
      address: "456 Harbor View, Bayfront Promenade",
      description: "Experience waterfront luxury with panoramic views, private cabanas, and world-class mixology.",
      image: locationImages.bayfront,
      features: ["Waterfront Views", "Private Cabanas", "Mixology Bar", "Beach Access"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-purple-900/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gold-400 mb-4">
            Our Legacy
          </h2>
          <p className="text-xl text-gold-200 max-w-3xl mx-auto">
            For over a decade, O2 Hexagon has redefined premium nightlife across two spectacular locations, 
            each offering a unique atmosphere of sophistication and excitement.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold-900/20 to-gold-600/10 backdrop-blur-sm border border-gold-500/20"
            >
              {/* Location Image */}
              <motion.div 
                className="h-64 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                {/* Location name overlay */}
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl font-display font-bold text-gold-300 mb-2">
                    {location.name}
                  </h3>
                  <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
                </div>
              </motion.div>

              {/* Location Content */}
              <div className="p-6">
                <p className="text-gold-200 mb-4 leading-relaxed">
                  {location.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-gold-400 font-semibold mb-2 flex items-center">
                    <span className="mr-2">📍</span>
                    {location.address}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {location.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-300 text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgb(234, 179, 8)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gold-500/20 border border-gold-500 text-gold-400 py-3 px-8 rounded-lg font-semibold hover:bg-gold-500 hover:text-black transition-all duration-300"
                  >
                    Explore Venue
                  </motion.button>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold-400 opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold-400 opacity-50"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gold-500/20"
        >
          {[
            { number: "12+", label: "Years Excellence" },
            { number: "50K+", label: "Happy Guests" },
            { number: "2", label: "Premium Locations" },
            { number: "24/7", label: "Luxury Service" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.p
                whileHover={{ scale: 1.1 }}
                className="text-3xl md:text-4xl font-display font-bold text-gold-400 mb-2"
              >
                {stat.number}
              </motion.p>
              <p className="text-gold-200">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;