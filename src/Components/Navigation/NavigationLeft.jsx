import React, { useState } from 'react'
import Img from './Realestate.jpeg'
import About from './About.jpeg'
import Project from './Project.jpeg'
import Contact from './Contact.jpeg'
import Navigation from './Navigation'


const NavigationLeft = () => {

    const [display,setDisplay] = useState(false);
    const [isHovered, setIsHovered] = useState([Img]);
   
    

  return (
    <div className='bg-[#a09d8d] w-2/5 h-screen max-h-none'>

      <div className='w-full bg-[#3c3b34] h-4/5 object-contain'>
        <img src={isHovered} alt="Real Estate Image" className="object-cover w-full h-full" />
     </div>

      <div className='full bg-[#fdfbf0] h-1/5 p-4'>

      <p className='text-[12px] font-mono'>
            One more glance at the clinic website, elegant and balanced,
             with neat content arrangement, eye-pleasing color palette, and smooth motion.
      </p>

      <p className='text-[12px] font-mono mt-8'>
        Copyright 2024. AWIP
      </p>
        
        </div>


       {display && <Navigation setIsHovered = {setIsHovered} />}

        

    </div>



  )
}

export default NavigationLeft
