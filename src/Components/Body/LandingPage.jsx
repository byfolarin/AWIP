import React, { useRef } from 'react'
import Img from './image.png'
import { motion, useScroll, useTransform } from "framer-motion";

const LandingPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  // Split the h1 text into words
  const words = "ARCHITECTURE WORK IN PROGRESS".split(" ");

  return (
    <div className='w-screen'>
      <div className='flex items-center gap-24'>
        <div className='w-fit py-4'>
          <h1 className='text-black text-[160px] font-extralight tracking-[-0.11em] font-interTight leading-[1.00]'>
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.3,
                  ease: "easeOut"
                }}
                className="inline-block mr-[0.1em]"
              >
                {word}{' '}
              </motion.span>
            ))}
          </h1>
        </div>
      </div>

      <div className='w-full max-w-screen'>
        <div className=' bg-[#343434] h-[500px]'></div>
      </div>

      <div className='w-full max-w-screen flex justify-between gap-11 py-6 px-8'>
        <h2 className='text-500px] 3/5 text-[#00000048] font-interTight tracking-tighter leading-tight'>
          INTERIOR
        </h2>
        <p className='w-3/5 text-[24px] tracking-tight font-interTight font-light'>
          The AWIP is a modern interpretation of typography found in classic architecture, traditionally etched into stone. This narrative reflected Little Project Co's established history, while maintaining a progressive focus on the future.
        </p>
      </div>

      <div ref={containerRef} className="h-[300vh]">
        <div className="sticky top-10 h-screen overflow-hidden">
          <motion.div 
            className="flex gap-2 pl-[300px]"
            style={{ x }}
          >
            <div className="w-[600px] flex-shrink-0 ">
              <div className="bg-[#343434] h-[500px]"></div>
            </div>
            <div className="w-[600px] flex-shrink-0">
              <div className="bg-[#343434] h-[500px]"></div>
            </div>
            <div className="w-[600px] flex-shrink-0">
              <div className="bg-[#343434] h-[500px]"></div>
            </div>
            <div className="w-[600px] flex-shrink-0">
              <div className="bg-[#343434] h-[500px]"></div>
            </div>
          </motion.div>
        </div>
      </div>


         <div className='w-full max-w-screen flex justify-between gap-11 py-6 px-8'>
        <h2 className='text-500px] 3/5 text-[#00000048] font-interTight tracking-tighter leading-tight'>
          INTERIOR
        </h2>
        <p className='w-3/5 text-[24px] tracking-tight font-interTight font-light'>
          The AWIP is a modern interpretation of typography found in classic architecture, traditionally etched into stone. This narrative reflected Little Project Co's established history, while maintaining a progressive focus on the future.
        </p>
      </div>
    </div>
  )
}

export default LandingPage