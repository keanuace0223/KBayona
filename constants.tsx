
import { Project, Experience, Testimonial, BlogPost, Stat } from './types';

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
    title: 'PRSys',
    category: 'C# / .NET / SQL',
    description: 'A robust financial ecosystem engineered for automated salary processing and high-precision enterprise data management.',
    imageUrl: `${base}assets/images/PRSys.png`,
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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Prof. Maria Santos',
    role: 'Capstone Advisor — CvSU Silang',
    quote: 'Keanu consistently demonstrated exceptional problem-solving abilities and a deep understanding of full-stack architecture. His Silang Emergency App project was one of the most technically ambitious capstones I\'ve advised.'
  },
  {
    id: 'testimonial-2',
    name: 'James Reyes',
    role: 'Internship Supervisor',
    quote: 'An incredibly resourceful developer who doesn\'t just write code — he engineers solutions. His ability to diagnose complex system issues and optimize performance made him an invaluable member of our team.'
  },
  {
    id: 'testimonial-3',
    name: 'Andrea Cruz',
    role: 'Team Lead — Academic Project',
    quote: 'Working alongside Keanu was a masterclass in software engineering discipline. He brought structure and scalability to our projects when others would have cut corners.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Building a Real-Time Emergency Response System with React Native',
    excerpt: 'A deep dive into the architecture behind geolocation-based emergency dispatch, real-time database syncing, and offline-first mobile design.',
    url: '#',
    date: '2025',
    platform: 'Technical Write-up'
  },
  {
    id: 'post-2',
    title: 'Enterprise Systems with PHP & .NET: Lessons from EmpSys',
    excerpt: 'What I learned building a full employee management suite — from secure authentication patterns to database migration strategies.',
    url: '#',
    date: '2025',
    platform: 'Case Study'
  },
  {
    id: 'post-3',
    title: 'From BPO Ops to Software Engineering: My Career Pivot',
    excerpt: 'How my experience in high-pressure BPO operations shaped my approach to building resilient, user-first software systems.',
    url: '#',
    date: '2024',
    platform: 'Personal'
  }
];

export const STATS: Stat[] = [
  { label: 'Projects Built', value: 4, suffix: '+' },
  { label: 'Tech Stacks', value: 6, suffix: '+' },
  { label: 'Internship Hours', value: 486, suffix: '' },
  { label: 'Lines of Code', value: 50, suffix: 'K+' }
];
