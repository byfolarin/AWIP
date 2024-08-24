import React from 'react'
import AWIP2 from './Images/AWIP2.jpg'

const ImageDetails = () => {
  return (
    <div className="px-2 sm:px-6 md:px-8 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 py-6 sm:py-8 md:py-10">
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-[#d7d7d7] rounded-xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <img src={AWIP2} alt="Afya Care" className='w-full rounded-xl h-full object-cover'/>
          </div>
          <h2 className='text-[#000000] text-2xl sm:text-3xl md:text-[32px] leading-tight font-interTight'>Afya Care</h2>
        </div>

        <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
          <div className="bg-[#F7F6E9] rounded-xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <img src={AWIP2} alt="Verraki Partners" className='w-full rounded-xl h-full object-cover'/>
          </div>
          <h2 className='text-[#000000] text-2xl sm:text-3xl md:text-[32px] leading-tight font-interTight'>Verraki Partners</h2>
        </div>
      </div>
    </div>
  )
}

export default ImageDetails