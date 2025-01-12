"use client"
import { useState } from 'react'
import { MenuItem } from './buttons'
import homeImg from '../../../public/svg/home-icon.svg'
import educationImg from '../../../public/svg/graduation-icon.svg'
import projectsImg from '../../../public/svg/folder-icon.svg'
import contactImg from '../../../public/svg/mail-icon.svg'
import Image from 'next/image'

const Nav = () => {
    const [isActive, setIsActive] = useState(false)

    const toggleMenu = () => {
      setIsActive(!isActive)
    }

  return (
    <div className='flex justify-between m-6 md:mx-12 z-20 relative'>
      <div>
        <Image src="/svg/Icon.svg" className='md:hidden' width={60} height={60} alt='icon'/>
        <Image src="/svg/Icon.svg" className='hidden md:block' width={70} height={70} alt='icon'/>
      </div>
      {/* Botón del menú */}
      <div className='bg-white w-fit py-1 pt-2 pb-2 md:py-2 md:pt-3 px-2 rounded-full flex flex-col absolute right-0 w-[50px] md:w-[65px]'>
        <div
          className={`menu-trigger ${isActive ? "is-active" : ""}`}
          onClick={toggleMenu}
        >
          <div className={`inner cursor-pointer ${isActive ? "mb-4 md:mb-6 transform transition-all duration-100 ease-in" : "transform transition-all duration-100 ease-out"}`}>
          <button 
            className={`hamburger hamburger--spin ${isActive ? "is-active" : ""}`} 
            tabIndex="0" 
            aria-label="Menu" 
            role="button" 
            aria-controls="navigation"
            onClick={toggleMenu}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </button>
          </div>
        </div>
          
          { isActive ? (
            <div className="flex flex-col gap-y-3 items-center">
              <MenuItem item={homeImg} href='/'/>
              <MenuItem item={educationImg} href='/education'/>
              <MenuItem item={projectsImg} href='/portfolio'/>
              <MenuItem item={contactImg} href='/contact'/>
            </div>
          ) : (null) }

      </div>
      </div>
  )
}

export default Nav