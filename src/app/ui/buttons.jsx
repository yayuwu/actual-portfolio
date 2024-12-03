import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const GreenBtn = ({action, text}) => {
  return (
    <div>
      <button className="text-white px-4 sm:px-8 py-2 sm:py-3 text-sm md:text-base bg-colorGreen rounded-full font-medium" onClick={action}>{text}</button>
    </div>
  )
}

export const TechBtn = ({text}) => {
    return (
        <div>
          <p className="text-white px-4 py-2 text-sm bg-colorGreen rounded-full font-medium w-fit">{text}</p>
        </div>
      )
}

export const MenuItem = ({ item, currentItem }) => {
    return (
        <Link className={`rounded-full inline-block p-3 w-[46px] cursor-pointer ${
            currentItem ? 'bg-colorGreen' : 'bg-gray-300 hover:bg-colorGreen'
        }`} href="">
            <Image src={item} alt='item' className='w-full'/>
        </Link>
    )
}
