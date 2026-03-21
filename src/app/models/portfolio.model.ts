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
  about: `Software Engineer with over 2 years of experience building and maintaining enterprise web applications, specialising in frontend development using Angular, JavaScript, and TypeScript. Currently working at Smart Applications International on the Smart Insure product, developing scalable, user-centric solutions that enhance usability and system performance. Proficient in modern UI development using Tailwind CSS and Angular Material, with strong version control practices using Git and GitHub and experience in containerisation using Docker.`,

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
    { name: "Docker", category: "DevOps", level: 100 },
    { name: "Git / GitHub", category: "DevOps", level: 100 },
    { name: "GitLab", category: "DevOps", level: 100 },
  ] as Skill[],

  projects: [
    {
      title: "Online Shoe Shop",
      description:
        "A full-featured e-commerce platform for footwear with product listings, cart management, and a seamless checkout experience built with Angular.",
      tech: ["Angular", "TypeScript", "SCSS"],
      githubUrl: "https://github.com/samndambuki/online-shoe-shop",
    },
    {
      title: "Stack Overflow Clone",
      description:
        "A developer Q&A community platform replicating core Stack Overflow features — question posting, voting, tagging, and real-time answering.",
      tech: ["Angular", "TypeScript", "Node.js"],
      githubUrl: "https://github.com/samndambuki/stack-overflow",
    },
    {
      title: "Online Code Compiler",
      description:
        "A browser-based code execution environment supporting multiple programming languages with real-time output, syntax highlighting, and a custom API backend.",
      tech: ["Angular", "Node.js", "Docker", "Express.js"],
      githubUrl: "https://github.com/samndambuki/code-zap-frontend",
    },
  ] as Project[],

  education: {
    degree: "Bachelor of Science in Information Technology",
    institution: "Dedan Kimathi University of Technology",
    period: "2019 – 2023",
  },
};
