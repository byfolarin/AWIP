import React, { useRef } from 'react'
import { motion,  useInView } from 'framer-motion'


const TextRead = () => {

  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 })

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }




  return (
    <div className='flex-col justify-end'>

     

          <div className='w-full max-w-screen flex-col flex-end py-11 pl-64 px-8'>

            <motion.h1 
              ref={titleRef}
              className='text-[124px] flex  pr-32 text-[#000000] pb-11 font-light tracking-[-0.06em] font-interTight leading-[1.00]'
              initial="hidden"
              animate={isTitleInView ? "visible" : "hidden"}
              variants={titleVariants}
            >
              Our Services
            </motion.h1>


            <p className='w-3/5 text-[24px] tracking-tight font-interTight font-light'>
              The AWIP is a modern interpretation of typography found in classic architecture, traditionally etched into stone. This narrative reflected Little Project Co's established history, while maintaining a progressive focus on the future.
            </p>
         </div>

      <div className='py-16'>
         <hr />
         <h2 className='text-[24px] py-8 px-16 font-interTight font-light'>Sustainability Design</h2>
         <hr />
         <h2 className='text-[24px] py-8 px-16 font-interTight font-light'>Architectural Design</h2>
         <hr />
         <h2 className='text-[24px] py-8 px-16 font-interTight font-light'>Interior Design</h2>
         <hr />
      </div>


    </div>
  )
}

export default TextRead
