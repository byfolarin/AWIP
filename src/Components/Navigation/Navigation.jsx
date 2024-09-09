import React from 'react'
import { motion } from "framer-motion"
import Default from './default.png'
import CloseIcon from './CloseIcon'
import AWIP1 from './AWIP1.jpg'
import AWIP2 from './AWIP2.jpg'
import AWIP3 from './AWIP3.jpg'
import AWIP4 from './AWIP4.jpg'
import { Link } from 'react-router-dom'

const Navigation = ({ setIsHovered, closeNav }) => {
  const handleImageChange = (image) => {
    setIsHovered(image);
  };

  const handleNavItemClick = () => {
    closeNav();
  };

  return (
    <div className='bg-[#FFFEF2] w-full lg:w-[350px] h-screen px-11 py-8 flex flex-col'>
      <div className='flex justify-end py-2 cursor-pointer'>
        <CloseIcon closeNav={closeNav} />       
      </div>

      <div>
        <p className='text-[12px]'>MENU</p>
      </div>

      <ul className='font-sans text-[42px] pt-4 tracking-tighter cursor-pointer text flex-grow'>
        {[
          { to: "/", text: "Home", image: AWIP1 },
          { to: "/projects", text: "Projects", image: AWIP2 },
          { to: "/about", text: "About", image: AWIP3 },
          { to: "/contact", text: "Contact", image: AWIP4 }
        ].map((item, index) => (
          <li key={index}>
            <Link to={item.to} onClick={handleNavItemClick}>
              <motion.div
                whileHover={{ x: 10 }}
                className='text-[42px] flex align-middle text-[#561D0A] font-interTight font-light'
                onMouseEnter={() => handleImageChange(item.image)}
                onMouseLeave={() => setIsHovered(Default)}
              >
                {item.text}
              </motion.div>
            </Link>
          </li>
        ))}
      </ul>

      <hr className='w-full border-[#561D0A] h-1 my-4' />

      <div className='flex justify-between gap-11'>
        <ul className='font-interTight text-[16px] gap-2 tracking-normal cursor-pointer text-[#000000]'>
          <li className='text-[24px]'>Socials</li>
          <li className='text-[14px]'>Instagram</li>
          <li className='text-[14px]'>Facebook</li>
          <li className='text-[14px]'>LinkedIn</li>
        </ul>

        <ul className='font-interTight text-[16px] gap-2 tracking-normal cursor-pointer text-[#000000]'>
          <li className='text-[24px]'>Work</li>
          <li className='text-[14px]'>hello@awip.com.ng</li>
          <li className='text-[14px]'>323 Main Street, Los Angeles, CA 90001</li>
          <li className='text-[14px]'>+1 (555) 123-4567</li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation