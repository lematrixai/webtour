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

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 hover:bg-white/20 hover:scale-110 size-10 lg:size-11 xl:size-12 rounded-lg hover:shadow-lg"
    >
      <Sun className="size-11 max-md:size-5 text-white hover:text-yellow-300 h-[1.4rem] w-[1.4rem] lg:h-[1.6rem] lg:w-[1.6rem] xl:h-[1.8rem] xl:w-[1.8rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 " />
      <Moon className="absolute size-11 max-md:size-5 text-white hover:text-blue-300 h-[1.4rem] w-[1.4rem] lg:h-[1.6rem] lg:w-[1.6rem] xl:h-[1.8rem] xl:w-[1.8rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 " />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
