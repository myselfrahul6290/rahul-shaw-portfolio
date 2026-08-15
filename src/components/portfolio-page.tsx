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
import { 
  Send, Briefcase, Download, Star, ChevronRight, 
  Home, User, FolderGit2, PhoneCall, Wifi, Battery, Signal 
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { contactInfo, experiences, mobileProjects, skills, socialLinks, stats } from '@/lib/info';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-profile');

const getProjectGradient = (index: number) => {
  const gradients = [
    'linear-gradient(135deg, #059669 0%, #0891b2 100%)',
    'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
    'linear-gradient(135deg, #9333ea 0%, #db2777 100%)',
  ];
  return gradients[index % gradients.length];
};

// Interactive Phone Mockup
const MobilePreview = ({ 
  children, 
  activeSection, 
  setActiveSection 
}: { 
  children: React.ReactNode; 
  activeSection: string; 
  setActiveSection: (sec: string) => void; 
}) => {
  const [time, setTime] = useState('09:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const mins = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'portfolio', label: 'Projects', icon: FolderGit2 },
    { id: 'contact', label: 'Contact', icon: PhoneCall },
  ];

  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[11px] rounded-[2.3rem] h-[650px] w-[300px] shadow-2xl flex flex-col justify-between overflow-hidden">
      {/* Speaker Notch */}
      <div className="w-[120px] h-[17px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-30 flex items-center justify-center gap-2">
        <div className="w-8 h-1 bg-gray-700 rounded-full"></div>
      </div>

      {/* Side Hardware Buttons */}
      <div className="h-[42px] w-[3px] bg-gray-800 absolute -left-[14px] top-[115px] rounded-l-lg"></div>
      <div className="h-[42px] w-[3px] bg-gray-800 absolute -left-[14px] top-[165px] rounded-l-lg"></div>
      <div className="h-[60px] w-[3px] bg-gray-800 absolute -right-[14px] top-[132px] rounded-r-lg"></div>

      {/* Screen Container */}
      <div className="rounded-[1.8rem] overflow-hidden w-full h-full bg-background flex flex-col pt-5">
        {/* Status Bar */}
        <div className="px-4 pt-1 pb-1.5 flex justify-between items-center text-[10px] font-semibold text-foreground/70 select-none z-20">
          <span>{time}</span>
          <div className="flex items-center gap-1.5">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <Battery className="w-3.5 h-3.5 text-foreground/80" />
          </div>
        </div>

        {/* Scrollable View Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide text-foreground">
          {children}
        </div>

        {/* Mockup Bottom Navigation Bar */}
        <div className="bg-card/90 border-t border-border/40 py-2 px-1 flex justify-around items-center z-20">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex flex-col items-center gap-0.5 px-1 py-1 rounded-lg transition-colors ${
                  isActive ? 'text-primary font-bold' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="text-[8px] tracking-tight">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const MobileHome = ({ onNavigate }: { onNavigate: (sec: string) => void }) => (
  <div className="p-4 text-center flex flex-col items-center justify-center min-h-full text-foreground bg-background">
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

    <h1 className="text-2xl font-bold font-headline text-primary">Hi, I'm Rahul</h1>
    <h2 className="text-md font-semibold text-muted-foreground mt-1">Software Engineer</h2>
    <p className="text-xs text-foreground/80 mt-2 px-1">
      Strong experience in full-stack development, delivering scalable and high-quality applications.
    </p>

    <div className="grid grid-cols-3 gap-2 w-full my-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-muted/50 p-2 rounded-lg text-center">
          <p className="text-lg font-bold text-primary">{stat.value}</p>
          <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{stat.label}</p>
        </div>
      ))}
    </div>

    <Button size="sm" className="mt-2 px-4 h-8 text-xs font-medium" onClick={() => onNavigate('contact')}>
      Contact Me <Send className="ml-1.5 h-3.5 w-3.5" />
    </Button>
  </div>
);

const MobileAbout = () => (
  <div className="p-3 text-foreground bg-background overflow-y-auto text-center space-y-4">
    <div>
      <h2 className="text-xl font-headline font-bold text-primary">About Me</h2>
      <p className="text-xs text-muted-foreground mb-2">My introduction</p>

      <p className="text-xs leading-5 text-foreground/80 px-1 mt-2 text-left">
        <span className="font-semibold text-primary">Software Engineer</span> with experience building scalable web and mobile applications using modern technologies.
      </p>
    </div>

    {/* Programming Languages & Tools Grid */}
    <div className="text-left pt-2 border-t border-border/40">
      <h3 className="text-xs font-bold text-primary mb-2.5 uppercase tracking-wider">
        Skills & Technologies
      </h3>
      
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill) => (
          <Card key={skill.title} className="p-2.5 bg-card border-border/40 shadow-xs">
            <h4 className="font-headline text-[11px] font-bold text-primary mb-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
              <span>{skill.title}</span>
            </h4>
            <ul className="space-y-0.5">
              {skill.list.map((item) => (
                <li key={item} className="text-[10px] text-muted-foreground truncate">
                  • {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>

    <Button size="sm" className="w-full h-8 text-xs" variant="outline">
      Download CV <Download className="ml-1.5 h-3 w-3" />
    </Button>
  </div>
);

const MobileExperience = () => (
  <div className="p-3 text-foreground bg-background overflow-y-auto">
    <h2 className="text-xl font-headline font-bold text-primary text-center mb-1">Experience</h2>
    <p className="text-muted-foreground text-center mb-4 text-xs">Work history & career</p>
    <div className="relative space-y-4 pl-1 text-left">
      {experiences.map((exp, index) => (
        <div key={index} className="relative pl-5">
          <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-primary"></div>
          {index !== experiences.length - 1 && (
            <div className="absolute left-[2.5px] top-[10px] h-[calc(100%_-_4px)] w-px bg-muted-foreground/30"></div>
          )}
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold text-xs text-primary">{exp.role}</h4>
              <p className="text-xs text-muted-foreground">{exp.company}</p>
            </div>
            <p className="text-[10px] text-muted-foreground shrink-0">{exp.period}</p>
          </div>
          <p className="text-[10px] text-foreground/80 mt-1 leading-relaxed">{exp.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const MobilePortfolio = () => {
  const featuredProject = mobileProjects.find(p => p.isFeatured);
  const otherProjects = mobileProjects.filter(p => !p.isFeatured);

  return (
    <div className="p-3 text-foreground bg-background">
      <h2 className="text-xl font-headline font-bold text-primary text-center mb-1">Projects</h2>
      <p className="text-muted-foreground text-center mb-4 text-xs">Most recent work</p>

      {featuredProject && (
        <Card className="p-3 bg-card border-border/50 mb-4 text-left">
          <div className="flex gap-3 items-center">
            <div 
              className="w-10 h-10 min-w-10 min-h-10 rounded-lg flex items-center justify-center text-white font-headline font-extrabold text-lg shrink-0 shadow-xs bg-primary"
              style={{ background: getProjectGradient(0) }}
            >
              <span>{featuredProject.logoChar}</span>
            </div>
            <div>
              <h3 className="font-headline font-bold text-sm text-primary">{featuredProject.title}</h3>
              <p className="text-xs text-muted-foreground">{featuredProject.description}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground font-medium mt-1">
                <Star className="w-3 h-3 text-primary" />
                <span>{featuredProject.highlight}</span>
              </div>
            </div>
          </div>
        </Card>
      )}

      <h3 className="text-xs font-semibold text-primary mb-3 text-left">MORE WORK</h3>

      <div className="space-y-2 text-left">
        {otherProjects.map((project, index) => (
          <Card key={project.title} className="p-3 bg-card border-border/40">
            <div className="flex items-center gap-3">
              <div 
                className="w-9 h-9 min-w-9 min-h-9 rounded-md flex items-center justify-center text-white font-headline font-extrabold text-base shrink-0 shadow-xs bg-primary"
                style={{ background: getProjectGradient(index + 1) }}
              >
                <span>{project.logoChar}</span>
              </div>
              <div className="flex-grow min-w-0">
                <h4 className="font-semibold text-xs text-primary">{project.title}</h4>
                <p className="text-xs text-muted-foreground truncate">{project.description}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const MobileFooter = () => (
  <div className="bg-secondary/50 p-3 text-center mt-6 rounded-lg">
    <h2 className="text-sm font-headline font-bold text-primary">RAHUL</h2>
    <div className="mt-2 flex justify-center space-x-4">
      {socialLinks.map((item) => (
        <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary">
          <item.icon className="h-4 w-4" aria-hidden="true" />
        </a>
      ))}
    </div>
    <p className="mt-2 text-[10px] leading-4 text-muted-foreground">
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
};

const MobileContact = ({ formValues, onFormChange }: MobileContactProps) => (
  <div className="p-3 text-foreground bg-background text-left">
    <h2 className="text-xl font-headline font-bold text-primary text-center mb-4">Contact Me</h2>
    <Card className="p-3 border-border/50">
      <form action="#" onSubmit={(e) => e.preventDefault()} className="space-y-3">
        <Input name="name" value={formValues.name} onChange={onFormChange} type="text" placeholder="Name" required className="h-9 text-xs" />
        <Input name="email" value={formValues.email} onChange={onFormChange} type="email" placeholder="Email" required className="h-9 text-xs" />
        <Textarea name="message" value={formValues.message} onChange={onFormChange} rows={2} placeholder="Message" required className="text-xs resize-none" />
        <Button type="submit" className="w-full text-xs" size="sm">Send Message <Send className="ml-2 h-4 w-4" /></Button>
      </form>
    </Card>
    <div className="mt-6 space-y-3">
      {contactInfo.map((info) => (
        <div key={info.title} className="flex items-center gap-3">
          <info.icon className="h-5 w-5 text-primary shrink-0" />
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

const MobileContent = ({ 
  activeSection, 
  formValues, 
  onFormChange,
  onNavigate 
}: { 
  activeSection: string; 
  formValues: any; 
  onFormChange: any;
  onNavigate: (sec: string) => void;
}) => {
  let content;
  switch (activeSection) {
    case 'home': content = <MobileHome onNavigate={onNavigate} />; break;
    case 'about': content = <MobileAbout />; break;
    case 'experience': content = <MobileExperience />; break;
    case 'portfolio': content = <MobilePortfolio />; break;
    case 'contact': content = <MobileContact formValues={formValues} onFormChange={onFormChange} />; break;
    default: content = <MobileHome onNavigate={onNavigate} />;
  }
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.2 }}
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
    experience: useRef<HTMLDivElement>(null),
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
          if (maxEntry && maxEntry.target.id) {
            setActiveSection(maxEntry.target.id);
          }
        }
      },
      {
        rootMargin: '-30% 0px -30% 0px',
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
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navDockItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'portfolio', label: 'Projects', icon: FolderGit2 },
    { id: 'contact', label: 'Contact', icon: PhoneCall },
  ];

  return (
    <div className="bg-background min-h-screen relative pb-16 lg:pb-0">
      <Header activeSection={activeSection} />

      <div className="flex">
        {/* Desktop Sticky Phone Mockup */}
        <aside className="w-1/3 hidden lg:flex justify-center items-start sticky top-0 h-screen p-8 pt-24 select-none">
          <MobilePreview activeSection={activeSection} setActiveSection={handleNavigate}>
            <MobileContent 
              activeSection={activeSection} 
              formValues={formValues} 
              onFormChange={handleFormChange}
              onNavigate={handleNavigate}
            />
          </MobilePreview>
        </aside>

        {/* Main Web Content */}
        <main className="w-full lg:w-2/3">
          <div id="home" ref={sectionRefs.home} className="scroll-mt-24">
            <HeroSection />
          </div>
          <div id="about" ref={sectionRefs.about} className="scroll-mt-24">
            <AboutSection />
          </div>
          <div id="portfolio" ref={sectionRefs.portfolio} className="scroll-mt-24">
            <PortfolioSection />
          </div>
          <div id="contact" ref={sectionRefs.contact} className="scroll-mt-24">
            <ContactSection formValues={formValues} onFormChange={handleFormChange} />
          </div>
        </main>
      </div>

      {/* Native App-Style Mobile Bottom Tab Bar (< lg) */}
      <nav 
        aria-label="Mobile App Bottom Tab Bar" 
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border/80 h-14 flex justify-around items-center px-1"
      >
        {navDockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
                isActive 
                  ? 'text-primary font-bold' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[9px] tracking-tight mt-0.5">{item.label}</span>
              {isActive && (
                <div className="w-1 h-1 bg-primary rounded-full mt-0.5"></div>
              )}
            </button>
          );
        })}
      </nav>

      <ScrollUp />
    </div>
  );
}
