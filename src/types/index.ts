export interface UserData {
  name: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  leetcode: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skills;
  certifications: Certification[];
  achievements: string[];
  positions: Position[];
}

export interface Education {
  degree: string;
  institute: string;
  grade: string;
  year: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
}

export interface Project {
  name: string;
  description: string;
  duration: string;
  technologies: string[];
  links: {
    website?: string;
    github?: string;
  };
  highlights: string[];
}

export interface Skills {
  languages: string[];
  frameworks: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Position {
  title: string;
  organization: string;
  duration: string;
}

export interface TerminalCommand {
  command: string;
  description: string;
  action: () => void;
}