'use client';

import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { experiences, skills } from '@/lib/info';

export default function AboutSection() {
  return (
    <section className="py-10 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          className="text-left mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl font-headline font-bold tracking-tight text-primary flex items-center justify-start gap-2.5">
            <span>About Me</span>
            <span className="h-px w-16 sm:w-20 bg-muted-foreground/60"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_0.5fr] gap-8 items-start">
          <motion.div
            className="space-y-6 sm:space-y-8 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            {/* Bio Paragraph Card */}
            <motion.div
              className="bg-card/80 p-4 sm:p-6 rounded-2xl border border-border/40 shadow-xs space-y-3.5"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-foreground font-medium">
                <span className="font-bold text-primary">Software Engineer</span> with experience building scalable web and mobile applications using modern technologies.
              </p>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground">
                My focus is on designing end-to-end systems that are clean, maintainable, and built to scale. I enjoy working across the stack—from crafting responsive user interfaces to developing reliable backend services—and turning complex ideas into simple, usable products.
              </p>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-foreground/85 pt-2 border-t border-border/30">
                I build software that performs well and grows with its users.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                  }}
                >
                  <Card className="p-3 sm:p-4 bg-card h-full border-border/40 shadow-xs">
                    <h3 className="font-headline text-xs sm:text-sm font-bold text-primary mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                      <span>{skill.title}</span>
                    </h3>
                    <ul className="space-y-1">
                      {skill.list.map((item) => (
                        <li key={item} className="text-[11px] sm:text-xs text-muted-foreground">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Experience Section Anchor */}
            <div id="experience" className="pt-2 scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl sm:text-2xl font-headline font-bold text-primary mb-6 relative pb-2">
                  Experience
                  <span className="absolute bottom-0 left-0 h-0.5 w-10 bg-primary"></span>
                </h3>
              </motion.div>

              <div className="relative space-y-4 sm:space-y-6 pl-1">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-6 sm:pl-7 text-left"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {/* Timeline Marker */}
                    <div className="w-2.5 h-2.5 bg-primary rounded-full absolute left-0 top-3"></div>
                    {index !== experiences.length - 1 && (
                      <div className="w-px h-[calc(100%+1rem)] bg-border absolute left-[4.5px] top-5"></div>
                    )}

                    <div className="bg-card p-3.5 sm:p-4 rounded-xl border border-border/40 shadow-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h4 className="font-bold text-xs sm:text-sm text-primary">{exp.role}</h4>
                        <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground bg-muted/60 px-2 py-0.5 rounded w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs font-semibold text-primary/80 mb-1.5">{exp.company}</p>
                      <p className="text-[11px] sm:text-xs text-foreground/80 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
