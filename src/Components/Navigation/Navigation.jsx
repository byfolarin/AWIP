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
    

       
          <div 
            className=' bg-[#ffffff] w-1/3 h-screen px-11 py-8 '>
            

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

              <Link to={"/projectss"}>
                <motion.li 
                  whileHover={{ x: 10 }}  
                  className='text-[42px]  font-interTight text-[#561D0A] font-light' 
                  onMouseEnter={() => handleImageChange([AWIP2])}
                  onMouseLeave={() => setIsHovered([Default])}>
                  Projects
                </motion.li>
              </Link>

              <Link to={'about'}>
              <motion.li
                whileHover={{ x: 10 }} 
                className='text-[42px]  font-interTight text-[#561D0A] font-light '
                onMouseEnter={() => handleImageChange([AWIP3])}
                onMouseLeave={() => setIsHovered([Default])} >
                About
              </motion.li>
              </Link>


              <motion.li 
                whileHover={{ x: 10 }} 
                className='text-[42px]  font-interTight text-[#561D0A] font-light  ' 
                onMouseEnter={() => handleImageChange([AWIP4])}
                onMouseLeave={() => setIsHovered([Default])} >
                Contact
              </motion.li>
            </ul>

            

            </div>

            <hr className='w-full border-[#561D0A] h-1 my-4' />
            
            <ul className=' font-interTight text-[16px] pt-4 gap-2 tracking-normal cursor-pointer text-[#561D0A]'>
              <li className='text-[24px]'>Socials</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>

            </div>
           
     
    
  )
}

export default Navigation





