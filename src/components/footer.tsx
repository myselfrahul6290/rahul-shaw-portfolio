'use client';
import { socialLinks } from '@/lib/info';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Skills', href: '#skills' },
];



export default function Footer() {
  return (
    <motion.footer 
        className="bg-secondary"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-headline font-bold text-primary">RAHUL</h2>
          <nav className="mt-6 flex justify-center gap-x-6" aria-label="Footer">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-semibold leading-6 text-foreground hover:text-accent">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-foreground/80 hover:text-accent">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Rahul. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
