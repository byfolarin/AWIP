import React from 'react'
import NavigationLeft from './NavigationLeft'
import Navigation from './Navigation'
import OpenIcon from './OpenIcon'

const Nav = ({isHovered,setIsHovered,setClose}) => {


  return (
    <div className='flex fixed justify-end w-full bg-[#000000b3]  right-0 overflow-hidden'>


        <NavigationLeft isHovered = {isHovered} setIsHovered = {setIsHovered}  />
        <Navigation setIsHovered = {setIsHovered} />  
    </div>
  )
}

export default Nav
