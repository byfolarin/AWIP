import React from 'react'
import NavigationLeft from './NavigationLeft'
import Navigation from './Navigation'

const Nav = ({isHovered,setIsHovered, isNavClose, setIsNavClose}) => {


  return (
    <div className='flex fixed justify-end w-full bg-[#000000b3]  right-0 overflow-hidden overflow-y-hidden'>

    {isNavClose &&  <NavigationLeft isHovered = {isHovered} setIsHovered = {setIsHovered} />}
    {isNavClose && <Navigation setIsHovered = {setIsHovered} isNavClose={isNavClose} setIsNavClose={setIsNavClose} /> } 

    </div>
  )
}

export default Nav
