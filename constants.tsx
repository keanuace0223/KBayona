
import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'silang-emergency',
    number: '01',
    title: 'Silang Emergency App',
    category: 'React Native / Supabase / PostgreSQL',
    imageUrl: '/assets/images/SilangEmergency.png',
    aspectRatio: 'standard'
  },
  {
    id: 'bnd-pro-league',
    number: '02',
    title: 'One Piece Fandom Site',
    category: 'HTML / CSS / Javascript',
    imageUrl: '/assets/images/Onepiece.png',
    aspectRatio: 'standard'
  },
  {
    id: 'empsys',
    number: '03',
    title: 'EmpSys',
    category: 'PHP / MySQL / .NET / Enterprise Systems',
    imageUrl: '/assets/images/EmpSys.png',
    aspectRatio: 'standard'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'fullstack',
    title: 'Full-Stack Development (Systems Focus)',
    tags: ['Development', 'Architecture'],
    description: 'Developing scalable web and mobile applications with focus on system integrity. Utilizing PHP, .NET, and React Native to build interfaces that command complex data backends.',
    iconName: 'Terminal'
  },
  {
    id: 'hardware',
    title: 'Web Development',
    tags: ['Web Development', 'Frontend'],
    description: 'Building responsive, accessible, and performant web interfaces using modern HTML, CSS, and JavaScript. Crafting pixel-perfect layouts with clean semantic markup, modern CSS techniques, and interactive client-side functionality.',
    iconName: 'Globe'
  },
  {
    id: 'troubleshooting',
    title: 'Advanced Troubleshooting & Optimization',
    tags: ['Diagnostic', 'Systems'],
    description: 'Deep-dive diagnostics of complex systems. Identifying bottlenecks across the stack, from kernel-level hardware interruptions to network latency in distributed systems.',
    iconName: 'Wrench'
  }
];
