import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Baslogo from './Baslogo.png'
import OtherLogo1 from './AFYA LOGO.png'
import OtherLogo2 from './images.png'

const testimonials = [
  {
    company: "Bastion HMO",
    name: "Dotun Oyewole",
    logo: Baslogo,
    quote: "Over 200 successful projects completed, showcasing our extensive experience and portfolio, AWIP was the perfect choice to go with, there was hardly any bidding as they were miles ahead of even the number 2, working with them and their attention to details is too impressive.",
    highlightWord: "Attention",
  },
  {
    company: "AfyaCare",
    name: "Sarah Johnson",
    logo: OtherLogo1,
    quote: "The creativity and innovation AWIP brought to our office redesign project was outstanding. They transformed our space into a modern, functional environment that truly reflects our company culture.",
    highlightWord: "Creativity",
  },
  {
    company: "Lagos Water Corpora",
    name: "Michael Chen",
    logo: OtherLogo2,
    quote: "AWIP's commitment to sustainability in design is unparalleled. They seamlessly integrated eco-friendly solutions without compromising on style or functionality. Our new space is both beautiful and environmentally responsible.",
    highlightWord: "Seamlessly",
  }
]

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentTestimonial];

  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-12 font-interTight'>
      <div className='flex-col justify-end bg-[#561D0A] rounded-xl font-interTight px-4 sm:px-6 py-7'>
        <div className='w-full max-w-screen flex flex-col items-center lg:items-center'>
          <h1 className='text-6xl sm:text-6xl md:text-7xl lg:text-[164px] text-[#F7F6E9] py-6 font-medium tracking-[-0.04em] font-interTight leading-[1.00]'>
            Testimonials
          </h1>
        </div>

        <div className='py-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-4'>
            <div className='py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between rounded-2xl border border-white bg-[#FFFEF2]'>
              <div className='space-y-10 sm:space-y-16 lg:space-y-20'>
                <div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className='text-base sm:text-lg lg:text-[20px] tracking-[-0.03em] font-medium text-[#454545b6]'>{testimonial.company}</h3>
                      <h3 className='text-xl sm:text-2xl lg:text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A]'>{testimonial.name}</h3>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentTestimonial}
                  src={testimonial.logo}
                  alt="Logo"
                  className="w-full max-w-[150px] sm:max-w-[200px] aspect-auto mt-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>

            <div className='py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between rounded-2xl border border-white bg-[#FFFEF2] md:col-span-2'>
              <div className='space-y-10 sm:space-y-16 lg:space-y-20'>
                <div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentTestimonial}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5 }}
                      className='text-sm sm:text-base lg:text-lg'
                    >
                      "{testimonial.quote.split(testimonial.highlightWord).map((part, index, array) => (
                        <React.Fragment key={index}>
                          {part}
                          {index < array.length - 1 && <strong>{testimonial.highlightWord}</strong>}
                        </React.Fragment>
                      ))}"
                    </motion.p>
                  </AnimatePresence>
                </div>

                <div className='h-[200px] sm:h-[250px] md:h-[300px]  overflow-hidden'>
                  <AnimatePresence mode="wait">
                    <motion.h2 
                      key={currentTestimonial}
                      className='flex justify-center items-center h-full text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-[#561D0A] lg:tracking-[-0.05em] font-semibold'
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5 }}
                    >
                      "{testimonial.highlightWord}"
                    </motion.h2>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center w-full'>
            <div className='font-medium text-base sm:text-lg md:text-xl lg:text-[24px] text-[#FFFEF2] w-full sm:w-[80%] md:w-[70%] lg:w-[60%] leading-tight pt-12 sm:pt-16 md:pt-20 lg:pt-24 text-center'>
              To create unique, functional, and sustainable living spaces that enhance the quality of life for our clients. We aim to blend creativity with practicality, delivering designs that are both aesthetically pleasing and deeply personal.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials