/**
 * Portfolio Site Configuration
 * 
 * Edit this file to customize your portfolio.
 * All content, personal info, projects, and experiences are managed here.
 */

export const siteConfig = {
  // Personal Information
  personal: {
    name: "Gustavo Luna",
    role: "Full Stack Developer",
    greeting: "Hi, I am",
    profileImage: "/profile.png", // Place your image in /public
    bio: [
      "I'm Gustavo Luna, a Full Stack Developer passionate about building innovative solutions and contributing to meaningful projects. Currently based in São Paulo, Brazil.",
      "I specialize in full-stack development with a focus on modern web technologies, creating scalable applications, and implementing efficient database solutions.",
      "When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and continuously learning to improve my craft.",
    ],
    areasOfInterest: [
      "Full Stack Development",
      "Frontend Development (Web)",
      "Backend Development (RESTFUL Api's)",
      "Database Design (PL-SQL)",
      "CI/CD (Github Actions)",
      "Infra (VPS Hosting, Docker, Kubernetes)",
    ],
  },

  // Contact Information
  contact: {
    email: "gustavocluna81@gmail.com",
    phone: "+55 11 99331-8133",
    location: "São Paulo, SP",
    linkedin: "https://linkedin.com/in/gustavocluna",
    github: "https://github.com/xyztavo",
  },

  // Languages
  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "C2 Speaking, C1 Writing" },
  ],

  // Skills organized by category
  skills: {
    backend: {
      title: "Backend",
      items: [
        {
          category: "Golang",
          technologies: [
            { name: "Chi", icon: "https://cdn.simpleicons.org/go/white" },
            { name: "Fiber", icon: "https://cdn.simpleicons.org/go/white" },
            { name: "UberFX", icon: "https://cdn.simpleicons.org/uber/white" },
          ],
        },
        {
          category: "Node.js",
          technologies: [
            { name: "Elysia", icon: "https://cdn.simpleicons.org/nodedotjs/white" },
            { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },
            { name: "Fastify", icon: "https://cdn.simpleicons.org/fastify/white" },
          ],
        },
      ],
    },
    frontend: {
      title: "Frontend",
      items: [
        { name: "React", icon: "https://cdn.simpleicons.org/react/white" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
        { name: "Qwik", icon: "https://cdn.simpleicons.org/qwik/white" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/white" },
      ],
    },
    databases: {
      title: "Databases",
      items: [
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/white" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/white" },
        { name: "Turso", icon: "https://cdn.simpleicons.org/turso/white" },
        { name: "PocketBase", icon: "https://cdn.simpleicons.org/pocketbase/white" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/white" },
        { name: "Object Storage", icon: "https://cdn.simpleicons.org/amazons3/white" },
      ],
    },
    tools: {
      title: "Tools & Others",
      items: [
        { name: "Git", icon: "https://cdn.simpleicons.org/git/white" },
        { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions/white" },
        { name: "Drizzle ORM", icon: "https://cdn.simpleicons.org/drizzle/white" },
        { name: "NestJS", icon: "https://cdn.simpleicons.org/nestjs/white" },
        { name: "SEO", icon: "https://cdn.simpleicons.org/googlesearchconsole/white" },
      ],
    },
    infrastructure: {
      title: "Infrastructure & Hosting",
      items: [
        { name: "Debian VPS", icon: "https://cdn.simpleicons.org/debian/white" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/white" },
        { name: "Systemd", icon: "https://cdn.simpleicons.org/systemd/white" },
        { name: "Caddy", icon: "https://cdn.simpleicons.org/caddy/white" },
      ],
    },
  },

  // Projects
  projects: [
    {
      title: "Lunai",
      description: "An open-source ecosystem with tools to help with your daily life and personal and physical development. Built with Golang, Typescript, and PostgreSQL.",
      tags: ["Golang", "TypeScript", "PostgreSQL"],
      github: "https://github.com/lunai-monster",
      liveUrl: "https://lunai.monster",
      featured: true,
    },
    {
      title: "Car Ja E-commerce",
      description: "FullStack e-commerce platform for car parts with microservices payment gateway and RAG integration.",
      tags: ["Golang", "NextJs", "Microservices"],
      liveUrl: "https://carja.com.br",
      featured: true,
    },
    {
      title: "Instagram Unfollowers",
      description: "A browser-based tool to identify users who don't follow you back on Instagram. Features whitelist system, export/import functionality, and customizable timing settings.",
      tags: ["TypeScript", "Instagram API", "React"],
      github: "https://github.com/davidarroyo1234/InstagramUnfollowers",
      liveUrl: "https://davidarroyo1234.github.io/InstagramUnfollowers/",
      contributed: true,
    },
    {
      title: "ServeCommand Project",
      description: "Corporate team and task administration platform with slash commands and activity registration flow.",
      tags: ["Drizzle", "PostgreSQL", "NextJs", "Local-First"],
      liveUrl: "https://servecommand.com",
      contributed: true,
    },
    {
      title: "Direção Positiva",
      description: "Full-Stack application for driving instructors and students with Google Maps API integration.",
      tags: ["React", "Golang", "Google Maps API"],
      liveUrl: "https://direcaopositiva.com.br",
      contributed: true,
    },
  ],

  // Work & Education Timeline
  experiences: [
    {
      type: "work",
      title: "Dev Fullstack Freelance",
      organization: "ServeCommand",
      location: "NY, Remote",
      period: "August 2025 - November 2025",
      description: "Collaborated in development as a remote freelance role on the project, developed features like slash commands and a new activity registration flow. The project is focused on corporate team and task administration.",
      tags: ["Drizzle", "PostgreSQL", "NextJs", "Local-First", "Proprietary Sync Engine"],
    },
    {
      type: "work",
      title: "Dev Fullstack Freelance",
      organization: "Car Ja",
      location: "São Paulo",
      period: "Since November 2025",
      description: "Developed a FullStack e-commerce platform focused on point-of-sale for car parts, with microservices payment gateway integration and RAG.",
      tags: ["Golang", "NextJs"],
    },
    {
      type: "work",
      title: "Dev Fullstack Freelance",
      organization: "Direção Positiva",
      location: "São Paulo",
      period: "Since November 2025",
      description: "Developed a Full-Stack application for driving instructors and students, with Google Maps API integration.",
      tags: ["React", "Golang"],
    },
    {
      type: "education",
      title: "Systems Development",
      organization: "Etec Irmã Agostina",
      location: "Autódromo Interlagos, SP",
      period: "June 2023 - December 2025",
      description: "Studied systems analysis and development, developed full stack projects like the final graduation project (TCC) using knowledge of CI/CD, Hosting, SEO, and Web Development.",
      tags: ["Typescript", "NestJs", "NextJs"],
    },
    {
      type: "education",
      title: "Systems Development",
      organization: "Fatec Zona Sul",
      location: "São Paulo, SP",
      period: "Since February 2026",
      description: "Started the systems analysis and development course at Fatec Zona Sul.",
      tags: [],
    },
  ],

  // Page Content
  pages: {
    home: {
      title: "Gustavo Luna",
      subtitle: "Full Stack Developer crafting modern web experiences",
      ctaText: "View My Work",
      ctaLink: "/work",
    },
    about: {
      title: "About Me",
      subtitle: "Get to know me better",
      ctaText: "Check Out My Skills",
      ctaLink: "/skills",
    },
    skills: {
      title: "My Skills",
      subtitle: "Technologies and tools I work with",
      footer: "Always learning and exploring new technologies",
      ctaText: "View My GitHub",
    },
    work: {
      title: "My Work",
      subtitle: "Projects I've built and contributed to",
      ctaText: "View My Journey",
      ctaLink: "/experiences",
    },
    experiences: {
      title: "My Journey",
      subtitle: "A timeline of my professional experiences and education",
      ctaText: "Learn More About Me",
      ctaLink: "/about",
    },
  },

  // Site Metadata
  metadata: {
    title: "Gustavo Luna - Portfolio",
    description: "Full Stack Developer specializing in modern web technologies, scalable applications, and efficient database solutions.",
    author: "Gustavo Luna",
  },
};

export type SiteConfig = typeof siteConfig;
export type Project = typeof siteConfig.projects[0];
export type Experience = typeof siteConfig.experiences[0];
export type Skill = typeof siteConfig.skills.frontend.items[0];
