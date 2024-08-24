import React from 'react'
import ImageDetails from './ImageDetails'

const Projects = () => {
  return (
    <div className='my-6 sm:my-8 md:my-10 lg:my-12 px-4 sm:px-6 w-full font-interTight'>
      <h1 className='text-[48px] sm:text-[72px] md:text-[96px] lg:text-[164px] 
                     text-[#561D0A] flex justify-center 
                     font-medium tracking-[-0.04em] leading-[1.00]
                     mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
        Projects
      </h1>

      <div>
        <ImageDetails />
      </div> 
    </div>
  )
}

export default Projects