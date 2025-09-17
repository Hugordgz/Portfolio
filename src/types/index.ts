export interface Project {
  id: string;
  type: 'powerbi' | 'python' | 'sql';
  title: string;
  description: string;
  tech: string[];
  embedUrl?: string;
  link?: string;
  query?: string;
  image?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'programming' | 'database' | 'visualization' | 'analytics' | 'cloud';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
