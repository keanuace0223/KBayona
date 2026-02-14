
export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  imageUrl?: string;
  aspectRatio: 'standard' | 'tall';
  githubUrl?: string;
  liveUrl?: string;
  darkVariant?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  tags: string[];
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  date: string;
  platform: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export type Theme = 'light' | 'dark';
