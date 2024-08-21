import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import './App.css'
import Default from './Components/Navigation/default.png'
import LandingPage from './Components/Body/LandingPage'
import OpenIcon from './Components/Navigation/OpenIcon'
import Logo from './Components/Navigation/Logo.png'
import Nav from './Components/Navigation/Nav'
import ProjectsSpace from '../src/Components/Pages/ProjectsSpace'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'

function App() {
  const [isHovered, setIsHovered] = useState([Default]);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    
    <Router>
      <div > 

        
        {/* {isNavOpen &&
          <Nav 
            isHovered={isHovered} 
            setIsHovered={setIsHovered}
            closeNav={closeNav}
          />
        }

        <div className='border w-full fixed z-[1000] bg-[#31313145]  
        border-[#d7d7d7] border-x-0 px-8 py-3 flex items-center justify-between'>
          
          <Link to={"/"}>
          <div>
            <img src={Logo} alt="" className='w-14 h-14' />
          </div>
          </Link>

          <div className='m-0 p-0'>
            <OpenIcon openNav={openNav} />
          </div>
        </div> */}

        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<ProjectsSpace/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        
      </div>
    </Router>
  )
}

export default App