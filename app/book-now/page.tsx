'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Clock, 
  Star, 
  ArrowLeft,
  CheckCircle,
  CreditCard,
  Shield,
  Globe,
  Heart,
  Share2,
  Phone,
  Mail,
  User,
  CreditCard as CreditCardIcon,
  CalendarDays,
  Plane,
  Hotel,
  UtensilsCrossed,
  Car,
  Camera
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Mock tour data for booking
const tourData = {
  id: 1,
  title: "Santorini Adventure",
  location: "Greece",
  duration: "7 days",
  groupSize: "12 people",
  price: 910,
  originalPrice: 1200,
  rating: 4.8,
  reviewCount: 127,
  image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
  highlights: [
    "Iconic white buildings",
    "Breathtaking sunsets",
    "Volcanic beaches",
    "Wine tasting experience",
    "Traditional villages"
  ],
  included: [
    { icon: Hotel, label: "Luxury accommodation" },
    { icon: Plane, label: "Airport transfers" },
    { icon: UtensilsCrossed, label: "Most meals included" },
    { icon: Car, label: "All transportation" },
    { icon: Camera, label: "Professional guide" },
    { icon: Shield, label: "Travel insurance" }
  ]
};

const steps = [
  { id: 1, title: "Tour Details", icon: MapPin },
  { id: 2, title: "Personal Info", icon: User },
  { id: 3, title: "Payment", icon: CreditCardIcon },
  { id: 4, title: "Confirmation", icon: CheckCircle }
];

const BookNow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const totalPrice = tourData.price * guests;
  const savings = (tourData.originalPrice - tourData.price) * guests;

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setCurrentStep(4);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18130C] via-[#18130C] to-[#18130C]/90">
      {/* Header */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 dark:bg-[#18130C]/90 backdrop-blur-xl border-b border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/tours">
              <Button variant="ghost" className="flex items-center gap-2 text-[#E1C5A0] hover:bg-[#E1C5A0]/10">
                <ArrowLeft className="w-4 h-4" />
                Back to Tours
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-[#E1C5A0] hover:bg-[#E1C5A0]/10">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-[#E1C5A0] hover:bg-[#E1C5A0]/10">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= step.id
                      ? 'bg-[#E1C5A0] border-[#E1C5A0] text-[#18130C]'
                      : 'border-[#E1C5A0]/30 text-[#E1C5A0]/60'
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </motion.div>
                <span className={`ml-3 text-sm font-medium ${
                  currentStep >= step.id ? 'text-[#E1C5A0]' : 'text-[#E1C5A0]/60'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 transition-all duration-300 ${
                    currentStep > step.id ? 'bg-[#E1C5A0]' : 'bg-[#E1C5A0]/30'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-white/10 dark:bg-[#18130C]/50 backdrop-blur-sm border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30">
                    <CardHeader>
                      <CardTitle className="text-[#E1C5A0] text-2xl">Tour Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Tour Image and Info */}
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="relative w-full md:w-64 h-48 rounded-xl overflow-hidden">
                          <Image
                            src={tourData.image}
                            alt={tourData.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute bottom-4 left-4 text-white">
                            <div className="flex items-center gap-1 mb-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm">{tourData.rating} ({tourData.reviewCount} reviews)</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-white mb-2">{tourData.title}</h2>
                          <div className="flex items-center gap-4 text-[#E1C5A0]/80 mb-4">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{tourData.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{tourData.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{tourData.groupSize}</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {tourData.highlights.map((highlight, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="flex items-center gap-2 text-[#E1C5A0]/70"
                              >
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>{highlight}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Date and Guests Selection */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#E1C5A0] mb-2">
                            Select Date
                          </label>
                          <Input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="bg-white/10 dark:bg-[#18130C]/50 border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 text-[#E1C5A0] focus:border-[#E1C5A0]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#E1C5A0] mb-2">
                            Number of Guests
                          </label>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setGuests(Math.max(1, guests - 1))}
                              className="border-[#E1C5A0]/20 text-[#E1C5A0] hover:bg-[#E1C5A0]/10"
                            >
                              -
                            </Button>
                            <span className="text-[#E1C5A0] font-semibold min-w-[2rem] text-center">
                              {guests}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setGuests(guests + 1)}
                              className="border-[#E1C5A0]/20 text-[#E1C5A0] hover:bg-[#E1C5A0]/10"
                            >
                              +
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* What's Included */}
                      <div>
                        <h3 className="text-lg font-semibold text-[#E1C5A0] mb-4">What's Included</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {tourData.included.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                            >
                              <item.icon className="w-5 h-5 text-[#E1C5A0]" />
                              <span className="text-[#E1C5A0]/80">{item.label}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-white/10 dark:bg-[#18130C]/50 backdrop-blur-sm border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30">
                    <CardHeader>
                      <CardTitle className="text-[#E1C5A0] text-2xl">Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#E1C5A0] mb-2">
                            First Name
                          </label>
                          <Input
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            className="bg-white/10 dark:bg-[#18130C]/50 border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 text-white focus:border-[#E1C5A0]"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#E1C5A0] mb-2">
                            Last Name
                          </label>
                          <Input
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            className="bg-white/10 dark:bg-[#18130C]/50 border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 text-white focus:border-[#E1C5A0]"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#E1C5A0] mb-2">
                            Email Address
                          </label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="bg-white/10 dark:bg-[#18130C]/50 border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 text-white focus:border-[#E1C5A0]"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#E1C5A0] mb-2">
                            Phone Number
                          </label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="bg-white/10 dark:bg-[#18130C]/50 border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 text-white focus:border-[#E1C5A0]"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#E1C5A0] mb-2">
                          Special Requests
                        </label>
                        <textarea
                          value={formData.specialRequests}
                          onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                          className="w-full h-24 p-3 bg-white/10 dark:bg-[#18130C]/50 border border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 rounded-md text-white focus:border-[#E1C5A0] focus:outline-none resize-none"
                          placeholder="Any special requests or dietary requirements..."
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-white/10 dark:bg-[#18130C]/50 backdrop-blur-sm border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30">
                    <CardHeader>
                      <CardTitle className="text-[#E1C5A0] text-2xl">Payment Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#E1C5A0] mb-2">
                            Card Number
                          </label>
                          <Input
                            className="bg-white/10 dark:bg-[#18130C]/50 border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 text-white focus:border-[#E1C5A0]"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#E1C5A0] mb-2">
                            Cardholder Name
                          </label>
                          <Input
                            className="bg-white/10 dark:bg-[#18130C]/50 border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 text-white focus:border-[#E1C5A0]"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#E1C5A0] mb-2">
                            Expiry Date
                          </label>
                          <Input
                            className="bg-white/10 dark:bg-[#18130C]/50 border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 text-white focus:border-[#E1C5A0]"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#E1C5A0] mb-2">
                            CVV
                          </label>
                          <Input
                            className="bg-white/10 dark:bg-[#18130C]/50 border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 text-white focus:border-[#E1C5A0]"
                            placeholder="123"
                          />
                        </div>
                        <div className="flex items-end">
                          <Button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className="w-full h-10 bg-[#E1C5A0] text-[#18130C] hover:bg-[#E1C5A0]/90 disabled:opacity-50"
                          >
                            {isLoading ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-4 h-4 border-2 border-[#18130C] border-t-transparent rounded-full"
                              />
                            ) : (
                              'Complete Booking'
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-white/10 dark:bg-[#18130C]/50 backdrop-blur-sm border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 text-center">
                    <CardContent className="pt-12 pb-12">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle className="w-10 h-10 text-white" />
                      </motion.div>
                      <h2 className="text-3xl font-bold text-[#E1C5A0] mb-4">Booking Confirmed!</h2>
                      <p className="text-[#E1C5A0]/80 mb-8 max-w-md mx-auto">
                        Your booking has been successfully confirmed. You will receive a confirmation email with all the details shortly.
                      </p>
                      <div className="space-y-4">
                        <Button className="bg-[#E1C5A0] text-[#18130C] hover:bg-[#E1C5A0]/90">
                          View Booking Details
                        </Button>
                        <Link href="/tours">
                          <Button variant="outline" className="border-[#E1C5A0]/20 text-[#E1C5A0] hover:bg-[#E1C5A0]/10">
                            Browse More Tours
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {currentStep < 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-between mt-8"
              >
                <Button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  variant="outline"
                  className="border-[#E1C5A0]/20 text-[#E1C5A0] hover:bg-[#E1C5A0]/10 disabled:opacity-50"
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  className="bg-[#E1C5A0] text-[#18130C] hover:bg-[#E1C5A0]/90"
                >
                  {currentStep === 3 ? 'Complete Booking' : 'Next'}
                </Button>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price Summary */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="border-[#E1C5A0]/30 bg-white/10 dark:bg-[#18130C]/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-[#E1C5A0]">Price Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-[#E1C5A0]/80">Price per person</span>
                        <span className="text-[#E1C5A0]">${tourData.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#E1C5A0]/80">Guests</span>
                        <span className="text-[#E1C5A0]">× {guests}</span>
                      </div>
                      {savings > 0 && (
                        <div className="flex justify-between text-green-400">
                          <span>You save</span>
                          <span>-${savings}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-lg font-bold pt-3 border-t border-[#E1C5A0]/20">
                        <span className="text-white">Total</span>
                        <span className="text-[#E1C5A0]">${totalPrice}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="border-[#E1C5A0]/30 bg-white/10 dark:bg-[#18130C]/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-[#E1C5A0]">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#E1C5A0]" />
                      <span className="text-[#E1C5A0]/80">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#E1C5A0]" />
                      <span className="text-[#E1C5A0]/80">support@webtour.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-[#E1C5A0]" />
                      <span className="text-[#E1C5A0]/80">24/7 Support</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Security Badge */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="border-[#E1C5A0]/30 bg-white/10 dark:bg-[#18130C]/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-6 h-6 text-green-400" />
                      <span className="text-[#E1C5A0] font-semibold">Secure Booking</span>
                    </div>
                    <p className="text-sm text-[#E1C5A0]/70">
                      Your payment information is encrypted and secure. We use industry-standard SSL encryption.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;