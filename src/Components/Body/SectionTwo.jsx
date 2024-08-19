import React from 'react'

import AWIP4 from '././Images/AWIP4.jpg'

const SectionTwo = () => {
  return (
    <div>
       <div className='w-full max-w-screen mt-[64px] relative'>

          <div className='bg-[#343434] relative h-[700px]'>
            <img src={AWIP4}  alt=""  className='w-full h-full object-cover'/>
            <div className="absolute inset-0 bg-black opacity-40"></div> 
          </div>

          <p className='text-[white] font-interTight leading-7 italic absolute text-[18px] top-32 w-[48%] pl-4 lg:pl-32'><span className='text-[32px]'>"</span>The way forward is to make a way, design, sketch anything that transcends design and time <span className='text-[32px]'>"</span></p>

      </div>
    </div>
  )
}

export default SectionTwo
