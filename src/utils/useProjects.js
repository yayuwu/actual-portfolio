const getProjects = async () => {
    try {
      const API_URL= process.env.NEXT_PUBLIC_API_URL
      const res = await fetch(`${API_URL}/api/projects`)
      if(!res.ok) {
        throw new Error('Error al obtener los datos')
      }
      const data = await res.json()
      return data
    } catch (error) {
      console.log('Ocurrió un error: ', error)
    }
}

export default getProjects