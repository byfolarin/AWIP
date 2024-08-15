import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ImgScro from '../Body/ImgScro'
import AWIP4 from '../Body/Images/AWIP4.jpg'
import AWIP2 from '../Body/Images/AWIP2.jpg'


const ProjectsSpace = () => {
 

  return (
    <div className='my-12 overflow-hidden mx-4'>
      <h1 className='text-[124px] text-[#000000] font-light tracking-[-0.06em] font-interTight leading-[1.00]'
        
      >
        Selected Projects
      </h1>

      <p className='w-2/3 mx-4 py-2 text-[#6464649c]'>
      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to <br /> demonstrate the visual form  of a document or a typeface without relying on meaningful <br /> content. 
      </p>
       
      <hr className='mx-4'/>

      <div className='flex justify-between items-center'>

              <div >
                <h1 className='text-[128px] font-interTight  tracking-[-0.06em]'>Afya Care</h1>
              </div>

              <p className='text-[#2020209c]'>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to <br /> demonstrate the visual form  of a document or a typeface without relying on meaningful <br /> content. 
              </p>

              </div>


              <div className='w-full flex gap-4'>
                        <div className=' w-[50%] bg-[#343434] h-[750px]'>            
                            <img src={AWIP4}  alt=""  className='w-full h-full object-cover'/>
                            </div>
                            <div className=' w-[50%] bg-[#343434] h-[450px]'>
                            <img src={AWIP2}  alt=""  className='w-full h-full object-cover'/>
                        </div>
        </div>

          <hr className='mx-4'/>



           <div className='flex justify-between items-center'>

              <div >
                <h1 className='text-[128px] font-interTight  tracking-[-0.06em]'>Afya Care</h1>
              </div>

              <p className='text-[#2020209c]'>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to <br /> demonstrate the visual form  of a document or a typeface without relying on meaningful <br /> content. 
              </p>

              </div>


              <div className='w-full flex gap-4'>
                        <div className=' w-[50%] bg-[#343434] h-[750px]'>            
                            <img src={AWIP4}  alt=""  className='w-full h-full object-cover'/>
                            </div>
                            <div className=' w-[50%] bg-[#343434] h-[450px]'>
                            <img src={AWIP2}  alt=""  className='w-full h-full object-cover'/>
                        </div>
          </div>
      

      {/* <ImgScro/> */}



      {/* <ProjectsComponent /> */}
    </div>
  )
}

export default ProjectsSpace