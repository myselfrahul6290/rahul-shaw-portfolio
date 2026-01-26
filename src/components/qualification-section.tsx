'use client';

import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Computer Science',
    institution: 'Delhi University',
    period: '2018 - 2022',
  },
  {
    degree: 'Web Design Master',
    institution: 'Online Institute',
    period: '2020 - 2021',
  },
];

const work = [
  {
    role: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
  },
  {
    role: 'Frontend Intern',
    company: 'Creative Agency',
    period: '2021 - 2022',
  },
];

const TimelineItem = ({ item, isLast, index }: { item: { degree?: string; role?: string; institution?: string; company?: string; period: string }; isLast: boolean, index: number }) => (
  <motion.div 
    className="relative pl-8"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
  >
    <div className="qualification-rounder"></div>
    {!isLast && <div className="qualification-line"></div>}
    <h3 className="font-semibold text-primary">{item.degree || item.role}</h3>
    <p className="text-sm text-muted-foreground">{item.institution || item.company}</p>
    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
      <Calendar className="w-3 h-3" />
      <span>{item.period}</span>
    </div>
  </motion.div>
);

export default function QualificationSection() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const placeholder = (
    <div className="w-full max-w-2xl">
      <div className="grid h-10 w-full grid-cols-2 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
        <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-background px-3 py-1.5 text-sm font-medium text-foreground shadow-sm">
          <GraduationCap className="h-5 w-5" /> Education
        </div>
        <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium">
          <Briefcase className="h-5 w-5" /> Work
        </div>
      </div>
      <div className="mt-8">
        <div className="space-y-8">
          {education.map((item, index) => (
            <div key={index} className="relative pl-8 h-16 bg-muted/50 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );

  const tabsComponent = (
    <Tabs defaultValue="education" className="w-full max-w-2xl">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="education" className="gap-2">
          <GraduationCap className="w-5 h-5" /> Education
        </TabsTrigger>
        <TabsTrigger value="work" className="gap-2">
          <Briefcase className="w-5 h-5" /> Work
        </TabsTrigger>
      </TabsList>
      <TabsContent value="education" className="mt-8">
        <div className="space-y-8">
          {education.map((item, index) => (
            <TimelineItem key={index} item={item} isLast={index === education.length - 1} index={index} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="work" className="mt-8">
        <div className="space-y-8">
          {work.map((item, index) => (
            <TimelineItem key={index} item={item} isLast={index === work.length - 1} index={index} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-headline font-bold tracking-tight text-primary sm:text-4xl">Qualification</h2>
          <p className="mt-2 text-lg leading-8 text-foreground/80">My personal journey</p>
        </motion.div>

        <div className="mt-12 flex justify-center">
          {isClient ? tabsComponent : placeholder}
        </div>
      </div>
    </section>
  );
}
