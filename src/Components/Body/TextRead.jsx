import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TextRead = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.5 })

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: 'easeInOut'
      } 
    }
  }

  const serviceCards = [
    { title: "Project Completed", description: "Over 200 successful projects completed, showcasing our extensive experience and portfolio.", number: "200+" },
    { title: "Interior Design", description: "Transforming spaces with innovative and personalized interior design solutions.", number: "150+" },
    { title: "Space Survey", description: "Comprehensive space analysis to optimize functionality and aesthetics.", number: "300+" },
    { title: "3D Visualization", description: "Bringing ideas to life with stunning 3D renderings and walkthroughs.", number: "250+" },
    { title: "Renovation", description: "Expertly updating and modernizing existing spaces for enhanced living and working.", number: "180+" },
    { title: "Consultation", description: "Professional advice and guidance for all your design and architectural needs.", number: "400+" }
  ]

  return (
    <div className='bg-[#F7F6E9] font-interTight px-2 sm:px-6 py-8 sm:py-12'>
      <div className='w-full max-w-screen flex flex-col items-center lg:items-center overflow-hidden'>
        <motion.h1 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
          className='text-7xl sm:text-6xl md:text-7xl lg:text-[164px] text-[#561D0A] font-medium tracking-[-0.04em] font-interTight leading-[1.00]'
        >
          Services
        </motion.h1>
      </div>

      <div className='py-8 sm:py-12 md:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-4'>
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className='py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between rounded-xl hover:bg-[#F7F6E9] border border-white bg-[#FFFEF2]'
            >
              <div className='space-y-10 sm:space-y-16 lg:space-y-20'>
                <div>
                  <h3 className='text-2xl sm:text-3xl lg:text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A]'>{card.title}</h3>
                  <p className='mt-2 text-sm sm:text-base'>{card.description}</p>
                </div>
                <h2 className='text-6xl sm:text-8xl lg:text-[134px] text-[#561D0A] lg:tracking-[-0.05em] font-semibold'>
                  {card.number.split('+')[0]}<span className='text-black'>+</span>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TextRead