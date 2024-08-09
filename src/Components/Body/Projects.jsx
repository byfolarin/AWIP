import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectsComponent from './ProjectsComponent'
import AWIP1 from './AWIP1.jpg'
import AWIP2 from './AWIP2.jpg'
import AWIP3 from './AWIP3.jpg'
import AWIP4 from './AWIP4.jpg'
import ImageScroll from './ImageScroll'

const Projects = () => {


  return (
    <div className='my-12 overflow-hidden'>
      <h1 className='text-[160px] my-[64px] text-[#561D0A] mx-4 font-extralight tracking-[-0.11em]
       font-interTight leading-[1.00]'>PROJECTS</h1>


       {/* <div className='flex gap-5'>
        <div className='w-[450px] bg-slate-300 h-[450px]'></div>
        <div className='w-[450px] bg-slate-300 h-[450px]'></div>
        <div className='w-[450px] bg-slate-300 h-[450px]'></div>
        <div className='w-[450px] bg-slate-300 h-[450px]'></div>
        <div className='w-[450px] bg-slate-300 h-[450px]'></div>
       </div> */}

       <ImageScroll />

       {/* <ProjectsComponent /> */}
    </div>
  )
}

export default Projects