import React from 'react'
import AWIP4 from './AWIP4.jpg'
import AWIP2 from './AWIP2.jpg'

const Services = () => {
  return (
    <div>
        <h1 className='flex text-[128px] font-interTight text-[#561D0A] tracking-[-0.07em] font-light'>SERVICES</h1>

<div className='w-full flex gap-4'>
      <div className=' w-[50%] bg-[#343434] h-[750px]'>            
          <img src={AWIP4}  alt=""  className='w-full h-full object-cover'/>
          </div>
          <div className=' w-[50%] bg-[#343434] h-[450px]'>
          <img src={AWIP2}  alt=""  className='w-full h-full object-cover'/>
      </div>
</div>
    </div>
  )
}

export default Services
