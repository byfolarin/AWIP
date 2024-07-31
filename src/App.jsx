import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import NavigationLeft from './Components/Navigation/NavigationLeft'
import Default from './Components/Navigation/Default.jpeg'
import LandingPage from './Components/Body/LandingPage'

function App() {

  const [isHovered, setIsHovered] = useState([Default]);
  const [display,setDisplay]= useState(false)

  return (
    <div className='bg-[#e1ddc9] '> 

          <div className='flex justify-end absolute right-0'>


          {display &&<NavigationLeft isHovered = {isHovered} setIsHovered = {setIsHovered}  />}
          {display && <Navigation setIsHovered = {setIsHovered} />  }
                    
          </div>



          <div className='w-full h-screen overflow-x-clip'>
            <LandingPage />
          </div>
    </div>
  )
}

export default App
