'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '@/lib/info';



type ContactSectionProps = {
  formValues: {
    name: string;
    email: string;
    project: string;
    message: string;
  };
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export default function ContactSection({ formValues, onFormChange }: ContactSectionProps) {
  return (
    <motion.section
      className="py-16 sm:py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          {/* <h2 className="text-3xl font-headline font-bold tracking-tight text-primary sm:text-4xl">Contact Me</h2>
          <p className="mt-2 text-lg leading-8 text-foreground/80">Get in touch</p> */}
          <h2 className="text-3xl font-headline font-bold tracking-tight text-primary flex items-center justify-center md:justify-start gap-2">Contact Me <span className="h-px w-20 bg-muted-foreground"></span></h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            {contactInfo.map((info) => (
              <div key={info.title} className="flex items-center gap-4">
                <info.icon className="h-8 w-8 text-accent" />
                <div>
                  <h3 className="font-semibold text-primary">{info.title}</h3>
                  <p className="text-muted-foreground">
                    {info.href ? <a href={info.href} className="hover:text-accent">{info.value}</a> : info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Card className="order-1 lg:order-2">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Write me your project</CardTitle>
            </CardHeader>
            <CardContent>
              <form action="#" className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <Input id="name" name="name" type="text" placeholder="Name" required value={formValues.name} onChange={onFormChange} />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <Input id="email" name="email" type="email" placeholder="Email" required value={formValues.email} onChange={onFormChange} />
                </div>
                {/* <div>
                  <label htmlFor="project" className="sr-only">Project</label>
                  <Input id="project" name="project" type="text" placeholder="Project" required value={formValues.project} onChange={onFormChange}/>
                </div> */}
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <Textarea id="message" name="message" rows={4} placeholder="Message" required value={formValues.message} onChange={onFormChange} />
                </div>
                <div>
                  <Button type="submit" className="w-full sm:w-auto">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}
