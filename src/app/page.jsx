'use client'
import React from 'react'
import { GreenBtn } from './ui/buttons'
import svgLine from '../../public/svg/Line.svg'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='font-semibold mx-7 md:mx-14 2xl:mx-40 flex justify-between items-center flex-wrap h-[60vh]'>
      <section>
          <div className='flex items-center'>
            <Image width='25' height='2' src={svgLine} alt="" />
            <p className='text-base md:text-xl ms-3'>Home</p>
          </div>
        <h1 className='text-4xl xl:text-6xl 2xl:text-6xl'>I&apos;m Yael <span className='block text-colorGreen'>Front End Developer</span> </h1>
        <p className='text-base xl:text-xl lg:w-[400px] xl:w-[700px] my-4 mb-5 2xl:mb-8 leading-7 xl:leading-9 font-semibold'>I&apos;m a specialist in creating attractive and functional interfaces, maintaining your brand identity and optimizing the performance of your website or application to the fullest.</p>
        <GreenBtn text='Download CV'/>
      </section>
      <section className='hidden lg:block 3xl:me-36'>
        <svg  className="w-full h-auto 2xl:w-[491px] 2xl:h-[539px] 3xl:w-[511px] 3xl:h-[559px]" width="421" height="469" viewBox="0 0 421 469" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="circles">
            <g id="green-circle">
              <circle id="Ellipse 3" cx="173.5" cy="173.5" r="173.5" fill="#00BFAE"/>
            </g>
            <g id="white-circle">
              <circle id="Ellipse 4" cx="247.5" cy="295.5" r="173.5" fill="white"/>
            </g>
          </g>
        </svg>
      </section>
    </div>
  )
}

export default Home