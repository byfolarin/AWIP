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

            <div className="group relative overflow-hidden cursor-pointer">
                    <div className="bg-[#d7d7d7] rounded-xl h-[500px] overflow-hidden relative">
                        <img src={AWIP2} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'/>
                        <div className="absolute inset-0 bg-[#000000c0] bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl">
                        <p className="text-[#FFFEF2] font-medium text-4xl">Afya Care</p>
                        </div>
                    </div>
                    
                    <h2 className='text-[#561D0A] text-[32px] leading-[1.00] font-interTight pt-6 transition-transform duration-300 group-hover:translate-x-2'>Afya Care</h2>
            </div>






            <div className="group relative overflow-hidden cursor-pointer">
                    <div className="bg-[#d7d7d7] rounded-xl h-[500px] overflow-hidden relative">
                        <img src={AWIP3} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'/>
                        <div className="absolute inset-0 bg-[#000000c0] bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl">
                        <p className="text-[#FFFEF2] font-medium text-4xl">Afya Care</p>
                        </div>
                    </div>
                    
                    <h2 className='text-[#561D0A] text-[32px] leading-[1.00] font-interTight pt-6 transition-transform duration-300 group-hover:translate-x-2'>Afya Care</h2>
            </div>






            <div className="group relative overflow-hidden cursor-pointer">
                    <div className="bg-[#d7d7d7] rounded-xl h-[500px] overflow-hidden relative">
                        <img src={AWIP2} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'/>
                        <div className="absolute inset-0 bg-[#000000c0] bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl">
                        <p className="text-[#FFFEF2] font-medium text-4xl">Afya Care</p>
                        </div>
                    </div>
                    
                    <h2 className='text-[#561D0A] text-[32px] leading-[1.00] font-interTight pt-6 transition-transform duration-300 group-hover:translate-x-2'>Afya Care</h2>
            </div>







            <div className="group relative overflow-hidden cursor-pointer">
                    <div className="bg-[#d7d7d7] rounded-xl h-[500px] overflow-hidden relative">
                        <img src={AWIP3} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'/>
                        <div className="absolute inset-0 bg-[#000000c0] bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl">
                        <p className="text-[#FFFEF2] font-medium text-4xl">Afya Care</p>
                        </div>
                    </div>
                    
                    <h2 className='text-[#561D0A] text-[32px] leading-[1.00] font-interTight pt-6 transition-transform duration-300 group-hover:translate-x-2'>Afya Care</h2>
            </div>





            <div className="group relative overflow-hidden cursor-pointer">
                    <div className="bg-[#d7d7d7] rounded-xl h-[500px] overflow-hidden relative">
                        <img src={AWIP2} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'/>
                        <div className="absolute inset-0 bg-[#000000c0] bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl">
                        <p className="text-[#FFFEF2] font-medium text-4xl">Afya Care</p>
                        </div>
                    </div>
                    
                    <h2 className='text-[#561D0A] text-[32px] leading-[1.00] font-interTight pt-6 transition-transform duration-300 group-hover:translate-x-2'>Afya Care</h2>
            </div>








            

            </div>
        </div>
    );
};

export default ImageScroll