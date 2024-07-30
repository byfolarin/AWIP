import React, { useState } from 'react'


const Navigation = () => {



  return (
    <div className='bg-[#e1ddc9]  w-2/5 h-screen px-11 py-20'>
        <p className='text-[12px]'>
            MENU
        </p>

      <ul className='font-sans text-[42px] pt-4 tracking-tighter cursor-pointer  '>
        <li className='text-[42px] hover:text-[#242323]' >Home</li>
        <li className='text-[42px] hover:text-[#242323]' >Projects</li>
        <li className='text-[42px] hover:text-[#242323]' >About</li>
        <li className='text-[42px] hover:text-[#242323]' >Contact</li>
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
