import React from 'react'
import Img from './image.png'

const LandingPage = () => {
  return (
    <div className='w-screen h-screen'>

        <div className='w-fit'>
        <h1 className='text-black text-[248px] tracking-tighter'>AWIP</h1>
        </div>

        <div className='bg-[#3c3b34] h-[248px] object-contain'>
        <img src={Img} alt="" className='w-screen h-full object-contain' />
        </div>
        
    </div>
  )
}

export default LandingPage
