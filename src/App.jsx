import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import NavigationLeft from './Components/Navigation/NavigationLeft'
import Img from './Components/Navigation/Realestate.jpeg'

function App() {

  const [display,setDisplay] = useState(false); 
  const [isHovered, setIsHovered] = useState([Img]);

  return (
    <div className='bg-black w-full h-screen'> 
          <div className='flex justify-end'>
              <NavigationLeft isHovered = {isHovered} setIsHovered = {setIsHovered}  setDisplay ={setDisplay} />
              <Navigation setIsHovered = {setIsHovered}  setDisplay ={setDisplay} />        
          </div>
    </div>
  )
}

export default App
