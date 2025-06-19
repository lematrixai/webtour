"use client"
import React from 'react'
import { FaRegHeart, FaStar, FaGlobe } from 'react-icons/fa'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import { Card, CardContent } from './ui/card'
import { motion } from 'framer-motion'

const tours = [
  {
    name: 'Kilimanjaro, Tanzania',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    name: 'Nungwi, Zanzibar',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    rating: 4.4,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    name: 'Serengeti, Tanzania',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
]

const TopTours = () => {
  return (
    <section className="bg-[#01405A] py-16 max-md:px-7 px-18 max-w-[90rem] mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-montserrat text-[#E1C5A0]">
        Top Tours
      </h2>
      <Carousel
        opts={{ align: 'start', loop: true }}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent className="-ml-6">
          {tours.map((tour, idx) => (
            <CarouselItem
              key={tour.name}
              className="pl-6 md:basis-1/2 lg:basis-1/3"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15, type: 'spring', stiffness: 60 }}
                viewport={{ once: true, amount: 0.2 }}
                className="h-full"
              >
                <Card className="bg-[#08405A] rounded-2xl shadow-lg border-0 h-full flex flex-col transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl">
                  <div className="relative mb-4">
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="rounded-xl w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <button className="absolute top-3 right-3 bg-white/80 rounded-full p-2 hover:bg-white transition">
                      <FaRegHeart className="text-[#01405A] text-xl" />
                    </button>
                  </div>
                  <CardContent className="flex flex-col flex-1 px-0 pb-0">
                    <div className="flex items-center gap-2 text-[#7FB2C2] text-base mb-1 px-4">
                      <FaGlobe />
                      <span className="font-montserrat">{tour.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#E1C5A0] text-lg font-semibold mb-1 px-4">
                      <FaStar />
                      <span>{tour.rating}</span>
                    </div>
                    <p className="text-[#7FB2C2] font-bold font-montserrat text-lg leading-snug px-4 mb-4">
                      {tour.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-8 top-1/2 -translate-y-1/2 bg-[#E1C5A0] text-[#01405A] hover:bg-[#d4b890]" />
        <CarouselNext className="-right-8 top-1/2 -translate-y-1/2 bg-[#E1C5A0] text-[#01405A] hover:bg-[#d4b890]" />
      </Carousel>
    </section>
  )
}

export default TopTours