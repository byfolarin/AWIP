import { useState } from 'react'
import './App.css'
import Default from './Components/Navigation/Default.jpeg'
import LandingPage from './Components/Body/LandingPage'
import OpenIcon from './Components/Navigation/OpenIcon'
import Nav from './Components/Navigation/Nav'

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
    <div className='bg-[#e1ddc9] h-full '> 
      {isNavOpen ? (
        <Nav 
          isHovered={isHovered} 
          setIsHovered={setIsHovered}
          closeNav={closeNav}
        />
      ) : (
        <div className='pt-5 pl-8'>
          <OpenIcon openNav={openNav} />
        </div>
      )}

      <div className='w-full h-screen overflow-x-clip'>
        <LandingPage />
      </div>
    </div>
  )
}

export default App