import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ImageScroll from '../Body/ImageScroll'
import AWIP4 from '../Body/Images/AWIP4.jpg'
import AWIP2 from '../Body/Images/AWIP2.jpg'
import Marquee from "react-fast-marquee";
import ProjectBody from '../Body/ProjectBody'


const ProjectsSpace = () => {
 

  return (
    <div className='overflow-hidden font-interTight bg-[#FFFEF2] px-6'>

      <Marquee>
      <h1 className='text-[174px] font-medium my-32 text-[#561D0A]  tracking-[-0.05em] font-interTight leading-[1.00]'>
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