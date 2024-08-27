import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AWIP4 from './Images/AWIP4.jpg'

const Services = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['-30%', '30%'])

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div ref={ref} className='px-4 sm:px-6 md:px-8 lg:px-12'>
      <div className='w-full flex flex-col lg:flex-row gap-4 relative z-50 mb-12'>
        <motion.div 
          className='w-full bg-[#343434] rounded-xl h-[350px] sm:h-[450px] md:h-[550px] lg:h-[750px] overflow-hidden'
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >            
          <motion.div style={{ y: y1, height: '160%', width: '100%' }}>
            <img src={AWIP4} alt="" className='w-full h-full object-cover object-center'/>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services