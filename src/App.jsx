import './App.css'
import Navigation from './Components/Navigation/Navigation'
import NavigationLeft from './Components/Navigation/NavigationLeft'

function App() {
  return (
    <div> 
          <div className='flex'>
              <NavigationLeft />
              <Navigation />        
          </div>
    </div>
  )
}

export default App
