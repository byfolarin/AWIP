import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ImgScro from '../Body/ImgScro'

const ProjectsSpace = () => {
  const titleRef = useRef(null)
  const lineRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 })
  const isLineInView = useInView(lineRef, { once: true, amount: 0.5 })

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.9, ease: 'easeInOut' } }
  }

  return (
    <div className='my-12 overflow-hidden   mx-4'>
      <motion.h1 
        ref={titleRef}
        className='text-[160px] text-[#561D0A] font-thin tracking-[-0.11em] font-interTight leading-[1.00]'
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
        variants={titleVariants}
      >
        PROJECTS
      </motion.h1>

      <p className='w-2/3 mx-4 py-2 text-[#6464649c]'>
      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to <br /> demonstrate the visual form  of a document or a typeface without relying on meaningful <br /> content. 
      </p>
       
      <motion.hr
          ref={lineRef}
          className='mx-4'  // Assuming you don't want a custom class for background color
          style={{
            height: '2px',  backgroundColor: 'grey',  }}
          initial="hidden"
          animate={isLineInView ? "visible" : "hidden"}
          variants={lineVariants}
        />


      <ImgScro/>



      {/* <ProjectsComponent /> */}
    </div>
  )
}

export default ProjectsSpace