import React from 'react'
import MrFemi from './Group 2.png'
import densityMediumSvg from './density-medium.svg'
import linkedServicesSvg from './linked-services.svg'
import radioButtonUncheckedSvg from './radio-button-unchecked.svg'
import fullscreenSvg from './fullscreen.svg'
import filterSvg from './filter.svg'
import dynamicFormSvg from './dynamic-form.svg'
import { motion } from 'framer-motion'

const Teams = () => {


  const serviceCards = [
    { title: "Femi Oyebola", description: "Managing Partner", icon: MrFemi },
    { title: "Interior Design", description: "Transforming spaces with innovative and personalized interior design solutions.", icon: linkedServicesSvg },
    { title: "Space Survey", description: "Comprehensive space analysis to optimize functionality and aesthetics.", icon: radioButtonUncheckedSvg },
    { title: "3D Visualization", description: "Bringing ideas to life with stunning 3D renderings and walkthroughs.", icon: fullscreenSvg },
    { title: "Renovation", description: "Expertly updating and modernizing existing spaces for enhanced living and working.", icon: filterSvg },
    { title: "Consultation", description: "Professional advice and guidance for all your design and architectural needs.", icon: dynamicFormSvg }
  ]


  return (
    <div className='px-6'>
        <div className='w-full max-w-screen flex flex-col items-center lg:flex-end py-12'>

            <h1 className='text-[64px] lg:text-[164px]  text-[#561D0A] font-medium tracking-[-0.04em] font-interTight leading-[1.00]'>
            Teams
            </h1>


            <div className='py-16'>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {serviceCards.map((card, index) => (
              <div
               
                className='py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between rounded-xl hover:bg-[#F7F6E9] border border-white bg-[#FFFEF2]'
              >
                <div className='space-y-10 sm:space-y-16 lg:space-y-20'>
                  <div>
                    <h3 className='text-2xl sm:text-3xl lg:text-[32px] tracking-[-0.03em] font-semibold text-[#561D0A]'>{card.title}</h3>
                    <p className='mt-2 text-sm sm:text-base'>{card.description}</p>
                  </div>
                  <div className='w-full h-full sm:h-40 lg:h-full flex items-center justify-center'>
                    <img src={card.icon} alt={card.title} className='w-full h-full object-contain' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        

                 
                  

      </div>

        </div>
    </div>
  )
}

export default Teams
