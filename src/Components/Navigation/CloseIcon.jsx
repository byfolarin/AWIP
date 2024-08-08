import React from 'react'

const CloseIcon = ({closeNav}) => {


  return (
    <div onClick={closeNav} className='cursor-pointer'>
     <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L48.7297 48.7297" stroke="#561D0A" stroke-width="4"/>
        <path d="M1 48.7297L48.7297 1.00003" stroke="#561D0A" stroke-width="4"/>
      </svg>  
    </div>
  )
}

export default CloseIcon
