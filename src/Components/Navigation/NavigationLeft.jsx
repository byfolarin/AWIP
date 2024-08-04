import React, { useState } from 'react'
import { motion } from 'framer-motion'


const NavigationLeft = ({isHovered}) => {

 
  return (
    <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2 }} 
    className=' bg-[#a09d8d] w-1/3 h-screen max-h-none'>

      <div className='w-full bg-[#3c3b34] h-4/5 object-contain'>
        <img src={isHovered} alt="Real Estate Image" className="object-cover w-full h-full" />
     </div>

      <div className='full bg-[#fdfbf0] h-1/5 p-2'>

      <p className='text-[12px] font-mono'>
            One more glance at the clinic website, elegant and balanced,
             with neat content arrangement, eye-pleasing color palette, and smooth motion.
      </p>

      <p className='text-[12px] font-mono mt-4'>
        Copyright 2024. AWIP
      </p>
        
        </div>      

    </motion.div>



  )
}

export default NavigationLeft
