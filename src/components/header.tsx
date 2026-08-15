'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Home, User, Briefcase, FolderGit2, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { socialLinks } from '@/lib/info';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#portfolio', icon: FolderGit2 },
  { name: 'Contact', href: '#contact', icon: Send },
];

type HeaderProps = {
  activeSection: string;
};

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    setIsClient(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 shadow-xs backdrop-blur-md border-b border-border/50" : "bg-background/80 backdrop-blur-xs"
    )}>
      <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <a href="#home" className="text-lg sm:text-xl font-headline font-bold text-primary tracking-tight">
          Rahul Shaw
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-x-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-x-2 text-sm font-semibold px-3.5 py-2 rounded-lg transition-colors",
                  isActive ? 'text-primary bg-muted font-bold' : 'text-muted-foreground hover:text-primary'
                )}
              >
                <link.icon className="h-4 w-4" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Header Right Menu Trigger */}
        <div className="md:hidden flex items-center">
          {isClient ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  aria-label="Toggle Navigation Menu" 
                  className="h-9 w-9 rounded-lg border border-border/50 bg-card shadow-2xs"
                >
                  <Menu className="h-5 w-5 text-primary" />
                </Button>
              </SheetTrigger>

              {/* Mobile Drawer */}
              <SheetContent side="right" className="w-[80vw] sm:max-w-sm bg-background p-5 sm:p-6 flex flex-col justify-between border-l border-border/50">
                <div>
                  <div className="pb-5 border-b border-border/40 text-left">
                    <h3 className="font-headline font-bold text-base text-primary">Rahul Shaw</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Software Engineer</p>
                  </div>

                  <nav className="mt-6">
                    <ul className="space-y-1.5 text-left">
                      {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                          <li key={link.name}>
                            <SheetClose asChild>
                              <a
                                href={link.href}
                                className={cn(
                                  "flex items-center gap-x-3 font-semibold text-xs sm:text-sm px-3.5 py-2.5 rounded-lg transition-colors",
                                  isActive ? 'text-primary bg-muted font-bold' : 'text-muted-foreground hover:text-primary hover:bg-muted/40'
                                )}
                              >
                                <link.icon className="h-4 w-4" />
                                <span>{link.name}</span>
                              </a>
                            </SheetClose>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>

                {/* Social Footer inside Drawer */}
                <div className="pt-5 border-t border-border/40">
                  <div className="flex gap-4 justify-center">
                    {socialLinks.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary p-2 rounded-lg bg-card border border-border/40 transition-colors"
                        aria-label={item.name}
                      >
                        <item.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <Button variant="ghost" size="icon" disabled className="h-9 w-9">
              <Menu className="h-5 w-5 text-primary" />
            </Button>
          )}
        </div>

      </div>
    </header>
  );
}
