"use client";
import React, { useState, useEffect } from "react";
import { FaRegHeart, FaStar, FaGlobe, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const tours = [
  {
    name: "Kilimanjaro, Tanzania",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    name: "Nungwi, Zanzibar",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    rating: 4.4,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    name: "Serengeti, Tanzania",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    name: "Stone Town, Zanzibar",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    desc: "Explore the rich history and vibrant culture of Stone Town, a UNESCO World Heritage site.",
  },
  {
    name: "Ngorongoro Crater, Tanzania",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    desc: "Witness breathtaking wildlife and landscapes in the world-famous Ngorongoro Crater.",
  },
  {
    name: "Mafia Island, Tanzania",
    image:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    desc: "Discover pristine beaches and marine life on the tranquil Mafia Island.",
  },
];

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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

// Inline Skeleton component (in case the reusable one is not available)
const Skeleton = ({ width = "100%", height = 20, rounded = "rounded-xl", className = "" }) => (
  <div
    className={`bg-gray-300 dark:bg-gray-700 animate-pulse ${rounded} ${className}`}
    style={{ width, height }}
  />
);

const TopTours = () => {
  const [emblaApi, setEmblaApi] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1800); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 3500);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  // Number of skeleton cards to show while loading
  const skeletonCount = 3;

  return (
    <section className="relative py-36 px-4 md:px-10 max-w-full w-full mx-auto overflow-x-hidden">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#01293C]/90 via-[#01405A]/85 to-[#07384A]/80" />
      
      {/* Creative Tourism Patterns */}
      <div className="absolute inset-0">
        {/* Top Section - Compass and Navigation */}
        <div className="absolute top-8 right-8 w-20 h-20 opacity-20">
          <div className="w-full h-full border-2 border-[#E1C5A0] rounded-full animate-spin" style={{ animationDuration: '25s' }} />
          <div className="absolute inset-2 border border-[#E1C5A0] rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        </div>
        
        {/* Top Left - World Map */}
        <div className="absolute top-16 left-8 w-24 h-24 opacity-15">
          <div className="w-full h-full border border-[#E1C5A0] rounded-full animate-pulse" />
          <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-[#E1C5A0] rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-[#E1C5A0] rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Center Left - Travel Route */}
        <div className="absolute top-1/3 left-12 w-32 h-16 opacity-20">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#E1C5A0] to-transparent animate-pulse" />
          <div className="absolute top-2 left-1/4 w-0.5 h-12 bg-gradient-to-b from-[#E1C5A0] to-transparent animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="absolute top-4 right-1/4 w-0.5 h-8 bg-gradient-to-b from-[#E1C5A0] to-transparent animate-pulse" style={{ animationDelay: '0.6s' }} />
        </div>
        
        {/* Center Right - Adventure Path */}
        <div className="absolute top-1/2 right-16 w-28 h-28 opacity-15">
          <div className="w-full h-full border border-[#E1C5A0] rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#E1C5A0] rounded-full animate-ping" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-[#E1C5A0] rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        </div>
        
      
        
     
        
        {/* Center Top - Geometric Element */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-16 h-16 opacity-10">
          <div className="w-full h-full border border-[#E1C5A0] rotate-45 animate-pulse" />
          <div className="absolute inset-2 border border-[#E1C5A0] -rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        
        {/* Center Bottom - Travel Icon */}
        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-12 h-12 opacity-20">
          <div className="w-full h-full border-2 border-[#E1C5A0] rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-1 border border-[#E1C5A0] rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[90rem] mx-auto">     
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-dancing_script text-[#E1C5A0]"
        >
          Top Tours
        </motion.h2>

        <motion.div 
          className="w-full"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Carousel className="w-full mx-" setApi={setEmblaApi} opts={{ loop: true, slidesToScroll: 1 }}>
            <CarouselContent className="w-full">
              {loading
                ? Array.from({ length: skeletonCount }).map((_, idx) => (
                    <CarouselItem key={"skeleton-" + idx} className="basis-full sm:basis-1/2 lg:basis-1/3 w-full">
                      <div className="p-1 w-full">
                        <Card className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-[#E1C5A0]/20 h-[35rem] flex flex-col group w-full relative overflow-hidden">
                          <div className="relative mb-4 w-full overflow-hidden rounded-xl">
                            <Skeleton height={232} className="w-full h-58" />
                          </div>
                          <CardContent className="flex flex-col flex-1 px-0 pb-0 w-full">
                            <Skeleton height={28} width="60%" className="mb-3 mx-4" />
                            <Skeleton height={24} width="40%" className="mb-3 mx-4" />
                            <Skeleton height={20} width="80%" className="mb-4 mx-4" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))
                : tours.map((tour, idx) => (
                    <CarouselItem key={tour.name + idx} className="basis-full sm:basis-1/2 lg:basis-1/3 w-full">
                      <motion.div 
                        className="p-1 w-full"
                        variants={item}
                        whileHover={{ 
                          scale: 1.02,
                          transition: { duration: 0.4, ease: "easeOut" }
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-[#E1C5A0]/20 h-[35rem] flex flex-col 
                          transition-all duration-300 hover:shadow-2xl group w-full relative overflow-hidden">
                          <motion.div 
                            className="relative mb-4 w-full overflow-hidden rounded-xl"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4 }}
                          >
                            <div className="relative w-full h-full overflow-hidden">
                              <img
                                src={tour.image}
                                alt={tour.name}
                                className="rounded-xl w-full h-58 object-cover transition-all duration-500 
                                group-hover:scale-110 group-hover:filter group-hover:brightness-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 
                                opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            </div>
                            <motion.button 
                              className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2.5 
                              transition-all duration-300 hover:shadow-lg"
                              whileHover={{ 
                                scale: 1.1,
                                rotate: 180,
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FaRegHeart className="text-[#01405A] text-xl transition-transform duration-300" />
                            </motion.button>
                          </motion.div>
                          <CardContent className="flex flex-col flex-1 px-0 pb-0 w-full">
                            <motion.div 
                              className="flex items-center gap-2 text-[#E1C5A0] text-base mb-1 px-4 
                              transition-all duration-300 group-hover:translate-x-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <FaGlobe className="transition-transform duration-500 group-hover:rotate-[360deg]" />
                              <span className="font-montserrat">{tour.name}</span>
                            </motion.div>
                            <motion.div 
                              className="flex items-center gap-2 text-[#E1C5A0] text-lg font-semibold mb-1 px-4
                              transition-all duration-300 group-hover:translate-x-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <FaStar className="transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110" />
                              <span>{tour.rating}</span>
                            </motion.div>
                            <motion.p 
                              className="text-white font-bold font-montserrat text-lg leading-snug px-4 mb-4
                              transition-all duration-300 group-hover:translate-x-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              {tour.desc}
                            </motion.p>
                          </CardContent>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TopTours;
