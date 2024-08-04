import React from 'react'
import { motion } from 'framer-motion'
import NavigationLeft from './NavigationLeft'
import Navigation from './Navigation'

const Nav = ({ isHovered, setIsHovered, closeNav }) => {
  return (
    <motion.div 
      className='flex fixed justify-end w-full bg-[#000000b3] right-0 overflow-hidden overflow-y-hidden'
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 40 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}>
        <NavigationLeft isHovered={isHovered} setIsHovered={setIsHovered} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Navigation 
          setIsHovered={setIsHovered} 
          closeNav={closeNav}
        />
      </motion.div>
    </motion.div>
  )
}

export default Nav