'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { projects } from '@/lib/info';

const getProjectGradient = (index: number) => {
  const gradients = [
    'linear-gradient(135deg, #059669 0%, #0891b2 100%)',
    'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
    'linear-gradient(135deg, #9333ea 0%, #db2777 100%)',
  ];
  return gradients[index % gradients.length];
};

export default function PortfolioSection() {
  return (
    <section className="py-10 sm:py-20 bg-muted/30 overflow-hidden border-y border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          className="text-left mb-5 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl font-headline font-bold tracking-tight text-primary flex items-center justify-start gap-2.5">
            <span>Projects</span>
            <span className="h-px w-16 sm:w-20 bg-muted-foreground/60"></span>
          </h2>
        </motion.div>

        {/* Projects Card List */}
        <div className="space-y-3 sm:space-y-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="rounded-xl bg-card border border-border/40 p-3.5 sm:p-5 shadow-xs hover:shadow-sm transition-all text-left">
                <div className="space-y-3">
                  
                  {/* Card Top Header: Inline Vibrant Logo Icon + Title + Highlight Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {/* High-contrast solid inline gradient logo box */}
                      <div 
                        className="w-10 h-10 min-w-10 min-h-10 sm:w-12 sm:h-12 sm:min-w-12 sm:min-h-12 rounded-xl flex items-center justify-center text-white font-headline font-extrabold text-lg sm:text-xl shrink-0 shadow-sm bg-primary"
                        style={{ background: getProjectGradient(index) }}
                      >
                        <span className="text-white select-none">{project.logoChar}</span>
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-headline font-bold text-primary tracking-tight truncate">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-muted-foreground bg-muted/60 px-2.5 py-0.5 rounded-full shrink-0">
                      <Star className="w-3 h-3 text-primary shrink-0" />
                      <span>{project.highlight}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {project.tags.map(tag => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="bg-muted/50 text-muted-foreground border border-border/30 text-[10px] sm:text-xs font-normal px-2 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ))}
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
