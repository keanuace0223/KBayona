
import { Project, Experience } from './types';

const base = import.meta.env.BASE_URL;

export const PROJECTS: Project[] = [
  {
    id: 'silang-emergency',
    number: '01',
    title: 'Silang Emergency App',
    category: 'React Native / Supabase / PostgreSQL',
    description: 'A geolocation-based public safety infrastructure engineered for real-time incident reporting and high-availability emergency response coordination.',
    imageUrl: `${base}assets/images/SilangEmergency.png`,
    aspectRatio: 'standard',
    githubUrl: 'https://github.com/keanuace0223/SilangEmergency'
  },
  {
    id: 'onepiece-portal',
    number: '02',
    title: 'One Piece Fandom Site',
    category: 'HTML / CSS / Javascript',
    description: 'A high-performance interactive web portal prioritizing fluid UI transitions and responsive frontend architecture for complex content navigation.',
    imageUrl: `${base}assets/images/Onepiece.png`,
    aspectRatio: 'standard'
  },
  {
    id: 'empsys',
    number: '03',
    title: 'EmpSys',
    category: 'PHP / MySQL / .NET / Enterprise Systems',
    description: 'An enterprise resource planning system focused on secure database integrity and optimized backend logic for scalable administrative workflows.',
    imageUrl: `${base}assets/images/EmpSys.png`,
    aspectRatio: 'standard',
    githubUrl: 'https://github.com/keanuace0223/EmpSys'
  },
  {
    id: 'prsys',
    number: '04',
    title: 'Payroll Integrated System',
    category: 'C# / .NET / SQL',
    description: 'A robust financial ecosystem engineered for automated salary processing and high-precision enterprise data management.',
    aspectRatio: 'standard',
    darkVariant: true
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
