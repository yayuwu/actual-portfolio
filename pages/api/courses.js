const courses = [
    {
      id: 1,
      course: "Bootcamp React",
      institution: "Código Facilito",
      date: "FEB - 2024",
      tech: ["React", "Material UI", "Formik", "Axios", "Styled Components", "Yup"],
      link: "https://drive.google.com/file/d/1GLDyzDbMiKXHKFb1xLEWq0KB7tabOSDs/view"
    },
    {
      id: 2,
      course: "Curso de especialización en React",
      institution: "Agencia de Habilidades para el Futuro",
      date: "JUN - 2024",
      tech: ["React", "Firebase", "Redux Toolkit", "Redux"],
      link: "https://drive.google.com/file/d/1PrQjVwSz1W8SDEq9hvOcMG8Jok_IKftZ/view"
    },
    {
      id: 3,
      course: "Programación Full Stack",
      institution: "Educación IT",
      date: "NOV - 2024",
      tech: ["Angular", "Node.js", "MongoDB", "React", "Bootstrap", "Tailwind CSS"],
      link:"https://www.educacionit.com/perfil/yael%20stella%20maris-correa%20cardozo-1011364?_gl=1*1boonc9*_ga*MTk4NjQ1NTk3MS4xNzMxNTA3NTQy*_ga_R8GR8LL2B8*MTczMzEzOTcyNS4xMS4xLjE3MzMxMzk3MzguNDcuMC4xMTk1OTUyNzM1"
    },
    {
      id: 4,
      course: "Google UX Design Certificate",
      institution: "Coursera",
      date: "DEC - 2023",
      tech: ["UX Research", "UX Thinking", "Wireframing", "Prototyping", "Responsive Design"],
      link: "https://www.coursera.org/account/accomplishments/specialization/GNLS7AAT8WDO?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
    },
  ]
  
  export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permite todas las solicitudes
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Métodos permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Headers permitidos
  
    if (req.method === 'OPTIONS') {
      return res.status(200).end(); // Manejo de preflight
    }

    res.status(200).json(courses);
  }
  