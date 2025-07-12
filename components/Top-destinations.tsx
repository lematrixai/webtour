"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Using the same destinations data from the destinations page
const destinations = [
  {
    id: 1,
    name: 'Santorini Adventure',
    location: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    name: 'China Discovery',
    location: 'China',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    name: 'Costa Rica Nature',
    location: 'Costa Rica',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    name: 'Cuba Cultural Journey',
    location: 'Cuba',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    name: 'Mallorca Island Escape',
    location: 'Spain',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    name: 'Thailand Adventure',
    location: 'Thailand',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  },
  {
    id: 7,
    name: 'Mykonos Paradise',
    location: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
  },
  {
    id: 8,
    name: 'California Dreaming',
    location: 'USA',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop',
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
    <section className="bg-gradient-to-br from-[#01293C] via-[#01405A] to-[#01293C] py-24 relative overflow-hidden">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80")'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#01293C]/90 via-[#01405A]/85 to-[#01293C]/90" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23E1C5A0%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <Link key={dest.id} href={`/destinations/${dest.id}`}>
            <motion.div
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
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-white text-xl md:text-2xl font-bold font-jost drop-shadow-lg tracking-wide text-center mb-1">
                  {dest.name}
                </span>
                  <span className="text-[#E1C5A0] text-sm font-medium drop-shadow-lg">
                    {dest.location}
                  </span>
              </div>
            </motion.div>
            </Link>
          ))}
        </motion.div>
        
        <div className="text-center mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#E1C5A0] text-[#01293C] px-8 py-3 rounded-full font-semibold font-montserrat hover:bg-[#D4B890] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <Link href="/destinations">
            View More
            </Link>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default TopDestinations