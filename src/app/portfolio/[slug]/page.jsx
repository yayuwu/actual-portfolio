import Project from './Project';

async function fetchProjectData(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects?slug=${slug}`)
  if (!res.ok) {
    throw new Error('Error al obtener los datos del proyecto')
  }
  return await res.json()
}

export default async function Page({ params }) {
  const projectData = await fetchProjectData(params.slug);

  return <Project projectData={projectData} />
}
