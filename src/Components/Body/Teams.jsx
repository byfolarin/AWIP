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
    { title: "Femi Oyebola", description: "Principal Partner", icon: MrFemi },
    { title: "Interior Design", description: "Lead Architect", icon: MrFemi },
    { title: "Space Survey", description: "Design Lead", icon: MrFemi },
    { title: "3D Visualization", description: "Site Engineer", icon: MrFemi },
    { title: "Renovation", description: "Working Engineer", icon: MrFemi },
    { title: "Consultation", description: "Lead Architect", icon: MrFemi }
  ]


  return (
    <div className='px-6'>
        <div className='w-full max-w-screen flex flex-col font-interTight items-center lg:flex-end py-12'>

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

                  <div className='w-full h-full sm:h-40 lg:h-full hover:scale-110 flex items-center justify-center'>
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
