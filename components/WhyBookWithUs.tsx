"use client"
import React from 'react'
import { motion } from 'framer-motion'

const WhyBookWithUs = () => (
  <section className="bg-[#E1C5A0] py-20 max-md:px-7 px-18 max-w-[90rem] mx-auto">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Image */}
      <motion.div 
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80"
          alt="Travel experience"
          className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#01293C]">
          Why Book With Us?
        </h2>
        
        <p className="text-lg text-gray-600 leading-relaxed font-jost">
          Experience unforgettable adventures with our expert guides, personalized itineraries, and exclusive access to Tanzania's most stunning destinations.
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#E1C5A0] rounded-full"></div>
            <span className="font-medium text-[#01293C]">Local expertise & insider knowledge</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#E1C5A0] rounded-full"></div>
            <span className="font-medium text-[#01293C]">Flexible booking & 24/7 support</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#E1C5A0] rounded-full"></div>
            <span className="font-medium text-[#01293C]">Authentic cultural experiences</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#01293C] text-white px-8 py-3 rounded-full font-semibold font-montserrat hover:bg-[#1a3a4a] transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Start Your Journey
        </motion.button>
      </motion.div>
    </div>
  </section>
)

export default WhyBookWithUs 