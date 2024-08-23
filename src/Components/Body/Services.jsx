import React, { useRef } from 'react'
import { motion,  useInView } from 'framer-motion'
import AWIP1 from './Images/AWIP1.jpg'
import AWIP2 from './Images/AWIP2.jpg'
import AWIP3 from './Images/AWIP3.jpg'
import AWIP4 from '././Images/AWIP4.jpg'

const Services = () => {

 

  return (

    <div className='px-12'>
         

          <div className='w-full flex flex-col lg:flex-row gap-4 relative z-50 mb-12'>


                <div className='w-full lg:w-[50%] bg-[#343434] rounded-xl h-[750px]'>            
                    <img src={AWIP4}  alt=""  className='w-full rounded-xl h-full object-cover'/>
                    </div>


                    <div className='flex-col w-full rounded-xl lg:w-[50%] '>
                        <div className=' rounded-xl  bg-[#343434] h-[450px]'>
                        <img src={AWIP2}  alt=""   className='w-full h-full rounded-xl object-cover'/>

                    

                    </div>
                </div>
          </div>
    </div>
  )
}

export default Services
