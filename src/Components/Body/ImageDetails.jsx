import React from 'react'
import AWIP1 from './Images/AWIP1.jpg'
import AWIP2 from './Images/AWIP2.jpg'
import AWIP3 from './Images/AWIP3.jpg'

const ImageDetails = () => {
  return (
    <div>
            <div className="grid lg:grid-cols-2 gap-4 py-10">

              <div className="  ">
                        <div className="bg-[#d7d7d7] rounded-xl h-[600px]">
                            <img src={AWIP2} alt="" className='w-full rounded-xl h-full object-cover'/>
                        </div>
                        <h2 className='text-[#000000] text-[32px] leading-[1.00] font-interTight pt-6'>Afya Care</h2>
                    </div>



                    <div className="" >
                        <div className="bg-[#F7F6E9] rounded-xl h-[600px]">
                        <img src={AWIP2} alt="" className='w-full rounded-xl h-full object-cover'/>
                        </div>

                        <h2 className='text-[#000000] text-[32px] leading-[1.00] font-interTight pt-6'>Verraki Partners</h2>
                    </div>
      
            </div>
    </div>
  )
}

export default ImageDetails
