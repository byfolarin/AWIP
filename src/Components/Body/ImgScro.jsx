import React, { useRef, useEffect } from 'react'
import AWIP1 from './Images/AWIP1.jpg'
import AWIP2 from './Images/AWIP2.jpg'
import AWIP3 from './Images/AWIP3.jpg'
import AWIP4 from '././Images/AWIP4.jpg'


const ImgScro = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const element = scrollRef.current;
        if (element) {
            const onWheel = (e) => {
                if (e.deltaY == 0) return;
                
                e.preventDefault();
                element.scrollLeft += e.deltaY;
            };
            element.addEventListener('wheel', onWheel, { passive: false });
            return () => element.removeEventListener('wheel', onWheel);
        }
    }, []);

    return (
        <div 
            ref={scrollRef}
            className="overflow-x-scroll whitespace-nowrap scrollbar-hide"
            style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
        >
            <div className="inline-flex gap-4 py-10 mx-4">
                <div className="w-[350px] inline-block">
                    <div className="bg-[#d7d7d7] h-[500px]">
                        <img src={AWIP1} alt="" className='w-full h-full object-cover'/>
                    </div>
                    <h2 className='text-[#561D0A] text-[32px] leading-[1.00] font-interTight pt-6'>Verraki</h2>
                </div>

                <div className="w-[600px] inline-block">
                    <div className="bg-[#d7d7d7] h-[500px]">
                        <img src={AWIP2} alt="" className='w-full h-full object-cover '/>
                    </div>
                    <h2 className='text-[#561D0A] text-[32px] leading-[1.00] font-interTight pt-6'>Afya Care</h2>
                </div>

                <div className="w-[350px] inline-block">
                    <div className="bg-[#d7d7d7] h-[500px]">
                        <img src={AWIP3} alt="" className='w-full h-full object-cover '/>
                    </div>
                    <h2 className='text-[#561D0A] text-[32px] leading-[1.00] font-interTight pt-6'>Bastion HMO</h2>
                </div>

                <div className="w-[600px] inline-block">
                    <div className="bg-[#d7d7d7] h-[500px]">
                        <img src={AWIP4} alt="" className='w-full h-full object-cover '/>
                    </div>
                    <h2 className='text-[#561D0A] text-[32px] leading-[1.00] font-interTight pt-6'>Another Project</h2>
                </div>
            </div>
        </div>
    );
};

export default ImgScro