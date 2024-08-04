import React, { useState } from 'react'


const Topbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = () => {
        setIsNavOpen(true);
      };
    
      const closeNav = () => {
        setIsNavOpen(false);
      };


  return (
    <div>
        <div >
               
                <hr />
      </div>
    </div>
  )
}

export default Topbar
