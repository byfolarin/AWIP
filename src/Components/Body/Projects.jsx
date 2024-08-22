import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ImageScroll from './ImageScroll'

const Projects = () => {
 

  return (
    <div className='my-12 px-6 w-full font-interTight '>
      <h1 className='text-[164px]  text-[#561D0A] flex  justify-center font-medium tracking-[-0.04em] font-interTight leading-[1.00]'>
        Projects
      </h1>
       


      <div>
      <ImageScroll />
      </div> 



      {/* <ProjectsComponent /> */}
    </div>
  )
}

export default Projects