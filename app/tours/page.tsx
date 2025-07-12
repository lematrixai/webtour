'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Plane, 
  MapPin, 
  Heart, 
  Star, 
  Camera, 
  Users, 
  Clock,
  ArrowRight,
  Compass,
  Mountain,
  Sun,
  Moon
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Tours = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen dark:bg-gradient-to-b from-[#18130C] via-[#18130C] to-[#18130C]/90">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-r from-[#E1C5A0]/10 via-[#E1C5A0]/5 to-[#E1C5A0]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#18130C]/80" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-90" />
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Your Journey
              <span className="block text-[#E1C5A0]">Begins Here</span>
            </h1>
            <p className="text-2xl text-white dark:text-[#E1C5A0]/80 max-w-3xl mx-auto mb-8">
              From the moment you arrive until you reach your destination, every step is an adventure
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button onClick={() => router.push('/destinations')} size="lg" className="bg-[#E1C5A0] text-[#18130C] hover:bg-[#E1C5A0]/90 text-xl px-8 py-4">
                Start Your Adventure
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* The Arrival Experience */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Plane className="w-8 h-8 text-[#E1C5A0]" />
                <h2 className="text-4xl font-bold text-white">The Arrival</h2>
              </div>
              <p className="text-xl text-[#18130C] dark:text-[#E1C5A0]/80 mb-6 leading-relaxed">
                As your plane touches down, you feel the excitement building. The moment you step off, 
                you're greeted by the warm breeze carrying the scent of adventure. Our team is there 
                to welcome you with open arms, ready to make your journey unforgettable.
              </p>
              <div className="flex items-center gap-6 text-[#18130C] dark:text-[#E1C5A0]/70">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Personal Greeting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop"
                alt="Airport arrival"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Journey Experience */}
      <section className="py-20 bg-gradient-to-r from-[#E1C5A0]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Compass className="w-8 h-8 text-[#E1C5A0]" />
                <h2 className="text-4xl font-bold text-white">The Journey</h2>
              </div>
              <p className="text-xl text-[#18130C] dark:text-[#E1C5A0]/80 mb-6 leading-relaxed">
                Every moment between arrival and destination is crafted for discovery. Whether it's 
                a scenic drive through breathtaking landscapes, a local guide sharing stories, or 
                unexpected stops at hidden gems, the journey itself becomes part of your story.
              </p>
              <div className="flex items-center gap-6 text-[#18130C] dark:text-[#E1C5A0]/70">
                <div className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  <span>Photo Opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span>Local Insights</span>
                </div>
              </div>
            </div>
            <div className="lg:order-1 relative">
              <Image
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop"
                alt="Scenic journey"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Destination Experience */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-[#E1C5A0]" />
                <h2 className="text-4xl font-bold text-white">The Destination</h2>
              </div>
              <p className="text-xl text-[#18130C] dark:text-[#E1C5A0]/80 mb-6 leading-relaxed">
                When you finally reach your destination, it's more than just arriving at a place. 
                It's about experiencing the culture, tasting the local cuisine, meeting the people, 
                and creating memories that will last a lifetime. This is where your adventure truly begins.
              </p>
              <div className="flex items-center gap-6 text-[#18130C] dark:text-[#E1C5A0]/70">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  <span>Authentic Experiences</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mountain className="w-5 h-5" />
                  <span>Unique Adventures</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
                alt="Zanzibar destination"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Memories Experience */}
      <section className="py-20 bg-gradient-to-r from-transparent to-[#E1C5A0]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Sun className="w-8 h-8 text-[#E1C5A0]" />
                <h2 className="text-4xl font-bold text-white">The Memories</h2>
              </div>
              <p className="text-xl text-[#18130C] dark:text-[#E1C5A0]/80 mb-6 leading-relaxed">
                Long after you return home, the memories of your journey will continue to inspire. 
                The friendships made, the landscapes witnessed, the cultures experienced - these 
                become part of who you are. Every trip is not just a vacation, it's a transformation.
              </p>
              <div className="flex items-center gap-6 text-[#18130C] dark:text-[#E1C5A0]/70">
                <div className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  <span>Lifetime Memories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Moon className="w-5 h-5" />
                  <span>Stories to Share</span>
                </div>
              </div>
            </div>
            <div className="lg:order-1 relative">
              <Image
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop"
                alt="Kilimanjaro memories"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
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
              Ready to Begin
              <span className="block text-[#E1C5A0]">Your Adventure?</span>
            </h2>
            <p className="text-xl text-[#18130C] dark:text-[#E1C5A0]/80 mb-8 max-w-2xl mx-auto">
              Explore our destinations and start planning the journey of your dreams. 
              From arrival to destination, we'll make every moment unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/destinations">
                <Button size="lg" className="bg-[#E1C5A0] text-[#18130C] hover:bg-[#E1C5A0]/90 text-xl px-8 py-4">
                  Explore Destinations
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
              <Link href="/book-now">
                <Button variant="outline" size="lg" className="border-[#E1C5A0]/30 text-[#E1C5A0] hover:bg-[#E1C5A0]/10 text-xl px-8 py-4">
                  Book Your Journey
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

export default Tours;