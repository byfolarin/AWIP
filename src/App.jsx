import { useState } from 'react'
import './App.css'
import Default from './Components/Navigation/Default.jpeg'
import LandingPage from './Components/Body/LandingPage'
import CloseIcon from './Components/Navigation/CloseIcon'
import OpenIcon from './Components/Navigation/OpenIcon'
import Nav from './Components/Navigation/Nav'

function App() {

  const [isHovered, setIsHovered] = useState([Default]);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavClose,setIsNavClose]= useState(true);


  return (
    <div className='bg-[#e1ddc9] h-full '> 
          <div >
            {isNavOpen && <Nav isHovered = {isHovered} setIsHovered = {setIsHovered} isNavClose ={isNavClose}             setIsNavClose={setIsNavClose}/>}                  
           </div>

            <div className='pt-5 pl-8'>
               <OpenIcon setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
            </div>


          <div className='w-full h-screen overflow-x-clip'>
            <LandingPage />
          </div>
    </div>
  )
}

export default App
