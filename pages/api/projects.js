const projects = [
    {
        id: 1,
        slug: "web-calculator",
        name: "Web Calculator",
        description: "An online calculator with functionalities similar to a mobile calculator, mimicking its design.",
        github: "https://github.com/yayuwu/Calculadora-web",
        web: "https://webcalculatorchallenge.netlify.app/",
        cover: "https://res.cloudinary.com/dkfa8olux/image/upload/v1736552421/yael_portfolio_2024/projects/calculadora-web/calculator_mockup_ddcd0p.png",
        tech: ["HTML", "CSS", "JavaScript", "Netlify"],
        images: ["https://res.cloudinary.com/dkfa8olux/image/upload/v1736552421/yael_portfolio_2024/projects/calculadora-web/calculator_mockup_ddcd0p.png", "https://res.cloudinary.com/dkfa8olux/image/upload/v1736803482/yael_portfolio_2024/projects/calculadora-web/web_calculator_mockup_desktop_2_glusoq.png"],
        date: "15/12/2023"
    },
    {
        id: 2,
        slug: "ecosistema",
        name: "ECOSistema",
        description: "It is an MVP application designed for interaction and supplier search, where the publishing and product/service listings are entirely managed by administrators to enable these products/services and gather feedback. My main responsibility was the Front-End development.",
        github: "https://github.com/yayuwu/ECOSistema",
        web: "https://drive.google.com/file/d/1yc1wqyibZ4rXXbxqy4NXxESRzlp3CYjw/view",
        cover: "https://res.cloudinary.com/dkfa8olux/image/upload/v1736549733/yael_portfolio_2024/projects/ECOSistema/ecosistema_mockups_u7tvqc.png",
        tech: ["React", "Redux", "Formik", "Vite", "Netlify", "Google Geolocation API", "Google Oauth API", "Axios", "Material UI"],
        images: ["https://res.cloudinary.com/dkfa8olux/image/upload/v1736549733/yael_portfolio_2024/projects/ECOSistema/ecosistema_mockups_u7tvqc.png", "https://res.cloudinary.com/dkfa8olux/image/upload/v1736790069/yael_portfolio_2024/projects/ECOSistema/ecosistema_mockups_3_sflyg7.png", "https://res.cloudinary.com/dkfa8olux/image/upload/v1736790070/yael_portfolio_2024/projects/ECOSistema/ecosistema_mockups_4_duwjjl.png", "https://res.cloudinary.com/dkfa8olux/image/upload/v1736790069/yael_portfolio_2024/projects/ECOSistema/ecosistema_mockups_2_trafzp.png"],
        date: "11/05/2024"
    },
    {
        id: 3,
        name: "Bussinezz X",
        slug: "bussinezz-x",
        description: "Businezz X was a challenge where one of my responsibilities was to create the layout based on an image, maintaining fidelity, and adding appealing animations.",
        github: "https://github.com/yayuwu/domo-challenge",
        web: "https://businezzx.netlify.app",
        cover: "https://res.cloudinary.com/dkfa8olux/image/upload/v1736803035/yael_portfolio_2024/projects/bussinezz%20x/bussinezz_x_mobile_mockup_1_bks3ll.png",
        tech: ["React", "Bootstrap", "Netlify", "HTML", "CSS"],
        images: ["https://res.cloudinary.com/dkfa8olux/image/upload/v1736803035/yael_portfolio_2024/projects/bussinezz%20x/bussinezz_x_mobile_mockup_1_bks3ll.png", "https://res.cloudinary.com/dkfa8olux/image/upload/v1736803035/yael_portfolio_2024/projects/bussinezz%20x/bussinezz_x_mobile_mockup_2_mdluwr.png"],
        date: "01/10/2024"
    },
    {
        id: 4,
        name: "Cuipea",
        slug: "cuipea",
        description: "CUIPEA is a mobile digital health booklet for recording vaccines, clinical data, consultations, and more for your child",
        github: "https://github.com/yayuwu/cuipea-app-front",
        web: "http://www.responsinator.com/?url=cuipea.netlify.app%2F",
        cover: "https://res.cloudinary.com/dkfa8olux/image/upload/v1736549134/yael_portfolio_2024/projects/cuipea/cuipea_mockups_cj54wm.png",
        tech: ["Handlebars", "Bootstrap", "Netlify", "HTML", "CSS", "Node.js", "MongoDB", "JWT"],
        images: ["https://res.cloudinary.com/dkfa8olux/image/upload/v1736788731/yael_portfolio_2024/projects/cuipea/mockup_mobile_y1essv.png", "https://res.cloudinary.com/dkfa8olux/image/upload/v1736788730/yael_portfolio_2024/projects/cuipea/mockup_mobile_3_wrtkwx.png", "https://res.cloudinary.com/dkfa8olux/image/upload/v1736788730/yael_portfolio_2024/projects/cuipea/mockup_mobile_2_gouykf.png"],
        date: "29/11/2024"
    },
    {
        id: 5,
        name: "Baby Donas",
        slug: "baby-donas",
        description: "Baby Donas is a donut business where you can explore a variety of donuts available for sale and directly contact the seller.",
        github: "https://github.com/yayuwu/domo-challenge",
        web: "https://babydonasweb.netlify.app/",
        cover: "https://res.cloudinary.com/dkfa8olux/image/upload/v1736791491/yael_portfolio_2024/projects/babydonas/babydonas_mockup_mobil2_ii56lw.png",
        tech: ["React", "Bootstrap", "Netlify", "HTML", "CSS", "Figma"],
        images: ["https://res.cloudinary.com/dkfa8olux/image/upload/v1736791640/yael_portfolio_2024/projects/babydonas/babydonas_mockup_desktop_1_s0xgnq.png", "https://res.cloudinary.com/dkfa8olux/image/upload/v1736791640/yael_portfolio_2024/projects/babydonas/babydonas_mockup_desktop_2_h18w6j.png", "https://res.cloudinary.com/dkfa8olux/image/upload/v1736791491/yael_portfolio_2024/projects/babydonas/babydonas_mockup_mobil2_ii56lw.png", "https://res.cloudinary.com/dkfa8olux/image/upload/v1736791491/yael_portfolio_2024/projects/babydonas/babydonas_mockup_mobile_1_qkwk3k.png"],
        date: "02/12/2024"
    },
    {
        id: 6,
        name: "Moonsy",
        slug: "moonsy",
        description: "Moonsy is an e-commerce store that sells high-quality makeup products, guaranteeing variety and inclusivity.",
        design: "https://www.figma.com/proto/1l08VktmrVcr0uiyWdLFot/Moonsy?node-id=200-10&t=fYe2TVwFBXxc8vCd-0&scaling=scale-down-width&content-scaling=fixed&page-id=27%3A73&starting-point-node-id=200%3A4",
        cover: "https://res.cloudinary.com/dkfa8olux/image/upload/v1736723206/yael_portfolio_2024/projects/moonsy/moonsy_mockups_yhvrup.png",
        tech: ["UX/UI Design", "UX Research", "UX Thinking", "Wireframing", "Prototyping", "Responsive Design", "Figma"],
        images: ["https://res.cloudinary.com/dkfa8olux/image/upload/v1736786988/yael_portfolio_2024/projects/moonsy/mockup_moonsy_desktop_orrtoa.png","https://res.cloudinary.com/dkfa8olux/image/upload/v1736786988/yael_portfolio_2024/projects/moonsy/mockup_moonsy_desktop_2_iyp9ig.png" ,"https://res.cloudinary.com/dkfa8olux/image/upload/v1736723206/yael_portfolio_2024/projects/moonsy/moonsy_mockups_yhvrup.png", "https://res.cloudinary.com/dkfa8olux/image/upload/v1736787311/yael_portfolio_2024/projects/moonsy/mockup_3_mobile_fvfkyk.png"],
        date: "29/12/2024"
    },
]


export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permite todas las solicitudes
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Métodos permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Headers permitidos
  
    if (req.method === 'OPTIONS') {
        return res.status(200).end(); // Manejo de preflight
    }

    // Obtener los parámetros de consulta
    const { slug } = req.query;

    // Si hay un slug, filtrar el proyecto
    if (slug) {
        const filteredProject = projects.find((project) => project.slug === slug);

        if (!filteredProject) {
        return res.status(404).json({ error: "Project not found" });
        }

        return res.status(200).json(filteredProject);
    }

    // Si no hay slug, devolvemos todos los proyectos
    res.status(200).json(projects);
}
  