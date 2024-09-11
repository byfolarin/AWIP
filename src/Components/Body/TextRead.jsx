import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import densityMediumSvg from './density-medium.svg'
import linkedServicesSvg from './linked-services.svg'
import radioButtonUncheckedSvg from './radio-button-unchecked.svg'
import fullscreenSvg from './fullscreen.svg'
import filterSvg from './filter.svg'
import dynamicFormSvg from './dynamic-form.svg'

const TextRead = () => {
  const ref = useRef(null)
  const cardsRef = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.5 })
  const cardsInView = useInView(cardsRef, { once: true, threshold: 0.1 })

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: 'easeOut'
      } 
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6
      }
    }
  }

  const serviceCards = [
    { title: "Project Completed", description: "Over 200 successful projects completed, showcasing our extensive experience and portfolio.", icon: densityMediumSvg },
    { title: "Interior Design", description: "Transforming spaces with innovative and personalized interior design solutions.", icon: linkedServicesSvg },
    { title: "Space Survey", description: "Comprehensive space analysis to optimize functionality and aesthetics.", icon: radioButtonUncheckedSvg },
    { title: "3D Visualization", description: "Bringing ideas to life with stunning 3D renderings and walkthroughs.", icon: fullscreenSvg },
    { title: "Renovation", description: "Expertly updating and modernizing existing spaces for enhanced living and working.", icon: filterSvg },
    { title: "Consultation", description: "Professional advice and guidance for all your design and architectural needs.", icon: dynamicFormSvg }
  ]

  return (
    <div className='bg-[#F7F6E9] font-interTight flex items-center justify-center flex-col'>
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12'>
        <div className='w-full flex flex-col items-center overflow-hidden'>
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

        <motion.div 
          ref={cardsRef}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          variants={containerVariants}
          className='py-8 sm:py-12 md:py-16'
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {serviceCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className='py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between rounded-xl hover:bg-[#F7F6E9] border border-white bg-[#FFFEF2]'
              >
                <div className='space-y-10 sm:space-y-16 lg:space-y-20'>
                  <div>
                    <h3 className='text-2xl sm:text-3xl lg:text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A]'>{card.title}</h3>
                    <p className='mt-2 text-sm sm:text-base'>{card.description}</p>
                  </div>
                  <div className='w-full h-full sm:h-full lg:h-full  flex items-center justify-center'>
                    <img src={card.icon} alt={card.title} className='w-full h-full object-contain' />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className='py-12'>
            <button className='px-16 py-4 bg-[#561D0A] rounded-xl font-interTight text-white'>
              See All Services
            </button>
      </div>
    </div>
  )
}

export default TextRead