'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send } from 'lucide-react';
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
      className="py-10 sm:py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-headline font-bold tracking-tight text-primary flex items-center justify-start gap-2.5">
            <span>Contact Me</span>
            <span className="h-px w-16 sm:w-20 bg-muted-foreground/60"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 items-start">
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 gap-3 order-2 lg:order-1 text-left">
            {contactInfo.map((info) => (
              <div 
                key={info.title} 
                className="bg-card p-3.5 sm:p-4 rounded-xl border border-border/40 flex items-center gap-3.5 shadow-xs"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-muted/60 flex items-center justify-center text-primary shrink-0">
                  <info.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-xs sm:text-sm text-primary">{info.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">
                    {info.href ? (
                      <a href={info.href} className="hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      info.value
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Form Card */}
          <Card className="order-1 lg:order-2 border-border/40 shadow-xs rounded-2xl">
            <CardHeader className="p-4 sm:p-6 pb-2 text-left">
              <CardTitle className="font-headline text-lg sm:text-xl font-bold text-primary">
                Write me your project
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-2 text-left">
              <form action="#" onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    placeholder="Name" 
                    required 
                    value={formValues.name} 
                    onChange={onFormChange}
                    className="h-10 text-xs sm:text-sm bg-background border-border/50 rounded-lg" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    required 
                    value={formValues.email} 
                    onChange={onFormChange}
                    className="h-10 text-xs sm:text-sm bg-background border-border/50 rounded-lg" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    placeholder="Message" 
                    required 
                    value={formValues.message} 
                    onChange={onFormChange}
                    className="text-xs sm:text-sm bg-background border-border/50 rounded-lg resize-none" 
                  />
                </div>
                <div>
                  <Button type="submit" size="sm" className="w-full sm:w-auto px-6 h-9 text-xs font-medium">
                    Send Message <Send className="ml-1.5 h-3.5 w-3.5" />
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
