"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import svgLine from '../../../../public/svg/Line.svg'
import svgWebsite from '../../../../public/svg/website.svg'
import svgGithub from '../../../../public/svg/github.svg'
import { TechBtn } from '@/app/ui/buttons'
import { ArrowCircleLeftOutlined, DesignServices } from '@mui/icons-material'
import { Masonry } from '@mui/lab'

const Project = ({ projectData }) => {
    const [clickImage, setClickImage] = useState(null)
    const { name, description, github, design, web, tech, images } = projectData

    const handleClickImage = (img) => {
        setClickImage(img)
    }

    const handleCloseImage = () => {
        setClickImage(null)
    }

  return (
    <div className='mt-12 md:mt-0  mx-7 md:mx-14 2xl:mx-40'>
      {/* Modal */}
      {clickImage && (
        <section className='fixed inset-0 z-50 flex items-center justify-center'>
            <div className="relative">
            <img
                className="rounded-xl md:rounded-3xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl 3xl:max-w-4xl"
                src={clickImage}
                alt=""
            />
            <button
                className="absolute top-5 right-5"
                aria-label="Cerrar"
                onClick={handleCloseImage}
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="34"
                viewBox="0 96 960 960"
                width="34"
                fill="black"
                >
                <path d="M256 860 196 800l224-224-224-224 60-60 224 224 224-224 60 60-224 224 224 224-60 60-224-224-224 224Z" />
                </svg>
            </button>
            </div>
        </section>
      )}
          <div className='flex items-center'>
            <Image width='25' height='2' src={svgLine} alt="" />
            <p className='text-base md:text-xl ms-3 font-semibold'>Trabajos & Proyectos</p>
          </div>
          <h1 className='text-4xl xl:text-6xl 2xl:text-6xl font-semibold'>{name}</h1>
            <div className='flex gap-4 items-center'>
                { github ? (<a href={github} target='_blank' className='cursor-pointer'><Image width={40} height={40} src={svgGithub} alt='github'/></a>) : null }
                { web ? (<a href={web} target='_blank' className='cursor-pointer'><Image width={48} height={48} src={svgWebsite} alt='website'/></a>) : null }
                { design ? (<a href={design} target='_blank' className='cursor-pointer'><DesignServices sx={{color: '#00BFAE'}}/></a>) : null}
            </div>
            <p className='text-md font-medium mt-5 md:w-[600px]'>{description}</p>
          <section className='flex flex-wrap gap-4 my-4'>
            {tech.map((t, index) => (
                <TechBtn key={index} textColor="text-white" backgroundColor="bg-colorGreen">{t}</TechBtn>
            ))}
          </section>
          <section className='mt-10 flex justify-center '>
                <Masonry columns={{
                xs: 2,
                lg: 3,
                }} 
                spacing={{
                xs: 2,
                md: 5
                }}>
                {images.map((img, index) => (
                    <button key={index} onClick={() => handleClickImage(img)}><img src={img} alt={`${name}-${index}`} className='rounded-xl md:rounded-3xl hover:bg-gray-800 z-10'/></button>
                ))}
                </Masonry>
            </section>
           <section className='flex justify-center mb-5'>
                <a href={`${process.env.NEXT_PUBLIC_API_URL}/portfolio`} className='flex items-center px-4 pe-7 py-2 text-sm md:text-lg rounded-full font-medium w-fit bg-colorGreen'><ArrowCircleLeftOutlined sx={{ width: '40px'}} />Volver</a>
           </section>
    </div>
  )
}


export default Project