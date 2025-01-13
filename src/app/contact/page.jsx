import React from 'react'
import Image from 'next/image'
import { GreenBtn } from '../ui/buttons'

const Contact = () => {
  return ( 
    <div className='mt-12 md:mt-20 mx-7 md:mx-14 2xl:mx-40 h-[75vh] flex flex-col'>
      <div className='flex flex-col flex-grow'>
        <div className='flex items-center'>
          <Image width='25' height='2' src="/svg/Line.svg" alt="" />
          <p className='text-base md:text-xl ms-3 font-semibold'>Send me a message</p>
        </div>
        <h1 className='text-4xl xl:text-6xl 2xl:text-6xl font-semibold'>Contact me</h1>
        <p className='text-md font-medium mt-5 md:text-xl md:w-[450px] lg:w-[750px]'>Thank you for your interest in my work. I hope it has captured your attention. For any inquiries, feel free to contact me through any of these channels.</p>
        <section className='mt-6'>
          <div className='md:hidden flex flex-wrap items-center sm:justify-start gap-3 lg:gap-6'>
            <a href='mailto:yscorrea10@gmail.com'><Image src='/svg/gmail.svg' width={30} height={30} alt='gmail'/></a>
            <a href='https://github.com/yayuwu' target='_blank'><Image src='/svg/github.svg' width={30} height={30} alt='github'/></a>
            <a href='https://www.linkedin.com/in/yael-correa/' target='_blank'><Image src='/svg/linkedin.svg' width={30} height={30} alt='linkedin'/></a>
          </div>
          <div className='hidden md:flex flex-wrap items-center sm:justify-start gap-3 lg:gap-6'>
            <a href='mailto:yscorrea10@gmail.com'><Image src='/svg/gmail.svg' width={40} height={40} alt='gmail'/></a>
            <a href='https://github.com/yayuwu' target='_blank'><Image src='/svg/github.svg' width={40} height={40} alt='github'/></a>
            <a href='https://www.linkedin.com/in/yael-correa/' target='_blank'><Image src='/svg/linkedin.svg' width={40} height={40} alt='linkedin'/></a>
          </div>
        </section>
        <section className='mt-10 mb-6 md:mb-0'>
          <GreenBtn href='https://drive.google.com/file/d/10e2K19HFqRnW2gFroZIlcEBr_aWTpCJG/view?usp=drive_link'>Download CV</GreenBtn>
        </section>
      </div>

      <footer className='flex justify-center items-center border-t-2 border-t-gray-300 w-full mt-auto pt-5'>
          <p className='flex items-center gap-2 pe-2 text-sm md:text-base'>Copyright <Image src='/svg/Icon.svg' width={20} height={20} alt='icon'/>2024 Yael Correa.</p>
      </footer>
    </div>
  )
}

export default Contact
