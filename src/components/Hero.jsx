import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Import your video
import HeaderVideo from '../assets/Header-Video.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section id="home" className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background - Always show gradient, video overlays when ready */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient background (always visible) */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/40 to-black"></div>
        
        {/* Video - hidden until loaded to prevent layout shift */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={handleVideoLoad}
            className="w-full h-full object-cover"
          >
            <source src={HeaderVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Additional gradient overlay (always on top) */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/60"></div>
      </div>
      
      {/* Animated background elements (always visible) */}
      <div className="absolute inset-0 opacity-10 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content - Always visible and centered */}
      <div className="container mx-auto px-6 text-center relative z-10 flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Main Title */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              O2 HEXAGON
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gold-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Where Night Becomes Legend. Experience premium nightlife in an atmosphere of pure elegance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(234, 179, 8, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gold-400 transition-all duration-300 w-full sm:w-auto"
            >
              Book Your Experience
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gold-500 text-gold-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gold-500 hover:text-black transition-all duration-300 w-full sm:w-auto"
            >
              View Events
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 pb-6 sm:pb-8">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gold-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
