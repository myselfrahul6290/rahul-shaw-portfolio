'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Home, User, Briefcase, Image as ImageIcon, Send, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  // { name: 'Services', href: '#services', icon: Briefcase },
  { name: 'Portfolio', href: '#portfolio', icon: ImageIcon },
  { name: 'Contact', href: '#contact', icon: Send },
];

type HeaderProps = {
  activeSection: string;
};

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    setIsClient(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavContent = ({ isMobile = false, setOpen }: { isMobile?: boolean, setOpen: (open: boolean) => void }) => (
    <nav>
      <ul className={cn(
        "flex items-center gap-x-2",
        isMobile ? "flex-col items-start gap-y-4 pt-16 px-4 w-full" : "hidden md:flex"
      )}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Button
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start gap-x-4 font-semibold px-10 py-2 h-auto",
                activeSection === link.href.substring(1) ? 'text-accent bg-accent/10' : 'text-primary',
                isMobile && "text-lg"
              )}
              onClick={() => setOpen(false)}
            >
              <a href={link.href} className="flex items-center gap-x-4 w-full">
                <link.icon className="h-6 w-6" />
                <span>{link.name}</span>
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      (isScrolled) ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#home" className="text-xl font-headline font-bold text-primary">
          Rahul Shaw
        </a>
        <NavContent setOpen={setOpen} />
        <div className="md:hidden">
          {isClient ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[60vw] sm:max-w-sm bg-background p-0 border-l-0">
                <div className="flex h-full flex-col ">
                  <div className="absolute top-4 right-4">
                    <SheetClose asChild />
                  </div>
                  <NavContent isMobile setOpen={setOpen} />
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <Button variant="ghost" size="icon" disabled>
              <Menu className="h-6 w-6 text-primary" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
