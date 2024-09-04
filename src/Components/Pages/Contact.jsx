import React from 'react'
import { motion } from 'framer-motion'
import AWIP2 from '../Body/Images/AWIP2.jpg'
import Marquee from 'react-fast-marquee'
import Footer from '../Body/Footer'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className='pt-24 bg-[#FFFEF2]'>
        <Marquee>
          <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-[174px] font-medium text-[#561D0A] tracking-[-0.05em] font-interTight'>
           - Contact - Let's Talk - Work with Us
          </h1>
        </Marquee>

        <div className='py-8'>
          <hr />
          <h2 className='text-[24px] py-8 px-4 font-interTight font-light cursor-pointer'>Hello@awip.com.ng</h2>
          <hr />
          <h2 className='text-[24px] py-8 px-4 font-interTight font-light cursor-pointer'>
            +234 803 3927 062 <br />
            +1 979 7090 732 <br />
            +234 809 230 5980
          </h2>
          <hr />
          <h2 className='text-[24px] py-8 px-4 font-interTight font-light cursor-pointer'>12A, Alake Onileere Crescent, Gbagada, Lagos</h2>
        </div>
      </div>
      
      {/* <div>
        <img src={AWIP2}  alt=""  className='w-full h-full object-cover'/>
      </div> */}
      <Footer />
    </motion.div>
  )
}

export default Contact