import React from 'react'

const BannerCancel = () => {
  return (
    <section className="max-w-full mx-auto  bg-[#E1C5A0] py-14 px-4 w-full">
      <div className='max-w-[90rem] mx-auto'>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-[#01293C] leading-tight mb-4">
           free cancellation<br className="hidden md:block" />
        </h2>
        <p className="text-base md:text-lg text-[#01293C] font-jost max-w-xl mx-auto">
          Use Reserve Now & Pay Later to secure the activities you don't want to miss without being locked in.
        </p>
      </div>
      </div>
    </section>
  )
}

export default BannerCancel