export interface Experience {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export const PORTFOLIO_DATA = {
  name: "Samuel Ndambuki",
  initials: "SN",
  title: "Software Engineer",
  email: "sam.ndambuki08@gmail.com",
  phone: "+254 797 334 258",
  github: "https://github.com/samndambuki",
  linkedin: "https://www.linkedin.com/in/samuel-ndambuki-40026b1a0/",
  portfolioUrl: "https://sam-angular-portfolio.vercel.app/",
  about: `
  Full-Stack Software Engineer experienced in building scalable web and enterprise applications. Skilled in Angular, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Bootstrap, Angular Material, Figma, Node.js, and Express.js. Experienced in building RESTful APIs, microservices, backend services, authentication and authorization, API integrations, real-time applications, and modern software architectures.

  Proficient in database technologies including PostgreSQL and MySQL, with hands-on experience using Prisma ORM and working with SQL and NoSQL databases. Experienced in CI/CD, cloud computing, and deploying scalable applications on Microsoft Azure and AWS, with a focus on performance, security, reliability, and maintainability.

  Also experienced in using Figma for UI/UX design, wireframing, prototyping, and translating design concepts into responsive, production-ready interfaces.

  Currently contributing to the Smart Insure platform at Smart Applications International, building secure, scalable, and user-centric solutions while collaborating within Agile teams to deliver high-quality software, optimize performance, and support business-critical enterprise systems.
  `,

  experiences: [
    {
      role: "Software Engineer",
      company: "Smart Applications International",
      period: "May 2025 – Present",
      current: true,
      bullets: [
        "Delivered and enhanced Angular frontend features for the Smart Insure platform, supporting core insurance workflows including product configuration, quotations, and role-based access control.",
        "Improved system stability and usability by refactoring existing components, optimising frontend performance, and resolving defects through effective debugging and API integration.",
        "Collaborated with backend, QA, and product teams to translate business requirements into secure, high-quality technical solutions while adhering to coding and quality standards.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Revenue Catalyst",
      period: "Nov 2023 – May 2025",
      current: false,
      bullets: [
        "Delivered high-impact frontend solutions using Angular, Angular Material and Tailwind CSS, improving system performance, responsiveness, and overall user experience across multiple products.",
        "Developed scalable administrative and knowledge management tools, streamlining operational processes and enhancing efficiency for internal teams and clients.",
        "Collaborated with cross-functional and client teams, delivering maintainable, high-quality code that enabled adoption of modern, AI-driven workflows and supported business objectives.",
      ],
    },
    {
      role: "Software Engineer",
      company: "theJitu",
      period: "April 2023 – June 2023",
      current: false,
      bullets: [
        "Developed and maintained full-stack web applications using Angular, Node.js, and SQL, enhancing usability, performance, and reliability across multiple projects.",
        "Designed and optimised SQL queries for large datasets, improving data retrieval speed and supporting efficient decision-making.",
        "Collaborated with senior engineers to deliver responsive, production-ready features while applying best practices in JavaScript, TypeScript, and Express.js.",
      ],
    },
  ] as Experience[],

  skills: [
    { name: "Angular", category: "Frontend", level: 100 },
    { name: "TypeScript", category: "Language", level: 100 },
    { name: "JavaScript", category: "Language", level: 100 },
    { name: "Tailwind CSS", category: "Frontend", level: 100 },
    { name: "Angular Material", category: "Frontend", level: 100 },
    { name: "Bootstrap", category: "Frontend", level: 100 },
    { name: "Figma", category: "UI UX", level: 100 },
    { name: "Node.js", category: "Backend Development", level: 100 },
    { name: "Express.js", category: "Backend Development", level: 100 },
    { name: "Postgre SQL", category: "Databases & ORM", level: 100 },
    { name: "MySQL", category: "Databases & ORM", level: 100 },
    { name: "Prisma ORM", category: "Databases & ORM", level: 100 },
    { name: "Jest", category: "QA", level: 100 },
    { name: "Docker", category: "DevOps", level: 100 },
    { name: "Git / GitHub", category: "DevOps", level: 100 },
    { name: "GitLab", category: "DevOps", level: 100 },
  ] as Skill[],

  projects: [
    {
      title: "Market Sense Portal",
      description:
        "AI powered market intelligent platform that helps businesses discover growth opportunities, analyze competitors, analyze markets and make better and informed decissions",
      tech: ["Angular", "Node.js", "Express.js,PostgreSQL,Prisma ORM"],
      githubUrl: "https://github.com/samndambuki/market-sense-backend.git",
    },
    {
      title: "Online Shoe Shop",
      description:
        "A full-featured e-commerce platform for footwear with product listings, cart management, and a seamless checkout experience built with Angular.",
      tech: ["Angular", "TypeScript", "SCSS", "json-server"],
      githubUrl: "https://github.com/samndambuki/online-shoe-shop",
    },
  ] as Project[],

  education: {
    degree: "Bachelor of Science in Information Technology",
    institution: "Dedan Kimathi University of Technology",
    period: "2019 – 2023",
  },
};
