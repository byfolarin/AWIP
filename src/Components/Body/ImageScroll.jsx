import React from 'react'
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";
import AWIP1 from './Images/AWIP1.jpg'
import AWIP2 from './Images/AWIP2.jpg'
import AWIP3 from './Images/AWIP3.jpg'

const ImageScroll = () => {


    return (
        <div >

            <div className="grid lg:grid-cols-3 gap-4 py-10">


                <div className="group relative overflow-hidden">

                    <div className="bg-[#d7d7d7] rounded-xl h-[500px] overflow-hidden">

                        <img src={AWIP2} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'/>

                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-white font-bold text-2xl">Afya Care</p>
                        </div>
                    </div>
                    
                    <h2 className='text-[#000000] text-[32px] leading-[1.00] font-interTight pt-6 transition-transform duration-300 group-hover:translate-x-2'>Afya Care</h2>

                </div>

                <div className="" >

                    <div className="bg-[#F7F6E9] rounded-xl h-[500px]">
                    <img src={AWIP2} alt="" className='w-full rounded-xl h-full object-cover'/>
                    </div>

                    <h2 className='text-[#000000] text-[32px] leading-[1.00] font-interTight pt-6'>Verraki Partners</h2>
                    
                </div>


                <div className="" >
                    <div className="bg-[#F7F6E9] rounded-xl h-[500px]">
                    <img src={AWIP2} alt="" className='w-full rounded-xl h-full object-cover'/>
                    </div>

                    <h2 className='text-[#000000] text-[32px] leading-[1.00] font-interTight pt-6'>Verraki Partners</h2>
                </div>


                <div className="" >
                    <div className="bg-[#F7F6E9] rounded-xl h-[500px]">
                    <img src={AWIP2} alt="" className='w-full rounded-xl h-full object-cover'/>
                    </div>

                    <h2 className='text-[#000000] text-[32px] leading-[1.00] font-interTight pt-6'>Verraki Partners</h2>
                </div>


                <div className="col-span-2 " >
                    <div className="bg-[#F7F6E9] rounded-xl h-[500px]">
                    <img src={AWIP2} alt="" className='w-full rounded-xl h-full object-cover'/>
                    </div>

                    <h2 className='text-[#000000] text-[32px] leading-[1.00] font-interTight pt-6'>Verraki Partners</h2>
                </div>

             
            </div>









            


        </div>
    );
};

export default ImageScroll