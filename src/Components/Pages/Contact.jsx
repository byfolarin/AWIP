import React from 'react'
import AWIP2 from '../Body/Images/AWIP2.jpg'

const Contact = () => {
  return (
    <div className='flex'>
      <div className='w-[50%] pt-32'>
        <h1 className='text-[164px] text-[#000000] tracking-[-0.05em]  font-interTight leading-[1.00]'>
          Let's Discuss
        </h1>

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
      
      <div className='w-[50%] h-screen bg-slate-400 sticky top-0'>
        
      <img src={AWIP2}  alt=""  className='w-full h-full object-cover'/>
      </div>
    </div>
  )
}

export default Contact
