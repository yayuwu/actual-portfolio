"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import svgLine from '../../../public/svg/Line.svg'
import { CardEducation } from '../ui/cards'
import getEducation from '@/utils/useCourses'

const Education = () => {
  const [certifications, setCertifications] = useState([])

  useEffect(() =>{

    const fetchEducation = async () => {
      try {
        const data = await getEducation() 
        console.log(data)
        setCertifications(data.reverse())
      } catch (error) {
        console.error('Error fetching education data:', error)
      }
    }
    fetchEducation()
  }, [])

  return (
    <div className='mt-12 md:mt-0  mx-7 md:mx-14 2xl:mx-40'>
      <div className='flex items-center'>
        <Image width='25' height='2' src={svgLine} alt="" />
        <p className='text-base md:text-xl ms-3'>Courses & Certifications</p>
      </div>
      <h1 className='text-4xl xl:text-6xl 2xl:text-6xl font-semibold'>Education</h1>
      <div className='flex flex-wrap justify-center gap-10 lg:gap-20 mt-6 md:mt-12 xl:justify-start'>
        { certifications.map((course) => (
          <CardEducation course={course.course} institution={course.institution} techs={course.tech} date={course.date} linkCourse={course.link} key={course.id}/>
        ))}
      </div>
    </div>
  )
}

export default Education