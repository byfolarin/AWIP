import React from 'react'
import { motion } from "framer-motion";
import { useRef } from "react";
import AWIP1 from './AWIP1.jpg'
import AWIP2 from './AWIP2.jpg'
import AWIP3 from './AWIP3.jpg'
import AWIP4 from './AWIP4.jpg'

const ImageScroll = () => {
    const constraintsRef = useRef(null);

    return (
        <div className=" justify-center items-center" ref={constraintsRef}>

            <div className="flex gap-4 py-10 mx-4">

                <div className="w-[350px] ">
                    <div className="bg-[#d7d7d7] h-[500px]">
                        <img src={AWIP1} alt="" className='w-full h-full object-cover hover:blur-sm'/>
                    </div>
                    <h2 className='text-[#561D0A] text-[32px] leading-[1.00] font-interTight pt-6'>Verraki Homes</h2>
                </div>

                <div className="w-[600px] ">
                    <div className="bg-[#d7d7d7] h-[500px]">
                        <img src={AWIP2} alt="" className='w-full h-full object-cover hover:blur-sm'/>
                    </div>
                    <h2 className='text-[#561D0A] text-[32px] leading-[1.00] font-interTight pt-6'>Afya Care</h2>
                </div>

                <div className="w-[350px] " >
                    <div className="bg-[#d7d7d7] h-[500px]">
                        <img src={AWIP3} alt="" className='w-full h-full object-cover hover:blur-sm '/>
                    </div>
                    <h2 className='text-[#561D0A] text-[32px] leading-[1.00] font-interTight pt-6'>Bastion HMO</h2>
                </div>

             
            </div>
        </div>
    );
};

export default ImageScroll