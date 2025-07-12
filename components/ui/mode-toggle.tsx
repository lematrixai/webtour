"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
    
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ModeToggleProps {
  scrolled?: boolean;
}

export function ModeToggle({ scrolled = false }: ModeToggleProps) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const iconColor = scrolled 
    ? "text-gray-700 dark:text-white hover:text-[#E1C5A0]" 
    : "text-gray-700 dark:text-white hover:text-[#E1C5A0]"

  return (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 hover:bg-white/20 hover:scale-110 rounded-lg hover:shadow-lg"
    >
      
      <Sun className={`w-7 h-7 ${iconColor} rotate-0 scale-100 transition-all duration-300 dark:-rotate-90`} />
      <Moon className={`absolute w-7 h-7 ${iconColor} rotate-90 scale-0 transition-all duration-300 dark:rotate-0`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
