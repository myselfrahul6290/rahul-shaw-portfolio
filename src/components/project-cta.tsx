'use client';

import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCta() {
  return (
    <motion.section 
        className="py-20 bg-primary text-primary-foreground"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">You have a new project?</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Contact me now and get a 30% discount on your new project.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
             <Button variant="secondary" size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <a href="#contact">
                    Contact Me <Send className="ml-2 h-4 w-4" />
                </a>
             </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
