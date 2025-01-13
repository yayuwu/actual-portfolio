"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import svgLine from '../../../public/svg/Line.svg'
import getProjects from '@/utils/useProjects'
import Masonry from '@mui/lab/Masonry'
import { ArrowOutward } from '@mui/icons-material'
const Portfolio = () => {
  const [projects, setProjects] = useState([])
  const [visibleProjects, setVisibleProjects] = useState([])

  useEffect(() =>{
    const fetchProjects = async () => {
      try {
        const data = await getProjects()
        console.log(data)
        setProjects(data.reverse())
      } catch (error) {
        console.error('Error fetching education data:', error)
      }
    }
    fetchProjects()
  }, [])

  useEffect(() => {
    if(projects.length > 0){
      projects.forEach((_, index) => {
        setTimeout(() => {
          setVisibleProjects((prev) => [...prev, index])
        }, index * 300)
      })
    }
  }, [projects])

  return (
    <div className='mt-12 md:mt-20 mx-7 md:mx-14 2xl:mx-40'>
      <div className='flex items-center'>
        <Image width='25' height='2' src={svgLine} alt="" />
        <p className='text-base md:text-xl ms-3 font-semibold'>Works & Projects</p>
      </div>
      <h1 className='text-4xl xl:text-6xl 2xl:text-6xl font-semibold'>Portfolio</h1>
      <section className='mt-10 flex justify-center md:justify-start'>
        <Masonry columns={{
          xs: 1,
          md: 2,
          lg: 3,
        }} 
        spacing={{
          xs: 2,
          md: 5
        }}>
          {projects.map((project, index) => (
            <a 
              href={`/portfolio/${project.slug}`} 
              key={index} 
              className={`cursor-pointer relative group transform trasition-all duration-500 ease-in-out ${visibleProjects.includes(index)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }}`}>
              <img src={project.cover} alt={project.name} className='rounded-xl md:rounded-3xl hover:bg-gray-800 z-10'/>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl md:rounded-3xl z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowOutward className='absolute right-6 top-6  lg:right-6'/>
                <p className='absolute bottom-8 left-7 lg:left-10 hidden group-hover:block font-medium text-md lg:text-xl'>{project.name}</p>
              </div>             
            </a>
          ))}
        </Masonry>
      </section>
    </div>
  )
}

export default Portfolio