import React from 'react'
import AWIP2 from './Images/AWIP2.jpg'
import AWIP4 from './Images/AWIP4.jpg'

const Services = () => {
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-12'>
      <div className='w-full flex flex-col lg:flex-row gap-4 relative z-50 mb-12'>
        <div className='w-full lg:w-1/2 bg-[#343434] rounded-xl h-[350px] sm:h-[450px] md:h-[550px] lg:h-[750px]'>            
          <img src={AWIP4} alt="" className='w-full rounded-xl h-full object-cover'/>
        </div>

        <div className='flex-col w-full lg:w-1/2'>
          <div className='rounded-xl bg-[#343434] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px]'>
            <img src={AWIP2} alt="" className='w-full h-full rounded-xl object-cover'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services