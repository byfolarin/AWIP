import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Projects = () => {
  const containerRef = useRef(null)
  const [dragConstraints, setDragConstraints] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.66%'])

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth
      const windowWidth = window.innerWidth
      setDragConstraints(windowWidth - containerWidth)
    }
  }, [])

  return (
    <div className='my-12 overflow-hidden' ref={containerRef}>
      <h1 className='text-[160px] my-12 text-[#561D0A] mx-4 font-extralight tracking-[-0.11em]
       font-interTight leading-[1.00]'>PROJECTS</h1>
      
      <motion.div 
        className='flex gap-[192px] cursor-grab active:cursor-grabbing'
        style={{ x }}
        drag="x"
        dragConstraints={{ right: 0, left: dragConstraints }}
        dragElastic={0.1}
      >
        <div className='mx-8 flex gap-7'>
          <div className='flex items-center relative'>
            <div className='w-[450px] h-[450px] bg-slate-400'></div>
            <div className='w-[250px] h-[250px] bg-slate-500 absolute bottom-0 left-0 -translate-x-1/2 -translate-y-1/2'>
            </div>
          </div>

          <div className='w-[423px] '>
            <h2 className='text-[#561D0A] text-[64px] font-interTight '>Verraki</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Mattis egestas ut arcu scelerisque orci mauris. Scelerisque aenean lobortis volutpat in quam. Sit velit libero varius hendrerit egestas aenean.</p>
          </div>
        </div>

        <div className='mx-8 flex gap-7'>
          <div className='flex items-center relative'>
            <div className='w-[450px] h-[450px] bg-slate-400'></div>
            <div className='w-[250px] h-[250px] bg-slate-500 absolute bottom-0 left-0 -translate-x-1/2 -translate-y-1/2'>
            </div>
          </div>

          <div className='w-[423px]'>
            <h2 className='text-[#561D0A] text-[64px] font-interTight '>Afya Care</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Mattis egestas ut arcu scelerisque orci mauris. Scelerisque aenean lobortis volutpat in quam. Sit velit libero varius hendrerit egestas aenean.</p>
          </div>
        </div>

        <div className='mx-8 flex gap-7'>
          <div className='flex items-center relative'>
            <div className='w-[450px] h-[450px] bg-slate-400'></div>
            <div className='w-[250px] h-[250px] bg-slate-500 absolute bottom-0 left-0 -translate-x-1/2 -translate-y-1/2'>
            </div>
          </div>

          <div className='w-[423px]'>
            <h2 className='text-[#561D0A] text-[64px] font-interTight '>Bastion HMO</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Mattis egestas ut arcu scelerisque orci mauris. Scelerisque aenean lobortis volutpat in quam. Sit velit libero varius hendrerit egestas aenean.</p>
          </div>
        </div>


        <div className='mx-8 flex gap-7'>
          <div className='flex items-center relative'>
            <div className='w-[450px] h-[450px] bg-slate-400'></div>
            <div className='w-[250px] h-[250px] bg-slate-500 absolute bottom-0 left-0 -translate-x-1/2 -translate-y-1/2'>
            </div>
          </div>

          <div className='w-[423px]'>
            <h2 className='text-[#561D0A] text-[64px] font-interTight '>Eagle Consulting</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Mattis egestas ut arcu scelerisque orci mauris. Scelerisque aenean lobortis volutpat in quam. Sit velit libero varius hendrerit egestas aenean.</p>
          </div>
        </div>
      </motion.div>
      

    </div>
  )
}

export default Projects