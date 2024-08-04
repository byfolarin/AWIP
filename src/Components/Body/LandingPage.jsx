import React from 'react'
import Img from './image.png'

const LandingPage = () => {
  return (
    <div className='w-screen h-screen '>

      <div className='flex items-center gap-24'>

        <div className='w-fit py-4'>
        <h1 className='text-[#322018] text-[160px] font-thin tracking-[-0.09em] leading-[1.00]'>ARCHITECTURE WORK IN <span>PROGRESS </span></h1>
        </div>

        </div>

        <div className='w-full bg-[#3c3b34] h-[448px]'></div>

        <div className='w-full bg-[#e1ddc9] flex items-center justify-center py-6'>
        <h2 className='text-[48px] text-[#322018]  text-center  w-3/5 tracking-tighter leading-tight'>
        We transform mundane spaces into extraordinary experiences that captivates on first entry and seek to retain that experience
      </h2>
      </div>

    </div>
  )
}

export default LandingPage
