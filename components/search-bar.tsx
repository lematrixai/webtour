"use client"

import { useEffect, useRef, useState } from "react"
import { Search, MapPin, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// Custom hook for animated placeholder typing effect
function usePlaceholderTyper(phrases: string[], typingSpeed = 60, erasingSpeed = 30, delayBetween = 1200) {
  const [placeholder, setPlaceholder] = useState("")
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const currentPhrase = phrases[phraseIdx]

    if (typing) {
      if (placeholder.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setPlaceholder(currentPhrase.slice(0, placeholder.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => setTyping(false), delayBetween)
      }
    } else {
      if (placeholder.length > 0) {
        timeout = setTimeout(() => {
          setPlaceholder(currentPhrase.slice(0, placeholder.length - 1))
        }, erasingSpeed)
      } else {
        setTyping(true)
        setPhraseIdx((prev) => (prev + 1) % phrases.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [placeholder, typing, phraseIdx, phrases, typingSpeed, erasingSpeed, delayBetween])

  return placeholder
}

// Sequential animation hook for stunning placeholder cycling
function useSequentialPlaceholderAnimation() {
  const [currentPlaceholder, setCurrentPlaceholder] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const destinationPhrases = [
    "Where do you want to go?",
    "Search for destinations", 
    "Find your next adventure",
    "Discover amazing places",
    "Explore the world"
  ]

  const [sequenceIndex, setSequenceIndex] = useState(0)
  const currentPhrase = destinationPhrases[sequenceIndex]

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (currentPlaceholder.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setCurrentPlaceholder(currentPhrase.slice(0, currentPlaceholder.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (currentPlaceholder.length > 0) {
        timeout = setTimeout(() => {
          setCurrentPlaceholder(currentPhrase.slice(0, currentPlaceholder.length - 1))
        }, 50)
      } else {
        setIsTyping(true)
        setSequenceIndex((prev) => (prev + 1) % destinationPhrases.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentPlaceholder, isTyping, sequenceIndex, currentPhrase])

  return currentPlaceholder
}

// Simple typing animation hook for a single phrase
function useTypingAnimation(phrase: string, typingSpeed = 100, holdTime = 2000, erasingSpeed = 50) {
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (currentText.length < phrase.length) {
        timeout = setTimeout(() => {
          setCurrentText(phrase.slice(0, currentText.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, holdTime)
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(phrase.slice(0, currentText.length - 1))
        }, erasingSpeed)
      } else {
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, isTyping, phrase, typingSpeed, holdTime, erasingSpeed])

  return currentText
}

// Tour guide sequential typing animation
function useTourGuideAnimation() {
  const [currentField, setCurrentField] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isWaiting, setIsWaiting] = useState(false)

  const fieldPhrases = [
    "Where do you want to go?",
    "When do you want to travel?",
    "How many travelers?"
  ]

  const currentPhrase = fieldPhrases[currentField]

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isWaiting) {
      // Wait before moving to next field
      timeout = setTimeout(() => {
        setCurrentField((prev) => (prev + 1) % fieldPhrases.length)
        setCurrentText("")
        setIsTyping(true)
        setIsWaiting(false)
      }, 1000) // 1 second delay between fields
    } else if (isTyping) {
      if (currentText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1))
        }, 100) // Typing speed
      } else {
        // Finished typing, hold for reading
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000) // Hold for 2 seconds
      }
    } else {
      // Erasing
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length - 1))
        }, 50) // Fast erasing
      } else {
        // Finished erasing, wait before next field
        setIsWaiting(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, isTyping, isWaiting, currentField, currentPhrase])

  return { currentText, currentField }
}

const PLACEHOLDER_PHRASES = [
  "Where do you want to go?",
  "Search for destinations",
  "Find your next adventure",
  "Discover amazing places"
]

const ModernSearchInput = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  icon: Icon,
  type = "text",
  inputClass = "",
  ...props
}: {
  id: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  icon?: any
  type?: string
  inputClass?: string
  [key: string]: any
}) => {
  const [isFocused, setIsFocused] = useState(false)
  
  return (
    <div className="relative w-full">
      <div className="relative">
        {/* Icon */}
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <Icon className="w-5 h-5 text-gray-400" />
          </div>
        )}
        
        {/* Input */}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`block w-full bg-[#E1C5A0]/20 backdrop-blur-md text-[#01293C] placeholder-[#01293C]/60 border-2 border-[#01293C]/30 focus:border-[#01293C] focus:outline-none focus:ring-2 focus:ring-[#01293C]/30 transition-all duration-300 rounded-xl px-4 py-4 ${Icon ? 'pl-12' : 'pl-4'} ${inputClass}`}
          {...props}
        />
        
        {/* Label */}
        <label
          htmlFor={id}
          className={`absolute pointer-events-none transition-all duration-300 text-sm font-medium py-2
            ${isFocused || value 
              ? `text-[#01293C] -top-4 bg-[#E1C5A0]/90 px-2 rounded-md text-xs ${Icon ? 'left-12' : 'left-4'}` 
              : `text-[#01293C]/70 top-[0.05px] ${Icon ? 'left-12' : 'left-4'}`
            }
          `}
        >
          {label}
        </label>
      </div>
    </div>
  )
}

const SearchBar = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { currentText, currentField } = useTourGuideAnimation()
  const [whereValue, setWhereValue] = useState("")
  const [whenValue, setWhenValue] = useState("")
  const [guestsValue, setGuestsValue] = useState("")

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.classList.remove("opacity-0", "translate-y-8")
      containerRef.current.classList.add("opacity-100", "translate-y-0")
    }
  }, [])

  // Get placeholder for each field based on current tour position
  const getFieldPlaceholder = (fieldIndex: number) => {
    if (currentField === fieldIndex) {
      return currentText
    }
    return ""
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="relative">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#E1C5A0]/10 via-[#E1C5A0]/5 to-[#E1C5A0]/10 rounded-3xl blur-3xl" />
        
        {/* Main container */}
        <div className="relative bg-[#E1C5A0]/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#E1C5A0]/30 overflow-hidden">
          <div className="p-6 lg:p-8">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl text-ephesis lg:text-4xl font-bold text-[#01293C] mb-2">
                Find Your Perfect Adventure
              </h2>
              <p className="text-[#01293C]/80 text-dancing_script text-lg">
                Discover amazing destinations and create unforgettable memories
              </p>
            </motion.div>

            {/* Search form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
            >
              {/* Where */}
              <ModernSearchInput
                id="search-place"
                label="Destination"
                value={whereValue}
                onChange={e => setWhereValue(e.target.value)}
                placeholder={getFieldPlaceholder(0)}
                icon={MapPin}
                inputClass="text-base"
                aria-label="Search for a destination"
                autoComplete="off"
              />

              {/* When */}
              <ModernSearchInput
                id="search-date"
                label="When"
                value={whenValue}
                onChange={(e) => {
                  console.log('When input changed:', e.target.value);
                  setWhenValue(e.target.value);
                }}
                placeholder={getFieldPlaceholder(1)}
                icon={Calendar}
                inputClass="text-base"
                aria-label="Select travel dates"
              />

              {/* Guests */}
              <ModernSearchInput
                id="search-guests"
                label="Guests"
                value={guestsValue}
                onChange={(e) => {
                  console.log('Guests input changed:', e.target.value);
                  setGuestsValue(e.target.value);
                }}
                placeholder={getFieldPlaceholder(2)}
                icon={Users}
                inputClass="text-base"
                aria-label="Number of guests"
              />

              {/* Search button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-end"
              >
                <Button
                  size="icon"
                  className="w-full h-14 bg-gradient-to-r from-[#01293C] to-[#023A52] hover:from-[#023A52] hover:to-[#034B68] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-[#01293C]/40"
                  aria-label="Search"
                >
                  <div className="flex items-center gap-3">
                    <Search className="w-5 h-5" />
                    <span className="text-base font-medium">Search</span>
                  </div>
                </Button>
              </motion.div>
            </motion.div>

            {/* Popular searches */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <p className="text-sm text-[#01293C]/80 mb-3">Popular destinations:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Safari Tours', 'Beach Getaways', 'Mountain Adventures', 'City Breaks'].map((tag, index) => (
                  <motion.button
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-[#E1C5A0]/40 backdrop-blur-sm border border-[#E1C5A0]/60 rounded-full text-sm text-[#01293C] hover:text-[#01293C] hover:bg-[#E1C5A0]/60 hover:border-[#01293C]/30 transition-all duration-300"
                  >
                    {tag}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SearchBar