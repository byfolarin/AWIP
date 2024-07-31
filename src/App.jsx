import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import NavigationLeft from './Components/Navigation/NavigationLeft'
import Default from './Components/Navigation/Default.jpeg'
import LandingPage from './Components/Body/LandingPage'

function App() {

  const [isHovered, setIsHovered] = useState([Default]);

  return (
    <div className='bg-[#e1ddc9] w-full h-screen'> 
{/* 
          <div className='flex justify-end absolute right-0'>
              <NavigationLeft isHovered = {isHovered} setIsHovered = {setIsHovered}  />
              <Navigation setIsHovered = {setIsHovered} />        
          </div> */}

          <LandingPage />
    </div>
  )
}

export default App
