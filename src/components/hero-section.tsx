'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Send, Mouse, ArrowDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { socialLinks } from '@/lib/info';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-profile');

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            className="lg:col-span-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="flex lg:flex-col gap-6">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-primary/80 hover:text-accent transition-colors">
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-11 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
            <motion.div
              className="order-2 md:order-1 space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-6xl">
                Hi, I'm Rahul
              </h1>
              <h2 className="text-lg font-semibold text-muted-foreground flex items-center justify-center md:justify-start gap-2">
                <span className="h-px w-8 bg-muted-foreground"></span>
                Software Engineer
              </h2>
              <p className="text-base text-foreground/90">
                Strong experience in full-stack development, delivering scalable and high-quality applications.
              </p>
              <Button asChild size="lg">
                <a href="#contact">
                  Contact Me <Send className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="order-1 md:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <motion.div
                  className="absolute inset-0 bg-accent rounded-full"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    width={320}
                    height={320}
                    priority
                    className="relative w-full h-full object-cover rounded-full border-8 border-background shadow-lg"
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-primary/80 hover:text-accent transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
        >
          <Mouse className="w-6 h-6 animate-bounce" />
          <span className="font-semibold text-sm">Scroll down</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
}
