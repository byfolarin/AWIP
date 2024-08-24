import React from 'react';
import myvid from './Images/Hvideo.mp4'

const Header = () => {
  return (
    <div className='px-2 sm:px-6 md:px-8 lg:px-12'>
      <div className='flex items-center pt-24 sm:pt-24 md:pt-24 lg:pt-24'>
        <div>
          <h1 className='text-7xl sm:text-7xl md:text-[64px] lg:text-[145px] 
                         tracking-[-0.05em] leading-[1.00] 
                         my-6 sm:my-8 md:my-10 lg:my-12 
                         text-[#561D0A] 
                         font-medium font-interTight'>
            Architecture, Work In Progress...
          </h1>       
        </div>
      </div>

      <div className='rounded-xl'>
        <div className='aspect-w-16 aspect-h-9'>
          <video className="w-full h-full object-cover rounded-xl" autoPlay muted loop playsInline>
            <source src={myvid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default Header