import React, { useState } from 'react'
import Img from './Realestate.jpeg'
import About from './About.jpeg'
import Project from './Project.jpeg'
import Contact from './Contact.jpeg'


const Navigation = ({setIsHovered,setDisplay}) => {

  return (
    <div className='bg-[#e1ddc9] w-1/3 h-screen px-11 py-20'>
        <p className='text-[12px]'>
            MENU
        </p>

      <ul className='font-sans text-[42px] pt-4 tracking-tighter cursor-pointer  '>

        <li className='text-[42px] hover:text-[#242323]'
           onMouseEnter={() => setIsHovered([Img])}
           onMouseLeave={() => setIsHovered(false)}>
            Home
        </li>



        <li className='text-[42px] hover:text-[#242323]' 
        onMouseEnter={() => setIsHovered([About])}
        onMouseLeave={() => setIsHovered(false)}>Projects</li>


        <li className='text-[42px] hover:text-[#242323]'
        onMouseEnter={() => setIsHovered([Project])}
        onMouseLeave={() => setIsHovered(false)} >
            About</li>


        <li className='text-[42px] hover:text-[#242323]' 
        onMouseEnter={() => setIsHovered([Contact])}
        onMouseLeave={() => setIsHovered(false)} >
            Contact</li>
      </ul>
      
      <ul className='font-sans text-[16px] pt-8 gap-2 tracking-normal cursor-pointer text-[#4a4a4a]'>
        <li>Service</li>
        <li>Culture</li>
        <li>Clients</li>
      </ul>
    </div>
  )
}

export default Navigation
