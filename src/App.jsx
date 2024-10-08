import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import './App.css'
import Default from './Components/Navigation/default.png'
import LandingPage from './Components/Body/LandingPage'
import OpenIcon from './Components/Navigation/OpenIcon'
import Logo from './Components/Navigation/Logo.png'
import Nav from './Components/Navigation/Nav'
import ProjectsSpace from '../src/Components/Pages/ProjectsSpace'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import ProjectDetails from './Components/Pages/ProjectDetails/ProjectDetails'

function AnimatedRoutes({ isNavOpen, isHovered, setIsHovered, closeNav, openNav }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<ProjectsSpace />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project-details' element={<ProjectDetails />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [isHovered, setIsHovered] = useState([Default]);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <div> 
        <Nav 
          isHovered={isHovered} 
          setIsHovered={setIsHovered}
          closeNav={closeNav}
          isNavOpen={isNavOpen}
        />

        <div className='border w-full fixed z-[1000] bg-[#FFFEF2]  
        border-[#d7d7d7] border-x-0 px-8 py-3 flex items-center justify-between'>
          <Link to={"/"}>
            <div>
              <img src={Logo} alt="" className='w-14 h-14' />
            </div>
          </Link>

          <div className='m-0 p-0'>
            <OpenIcon openNav={openNav} />
          </div>
        </div>

        <AnimatedRoutes 
          isNavOpen={isNavOpen}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          closeNav={closeNav}
          openNav={openNav}
        />
      </div>
    </Router>
  )
}

export default App