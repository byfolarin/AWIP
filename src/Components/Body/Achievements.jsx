import React from 'react'

const Achievements = () => {
  return (
    <div className='py-11 font-interTight px-5'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='py-8 lg:py-16 px-4 lg:px-8 flex flex-col justify-between rounded-xl border border-white bg-[#F7F6E9]'>
          <div className='space-y-8 lg:space-y-20'>
            <h2 className='text-6xl lg:text-[134px] lg:tracking-[-0.05em] font-semibold text-[#561D0A]'>200<span className='text-black'>+</span></h2>
            <div>
              <h3 className='text-2xl lg:text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A]'>Project Completed</h3>
              <p className='text-sm lg:text-base pt-4'>Over 200 successful projects completed, showcasing our extensive experience and portfolio.</p>
            </div>
          </div>
        </div>

        <div className='py-8 lg:py-16 px-4 lg:px-8 flex flex-col justify-between rounded-xl border border-white bg-[#F7F6E9]'>
          <div className='space-y-8 lg:space-y-20'>
            <h2 className='text-6xl lg:text-[134px] lg:tracking-[-0.05em] font-semibold text-[#561D0A]'>13<span className='text-black'>+</span></h2>
            <div>
              <h3 className='text-2xl lg:text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A]'>Years of Experience</h3>
              <p className='text-sm lg:text-base pt-4'>Over a decade of expertise in delivering high-quality solutions to our clients.</p>
            </div>
          </div>
        </div>

        <div className='py-8 lg:py-16 px-4 lg:px-8 flex flex-col justify-between rounded-xl border border-white bg-[#F7F6E9]'>
          <div className='space-y-8 lg:space-y-20'>
            <h2 className='text-6xl lg:text-[134px] text-[#561D0A] lg:tracking-[-0.05em] font-semibold'>150<span className='text-black'>+</span></h2>
            <div>
              <h3 className='text-2xl lg:text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A]'>Happy Clients</h3>
              <p className='text-sm lg:text-base pt-4'>Over 150 satisfied clients who trust our services and continue to work with us.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements