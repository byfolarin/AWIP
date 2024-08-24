import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#561D0A] rounded-xl mt-9 font-interTight p-4 sm:p-6 md:p-8 lg:p-12'>
      
      <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-0'>
        <div className="social-media grid grid-cols-2 sm:grid-cols-3 w-full lg:w-[50%] gap-2 text-black">
          {['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'YouTube', 'TikTok'].map((item, index) => (
            <div key={index} className='px-2 sm:px-4 py-3 sm:py-6 rounded-xl bg-slate-200 text-sm sm:text-base'>{item}</div>
          ))}
        </div>
    
        <div className='text-white mt-8 lg:mt-0'>
          <p className='font-semibold mb-4'>Menu</p>
          <div className='grid grid-cols-2 sm:grid-cols-1 gap-2'>
            {['Home', 'Projects', 'About', 'Contact'].map((item, index) => (
              <div key={index} className='text-sm sm:text-base'>{item}</div>
            ))}
          </div>
        </div>
      </div>

      <h1 className='text-[64px] sm:text-[128px] md:text-[192px] lg:text-[320px] font-semibold text-[#F7F6E9] flex justify-center tracking-tighter mx-2 sm:mx-4 md:mx-6 leading-none mt-8 lg:mt-0'>AWIP</h1>

      <div className="social-media grid grid-cols-2 sm:grid-cols-4 border-t py-5 px-4 sm:px-10 text-white text-sm sm:text-base mt-8">
        <div>Instagram</div>
        <div>Twitter</div>
        <div>Facebook</div>
        <div>LinkedIn</div>
      </div>
    </div>
  )
}

export default Footer