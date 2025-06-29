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
    <div className="min-h-screen pb-8 bg-gradient-to-br from-[#18130C] via-[#18130C] to-[#18130C]/90">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-[#E1C5A0]/10 via-[#E1C5A0]/5 to-[#E1C5A0]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#18130C]/80" />
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dj7odelpw&public_id=vj5g6cd98hcuw7vz3osa&profile=cld-default&autoplay=1&muted=1&loop=1&controls=0"
            width="640"
            height="360"
            style={{
              height: 'auto',
              width: '100%',
              aspectRatio: '640 / 360',
              opacity: 0.3,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Discover Your
              <span className="block text-[#E1C5A0]">Perfect Destination</span>
            </h1>
            <p className="text-xl text-[#E1C5A0]/80 max-w-2xl mx-auto">
              Explore breathtaking destinations and create unforgettable memories with our curated collection of destinations
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 dark:bg-[#18130C]/90 backdrop-blur-xl border border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 rounded-2xl shadow-2xl p-6 mb-12"
        >
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E1C5A0]/60 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search destinations, tours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 bg-white/10 dark:bg-[#18130C]/50 border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 focus:border-[#E1C5A0] text-white placeholder:text-[#E1C5A0]/60"
              />
            </div>
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="h-12 px-6 border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 hover:border-[#E1C5A0] bg-white/10 dark:bg-[#18130C]/50 text-[#E1C5A0] hover:bg-[#E1C5A0]/10"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`h-10 px-4 border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 hover:border-[#E1C5A0] ${
                  selectedCategory === category.id 
                    ? 'bg-[#E1C5A0] text-[#18130C] hover:bg-[#E1C5A0]/90' 
                    : 'bg-white/10 dark:bg-[#18130C]/50 text-[#E1C5A0] hover:bg-[#E1C5A0]/10'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </Button>
            ))}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 pt-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#E1C5A0] mb-2">
                    Price Range
                  </label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="bg-white/10 dark:bg-[#18130C]/50 border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 text-white placeholder:text-[#E1C5A0]/60"
                    />
                    <span className="text-[#E1C5A0]/60">-</span>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 5000])}
                      className="bg-white/10 dark:bg-[#18130C]/50 border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 text-white placeholder:text-[#E1C5A0]/60"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#E1C5A0] mb-2">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full h-10 px-3 bg-white/10 dark:bg-[#18130C]/50 border border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 rounded-md focus:border-[#E1C5A0] focus:outline-none text-[#E1C5A0]"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id} className="bg-[#18130C] text-[#E1C5A0]">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <Button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSortBy('date');
                      setPriceRange([0, 5000]);
                    }}
                    variant="outline"
                    className="w-full h-10 border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 hover:border-[#E1C5A0] bg-white/10 dark:bg-[#18130C]/50 text-[#E1C5A0] hover:bg-[#E1C5A0]/10"
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-[#E1C5A0]/80">
            Showing {filteredDestinations.length} of {destinations.length} destinations
          </p>
          <div className="flex items-center gap-2 text-sm text-[#E1C5A0]/80">
            <span>View:</span>
            <Button variant="ghost" size="sm" className="h-8 px-3 text-[#E1C5A0] hover:bg-[#E1C5A0]/10">
              Grid
            </Button>
            <Button variant="outline" size="sm" className="h-8 px-3 border-[#E1C5A0]/20 text-[#E1C5A0] hover:bg-[#E1C5A0]/10">
              List
            </Button>
          </div>
        </div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredDestinations.map((destination) => (
            <motion.div key={destination.id} variants={itemVariants}>
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 py-0 pb-6 border-[#E1C5A0]/20  dark:border-[#E1C5A0]/30 bg-white/10 dark:bg-[#18130C]/50 backdrop-blur-sm overflow-hidden">
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
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-white group-hover:text-[#E1C5A0] transition-colors">
                          {destination.title}
                      </CardTitle>
                      <div className="flex items-center gap-1 text-[#E1C5A0]/80 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{destination.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm text-[#E1C5A0]/70  line-clamp-2">
                    {destination.description}
                  </p>
                  
                  {/* Destination Details */}
                  <div className="flex items-center justify-between text-sm text-[#E1C5A0]/60 mb-4">
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
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {destination.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#E1C5A0]/20 text-[#E1C5A0] text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Link href={`/destinations/${destination.id}`}>
                    <Button className="w-full group-hover:bg-[#E1C5A0] group-hover:text-[#18130C] transition-all duration-300 bg-[#E1C5A0]/20 text-[#E1C5A0] border-[#E1C5A0]/30 hover:border-[#E1C5A0]">
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
        {filteredDestinations.length > 0 && (
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
        {filteredDestinations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              No destinations found
            </h3>
            <p className="text-[#E1C5A0]/80 mb-6">
              Try adjusting your search criteria or filters
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSortBy('date');
                setPriceRange([0, 5000]);
              }}
              variant="outline"
              className="border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 hover:border-[#E1C5A0] bg-white/10 dark:bg-[#18130C]/50 text-[#E1C5A0] hover:bg-[#E1C5A0]/10"
            >
              Clear All Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Destinations;