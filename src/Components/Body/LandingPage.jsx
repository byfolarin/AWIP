import React from 'react'
import Img from './image.png'

const LandingPage = () => {
  return (
    <div className='w-screen h-screen'>
        <h1 className='text-black text-[248px] tracking-tighter'>AWIP</h1>

        <div className='w-screen bg-[#3c3b34] h-4/5 object-contain'>
        <img src={Img} alt="" className='w-full h-full object-contain' />
        </div>
    </div>
  )
}

export default LandingPage
