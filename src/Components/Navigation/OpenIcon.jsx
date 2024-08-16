import React from 'react';
import { motion } from 'framer-motion';

const OpenIcon = ({ openNav }) => {

  const variants = {
    tap: {
      scale: 0.9, // Scale down to 90%
      transition: { duration: 0.2 }, // Animation duration
    },
  };

  return (
    <motion.div
      onClick={openNav}
      className='cursor-pointer flex justify-center items-center bg-white w-[32px] h-[32px]'
      variants={variants}
      whileTap="tap" // Trigger animation on tap
    >
      <svg width="24" height="24" viewBox="0 0 68 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1.5H67.5" stroke="#561D0A" stroke-width="5"/>
        <path d="M0 25.5H67.5" stroke="#561D0A" stroke-width="5"/>
      </svg>
    </motion.div>
  );
};

export default OpenIcon;
