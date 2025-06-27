'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const HeroSection = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.addEventListener('loadeddata', () => {
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <div>
      <div className="" />
      <div className="relative h-screen overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 bg-background animate-pulse" />
        )}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="https://res.cloudinary.com/dj7odelpw/video/upload/v1/hero-bg_akcj3t"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient overlay from top to bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-black/70  to-transparent" 
        />
        
        {/* Header with logo and menu */}
        <Header />

        {/* Centered content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center"
          >
            <h1 className="text-6xl font-jost md:text-8xl font-bold text-[#E1C5A0] mb-4 drop-shadow-2xl">
              Welcome Aboard
            </h1>
          </motion.div>
        </div>

        {/* Modern minimalist scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute left-1/2 bottom-12 z-20 -translate-x-1/2"
        >
          <motion.button
            aria-label="Scroll down to explore"
            onClick={() => {
              const el = document.getElementById('below-hero');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative flex flex-col items-center gap-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated dots */}
            <div className="flex flex-col items-center gap-2">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-[#E1C5A0] transition-colors duration-300"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            
            {/* Animated line */}
            <motion.div
              className="w-px h-12 bg-gradient-to-b from-white/40 to-white/80 group-hover:from-[#E1C5A0]/40 group-hover:to-[#E1C5A0]/80 transition-all duration-300"
              animate={{
                height: [48, 56, 48],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Scroll text */}
            <motion.div
              className="text-center"
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-xs font-light tracking-[0.3em] text-white/70 group-hover:text-[#E1C5A0] transition-colors duration-300 uppercase">
                Explore
              </span>
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;