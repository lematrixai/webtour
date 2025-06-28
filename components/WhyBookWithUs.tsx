"use client"
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

// Inline Skeleton component (in case the reusable one is not available)
const Skeleton = ({ width = "100%", height = 20, rounded = "rounded-2xl", className = "" }) => (
  <div
    className={`bg-gray-300 dark:bg-gray-700 animate-pulse ${rounded} ${className}`}
    style={{ width, height }}
  />
);

const WhyBookWithUs = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
  <section id="about" className="bg-[#E1C5A0] py-20 px-4 md:px-10 max-w-full w-full mx-auto overflow-x-hidden">
    <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-7xl mx-auto">
      {/* Image */}
      <motion.div 
        className="flex-1 w-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
          {loading ? (
            <Skeleton height={400} className="w-full h-[250px] md:h-[400px]" />
          ) : (
        <img 
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80"
          alt="Travel experience"
          className="rounded-2xl shadow-xl w-full h-[250px] md:h-[400px] object-cover"
        />
          )}
      </motion.div>

      {/* Content */}
      <motion.div 
        className="flex-1 w-full space-y-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
          {loading ? (
            <>
              <Skeleton height={40} width="60%" className="mb-4" />
              <Skeleton height={28} width="90%" className="mb-3" />
              <div className="space-y-3">
                <Skeleton height={24} width="80%" className="mb-2" />
                <Skeleton height={24} width="70%" className="mb-2" />
                <Skeleton height={24} width="60%" className="mb-2" />
              </div>
              <Skeleton height={48} width="40%" className="mt-6" />
            </>
          ) : (
            <>
        <h2 className="text-3xl md:text-4xl font-bold font-jost text-[#01293C]">
          Why Book With Us?
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed font-jost">
          Experience unforgettable adventures with our expert guides, personalized itineraries, and exclusive access to Tanzania's most stunning destinations.
        </p>
        <div className="space-y-3">
          <div className="flex items-center ">
            <div className="w-2 h-2 bg-[#E1C5A0] rounded-full"></div>
            <span className="font-medium text-[#01293C] text-xl">Local expertise & insider knowledge</span>
          </div>
          <div className="flex items-center ">
            <div className="w-2 h-2 bg-[#E1C5A0] rounded-full"></div>
            <span className="font-medium text-[#01293C] text-xl">Flexible booking & 24/7 support</span>
          </div>
          <div className="flex items-center ">
            <div className="w-2 h-2 bg-[#E1C5A0] rounded-full"></div>
            <span className="font-medium text-[#01293C] text-xl">Authentic cultural experiences</span>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#01293C] text-white text-xl px-8 py-3 rounded-full font-semibold font-jost  hover:bg-[#1a3a4a] transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          <Link href="/book-now">
          Start Your Journey
          </Link>
        </motion.button>
            </>
          )}
      </motion.div>
    </div>
  </section>
)
}

export default WhyBookWithUs 