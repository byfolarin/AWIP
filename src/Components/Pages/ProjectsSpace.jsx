import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ImgScro from '../Body/ImgScro'

const ProjectsSpace = () => {
 

  return (
    <div className='my-12 overflow-hidden   mx-4'>
      <h1 className='text-[160px] text-[#561D0A] font-thin tracking-[-0.11em] font-interTight leading-[1.00]'>
        Selected Projects
      </h1>

      <p className='w-2/3 mx-4 py-2 text-[#6464649c]'>
      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to <br /> demonstrate the visual form  of a document or a typeface without relying on meaningful <br /> content. 
      </p>
       
      <hr className='mx-4'/>


      <ImgScro/>



      {/* <ProjectsComponent /> */}
    </div>
  )
}

export default ProjectsSpace