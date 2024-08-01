import React from 'react'
import Img from './image.png'

const LandingPage = () => {
  return (
    <div className='w-screen h-screen'>

      <div className='flex items-center gap-24'>

        <div className='w-fit py-4'>
        <h1 className='text-[#322018] text-[300px] font-thin tracking-[-0.08em] leading-tight'>AWIP</h1>
        </div>

        </div>

        <div className='w-full bg-[#3c3b34] h-[448px]'>
        
        <img src={Img} alt="" className='object-cover w-full h-full' />
        </div>

    </div>
  )
}

export default LandingPage
