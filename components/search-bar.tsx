"use client"

import { useEffect, useRef, useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

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

const PLACEHOLDER_PHRASES = [
  "Search for a Place",
  "Search for an Activity",
  "Find your next adventure",
  "Discover new destinations"
]

const FloatingLabelInput = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  inputClass = "",
  labelClass = "",
  valueLabelClass = "",
  ...props
}: {
  id: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  inputClass?: string
  labelClass?: string
  valueLabelClass?: string
  [key: string]: any
}) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder || " "}
        className={`peer block w-full bg-transparent text-[#01293C] placeholder-transparent border-0 border-b-2 border-[#01293C]/10 focus:border-[#01293C] focus:outline-none focus:ring-0 transition-all duration-300 px-0 py-2 ${inputClass}`}
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute left-0 top-2 pointer-events-none transition-all duration-300 origin-left
          ${isFocused || value ? `${valueLabelClass} -top-4 text-[#01293C] font-bold` : "text-[#01293C]/80 text-base"}
          ${labelClass}
        `}
      >
        {value ? value : label}
      </label>
      {/* Animated underline */}
      <span className={`absolute left-0 bottom-0 w-full bg-[#01293C] scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 origin-left rounded-full`} />
    </div>
  )
}

const SearchBar = () => {
  // Ref for entrance animation
  const containerRef = useRef<HTMLDivElement>(null)
  // Animated placeholder
  const placeholder = usePlaceholderTyper(PLACEHOLDER_PHRASES)
  // Controlled input states for floating label
  const [whereValue, setWhereValue] = useState("")
  const [whenValue, setWhenValue] = useState("")

  // Entrance animation on mount
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.classList.remove("opacity-0", "translate-y-8")
      containerRef.current.classList.add("opacity-100", "translate-y-0")
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className=" max-w-full px-2 sm:px-6 md:px-10 mx-auto transition-all duration-700 opacity-0 translate-y-8"
    >
      <div className="flex flex-col sm:flex-row items-stretch w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto bg-[#E1C5A0]/90 backdrop-blur-xl rounded-2xl sm:rounded-full shadow-2xl border border-[#E1C5A0]/40 overflow-hidden">
        {/* Where to section */}
        <div className="flex-1 px-4 py-3 sm:px-6 sm:py-6 flex flex-col justify-center">
          <FloatingLabelInput
            id="search-place"
            label="Where to?"
            value={whereValue}
            onChange={e => setWhereValue(e.target.value)}
            placeholder={placeholder}
            inputClass="text-2xl pb-2"
            valueLabelClass="text-2xl"
            aria-label="Search for a place or activity"
            autoComplete="off"
          />
        </div>

        {/* Divider - hidden on mobile */}
        <div className="hidden sm:block w-px bg-[#E1C5A0] my-4 transition-all duration-500 group-hover:bg-[#01293C]" />

        {/* Mobile divider */}
        {/* <div className="block sm:hidden h-px bg-[#E1C5A0] mx-4 transition-all duration-500 group-hover:bg-[#01293C]" /> */}

        {/* When section */}
        <div className="flex-1 px-4 py-3 sm:px-6 sm:py-6 flex flex-col justify-center">
          <FloatingLabelInput
            id="search-date"
            label="When?"
            value={whenValue}
            onChange={e => setWhenValue(e.target.value)}
            placeholder="Select dates"
            inputClass="text-xl pb-2"
            valueLabelClass="text-xl"
            aria-label="Select dates"
          />
        </div>

        {/* Search button */}
        <div className="items-center justify-center p-2 sm:p-6 flex">
          <Button
            size="icon"
            className="w-full sm:w-12 md:w-14 h-12 sm:h-12 md:h-14 rounded-full bg-[#01293C] hover:bg-[#021a25] transition-transform duration-300 flex items-center justify-center gap-1 mt-2 sm:mt-0 active:scale-95 focus:scale-105 shadow-xl hover:shadow-2xl focus:ring-4 focus:ring-[#E1C5A0]/40"
            aria-label="Search"
          >
            <div className="flex items-center justify-center gap-2">
              <Search className="h-5 w-5 sm:h-6 sm:w-6 text-[#E1C5A0] mx-auto transition-transform duration-300 group-hover:scale-110 drop-shadow" />
              <span className="max-md:flex hidden text-[#E1C5A0] font-semibold text-base sm:hidden">Search</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar