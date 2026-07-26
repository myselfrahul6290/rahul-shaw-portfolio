'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { projects } from '@/lib/info';



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
