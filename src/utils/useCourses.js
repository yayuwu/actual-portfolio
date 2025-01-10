const getEducation = async () => {
    try {
      const API_URL= process.env.NEXT_PUBLIC_API_URL
      const res = await fetch(`${API_URL}/courses`)
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