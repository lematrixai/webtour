'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { ModeToggle } from "./ui/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <div className="absolute left-0 right-0 z-20 flex items-center justify-between px-6 max-md:px-2 py-2 max-md:bg-[#01293C] from-black/60  via-black/70 to-black/80 max-md:backdrop-blur-md max-md:shadow-lg">
      {/* Left side - empty for balance */}
      <div className="w-12">
      <Image src="/logo-sm.png" alt="logo" className="w-8 h-8 max-md:block hidden" width={100} height={100} />

      </div>
      
      {/* Center - Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center py-4"
      >
        <Image src="/logo.png" alt="logo" className="w-[239.72px] h-[84px] max-md:hidden" width={100} height={100} />
      </motion.div>
      
      {/* Right side - Enhanced Menu icon */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex items-center justify-center gap-2"
      >
        <DropdownMenu>
            <div className="flex items-center rounded-xl lg:border xl:border bg-gradient-to-b max-md:bg-none from-white/20 to-transparent lg:backdrop-blur-md xl:backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300">
              <div>
                <ModeToggle />
              </div>
              {/* Enhanced separator line */}
              {/* Enhanced menu icon */}
              <DropdownMenuTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:bg-white/20 size-10 lg:size-11 xl:size-12 rounded-r-xl">
                <CiMenuBurger className=" max-md:size-5 size-8 text-white hover:text-gray-200 text-xl lg:text-2xl xl:text-2xl transition-all duration-300 " />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
            </div>
            <DropdownMenuContent className="bg-white/95 hover:bg-[#E1C5A0] backdrop-blur-md border border-white/20 shadow-2xl rounded-xl lg:mt-3 xl:mt-3 min-w-[150px] lg:min-w-[200px] " align="end">
              <DropdownMenuItem className="text-gray-800 hover:text-black hover:bg-gray-100/80 rounded-lg  text-base lg:text-lg font-medium transition-all duration-300  cursor-pointer" onClick={() => console.log("Home clicked")}>
               Home
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-800 hover:text-black hover:bg-gray-100/80 rounded-lg  text-base lg:text-lg font-medium transition-all duration-300  cursor-pointer" onClick={() => console.log("About clicked")}>
                  About
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-800 hover:text-black hover:bg-gray-100/80 rounded-lg text-base lg:text-lg font-medium transition-all duration-300  cursor-pointer" onClick={() => console.log("Services clicked")}>
                  Services
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-800 hover:text-black hover:bg-gray-100/80 rounded-lg text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer" onClick={() => console.log("Contact clicked")}>
                  Contact
              </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    </div>
  )
}

export default Header