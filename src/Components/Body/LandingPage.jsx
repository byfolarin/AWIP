import React from 'react'
import Img from './image.png'

const LandingPage = () => {
  return (
    <div className='w-screen h-screen'>

        <div className='w-fit'>
        <h1 className='text-[#322018] text-[300px] font-thin tracking-[-0.08em]'>AWIP</h1>
        </div>

        <div className='w-full bg-[#3c3b34] h-[448px]'>
        
        <img src={Img} alt="" className='object-cover w-full h-full' />
        </div>

        <p>
        One more glance at the clinic website, elegant and balanced,
        with neat content arrangement, eye-pleasing color palette, and smooth motion.
        </p>
        
    </div>
  )
}

export default LandingPage
