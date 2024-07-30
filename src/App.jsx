import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import NavigationLeft from './Components/Navigation/NavigationLeft'
import Default from './Components/Navigation/Default.jpeg'

function App() {

  const [isHovered, setIsHovered] = useState([Default]);

  return (
    <div className='bg-black w-full h-screen'> 
          <div className='flex justify-end'>
              <NavigationLeft isHovered = {isHovered} setIsHovered = {setIsHovered}  />
              <Navigation setIsHovered = {setIsHovered} />        
              
          </div>
    </div>
  )
}

export default App
