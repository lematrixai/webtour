'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { 
  MapPin, 
  Calendar, 
  Star, 
  Clock, 
  Users,
  ArrowLeft,
  Heart,
  Share2,
  CheckCircle,
  Phone,
  Mail,
  Globe,
  Shield,
  Award
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock destination data
const destinationData = {
  id: 1,
  title: "Zanzibar Island Adventure",
  location: "Zanzibar",
  country: "Tanzania",
  rating: 4.9,
  reviewCount: 156,
  duration: "8 days",
  groupSize: "10 people",
  price: "$2,499",
  imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  description: "Discover the enchanting island of Zanzibar, where pristine white-sand beaches meet rich cultural heritage. This 8-day adventure takes you through the historic Stone Town, spice plantations, and the most beautiful beaches in East Africa.",
  longDescription: `Zanzibar, the "Spice Island" of Tanzania, is a paradise where turquoise waters meet centuries-old history. This meticulously crafted 8-day adventure combines luxury beach experiences with authentic cultural immersion in perfect harmony.

Your journey begins in the historic Stone Town, a UNESCO World Heritage site where narrow alleys reveal the island's rich trading history. Each day brings new discoveries - from pristine beaches with crystal-clear waters to aromatic spice plantations, from traditional dhow sailing to vibrant local markets.

Our expert local guides will share the island's fascinating history, from its role in the spice trade to its unique blend of African, Arab, and European influences. You'll experience authentic Swahili hospitality, savor local cuisine, and create memories that will last a lifetime.`,
  tags: ["Beach", "Cultural", "Luxury", "Spice Island"],
  highlights: [
    "Explore the historic Stone Town UNESCO site",
    "Relax on pristine white-sand beaches",
    "Visit aromatic spice plantations",
    "Experience traditional dhow sailing",
    "Discover local markets and cuisine",
    "Swim in crystal-clear turquoise waters"
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival & Stone Town",
      description: "Arrive in Zanzibar and transfer to your luxury hotel. Welcome dinner in historic Stone Town.",
      activities: ["Airport transfer", "Hotel check-in", "Stone Town welcome dinner"]
    },
    {
      day: 2,
      title: "Stone Town Heritage Tour",
      description: "Explore the UNESCO World Heritage site with its historic architecture and rich culture.",
      activities: ["Stone Town walking tour", "House of Wonders", "Local lunch"]
    },
    {
      day: 3,
      title: "Spice Plantation Tour",
      description: "Visit aromatic spice plantations and learn about Zanzibar's spice trade history.",
      activities: ["Spice plantation tour", "Spice tasting", "Traditional dinner"]
    },
    {
      day: 4,
      title: "Beach Paradise",
      description: "Relax on pristine beaches and enjoy water activities in crystal-clear waters.",
      activities: ["Beach relaxation", "Swimming", "Water sports"]
    },
    {
      day: 5,
      title: "Dhow Sailing Experience",
      description: "Experience traditional dhow sailing and snorkeling in the Indian Ocean.",
      activities: ["Dhow sailing", "Snorkeling", "Beach picnic"]
    }
  ],
  included: [
    "Luxury hotel accommodation",
    "All transportation",
    "Professional local guide",
    "Most meals (breakfast, lunch, dinner)",
    "Entrance fees to attractions",
    "Airport transfers",
    "Travel insurance"
  ],
  notIncluded: [
    "International flights",
    "Personal expenses",
    "Optional activities",
    "Tips for guides",
    "Alcoholic beverages"
  ],
  reviews: [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2025-01-15",
      comment: "Absolutely incredible experience! The views were breathtaking and our guide was amazing. Highly recommend!"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      date: "2025-01-10",
      comment: "Perfect blend of relaxation and adventure. The wine tasting was a highlight!"
    },
    {
      id: 3,
      name: "Emma Davis",
      rating: 4,
      date: "2025-01-05",
      comment: "Beautiful tour with great accommodations. Only wish it was longer!"
    }
  ],
  availability: [
    { date: "2025-03-15", available: true },
    { date: "2025-03-22", available: true },
    { date: "2025-03-29", available: false },
    { date: "2025-04-05", available: true },
    { date: "2025-04-12", available: true }
  ]
};

const TourDetail = () => {
  const params = useParams();
  const id = params?.id;
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [email, setEmail] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/20 backdrop-blur-md border-b border-slate-200/50 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/destinations" className="flex items-center gap-2 text-slate-700 dark:text-white hover:text-[#E1C5A0] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Destinations</span>
            </Link>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isFavorite 
                    ? 'bg-red-500 text-white' 
                    : 'bg-slate-200/50 dark:bg-white/10 text-slate-700 dark:text-white hover:bg-slate-300/50 dark:hover:bg-white/20'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 rounded-full bg-slate-200/50 dark:bg-white/10 text-slate-700 dark:text-white hover:bg-slate-300/50 dark:hover:bg-white/20 transition-all duration-300">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={destinationData.imageUrl}
            alt={destinationData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl mb-6 font-serif">
                {destinationData.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
                Where adventure meets sophistication
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">{destinationData.location}, {destinationData.country}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{destinationData.rating} ({destinationData.reviewCount} reviews)</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#E1C5A0] mb-8">
                {destinationData.price}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Tour Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {destinationData.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-4 py-2 bg-[#E1C5A0]/20 text-[#E1C5A0] text-sm rounded-full border border-[#E1C5A0]/30 backdrop-blur-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-3 text-slate-700 dark:text-[#E1C5A0]/90 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-slate-200/50 dark:border-white/10">
                    <Clock className="w-6 h-6 text-[#E1C5A0]" />
                    <div>
                      <p className="text-sm text-slate-600 dark:text-[#E1C5A0]/60">Duration</p>
                      <p className="font-medium text-slate-800 dark:text-white">{destinationData.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-[#E1C5A0]/90 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-slate-200/50 dark:border-white/10">
                    <Users className="w-6 h-6 text-[#E1C5A0]" />
                    <div>
                      <p className="text-sm text-slate-600 dark:text-[#E1C5A0]/60">Group Size</p>
                      <p className="font-medium text-slate-800 dark:text-white">{destinationData.groupSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-[#E1C5A0]/90 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-slate-200/50 dark:border-white/10">
                    <Calendar className="w-6 h-6 text-[#E1C5A0]" />
                    <div>
                      <p className="text-sm text-slate-600 dark:text-[#E1C5A0]/60">Dates</p>
                      <p className="font-medium text-slate-800 dark:text-white">Flexible</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-[#E1C5A0]/90 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-slate-200/50 dark:border-white/10">
                    <Award className="w-6 h-6 text-[#E1C5A0]" />
                    <div>
                      <p className="text-sm text-slate-600 dark:text-[#E1C5A0]/60">Rating</p>
                      <p className="font-medium text-slate-800 dark:text-white">Best seller</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-[#E1C5A0] font-serif text-2xl">About This Tour</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 dark:text-white/80 leading-relaxed text-lg font-light">
                      {destinationData.longDescription}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-[#E1C5A0] font-serif text-2xl">Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {destinationData.highlights.map((highlight, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        >
                          <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-white/80 font-medium">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-[#E1C5A0] font-serif text-2xl">Itinerary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {destinationData.itinerary.map((day, index) => (
                        <motion.div 
                          key={day.day} 
                          className="flex gap-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#E1C5A0] to-[#D4B890] rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-slate-900 font-bold text-lg">{day.day}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-800 dark:text-white text-xl mb-3 font-serif">{day.title}</h4>
                            <p className="text-slate-600 dark:text-white/70 mb-4 text-lg leading-relaxed">{day.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {day.activities.map((activity, activityIndex) => (
                                <span
                                  key={activityIndex}
                                  className="px-3 py-1 bg-[#E1C5A0]/20 text-[#E1C5A0] text-sm rounded-full border border-[#E1C5A0]/30"
                                >
                                  {activity}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* What's Included */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-green-400 font-serif text-xl">What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {destinationData.included.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-white/80 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-red-400 font-serif text-xl">Not Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {destinationData.notIncluded.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-red-400/50 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          </div>
                          <span className="text-slate-700 dark:text-white/80 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Reviews */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-[#E1C5A0] font-serif text-2xl">Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {destinationData.reviews.map((review, index) => (
                        <motion.div 
                          key={review.id} 
                          className="border-b border-slate-200/50 dark:border-white/10 pb-6 last:border-b-0"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold text-slate-800 dark:text-white text-lg">{review.name}</h4>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-5 h-5 ${
                                    i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400 dark:text-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-slate-600 dark:text-white/70 text-lg leading-relaxed mb-3">{review.comment}</p>
                          <span className="text-sm text-slate-500 dark:text-white/50">{review.date}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="border-slate-200/50 dark:border-white/20 bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-[#E1C5A0] font-serif text-2xl">Book This Tour</CardTitle>
                      <div className="text-3xl font-bold text-slate-800 dark:text-white">{destinationData.price}</div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Date Selection */}
                      <div>
                        <label className="block text-sm font-medium text-[#E1C5A0] mb-3">
                          Select Date
                        </label>
                        <select
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full h-12 px-4 bg-white/50 dark:bg-slate-700/50 border border-slate-200/50 dark:border-slate-600/50 rounded-lg focus:border-[#E1C5A0] focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/60 backdrop-blur-sm"
                        >
                          <option value="">Choose a date</option>
                          {destinationData.availability.map((date) => (
                            <option 
                              key={date.date} 
                              value={date.date}
                              disabled={!date.available}
                              className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white"
                            >
                              {new Date(date.date).toLocaleDateString('en-GB')} 
                              {!date.available && ' (Full)'}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Guest Selection */}
                      <div>
                        <label className="block text-sm font-medium text-[#E1C5A0] mb-3">
                          Number of Guests
                        </label>
                        <div className="flex items-center border border-slate-200/50 dark:border-slate-600/50 rounded-lg bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setGuests(Math.max(1, guests - 1))}
                            className="h-12 w-12 text-slate-700 dark:text-white hover:bg-slate-200/50 dark:hover:bg-white/10"
                          >
                            -
                          </Button>
                          <span className="flex-1 text-center font-bold text-slate-800 dark:text-white text-lg">{guests}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setGuests(guests + 1)}
                            className="h-12 w-12 text-slate-700 dark:text-white hover:bg-slate-200/50 dark:hover:bg-white/10"
                          >
                            +
                          </Button>
                        </div>
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block text-sm font-medium text-[#E1C5A0] mb-3">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full h-12 px-4 bg-white/50 dark:bg-slate-700/50 border border-slate-200/50 dark:border-slate-600/50 rounded-lg focus:border-[#E1C5A0] focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/60 backdrop-blur-sm"
                        />
                      </div>

                      {/* Book Button */}
                      <Link href={`/book-now?destinationId=${destinationData.id}`}>
                        <Button className="w-full h-14 text-lg font-bold bg-gradient-to-r from-[#E1C5A0] to-[#D4B890] text-slate-900 hover:from-[#D4B890] hover:to-[#E1C5A0] transition-all duration-300 shadow-xl">
                          Book Now
                        </Button>
                      </Link>

                      {/* Contact Info */}
                      <div className="text-center text-sm text-slate-600 dark:text-white/70">
                        <p className="mb-3">Questions? Contact us</p>
                        <div className="flex items-center justify-center gap-4">
                          <Button variant="ghost" size="sm" className="text-slate-700 dark:text-white hover:bg-slate-200/50 dark:hover:bg-white/10 rounded-full">
                            <Phone className="w-5 h-5" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-slate-700 dark:text-white hover:bg-slate-200/50 dark:hover:bg-white/10 rounded-full">
                            <Mail className="w-5 h-5" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-slate-700 dark:text-white hover:bg-slate-200/50 dark:hover:bg-white/10 rounded-full">
                            <Globe className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Safety & Trust */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 shadow-xl">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="w-7 h-7 text-green-400" />
                        <h3 className="font-bold text-slate-800 dark:text-white text-lg">Safe & Secure</h3>
                      </div>
                      <div className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                        <p>• Free cancellation up to 24h before</p>
                        <p>• Secure payment processing</p>
                        <p>• 24/7 customer support</p>
                        <p>• Travel insurance included</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;