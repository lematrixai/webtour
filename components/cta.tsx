import React from 'react'
import Image from 'next/image'

const safariImg =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80' // Unsplash safari landscape

const CTA = () => {
  return (
    <section
      id="about"
      className="relative w-full max-w-7xl mx-auto overflow-hidden bg-[#003A56] flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-30 md:py-26 my-12 shadow-xl bg-center bg-cover"
      style={{
        backgroundImage: `url('/cta-image.png')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Left: Text */}
      <div className="z-10 flex-1 flex flex-col items-start justify-center text-white max-w-lg md:pl-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight drop-shadow-lg">
          Check Our Exclusive<br />Tour Offer
        </h2>
        <p className="text-lg md:text-2xl font-medium mb-8 drop-shadow-md">
          Book your next adventure with up to <span className="text-[#E1C5A0] font-bold">50% off</span>!
        </p>
        <a
          href="#"
          className="inline-block bg-[#E1C5A0] text-[#003A56] font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-[#f5e2c7] transition-colors duration-200"
        >
          Book Now
        </a>
      </div>

      {/* Right: Safari Image with Offer Badge */}
      <div className="relative flex-1 flex items-center justify-center w-full md:w-auto mt-8 md:mt-0 min-w-[260px] md:ml-8 ml-4 ">
        <div className="relative w-full max-w-xl aspect-[2.5/1] rounded-full h-48 max-md:h-32 overflow-hidden shadow-2xl flex items-center justify-center">
          <Image
            src={safariImg}
            alt="Safari Tour"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Offer Badge - Centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#003A56] text-[#E1C5A0] rounded-full flex flex-col items-center justify-center px-6 py-4 max-md:px-6 max-md:py-3  shadow-xl border-4 border-[#E1C5A0]">
              <span className="text-sm font-medium">Up to</span>
              <span className="text-2xl md:text-3xl font-bold leading-none">50%</span>
              <span className="text-sm font-medium mt-1">Offer</span>
            </div>
          </div>
        </div>
      </div>
     

    </section>
  )
}

export default CTA