// Define types for Experiences data

export interface Experience{ 
    id: number;
    company: string;
    role: string;
    period: string;
    responsabilities: string[];
};

// Define types for Project data
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  projectUrl: string;
  codeUrl: string;
}

// Define types for Note data
export interface Note {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

// Define types for Education
export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
}

// Define types for Skill
export interface Skill {
  id: number;
  name: string;
  level: number;
}

// Define types for Hobby
export interface Hobby {
  id: number;
  name: string;
  icon: string;
}