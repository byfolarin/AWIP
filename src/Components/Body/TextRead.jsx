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

     

          <div className='w-full max-w-screen flex flex-col items-center lg:flex-end '>

            <h1 className='text-[164px]  text-[#561D0A] font-medium tracking-[-0.04em] font-interTight leading-[1.00]'
         
            >
              Services
            </h1>

         </div>

      <div className='py-16'>
         <hr />
         <h2 className='text-[24px] py-8 px-16 font-interTight font-light cursor-pointer'>Sustainability Design</h2>
         <hr />
         <h2 className='text-[24px] py-8 px-16 font-interTight font-light cursor-pointe'>Architectural Design</h2>
         <hr />
         <h2 className='text-[24px] py-8 px-16 font-interTight font-light cursor-pointe'>Interior Design</h2>
         <hr />
      </div>


    </div>
  )
}

export default TextRead
