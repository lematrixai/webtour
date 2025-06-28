'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Star, 
  Heart, 
  ArrowRight,
  Users,
  Clock,
  Camera,
  Compass,
  Mountain,
  Sun,
  Moon,
  Plane,
  Shield,
  Award
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  const packages = [
    {
      id: 1,
      title: "Zanzibar Paradise",
      subtitle: "Spice Island Luxury",
      location: "Zanzibar, Tanzania",
      duration: "7-14 Days",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      description: "Experience the magic of Zanzibar's pristine beaches, historic Stone Town, and vibrant culture. From spice tours to sunset dhow cruises, every moment is crafted for luxury and authenticity.",
      highlights: [
        "Historic Stone Town exploration",
        "Spice farm tours",
        "Pristine beach experiences",
        "Traditional dhow sailing",
        "Luxury beachfront accommodation"
      ],
      price: "From $2,500",
      category: "beach"
    },
    {
      id: 2,
      title: "Tanzania Safari Adventure",
      subtitle: "Wildlife & Wilderness",
      location: "Serengeti & Ngorongoro",
      duration: "8-12 Days",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
      description: "Embark on an unforgettable safari through Tanzania's most iconic parks. Witness the Great Migration, explore the Ngorongoro Crater, and encounter Africa's Big Five in their natural habitat.",
      highlights: [
        "Great Migration viewing",
        "Ngorongoro Crater safari",
        "Big Five encounters",
        "Luxury tented camps",
        "Expert safari guides"
      ],
      price: "From $4,200",
      category: "safari"
    },
    {
      id: 3,
      title: "Mafia Island Escape",
      subtitle: "Untouched Paradise",
      location: "Mafia Island, Tanzania",
      duration: "6-10 Days",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      description: "Discover the untouched beauty of Mafia Island, a hidden gem in the Indian Ocean. Perfect for diving, snorkeling, and experiencing authentic island life away from the crowds.",
      highlights: [
        "World-class diving",
        "Whale shark encounters",
        "Pristine coral reefs",
        "Island village visits",
        "Secluded beach retreats"
      ],
      price: "From $3,100",
      category: "island"
    },
    {
      id: 4,
      title: "Kilimanjaro Summit",
      subtitle: "Roof of Africa",
      location: "Mount Kilimanjaro",
      duration: "7-9 Days",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
      description: "Conquer Africa's highest peak with our expert guides. Experience the challenge and triumph of reaching Uhuru Peak while enjoying stunning views and professional support throughout your journey.",
      highlights: [
        "Multiple route options",
        "Expert mountain guides",
        "Luxury base camps",
        "Summit sunrise views",
        "Safety equipment included"
      ],
      price: "From $3,800",
      category: "adventure"
    },
    {
      id: 5,
      title: "Tanzania Cultural Journey",
      subtitle: "Heritage & Traditions",
      location: "Multiple Regions",
      duration: "10-14 Days",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      description: "Immerse yourself in Tanzania's rich cultural heritage. Visit traditional villages, learn from local artisans, and experience authentic ceremonies that have been passed down through generations.",
      highlights: [
        "Traditional village visits",
        "Local artisan workshops",
        "Cultural ceremonies",
        "Traditional cuisine",
        "Community homestays"
      ],
      price: "From $2,800",
      category: "cultural"
    }
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personalized Design",
      description: "We'll plan your trip around your specific interests, tastes and preferences, providing helpful tips and honest advice based on first-hand knowledge."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Authentic Experiences",
      description: "Our expert guides and brilliant travel concierges are hand-picked to provide genuine experiences, bringing your destination to life with care and passion."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Responsible Travel",
      description: "Our luxury trips are designed with responsible travel principles that prioritize experiences that are both good for you and good for the planet."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18130C] via-[#18130C] to-[#18130C]/90">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-gradient-to-r from-[#E1C5A0]/10 via-[#E1C5A0]/5 to-[#E1C5A0]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#18130C]/80" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-30" />
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Our
              <span className="block text-[#E1C5A0]">Experiences</span>
            </h1>
            <p className="text-2xl text-[#E1C5A0]/80 max-w-3xl mx-auto mb-8">
              Discover authentic, responsible travel experiences planned by experts
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button size="lg" className="bg-[#E1C5A0] text-[#18130C] hover:bg-[#E1C5A0]/90 text-xl px-8 py-4">
                Start Planning
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Choose
              <span className="block text-[#E1C5A0]">Our Experiences?</span>
            </h2>
            <p className="text-xl text-[#E1C5A0]/80 max-w-3xl mx-auto">
              We create bespoke journeys that combine luxury, authenticity, and responsible travel principles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#E1C5A0]/20"
              >
                <div className="text-[#E1C5A0] mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-[#E1C5A0]/80 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-gradient-to-r from-[#E1C5A0]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Unforgettable
              <span className="block text-[#E1C5A0]">Experiences</span>
            </h2>
            <p className="text-xl text-[#E1C5A0]/80 max-w-3xl mx-auto">
              Whatever you're interested in, we will create your bespoke, perfect trip
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-sm rounded-3xl border border-[#E1C5A0]/20 overflow-hidden hover:border-[#E1C5A0]/40 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-[#E1C5A0] mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">{pkg.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{pkg.title}</h3>
                    <p className="text-[#E1C5A0] text-sm">{pkg.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-[#E1C5A0]/70">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                      <div className="text-lg font-semibold text-[#E1C5A0]">
                        {pkg.price}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[#E1C5A0]/80 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Highlights:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[#E1C5A0]/70">
                          <Star className="w-3 h-3 text-[#E1C5A0]" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link href={`/book-now?package=${pkg.id}`}>
                    <Button className="w-full bg-[#E1C5A0] text-[#18130C] hover:bg-[#E1C5A0]/90">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Your Adventure
              <span className="block text-[#E1C5A0]">Starts Now</span>
            </h2>
            <p className="text-xl text-[#E1C5A0]/80 mb-8 max-w-2xl mx-auto">
              Whatever you want your luxury private tour or safari itinerary to include, 
              we'll create something fully bespoke for you… and only you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/destinations">
                <Button size="lg" className="bg-[#E1C5A0] text-[#18130C] hover:bg-[#E1C5A0]/90 text-xl px-8 py-4">
                  Start Planning
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
              <Link href="/book-now">
                <Button variant="outline" size="lg" className="border-[#E1C5A0]/30 text-[#E1C5A0] hover:bg-[#E1C5A0]/10 text-xl px-8 py-4">
                  Get in Touch
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;