import React, { useRef } from 'react'
import Img from './image.png'
import { motion, useScroll, useTransform } from "framer-motion";
import myvid from './Hvideo.mp4'
import ImageScroll from './ImageScroll';
import AWIP4 from './AWIP4.jpg'
import Projects from './Projects';
import SectionTwo from './SectionTwo';
import SecondSection from './SecondSection';



const LandingPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });


  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  // Split the h1 text into words
  const words = "ARCHITECTURE WORK IN PROGRESS".split(" ");

  return (
    <div className='w-screen bg-[#FFFDF0] m-0 p-0 '>
      <div className='flex items-center gap-24'>
        <div className='w-fit py-4'>
          <h1 className='hidden lg:block lg:text-[#561D0A] lg:text-[160px] lg:font-extralight lg:tracking-[-0.11em] lg:font-interTight lg:leading-[1.00]'>
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

          <h1 className='sm:hidden text-[#4D3D30] text-[160px] 
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
      className='w-full max-w-screen'>

        <div className=' bg-[#343434] h-[550px] relative border border-red-400'>
          <video  className=" w-full h-full object-cover" autoPlay muted loop>
              <source src={myvid} type="video/mp4" />
              Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black opacity-30"></div>  
        </div>

      </motion.div>


      <hr  className='mt-8'/>

      <SecondSection />


      <Projects/>
      {/* <ImageScroll /> */}

    


         <div className='w-full max-w-screen flex justify-between items-start gap-11 py-24 px-8'>
            <h2 className='text-[48px] 3/5 text-[#00000048] font-interTight font-light tracking-tighter leading-tight'>
              OUR MISSION
            </h2>
            <p className='w-3/5 text-[24px] tracking-tight font-interTight font-light'>
              The AWIP is a modern interpretation of typography found in classic architecture, traditionally etched into stone. This narrative reflected Little Project Co's established history, while maintaining a progressive focus on the future.
            </p>
      </div>


      <div 
      className='w-full max-w-screen'>
        <div className=' bg-[#343434] h-[500px]'>
          
        <img src={AWIP4}  alt=""  className='w-full h-full object-cover'/>
        </div>
      </div>


   
      <SectionTwo />

    </div>
  )
}

export default LandingPage