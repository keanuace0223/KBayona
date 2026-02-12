
export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  imageUrl: string;
  aspectRatio: 'standard' | 'tall';
}

export interface Experience {
  id: string;
  title: string;
  tags: string[];
  description: string;
  iconName: string;
}

export type Theme = 'light' | 'dark';
