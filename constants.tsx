
import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'silang-emergency',
    number: '01',
    title: 'SilangEmergency',
    category: 'React Native / Mobile Infrastructure',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3JWXjPMMgvKgtQ25oPDcOtFpNrcanSBdMzTQod7ZRuJU4Gq4U8ARX7hf_P2_qAJJWNL6NAN5CyiLjhlx496tIZ9elXrYXE3RyEBYXSPnTKvh-kWo8KC5OT4pkGyKZAyPEs8ksLYq46mkwpap3tqB_RZkuNSjpUuAfASqnZyw7sNddUFVqgFC65IfUrdnjowjX0FI8rDdo29EhlD35KcSdxgL_LnJ09frJ1bdEbi4-fZV66oDHH-iSPY01ni45kuT8UMHkGru_hIbX',
    aspectRatio: 'standard'
  },
  {
    id: 'bnd-pro-league',
    number: '02',
    title: 'BND Pro League',
    category: 'Hardware Integration / Broadcast Systems',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBllNn4G-iySF25Ba7dDQo7PTA5CSmz_YjGw7hn_wxVm5FxFLQSyACBaOx3fmHiZi4wyysG7cBHHC--uxOP8GF2aIS--hIx-MMwyYmh-0tnTj2CuxE7PmnXTmt_lRTiz83W5K2PZyIyTYnD7guOWK4RDn6dju1miPYXnG8myHiL45xmeFi2claJIIJIWLvz82ZziYgHmaSsWgq0lFTCW5T-IXTcyyp3qZ_y70QwXN2debQYB7oZnKrrXtwusuGQw7aVmW2ho7rLFWJk',
    aspectRatio: 'standard'
  },
  {
    id: 'empsys',
    number: '03',
    title: 'EmpSys',
    category: 'PHP / MySQL / .NET / Enterprise Systems',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhzZg-hS1iggP3UwRLEZfBq43m_9g0t66FA41VO-wGcBEAlNgsZlluJZbsGl-il90LpCO8Tr-zJYNesfVSIksIDqIlAdNVzYhct3QXENjYl4WyWIvPtT4wADxZ6d3Ogbf39SQq4TTpxuloHf4M6Ye-g76TY5vNEorqOgh0GQAdoVX5tgWISQ3PRfn37ZuR3CbqgAxlHrbqZvuV3_th_X8T50LP3PlALH-sEHo3omCG6lR0IX9m1ZRJivWzrn6lR-P1-QAouBMmyxBK',
    aspectRatio: 'tall'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'hardware',
    title: 'PC Assembly & Hardware Architecture',
    tags: ['Infrastructure', 'Hardware'],
    description: 'Designing and building high-performance computational nodes. Expertise in thermal dynamics, component synergy, and custom workstation optimization for broadcast and engineering environments.',
    iconName: 'Cpu'
  },
  {
    id: 'troubleshooting',
    title: 'Advanced Troubleshooting & Optimization',
    tags: ['Diagnostic', 'Systems'],
    description: 'Deep-dive diagnostics of complex systems. Identifying bottlenecks across the stack, from kernel-level hardware interruptions to network latency in distributed systems.',
    iconName: 'Wrench'
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development (Systems Focus)',
    tags: ['Development', 'Architecture'],
    description: 'Developing scalable web and mobile applications with focus on system integrity. Utilizing PHP, .NET, and React Native to build interfaces that command complex data backends.',
    iconName: 'Terminal'
  }
];
