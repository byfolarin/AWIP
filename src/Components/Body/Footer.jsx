import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const socialMedia = ['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'YouTube', 'TikTok']
  const menuItems = ['Home', 'Projects', 'About', 'Contact']

  return (
    <footer className='bg-[#561D0A]  mt-9 font-interTight p-6 sm:p-8 md:p-10 lg:p-12 text-white'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
        <div>
          <h2 className='text-2xl font-semibold mb-4'>AWIP</h2>
          <p className='text-sm opacity-80'>Transforming spaces with innovative and personalized interior design solutions.</p>
        </div>
        <div>
          <h3 className='text-lg font-semibold mb-4'>Menu</h3>
          <nav>
            <ul className='grid grid-cols-2 gap-2'>
              {menuItems.map((item, index) => (
                <li key={index}><Link to={`/${item.toLowerCase()}`} className='hover:underline'>{item}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <h3 className='text-lg font-semibold mb-4'>Contact</h3>
          <p className='text-sm mb-2'>hello@awip.com.ng</p>
          <p className='text-sm mb-2'>+234 803 3927 062</p>
          <p className='text-sm'>12A, Alake Onileere Crescent, Gbagada, Lagos</p>
        </div>
      </div>

      <div className='border-t border-white/20 pt-8'>
        <div className='flex flex-wrap justify-center gap-4'>
          {socialMedia.map((platform, index) => (
            <a key={index} href={`#${platform.toLowerCase()}`} className='px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors'>
              {platform}
            </a>
          ))}
        </div>
      </div>

      <div className='text-center text-sm mt-12 opacity-60'>
        © {new Date().getFullYear()} AWIP. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer