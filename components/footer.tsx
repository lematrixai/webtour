'use client'
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="footer" className="bg-[#E1C5A0] text-[#01293C] py-12 px-4 md:px-12 w-full border-t border-[#01293C]/20">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#01293C]/20">
          {/* About */}
          <div className="flex flex-col justify-center pb-8 md:pb-0 md:pr-12">
            <h3 className="text-2xl font-semibold mb-4 text-[#01293C]">About</h3>
            <p className="text-[#01293C]/80 text-lg mb-8 max-w-md">
              Luxury Adventure Tours is dedicated to providing unparalleled luxury travel experiences. With a focus on minimalist yet extravagant adventures, we cater to the elite travelers seeking sophistication and exclusivity. Our commitment is to redefine luxury travel by offering unique and unforgettable journeys.
            </p>
            <form className="w-full max-w-xs">
              <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-sm overflow-hidden border border-[#01293C]/20">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-4 py-3 bg-transparent text-[#01293C] placeholder-[#01293C]/60 outline-none"
                />
                <button type="submit" className="px-4 py-3 text-[#01293C] hover:text-[#E1C5A0] hover:bg-[#01293C] transition-colors">
                  <FaPaperPlane size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Links */}
          <div className="flex flex-col items-start justify-center pt-8 md:pt-0 md:px-12">
            <h3 className="text-2xl font-semibold mb-4 text-[#01293C]">Links</h3>
            <ul className="space-y-4 text-[#01293C]/80 text-lg">
              <li><a href="#" className="hover:text-[#01293C] transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-[#01293C] transition-colors">Routes</a></li>
              <li><a href="#" className="hover:text-[#01293C] transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-[#01293C] transition-colors">Reservation</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="flex flex-col justify-center pt-8 md:pt-0 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4 text-[#01293C]">Contacts</h3>
            <ul className="space-y-6 text-[#01293C]/80 text-lg">
              <li className="flex items-center gap-4">
                <span className="bg-[#01293C] text-[#E1C5A0] rounded-full p-3 flex items-center justify-center"><FaMapMarkerAlt size={18} /></span>
                <span>Dar es salaam,<br className="md:hidden" /> Tanzania</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-[#01293C] text-[#E1C5A0] rounded-full p-3 flex items-center justify-center"><FaPhoneAlt size={18} /></span>
                <span>+255 778 878787</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-[#01293C] text-[#E1C5A0] rounded-full p-3 flex items-center justify-center"><FaEnvelope size={18} /></span>
                <span>
                  booking@luxuryad<br className="md:hidden" />venturetours.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='flex justify-center items-center text-[#01293C] py-6 bg-[#E1C5A0]/80'>
        <p>&copy; Copyright 2025 by Luxury Adventure Tours.</p>
      </div>
      {/* Back to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#07384A] text-[#E1C5A0] p-3 rounded-full shadow-lg hover:bg-[#0B3B4F] transition-all duration-300 border-2 border-[#2B5A6B] animate-bounce hover:scale-110"
          aria-label="Back to top"
        >
          <FaArrowUp size={22} />
        </button>
      )}
    </>
  );
};

export default Footer;