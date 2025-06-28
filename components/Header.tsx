'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { ModeToggle } from "./ui/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { scroller } from 'react-scroll';
import { useEffect, useState } from 'react';
import Link from "next/link";
import { label } from "framer-motion/client";

const scrollToSection = (id: string) => {
  scroller.scrollTo(id, {
    smooth: true,
    duration: 600,
    offset: -20,
  });
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems: Array<{
    label: string;
    href?: string;
    action?: () => void;
    isButton?: boolean;
  }> = [
    { label: 'Home', action: () => scrollToSection('below-hero') },
    { label: 'Tour', href: '/tours' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', action: () => scrollToSection('footer') },
    { label: 'About', action: () => scrollToSection('about') },
  ];

  const bookNowItem = { label: 'Book Now', href: '/book-now', isButton: true };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}

      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-out
        ${scrolled 
          ? 'bg-white/10 backdrop-blur-xl dark:bg-black/10 border-b border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 shadow-2xl' 
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Three-column layout for centering logo */}
          <div className="flex flex-1 items-center justify-start min-w-0">
            {/* Desktop Navigation (left) */}
            {scrolled && !isMobile && (
              <motion.nav 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, staggerChildren: 0.1 }}
                className="hidden lg:flex items-center space-x-1"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    {item.href ? (
                      <Link href={item.href}>
                        <span className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer group ${
                          item.isButton 
                            ? 'bg-gradient-to-r from-[#E1C5A0] to-[#E1C5A0]/80 text-[#18130C] hover:from-[#E1C5A0]/90 hover:to-[#E1C5A0] rounded hover:shadow-lg hover:scale-105' 
                            : 'text-gray-700 dark:text-white hover:text-[#18130C] dark:hover:text-[#E1C5A0]'
                        }`}>
                          {item.label}
                          {!item.isButton && (
                            <span className="absolute inset-0 bg-gradient-to-r from-[#E1C5A0]/10 to-[#E1C5A0]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                          )}
                        </span>
                      </Link>
                    ) : (
                      <button 
                        onClick={item.action}
                        className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer group ${
                          item.isButton 
                            ? 'bg-gradient-to-r from-[#E1C5A0] to-[#E1C5A0]/80 text-[#18130C] hover:from-[#E1C5A0]/90 hover:to-[#E1C5A0] rounded-lg shadow-md hover:shadow-lg hover:scale-105' 
                            : 'text-gray-700 dark:text-white hover:text-[#18130C] dark:hover:text-[#E1C5A0]'
                        }`}
                      >
                        {item.label}
                        {!item.isButton && (
                          <span className="absolute inset-0 bg-gradient-to-r from-[#E1C5A0]/10 to-[#E1C5A0]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        )}
                      </button>
                    )}
                    {!item.isButton && (
                      <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#E1C5A0] to-[#E1C5A0]/60 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                    )}
                  </motion.div>
                ))}
              </motion.nav>
            )}
          </div>

          {/* Centered Logo */}
          <motion.div 
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 flex  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0 lg:relative"
            style={{ zIndex: 10 }}
          >
            <div className="relative">
              <Link href="/">
              <Image 
                src="/logo.png" 
                alt="logo" 
                className="w-32 lg:w-40 h-auto items-center justify-center max-md:hidden transition-transform duration-300 hover:scale-105" 
                width={160} 
                height={56} 
              />
              </Link>
              <Link href="/">   
              <Image 
                src="/logo.png" 
                alt="logo" 
                className="w-30 h-10 text-start max-md:block left-3/4 hidden transition-transform duration-300 hover:scale-110" 
                width={80} 
                height={80} 
              />
              </Link>
            </div>
          </motion.div>

          {/* Right Side Controls */}
          <div className="flex flex-1 items-center justify-end min-w-0 space-x-4">
           

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative group flex items-center bg-white/10 dark:bg-[#E1C5A0]/10 backdrop-blur-md border border-[#E1C5A0]/20 dark:border-[#E1C5A0]/40 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hidden md:flex"
            >
              {/* Mode Toggle - left */}
              <div className="flex items-center px-1.5 py-1">
                <ModeToggle scrolled={scrolled} />
                
              </div>
              {/* Divider */}
              {/* <div className="w-px h-6 bg-[#E1C5A0]/40 dark:bg-[#E1C5A0]/60 mx-1" /> */}
               {/* Book Now Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <Link href={bookNowItem.href!}>
                <button className="bg-gradient-to-r mr-1 from-[#E1C5A0] to-[#E1C5A0]/80 text-[#18130C] hover:from-[#E1C5A0]/90 hover:to-[#E1C5A0] px-6 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                  {bookNowItem.label}
                </button>
              </Link>
            </motion.div>
              {/* Mobile Menu - right */}
              {(!scrolled || isMobile) && (
                <DropdownMenu onOpenChange={setIsMenuOpen}>
                  <DropdownMenuTrigger className="flex items-center px-1.5 py-1 focus:outline-none hover:text-[#E1C5A0] transition-colors duration-300">
                    {isMenuOpen ? (
                      <IoClose className="w-5 h-5 text-[#18130C] dark:text-white transition-colors duration-300" />
                    ) : (
                      <CiMenuBurger className="w-5 h-5 text-[#18130C] dark:text-white transition-colors duration-300" />
                    )}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-[#E1C5A0]/20 dark:border-[#E1C5A0]/40 shadow-2xl rounded-2xl p-2 min-w-[200px] mt-2"
                    align="end"
                  >
                    {navItems.map((item, index) => (
                      <DropdownMenuItem 
                        key={item.label}
                        className={`text-sm font-medium transition-all duration-300 cursor-pointer p-3 ${
                          item.isButton 
                            ? 'bg-gradient-to-r from-[#E1C5A0] to-[#E1C5A0]/80 text-[#18130C] hover:from-[#E1C5A0]/90 hover:to-[#E1C5A0] rounded-xl shadow-md hover:shadow-lg' 
                            : 'text-gray-700 dark:text-gray-200 hover:text-[#E1C5A0] rounded-xl'
                        }`}
                        onClick={item.action}
                      >
                        {item.label}
                      </DropdownMenuItem>
                    ))}
                    {/* Book Now in mobile menu */}
                    <DropdownMenuItem 
                      className="bg-gradient-to-r from-[#E1C5A0] to-[#E1C5A0]/80 text-[#18130C] hover:from-[#E1C5A0]/90 hover:to-[#E1C5A0] rounded-xl shadow-md hover:shadow-lg text-sm font-medium transition-all duration-300 cursor-pointer p-3"
                    >
                      <Link href={bookNowItem.href!}>
                        {bookNowItem.label}
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </motion.div>
            
            {/* Mobile-only menu (without theme toggle) */}
            {(!scrolled || isMobile) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative group md:hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#E1C5A0]/20 to-[#E1C5A0]/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <DropdownMenu onOpenChange={setIsMenuOpen}>
                  <DropdownMenuTrigger className="relative bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-gray-700/50 rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none hover:text-[#E1C5A0]">
                    {isMenuOpen ? (
                      <IoClose className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-gray-200 transition-colors duration-300" />
                    ) : (
                      <CiMenuBurger className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-gray-200 transition-colors duration-300 focus:outline-none" />
                    )}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-[#E1C5A0]/20 dark:border-[#E1C5A0]/40 shadow-2xl rounded-2xl p-2 min-w-[200px] mt-2"
                    align="end"
                  >
                    {navItems.map((item, index) => (
                      <DropdownMenuItem 
                        key={item.label}
                        className={`text-sm font-medium transition-all duration-300 cursor-pointer p-3 ${
                          item.isButton 
                            ? 'bg-gradient-to-r from-[#E1C5A0] to-[#E1C5A0]/80 text-[#18130C] hover:from-[#E1C5A0]/90 hover:to-[#E1C5A0] rounded-xl shadow-md hover:shadow-lg' 
                            : 'text-gray-700 dark:text-gray-200 hover:text-[#E1C5A0] hover:bg-[#E1C5A0] rounded-xl'
                        }`}
                        onClick={item.action}
                      >
                        {item.label}
                      </DropdownMenuItem>
                    ))}
                    {/* Book Now in mobile menu */}
                    <DropdownMenuItem 
                      className="bg-gradient-to-r from-[#E1C5A0] to-[#E1C5A0]/80 text-[#18130C] hover:from-[#E1C5A0]/90 hover:to-[#E1C5A0] rounded-xl shadow-md hover:shadow-lg text-sm font-medium transition-all duration-300 cursor-pointer p-3"
                    >
                      <Link href={bookNowItem.href!}>
                        {bookNowItem.label}
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;