import React from 'react'

const NavigationLeft = ({isHovered}) => {
  return (
    <div className='hidden lg:block lg:w-[350px] h-screen'>
        <div className='bg-[#a09d8d] h-full flex flex-col'>
          <div className='w-full bg-[#3c3b34] flex-grow'>
            <img src={isHovered} alt="Real Estate Image" className="object-cover w-full h-full" />
          </div>
          <div className='bg-[#561D0A] p-2 h-1/5'>
            <p className='text-[12px] font-mono text-[#FFFDF0]'>
              One more glance at the clinic website, elegant and balanced,
              with neat content arrangement, eye-pleasing color palette, and smooth motion.
            </p>
            <p className='text-[12px] font-mono mt-4 text-[#FFFDF0]'>
              Copyright 2024. AWIP
            </p>
          </div>      
        </div>
    </div>
  )
}

export default NavigationLeft