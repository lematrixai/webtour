"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
    
import { Button } from "@/components/ui/button"

interface ModeToggleProps {
  scrolled?: boolean;
}

export function ModeToggle({ scrolled = false }: ModeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // Keep icon color consistent regardless of scroll state
  const iconColor = "text-black dark:text-white hover:text-[#E1C5A0]"

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <Button 
        variant="ghost" 
        size="icon"
        className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 hover:bg-white/20 hover:scale-110 rounded-lg hover:shadow-lg"
      >
        <Sun className={`w-7 h-7 ${iconColor} transition-all duration-300 rotate-0 scale-100`} />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 hover:bg-white/20 hover:scale-110 rounded-lg hover:shadow-lg"
    >
      <Sun className={`w-7 h-7 ${iconColor} transition-all duration-300 ${theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
      <Moon className={`absolute w-7 h-7 ${iconColor} transition-all duration-300 ${theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
