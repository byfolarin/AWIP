import { useState } from 'react'
import './App.css'
import Default from './Components/Navigation/Default.jpeg'
import LandingPage from './Components/Body/LandingPage'
import CloseIcon from './Components/Navigation/CloseIcon'
import Nav from './Components/Navigation/Nav'

function App() {

  const [isHovered, setIsHovered] = useState([Default]);
  const [open,setOpen]= useState(false)
  const [close,setClose]= useState(true)

  return (
    <div className='bg-[#e1ddc9] h-full '> 

    

          <div >
           {open  && <Nav isHovered = {isHovered} setIsHovered = {setIsHovered} close ={close} setClose={setClose} />   }          
          </div>


          

          <CloseIcon setOpen = {setOpen} />


          <div className='w-full h-screen overflow-x-clip'>
            <LandingPage />
          </div>
    </div>
  )
}

export default App
