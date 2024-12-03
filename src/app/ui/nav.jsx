"use client"
import { useState } from 'react'
import { MenuItem } from './buttons'
import itemImg from '../../../public/svg/home-item.png'
import Image from 'next/image'

const Nav = () => {
    const [isActive, setIsActive] = useState(false)

    const toggleMenu = () => {
      setIsActive(!isActive)
    }

  return (
    <div className='flex justify-between m-6 z-10'>
      <div>
        <Image src="./svg/Icon.svg" width={70} height={70} alt='icon'/>
      </div>
      {/* Botón del menú */}
      <div className='bg-white w-fit py-2 pt-3 px-2 rounded-full flex flex-col'>
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
              <MenuItem item={itemImg} currentItem={true}/>
              <MenuItem item={itemImg} currentItem={false}/>
              <MenuItem item={itemImg} currentItem={false}/>
              <MenuItem item={itemImg} currentItem={false}/>
            </div>
          ) : (null) }

      </div>
      </div>
  )
}

export default Nav