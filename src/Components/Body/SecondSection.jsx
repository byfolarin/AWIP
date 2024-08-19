import React from 'react';
import { motion, useInView } from 'framer-motion';

const Section = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <div className='bg-[#ffffff] '> 

      <div className=' w-full max-w-screen px-4 flex lg:justify-between lg:gap-11 pt-16 lg:px-8' ref={ref}>
        <p className='hidden text-[#F8FAFC] text-[16px] font-interTight lg:block'>INTRODUCTION</p>

        <motion.p
          className='w-full  lg:w-3/5 text-[#000000] text-[30px] tracking-tighter font-interTight font-light'
          initial={{ opacity: 0, y: 50 }} // Start text 50px below
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Move text up to its original position
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The AWIP is a modern interpretation of typography found in classic architecture, traditionally etched into stone. This narrative reflected Little Project Co's established history, while maintaining a progressive focus on the future.
          <br />
          <br />
          <motion.hr
            initial={{ width: 0 }}
            animate={isInView ? { width: '100%' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='py-2'
          />
        </motion.p>
      </div>
    </div>
  );
};

export default Section;
