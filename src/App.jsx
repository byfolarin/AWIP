import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import NavigationLeft from './Components/Navigation/NavigationLeft'
import Default from './Components/Navigation/Default.jpeg'
import LandingPage from './Components/Body/LandingPage'
import CloseIcon from './Components/Navigation/CloseIcon'
import Nav from './Components/Navigation/Nav'

function App() {

  const [isHovered, setIsHovered] = useState([Default]);
  const [open,setOpen]= useState(false)
  const [close,setClose]= useState(false)

  return (
    <div className='bg-[#e1ddc9] '> 

    

          <div className='flex justify-end absolute right-0'>
          <Nav />
          {open &&<NavigationLeft isHovered = {isHovered} setIsHovered = {setIsHovered}  />}
          {open && <Navigation setIsHovered = {setIsHovered} />  }                 
          </div>

          <CloseIcon setOpen = {setOpen} />


          <div className='w-full h-screen overflow-x-clip'>
            <LandingPage />
          </div>
    </div>
  )
}

export default App
