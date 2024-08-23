import React from 'react'
import Vid from './Hvideo.mp4'

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
                    <source src={Vid} type="video/mp4" />
                    Your browser does not support the video tag.
                   </video>
                 </div>
            </div>


            <div className='flex'>
                <div>
                    <h2>
                    The Midnight Elegance Home project involved designing an entire home with a sophisticated dark theme. The focus was on creating a modern, luxurious living space that uses dark colors and rich textures to evoke a sense of elegance and comfort.
                    </h2>
                </div>

                <div>
                <h2>
                     <span> Project Details </span>
                        The Coastal Harmony Home project began with an in-depth consultation to understand the client’s vision of a modern coastal retreat. The design concept emphasized natural materials, a soothing color palette, and expansive views of the ocean. Key features included:

                        Open Living Spaces: Creating open-plan living areas to enhance the flow and connection between indoor and outdoor spaces.

                        Natural Materials: Using reclaimed wood, stone, and natural fibers to evoke a sense of harmony with the surrounding environment.

                        Large Windows: Installing floor-to-ceiling windows to maximize natural light and provide unobstructed ocean views.

                        Outdoor Living: Designing extensive outdoor areas, including a deck, pool, and garden, for relaxation and entertaining.

                        Modern Amenities: Incorporating state-of-the-art kitchen appliances, smart home technology, and luxurious bathroom fixtures.
                    </h2>
                </div>
            </div>


    </div>
    </div>
  )
}

export default ProjectDetails
