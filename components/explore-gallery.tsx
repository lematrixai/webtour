"use client"
import React, { useState, useEffect } from 'react'

const images = [
  'https://images.unsplash.com/photo-1501706362039-c06b2d715385?auto=format&fit=crop&w=600&q=80', // Lion
  'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80', // Maasai
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80', // Camel
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', // Family beach
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', // Elephants
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', // Kilimanjaro sign
  'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80', // Turtles
]

// Inline Skeleton component (in case the reusable one is not available)
const Skeleton = ({ width = "100%", height = 200, rounded = "rounded-xl", className = "" }) => (
  <div
    className={`bg-gray-300 dark:bg-gray-700 animate-pulse ${rounded} ${className}`}
    style={{ width, height }}
  />
);

const ExploreGallery = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-w-[90rem] mx-auto bg-[#01293C] max-md:py-16 py-26 px-4 w-full">
      <div className="flex flex-col gap-4">
        {/* First row: 4 images */}
        <div className="flex flex-wrap-reverse gap-4 justify-center">
          {loading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={"skeleton-1-" + idx}
                  className="aspect-square w-full md:w-1/4 max-w-[300px] max-md:max-w-full flex-shrink-0 overflow-hidden px-4 md:px-0"
                >
                  <Skeleton height={300} />
                </div>
              ))
            : images.slice(0, 4).map((src, idx) => (
                <div
                  key={idx}
                  className="aspect-square w-full md:w-1/4 max-w-[300px] max-md:max-w-full flex-shrink-0 overflow-hidden px-4 md:px-0"
                >
                  <img
                    src={src}
                    alt={`Gallery image ${idx + 1}`}
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                </div>
              ))}
        </div>
        {/* Second row: 3 images, centered */}
        <div className="flex flex-wrap-reverse gap-4 justify-center">
          {loading
            ? Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={"skeleton-2-" + idx}
                  className="aspect-square w-full md:w-1/4 max-md:max-w-full flex-shrink-0 overflow-hidden px-4 md:px-0"
                >
                  <Skeleton height={300} />
                </div>
              ))
            : images.slice(4, 7).map((src, idx) => (
                <div
                  key={idx}
                  className="aspect-square w-full md:w-1/4 max-md:max-w-full flex-shrink-0 overflow-hidden px-4 md:px-0"
                >
                  <img
                    src={src}
                    alt={`Gallery image ${idx + 5}`}
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default ExploreGallery