import React from 'react'
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";
import AWIP1 from './Images/AWIP1.jpg'
import AWIP2 from './Images/AWIP2.jpg'
import AWIP3 from './Images/AWIP3.jpg'

const ImageScroll = () => {
    const constraintsRef = useRef(null);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { triggerOnce: true });

    return (
        <div className=" w-full " ref={constraintsRef}>

            <div className="grid grid-rows-3 lg:grid-cols-4 gap-4 py-10">

                {/* <div className="  ">
                    <div className="bg-[#d7d7d7] rounded-xl h-[600px]">
                        <img src={AWIP1} alt="" className='w-full rounded-xl h-full object-cover'/>
                    </div>
               
                </div> */}


                <div className=" lg:col-span-2 ">
                    <div className="bg-[#d7d7d7] rounded-xl h-[600px]">
                        <img src={AWIP2} alt="" className='w-full rounded-xl h-full object-cover'/>
                    </div>
                    <h2 className='text-[#000000] text-[32px] leading-[1.00] font-interTight pt-6'>Afya Care</h2>
                </div>



                <div className="col-span-2 " >
                    <div className="bg-[#F7F6E9] rounded-xl h-[600px]">
                    
                    </div>
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