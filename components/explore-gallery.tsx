import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1501706362039-c06b2d715385?auto=format&fit=crop&w=600&q=80', // Lion
  'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80', // Maasai
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80', // Camel
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', // Family beach
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', // Elephants
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', // Kilimanjaro sign
  'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80', // Turtles
]

const ExploreGallery = () => {
  return (
    <section className="max-w-[90rem] mx-auto bg-[#01293C] max-md:py-16 py-26 px-4 w-full">
      <div className="flex flex-col gap-4">
        {/* First row: 4 images */}
        <div className="flex flex-wrap gap-4 justify-center">
          {images.slice(0, 4).map((src, idx) => (
            <div
              key={idx}
              className="aspect-square w-full md:w-1/4 max-w-[300px] auto flex-shrink-0 overflow-hidden px-4 md:px-0"
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
        <div className="flex flex-wrap gap-4 justify-center">
          {images.slice(4, 7).map((src, idx) => (
            <div
              key={idx}
              className="aspect-square w-full md:w-1/4 max-w-[300px] flex-shrink-0 overflow-hidden px-4 md:px-0"
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