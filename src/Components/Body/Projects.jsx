import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ImageScroll from './ImageScroll'

const Projects = () => {
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
    <div className='my-12 overflow-hidden'>
      <motion.h1 
        ref={titleRef}
        className='text-[160px] my-[64px] text-[#561D0A] mx-4 font-extralight tracking-[-0.11em] font-interTight leading-[1.00]'
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
        variants={titleVariants}
      >
        PROJECTS
      </motion.h1>
       
      <motion.hr 
        ref={lineRef}
        className='mx-6 #561D0A'
        initial="hidden"
        animate={isLineInView ? "visible" : "hidden"}
        variants={lineVariants}
        style={{ originX: 0 }}
      />

      <ImageScroll />

      {/* <ProjectsComponent /> */}
    </div>
  )
}

export default Projects