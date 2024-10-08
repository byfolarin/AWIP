import React from 'react'
import { motion } from 'framer-motion'
import ImageScroll from '../Body/ImageScroll'
import Marquee from "react-fast-marquee";
import Footer from '../Body/Footer'


const ProjectsSpace = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className='overflow-hidden font-interTight pt-24 bg-[#FFFEF2] '
    >
      <div className="overflow-hidden">
        <Marquee className="py-4 sm:py-6 md:px-8 lg:py-12" speed={50} gradientWidth={50}>
          <h1 className='text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[174px] font-medium text-[#561D0A] tracking-[-0.05em] font-interTight leading-[1.00] whitespace-nowrap pr-4'>
           - Projects - Works - Portfolio
          </h1>
        </Marquee>
      </div>
  

      <div className='px-4 sm:px-6 md:px-8 lg:px-12'>
      <ImageScroll />
      </div>
   
      {/* <ProjectBody /> */}

      {/* <ImgScro/> */}
      {/* <ProjectsComponent /> */}
      <Footer />
    </motion.div>
  )
}

export default ProjectsSpace