'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { Card } from './ui/card';

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-me');

const stats = [
  { value: '03+', label: 'Years experience' },
  { value: '15+', label: 'Completed projects' },
  { value: '02+', label: 'Companies worked' },
];


const skills = [
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

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* <h2 className="text-3xl font-headline font-bold tracking-tight text-primary sm:text-4xl">About Me <span className="h-px w-8 bg-muted-foreground"></span></h2> */}
          <h2 className="text-3xl font-headline font-bold tracking-tight text-primary flex items-center justify-center md:justify-start gap-2">About Me <span className="h-px w-20 bg-muted-foreground"></span></h2>
          {/* <p className="mt-2 text-lg leading-8 text-foreground/80">My introduction</p> */}
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-[2fr_0.5fr] gap-8 items-center'>
          <motion.div
            className="space-y-8 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.p
              className="text-md leading-8 text-foreground/80"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <span className="font-semibold">Software Engineer</span> with experience building scalable web and mobile applications using modern technologies.
              <br />
              My focus is on designing end-to-end systems that are clean, maintainable, and built to scale.
              I enjoy working across the stack—from crafting responsive user interfaces to developing reliable backend services—and turning complex ideas into simple, usable products.
              <br />
              I build software that performs well and grows with its users.
            </motion.p>

            {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-muted/50 p-4 rounded-lg"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.15 } }
                  }}
                >
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1 whitespace-nowrap">{stat.label}</p>
                </motion.div>
              ))}


            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.15 + 0.2 } }
                  }}
                >
                  <Card className="p-4 bg-muted/50 h-full">
                    <h3 className="font-headline text-md font-semibold text-accent mb-4">{skill.title}</h3>
                    <ul className="space-y-2">
                      {skill.list.map((item) => (
                        <li key={item} className="text-sm text-foreground/80">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.5 } } }}>
              <Button asChild size="lg">
                <a href="/resume.pdf" download>
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div> */}
            {/* Experience Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-headline font-bold text-primary mb-8 relative pb-2">
                  Experience
                  <span className="absolute bottom-0 left-0 h-0.5 w-12 bg-accent"></span>
                </h3>
              </motion.div>

              <div className="relative space-y-10">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="qualification-rounder"></div>
                    {index !== experiences.length - 1 && <div className="qualification-line"></div>}

                    <h4 className="font-bold text-lg text-foreground">{exp.role}</h4>
                    <p className="text-sm">
                      <span className="text-accent font-semibold">{exp.company}</span>
                      <span className="text-muted-foreground ml-2">• {exp.period}</span>
                    </p>
                    <p className="mt-2 text-foreground/80 text-sm">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          {/* <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={350}
                height={438}
                className="rounded-lg object-cover shadow-xl aspect-[4/5]"
              />
            )}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
