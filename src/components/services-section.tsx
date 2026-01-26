'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Code, LayoutTemplate, Palette, X } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Designer',
    details: [
      'I develop the user interface.',
      'Web page development.',
      'I create UX element interactions.',
      'I position your company brand.',
    ],
  },
  {
    icon: Code,
    title: 'Frontend Developer',
    details: [
      'I build responsive and fast websites.',
      'Cross-browser compatibility.',
      'Integration with backend APIs.',
      'Modern JavaScript frameworks.',
    ],
  },
  {
    icon: LayoutTemplate,
    title: 'Branding Designer',
    details: [
      'I create visually appealing brand identities.',
      'Logo and style guide design.',
      'Marketing material design.',
      'Consistent branding across platforms.',
    ],
  },
];

export default function ServicesSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const placeholder = (
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-headline font-bold tracking-tight text-primary sm:text-4xl">Services</h2>
            <p className="mt-2 text-lg leading-8 text-foreground/80">What I offer</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-background rounded-lg shadow-lg flex flex-col">
                <div className='w-10 h-10 bg-muted rounded-full mb-4 animate-pulse'/>
                <div className="h-6 w-3/4 bg-muted rounded mb-4 animate-pulse"/>
                <div className="h-8 w-1/2 bg-muted rounded mt-auto animate-pulse"/>
              </div>
            ))}
          </div>
        </div>
      </section>
    );

  if (!isClient) {
    return placeholder;
  }
  
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
          <h2 className="text-3xl font-headline font-bold tracking-tight text-primary sm:text-4xl">Services</h2>
          <p className="mt-2 text-lg leading-8 text-foreground/80">What I offer</p>
        </motion.div>

        <motion.div 
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.2
                    }
                }
            }}
        >
          {services.map((service, index) => {
             const itemVariants = {
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            };
            return (
            <Dialog key={index}>
              <motion.div 
                className="p-6 bg-card rounded-lg shadow-lg flex flex-col"
                variants={itemVariants}
              >
                <service.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-headline text-xl font-bold text-primary mb-4">{service.title}</h3>
                <DialogTrigger asChild>
                  <Button variant="link" className="p-0 justify-start h-auto text-accent mt-auto">
                    View More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
              </motion.div>

              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl text-primary flex items-center gap-4">
                     <service.icon className="w-8 h-8 text-accent" />
                     {service.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <ul className="space-y-4">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span className='text-muted-foreground'>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                 <DialogClose asChild>
                    <Button type="button" variant="ghost" size="icon" className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </Button>
                </DialogClose>
              </DialogContent>
            </Dialog>
          )})}
        </motion.div>
      </div>
    </section>
  );
}
