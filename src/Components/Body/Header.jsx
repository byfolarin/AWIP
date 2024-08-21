import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import myvid from './Images/Hvideo.mp4'


const Header = () => {


  return (
    <div>
      <div className='flex items-center gap-24 overflow-hidden'>
        <div className=' lg:pl-11 '>
            <h1 className='text-[64px] tracking-[-0.05em] leading-[1.00]  lg:block my-12  text-[#561D0A]  lg:text-[145px]
            font-medium lg:tracking-[-0.05em] px-4 pt-10 font-interTight  z-50'>
                Architecture Work In <span className='font-Satisfy'> Progress...</span>
            </h1>       
        </div>
      </div>

    

            <div className=' w-screen mx-24 rounded-xl'>

                <div className=' bg-[#000000] h-[750px] relative'>
                    <video  className=" w-full h-full object-cover rounded-xl" autoPlay muted loop>
                        <source src={myvid} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                <div className="absolute rounded-xl bg-black opacity-40"></div> 
                </div>


            

            </div>
    </div>
  )
}

export default Header
