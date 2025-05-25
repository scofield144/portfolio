import type { LucideIcon } from 'lucide-react';
// Removed Lucide icons that will be replaced by emojis inline

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  emojiIcon?: string; // Changed from LucideIcon to string for emoji
}

export interface AboutItem {
  title: string;
  content: string;
  emojiIcon?: string; // Changed from LucideIcon to string for emoji
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  emojiIcon?: string; // Changed from LucideIcon to string for emoji
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  imageHint?: string;
  fontCodeUrl?: string;
  openProjectUrl?: string;
  emojiIcon?: string; // Changed from LucideIcon to string for emoji
}

export interface Note {
  id: string;
  title: string;
  summary: string;
  readMoreLink?: string;
  emojiIcon?: string; // Changed from LucideIcon to string for emoji
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  professionalSummary: string;
  portfolioIntro: string;
}

export const personalInfo: PersonalInfo = {
  name: "Fabio Tales Victorino",
  title: "DevOps Engineer",
  location: "Corimba, Luanda, Angola",
  professionalSummary: "IT professional skilled in Cloud and Network management, Programming, and Design, with a strong foundation in IT Support. Continuously expanding expertise to deliver modern, efficient, and comprehensive technology solutions.",
  portfolioIntro: "Welcome to my digital space! I'm Fabio, a DevOps Engineer passionate about leveraging technology to build efficient solutions and drive innovation. Explore my work and journey.",
};

export const educationData: EducationItem[] = [
  {
    institution: "Instituto Superior de Tecnologias e Ciências (ISPTEC)",
    degree: "Engenharia Informatica",
    period: "2020 - 2023",
    emojiIcon: "🎓",
  },
  {
    institution: "Instituto Medio Politecnico Alda Lara",
    degree: "Ensino Médio, Informática",
    period: "2015 - 2019",
    emojiIcon: "📚",
  },
];

export const aboutData: AboutItem[] = [
  {
    title: "Motivação na Carreira de Tecnologia",
    content: "Desde criança, sempre fui fascinado por computadores e pela forma como a tecnologia pode transformar vidas. Decidi seguir Engenharia Informática para transformar essa paixão em uma carreira que impacta positivamente as pessoas.",
    emojiIcon: "💡",
  },
  {
    title: "Hobbies e Interesses Pessoais",
    content: "Nos meus momentos livres, gosto de jogar xadrez, explorar novas tecnologias e participar de hackathons. Também adoro viajar e conhecer novas culturas, o que me inspira a pensar de forma criativa.",
    emojiIcon: "🎮",
  },
  {
    title: "Objetivos Profissionais Futuros",
    content: "Meu objetivo é me especializar em inteligência artificial e machine learning, contribuindo para projetos que resolvam problemas reais na África e no mundo. Também pretendo mentorar jovens aspirantes a profissionais de tecnologia.",
    emojiIcon: "🎯",
  },
];

export const experienceData: Experience[] = [
  {
    id: "exp1",
    role: "IT Specialist, Programmer, and Project Manager",
    company: "Watchtower - Bethel",
    period: "October 2023 - Present",
    responsibilities: [
      "Lead deployment/optimization of SharePoint, Power Automate, and Microsoft 365 tools, automating workflows and enhancing cross-departmental collaboration.",
      "Oversee full-cycle production of educational courses (content development, platform customization, user training) for seamless learning delivery on Moodle Platform.",
      "Align IT projects with organizational goals via cross-functional collaboration, ensuring timely delivery and resource efficiency.",
      "Troubleshoot systems and maintain reliability/security for staff.",
    ],
    emojiIcon: "💼",
  },
  {
    id: "exp2",
    role: "Freelance Web Developer, UI/UX Designer & Project Advisor",
    company: "Fazenda 27, Lda",
    period: "October 2023 - Present",
    responsibilities: [
      "Design and develop responsive, user-friendly websites, ensuring optimal performance and modern functionality.",
      "Create intuitive and visually appealing interfaces, focusing on user experience and accessibility.",
      "Guide clients through project planning, execution, and delivery, ensuring alignment with business goals and timelines.",
    ],
    emojiIcon: "🧑‍💻", 
  },
  {
    id: "exp3",
    role: "IT Technician",
    company: "Fazenda 27, Lda",
    period: "March 2019 – September 2019",
    responsibilities: [
      "Managed infrastructure maintenance, troubleshooting, and optimization for seamless performance in Data Center Operations.",
      "Installed, configured, and maintained CCTV camera networks to ensure robust site security.",
      "Deployed and supported voice-over-IP systems to enhance internal communication efficiency.",
    ],
    emojiIcon: "🏢",
  },
];

export const projectData: Project[] = [
  {
    id: "proj1",
    name: "Adapte - Web Site",
    description: "A website for Adapte, a nonprofit organization dedicated to providing tech solutions, education, and community support.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "nonprofit organization website",
    fontCodeUrl: "#", 
    openProjectUrl: "#", 
    emojiIcon: "🌐", 
  },
  {
    id: "proj2",
    name: "Visa-Issuance System",
    description: "A system designed to streamline visa application and issuance processes, enhancing efficiency and user experience.",
    technologies: ["Java", "NetBeans", "MySQL"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "visa application system",
    fontCodeUrl: "#", 
    openProjectUrl: "#", 
    emojiIcon: "🛂", 
  },
];

export const notesData: Note[] = [
  {
    id: "note1",
    title: "The Essence of Logical Thinking in Tech",
    summary: "Logical and abstract thinking is essential for solving complex problems, making informed decisions, and developing advanced cognitive skills in the technology field.",
    readMoreLink: "#",
    emojiIcon: "📄",
  },
  {
    id: "note2",
    title: "Abstraction: Simplifying Complexity",
    summary: "Abstraction allows us to manage complexity by hiding implementation details and focusing on essential characteristics. It's a cornerstone of good software design.",
    readMoreLink: "#",
    emojiIcon: "📄",
  },
  {
    id: "note3",
    title: "Problem Solving Strategies",
    summary: "A quick overview of common problem-solving techniques like divide and conquer, root cause analysis, and pattern recognition that I frequently use.",
    readMoreLink: "#",
    emojiIcon: "📄",
  },
];

export function getPortfolioContentAsString(): string {
  let content = `Name: ${personalInfo.name}\nTitle: ${personalInfo.title}\nSummary: ${personalInfo.professionalSummary}\n\n`;

  content += "Education:\n";
  educationData.forEach(edu => {
    content += `- ${edu.institution}: ${edu.degree} (${edu.period})\n`;
  });
  content += "\n";

  content += "Experience:\n";
  experienceData.forEach(exp => {
    content += `\nCompany: ${exp.company}\nRole: ${exp.role}\nPeriod: ${exp.period}\nResponsibilities:\n`;
    exp.responsibilities.forEach(resp => {
      content += `  - ${resp}\n`;
    });
  });
  content += "\n";

  content += "Projects:\n";
  projectData.forEach(proj => {
    content += `\nProject: ${proj.name}\nDescription: ${proj.description}\nTechnologies: ${proj.technologies.join(", ")}\n`;
  });
  content += "\n";
  
  content += "Skills & Interests:\n";
  aboutData.forEach(item => {
    content += `${item.title}: ${item.content}\n`;
  });

  return content;
}
