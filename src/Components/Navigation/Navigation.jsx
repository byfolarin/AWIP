import React from 'react'

const Navigation = () => {
  return (
    <div className='bg-[#e1ddc9]  w-2/5 h-screen px-11 py-20'>
        <p className='text-[12px]'>
            MENU
        </p>

      <ul className='font-sans text-[42px] pt-4 tracking-tighter cursor-pointer  '>
        <li >Home</li>
        <li >Projects</li>
        <li >About</li>
        <li >Culture</li>
      </ul>


      
      <ul className='font-sans text-[20px] pt-8 tracking-tighter cursor-pointer text-[#4a4a4a]'>
        <li>Brand Mission</li>
        <li>Projects Scope</li>
        <li>Services</li>
      </ul>
    </div>
  )
}

export default Navigation
