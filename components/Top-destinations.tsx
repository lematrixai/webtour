"use client"

import React from 'react'
import { motion } from 'framer-motion'

const destinations = [
  {
    name: 'zanzibar',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'nungwi',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'kilimanjaro',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'ngorongoro',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'serengeti',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'materuni',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'rock city',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'hot spring',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80 } },
}

const TopDestinations = () => {
  return (
    <section className="bg-[#01293C] py-12  max-md:px-7 px-18 max-w-[90rem] mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-montserrat text-[#E1C5A0]">
        Top Destinations
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {destinations.map((dest) => (
          <motion.div
            key={dest.name}
            variants={item}
            whileHover={{ scale: 1.04 }}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer min-h-[180px] h-48 md:h-56 bg-gray-200"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl md:text-2xl font-bold font-jost drop-shadow-lg tracking-wide text-center">
                {dest.name}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default TopDestinations