import React from 'react'
import Baslogo from './Baslogo.png'

const Testimonials = () => {
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-12'>
      <div className='flex-col justify-end bg-[#561D0A] rounded-2xl font-interTight px-4 sm:px-6 py-7'>
        <div className='w-full max-w-screen flex flex-col items-center lg:items-center'>
          <h1 className='text-7xl sm:text-6xl md:text-7xl lg:text-[164px] text-[#F7F6E9] py-6 font-medium tracking-[-0.04em] font-interTight leading-[1.00]'>
            Testimonials
          </h1>
        </div>

        <div className='py-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-4'>
            <div className='py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between rounded-xl border hover:bg-[#F7F6E9] border-white bg-[#FFFEF2]'>
              <div className='space-y-10 sm:space-y-16 lg:space-y-20'>
                <div>
                  <h3 className='text-base sm:text-lg lg:text-[20px] tracking-[-0.03em] font-medium text-[#454545b6]'>Bastion HMO</h3>
                  <h3 className='text-xl sm:text-2xl lg:text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A]'>Dotun Oyewole</h3>
                </div>
              </div>
              <img src={Baslogo} alt="Logo" className="w-full max-w-[150px] sm:max-w-[200px] aspect-auto mt-4"/>
            </div>

            <div className='py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between rounded-xl border border-white bg-[#FFFEF2] md:col-span-2'>
              <div className='space-y-10 sm:space-y-16 lg:space-y-20'>
                <div>
                  <p className='text-sm sm:text-base lg:text-lg'>" Over 200 successful projects completed, showcasing our extensive experience and portfolio, AWIP was the perfect choice to go with, there was hardly any bidding as they were miles ahead of even the number 2, working with them and their attention to details is too impressive. "</p>
                </div>

                <h2 className='flex justify-center text-6xl sm:text-6xl md:text-8xl lg:text-[134px] text-[#d4d3c3] lg:tracking-[-0.05em] font-semibold'>"Attention"</h2>
              </div>
            </div>
          </div>

          <div className='flex justify-center w-full'>
            <div className='font-medium text-base sm:text-lg md:text-xl lg:text-[24px] text-[#FFFEF2] w-full sm:w-[80%] md:w-[70%] lg:w-[60%] leading-tight pt-12 sm:pt-16 md:pt-20 lg:pt-24 text-center'>
              To create unique, functional, and sustainable living spaces that enhance the quality of life for our clients. We aim to blend creativity with practicality, delivering designs that are both aesthetically pleasing and deeply personal.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials