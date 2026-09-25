export interface TranslationKeys {
    nav_home: string;
    nav_about: string;
    nav_exp: string;
    nav_edu: string;
    nav_portfolio: string;
    nav_contact: string;
    greeting: string;
    im: string;
    description: string;
    btn_hire: string;
    btn_resume: string;
    about_subtitle: string;
    about_title: string;
    about_bio: string;
    lbl_name: string;
    lbl_from: string;
    lbl_email: string;
    skills_title: string;
    cat_design: string;
    cat_dev: string;
    cat_media: string;
    exp_subtitle: string;
    exp_title: string;
    role_1: string;
    date_1: string;
    desc_1: string;
    role_2: string;
    date_2: string;
    desc_2: string;
    role_3: string;
    date_3: string;
    company_utesa: string;
    desc_3: string;
    edu_subtitle: string;
    edu_title: string;
    edu_1_title: string;
    edu_1_school: string;
    edu_1_desc: string;
    edu_1_honor: string;
    edu_2_title: string;
    edu_2_school: string;
    edu_2_desc: string;
    edu_3_title: string;
    edu_3_desc: string;
    edu_4_title: string;
    edu_4_desc: string;
    port_subtitle: string;
    port_title: string;
    cat_all: string;
    cat_web: string;
    cat_ux: string;
    cat_photo: string;
    cat_graphic: string;
    contact_subtitle: string;
    contact_title: string;
    contact_msg: string;
    info_loc_title: string;
    info_email_title: string;
    info_phone_title: string;
    social_title: string;
    footer_rights: string;
}

export const translations: Record<'en' | 'es', TranslationKeys> = {
    en: {
        nav_home: "Home",
        nav_about: "About Me",
        nav_exp: "Experience",
        nav_edu: "Education",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        greeting: "HI THERE!",
        im: "I'M",
        description: "I'm a designer based in Dominican Republic, specialized in creating visual experiences and functional interfaces. Passionate about detail and aesthetics.",
        btn_hire: "HIRE ME",
        btn_resume: "SEE RESUME",
        about_subtitle: "WHO I AM",
        about_title: "About Me",
        about_bio: "Hello! I'm Pablo Diaz, a multidisciplinary creative passionate about the intersection of design and technology. With a sharp eye for detail and a focus on user experience, I transform complex ideas into elegant digital solutions. Whether it's crafting a pixel-perfect interface or coding a robust website, I give 100% to every project.",
        lbl_name: "Name:",
        lbl_from: "From:",
        lbl_email: "Email:",
        skills_title: "My Skills & Tools",
        cat_design: "Graphic & UI Design",
        cat_dev: "Web Development",
        cat_media: "Photography & Video",

        // Experiencia
        exp_subtitle: "MY JOURNEY",
        exp_title: "Work Experience",
        role_1: "Web Designer",
        date_1: "July 2023 - Present",
        desc_1: "<ul><li>Conceptualize and develop interactive, responsive, and business-driven websites.</li><li>Implement efficient technical solutions using Astro, React, WordPress (Elementor Pro), and Tailwind CSS.</li><li>Collaborate on digital interface design using Figma.</li></ul>",
        role_2: "Visual Consultant & Designer",
        date_2: "Jan 2022 - Present",
        desc_2: "<ul class='md:list-inside md:text-right' style='direction: rtl;'><li style='direction: ltr;'>Corporate Identity Design for various local businesses.</li><li style='direction: ltr;'>Commercial & Event Photography direction.</li><li style='direction: ltr;'>Operational Management for Dorae Privé Group (Luxury tourism).</li></ul>",
        role_3: "Junior Graphic Designer",
        date_3: "Sept 2022 - June 2023",
        company_utesa: "Universidad Tecnológica de Santiago - UTESA",
        desc_3: "<ul><li>Managed the university's visual and institutional identity.</li><li>Designed complex multimedia assets using Photoshop and Illustrator.</li></ul>",

        // Educación
        edu_subtitle: "ACADEMIC BACKGROUND",
        edu_title: "Education & Certifications",
        edu_1_title: "Associate Degree in Multimedia",
        edu_1_school: "Instituto Tecnológico de las Américas (ITLA)",
        edu_1_desc: "Advanced training in professional photography, graphic design, video production/editing, UI/UX design, and conceptual web development.",
        edu_1_honor: "Graduated with Honors",
        edu_2_title: "Full Stack Web Development",
        edu_2_school: "Instituto Dominicano de las Telecomunicaciones",
        edu_2_desc: "Technical Training in web software architecture, frontend and backend programming, and database management for scalable applications.",
        edu_3_title: "Inbound Marketing Certification",
        edu_3_desc: "Inbound content strategy, digital social promotion, lead nurturing and conversion, and customer lifecycle optimization.",
        edu_4_title: "Technical High School Diploma in Computer Science",
        edu_4_desc: "Foundations of programming, computer systems maintenance, network management, and introductory databases.",

        port_subtitle: "MY WORK",
        port_title: "Latest Projects",
        cat_all: "All",
        cat_web: "Website",
        cat_ux: "UX/UI",
        cat_photo: "Photography",
        cat_graphic: "Graphic Design",
        contact_subtitle: "GET IN TOUCH",
        contact_title: "Contact Me",
        contact_msg: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out. Let's create something amazing together!",
        info_loc_title: "Location",
        info_email_title: "Email",
        info_phone_title: "Phone",
        social_title: "Connect on Social Media",
        footer_rights: "All rights reserved."
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Sobre Mí",
        nav_exp: "Experiencia",
        nav_edu: "Educación",
        nav_portfolio: "Portafolio",
        nav_contact: "Contacto",
        greeting: "¡HOLA A TODOS!",
        im: "SOY",
        description: "Soy un diseñador radicado en República Dominicana, especializado en crear experiencias visuales e interfaces funcionales. Apasionado por el detalle y la estética.",
        btn_hire: "CONTRATAR",
        btn_resume: "VER CV",
        about_subtitle: "QUIÉN SOY",
        about_title: "Sobre Mí",
        about_bio: "¡Hola! Soy Pablo Diaz, un creativo multidisciplinario apasionado por la intersección entre diseño y tecnología. Con buen ojo para el detalle y enfoque en la experiencia de usuario, transformo ideas complejas en soluciones digitales elegantes. Ya sea diseñando una interfaz perfecta o programando un sitio web robusto, doy el 100% en cada proyecto.",
        lbl_name: "Nombre:",
        lbl_from: "De:",
        lbl_email: "Correo:",
        skills_title: "Habilidades y Herramientas",
        cat_design: "Diseño Gráfico & UI",
        cat_dev: "Desarrollo Web",
        cat_media: "Fotografía y Video",

        // Experiencia
        exp_subtitle: "MI TRAYECTORIA",
        exp_title: "Experiencia Laboral",
        role_1: "Diseñador Web",
        date_1: "Julio 2023 - Actualidad",
        desc_1: "<ul><li>Conceptualización y desarrollo de sitios web interactivos y responsivos.</li><li>Implementación de soluciones con Astro, React, WordPress y Tailwind CSS.</li><li>Diseño de interfaces digitales y prototipado mediante Figma.</li></ul>",
        role_2: "Consultor Visual & Diseñador",
        date_2: "Ene 2022 - Presente",
        desc_2: "<ul class='md:list-inside md:text-right' style='direction: rtl;'><li style='direction: ltr;'>Diseño de Identidad Corporativa para empresas locales.</li><li style='direction: ltr;'>Dirección de Fotografía Comercial y de Eventos.</li><li style='direction: ltr;'>Gestión Operativa para Dorae Privé Group (Turismo de lujo).</li></ul>",
        role_3: "Diseñador Gráfico Junior",
        date_3: "Sept 2022 - Junio 2023",
        company_utesa: "Universidad Tecnológica de Santiago - UTESA",
        desc_3: "<ul><li>Gestión de la identidad visual e institucional de la universidad.</li><li>Diseño de piezas multimedia complejas mediante Photoshop e Illustrator.</li></ul>",

        // Educación
        edu_subtitle: "FORMACIÓN ACADÉMICA",
        edu_title: "Educación y Certificaciones",
        edu_1_title: "Tecnólogo en Multimedia",
        edu_1_school: "Instituto Tecnológico de las Américas (ITLA)",
        edu_1_desc: "Formación avanzada en fotografía profesional, diseño gráfico, producción/edición de video, diseño UI/UX y desarrollo web conceptual.",
        edu_1_honor: "Graduado con Honores (Muy Bueno)",
        edu_2_title: "Desarrollo Web Full Stack",
        edu_2_school: "Instituto Dominicano de las Telecomunicaciones",
        edu_2_desc: "Formación en arquitectura de software web, programación frontend y backend, y gestión de bases de datos.",
        edu_3_title: "Certificación Inbound Marketing",
        edu_3_desc: "Estrategia de contenidos, promoción en medios digitales, nutrición/conversión de leads y optimización del cliente.",
        edu_4_title: "Bachiller Técnico en Informática",
        edu_4_desc: "Fundamentos de programación, mantenimiento de sistemas informáticos, gestión de redes y bases de datos iniciales.",

        port_subtitle: "MI TRABAJO",
        port_title: "Últimos Proyectos",
        cat_all: "Todos",
        cat_web: "Sitios Web",
        cat_ux: "UX/UI",
        cat_photo: "Fotografía",
        cat_graphic: "Diseño Gráfico",
        contact_subtitle: "CONTACTO",
        contact_title: "Escríbeme",
        contact_msg: "Siempre estoy interesado en escuchar sobre nuevos proyectos y oportunidades. Ya sea que tengas una pregunta o simplemente quieras saludar, no dudes en contactarme. ¡Creemos algo increíble juntos!",
        info_loc_title: "Ubicación",
        info_email_title: "Correo",
        info_phone_title: "Teléfono",
        social_title: "Conecta en Redes Sociales",
        footer_rights: "Todos los derechos reservados."
    }
};
