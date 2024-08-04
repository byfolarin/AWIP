import React from 'react'
import NavigationLeft from './NavigationLeft'
import Navigation from './Navigation'

const Nav = ({ isHovered, setIsHovered, closeNav }) => {
  return (
    <div className='flex fixed justify-end w-full bg-[#000000b3] z-40 right-0 overflow-hidden overflow-y-hidden'>
          <NavigationLeft isHovered={isHovered} setIsHovered={setIsHovered} />          
          <Navigation 
        setIsHovered={setIsHovered} 
        closeNav={closeNav}
      />
    </div>
  )
}

export default Nav