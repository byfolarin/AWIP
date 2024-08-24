import React from 'react';
import { motion, useInView } from 'framer-motion';

const Section = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <div className='bg-[#FFFEF2] px-2 sm:px-6 md:px-8 lg:px-12'> 
      <div className='w-full max-w-screen flex flex-col lg:flex-row lg:justify-between lg:gap-11 pt-8 lg:pt-16' ref={ref}>
        <p className='hidden lg:block text-[#F8FAFC] text-[16px] font-interTight mb-4 lg:mb-0'>INTRODUCTION</p>

        <motion.div
          className='w-full lg:w-3/5'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className='text-[#000000] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] tracking-tighter font-interTight font-light'>
            The AWIP is a modern interpretation of typography found in classic architecture, traditionally etched into stone. This narrative reflected Little Project Co's established history, while maintaining a progressive focus on the future.
          </p>
        
        </motion.div>
      </div>
    </div>
  );
};

export default Section;