import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ImgScro from '../Body/ImgScro'
import AWIP4 from '../Body/Images/AWIP4.jpg'
import AWIP2 from '../Body/Images/AWIP2.jpg'


const ProjectsSpace = () => {
 

  return (
    <div className='overflow-hidden mx-2'>
      <h1 className='text-8xl lg:text-[164px] mt-32 text-[#561D0A]  tracking-[-0.05em] font-interTight leading-[1.00]'
        
      >
        Selected Projects
      </h1>

      <p className='w-full lg:w-2/3  py-2 text-[#6464649c]'>
      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
      </p>
       
      <hr className='mx-4' />

            <div className='flex flex-col lg:flex-row justify-between lg:items-center gap-6 my-8'>

                    <div className='flex lg:justify-start gap-6'>
                      <p className='font-mono'>01</p>
                      <div className='w-full'>
                        <h1 className='text-8xl lg:text-[128px] font-interTight text-[#561D0A] tracking-[-0.06em]'>Afya Care</h1>
                      </div>
                    </div>

          

                    <p className='text-[#2020209c] lg:hidden'>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form  of a document or a typeface without relying on meaningful content. 
                    </p>


                    <p className='text-[#2020209c] lg:block hidden'>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to  <br /> demonstrate the visual form  of a document or a typeface without relying on meaningful <br /> content. 
                    </p>
                    

            </div>


              <div className='w-full flex flex-col lg:flex-row gap-4'>
                        <div className='w-full lg:w-[30%] bg-[#343434] h-[450px] lg:h-[750px]'>            
                            <img src={AWIP4}  alt=""  className='w-full h-full object-cover'/>
                            </div>
                            <div className='w-full lg:w-[70%] bg-[#343434] h-[750px]'>
                            <img src={AWIP2}  alt=""  className='w-full h-full object-cover'/>
                        </div>
        </div>








                <hr className='mx-4 my-7' />

        <div className='flex flex-col lg:flex-row justify-between lg:items-center gap-6 my-8'>

                <div className='flex lg:justify-start gap-6'>
                  <p className='font-mono'>02</p>
                  <div className='w-full'>
                    <h1 className='text-8xl lg:text-[128px] font-interTight text-[#561D0A] tracking-[-0.06em]'>Verraki Partners</h1>
                  </div>
                </div>



                <p className='text-[#2020209c] lg:hidden'>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form  of a document or a typeface without relying on meaningful content. 
                </p>


                <p className='text-[#2020209c] lg:block hidden'>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to  <br /> demonstrate the visual form  of a document or a typeface without relying on meaningful <br /> content. 
                </p>
                

                </div>


          <div className='w-full flex flex-col lg:flex-row gap-4'>
                    <div className='w-full lg:w-[30%] bg-[#343434] h-[450px] lg:h-[750px]'>            
                        <img src={AWIP4}  alt=""  className='w-full h-full object-cover'/>
                        </div>
                        <div className='w-full lg:w-[70%] bg-[#343434] h-[750px]'>
                        <img src={AWIP2}  alt=""  className='w-full h-full object-cover'/>
                    </div>
        </div>












                      <hr className='mx-4 my-7' />

              <div className='flex flex-col lg:flex-row justify-between lg:items-center gap-6 my-8'>

                      <div className='flex lg:justify-start gap-6'>
                        <p className='font-mono'>01</p>
                        <div className='w-full'>
                          <h1 className='text-8xl lg:text-[128px] font-interTight text-[#561D0A] tracking-[-0.06em]'>Bastion HMO</h1>
                        </div>
                      </div>



                      <p className='text-[#2020209c] lg:hidden'>
                      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form  of a document or a typeface without relying on meaningful content. 
                      </p>


                      <p className='text-[#2020209c] lg:block hidden'>
                      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to  <br /> demonstrate the visual form  of a document or a typeface without relying on meaningful <br /> content. 
                      </p>
                      

              </div>


                <div className='w-full flex flex-col lg:flex-row gap-4'>
                          <div className='w-full lg:w-[30%] bg-[#343434] h-[450px] lg:h-[750px]'>            
                              <img src={AWIP4}  alt=""  className='w-full h-full object-cover'/>
                              </div>
                              <div className='w-full lg:w-[70%] bg-[#343434] h-[750px]'>
                              <img src={AWIP2}  alt=""  className='w-full h-full object-cover'/>
                          </div>
              </div>


      

      {/* <ImgScro/> */}



      {/* <ProjectsComponent /> */}
    </div>
  )
}

export default ProjectsSpace