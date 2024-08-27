import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import myvid from './Images/Hvideo.mp4'

const Header = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);

  const h1Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div ref={containerRef} className='relative min-h-screen overflow-hidden'>
      <div className='px-2 sm:px-6 md:px-8 lg:px-12'>
        <div className='flex items-center pt-24 sm:pt-24 md:pt-24 lg:pt-24'>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={h1Variants}
          >
            <h1 className='text-7xl sm:text-7xl md:text-[64px] lg:text-[145px] 
                           tracking-[-0.05em] leading-[1.00] 
                           my-6 sm:my-8 md:my-10 lg:my-12 
                           text-[#561D0A] 
                           font-medium font-interTight'>
              {['Architecture,', 'Work', 'In', 'Progress...'].map((word, index) => (
                <motion.span key={index} className="inline-block mr-4" variants={wordVariants}>
                  {word}
                </motion.span>
              ))}
            </h1>       
          </motion.div>
        </div>

        <motion.div 
          className='rounded-xl overflow-hidden'
          style={{ scale: videoScale, y: videoY }}
        >
          <div className='aspect-w-16 aspect-h-9'>
            <video className="w-full h-full object-cover rounded-xl" autoPlay muted loop playsInline>
              <source src={myvid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Header