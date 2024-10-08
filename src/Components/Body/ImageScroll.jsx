import React from 'react'
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";
import AWIP1 from './Images/AWIP1.jpg'
import AWIP2 from './Images/AWIP2.jpg'
import AWIP3 from './Images/AWIP3.jpg'
import AWIP4 from './Images/AWIP4.jpg'




const ImageScroll = () => {


    return (
        <div >

        <div className="grid lg:grid-cols-3 gap-x-2 gap-y-10 py-10">


        <Link to="/project-details" className="block">
                <div className="group relative overflow-hidden cursor-pointer">
                    <div className="bg-[#d7d7d7] rounded-xl h-[500px] overflow-hidden relative">
                        <img src={AWIP1} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'/>
                        <div className="absolute inset-0 bg-[#000000c0] opacity-0 group-hover:opacity-70 flex items-center justify-center transition-opacity duration-300 rounded-xl">
                            
                            <p className="text-[#FFFEF2] font-medium text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                Verraki Partners
                            </p>
                        </div>
                    </div>
                    
                    <h2 className='text-[#561D0A] text-[32px] leading-[1.00] font-interTight pt-6 transition-transform duration-300 group-hover:translate-x-2'>
                            Verraki Partners
                    </h2>
                </div>
             </Link>



             <div className="group relative overflow-hidden cursor-pointer">
                    <div className="bg-[#d7d7d7] rounded-xl h-[500px] overflow-hidden relative">
                        <img src={AWIP2} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'/>
                        <div className="absolute inset-0 bg-[#000000c0] opacity-0 group-hover:opacity-70 flex items-center justify-center transition-opacity duration-300 rounded-xl">
                            <p className="text-[#FFFEF2] font-medium text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                Afya Care
                            </p>
                        </div>
                    </div>
                    
                    <h2 className='text-[#561D0A] text-[32px] leading-[1.00] font-interTight pt-6 transition-transform duration-300 group-hover:translate-x-2'>
                        Afya Care
                    </h2>
             </div>





             <div className="group relative overflow-hidden cursor-pointer">
                    <div className="bg-[#d7d7d7] rounded-xl h-[500px] overflow-hidden relative">
                        <img src={AWIP3} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'/>
                        <div className="absolute inset-0 bg-[#000000c0] opacity-0 group-hover:opacity-70 flex items-center justify-center transition-opacity duration-300 rounded-xl">
                            <p className="text-[#FFFEF2] font-medium text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                Afya Care
                            </p>
                        </div>
                    </div>
                    
                    <h2 className='text-[#561D0A] text-[32px] leading-[1.00] font-interTight pt-6 transition-transform duration-300 group-hover:translate-x-2'>
                        Afya Care
                    </h2>
             </div>






             <div className="group relative overflow-hidden cursor-pointer">
                    <div className="bg-[#d7d7d7] rounded-xl h-[500px] overflow-hidden relative">
                        <img src={AWIP4} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'/>
                        <div className="absolute inset-0 bg-[#000000c0] opacity-0 group-hover:opacity-70 flex items-center justify-center transition-opacity duration-300 rounded-xl">
                            <p className="text-[#FFFEF2] font-medium text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                Afya Care
                            </p>
                        </div>
                    </div>
                    
                    <h2 className='text-[#561D0A] text-[32px] leading-[1.00] font-interTight pt-6 transition-transform duration-300 group-hover:translate-x-2'>
                        Afya Care
                    </h2>
             </div>





             <div className="group relative overflow-hidden cursor-pointer">
                    <div className="bg-[#d7d7d7] rounded-xl h-[500px] overflow-hidden relative">
                        <img src={AWIP1} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'/>
                        <div className="absolute inset-0 bg-[#000000c0] opacity-0 group-hover:opacity-70 flex items-center justify-center transition-opacity duration-300 rounded-xl">
                            <p className="text-[#FFFEF2] font-medium text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                Afya Care
                            </p>
                        </div>
                    </div>
                    
                    <h2 className='text-[#561D0A] text-[32px] leading-[1.00] font-interTight pt-6 transition-transform duration-300 group-hover:translate-x-2'>
                        Afya Care
                    </h2>
             </div>







            

            </div>
        </div>
    );
};

export default ImageScroll