'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const GreenBtn = ({children, href}) => {
  return (
    <div>
      <a className="text-white px-4 sm:px-8 py-2 sm:py-3 text-base md:text-xl bg-colorGreen rounded-full font-medium" href={href} target='_blank'>{children}</a>
    </div>
  )
}

export const TechBtn = ({ children, textColor, backgroundColor }) => {
  return (
    <div>
      <p
        className={`px-4 py-2 text-sm rounded-full font-medium w-fit ${textColor} ${backgroundColor}`}
      >
        {children}
      </p>
    </div>
  )
}


export const MenuItem = ({ item, href }) => {
  const pathname = usePathname()
    return (
        <Link className={`rounded-full inline-block p-3 w-[45px] md:w-[48px] cursor-pointer ${
          pathname === href ? 'bg-colorGreen' : 'bg-gray-300 hover:bg-colorGreen'
        }`} href={href}>
            <Image src={item} alt='item' className='w-full'/>
        </Link>
    )
}
