'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Send, Mouse, ArrowDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { socialLinks, stats } from '@/lib/info';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-profile');

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pt-20 pb-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Social Links Column (Desktop left sidebar only - hidden on mobile) */}
          <motion.div
            className="hidden md:flex md:col-span-1 justify-start order-3 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div className="flex flex-col gap-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-1"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Main Hero Grid */}
          <div className="md:col-span-11 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left order-1 md:order-2">
            
            {/* Text Content, Dynamic Mobile Stats & Contact Button */}
            <motion.div
              className="order-2 md:order-1 space-y-4 sm:space-y-5"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {/* Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-headline font-bold tracking-tight text-primary leading-tight">
                Hi, I'm Rahul
              </h1>

              {/* Subtitle */}
              <h2 className="text-sm sm:text-base md:text-lg font-semibold text-muted-foreground flex items-center justify-center md:justify-start gap-2.5">
                <span className="h-px w-6 sm:w-8 bg-muted-foreground/60"></span>
                <span>Software Engineer</span>
              </h2>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-sm md:text-base text-foreground/80 max-w-sm sm:max-w-md mx-auto md:mx-0 leading-relaxed font-normal">
                Strong experience in full-stack development, delivering scalable and high-quality applications.
              </p>

              {/* Dynamic Stats Card Grid for Mobile Responsive View (< md) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-sm sm:max-w-md mx-auto md:hidden bg-muted/40 p-2.5 sm:p-3 rounded-xl border border-border/40 shadow-xs">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-1 text-center">
                    <p className="text-base sm:text-lg font-bold text-primary">{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Contact Button */}
              <div className="pt-1">
                <Button asChild size="sm" className="w-auto px-5 h-9 text-xs font-medium">
                  <a href="#contact" className="flex items-center justify-center gap-1.5">
                    Contact Me <Send className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Profile Avatar */}
            <motion.div
              className="order-1 md:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    width={320}
                    height={320}
                    priority
                    className="w-full h-full object-cover rounded-full border-4 md:border-8 border-background shadow-md"
                  />
                )}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.a
          href="#about"
          className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
        >
          <Mouse className="w-5 h-5 animate-bounce" />
          <span className="font-semibold text-xs tracking-wider">Scroll down</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
}
