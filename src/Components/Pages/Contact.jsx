import React from 'react'
import AWIP2 from '../Body/Images/AWIP2.jpg'
import Marquee from 'react-fast-marquee'

const Contact = () => {
  return (
    <div >
      <div className='pt-32 bg-[#FFFEF2]'>

      <Marquee className="my-8 sm:my-12 md:my-16 lg:my-24">
        <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-[174px] font-medium text-[#561D0A] tracking-[-0.05em] font-interTight leading-[1.00]'>
         - Contact - Let's Talk - Work with Us
        </h1>
      </Marquee>

        <div className='py-8'>
          <hr />
          <h2 className='text-[24px] py-8 px-4 font-interTight font-light cursor-pointer'>Hello@awip.com.ng</h2>
          <hr />
          <h2 className='text-[24px] py-8 px-4 font-interTight font-light cursor-pointer'>
            +234 803 3927 062 <br />
            +1 979 7090 732 <br />
            +234 809 230 5980
          </h2>
          <hr />
          <h2 className='text-[24px] py-8 px-4 font-interTight font-light cursor-pointer'>12A, Alake Onileere Crescent, Gbagada, Lagos</h2>
    
        </div>
        
        {/* Add some extra content to ensure scrolling */}
        <div className='h-[1000px]'></div>
      </div>
      
      <div className='h-screen bg-slate-400 sticky top-0'>
        
      <img src={AWIP2}  alt=""  className='w-full h-full object-cover'/>
      </div>
    </div>
  )
}

export default Contact
