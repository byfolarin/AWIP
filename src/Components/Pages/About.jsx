import React from 'react'
import { motion } from 'framer-motion'
import Testimonials from '../Body/Testimonials'
import Marquee from 'react-fast-marquee'
import AWIP4 from '../Body/Images/AWIP4.jpg'
import AWIP2 from '../Body/Images/AWIP2.jpg'
import AWIP3 from '../Body/Images/AWIP3.jpg'
import AWIP1 from '../Body/Images/AWIP1.jpg'
import Teams from '../Body/Teams'
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


      <section className='px-12 bg-[#561D0A] text-white pt-9 rounded-tr-3xl rounded-tl-3xl'>
        
          <p className='pb-4 tracking-tighter'>ABOUT US</p>

          <div className=' border-t'>
            <h2 className='font-semibold text-[32px] pt-5'>
            Welcome to AWIP, a premier interior design studio where innovation meets elegance. Established in 2010 by visionary designer Femi Oyebola, AWIP has grown from a humble home office to an internationally recognized name in the world of interior design. Our mission is to create unique, functional, and sustainable living spaces that enhance the quality of life for our clients.
            </h2>
          </div>

          <div className='text-[16px] flex justify-end py-12 w-[100%] '>
                  <p className='w-[50%] font-medium'>
                    We believe that every space has a story to tell. Our team of passionate designers, architects, and project managers work collaboratively to transform your vision into reality. With a focus on creativity, sustainability, and client satisfaction, we have successfully completed numerous residential and commercial projects, earning accolades and industry awards along the way.
                  </p>
          </div>


          <div className='grid grid-cols-4 gap-2 py-8'>

            <div className='bg-[#7a2a0fb0] col-span-2 rounded-xl h-[220px]'></div>
            <div className='bg-[#7a2a0fb0] rounded-xl h-[220px]'></div>
            <div className='bg-[#7a2a0fb0] rounded-xl h-[220px]'></div>
            <div className='bg-[#7a2a0fb0] rounded-xl h-[220px]'></div>
            <div className='bg-[#7a2a0fb0] rounded-xl col-span-2 '></div>
            <div className='bg-[#7a2a0fb0] rounded-xl '></div>
       </div>


          <div className='font-medium text-[36px] leading-tight  py-24 text-center' >
          To create unique, functional, and sustainable living spaces that enhance the quality of life for our clients. We aim to blend creativity with practicality, delivering designs that are both aesthetically pleasing and deeply personal.
          </div>


      </section>



      <div className='flex-col justify-end bg-[#F7F6E9] font-interTight px-12 py-12'>

     

        <div className='w-full max-w-screen flex flex-col items-center lg:flex-end '>

              <h1 className='text-[164px]  text-[#561D0A] font-medium tracking-[-0.04em] font-interTight leading-[1.00]'>
                Services
              </h1>

        </div>

            <div className='py-16'>
                <div className='grid grid-cols-3 grid-rows-3 gap-4 px-4 '>
                    <div className='py-16 px-8 flex flex-col justify-between rounded-xl hover:bg-[#F7F6E9] border border-white bg-[#FFFEF2]'>
                    <div className='space-y-20'>
                      <div>
                        <h3 className='text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Project Completed</h3>
                        <p>Over 200 successful projects completed, showcasing our extensive experience and portfolio.</p>
                        </div>
                      </div>
                 </div>




                <div className='py-16 px-8 flex flex-col justify-between rounded-xl border hover:bg-[#F7F6E9] border-white bg-[#FFFEF2]'>
                      <div className='space-y-20'><div>
                      <h3 className='text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Interior Design</h3>
                      <p>Over 200 successful projects completed, showcasing our extensive experience and portfolio.</p>
                     </div>
                   </div>
                </div>



              <div className='py-16 px-8 flex flex-col justify-between rounded-xl border hover:bg-[#F7F6E9] border-white bg-[#FFFEF2]'>
                  <div className='space-y-20'><div>
                  <h3 className='text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Space Survey</h3>
                    <p>Over 200 successful projects completed, showcasing our extensive experience and portfolio.</p>
                  </div>
                  <h2 className='text-[134px] text-[#561D0A] lg:tracking-[-0.05em] font-semibold'>150<span className='text-black'>+</span>
                  </h2>
                  </div>
              </div>

              
              <div className='py-16 px-8 flex flex-col justify-between rounded-xl border hover:bg-[#F7F6E9] border-white bg-[#FFFEF2]'>
                  <div className='space-y-20'><div>
                  <h3 className='text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Space Survey</h3>
                    <p>Over 200 successful projects completed, showcasing our extensive experience and portfolio.</p>
                  </div>
                  <h2 className='text-[134px] text-[#561D0A] lg:tracking-[-0.05em] font-semibold'>150<span className='text-black'>+</span>
                  </h2>
                  </div>
              </div>


              
              <div className='py-16 px-8 flex flex-col justify-between rounded-xl border hover:bg-[#F7F6E9] border-white bg-[#FFFEF2]'>
                  <div className='space-y-20'><div>
                  <h3 className='text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Space Survey</h3>
                    <p>Over 200 successful projects completed, showcasing our extensive experience and portfolio.</p>
                  </div>
                  <h2 className='text-[134px] text-[#561D0A] lg:tracking-[-0.05em] font-semibold'>150<span className='text-black'>+</span>
                  </h2>
                  </div>
              </div>


              
              <div className='py-16 px-8 flex flex-col justify-between rounded-xl border hover:bg-[#F7F6E9] border-white bg-[#FFFEF2]'>
                  <div className='space-y-20'><div>
                  <h3 className='text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Space Survey</h3>
                    <p>Over 200 successful projects completed, showcasing our extensive experience and portfolio.</p>
                  </div>
                  <h2 className='text-[134px] text-[#561D0A] lg:tracking-[-0.05em] font-semibold'>150<span className='text-black'>+</span>
                  </h2>
                  </div>
              </div>


              
              <div className='py-16 px-8 flex flex-col justify-between rounded-xl border hover:bg-[#F7F6E9] border-white bg-[#FFFEF2]'>
                  <div className='space-y-20'><div>
                  <h3 className='text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Space Survey</h3>
                    <p>Over 200 successful projects completed, showcasing our extensive experience and portfolio.</p>
                  </div>
                  <h2 className='text-[134px] text-[#561D0A] lg:tracking-[-0.05em] font-semibold'>150<span className='text-black'>+</span>
                  </h2>
                  </div>
              </div>


              
              <div className='py-16 px-8 flex flex-col justify-between rounded-xl border hover:bg-[#F7F6E9] border-white bg-[#FFFEF2]'>
                  <div className='space-y-20'><div>
                  <h3 className='text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Space Survey</h3>
                    <p>Over 200 successful projects completed, showcasing our extensive experience and portfolio.</p>
                  </div>
                  <h2 className='text-[134px] text-[#561D0A] lg:tracking-[-0.05em] font-semibold'>150<span className='text-black'>+</span>
                  </h2>
                  </div>
              </div>


              
              <div className='py-16 px-8 flex flex-col justify-between rounded-xl border hover:bg-[#F7F6E9] border-white bg-[#FFFEF2]'>
                  <div className='space-y-20'><div>
                  <h3 className='text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Space Survey</h3>
                    <p>Over 200 successful projects completed, showcasing our extensive experience and portfolio.</p>
                  </div>
                  <h2 className='text-[134px] text-[#561D0A] lg:tracking-[-0.05em] font-semibold'>150<span className='text-black'>+</span>
                  </h2>
                  </div>
              </div>


                </div>
            </div>


                 
            </div>


         

        <Marquee speed={150} >
           
           <div className='py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12  gap-4'>
             
                 <div className=' justify-between rounded-xl border hover:bg-[#F7F6E9] h-[650px] border-white bg-[#FFFEF2] col-span-2'>   
                 <img src={AWIP2} alt="" className='w-full h-full object-cover'/>

                 </div>

                 <div className='py-16 px-8 justify-between rounded-xl border hover:bg-[#F7F6E9] h-[650px] border-white bg-[#FFFEF2]'>   
                 <img src={AWIP2} alt="" className='w-full h-full object-cover'/>
                 </div>

                 <div className='py-16 px-8 justify-between rounded-xl border hover:bg-[#F7F6E9] h-[650px] border-white bg-[#FFFEF2] '>   
                 <img src={AWIP2} alt="" className='w-full h-full object-cover'/>
                 </div>

                  <div className='py-16 px-8 justify-between rounded-xl border hover:bg-[#F7F6E9] h-[650px] border-white bg-[#FFFEF2] col-span-2'>   
                  <img src={AWIP2} alt="" className='w-full h-full object-cover'/>
                 </div>

                 <div className='py-16 px-8 justify-between rounded-xl border hover:bg-[#F7F6E9] h-[650px] border-white bg-[#FFFEF2] '>  
                 <img src={AWIP2} alt="" className='w-full h-full object-cover'/>
                 </div>

                 <div className='py-16 px-8 justify-between rounded-xl border hover:bg-[#F7F6E9] h-[650px] border-white bg-[#FFFEF2] col-span-2'>   
                 <img src={AWIP2} alt="" className='w-full h-full object-cover'/>
                 </div>

          </div>

      

         </Marquee>

        

         <Testimonials/>

         <Clients />


       <Teams />

       <Footer />


        

    </motion.div>
  )
}

export default About