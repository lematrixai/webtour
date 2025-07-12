'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Clock, 
  Users,
  ArrowRight,
  Heart
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { CldVideoPlayer } from 'next-cloudinary';

// Mock destination data
const destinationsData = [
  {
    id: 1,
    title: "Santorini Adventure",
    location: "Greece",
    price: 910,
    originalPrice: 1200,
    rating: 4.8,
    duration: "7 days",
    groupSize: "12 people",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    category: "vacation",
    description: "Experience the stunning beauty of Santorini with its iconic white buildings and breathtaking sunsets.",
    isSpecialOffer: true,
    tags: ["Romantic", "Beach", "Cultural"]
  },
  {
    id: 2,
    title: "China Discovery",
    location: "China",
    price: 2830,
    originalPrice: 3200,
    rating: 4.9,
    duration: "14 days",
    groupSize: "15 people",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop",
    category: "adventure",
    description: "Explore the ancient wonders of China from the Great Wall to the Forbidden City.",
    isSpecialOffer: false,
    tags: ["Cultural", "Historical", "Adventure"]
  },
  {
    id: 3,
    title: "Costa Rica Nature",
    location: "Costa Rica",
    price: 1200,
    originalPrice: 1500,
    rating: 4.7,
    duration: "10 days",
    groupSize: "10 people",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    category: "adventure",
    description: "Immerse yourself in the rich biodiversity and stunning landscapes of Costa Rica.",
    isSpecialOffer: true,
    tags: ["Nature", "Wildlife", "Adventure"]
  },
  {
    id: 4,
    title: "Cuba Cultural Journey",
    location: "Cuba",
    price: 2830,
    originalPrice: 3100,
    rating: 4.6,
    duration: "12 days",
    groupSize: "14 people",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
    category: "cultural",
    description: "Discover the vibrant culture, music, and history of this Caribbean gem.",
    isSpecialOffer: false,
    tags: ["Cultural", "Music", "Historical"]
  },
  {
    id: 5,
    title: "Mallorca Island Escape",
    location: "Spain",
    price: 2830,
    originalPrice: 3000,
    rating: 4.8,
    duration: "8 days",
    groupSize: "12 people",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    category: "vacation",
    description: "Relax on pristine beaches and explore charming villages in the Mediterranean.",
    isSpecialOffer: false,
    tags: ["Beach", "Relaxation", "Island"]
  },
  {
    id: 6,
    title: "Thailand Adventure",
    location: "Thailand",
    price: 2730,
    originalPrice: 2830,
    rating: 4.9,
    duration: "11 days",
    groupSize: "16 people",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "adventure",
    description: "From bustling Bangkok to serene beaches, experience the best of Thailand.",
    isSpecialOffer: true,
    tags: ["Adventure", "Beach", "Cultural"]
  },
  {
    id: 7,
    title: "Mykonos Paradise",
    location: "Greece",
    price: 2830,
    originalPrice: 3200,
    rating: 4.7,
    duration: "9 days",
    groupSize: "10 people",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    category: "vacation",
    description: "Experience the vibrant nightlife and stunning beaches of Mykonos.",
    isSpecialOffer: false,
    tags: ["Nightlife", "Beach", "Luxury"]
  },
  {
    id: 8,
    title: "California Dreaming",
    location: "USA",
    price: 1200,
    originalPrice: 1500,
    rating: 4.5,
    duration: "6 days",
    groupSize: "12 people",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
    category: "adventure",
    description: "From San Francisco to Los Angeles, explore the Golden State's diverse landscapes.",
    isSpecialOffer: true,
    tags: ["Urban", "Adventure", "Coastal"]
  }
];

const categories = [
  { id: 'all', label: 'All Destinations', icon: '🌍' },
  { id: 'vacation', label: 'Vacation', icon: '🏖️' },
  { id: 'adventure', label: 'Adventure', icon: '🏔️' },
  { id: 'cultural', label: 'Cultural', icon: '🏛️' },
  { id: 'romantic', label: 'Romantic', icon: '💕' },
  { id: 'budget', label: 'On Budget', icon: '💰' }
];

const sortOptions = [
  { id: 'date', label: 'Date' },
  { id: 'price-low', label: 'Price low to high' },
  { id: 'price-high', label: 'Price high to low' },
  { id: 'name', label: 'Name (A-Z)' },
  { id: 'rating', label: 'Rating' }
];

const Destinations = () => {
    const [destinations, setDestinations] = useState(destinationsData);
  const [filteredDestinations, setFilteredDestinations] = useState(destinationsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort destinations
  useEffect(() => {
    let filtered = destinations.filter(destination => {
      const matchesSearch = destination.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           destination.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
      const matchesPrice = destination.price >= priceRange[0] && destination.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort destinations
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.title.localeCompare(b.title);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    setFilteredDestinations(filtered);
  }, [destinations, searchTerm, selectedCategory, sortBy, priceRange]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen pb-8 ">
      {/* Hero Section */}
      <div className="relative h-[38vh] sm:h-[60vh] md:h-[70vh] bg-white overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dj7odelpw&public_id=vj5g6cd98hcuw7vz3osa&profile=cld-default&autoplay=1&muted=1&loop=1&controls=0"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '100vh',
              minWidth: '100%',
              minHeight: '100%',
              transform: 'translate(-50%, -50%) scale(1.2)',
              objectFit: 'cover',
              zIndex: 0,
              objectPosition: 'center'

            }}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#18130C]/20 via-transparent to-[#18130C]/90 z-10" />
        
        {/* Text Content */}
        <div className="relative z-20 flex items-center justify-center h-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
              Discover Your
                <span className="block text-dancing_script text-[#f8e0c1]">Perfect Destination</span>
            </h1>
          
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 relative z-20">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl text-dancing_script invert-25 md:text-3xl font-bold text-[#18130C]/90 dark:text-white mb-4">
            Our Enchanting Destinations
          </h2>
          <p className="text-lg text-[#18130C]/70 dark:text-[#E1C5A0]/80 mb-4 max-w-2xl mx-auto">
              Explore breathtaking destinations and create unforgettable memories with our curated collection of destinations
            </p>         
          <div className="w-24 h-1 bg-[#E1C5A0] mx-auto"></div>
        </div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
        >
          {destinations.map((destination) => (
            <motion.div key={destination.id} variants={itemVariants}>
              <Card className="group hover:shadow-xl transition-all duration-100 hover:-translate-y-1 py-0 pb-6 border-2 border-[#E1C5A0]80 hover:border-[#E1C5A0]  dark:border-[#E1C5A0]/50 bg-[#F5F1E8] dark:bg-[#2A2419] backdrop-blur-sm overflow-hidden">
                <div className="relative">
                  <Link href={`/destinations/${destination.id}`}>
                    <div className="aspect-[4/3] overflow-hidden cursor-pointer">
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  </Link>
                  
                  {/* Special Offer Badge */}
                  {destination.isSpecialOffer && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Special Offer
                    </div>
                  )}
                  
                  {/* Favorite Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                  >
                    <Heart className="w-4 h-4 hover:fill-red-500 transition-all duration-300" />
                  </Button>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-[#18130C] dark:text-white group-hover:text-[#E1C5A0] transition-colors">
                          {destination.title}
                      </CardTitle>
                      <div className="flex items-center gap-1 text-[#18130C]/70 dark:text-[#E1C5A0]/80 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm ">{destination.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="-mt-4">
                  <p className="text-sm  text-[#18130C]/80 dark:text-[#E1C5A0]/70  line-clamp-2">
                    {destination.description}
                  </p>
                  
                  {/* Destination Details
                  <div className="flex items-center justify-between text-sm text-[#18130C]/60 dark:text-[#E1C5A0]/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{destination.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{destination.rating}</span>
                    </div>
                  </div> */}

                  {/* Tags */}
                  {/* <div className="flex flex-wrap gap-1 mb-4">
                    {destination.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#E1C5A0]/30 text-[#18130C] dark:text-[#E1C5A0] text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}

                  {/* Action Button */}
                  <Link  href={`/destinations/${destination.id}`}>
                    <Button className="w-full mt-3 group-hover: bg-[#dabd96]  group-hover:text-[#f5f4f4] transition-all duration-300 text-white border-[#E1C5A0]/30 hover:border-[#E1C5A0]">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {destinations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" className="px-8 py-3 border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 hover:border-[#E1C5A0] bg-white/10 dark:bg-[#18130C]/50 text-[#E1C5A0] hover:bg-[#E1C5A0]/10">
              Load More Destinations
            </Button>
          </motion.div>
        )}

        {/* No Results */}
      
      </div>
    </div>
  );
};

export default Destinations;