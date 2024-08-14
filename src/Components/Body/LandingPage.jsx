import React, { useRef } from 'react'
import Img from './image.png'
import ImageScroll from './ImageScroll';
import AWIP1 from './AWIP1.jpg'
import AWIP2 from './AWIP2.jpg'
import AWIP4 from './AWIP4.jpg'
import Projects from './Projects';
import SectionTwo from './SectionTwo';
import SecondSection from './SecondSection';
import Achievements from './Achievements';
import TextRead from './TextRead';
import Footer from './Footer';
import Header from './Header';



const LandingPage = () => {

 


  return (
    <div className='w-screen bg-[#ffffff] m-0 p-0 scroll-smooth overflow-x-hidden '>
      
      <Header />



      <SecondSection />
      <Achievements />
      <Projects/>
      
      <TextRead />
  


      <h1 className='flex text-[128px] font-interTight text-[#561D0A] tracking-[-0.07em] font-light'>SERVICES</h1>

      <div className='w-full flex gap-4'>
            <div className=' w-[50%] bg-[#343434] h-[750px]'>            
                <img src={AWIP4}  alt=""  className='w-full h-full object-cover'/>
                </div>
                <div className=' w-[50%] bg-[#343434] h-[450px]'>
                <img src={AWIP2}  alt=""  className='w-full h-full object-cover'/>
            </div>
      </div>

    
     
      <SectionTwo />
      <Footer />
   

    </div>
  )
}

export default LandingPage