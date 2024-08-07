import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NavigationLeft from './NavigationLeft'
import Navigation from './Navigation'

const Nav = ({ isHovered, setIsHovered, closeNav, isOpen }) => {
  
  const variants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className='flex fixed justify-end w-full z-[999] bg-[#000000b3] right-0 overflow-hidden overflow-y-hidden'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-1/3"
          >
            <NavigationLeft isHovered={isHovered} setIsHovered={setIsHovered} />
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-1/3"
          >
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