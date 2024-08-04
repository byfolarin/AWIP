import React from 'react'
import Img from './image.png'

const LandingPage = () => {
  return (
    <div className='w-screen h-screen '>

      <div className='flex items-center gap-24'>

        <div className='w-fit py-4'>
        <h1 className='text-black text-[160px] font-thin tracking-[-0.09em] leading-[1.00]'>ARCHITECTURE WORK IN <span>PROGRESS </span></h1>
        </div>

        </div>

        <div className='w-full'>
            <div className=' bg-[#343434] h-[448px]'></div>
        </div>

        <div className='w-full flex items-center justify-center py-6 mx-6'>
              <h2 className='text-[48px] text-[#00000048] text-center tracking-tighter leading-tight'>
              Interior
            </h2>

            <p className=''>
            The Little Projects Co brandmark is a modern interpretation of typography found in classic architecture, traditionally etched into stone. This narrative reflected Little Project Co’s established history, while maintaining a progressive focus on the future.
            </p>
      </div>

    </div>
  )
}

export default LandingPage
