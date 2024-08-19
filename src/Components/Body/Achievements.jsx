import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const CountUp = ({ end, duration = 2 }) => {
    
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 }
      })
      let start = 0
      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) clearInterval(timer)
      }, duration * 500 / end)
      return () => clearInterval(timer)
    }
  }, [isInView, end, duration, controls])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 1 }}
      animate={controls}
    >
      {count}
    </motion.span>
  )
}

const AchievementItem = ({ number, text, showBorder = true }) => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({
        height: '100%',
        transition: { duration: 1, ease: 'easeInOut' }
      })
    }
  }, [isInView, controls])

  return (
    <div className='flex  relative' ref={ref}>

      {showBorder && (
        <motion.div 
          className='absolute hidden lg:block top-0 right-0 w-[1px] bg-[#D8D8D8]'
          initial={{ height: 0 }}
          animate={controls}
        />
      )}

      <h1 className='text-[220px] items-center font-interTight text-[#000000]'>
        <CountUp end={number} />
        {number > 9 ? '+' : ''}
      </h1> 

      <p className='font-interTight w-[128px]'>{text}</p>

    </div>
  )
}

const Achievements = () => {
  return (
    <div className='py-11 '>

      <div className='flex flex-col lg:flex-row justify-between items-center align-middle px-6 w-1/3'>
        <AchievementItem 
          number={12} 
          text="Year building Sustainable Products" 
        />
        <AchievementItem 
          number={8} 
          text="Year building Sustainable Products" 
        />
        <AchievementItem 
          number={6} 
          text="Year building Sustainable Products" 
          showBorder={false}
        />
      </div>

    </div>
  )
}

export default Achievements