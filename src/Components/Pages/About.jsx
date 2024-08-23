import React from 'react'
import Marquee from 'react-fast-marquee'

const About = () => {

  return (
    <div  className='overflow-hidden font-interTight bg-[#FFFEF2]'>

      <Marquee>
      <h1 className='text-[174px] font-medium my-32 text-[#561D0A]  tracking-[-0.05em] font-interTight leading-[1.00]'>
       - About us - AWIP 
      </h1>
      </Marquee>


      <section className='px-12 bg-[#561D0A] text-white pt-9 rounded-tr-3xl rounded-tl-3xl'>
        
          <p className='pb-4 tracking-tighter'>ABOUT US</p>

          <div className=' border-t'>
            <h2 className='font-semibold text-[32px] pt-5'>
            Welcome to AWIP, a premier interior design studio where innovation meets elegance. Established in 2010 by visionary designer Femi Oyebola, AWIP has grown from a humble home office to an internationally recognized name in the world of interior design. Our mission is to create unique, functional, and sustainable living spaces that enhance the quality of life for our clients.
            </h2>
          </div>

          <div className='text-[16px] flex justify-end py-6 w-[100%] '>
            <p className='w-[50%] font-medium'>
          We believe that every space has a story to tell. Our team of passionate designers, architects, and project managers work collaboratively to transform your vision into reality. With a focus on creativity, sustainability, and client satisfaction, we have successfully completed numerous residential and commercial projects, earning accolades and industry awards along the way.
          </p>
          </div>


          <div className='grid grid-cols-4 gap-2'>

            <div className='bg-[#7a2a0fb0] col-span-2 rounded-xl h-[220px]'></div>
            <div className='bg-[#7a2a0fb0] rounded-xl h-[220px]'></div>
            <div className='bg-[#7a2a0fb0] rounded-xl h-[220px]'></div>
            <div className='bg-[#7a2a0fb0] rounded-xl h-[220px]'></div>
            <div className='bg-[#7a2a0fb0] rounded-xl col-span-2 '></div>
            <div className='bg-[#7a2a0fb0] rounded-xl '></div>
       </div>

      </section>

    </div>
  )
}

export default About


