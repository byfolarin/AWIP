import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AWIP1 from './AWIP1.jpg'
import AWIP2 from './AWIP2.jpg'
import AWIP3 from './AWIP3.jpg'
import AWIP4 from './AWIP4.jpg'

const ImageScroll = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

    return (
        <div ref={containerRef} className="h-[100vh]">
            <div className="sticky top-10 h-screen overflow-hidden">
                <motion.div
                    className="flex gap-2 pl-[300px]"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{
                        left: -((7 * 600) - window.innerWidth + 300),
                        right: 0
                    }}
                    dragElastic={0.2}
                >
                   <div className="w-[600px] flex-shrink-0 ">
                         <div className="bg-[#d7d7d7] h-[500px]">
                            <img src={AWIP1}  alt=""  className='w-full h-full object-cover'/>
                         </div>
                     </div>

                     <div className="w-[600px] flex-shrink-0 ">
                         <div className="bg-[#d7d7d7] h-[500px]">
                         <img src={AWIP2}  alt=""  className='w-full h-full object-cover'/>
                         </div>
                     </div>

                     <div className="w-[600px] flex-shrink-0 ">
                         <div className="bg-[#d7d7d7] h-[500px]">
                         <img src={AWIP3}  alt=""  className='w-full h-full object-cover'/>
                         </div>
                     </div>

                     <div className="w-[600px] flex-shrink-0 ">
                         <div className="bg-[#d7d7d7] h-[500px]">
                         <img src={AWIP4}  alt=""  className='w-full h-full object-cover'/>
                         </div>
                     </div>



                </motion.div>
            </div>
        </div>
    );
};

export default ImageScroll