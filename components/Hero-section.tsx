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
        {/* Animated scroll-down button */}
        <motion.button
          aria-label="Scroll down to explore"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute left-1/2 bottom-10 z-20 -translate-x-1/2 bg-[#E1C5A0] text-[#003A56] rounded-full p-3 shadow-lg hover:bg-[#ffe6b0] focus:outline-none focus:ring-4 focus:ring-[#E1C5A0]/40 animate-bounce"
          onClick={() => {
            const el = document.getElementById('below-hero');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}

export default HeroSection;