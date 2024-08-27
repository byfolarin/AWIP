import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NavigationLeft from './NavigationLeft'
import Navigation from './Navigation'

const Nav = ({ isHovered, setIsHovered, closeNav, isNavOpen }) => {

  const containerVariants = {
    initial: { x: "100%" },
    animate: { 
      x: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.5
      }
    },
    exit: { 
      x: "100%",
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.5
      }
    }
  }

  const leftVariants = {
    initial: { x: "100%" },
    animate: { 
      x: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.6
      }
    },
    exit: { 
      x: "100%",
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.4
      }
    }
  }

  const rightVariants = {
    initial: { x: "100%" },
    animate: { 
      x: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.4
      }
    },
    exit: { 
      x: "100%",
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.3
      }
    }
  }

  return (
    <AnimatePresence>
      {isNavOpen && (
        <motion.div 
          className='flex fixed justify-end w-full z-[9999] bg-[#000000b3] right-0 overflow-hidden overflow-y-hidden'
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div variants={leftVariants}>
            <NavigationLeft isHovered={isHovered} />
          </motion.div>
          <motion.div variants={rightVariants}>
            <Navigation 
              setIsHovered={setIsHovered} 
              closeNav={closeNav}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Nav