import React from 'react'
import { motion } from 'framer-motion'
import Testimonials from '../Body/Testimonials'
import Marquee from 'react-fast-marquee'
import TextRead from '../Body/TextRead'
import Teams from '../Body/Teams'
import Services from '../Body/Services'
import Clients from '../Body/Clients'
import Footer from '../Body/Footer'

const About = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className='overflow-hidden font-interTight bg-[#FFFEF2]'
    >

      <Marquee>
      <h1 className='text-[174px] font-medium my-32 text-[#561D0A]  tracking-[-0.05em] font-interTight leading-[1.00]'>
       - About us - AWIP 
      </h1>
      </Marquee>


      <section className='px-12 bg-[#561D0A] text-white pt-9 rounded-tr-3xl 
      rounded-tl-3xl'>
        
          <p className='pb-4 tracking-tighter'>ABOUT US</p>



   

                <div className=' border-t'>
                  <h2 className='font-semibold text-[32px] pt-5'>
                  Welcome to AWIP, a premier interior design studio where innovation meets elegance. Established in 2010 by visionary designer Femi Oyebola, AWIP has grown from a humble home office to an internationally recognized name in the world of interior design. Our mission is to create unique, functional, and sustainable living spaces that enhance the quality of life for our clients.
                  </h2>
                </div>

                <div className='text-[20px]  py-12 w-[100%] border-b'>
                        <p className='w-[50%] font-medium'>
                          We believe that every space has a story to tell. Our team of passionate designers, architects, and project managers work collaboratively to transform your vision into reality. With a focus on creativity, sustainability, and client satisfaction, we have successfully completed numerous residential and commercial projects, earning accolades and industry awards along the way.
                        </p>
                </div>



          <div className='font-medium text-[24px] leading-tight  py-24 ' >
          To create unique, functional, and sustainable living spaces that enhance the quality of life for our clients. We aim to blend creativity with practicality, delivering designs that are both aesthetically pleasing and deeply personal.
          </div>


      </section>


      <div className='pt-12'>
          <TextRead/>
      </div>
    

        <Services />

         <Testimonials/>

         <Clients />


       <Teams />

       <Footer />


        

    </motion.div>
  )
}

export default About