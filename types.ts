
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

export type Theme = 'light' | 'dark';
