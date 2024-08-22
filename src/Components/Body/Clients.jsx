import React from 'react'
import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <div >
            <div className='flex flex-col items-center font-interTight mt-6'>
               <div className="tag">CLIENTS</div>
             <h2 className='text-[42px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Our Beloved Clients</h2>
            </div>
        
    <Marquee>
        
    <div className='font-interTight flex gap-5 px-6 mt-6 overflow-hidden'>

            <h1 className='bg-[#F7F6E9] border border-[#561d0a] rounded-lg text-[#561d0a] font-semibold text-wrap text-4xl px-6 py-2'>Bastion</h1>
            
            <h1 className='bg-[#F7F6E9] border border-[#561d0a] rounded-lg  text-[#561d0a] font-semibold text-wrap text-4xl px-6 py-2'>Bastion</h1>
            </div>


    </Marquee>
    </div>
  )
}

export default Clients
