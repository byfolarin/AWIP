import React from 'react'
import Vid from './Hvideo.mp4'
import AWIP2 from '../../Body/Images/AWIP2.jpg'


const ProjectDetails = () => {
  return (
    <div>
      <div className='px-12 bg-[#FFFEF2] font-interTight leading-snug'>

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
                    <source src={Vid} type="video/mp4" />
                    Your browser does not support the video tag.
                   </video>
                 </div>
            </div>


            <div className='flex gap-8 py-8'>

                <div className='w-[50%]'>
                    <h2 className='font-semibold text-[#561D0A] text-[32px] pt-5'>
                    The Midnight Elegance Home project involved designing an entire home with a sophisticated dark theme. The focus was on creating a modern, luxurious living space that uses dark colors and rich textures to evoke a sense of elegance and comfort.
                    </h2>
                </div>

                <div className='w-[40%] font-medium'>
                <h2>
                     <div className='font-semibold text-[24px] text-[#561D0A] py-5'> Project Details </div>
                        The Coastal Harmony Home project began with an in-depth consultation to understand the client’s vision of a modern coastal retreat. The design concept emphasized natural materials, a soothing color palette, and expansive views of the ocean. Key features included: <br />

                        <br />
                       <span className='font-semibold text-[#561D0A]'>Open Living Spaces: </span> Creating open-plan living areas to enhance the flow and connection between indoor and outdoor spaces. <br />

                        <br />
                        <span className='font-semibold text-[#561D0A]'>Natural Materials: </span> Using reclaimed wood, stone, and natural fibers to evoke a sense of harmony with the surrounding environment. <br />

                        <br />
                        <span className='font-semibold text-[#561D0A]'>Large Windows: </span> Installing floor-to-ceiling windows to maximize natural light and provide unobstructed ocean views. <br />

                        <br />
                        <span className='font-semibold text-[#561D0A]'>Outdoor Living: </span> Designing extensive outdoor areas, including a deck, pool, and garden, for relaxation and entertaining. <br />

                        <br />
                        <span className='font-semibold text-[#561D0A]'>Modern Amenities: </span> Incorporating state-of-the-art kitchen appliances, smart home technology, and luxurious bathroom fixtures.
                    </h2>
                </div>
            </div>


            <div className='rounded-xl '>
                <div>
                  <video  className=" w-full object-cover rounded-xl " autoPlay muted loop>
                    <source src={Vid} type="video/mp4" />
                    Your browser does not support the video tag.
                   </video>
                 </div>
            </div>


            <div className='flex  justify-center w-[100%] bg-[#561D0A] rounded-xl my-8 '>                     
                <div className='font-medium text-[32px] text-[#FFFEF2] w-[60%] leading-tight  py-24 text-center' >
                  " To create unique, functional, and sustainable living spaces that enhance the quality of life for our clients. We aim to blend creativity with practicality, delivering designs that are both aesthetically pleasing and deeply personal. "
                </div>
            </div>


            <div className='flex flex-col items-center justify-center pt-24 '>
                <p>PROJECT IMAGES</p>
                <div >
                    <h1 className=' tracking-[-0.05em] leading-[1.00] my-4  text-[#561D0A]  lg:text-[145px] font-medium lg:tracking-[-0.05em] font-interTight '>
                        Showcase
                    </h1>       
                </div>
            </div>



                <div className="grid lg:grid-cols-2 gap-4 py-10">

                        <div className="  ">
                                <div className="bg-[#d7d7d7] rounded-xl h-[900px]">
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
    </div>
  )
}

export default ProjectDetails
