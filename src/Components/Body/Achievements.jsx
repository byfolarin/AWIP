import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'


  
const Achievements = () => {
  return (
    <div className='py-11 font-interTight px-5'>

      <div className='flex gap-4 '>

          <div className='py-16 px-8 flex flex-col justify-between rounded-xl border border-white bg-[#F7F6E9]'>
              <div className='space-y-20'>
                <h2 className='text-[134px] lg:tracking-[-0.05em] font-semibold text-[#561D0A]'>200<span className='text-black'>+</span></h2>
                    <div>
                      <h3 className='text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Project Completed</h3>
                      <p>Over 200 successful projects completed, showcasing our extensive experience and portfolio.</p>
                    </div>
              </div>
            </div>



          <div className='py-16 px-8 flex flex-col justify-between rounded-xl border border-white bg-[#F7F6E9]'>
          <div className='space-y-20'>
            <h2 className='text-[134px] lg:tracking-[-0.05em] font-semibold text-[#561D0A]'>13<span className='text-black'>+</span></h2>
                <div>
                  <h3 className='text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Project Completed</h3>
                  <p>Over 200 successful projects completed, showcasing our extensive experience and portfolio.</p>
                </div>
          </div>
        </div>



        <div className='py-16 px-8 flex flex-col justify-between rounded-xl border border-white bg-[#F7F6E9]'>
          <div className='space-y-20'>
            <h2 className='text-[134px] text-[#561D0A] lg:tracking-[-0.05em] font-semibold'>150<span className='text-black'>+</span></h2>
                <div>
                  <h3 className='text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Project Completed</h3>
                  <p>Over 200 successful projects completed, showcasing our extensive experience and portfolio.</p>
                </div>
          </div>
        </div>


       </div>
    

    </div>
  )
}

export default Achievements