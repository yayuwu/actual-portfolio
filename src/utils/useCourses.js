const getEducation = async () => {
    try {
      const API_URL= import.meta.API_URL
      const res = await fetch(`http://localhost:3000/api/courses`)
      if(!res.ok) {
        throw new Error('Error al obtener los datos')
      }
      const data = await res.json()
      console.log(data)
      return data
    } catch (error) {
      console.log('Ocurrió un error: ', error)
    }
}

export default getEducation