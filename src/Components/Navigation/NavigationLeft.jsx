import React from 'react'
import img from './Realestate.jpeg'

const NavigationLeft = () => {
  return (
    <div className='bg-[#a09d8d] w-2/5 h-screen max-h-none'>
      <div className='w-full bg-[#3c3b34] h-4/5 object-contain'>
        <img src={img} alt="Real Estate Image" className="object-cover w-full h-full" />
        </div>
      <div className='full bg-[#fdfbf0] h-1/5'></div>
    </div>
  )
}

export default NavigationLeft
