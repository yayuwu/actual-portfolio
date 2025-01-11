import React from 'react'
import Image from 'next/image'
import svgLine from '../../../../public/svg/Line.svg'
import svgWebsite from '../../../../public/svg/website.svg'
import svgGithub from '../../../../public/svg/github.svg'
import { TechBtn } from '@/app/ui/buttons'
import { ArrowCircleLeftOutlined, DesignServices } from '@mui/icons-material'
import { Masonry } from '@mui/lab'

async function fetchProjectData(slug) {
  const res = await fetch(`http://localhost:3000/api/projects?slug=${slug}`); // Asegúrate de que la URL sea correcta para tu API
  if (!res.ok) {
    console.error('Error al obtener los datos del proyecto');
    return null;
  }
  return await res.json();
}

const Project = async ({ params }) => {
  const { slug } = params
  const projectData = await fetchProjectData(slug)

  // if(!projectData ){
  //   return (
  //     <div className='mt-12 md:mt-0  mx-7 md:mx-14 2xl:mx-40'>
  //       <h1 className='text-4xl xl:text-6xl 2xl:text-6xl font-semibold'>Proyecto no encontrado</h1>
  //     </div>
  //   )
  // }

  const { name, description, github, design, web, tech, images } = projectData

  return (
    <div className='mt-12 md:mt-0  mx-7 md:mx-14 2xl:mx-40'>
          <div className='flex items-center'>
            <Image width='25' height='2' src={svgLine} alt="" />
            <p className='text-base md:text-xl ms-3'>Works & Projects</p>
          </div>
          <h1 className='text-4xl xl:text-6xl 2xl:text-6xl font-semibold'>{name}</h1>
            <div className='flex gap-4 items-center'>
                { github ? (<a href={github} className='cursor-pointer'><Image width={40} height={40} src={svgGithub} alt='github'/></a>) : null }
                { web ? (<a href={web} className='cursor-pointer'><Image width={48} height={48} src={svgWebsite} alt='website'/></a>) : null }
                { design ? (<a href={design} className='cursor-pointer'><DesignServices/></a>) : null}
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
                md: 4,
                }} 
                spacing={{
                xs: 2,
                md: 5
                }}>
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`${name}-${index}`} className='rounded-xl md:rounded-3xl hover:bg-gray-800 z-10'/>
                ))}
                </Masonry>
            </section>
           <section className='flex justify-center mb-5'>
                <a href={`${process.env.NEXT_PUBLIC_API_URL}/portfolio`} className='flex items-center px-4 pe-7 py-2 text-sm md:text-lg rounded-full font-medium w-fit bg-colorGreen'><ArrowCircleLeftOutlined sx={{ width: '40px'}} />Go back</a>
           </section>
    </div>
  )
}


export default Project