'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
  Award,
  Clock as ClockIcon
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock destination data (in a real app, this would come from an API)
const destinationData = {
  id: 1,
  title: "Santorini Adventure",
  location: "Greece",
  country: "Greece",
  rating: 4.8,
  reviewCount: 127,
  duration: "7 days",
  groupSize: "12 people",
  images: [
    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop"
  ],
  category: "vacation",
  description: "Experience the stunning beauty of Santorini with its iconic white buildings and breathtaking sunsets. This 7-day adventure takes you through the most picturesque locations on the island, from the famous blue-domed churches of Oia to the volcanic beaches of Perissa.",
  longDescription: `Santorini, the crown jewel of the Cyclades, awaits your discovery. This meticulously crafted 7-day adventure combines luxury, culture, and natural beauty in perfect harmony.

Your journey begins in the charming capital of Fira, where you'll be greeted with panoramic views of the caldera. Each day brings new discoveries - from the iconic blue-domed churches of Oia to the volcanic beaches of Perissa, from traditional villages to world-class wineries.

Our expert local guides will share the island's rich history, from its volcanic origins to its role in ancient maritime trade. You'll experience authentic Greek hospitality, savor local cuisine, and create memories that will last a lifetime.

The tour includes luxury accommodations with caldera views, all transportation, guided tours, and most meals. Small group sizes ensure personalized attention and an intimate experience.`,
  isSpecialOffer: true,
  tags: ["Romantic", "Beach", "Cultural", "Luxury"],
  highlights: [
    "Visit the iconic blue-domed churches of Oia",
    "Witness breathtaking sunsets over the caldera",
    "Explore traditional villages and local markets",
    "Taste authentic Greek cuisine and local wines",
    "Relax on volcanic beaches",
    "Learn about the island's volcanic history"
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival & Welcome",
      description: "Arrive in Santorini and transfer to your luxury hotel. Welcome dinner with caldera views.",
      activities: ["Airport transfer", "Hotel check-in", "Welcome dinner"]
    },
    {
      day: 2,
      title: "Fira & Caldera Views",
      description: "Explore the capital of Santorini and enjoy panoramic views of the volcanic caldera.",
      activities: ["Fira walking tour", "Cable car experience", "Local lunch"]
    },
    {
      day: 3,
      title: "Oia Sunset Experience",
      description: "Discover the most photographed village in Greece and witness the famous sunset.",
      activities: ["Oia exploration", "Sunset viewing", "Dinner in Oia"]
    },
    {
      day: 4,
      title: "Volcanic Beaches",
      description: "Visit the unique black and red beaches created by volcanic activity.",
      activities: ["Perissa beach", "Red beach visit", "Swimming"]
    },
    {
      day: 5,
      title: "Wine Tasting",
      description: "Experience Santorini's unique volcanic wines and traditional winemaking.",
      activities: ["Winery tour", "Wine tasting", "Traditional dinner"]
    },
    {
      day: 6,
      title: "Traditional Villages",
      description: "Explore authentic villages away from the tourist crowds.",
      activities: ["Pyrgos village", "Local market", "Cooking class"]
    },
    {
      day: 7,
      title: "Departure",
      description: "Farewell breakfast and transfer to the airport.",
      activities: ["Breakfast", "Airport transfer"]
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
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18130C] via-[#18130C] to-[#18130C]/90">
      {/* Header */}
      <div className="bg-white/10 dark:bg-[#18130C]/90 backdrop-blur-xl border-b border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/destinations">
              <Button variant="ghost" className="flex items-center gap-2 text-[#E1C5A0] hover:bg-[#E1C5A0]/10">
                <ArrowLeft className="w-4 h-4" />
                Back to Tours
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-[#E1C5A0] hover:bg-[#E1C5A0]/10">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsFavorite(!isFavorite)}
                className="text-[#E1C5A0] hover:bg-[#E1C5A0]/10"
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <Image
                  src={destinationData.images[selectedImage]}
                  alt={destinationData.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {destinationData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-[#E1C5A0]' 
                        : 'border-[#E1C5A0]/20 hover:border-[#E1C5A0]/50'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${destinationData.title} ${index + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Tour Info */}
            <div className="space-y-6">
              <div>
                <div className="mb-4">
                  <h1 className="text-4xl font-bold text-white mb-2">
                    {destinationData.title}
                  </h1>
                  <div className="flex items-center gap-4 text-[#E1C5A0]/80">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{destinationData.location}, {destinationData.country}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{destinationData.rating} ({destinationData.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {destinationData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#E1C5A0]/20 text-[#E1C5A0] text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 text-[#E1C5A0]/80">
                  <Clock className="w-5 h-5" />
                  <span>{destinationData.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-[#E1C5A0]/80">
                  <Users className="w-5 h-5" />
                  <span>{destinationData.groupSize}</span>
                </div>
                <div className="flex items-center gap-2 text-[#E1C5A0]/80">
                  <Calendar className="w-5 h-5" />
                  <span>Flexible dates</span>
                </div>
                <div className="flex items-center gap-2 text-[#E1C5A0]/80">
                  <Award className="w-5 h-5" />
                  <span>Best seller</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <Card className="bg-white/10 dark:bg-[#18130C]/50 backdrop-blur-sm border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30">
              <CardHeader>
                <CardTitle className="text-[#E1C5A0]">About This Tour</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#E1C5A0]/80 leading-relaxed">
                    {destinationData.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card className="bg-white/10 dark:bg-[#18130C]/50 backdrop-blur-sm border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30">
              <CardHeader>
                <CardTitle className="text-[#E1C5A0]">Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {destinationData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-[#E1C5A0]/80">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Itinerary */}
            <Card className="bg-white/10 dark:bg-[#18130C]/50 backdrop-blur-sm border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30">
              <CardHeader>
                <CardTitle className="text-[#E1C5A0]">Itinerary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {destinationData.itinerary.map((day) => (
                    <div key={day.day} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#E1C5A0]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#E1C5A0] font-semibold">{day.day}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-2">{day.title}</h4>
                        <p className="text-[#E1C5A0]/80 mb-3">{day.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {day.activities.map((activity, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-[#E1C5A0]/10 text-[#E1C5A0] text-xs rounded"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 dark:bg-[#18130C]/50 backdrop-blur-sm border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30">
                <CardHeader>
                  <CardTitle className="text-green-400">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {destinationData.included.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-[#E1C5A0]/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 dark:bg-[#18130C]/50 backdrop-blur-sm border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30">
                <CardHeader>
                  <CardTitle className="text-red-400">Not Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {destinationData.notIncluded.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-red-400/50 rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                        </div>
                        <span className="text-sm text-[#E1C5A0]/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Reviews */}
            <Card className="bg-white/10 dark:bg-[#18130C]/50 backdrop-blur-sm border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30">
              <CardHeader>
                <CardTitle className="text-[#E1C5A0]">Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {destinationData.reviews.map((review) => (
                    <div key={review.id} className="border-b border-[#E1C5A0]/20 pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{review.name}</h4>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-[#E1C5A0]/80 text-sm mb-2">{review.comment}</p>
                      <span className="text-xs text-[#E1C5A0]/60">{review.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking Card */}
              <Card className="border-[#E1C5A0]/30 bg-white/10 dark:bg-[#18130C]/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-[#E1C5A0]">Book This Tour</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm font-medium text-[#E1C5A0] mb-2">
                      Select Date
                    </label>
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full h-10 px-3 bg-white/10 dark:bg-[#18130C]/50 border border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 rounded-md focus:border-[#E1C5A0] focus:outline-none text-[#E1C5A0]"
                    >
                      <option value="">Choose a date</option>
                        {destinationData.availability.map((date) => (
                        <option 
                          key={date.date} 
                          value={date.date}
                          disabled={!date.available}
                          className="bg-[#18130C] text-[#E1C5A0]"
                        >
                          {new Date(date.date).toLocaleDateString()} 
                          {!date.available && ' (Full)'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Guest Selection */}
                  <div>
                    <label className="block text-sm font-medium text-[#E1C5A0] mb-2">
                      Number of Guests
                    </label>
                    <div className="flex items-center border border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 rounded-md bg-white/10 dark:bg-[#18130C]/50">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="h-10 w-10 text-[#E1C5A0] hover:bg-[#E1C5A0]/10"
                      >
                        -
                      </Button>
                      <span className="flex-1 text-center font-medium text-[#E1C5A0]">{guests}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setGuests(guests + 1)}
                        className="h-10 w-10 text-[#E1C5A0] hover:bg-[#E1C5A0]/10"
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-[#E1C5A0] mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full h-10 px-3 bg-white/10 dark:bg-[#18130C]/50 border border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 rounded-md focus:border-[#E1C5A0] focus:outline-none text-[#E1C5A0] placeholder:text-[#E1C5A0]/60"
                    />
                  </div>

                  {/* Book Button */}
                    <Link href={`/book-now?destinationId=${destinationData.id}`}>
                    <Button className="w-full h-12 text-lg font-semibold bg-[#E1C5A0] text-[#18130C] hover:bg-[#E1C5A0]/90">
                      Book Now
                    </Button>
                  </Link>

                  {/* Contact Info */}
                  <div className="text-center text-sm text-[#E1C5A0]/80">
                    <p>Questions? Contact us</p>
                    <div className="flex items-center justify-center gap-4 mt-2">
                      <Button variant="ghost" size="sm" className="text-[#E1C5A0] hover:bg-[#E1C5A0]/10">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-[#E1C5A0] hover:bg-[#E1C5A0]/10">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-[#E1C5A0] hover:bg-[#E1C5A0]/10">
                        <Globe className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Safety & Trust */}
              <Card className="bg-white/10 dark:bg-[#18130C]/50 backdrop-blur-sm border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-green-400" />
                    <h3 className="font-semibold text-white">Safe & Secure</h3>
                  </div>
                  <div className="space-y-2 text-sm text-[#E1C5A0]/80">
                    <p>• Free cancellation up to 24h before</p>
                    <p>• Secure payment processing</p>
                    <p>• 24/7 customer support</p>
                    <p>• Travel insurance included</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;