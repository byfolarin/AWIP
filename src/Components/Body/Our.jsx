import React from 'react'
import AWIP1 from './Images/AWIP1.jpg'


const Our = () => {
  return (
    <div className='mt-11'>
        <div className='grid grid-cols-3 gap-4 px-4 font-interTight'>

                    <div className='py-16 px-8 flex flex-col justify-between rounded-xl border hover:bg-[#F7F6E9] border-white bg-[#FFFEF2]'>
                            <div className='space-y-20'>

                                <div>
                                <img src={AWIP1} alt="" />
                            </div>
                            </div>
                    </div>



                    <div className='py-16 px-8 flex flex-col col-span-2 justify-between rounded-xl border border-white bg-[#561D0A]'>
                            <div className='space-y-20'>

                            <div>
                                <h3 className='text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A] '>Bastion HMO</h3>
                                <p>Over 200 successful projects completed, showcasing our extensive experience and portfolio.</p>
                            </div>

                            <h2 className='text-[134px] text-[#561D0A] lg:tracking-[-0.05em] font-semibold'>"Attention"</h2>
                            </div>
                    </div>


                    </div>
      
    </div>
  )
}

export default Our
