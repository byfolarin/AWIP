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
  const h1Scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const h1Opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    <div ref={containerRef} className='relative'>
      <div className='px-4 sm:px-6 md:px-8 lg:px-12'>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={h1Variants}
          className="sticky top-0 pt-24 sm:pt-20 md:pt-24 lg:pt-28"
          style={{ scale: h1Scale, opacity: h1Opacity }}
        >
          <h1 className='text-6xl sm:text-5xl md:text-6xl lg:text-[8vw] xl:text-[145px] tracking-[-0.05em] leading-[1.1] text-[#561D0A] 
                         font-medium font-interTight
                         origin-top-left'>
            {['Architecture,', 'Work', 'In', 'Progress'].map((word, index) => (
              <motion.span key={index} className="inline-block mr-2 sm:mr-3 md:mr-4" variants={wordVariants}>
                {word}
              </motion.span>
            ))}
          </h1>       
        </motion.div>

               <motion.div 
          className='rounded-xl relative mt-8 sm:mt-12 md:mt-16 lg:mt-20'
          style={{ scale: videoScale, y: videoY }}
        >
          <div className='aspect-w-16 aspect-h-24 sm:aspect-h-10 md:aspect-h-9 mobile:aspect-h-16'> {/* Added mobile aspect ratio */}
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