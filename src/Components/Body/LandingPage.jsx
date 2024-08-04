import React, { useRef } from 'react'
import Img from './image.png'
import { motion, useScroll, useTransform } from "framer-motion";

const LandingPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-88%"]);

  return (
    <div className='w-screen'>
      <div className='flex items-center gap-24'>
        <div className='w-fit py-4'>
          <h1 className='text-black text-[160px] font-extralight tracking-[-0.11em] font-interTight leading-[1.00]'>ARCHITECTURE WORK IN <span>PROGRESS </span></h1>
        </div>
      </div>

      <div className='w-full max-w-screen border border-red-400'>
        <div className=' bg-[#343434] h-[448px]'></div>
      </div>

      <div className='w-full max-w-screen flex justify-between gap-11 py-6 px-8'>
        <h2 className='text-[48px] 3/5 text-[#00000048] font-interTight tracking-tighter leading-tight'>
          INTERIOR
        </h2>
        <p className='w-3/5 text-[24px] tracking-tight font-interTight'>
          The AWIP is a modern interpretation of typography found in classic architecture, traditionally etched into stone. This narrative reflected Little Project Co's established history, while maintaining a progressive focus on the future.
        </p>
      </div>

      <div ref={containerRef} className="h-[300vh]">
        <div className="sticky top-8 h-screen overflow-hidden">
          <motion.div 
            className="flex gap-4 pl-[300px]"
            style={{ x }}
          >
            <div className="w-[548px] flex-shrink-0">
              <div className="bg-[#343434] h-[500px]"></div>
            </div>
            <div className="w-[548px] flex-shrink-0">
              <div className="bg-[#343434] h-[500px]"></div>
            </div>
            <div className="w-[548px] flex-shrink-0">
              <div className="bg-[#343434] h-[500px]"></div>
            </div>
            <div className="w-[548px] flex-shrink-0 ">
              <div className="bg-[#343434] h-[500px]"></div>
            </div>
          </motion.div>
        </div>
      </div>


      <div className='w-full max-w-screen flex justify-between gap-11 py-6 px-8'>
        <h2 className='text-[48px] 3/5 text-[#00000048] font-interTight tracking-tighter leading-tight'>
          INTERIOR
        </h2>
        <p className='w-3/5 text-[24px] tracking-tight font-interTight'>
          The AWIP is a modern interpretation of typography found in classic architecture, traditionally etched into stone. This narrative reflected Little Project Co's established history, while maintaining a progressive focus on the future.
        </p>
      </div>














    </div>
  )
}

export default LandingPage