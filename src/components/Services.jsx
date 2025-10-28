import React from 'react';
import { motion } from 'framer-motion';

// Import your images (you'll need to add these images to your project)
// For now, using placeholder images - replace with your actual images
const serviceImages = {
  sound: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=200&fit=crop",
  cocktails: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=200&fit=crop",
  vip: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=200&fit=crop",
  events: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=200&fit=crop",
  food: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=200&fit=crop",
  valet: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400&h=200&fit=crop"
};

const Services = () => {
  const services = [
    {
      id: 1,
      image: serviceImages.sound,
      title: "Premium Sound Experience",
      description: "Immerse yourself in crystal-clear audio with our state-of-the-art sound systems and world-class DJs.",
      features: ["Line Array Systems", "Acoustic Treatment", "Professional DJ Booths"]
    },
    {
      id: 2,
      image: serviceImages.cocktails,
      title: "Mixology Excellence",
      description: "Savor handcrafted cocktails created by award-winning mixologists using premium ingredients.",
      features: ["Signature Cocktails", "Premium Spirits", "Molecular Mixology"]
    },
    {
      id: 3,
      image: serviceImages.vip,
      title: "VIP Treatment",
      description: "Experience unparalleled luxury with our exclusive VIP services and private lounges.",
      features: ["Bottle Service", "Private Booths", "Dedicated Hosts"]
    },
    {
      id: 4,
      image: serviceImages.events,
      title: "Theme Nights & Events",
      description: "Regular themed parties and special events that transform your night into an unforgettable experience.",
      features: ["Weekly Themes", "Guest DJs", "Special Performances"]
    },
    {
      id: 5,
      image: serviceImages.food,
      title: "Gourmet Bites",
      description: "Complement your drinks with exquisite culinary creations from our talented chefs.",
      features: ["International Cuisine", "Late Night Menu", "Dietary Options"]
    },
    {
      id: 6,
      image: serviceImages.valet,
      title: "Valet & Concierge",
      description: "Complete luxury experience with premium valet service and personalized concierge assistance.",
      features: ["Premium Valet", "Taxi Service", "Personal Assistance"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-purple-900/10 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gold-400 mb-4">
            Premium Services
          </h2>
          <p className="text-xl text-gold-200 max-w-3xl mx-auto">
            Discover our curated selection of luxury services designed to elevate your nightlife experience to new heights.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(234, 179, 8, 0.05)",
                borderColor: "rgb(234, 179, 8)"
              }}
              className="group rounded-2xl border border-gold-500/20 bg-gold-500/5 backdrop-blur-sm hover:shadow-2xl hover:shadow-gold-500/20 transition-all duration-500 overflow-hidden"
            >
              {/* Image - Filling the top of the card */}
              <motion.div 
                className="w-full h-48 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>
                {/* Gold accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
              </motion.div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-display font-bold text-gold-300 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gold-200 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gold-400/80 text-sm">
                      <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-gold-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gold-500/20"
        >
          <h3 className="text-2xl font-display font-bold text-gold-300 mb-4">
            Ready to Experience Luxury?
          </h3>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(234, 179, 8, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-400 transition-all duration-300"
          >
            Reserve Your VIP Experience
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;