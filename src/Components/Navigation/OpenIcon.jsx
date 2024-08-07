import React from 'react'

const OpenIcon = ({ openNav }) => {
  return (
    <div onClick={openNav} className='cursor-pointer'>
        <svg width="68" height="27" viewBox="0 0 68 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1.5H67.5" stroke="#561D0A" stroke-width="2"/>
            <path d="M0 25.5H67.5" stroke="#561D0A" stroke-width="2"/>
        </svg>
    </div>
  )
}

export default OpenIcon