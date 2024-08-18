import React, { useRef } from 'react'
import Img from './Images/image.png'
import ImageScroll from './Images/image.png';
import AWIP1 from './Images/AWIP1.jpg'
import AWIP2 from './Images/AWIP2.jpg'
import AWIP4 from '././Images/AWIP4.jpg'
import Projects from './Projects';
import SectionTwo from './SectionTwo';
import SecondSection from './SecondSection';
import Achievements from './Achievements';
import TextRead from './TextRead';
import Footer from './Footer';
import Header from './Header';
import Services from './Services';
import SecondSectionAgain from './SecondSectionAgain';



const LandingPage = () => {

 


  return (
    <div className='w-screen bg-[#ffffff] m-0 p-0 scroll-smooth overflow-x-hidden'>
      <Header/>
      <SecondSection/>
      <SectionTwo/>
      <Achievements/>
      <SecondSectionAgain/>
      <Projects/>
      <TextRead/>
      <Services/>
      <SectionTwo/>
      <Footer/>
    </div>
  )
}

export default LandingPage