import React from 'react'
import { motion } from 'framer-motion'
import ImageScroll from '../Body/ImageScroll'
import Marquee from "react-fast-marquee";

const ProjectsSpace = () => {
  return (
    <div className='overflow-hidden font-interTight bg-[#FFFEF2] px-4 sm:px-6 md:px-8 lg:px-12'>
      <Marquee className="my-8 sm:my-12 md:my-16 lg:my-24">
        <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-[174px] font-medium text-[#561D0A] tracking-[-0.05em] font-interTight leading-[1.00]'>
         - Projects - Works - Portfolio
        </h1>
      </Marquee>

      <ImageScroll />
      {/* <ProjectBody /> */}

      {/* <ImgScro/> */}
      {/* <ProjectsComponent /> */}
    </div>
  )
}

export default ProjectsSpace