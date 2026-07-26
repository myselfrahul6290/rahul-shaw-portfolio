import { Github, Linkedin,Mail,Phone,MapPin } from 'lucide-react';

export const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rahulshaw1002/', icon: Linkedin },
    { name: 'Github', href: 'https://github.com/myselfrahul6290', icon: Github }
  ];

export  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'myselfrahul6290@email.com', href: 'mailto:rahul@email.com' },
    { icon: MapPin, title: 'Location', value: 'Kolkata, India' },
  ];  

export const stats = [
    { value: '02+', label: 'Years experience' },
    { value: '4+', label: 'Completed projects' },
    { value: '02+', label: 'Companies worked' },
  ];

  export const experiences = [
    {
      role: 'Software Engineer',
      company: 'NrXen',
      period: 'Jul 2024 - Present',
      description: 'Driving full-stack development for large-scale web applications, improving performance, scalability, and maintainability.',
    },
    {
      role: 'SDE Intern',
      company: 'NrXen',
      period: 'Feb 2024 - Jun 2024',
      description: 'Developing core frontend architecture for a large operational management system, improving usability and workflow efficiency.',
    },
    {
      role: 'SDE Intern',
      company: 'PMN Patralok',
      period: 'Jun 2023 - Dec 2023',
      description: 'Implementing secure authentication systems and media optimization pipelines, improving performance and user experience.',
    },
  ];



  export const  mobileProjects = [
    {
      logoChar: 'N',
      logoBg: 'bg-gradient-to-br from-green-400 to-cyan-500',
      title: 'Nxai Sense',
      description: 'AI-based CCTV monitoring system.',
      highlight: 'AI-Powered',
      isFeatured: true,
    },
    {
      logoChar: 'N',
      logoBg: 'bg-gradient-to-br from-blue-400 to-indigo-500',
      title: 'Nimmos V2',
      description: 'GPS tracking and attendance system.',
      highlight: 'GPS Tracking',
      isFeatured: false,
    },
    {
      logoChar: 'N',
      logoBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
      title: 'Nxlens',
      description: 'Evidence collection app.',
      highlight: 'Evidence Collection',
      isFeatured: false,
    },
  ];
  
  export const projects = [
    {
      logoChar: 'N',
      logoBg: 'bg-gradient-to-br from-green-400 to-cyan-500',
      title: 'Nxai Sense',
      description: 'An AI-based CCTV monitoring system. Built features, business logic, and responsive UIs with Next.js, TypeScript, and GraphQL. Collaborated with ML team to integrate AI surveillance models.',
      tags: ['Next.js', 'TypeScript', 'GraphQL', 'Node.js', 'Hasura'],
      highlight: 'AI-Powered Surveillance',
    },
    {
      logoChar: 'N',
      logoBg: 'bg-gradient-to-br from-blue-400 to-indigo-500',
      title: 'Nimmos V2',
      description: 'A GPS tracking and attendance system. Contributed to frontend using Next.js and GraphQL (Hasura).',
      tags: ['Next.js', 'GraphQL', 'Hasura'],
      highlight: 'GPS Tracking System',
    },
    {
      logoChar: 'N',
      logoBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
      title: 'Nxlens',
      description: 'An evidence collection app for service workers to capture and store service proofs, built in Laravel and MySQL.',
      tags: ['Laravel', 'MySQL'],
      highlight: 'Evidence Collection App',
    },
  ]

  export const education = [
    { degree: 'Computer Science', institution: 'Delhi University', period: '2018 - 2022' },
    { degree: 'Web Design Master', institution: 'Online Institute', period: '2020 - 2021' },
  ];
 export const work = [
    { role: 'Software Engineer', company: 'Tech Solutions Inc.', period: '2022 - Present' },
    { role: 'Frontend Intern', company: 'Creative Agency', period: '2021 - 2022' },
  ];


  export const skills = [
    {
      title: 'Backend',
      list: ['Node.js', 'Express.js', 'TypeScript', 'FastAPI'],
    },
    {
      title: 'Frontend',
      list: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Database',
      list: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL'],
    },
    {
      title: 'Tools',
      list: ['Git', 'CI/CD', 'Docker', 'MQTT'],
    },
  ];