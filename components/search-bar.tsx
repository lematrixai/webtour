"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const SearchBar = () => {
  return (
    <div className="max-w-[90rem] px-2 sm:px-6 md:px-10 mx-auto py-4 bg-[#01293C]">
      <div className="flex flex-col sm:flex-row items-stretch w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto bg-white rounded-2xl sm:rounded-full shadow-lg border border-gray-200 overflow-hidden">
        {/* Where to section */}
        <div className="flex-1 px-4 py-3 sm:px-6 sm:py-6">
          <div className="space-y-1">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900">Where to?</h3>
            <input
              type="text"
              placeholder="Search for a Place or Activity"
              className="w-full text-xs sm:text-sm text-gray-500 placeholder-gray-400 bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Divider - hidden on mobile */}
        <div className="hidden sm:block w-px bg-gray-200 my-4"></div>

        {/* Mobile divider */}
        <div className="block sm:hidden h-px bg-gray-200 mx-4"></div>

        {/* When section */}
        <div className="flex-1 px-4 py-3 sm:px-6 sm:py-6">
          <div className="space-y-1">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900">When?</h3>
            <input
              type="text"
              placeholder="Select dates"
              className="w-full text-xs sm:text-sm text-gray-500 placeholder-gray-400 bg-transparent border-none outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Search button */}
        <div className="items-center justify-center p-2 sm:p-3">
          <Button
            size="icon"
            className="w-full sm:w-12 md:w-14 h-12 sm:h-12 md:h-14 rounded-full bg-[#01293C] hover:bg-[#021a25] transition-colors flex items-center justify-center gap-1 mt-2 sm:mt-0"
          >
            <div className="flex items-center justify-center gap-2">

            <Search className="h-5 w-5 sm:h-6 sm:w-6 text-white mx-auto" />
            <span className="max-md:flex hidden text-white font-semibold text-base sm:hidden">Search</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar