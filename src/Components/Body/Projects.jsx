import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const Projects = () => {
  const containerRef = useRef(null)
  const [width, setWidth] = useState(0)
  const controls = useAnimationControls()
  const autoScrollRef = useRef(null)
  const scrollSpeedRef = useRef(1)
  const isDraggingRef = useRef(false)
  const lastScrollPos = useRef(0)

  const projectItems = [
    { title: "Verraki", description: "Lorem ipsum dolor sit amet consectetur. Mattis egestas ut arcu scelerisque orci mauris. Scelerisque aenean lobortis volutpat in quam. Sit velit libero varius hendrerit egestas aenean." },
    { title: "Afya Care", description: "Lorem ipsum dolor sit amet consectetur. Mattis egestas ut arcu scelerisque orci mauris. Scelerisque aenean lobortis volutpat in quam. Sit velit libero varius hendrerit egestas aenean." },
    { title: "Bastion HMO", description: "Lorem ipsum dolor sit amet consectetur. Mattis egestas ut arcu scelerisque orci mauris. Scelerisque aenean lobortis volutpat in quam. Sit velit libero varius hendrerit egestas aenean." },
    { title: "Eagle Consulting", description: "Lorem ipsum dolor sit amet consectetur. Mattis egestas ut arcu scelerisque orci mauris. Scelerisque aenean lobortis volutpat in quam. Sit velit libero varius hendrerit egestas aenean." },
  ]

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth)
    }

    startAutoScroll()

    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current)
      }
    }
  }, [])

  const startAutoScroll = () => {
    const scroll = () => {
      if (!isDraggingRef.current) {
        lastScrollPos.current -= scrollSpeedRef.current
        if (lastScrollPos.current <= -width) {
          lastScrollPos.current = 0
        } else if (lastScrollPos.current > 0) {
          lastScrollPos.current = -width
        }
        controls.set({ x: lastScrollPos.current })
      }
      autoScrollRef.current = requestAnimationFrame(scroll)
    }
    autoScrollRef.current = requestAnimationFrame(scroll)
  }

  const handleMouseMove = (event) => {
    const { clientX } = event
    const { left, width } = containerRef.current.getBoundingClientRect()
    const percentage = (clientX - left) / width
    scrollSpeedRef.current = 1 + percentage * 2 // Adjust speed based on mouse position
  }

  const handleMouseLeave = () => {
    scrollSpeedRef.current = 1 // Reset to default speed
  }

  const handleDragStart = () => {
    isDraggingRef.current = true
  }

  const handleDragEnd = (_, info) => {
    isDraggingRef.current = false
    lastScrollPos.current = info.point.x
  }

  return (
    <div 
      className='my-12 overflow-hidden' 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className='text-[160px] my-12 text-[#561D0A] mx-4 font-extralight tracking-[-0.11em]
       font-interTight leading-[1.00]'>PROJECTS</h1>
      
      <motion.div 
        className='flex gap-[192px] cursor-grab active:cursor-grabbing'
        animate={controls}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.1}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {[...projectItems, ...projectItems, ...projectItems].map((item, index) => (
          <motion.div key={index} className='mx-8 flex gap-7'>
            <div className='flex items-center relative'>
              <div className='w-[450px] h-[450px] bg-slate-400'></div>
              <div className='w-[250px] h-[250px] bg-slate-500 absolute bottom-0 left-0 -translate-x-1/2 -translate-y-1/2'>
              </div>
            </div>

            <div className='w-[423px]'>
              <h2 className='text-[#561D0A] text-[64px] font-interTight '>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects