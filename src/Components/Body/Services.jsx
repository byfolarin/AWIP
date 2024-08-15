import React, { useRef } from 'react'
import { motion,  useInView } from 'framer-motion'
import AWIP1 from './Images/AWIP1.jpg'
import AWIP2 from './Images/AWIP2.jpg'
import AWIP3 from './Images/AWIP3.jpg'
import AWIP4 from '././Images/AWIP4.jpg'

const Services = () => {

 

  return (

    <div>
         

          <div className='w-full flex gap-4'>
                <div className=' w-[50%] bg-[#343434] h-[750px]'>            
                    <img src={AWIP4}  alt=""  className='w-full h-full object-cover'/>
                    </div>
                    <div className=' w-[50%] bg-[#343434] h-[450px]'>
                    <img src={AWIP2}  alt=""  className='w-full h-full object-cover'/>
                </div>
          </div>
    </div>
  )
}

export default Services
