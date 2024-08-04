import { useState } from 'react'
import './App.css'
import Default from './Components/Navigation/Default.jpeg'
import LandingPage from './Components/Body/LandingPage'
import OpenIcon from './Components/Navigation/OpenIcon'
import Nav from './Components/Navigation/Nav'
import SectionTwo from './Components/Body/SectionTwo'
import Topbar from './Components/Body/Topbar'


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
    <div className='bg-white h-full '> 

  
      {isNavOpen &&
        <Nav 
          isHovered={isHovered} 
          setIsHovered={setIsHovered}
          closeNav={closeNav}
        />
       }

      <div className='border border-[#d7d7d7] border-x-0 py-8 flex justify-end'>
        <div>
          <OpenIcon openNav={openNav} />
        </div>
      </div>


     

      <div className='w-full h-screen overflow-x-clip'>
        <LandingPage />
      </div>

      
    </div>
  )
}

export default App