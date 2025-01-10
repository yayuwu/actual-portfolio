import React from 'react'
import { TechBtn } from './buttons'
import diplomaImage from '../../../public/img/diploma.png'
import Image from 'next/image'

export const CardEducation = ({course, institution, techs, date, linkCourse}) => {
  return (
    <div className='bg-white w-[300px] rounded-xl px-7 pt-7 pb-4 flex flex-col '>
      <section className='text-colorDark'>
        <h2 className='font-semibold text-lg lg:text-2xl'>{course}</h2>
        <p className=' text-base font-semibold text-colorGreen xl:text-md xl:pt-2'>{institution}</p>
      </section>
      <section className='flex flex-wrap gap-3 mt-4'>
       {techs.map((tech => (
         <TechBtn textColor='text-white' backgroundColor='bg-colorDark' key={`${tech}_key`}>{tech}</TechBtn>
       )))}
      </section>
      <section className='flex justify-between items-center pt-5 mt-auto'>
        <a href={linkCourse} target="_blank" className='cursor-pointer'><Image width='44' height='10' src={diplomaImage} alt="" ></Image></a>
        <p className='bg-colorGreen text-white rounded-full w-[100px] text-center py-2 text-sm font-medium'>{date}</p>
      </section>
    </div>
  )
}
