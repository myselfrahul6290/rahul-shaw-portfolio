'use client';

// import Image from 'next/image';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from '@/components/ui/carousel';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { ArrowRight } from 'lucide-react';
// import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Badge } from './ui/badge';

const projects = [
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

export default function PortfolioSection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/50 overflow-hidden">
      <div className="mx-auto max-w-76xl px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* <h2 className="text-3xl font-headline font-bold tracking-tight text-primary sm:text-4xl">Portfolio</h2> */}
          <h2 className="text-3xl font-headline font-bold tracking-tight text-primary flex items-center justify-center md:justify-start gap-2">Portfolio <span className="h-px w-20 bg-muted-foreground"></span></h2>
          {/* <p className="mt-2 text-lg leading-8 text-foreground/80">Most recent work</p> */}
        </motion.div>

        {/* <div className="mt-16">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => {
                const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
                return (
                  <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                     <motion.div 
                        className="p-1"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardContent className="flex flex-col gap-4 p-4">
                          {projectImage && (
                            <div className="overflow-hidden rounded-lg">
                            <Image
                              src={projectImage.imageUrl}
                              alt={project.title}
                              data-ai-hint={projectImage.imageHint}
                              width={600}
                              height={400}
                              className="rounded-lg object-cover aspect-[3/2] transition-transform duration-500 hover:scale-105"
                            />
                            </div>
                          )}
                          <h3 className="font-headline text-xl font-bold text-primary">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                          <Button variant="link" asChild className="p-0 justify-start h-auto text-accent">
                            <a href={project.link}>
                              Demo <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div> */}


        <div className="space-y-5 mt-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="rounded-xl p-0.5 shadow-lg">
                <div className="rounded-[10px] bg-card p-6 h-full w-full">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0 flex items-center sm:items-start">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl ${project.logoBg}`}>
                        {project.logoChar}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-headline font-bold text-primary mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="bg-muted/50 text-muted-foreground font-normal">{tag}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-accent font-medium">
                        <Star className="w-4 h-4" />
                        <span>{project.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
