import React from 'react'
import Baslogo from './Baslogo.png'
import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <div className='mt-12'>
            <div className='flex flex-col items-center font-interTight mt-6'>
               <div className="tag">CLIENTS</div>
             <h2 className='text-[42px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Our Beloved Clients</h2>
            </div>
        
    <Marquee speed={100}  >
           
       
        <div className='font-interTight flex gap-16 px-6 mt-6 overflow-hidden'>

              <img src={Baslogo} alt="Logo" className="w-full max-w-[200px] aspect-auto"/>
          
              <img src={Baslogo} alt="Logo" className="w-full max-w-[200px] aspect-auto"/>
              
              <img src={Baslogo} alt="Logo" className="w-full max-w-[200px] aspect-auto"/>
        
              <img src={Baslogo} alt="Logo" className="w-full max-w-[200px] aspect-auto"/>
          
              <img src={Baslogo} alt="Logo" className="w-full max-w-[200px] aspect-auto"/>

        </div>
       

      


    </Marquee>
    </div>
  )
}

export default Clients
