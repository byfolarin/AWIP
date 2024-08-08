import { useState } from 'react'
import './App.css'
import Default from './Components/Navigation/default.png'
import LandingPage from './Components/Body/LandingPage'
import OpenIcon from './Components/Navigation/OpenIcon'
import Logo from './Components/Navigation/Logo.png'
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
    <div className='h-full bg-[#F4F0EA]'> 

  
      {isNavOpen &&
        <Nav 
          isHovered={isHovered} 
          setIsHovered={setIsHovered}
          closeNav={closeNav}
        />
       }

      <div className='border border-[#d7d7d7] border-x-0 p-8  flex justify-between'>

        <div>
          <img src={Logo} alt="" className='w-14 h-14' />
        </div>
        <div>
          <OpenIcon openNav={openNav} />
        </div>
      </div>


     

      <div className='w-full h-screen overflow-x-clip bg[#F4F0EA]'>
        <LandingPage />
      </div>

      
    </div>
  )
}

export default App