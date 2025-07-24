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
import { usePathname } from 'next/navigation';
import { 
  Home,
  Plane,
  Map,
  Settings,
  Phone,
  Info,
  Calendar
} from 'lucide-react';

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
  const [isHomePage, setIsHomePage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if we're on the home page
    setIsHomePage(window.location.pathname === '/');
  }, []);

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
    icon?: React.ReactNode;
  }> = [
    { label: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { label: 'Tour', href: '/tours', icon: <Plane className="w-5 h-5" /> },
    { label: 'Destinations', href: '/destinations', icon: <Map className="w-5 h-5" /> },
    { label: 'Services', href: '/services', icon: <Settings className="w-5 h-5" /> },
    { label: 'Contact', action: () => scrollToSection('footer'), icon: <Phone className="w-5 h-5" /> },
    { label: 'About', action: () => scrollToSection('about'), icon: <Info className="w-5 h-5" /> },
  ];

  const webNavItems: Array<{
    label: string;
    href?: string;
    action?: () => void;
    isButton?: boolean;
    icon?: React.ReactNode;
  }> = [
    { label: 'Tour', href: '/tours', icon: <Plane className="w-5 h-5 text-[#E1C5A0]" /> },
    { label: 'Destinations', href: '/destinations', icon: <Map className="w-5 h-5 text-[#E1C5A0]" /> },
   
  ];

  const bookNowItem = { label: 'Book Now', href: '/book-now', isButton: true, icon: <Calendar className="w-5 h-5" /> };

  // Check if a navigation item is active
  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-out
          ${scrolled 
            ? isHomePage 
              ? 'bg-[#01293C]/25 backdrop-blur-xl border-b border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 shadow-2xl' 
              : 'bg-white backdrop-blur-xl text-white dark:bg-black/10 border-b border-[#E1C5A0]/20 dark:border-[#E1C5A0]/30 shadow-2xl'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Three-column layout for centering logo */}
            <div className="flex flex-1 items-center justify-start min-w-0 ">

              {/* Home Page Navigation */}
              {/* Desktop Navigation (left) */}
              {scrolled && !isMobile && (
                <motion.nav 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, staggerChildren: 0.1 }}
                  className="hidden lg:flex items-center space-x-1 "
                >
                  {navItems.map((item, index) => {
                    const active = isActive(item.href);
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative group"
                      >
                        {item.href ? (
                          <Link href={item.href}>
                            <span className={`relative px-4 py-2 text-base font-medium transition-all duration-300 cursor-pointer group ${
                              item.isButton 
                                ? 'bg-gradient-to-r from-[#E1C5A0] to-[#E1C5A0]/80 text-[#18130C] hover:from-[#E1C5A0]/90 hover:to-[#E1C5A0] rounded hover:shadow-lg hover:scale-105' 
                                : active
                                  ? isHomePage 
                                    ? 'text-[#E1C5A0] font-semibold' 
                                    : 'text-[#E1C5A0] font-semibold'
                                  : isHomePage 
                                    ? 'text-white hover:text-[#E1C5A0]' 
                                    : 'text-gray-700 dark:text-white hover:text-[#18130C] dark:hover:text-[#E1C5A0]'
                            }`}>
                              {item.label}
                              {!item.isButton && (
                                <span className={`absolute inset-0 bg-gradient-to-r from-[#E1C5A0]/10 to-[#E1C5A0]/20 rounded-lg transition-opacity duration-300 ${
                                  active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                }`}></span>
                              )}
                            </span>
                          </Link>
                        ) : (
                          <button 
                            onClick={item.action}
                            className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer group ${
                              item.isButton 
                                ? 'bg-gradient-to-r from-[#E1C5A0] to-[#E1C5A0]/80 text-[#18130C] hover:from-[#E1C5A0]/90 hover:to-[#E1C5A0] rounded-lg shadow-md hover:shadow-lg hover:scale-105' 
                                : isHomePage 
                                  ? 'text-white hover:text-[#E1C5A0]' 
                                  : 'text-gray-700 dark:text-white hover:text-[#18130C] dark:hover:text-[#E1C5A0]'
                            }`}
                          >
                            {item.label}
                            {!item.isButton && (
                              <span className="absolute inset-0 bg-gradient-to-r from-[#E1C5A0]/10 to-[#E1C5A0]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            )}
                          </button>
                        )}

                      </motion.div>
                    );
                  })}
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
                <div className="flex items-center text-black px-1.5 py-1">
                  <ModeToggle scrolled={scrolled} />
                  
                </div>
               
                 {/* Book Now Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden lg:block"
              >
                <Link href={bookNowItem.href!}>
                  <button className={`bg-gradient-to-r mr-1 px-6 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium ${
                    isActive(bookNowItem.href)
                      ? 'from-[#E1C5A0] to-[#E1C5A0] text-[#18130C] shadow-lg'
                      : 'from-[#E1C5A0] to-[#E1C5A0]/80 text-[#18130C] hover:from-[#E1C5A0]/90 hover:to-[#E1C5A0]'
                  }`}>
                    {bookNowItem.label}
                  </button>
                </Link>
              </motion.div>
                {/* Mobile Menu - right */}
                {(!scrolled || isMobile) && (
                  <DropdownMenu onOpenChange={setIsMenuOpen}>
                    <DropdownMenuTrigger className="flex items-center px-1.5 py-1 focus:outline-none hover:text-[#E1C5A0] transition-colors duration-300 ">
                      {isMenuOpen ? (
                        <IoClose className="w-5 h-5 text-gray-700 dark:text-white transition-colors duration-300" />
                      ) : (
                        <CiMenuBurger className="w-5 h-5 text-gray-700 dark:text-white transition-colors duration-300" />
                      )}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      className="bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-[#E1C5A0]/20 dark:border-[#E1C5A0]/40 shadow-2xl rounded-2xl p-2 min-w-[200px] mt-2"
                      align="end"
                    >
                      {webNavItems.map((item, index) => {
                        const active = isActive(item.href);
                        return (
                          <Link key={item.label} href={item.href!}>
                            <DropdownMenuItem 
                              className={`text-base font-medium transition-all duration-300 cursor-pointer p-3 ${
                                item.isButton 
                                  ? 'bg-white from-[#E1C5A0] to-[#E1C5A0]/80 text-[#18130C] hover:bg-[#E1C5A0] rounded-xl ' 
                                  : active
                                    ? 'text-[#E1C5A0] bg-[#E1C5A0]/10 rounded-xl'
                                    : 'text-gray-100 dark:text-gray-200 hover:text-[#E1C5A0] rounded-xl'
                              }`}
                              onClick={item.action}
                            >
                              <div className="flex items-center space-x-2">
                                {item.icon && <span className={`${active ? 'text-[#E1C5A0]' : 'text-[#E1C5A0]'}`}>{item.icon}</span>}
                                <span>{item.label}</span>
                              </div>
                            </DropdownMenuItem>
                          </Link>
                        );
                      })}
                     
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </motion.div>
              
                {/* Mobile-only menu */}
               {(!scrolled || isMobile) && (
                 <motion.div
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.3 }}
                   className="relative group md:hidden"
                 >
                   <button
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                     className="p-2 focus:outline-none hover:text-[#E1C5A0] transition-colors duration-300"
                   >
                     {isMenuOpen ? (
                       <IoClose  className={`w-8 h-8 lg:w-10 lg:h-10 transition-colors duration-300 ${isHomePage ? 'text-white' : 'text-gray-700 dark:text-gray-200'}`} />
                     ) : (
                      
                       <CiMenuBurger  className={`w-6 h-6 lg:w-10 lg:h-10 transition-colors duration-300 focus:outline-none ${isHomePage ? 'text-white' : 'text-[#E1C5A0] dark:text-gray-200'}`} />
                     )}
                   </button>
                 </motion.div>
               )}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm md:hidden overflow-hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute right-0 top-0 h-full w-full bg-white dark:bg-[#18130C] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#E1C5A0]/20 relative">
              {/* Dark Mode Toggle - Left */}
              <div className="flex items-center">
                <div className="bg-white/10 dark:bg-[#E1C5A0]/10 backdrop-blur-md border border-[#E1C5A0]/20 dark:border-[#E1C5A0]/40 rounded-lg p-1">
                  <ModeToggle scrolled={scrolled} />
                </div>
              </div>
              
              {/* Logo - Center */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <Image 
                    src="/logo.png" 
                    alt="logo" 
                    className="w-28 h-auto transition-transform duration-300 hover:scale-105" 
                    width={96} 
                    height={34} 
                  />
                </Link>
              </div>
              
              {/* Close Button - Right */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-[#E1C5A0]/10 rounded-lg transition-colors duration-300"
              >
                <IoClose className="w-6 h-6 text-[#18130C] dark:text-white" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="w-full"
                  >
                    {item.href ? (
                      <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                        <div className={`w-full p-4 text-lg font-medium transition-all duration-300 border-b border-[#E1C5A0]/10 flex items-center space-x-3 ${
                          active
                            ? 'text-[#E1C5A0] bg-[#E1C5A0]/10 font-semibold'
                            : 'text-[#18130C] dark:text-white hover:bg-[#E1C5A0]/10'
                        }`}>
                          {item.icon && <span className={`${active ? 'text-[#E1C5A0]' : 'text-[#E1C5A0]'}`}>{item.icon}</span>}
                          <span>{item.label}</span>
                        </div>
                      </Link>
                    ) : (
                      <button 
                        onClick={() => {
                          item.action?.();
                          setIsMenuOpen(false);
                        }}
                        className="w-full p-4 text-lg font-medium text-[#18130C] dark:text-white hover:bg-[#E1C5A0]/10 transition-all duration-300 border-b border-[#E1C5A0]/10 text-left flex items-center space-x-3"
                      >
                        {item.icon && <span className="text-[#E1C5A0]">{item.icon}</span>}
                        <span>{item.label}</span>
                      </button>
                    )}
                  </motion.div>
                );
              })}
              
              {/* Book Now Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                className="w-full pt-4"
              >
                <Link href={bookNowItem.href!} onClick={() => setIsMenuOpen(false)}>
                  <div className={`w-full p-4 font-medium text-lg text-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 ${
                    isActive(bookNowItem.href)
                      ? 'bg-[#E1C5A0] text-[#18130C] shadow-xl'
                      : 'bg-gradient-to-r from-[#E1C5A0] to-[#E1C5A0]/80 text-[#18130C]'
                  }`}>
                    {bookNowItem.icon && <span>{bookNowItem.icon}</span>}
                    <span>{bookNowItem.label}</span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Header;