import React, { useState } from 'react'
import { motion } from "framer-motion"
import Img from './Realestate.jpeg'
import About from './About.jpeg'
import Project from './Project.jpeg'
import Contact from './Contact.jpeg'
import Default from './Default.jpeg'
import CloseIcon from './CloseIcon'


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

        <div className='flex justify-end py-8 cursor-pointer'>
          <CloseIcon closeNav={closeNav} />       
        </div>

        <div>
          <p className='text-[12px]'>
              MENU
          </p>

      <ul className='font-sans text-[42px] pt-4 tracking-tighter cursor-pointer  '>

        <motion.li
          whileHover={{ x: 10 }}
          className='text-[42px]  flex align-middle  font-interTight hover:text-[#242323]'
          onMouseEnter={() => handleImageChange([Img])}
          onMouseLeave={() => setIsHovered([Default])}>
          Home
        </motion.li>


        <motion.li 
          whileHover={{ x: 10 }}  
          className='text-[42px]  font-interTight hover:text-[#242323]' 
          onMouseEnter={() => handleImageChange([About])}
          onMouseLeave={() => setIsHovered([Default])}>
          Projects
        </motion.li>


        <motion.li
          whileHover={{ x: 10 }} 
          className='text-[42px]  font-interTight hover:text-[#242323]'
          onMouseEnter={() => handleImageChange([Project])}
          onMouseLeave={() => setIsHovered([Default])} >
          About
        </motion.li>


        <motion.li 
          whileHover={{ x: 10 }} 
          className='text-[42px]  font-interTight hover:text-[#242323]' 
          onMouseEnter={() => handleImageChange([Contact])}
          onMouseLeave={() => setIsHovered([Default])} >
          Contact
        </motion.li>
      </ul>

      

      </div>

      <hr className='w-full border-[#6c6c6c] h-1 my-4' />
      
      <ul className=' font-interTight text-[16px] pt-4 gap-2 tracking-normal cursor-pointer text-[#4a4a4a]'>
        <li>Service</li>
        <li>Culture</li>
        <li>Clients</li>
      </ul>

      </div>
    
  )
}

export default Navigation





