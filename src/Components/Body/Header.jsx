import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import myvid from './Hvideo.mp4'

const Header = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
    });
  
  
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);
  
    // Split the h1 text into words
    const words = "ARCHITECTURE WORK IN PROGRESS".split(" ");
  return (
    <div>


      <div className='flex items-center gap-24'>



        <div className='w-fit py-4'>



          <h1 className='hidden lg:block  lg:text-[#561D0A] lg:text-[160px] lg:font-extralight lg:tracking-[-0.11em] lg:font-interTight lg:leading-[1.00]'>
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


          <h1 className='sm:hidden text-[#000000] text-[160px] 
          font-extralight tracking-[-0.11em] font-interTight leading-[1.00]'>AWIP</h1>


        </div>




      </div>

    

            <motion.div 
            initial={{ scale: 0.5, opacity:0}}
            animate={{ scale: 1, opacity:1}}
            transition={{
                duration: 1,
                delay: 0.7,
                ease: "easeOut"
            }}
                    className='w-full max-w-screen absolute'>

                <div className=' bg-[#343434] h-[550px] relative'>
                <video  className=" w-full h-full object-cover" autoPlay muted loop>
                    <source src={myvid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-black opacity-30"></div>  
                </div>

            </motion.div>
    </div>
  )
}

export default Header
