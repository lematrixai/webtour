'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar,
  MapPin,
  Users,
  Clock,
  Heart,
  ArrowRight,
  Plane,
  Star,
  CheckCircle
} from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';

const BookNow = () => {
  const searchParams = useSearchParams();
  const selectedPackage = searchParams.get('package');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    preferredTravelDates: '',
    numberOfTravelers: '',
    budget: '',
    interests: '',
    specialRequirements: '',
    howDidYouHear: '',
    package: selectedPackage || ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const packages = {
    '1': 'Zanzibar Paradise',
    '2': 'Tanzania Safari Adventure', 
    '3': 'Mafia Island Escape',
    '4': 'Kilimanjaro Summit',
    '5': 'Tanzania Cultural Journey'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#F5F1E8] dark:bg-[#18130C] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl mx-auto px-4"
        >
          <CheckCircle className="w-20 h-20 text-[#E1C5A0] mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-[#18130C] dark:text-white mb-4 text-dancing_script">
            Thank You for Your Interest!
          </h1>
          <p className="text-xl text-[#18130C]/80 dark:text-[#E1C5A0]/80 mb-8 font-afacad">
            We've received your booking request and our travel experts will be in touch within 24 hours to start planning your perfect adventure.
          </p>
          <div className="bg-white/80 dark:bg-[#2A2419] backdrop-blur-sm rounded-2xl p-6 border-2 border-[#E1C5A0]/80 dark:border-[#E1C5A0]/50 shadow-lg">
            <h3 className="text-[#18130C] dark:text-white font-semibold mb-2 font-afacad">What happens next?</h3>
            <ul className="text-[#18130C]/80 dark:text-[#E1C5A0]/80 space-y-2 text-left font-afacad">
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#E1C5A0]" />
                <span>Personal consultation with our travel expert</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#E1C5A0]" />
                <span>Custom itinerary tailored to your preferences</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#E1C5A0]" />
                <span>Detailed quote and booking confirmation</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F1E8] dark:bg-[#18130C] max-md:pt-0 md:pt-0">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gradient-to-r from-[#E1C5A0]/10 via-[#E1C5A0]/5 to-[#E1C5A0]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#18130C]/80 dark:to-[#18130C]/80" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-30" />
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-7xl font-bold text-white text-dancing_script mb-4">
              Start Your Adventure
            </h1>
            <p className="text-xl text-[#E1C5A0]/80 max-w-2xl mx-auto font-afacad">
              Let us create your perfect journey with personalized attention to every detail
            </p>
          </motion.div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/90 dark:bg-[#2A2419] backdrop-blur-xl border-2 border-[#E1C5A0]/80 dark:border-[#E1C5A0]/50 rounded-3xl shadow-2xl p-8"
        >
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= step 
                    ? 'bg-[#E1C5A0] border-[#E1C5A0] text-[#18130C]' 
                    : 'border-[#E1C5A0]/30 text-[#E1C5A0]/50'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-0.5 mx-2 ${
                    currentStep > step ? 'bg-[#E1C5A0]' : 'bg-[#E1C5A0]/30'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-[#696258] dark:text-white mb-2 text-ephesis">Personal Information</h2>
                  <p className="text-[#18130C]/70 dark:text-[#E1C5A0]/80 font-afacad">Tell us about yourself so we can personalize your experience</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#18130C] dark:text-[#E1C5A0] font-medium mb-2 font-afacad">First Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E1C5A0]/60 w-5 h-5" />
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="pl-10 h-12 bg-white/80 dark:bg-[#18130C]/50 border-2 border-[#E1C5A0]/80 dark:border-[#E1C5A0]/50 focus:border-[#E1C5A0] text-[#18130C] dark:text-white placeholder:text-[#18130C]/60 dark:placeholder:text-[#E1C5A0]/60 font-afacad"
                        placeholder="Enter your first name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#18130C] dark:text-[#E1C5A0] font-medium mb-2 font-afacad">Last Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E1C5A0]/60 w-5 h-5" />
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="pl-10 h-12 bg-white/80 dark:bg-[#18130C]/50 border-2 border-[#E1C5A0]/80 dark:border-[#E1C5A0]/50 focus:border-[#E1C5A0] text-[#18130C] dark:text-white placeholder:text-[#18130C]/60 dark:placeholder:text-[#E1C5A0]/60 font-afacad"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#18130C] dark:text-[#E1C5A0] font-medium mb-2 font-afacad">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E1C5A0]/60 w-5 h-5" />
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="pl-10 h-12 bg-white/80 dark:bg-[#18130C]/50 border-2 border-[#E1C5A0]/80 dark:border-[#E1C5A0]/50 focus:border-[#E1C5A0] text-[#18130C] dark:text-white placeholder:text-[#18130C]/60 dark:placeholder:text-[#E1C5A0]/60 font-afacad"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#18130C] dark:text-[#E1C5A0] font-medium mb-2 font-afacad">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E1C5A0]/60 w-5 h-5" />
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pl-10 h-12 bg-white/80 dark:bg-[#18130C]/50 border-2 border-[#E1C5A0]/80 dark:border-[#E1C5A0]/50 focus:border-[#E1C5A0] text-[#18130C] dark:text-white placeholder:text-[#18130C]/60 dark:placeholder:text-[#E1C5A0]/60 font-afacad"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#18130C] dark:text-[#E1C5A0] font-medium mb-2 font-afacad">Country *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E1C5A0]/60 w-5 h-5" />
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 h-12 bg-white/80 dark:bg-[#18130C]/50 border-2 border-[#E1C5A0]/80 dark:border-[#E1C5A0]/50 focus:border-[#E1C5A0] text-[#18130C] dark:text-white rounded-md font-afacad"
                      >
                        <option value="">Select your country</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="AU">Australia</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="IT">Italy</option>
                        <option value="ES">Spain</option>
                        <option value="NL">Netherlands</option>
                        <option value="CH">Switzerland</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#18130C] dark:text-[#E1C5A0] font-medium mb-2 font-afacad">How did you hear about us?</label>
                    <select
                      name="howDidYouHear"
                      value={formData.howDidYouHear}
                      onChange={handleInputChange}
                      className="w-full h-12 bg-white/80 dark:bg-[#18130C]/50 border-2 border-[#E1C5A0]/80 dark:border-[#E1C5A0]/50 focus:border-[#E1C5A0] text-[#18130C] dark:text-white rounded-md px-3 font-afacad"
                    >
                      <option value="">Select an option</option>
                      <option value="Google">Google Search</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Friend">Friend/Family Recommendation</option>
                      <option value="Travel Agent">Travel Agent</option>
                      <option value="Advertisement">Advertisement</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.country}
                    className="bg-[#E1C5A0] text-[#18130C] hover:bg-[#E1C5A0]/90 px-8 py-3 font-afacad"
                  >
                    Next Step
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Trip Preferences */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-[#696258] dark:text-white mb-2 text-ephesis">Trip Preferences</h2>
                  <p className="text-[#18130C]/70 dark:text-[#E1C5A0]/80 font-afacad">Help us understand your travel style and preferences</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#18130C] dark:text-[#E1C5A0] font-medium mb-2 font-afacad">Preferred Travel Dates *</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E1C5A0]/60 w-5 h-5" />
                      <Input
                        type="text"
                        name="preferredTravelDates"
                        value={formData.preferredTravelDates}
                        onChange={handleInputChange}
                        required
                        className="pl-10 h-12 bg-white/80 dark:bg-[#18130C]/50 border-2 border-[#E1C5A0]/80 dark:border-[#E1C5A0]/50 focus:border-[#E1C5A0] text-[#18130C] dark:text-white placeholder:text-[#18130C]/60 dark:placeholder:text-[#E1C5A0]/60 font-afacad"
                        placeholder="e.g., June 2024, Flexible dates"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#18130C] dark:text-[#E1C5A0] font-medium mb-2 font-afacad">Number of Travelers *</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E1C5A0]/60 w-5 h-5" />
                      <select
                        name="numberOfTravelers"
                        value={formData.numberOfTravelers}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 h-12 bg-white/80 dark:bg-[#18130C]/50 border-2 border-[#E1C5A0]/80 dark:border-[#E1C5A0]/50 focus:border-[#E1C5A0] text-[#18130C] dark:text-white rounded-md font-afacad"
                      >
                        <option value="">Select number of travelers</option>
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5 people</option>
                        <option value="6+">6+ people</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#18130C] dark:text-[#E1C5A0] font-medium mb-2 font-afacad">Budget Range *</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 bg-white/80 dark:bg-[#18130C]/50 border-2 border-[#E1C5A0]/80 dark:border-[#E1C5A0]/50 focus:border-[#E1C5A0] text-[#18130C] dark:text-white rounded-md px-3 font-afacad"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $2,000">Under $2,000 per person</option>
                      <option value="$2,000 - $4,000">$2,000 - $4,000 per person</option>
                      <option value="$4,000 - $6,000">$4,000 - $6,000 per person</option>
                      <option value="$6,000 - $8,000">$6,000 - $8,000 per person</option>
                      <option value="$8,000+">$8,000+ per person</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#18130C] dark:text-[#E1C5A0] font-medium mb-2 font-afacad">Package Interest</label>
                    <select
                      name="package"
                      value={formData.package}
                      onChange={handleInputChange}
                      className="w-full h-12 bg-white/80 dark:bg-[#18130C]/50 border-2 border-[#E1C5A0]/80 dark:border-[#E1C5A0]/50 focus:border-[#E1C5A0] text-[#18130C] dark:text-white rounded-md px-3 font-afacad"
                    >
                      <option value="">Select a package (optional)</option>
                      {Object.entries(packages).map(([id, name]) => (
                        <option key={id} value={id}>{name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#18130C] dark:text-[#E1C5A0] font-medium mb-2 font-afacad">Travel Interests</label>
                  <Textarea
                    name="interests"
                    value={formData.interests}
                    onChange={handleInputChange}
                    className="h-24 bg-white/80 dark:bg-[#18130C]/50 border-2 border-[#E1C5A0]/80 dark:border-[#E1C5A0]/50 focus:border-[#E1C5A0] text-[#18130C] dark:text-white placeholder:text-[#18130C]/60 dark:placeholder:text-[#E1C5A0]/60 font-afacad"
                    placeholder="Tell us about your interests: wildlife, culture, adventure, relaxation, photography, etc."
                  />
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                    className="border-2 border-[#E1C5A0]/80 dark:border-[#E1C5A0]/50 text-[#18130C] dark:text-[#E1C5A0] hover:bg-[#E1C5A0]/10 px-8 py-3 font-afacad"
                  >
                    Previous
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.preferredTravelDates || !formData.numberOfTravelers || !formData.budget}
                    className="bg-[#E1C5A0] text-[#18130C] hover:bg-[#E1C5A0]/90 px-8 py-3 font-afacad"
                  >
                    Next Step
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Special Requirements */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-[#696258] dark:text-white mb-2 text-ephesis">Special Requirements</h2>
                  <p className="text-[#18130C]/70 dark:text-[#E1C5A0]/80 font-afacad">Help us ensure your trip is perfectly tailored to your needs</p>
                </div>

                <div>
                  <label className="block text-[#18130C] dark:text-[#E1C5A0] font-medium mb-2 font-afacad">Special Requirements or Requests</label>
                  <Textarea
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleInputChange}
                    className="h-32 bg-white/80 dark:bg-[#18130C]/50 border-2 border-[#E1C5A0]/80 dark:border-[#E1C5A0]/50 focus:border-[#E1C5A0] text-[#18130C] dark:text-white placeholder:text-[#18130C]/60 dark:placeholder:text-[#E1C5A0]/60 font-afacad"
                    placeholder="Any special requirements, dietary needs, accessibility needs, or specific requests for your trip..."
                  />
                </div>

                <div className="bg-white/80 dark:bg-[#2A2419] backdrop-blur-sm rounded-2xl p-6 border-2 border-[#E1C5A0]/80 dark:border-[#E1C5A0]/50 shadow-lg">
                  <h3 className="text-[#18130C] dark:text-white font-semibold mb-4 flex items-center gap-2 font-afacad">
                    <Heart className="w-5 h-5 text-[#E1C5A0]" />
                    What happens next?
                  </h3>
                  <ul className="text-[#18130C]/80 dark:text-[#E1C5A0]/80 space-y-2 font-afacad">
                    <li className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#E1C5A0]" />
                      <span>We'll review your preferences and create a personalized proposal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#E1C5A0]" />
                      <span>Our travel expert will contact you within 24 hours</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#E1C5A0]" />
                      <span>We'll work together to perfect your itinerary</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#E1C5A0]" />
                      <span>Secure booking with flexible payment options</span>
                    </li>
                  </ul>
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                    className="border-2 border-[#E1C5A0]/80 dark:border-[#E1C5A0]/50 text-[#18130C] dark:text-[#E1C5A0] hover:bg-[#E1C5A0]/10 px-8 py-3 font-afacad"
                  >
                    Previous
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#E1C5A0] text-[#18130C] hover:bg-[#E1C5A0]/90 px-8 py-3 font-afacad"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-[#18130C] border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </div>
                    ) : (
                      <>
                        Submit Request
                        <Plane className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BookNow;