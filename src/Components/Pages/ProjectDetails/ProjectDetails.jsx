import React from 'react'
// import AWIP1 from './Body/Images/AWIP1.jpg'

const ProjectDetails = () => {
  return (
    <div>
      <div className='px-5 bg-[#FFFEF2]'>
            <div className='flex items-center pt-24 '>
                <div >
                    <h1 className='text-[64px] tracking-[-0.05em] leading-[1.00]  lg:block my-12  text-[#561D0A]  lg:text-[145px]
                    font-medium lg:tracking-[-0.05em] font-interTight '>
                        Afya Care
                    </h1>       
                </div>
            </div>

            

                    <div className='rounded-xl '>

                        <div>
                            <video  className=" w-full object-cover rounded-xl " autoPlay muted loop>
                                {/* <source src={myvid} type="video/mp4" /> */}
                                Your browser does not support the video tag.
                            </video>
                        </div>


                    

                    </div>
    </div>
    </div>
  )
}

export default ProjectDetails
