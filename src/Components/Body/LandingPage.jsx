import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './Header'
import Clients from './Clients'
import SecondSection from './SecondSection'
import Achievements from './Achievements'
import Services from './Services'
import TextRead from './TextRead'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Footer from './Footer'

const LandingPage = () => {
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.shiftKey && event.key === 'H') {
        setShowGrid(prevState => !prevState);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: { 
      scaleY: 1, 
      originY: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      {/* Grid Overlay */}
      <AnimatePresence>
        {showGrid && (
          <motion.div 
            className="fixed inset-0 z-50 pointer-events-none"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            <div className="h-full mx-[48px]">
              <div className="grid h-full grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4">
                {[...Array(12)].map((_, index) => (
                  <motion.div 
                    key={index} 
                    className={`bg-red-400 opacity-40 ${index >= 4 ? 'hidden sm:block' : ''} ${index >= 8 ? 'sm:hidden lg:block' : ''}`}
                    variants={itemVariants}
                  ></motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Existing content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className='bg-[#FFFEF2]'
      >
        <Header/>
        <Clients />
        <SecondSection/>
        <Achievements/>
        <Services/>
        <TextRead/>
        <Projects/>
        <Testimonials />
        <Footer />
      </motion.div>
    </>
  )
}

export default LandingPage