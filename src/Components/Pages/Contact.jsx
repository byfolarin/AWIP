import React from 'react'

const Contact = () => {
  return (
    <div className='flex gap-12'>


          <div className='w-[50%] h-screen'>
          <h1 className='text-[164px] text-[#000000]  tracking-[-0.05em] pt-4 font-interTight leading-[1.00]'>
              Let's Talk
            </h1>

            <div className='py-16'>
            <hr />
            <h2 className='text-[24px] py-8 px-16 font-interTight font-light cursor-pointer'>Hello@awip.com.ng</h2>
            <hr />
            <h2 className='text-[24px] py-8 px-16 font-interTight font-light cursor-pointe'>+234 803 3927 062 <br />
                +1 979 7090 732 <br />
                +234 809 230 5980</h2>
            <hr />
            <h2 className='text-[24px] py-8 px-16 font-interTight font-light cursor-pointe'>12A, Alake Onileere Crescent, Gbagada, Lagos</h2>
            <hr />
          </div>
          </div>
          <div  className='w-[50%] h-screen bg-slate-400 sticky'></div>


    </div>
  )
}

export default Contact

