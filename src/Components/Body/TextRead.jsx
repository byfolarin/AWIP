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
    <div className='flex-col justify-end bg-[#F7F6E9] font-interTight py-12'>

     

          <div className='w-full max-w-screen flex flex-col items-center lg:flex-end '>

            <h1 className='text-[164px]  text-[#561D0A] font-medium tracking-[-0.04em] font-interTight leading-[1.00]'
         
            >
              Services
            </h1>

         </div>

           <div className='py-16'>
        

                  <div className='grid grid-cols-3 gap-4 px-4 '>

                              <div className='py-16 px-8 flex flex-col justify-between rounded-xl hover:bg-[#F7F6E9] border border-white bg-[#FFFEF2]'>
                              <div className='space-y-20'>
                                    <div>
                                      <h3 className='text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Project Completed</h3>
                                      <p>Over 200 successful projects completed, showcasing our extensive experience and portfolio.</p>
                                    </div>
                              </div>
                              </div>




                              <div className='py-16 px-8 flex flex-col justify-between rounded-xl border hover:bg-[#F7F6E9] border-white bg-[#FFFEF2]'>
                              <div className='space-y-20'>

                                    <div>
                                  <h3 className='text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Interior Design</h3>
                                  <p>Over 200 successful projects completed, showcasing our extensive experience and portfolio.</p>
                                </div>
                          </div>
                          </div>



                          <div className='py-16 px-8 flex flex-col justify-between rounded-xl border hover:bg-[#F7F6E9] border-white bg-[#FFFEF2]'>
                          <div className='space-y-20'>
                          
                                <div>
                                  <h3 className='text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Space Survey</h3>
                                  <p>Over 200 successful projects completed, showcasing our extensive experience and portfolio.</p>
                                </div>

                                <h2 className='text-[134px] text-[#561D0A] lg:tracking-[-0.05em] font-semibold'>150<span className='text-black'>+</span></h2>
                          </div>
                          </div>


                  </div>
                  

      </div>


    </div>
  )
}

export default TextRead
