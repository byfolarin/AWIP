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
import Services from './Services';



const LandingPage = () => {

 


  return (
    <div className='w-screen bg-[#ffffff] m-0 p-0 scroll-smooth overflow-x-hidden '>
      
      <Header />
      <SecondSection />
      <Achievements />
      <Projects/>
      <TextRead />
    <Services />
      <SectionTwo />
      <Footer />
  
    </div>
  )
}

export default LandingPage