'use client'
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaArrowUp, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

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
      <footer id="footer" className="bg-gradient-to-br from-[#E1C5A0] to-[#D4B890] text-[#01293C] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2301293C%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            {/* Top Section - Company Info & Newsletter */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
              {/* Company Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#01293C] mb-4">
                    Luxury Adventure Tours
                  </h2>
                  <p className="text-[#01293C]/80 text-base sm:text-lg leading-relaxed max-w-lg">
                    Experience the world's most exclusive destinations with our curated luxury travel experiences. 
                    Where adventure meets sophistication.
                  </p>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#01293C] text-[#E1C5A0] p-3 rounded-full hover:bg-[#07384A] transition-all duration-300 hover:scale-110">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="bg-[#01293C] text-[#E1C5A0] p-3 rounded-full hover:bg-[#07384A] transition-all duration-300 hover:scale-110">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="bg-[#01293C] text-[#E1C5A0] p-3 rounded-full hover:bg-[#07384A] transition-all duration-300 hover:scale-110">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="backdrop-blur-sm rounded-2xl p-6 sm:p-8 ">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#01293C]">
                  Stay Updated
                </h3>
                <p className="text-[#01293C]/70 mb-6 text-sm sm:text-base">
                  Subscribe to our newsletter for exclusive offers and travel inspiration.
                </p>
                <form className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-white/50 border border-[#01293C]/20 rounded-lg text-[#01293C] placeholder-[#01293C]/60 outline-none focus:ring-2 focus:ring-[#01293C]/30 transition-all"
                    />
                    <button 
                      type="submit" 
                      className="px-6 py-3 bg-[#01293C] text-[#E1C5A0] rounded-lg hover:bg-[#07384A] transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                    >
                      <FaPaperPlane size={16} />
                      <span className="hidden sm:inline">Subscribe</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Middle Section - Quick Links & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-[#01293C] border-b border-[#01293C]/20 pb-2">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-[#01293C]/70 hover:text-[#01293C] transition-colors duration-200 text-sm sm:text-base">Services</a></li>
                  <li><a href="#" className="text-[#01293C]/70 hover:text-[#01293C] transition-colors duration-200 text-sm sm:text-base">Destinations</a></li>
                  <li><a href="#" className="text-[#01293C]/70 hover:text-[#01293C] transition-colors duration-200 text-sm sm:text-base">Testimonials</a></li>
                  <li><a href="#" className="text-[#01293C]/70 hover:text-[#01293C] transition-colors duration-200 text-sm sm:text-base">Book Now</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-[#01293C] border-b border-[#01293C]/20 pb-2">
                  Contact Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#01293C] text-[#E1C5A0] p-2 rounded-lg flex-shrink-0">
                      <FaMapMarkerAlt size={16} />
                    </div>
                    <div>
                      <p className="text-[#01293C]/70 text-sm sm:text-base leading-relaxed">
                        Dar es Salaam, Tanzania
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-[#01293C] text-[#E1C5A0] p-2 rounded-lg flex-shrink-0">
                      <FaPhoneAlt size={16} />
                    </div>
                    <a href="tel:+255778878787" className="text-[#01293C]/70 hover:text-[#01293C] transition-colors text-sm sm:text-base">
                      +255 778 878787
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-[#01293C] text-[#E1C5A0] p-2 rounded-lg flex-shrink-0">
                      <FaEnvelope size={16} />
                    </div>
                    <a href="mailto:booking@luxuryadventuretours.com" className="text-[#01293C]/70 hover:text-[#01293C] transition-colors text-sm sm:text-base break-all">
                      booking@luxuryadventuretours.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="border-t border-[#01293C]/20 bg-[#01293C]/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-[#01293C]/70 text-sm sm:text-base text-center sm:text-left">
                  &copy; 2025 Luxury Adventure Tours.
                </p>
                <div className="flex items-center gap-6 text-sm sm:text-base">
                  <a href="#" className="text-[#01293C]/70 hover:text-[#01293C] transition-colors">Terms</a>
                  <a href="#" className="text-[#01293C]/70 hover:text-[#01293C] transition-colors">Privacy</a>
                  <a href="#" className="text-[#01293C]/70 hover:text-[#01293C] transition-colors">Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 bg-[#01293C] text-[#E1C5A0] p-3 sm:p-4 rounded-full shadow-xl hover:bg-[#07384A] transition-all duration-300 hover:scale-110 border-2 border-[#E1C5A0]/20"
          aria-label="Back to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default Footer;