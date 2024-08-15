import React from 'react'
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";
import AWIP1 from './Images/AWIP1.jpg'
import AWIP2 from './Images/AWIP2.jpg'
import AWIP3 from './Images/AWIP3.jpg'
import AWIP4 from '././Images/AWIP4.jpg'


const ImageScroll = () => {
    const constraintsRef = useRef(null);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { triggerOnce: true });

    return (
        <div className=" justify-center items-center" ref={constraintsRef}>

            <div className="flex gap-4 py-10 mx-4">

                <div className="w-[350px] ">
                    <div className="bg-[#d7d7d7] h-[500px]">
                        <img src={AWIP1} alt="" className='w-full h-full object-cover hover:blur-sm'/>
                    </div>
                    <h2 className='text-[#000000] text-[32px] leading-[1.00] font-interTight pt-6'>Verraki Homes</h2>
                </div>

                <div className="w-[600px] ">
                    <div className="bg-[#d7d7d7] h-[500px]">
                        <img src={AWIP2} alt="" className='w-full h-full object-cover hover:blur-sm'/>
                    </div>
                    <h2 className='text-[#000000] text-[32px] leading-[1.00] font-interTight pt-6'>Afya Care</h2>
                </div>

                <div className="w-[350px] " >
                    <div className="bg-[#d7d7d7] h-[500px]">
                        <img src={AWIP3} alt="" className='w-full h-full object-cover hover:blur-sm '/>
                    </div>
                    <h2 className='text-[#000000] text-[32px] leading-[1.00] font-interTight pt-6'>Bastion HMO</h2>
                </div>

             
            </div>

            <motion.hr
            initial={{ width: 0 }}
            animate={isInView ? { width: '100%' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='py-2'
          />
        </div>
    );
};

export default ImageScroll