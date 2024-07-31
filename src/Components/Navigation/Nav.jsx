import React from 'react'
import NavigationLeft from './NavigationLeft'
import Navigation from './Navigation'

const Nav = ({isHovered,setIsHovered, close, setClose}) => {


  return (
    <div className='flex fixed justify-end w-full bg-[#000000b3]  right-0 overflow-hidden overflow-y-hidden'>

    {close &&  <NavigationLeft isHovered = {isHovered} setIsHovered = {setIsHovered} />}
    { close && <Navigation setIsHovered = {setIsHovered} close={close} setClose={setClose} /> } 

    </div>
  )
}

export default Nav
