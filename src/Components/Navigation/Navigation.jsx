import React, { useState } from 'react'
import { motion } from "framer-motion"
import Default from './default.png'
import CloseIcon from './CloseIcon'
import AWIP1 from './AWIP1.jpg'
import AWIP2 from './AWIP2.jpg'
import AWIP3 from './AWIP3.jpg'
import AWIP4 from './AWIP4.jpg'
import {Link } from 'react-router-dom'


const Navigation = ({ setIsHovered, closeNav }) => {

      const handleImageChange = (image) => {
        setIsHovered(image);
      };

      const handleClick = () => {
        setIsNavClose(!isNavClose);
      };


  return (
    

       
          <div  className=' bg-[#ffffff] w-full  lg:w-[550px] h-screen px-11 py-8 '>
            

              <div className='flex justify-end py-2 cursor-pointer'>
                <CloseIcon closeNav={closeNav} />       
              </div>

              <div>
                <p className='text-[12px]'>
                    MENU
                </p>


            <ul className='font-sans text-[42px] pt-4 tracking-tighter cursor-pointer text '>


              <Link to={"/"}>
                <motion.li
                  whileHover={{ x: 10 }}
                  className='text-[42px]  flex align-middle text-[#561D0A]  font-interTight font-light'
                  onMouseEnter={() => handleImageChange([AWIP1])}
                  onMouseLeave={() => setIsHovered([Default])}>
                  Home
                </motion.li>
              </Link>

              <Link to={"/projects"}>
                <motion.li 
                  whileHover={{ x: 10 }}  
                  className='text-[42px]  font-interTight text-[#561D0A] font-light' 
                  onMouseEnter={() => handleImageChange([AWIP2])}
                  onMouseLeave={() => setIsHovered([Default])}>
                  Projects
                </motion.li>
              </Link>

              <Link to={'/about'}>
              <motion.li
                whileHover={{ x: 10 }} 
                className='text-[42px]  font-interTight text-[#561D0A] font-light '
                onMouseEnter={() => handleImageChange([AWIP3])}
                onMouseLeave={() => setIsHovered([Default])} >
                About
              </motion.li>
              </Link>

              <Link to={'/contact'}>
              <motion.li 
                whileHover={{ x: 10 }} 
                className='text-[42px]  font-interTight text-[#561D0A] font-light  ' 
                onMouseEnter={() => handleImageChange([AWIP4])}
                onMouseLeave={() => setIsHovered([Default])} >
                Contact
              </motion.li>
              </Link>
            </ul>

            

            </div>

            <hr className='w-full border-[#561D0A] h-1 my-4' />

            <div className='flex justify-between'>

            <ul className=' font-interTight text-[16px] gap-2 tracking-normal cursor-pointer text-[#000000]'>
              <li className='text-[24px]'>Socials</li>
              <li className='text-[14px]'>Instagram</li>
              <li className='text-[14px]'>Facebook</li>
              <li className='text-[14px]'>LinkedIn</li>
            </ul>


            <ul className=' font-interTight text-[16px]  gap-2 tracking-normal cursor-pointer text-[#000000]'>
              <li className='text-[24px]'>Work</li>
              <li className='text-[14px]'>hello@awip.com.ng</li>
              <li className='text-[14px]'>323 Main Street, Los Angeles, CA 90001</li>
              <li className='text-[14px]'>+1 (555) 123-4567</li>
             
            </ul>
            </div>
            
          

            </div>
           
     
    
  )
}

export default Navigation





