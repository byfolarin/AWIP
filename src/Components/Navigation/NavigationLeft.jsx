import React, { useState } from 'react'


const NavigationLeft = ({isHovered}) => {

 
  return (
    <div className=' bg-[#a09d8d] w-1/3 h-screen max-h-none'>

      <div className='w-full bg-[#3c3b34] h-4/5 object-contain'>
        <img src={isHovered} alt="Real Estate Image" className="object-cover w-full h-full" />
     </div>

      <div className='full bg-[#561D0A] h-1/5 p-2'>

      <p className='text-[12px] font-mono text-[#FFFDF0]'>
            One more glance at the clinic website, elegant and balanced,
             with neat content arrangement, eye-pleasing color palette, and smooth motion.
      </p>

      <p className='text-[12px] font-mono mt-4 text-[#FFFDF0]'>
        Copyright 2024. AWIP
      </p>
        
        </div>      

    </div>



  )
}

export default NavigationLeft
