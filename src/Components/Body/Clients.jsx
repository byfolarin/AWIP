import React from 'react'
import Baslogo from './Baslogo.png'
import Afyalogo from './AFYA LOGO.png'
import Marquee from "react-fast-marquee";
import LagosWater from './images.png'

const Clients = () => {
  return (
    <div className='mt-8 sm:mt-10 md:mt-12 font-interTight'>
      <div className='flex flex-col items-center font-interTight mt-4 sm:mt-6'>
        <div className="tag text-sm sm:text-base mb-2 sm:mb-3">CLIENTS</div>
        <h2 className='text-[28px] sm:text-[36px] md:text-[42px] tracking-[-0.03em] font-semibold text-[#561D0A] text-center px-4'>
          Our Clients & Partners
        </h2>
      </div>
      
      <Marquee speed={100} className="my-10 sm:mt-10 md:mt-12">
        <div className='font-interTight flex items-center gap-8 sm:gap-12 md:gap-16 px-4 sm:px-6'>
          <img src={Baslogo} alt="Logo" className="w-[100px] sm:w-[150px] md:w-[200px] h-auto"/>
          <img src={Afyalogo} alt="Logo" className="w-[50px] sm:w-[75px] md:w-[100px] h-auto"/>
          <img src={LagosWater} alt="Logo" className="w-[100px] sm:w-[150px] md:w-[200px] h-auto"/>
        </div>
      </Marquee>
    </div>
  )
}

export default Clients