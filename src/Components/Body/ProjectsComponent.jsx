import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AWIP1 from './AWIP1.jpg'
import AWIP2 from './AWIP2.jpg'
import AWIP3 from './AWIP3.jpg'
import AWIP4 from './AWIP4.jpg'


const ProjectsComponent = () => {


    const containerRef = useRef(null)
    const [width, setWidth] = useState(0)
  
    const projectItems = [
      { title: "Verraki", description: "Lorem ipsum dolor sit amet consectetur. Mattis egestas ut arcu scelerisque orci mauris. Scelerisque aenean lobortis volutpat in quam. Sit velit libero varius hendrerit egestas aenean.", image: AWIP1 },
      { title: "Afya Care", description: "Lorem ipsum dolor sit amet consectetur. Mattis egestas ut arcu scelerisque orci mauris. Scelerisque aenean lobortis volutpat in quam. Sit velit libero varius hendrerit egestas aenean.", image: AWIP2 },
      { title: "Bastion HMO", description: "Lorem ipsum dolor sit amet consectetur. Mattis egestas ut arcu scelerisque orci mauris. Scelerisque aenean lobortis volutpat in quam. Sit velit libero varius hendrerit egestas aenean.", image: AWIP3 },
      { title: "Mummy Delicious", description: "Lorem ipsum dolor sit amet consectetur. Mattis egestas ut arcu scelerisque orci mauris. Scelerisque aenean lobortis volutpat in quam. Sit velit libero varius hendrerit egestas aenean.", image: AWIP4 },
    ]
  
    useEffect(() => {
      if (containerRef.current) {
        setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth)
      }
    }, [])

  return (
  <div className='my-12 overflow-hidden' ref={containerRef}>
      <motion.div 
        className='flex gap-[64px] cursor-grab  active:cursor-grabbing'
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.1}
      >
        {[...projectItems, ...projectItems, ...projectItems].map((item, index) => (
            
          <motion.div key={index} className='mx-8 flex gap-7'>
            <div className='flex items-center relative'>
              <div className='w-[450px] h-[450px] bg-slate-400'>
                <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
              </div>
            </div>

            <div className='w-[423px]'>
              <h2 className='text-[#561D0A] text-[64px] leading-[1.00] font-interTight '>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default ProjectsComponent
