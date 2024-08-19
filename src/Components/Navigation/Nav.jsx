import React from 'react'
import { motion } from 'framer-motion'
import NavigationLeft from './NavigationLeft'
import Navigation from './Navigation'

const Nav = ({ isHovered, setIsHovered, closeNav }) => {

  const variants = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" } // Change this to mirror the animate variant
  }

  return (
    <motion.div 
      className='flex fixed justify-end w-full z-[9999] bg-[#000000b3] right-0 overflow-hidden overflow-y-hidden'
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 0.7
      }}
    >


      <NavigationLeft isHovered={isHovered} setIsHovered={setIsHovered} />

      <Navigation 
        setIsHovered={setIsHovered} 
        closeNav={closeNav}
      />
    </motion.div>
  )
}

export default Nav
