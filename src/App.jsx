import './App.css'
import Navigation from './Components/Navigation/Navigation'
import NavigationLeft from './Components/Navigation/NavigationLeft'

function App() {
  return (
    <div className='bg-black w-full h-screen'> 
          <div className='flex justify-end'>
              <NavigationLeft />
              <Navigation />        
          </div>
    </div>
  )
}

export default App
