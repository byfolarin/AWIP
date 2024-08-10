import React, { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue } from "framer-motion";
import AWIP1 from './AWIP1.jpg'
import AWIP2 from './AWIP2.jpg'
import AWIP3 from './AWIP3.jpg'

const Projects = () => {
    const x = useMotionValue(0);
    const containerRef = useRef(null);
    const [dragConstraints, setDragConstraints] = useState({ right: 0, left: 0 });

    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.scrollWidth;
            const viewportWidth = containerRef.current.offsetWidth;
            setDragConstraints({ right: 0, left: -(containerWidth - viewportWidth) });
        }
    }, []);

    return (
        <div className="w-screen overflow-hidden">
            <motion.div
                ref={containerRef}
                className="flex gap-4 items-center cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={dragConstraints}
                style={{ x }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                whileTap={{ cursor: "grabbing" }}
            >
                {[AWIP1, AWIP2, AWIP3, AWIP3, AWIP3].map((img, index) => (
                    <motion.div 
                        key={index} 
                        className="w-[calc(33.33vw-16px)] flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="bg-[#d7d7d7] h-[550px]">
                            <img src={img} alt="" className='w-full h-full object-cover'/>
                        </div>
                        <h2 className='text-[#561D0A] text-[3vw] leading-[1.00] font-interTight pt-4'>
                            {index === 0 ? "Verraki Partners" : 
                             index === 1 ? "Afya Care" :
                             index === 2 ? "Bastion HMO" :
                             index === 3 ? "Bastion HMO" : "Energy CC"}
                        </h2>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Projects