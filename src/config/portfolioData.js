/**
 * Centralized Portfolio Data
 * Easily edit details here to update the entire application content.
 */

export const portfolioData = {
  about: {
    name: "Zaeem Mahmood",
    bio: "I'm a Computer Science student I'm looking to specialize in AI and machine learning engineering.",
    profilePic: "/portfolio/profilepic.webp",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Git", "GitHub", "Figma"],
    typeAnimationSequence: [
      "a Computer Science Student",
      1500,
      "a Full Stack Developer",
      2000,
      "an AI Enthusiast",
      2000,
      "a Problem Solver",
      2000,
      "a Lifelong Learner",
      2000,
    ],
  },

  experiences: [
    {
      id: "arzen-inc",
      title: "Junior Full Stack Developer",
      company: "Arzen Inc.",
      location: "Lahore, Pakistan.",
      years: "August 2026 - Present",
      description: [
        "Working on production-level projects implementing industry’s best practices",
        "Built front-end features using Next.js with SSR and SSG for live production websites",
        "Implemented CMS (Strapi) on websites to allow non-technical content management",
        "Developed REST APIs to connect front-end with backend systems",
      ],
    },
    {
      id: "arzen-inc-intern",
      title: "Development Intern",
      company: "Arzen Inc.",
      location: "Lahore, Pakistan.",
      years: "March 2026 - July 2026",
      description: [
        "Working on production-level projects implementing industry’s best practices",
        "Built front-end features using Next.js with SSR and SSG for live production websites",
        "Implemented CMS (Strapi) on websites to allow non-technical content management",
        "Developed REST APIs to connect front-end with backend systems",
      ],
    },
  ],

  projects: [
    {
      id: "pja-system",
      title: "Punjab Judicial Academy Management System",
      image: null, /* Set to image path e.g. "/portfolio/projects/pja.webp" when ready */
      link: null, /* Set to live demo, repository, or Figma link */
      linkText: "View Project",
      description: [
        "Developed a management system including learning, hostel, and mess management",
        "Enabled participant enrollment, schedules training, administers tests, tracks attendance",
        "Designed system documentation, including requirement gathering, use cases, workflows,",
        "Designed the UI/UX in Figma and implemented the front-end using Next.js",
      ],
      technologies: ["Figma", "Next.js", "TypeScript"],
    },
  ],

  involvements: [
    {
      id: "ieee-gcu",
      title: "Finance Executive",
      company: "IEEE GCU Student Branch",
      location: "GCU, Lahore",
      years: "Nov 2024 - May 2025",
      description: [
        "Led a finance team, owning financial planning, budgeting, and expense tracking across student-led events and activities.",
        "Managed financial operations, documentation, and records, ensuring accurate tracking and smooth execution of organizational activities.",
      ],
    },
    {
      id: "hec-gen-ai",
      title: "HEC GEN AI Program",
      company: "Aspire Pakistan",
      location: "Remote",
      years: "Oct 2025 - Nov 2025",
      description: [
        "Completed the HEC Generative AI program covering LLMs, prompt engineering, RAG systems, AI agents, and AI application development and deployment workflows.",
        "Built AI-powered solutions using API integrations, vector databases, and AI-assisted prototyping, applying real-world AI development workflows.",
      ],
    },
  ],

  contact: {
    email: "zaeem.m571@gmail.com",
    linkedin: "https://linkedin.com/in/zaeemmahmood",
    github: "https://github.com/zaeem571",
  },
};

export default portfolioData;
