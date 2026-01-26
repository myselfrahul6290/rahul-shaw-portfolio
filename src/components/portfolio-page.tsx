"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import PortfolioSection from '@/components/portfolio-section';
import ContactSection from '@/components/contact-section';
import ScrollUp from '@/components/scroll-up';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Send, Mail, Phone, MapPin, Briefcase, Calendar, CheckCircle, Code, LayoutTemplate, Palette, GraduationCap, ArrowRight, Download, Github, Linkedin, Dribbble, Star, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Card } from '@/components/ui/card';

const MobilePreview = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto border-gray-800 bg-gray-800 border-[11px] rounded-[2.3rem] h-full w-full max-w-[300px] max-h-[640px] shadow-2xl">
    <div className="w-[130px] h-[17px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
    <div className="h-[42px] w-[3px] bg-gray-800 absolute -left-[14px] top-[115px] rounded-l-lg"></div>
    <div className="h-[42px] w-[3px] bg-gray-800 absolute -left-[14px] top-[165px] rounded-l-lg"></div>
    <div className="h-[60px] w-[3px] bg-gray-800 absolute -right-[14px] top-[132px] rounded-r-lg"></div>
    <div className="rounded-[1.8rem] overflow-hidden w-full h-full bg-white">
      <div className="text-gray-800 h-full overflow-y-auto scrollbar-hide bg-background">
        {children}
      </div>
    </div>
  </div>
);

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-profile');
const aboutImage = PlaceHolderImages.find(p => p.id === 'about-me');

const MobileHome = () => (
  <div className="p-4 text-center flex flex-col items-center justify-center h-full text-foreground bg-background">
    {heroImage && (
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        width={96}
        height={96}
        priority
        className="relative object-cover rounded-full border-4 border-background shadow-lg mb-4"
      />
    )}
    {/* <h1 className="text-xs font-bold font-headline text-secondary">~RahulShaw</h1> */}

    <h1 className="text-2xl font-bold font-headline text-primary">Hi, I'm Rahul</h1>
    <h2 className="text-md font-semibold text-muted-foreground mt-2">
      Software Engineer</h2>
    <p className="text-xs text-foreground/80 mt-2">
      Strong experience in full-stack development, delivering scalable and high-quality applications.
    </p>
    <div className="grid grid-cols-3 gap-2 my-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-muted/50 p-2 rounded-lg">
          <p className="text-lg font-bold text-primary">{stat.value}</p>
          <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{stat.label}</p>
        </div>
      ))}
    </div>

    <Button size="sm" className="mt-4">Contact Me <Send className="ml-2 h-4 w-4" /></Button>
  </div>
);

const stats = [
  { value: '03+', label: 'Years experience' },
  { value: '15+', label: 'Completed projects' },
  { value: '02+', label: 'Companies worked' },
];
const experiences = [
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

const MobileAbout = () => (
  <div className="p-3 text-foreground bg-background overflow-y-auto text-center">
    <h2 className="text-xl font-headline font-bold text-primary">About Me</h2>
    <p className="text-xs text-muted-foreground mb-2">My introduction</p>

    {aboutImage && (
      <Image
        src={aboutImage.imageUrl}
        alt={aboutImage.description}
        data-ai-hint={aboutImage.imageHint}
        width={120}
        height={150}
        className="rounded-lg object-cover shadow-lg my-2 mx-auto aspect-[4/5]"
      />
    )}

    <p className="text-xs leading-5 text-foreground/80 px-2">
      <span className="font-semibold">Software Engineer</span> with experience building scalable web and mobile applications using modern technologies.
    </p>

    {/* <div className="grid grid-cols-3 gap-2 my-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-muted/50 p-2 rounded-lg">
          <p className="text-lg font-bold text-primary">{stat.value}</p>
          <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{stat.label}</p>
        </div>
      ))}
    </div> */}


    <div className="mt-6">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-primary mb-3 uppercase">
        <Briefcase className="w-4 h-4" /> Experience
      </h3>
      <div className="relative space-y-4 pl-1 text-left">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative pl-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-accent"></div>
            {index !== experiences.length - 1 && (
              <div className="absolute left-[2.5px] top-[10px] h-[calc(100%_-_4px)] w-px bg-accent/30"></div>
            )}
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-xs text-primary">{exp.role}</h4>
                <p className="text-xs text-muted-foreground">{exp.company}</p>
              </div>
              <p className="text-xs text-muted-foreground flex-shrink-0">{exp.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <Button size="sm" className="mt-6">Download CV <Download className="ml-2 h-3 w-3" /></Button>
  </div>
);

const services = [
  { icon: Palette, title: 'UI/UX Designer', details: ['Develop user interface.', 'Web page development.', 'UX element interactions.'] },
  { icon: Code, title: 'Frontend Developer', details: ['Build responsive sites.', 'Cross-browser compatibility.', 'Backend API integration.'] },
  { icon: LayoutTemplate, title: 'Branding Designer', details: ['Create brand identities.', 'Logo & style guide design.'] },
];

const MobileServices = () => (
  <div className="p-3 text-foreground bg-background">
    <h2 className="text-xl font-headline font-bold text-primary text-center mb-4">Services</h2>
    <motion.div
      className="space-y-4"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {services.map((service, index) => {
        const cardVariants = {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        };
        return (
          <motion.div key={index} variants={cardVariants}>
            <Card className="p-3 bg-card text-left">
              <service.icon className="w-6 h-6 text-accent mb-2" />
              <h3 className="font-headline text-base font-bold text-primary mb-2">{service.title}</h3>
              <ul className="space-y-1.5">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
);

const education = [
  { degree: 'Computer Science', institution: 'Delhi University', period: '2018 - 2022' },
  { degree: 'Web Design Master', institution: 'Online Institute', period: '2020 - 2021' },
];
const work = [
  { role: 'Software Engineer', company: 'Tech Solutions Inc.', period: '2022 - Present' },
  { role: 'Frontend Intern', company: 'Creative Agency', period: '2021 - 2022' },
];

const timelineItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const TimelineItem = ({ item, isLast }: { item: any; isLast: boolean }) => (
  <motion.div variants={timelineItemVariants} className="relative pl-6">
    <div className="block w-2.5 h-2.5 bg-accent rounded-full absolute left-[8.5px] top-1"></div>
    {!isLast && <div className="block w-px h-full bg-accent absolute left-3 top-0"></div>}
    <h3 className="font-medium text-sm text-primary">{item.degree || item.role}</h3>
    <p className="text-xs text-muted-foreground">{item.institution || item.company}</p>
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
      <Calendar className="w-3 h-3" />
      <span>{item.period}</span>
    </div>
  </motion.div>
);

const containerVariants = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const MobileQualification = () => (
  <div className="p-3 text-foreground bg-background">
    <h2 className="text-xl font-headline font-bold text-primary text-center mb-4">Qualification</h2>
    <h3 className="flex items-center justify-center gap-2 text-base font-semibold text-primary mb-3"><GraduationCap className="w-5 h-5" /> Education</h3>
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-4 mb-6">
      {education.map((item, index) => (
        <TimelineItem key={index} item={item} isLast={index === education.length - 1} />
      ))}
    </motion.div>
    <h3 className="flex items-center justify-center gap-2 text-base font-semibold text-primary mb-3"><Briefcase className="w-5 h-5" /> Work</h3>
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-4">
      {work.map((item, index) => (
        <TimelineItem key={index} item={item} isLast={index === work.length - 1} />
      ))}
    </motion.div>
  </div>
);


// const projects = [
//   { id: 1, title: 'Modern Website', description: 'Adaptable to all devices.', imageId: 'portfolio-1', link: '#' },
//   { id: 2, title: 'Mobile App', description: 'A sleek mobile application.', imageId: 'portfolio-2', link: '#' },
//   { id: 3, title: 'Data Dashboard', description: 'Analytics dashboard.', imageId: 'portfolio-3', link: '#' },
// ];
// const MobilePortfolio = () => (
//   <div className="p-3 text-foreground bg-background">
//     <h2 className="text-xl font-headline font-bold text-primary text-center mb-4">Portfolio</h2>
//     <p className="text-muted-foreground text-center mb-4 text-sm">Most recent work</p>
//     <Carousel opts={{ align: 'start', loop: true }} className="w-full">
//       <CarouselContent>
//         {projects.map((project) => {
//           const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
//           return (
//             <CarouselItem key={project.id}>
//               <Card className="p-2">
//                 {projectImage && <Image src={projectImage.imageUrl} alt={project.title} width={600} height={400} className="rounded-md object-cover aspect-[3/2]" />}
//                 <h3 className="font-headline text-base font-bold text-primary mt-2">{project.title}</h3>
//                 <p className="text-muted-foreground text-xs">{project.description}</p>
//                 <Button variant="link" asChild className="p-0 justify-start h-auto text-accent text-xs">
//                   <a href={project.link}> Demo <ArrowRight className="ml-1 h-3 w-3" /> </a>
//                 </Button>
//               </Card>
//             </CarouselItem>
//           );
//         })}
//       </CarouselContent>
//     </Carousel>
//   </div>
// );


const mobileProjects = [
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

const MobilePortfolio = () => {
  const featuredProject = mobileProjects.find(p => p.isFeatured);
  const otherProjects = mobileProjects.filter(p => !p.isFeatured);

  return (
    <div className="p-3 text-foreground bg-background">
      {/* <div className="flex justify-between items-center mb-4"> */}
      {/* <h2 className="text-xl font-headline font-bold text-primary">Work</h2>
        <a href="#portfolio" className="text-xs font-semibold text-accent">View All</a> */}
      <h2 className="text-xl font-headline font-bold text-primary text-center mb-2">Portfolio</h2>
      <p className="text-muted-foreground text-center mb-4 text-sm">Most recent work</p>
      {/* </div> */}

      {featuredProject && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-3 bg-card mb-6">
            <div className="flex gap-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg ${featuredProject.logoBg}`}>
                {featuredProject.logoChar}
              </div>
              <div>
                <h3 className="font-headline font-bold text-primary">{featuredProject.title}</h3>
                <p className="text-xs text-muted-foreground">{featuredProject.description}</p>
                <div className="flex items-center gap-2 text-xs text-accent font-medium mt-2">
                  <Star className="w-3 h-3" />
                  <span>{featuredProject.highlight}</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      <h3 className="text-sm font-semibold text-primary mb-3">MORE WORK</h3>

      <motion.div
        className="space-y-3"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {otherProjects.map(project => (
          <motion.div
            key={project.title}
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
          >
            <Card className="p-3 bg-card">
              <a href="#portfolio" className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-md flex items-center justify-center text-primary-foreground font-bold text-base ${project.logoBg}`}>
                  {project.logoChar}
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-sm text-primary">{project.title}</h4>
                  <p className="text-xs text-muted-foreground">{project.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </a>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
};

const contactInfo = [
  { icon: Mail, title: 'Email', value: 'rahul@email.com' },
  { icon: Phone, title: 'Call Me', value: '+123 456 7890' },
  { icon: MapPin, title: 'Location', value: 'New Delhi, India' },
];

const socialLinksMobile = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Github', href: '#', icon: Github },
  { name: 'Dribbble', href: '#', icon: Dribbble },
];

const MobileFooter = () => (
  <div className="bg-secondary/50 p-3 text-center mt-6 rounded-lg">
    <h2 className="text-base font-headline font-bold text-primary">RAHUL</h2>
    <div className="mt-3 flex justify-center space-x-4">
      {socialLinksMobile.map((item) => (
        <a key={item.name} href={item.href} className="text-foreground/80 hover:text-accent">
          <item.icon className="h-4 w-4" aria-hidden="true" />
        </a>
      ))}
    </div>
    <p className="mt-3 text-[10px] leading-4 text-muted-foreground">
      &copy; {new Date().getFullYear()} Rahul. All rights reserved.
    </p>
  </div>
);

type MobileContactProps = {
  formValues: {
    name: string;
    email: string;
    project: string;
    message: string;
  };
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const MobileContact = ({ formValues, onFormChange }: MobileContactProps) => (
  <div className="p-3 text-foreground bg-background">
    <h2 className="text-xl font-headline font-bold text-primary text-center mb-4">Contact Me</h2>
    <Card className="p-3">
      <form action="#" className="space-y-3">
        <Input name="name" value={formValues.name} onChange={onFormChange} type="text" placeholder="Name" required className="h-9" />
        <Input name="email" value={formValues.email} onChange={onFormChange} type="email" placeholder="Email" required className="h-9" />
        {/* <Input name="project" value={formValues.project} onChange={onFormChange} type="text" placeholder="Project" required className="h-9"/> */}
        <Textarea name="message" value={formValues.message} onChange={onFormChange} rows={2} placeholder="Message" required />
        <Button type="submit" className="w-full" size="sm">Send Message <Send className="ml-2 h-4 w-4" /></Button>
      </form>
    </Card>
    <div className="mt-6 space-y-3">
      {contactInfo.map((info) => (
        <div key={info.title} className="flex items-center gap-3">
          <info.icon className="h-5 w-5 text-accent" />
          <div>
            <h3 className="font-semibold text-xs text-primary">{info.title}</h3>
            <p className="text-xs text-muted-foreground">{info.value}</p>
          </div>
        </div>
      ))}
    </div>
    <MobileFooter />
  </div>
);

const MobileContent = ({ activeSection, formValues, onFormChange }: { activeSection: string, formValues: any, onFormChange: any }) => {
  let content;
  switch (activeSection) {
    case 'home': content = <MobileHome />; break;
    case 'about': content = <MobileAbout />; break;
    // case 'services': content = <MobileServices />; break;
    // case 'qualification': content = <MobileQualification />; break;
    case 'portfolio': content = <MobilePortfolio />; break;
    case 'contact': content = <MobileContact formValues={formValues} onFormChange={onFormChange} />; break;
    default: content = <MobileHome />;
  }
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="min-h-full"
      >
        {content}
      </motion.div>
    </AnimatePresence>
  );
};


export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState('home');
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    qualification: useRef<HTMLDivElement>(null),
    portfolio: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntries = entries.filter((e) => e.isIntersecting);

        if (intersectingEntries.length > 0) {
          const maxEntry = intersectingEntries.reduce((prev, current) =>
            prev.intersectionRatio > current.intersectionRatio ? prev : current
          );
          if (maxEntry) {
            setActiveSection(maxEntry.target.id);
          }
        }
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    const currentRefs = Object.values(sectionRefs)
      .map((ref) => ref.current)
      .filter(Boolean);

    currentRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="bg-background">
      <Header activeSection={activeSection} />
      <div className="flex">
        <aside className="w-1/3 hidden lg:flex justify-center items-start sticky top-0 h-screen p-8 pt-24">
          <MobilePreview>
            <MobileContent activeSection={activeSection} formValues={formValues} onFormChange={handleFormChange} />
          </MobilePreview>
        </aside>
        <main className="w-full lg:w-2/3">
          <div id="home" ref={sectionRefs.home}>
            <HeroSection />
          </div>
          <div id="about" ref={sectionRefs.about}>
            <AboutSection />
          </div>
          {/* <div id="services" ref={sectionRefs.services}>
            <ServicesSection />
          </div>
          <div id="qualification" ref={sectionRefs.qualification}>
            <QualificationSection />
          </div> */}
          <div id="portfolio" ref={sectionRefs.portfolio}>
            <PortfolioSection />
          </div>
          {/* <ProjectCta /> */}
          <div id="contact" ref={sectionRefs.contact}>
            <ContactSection formValues={formValues} onFormChange={handleFormChange} />
          </div>
          {/* <Footer /> */}
        </main>

      </div>
      <ScrollUp />
    </div>
  );
}
