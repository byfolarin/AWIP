import React from 'react'
import Vid from './Hvideo.mp4'
import Projects from '../../Body/Projects'
import AWIP2 from '../../Body/Images/AWIP2.jpg'
import Footer from '../../Body/Footer'
import Marquee from 'react-fast-marquee'

const ProjectDetails = () => {
  return (
    <div>
      <div className='px-4 sm:px-6 md:px-8 lg:px-12 bg-[#FFFEF2] font-interTight leading-snug'>

      <div className="overflow-hidden pt-24"> {/* Add this wrapper div */}
        <Marquee className="py-4 sm:py-6 md:py-8 lg:py-12" speed={50} gradientWidth={50}>
          <h1 className='text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[174px] font-medium text-[#561D0A] tracking-[-0.05em] font-interTight leading-[1.00] whitespace-nowrap pr-4'>
           - Afya Care - Works - Afya Care
          </h1>
        </Marquee>
      </div>

        <div className='rounded-xl'>
          <video className="w-full object-cover rounded-xl" autoPlay muted loop>
            <source src={Vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className='flex flex-col md:flex-row gap-8 py-8'>
          <div className='w-full md:w-[50%]'>
            <h2 className='font-semibold text-[#561D0A] text-2xl sm:text-3xl md:text-[32px] pt-5'>
              The Midnight Elegance Home project involved designing an entire home with a sophisticated dark theme. The focus was on creating a modern, luxurious living space that uses dark colors and rich textures to evoke a sense of elegance and comfort.
            </h2>
          </div>

          <div className='w-full md:w-[50%] lg:w-[40%] font-medium'>
            <h2>
              <div className='font-semibold text-xl sm:text-2xl md:text-[24px] text-[#561D0A] py-5'>Project Details</div>
              The Coastal Harmony Home project began with an in-depth consultation to understand the client's vision of a modern coastal retreat. The design concept emphasized natural materials, a soothing color palette, and expansive views of the ocean. Key features included:
              
              {/* ... rest of the content ... */}
            </h2>
          </div>
        </div>

        <div className='rounded-xl'>
          <video className="w-full object-cover rounded-xl" autoPlay muted loop>
            <source src={Vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className='flex justify-center w-full bg-[#561D0A] rounded-xl my-8'>                     
          <div className='font-medium text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#FFFEF2] w-full md:w-[80%] lg:w-[60%] leading-tight py-12 sm:py-16 md:py-20 lg:py-24 text-center'>
            " To create unique, functional, and sustainable living spaces that enhance the quality of life for our clients. We aim to blend creativity with practicality, delivering designs that are both aesthetically pleasing and deeply personal. "
          </div>
        </div>

        <div className='flex flex-col items-center justify-center pt-12 sm:pt-16 md:pt-20 lg:pt-24'>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">PROJECT IMAGES</p>
          <div>
            <h1 className='tracking-[-0.05em] leading-[1.00] my-4 text-[#561D0A] text-4xl sm:text-5xl md:text-6xl lg:text-[145px] font-medium lg:tracking-[-0.05em] font-interTight text-center'>
              Showcase
            </h1>       
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 py-10">
          {/* First column */}
          <div className="grid grid-cols-1 gap-4 py-5 sm:py-8 md:py-10">
            {/* ... repeat this structure for each image ... */}
            <div>
              <div className="bg-[#d7d7d7] rounded-xl h-[300px] sm:h-[450px] md:h-[600px] lg:h-[900px]">
                <img src={AWIP2} alt="" className='w-full rounded-xl h-full object-cover'/>
              </div>
              <h2 className='text-[#000000] text-sm sm:text-base md:text-lg lg:text-[18px] font-interTight pt-4 sm:pt-6'>Open-plan living room with floor-to-ceiling windows offers expansive ocean views and ample natural light.</h2>
            </div>
            {/* ... repeat for other images ... */}
          </div>

          {/* Second column */}
          <div className="grid grid-cols-1 gap-4 py-5 sm:py-8 md:py-10">
            {/* ... repeat this structure for each image ... */}
            <div>
              <div className="bg-[#d7d7d7] rounded-xl h-[300px] sm:h-[450px] md:h-[600px]">
                <img src={AWIP2} alt="" className='w-full rounded-xl h-full object-cover'/>
              </div>
              <h2 className='text-[#000000] text-sm sm:text-base md:text-lg lg:text-[18px] font-interTight pt-4 sm:pt-6'>Open-plan living room with floor-to-ceiling windows offers expansive ocean views and ample natural light.</h2>
            </div>
            {/* ... repeat for other images ... */}
          </div>
        </div>

        <div className='bg-[#F7F6E9] py-8 rounded-xl'>
          <Projects/>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default ProjectDetails