import React from 'react'
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";
import AWIP1 from './Images/AWIP1.jpg'
import AWIP2 from './Images/AWIP2.jpg'
import AWIP3 from './Images/AWIP3.jpg'

const ImageScroll = () => {
  
    return (
        <div>

            <div className="grid lg:grid-cols-4 rounded-xl bg-[#F7F6E9]  py-10">

                <div className=" lg:col-span-2 ">
                    <div className="bg-[#d7d7d7] rounded-xl h-[600px]">
                        <img src={AWIP2} alt="" className='w-full rounded-xl h-full object-cover'/>
                    </div>
               
                </div>


                <div className="col-span-2 " >
                    <div className="bg-[#F7F6E9] rounded-xl h-[600px]">
                    <h2 className='text-[#000000] text-[32px] leading-[1.00] font-interTight pt-6'>Afya Care</h2>
                    </div>
                </div>

             
            </div>

        </div>
    );
};

export default ImageScroll