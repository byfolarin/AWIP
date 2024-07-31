import React from 'react'
import NavigationLeft from './NavigationLeft'
import Navigation from './Navigation'

const Nav = ({isHovered,setIsHovered}) => {
  return (
    <div className='flex justify-end w-full bg-[#000000b3] absolute right-0 overflow-hidden'>
        <NavigationLeft isHovered = {isHovered} setIsHovered = {setIsHovered}  />
        <Navigation setIsHovered = {setIsHovered} />  
    </div>
  )
}

export default Nav
