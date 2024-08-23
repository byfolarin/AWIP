import React from 'react'
import Baslogo from './Baslogo.png'

const Testimonials = () => {
  return (
    <div className='px-6'  >

        <div className='flex-col justify-end bg-[#561D0A]  rounded-2xl font-interTight px-6 py-7'>

        

                <div className='w-full max-w-screen flex flex-col items-center lg:flex-end '>

                <h1 className='text-[164px]  text-[#F7F6E9] py-6 font-medium tracking-[-0.04em] font-interTight leading-[1.00]'>
                    Testimonials
                </h1>

                </div>

                <div className='py-6'>


                <div className='grid grid-cols-3 gap-4 px-4 '>

                    <div className='py-16 px-8 flex flex-col justify-between rounded-xl border hover:bg-[#F7F6E9] border-white bg-[#FFFEF2]'>

                    <div className='space-y-20'>

                        <div>
                            <h3 className='text-[20px] tracking-[-0.03em] font-medium text-[#454545b6] '>Bastion HMO</h3>
                            <h3 className='text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Dotun Oyewole</h3>
                        </div>
                    </div>

                   <img src={Baslogo} alt="Logo" className="w-full max-w-[200px] aspect-auto"/>
                 </div>



                                <div className='py-16 px-8 flex flex-col col-span-2 justify-between rounded-xl border  border-white bg-[#FFFEF2]'>
                                <div className='space-y-20'>
                                
                                    <div>
                                       
                                        <p>" Over 200 successful projects completed, showcasing our extensive experience and portfolio, AWIP was the perfect choice to go with, there was hardly any bidding as they were miles ahead of even the number 2, working with them and their attention to details is too impressive. "</p>
                                    </div>

                                    <h2 className='text-[134px] text-[#d4d3c3] lg:tracking-[-0.05em] font-semibold'>"Attention"</h2>
                                </div>
                                </div>


                        </div>


                <div className='flex  justify-center w-[100%] '>
                        
                        <div className='font-medium text-[24px] text-[#FFFEF2] w-[60%] leading-tight  pt-24 text-center' >
                        To create unique, functional, and sustainable living spaces that enhance the quality of life for our clients. We aim to blend creativity with practicality, delivering designs that are both aesthetically pleasing and deeply personal.
                        </div>

                </div>
            

                </div>


    </div>
    </div>
  )
}

export default Testimonials
