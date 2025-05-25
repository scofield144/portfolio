
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react'; // Keep for menu toggle if emojis look odd
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', emoji: '👤' }, // UserCircle
  { href: '/experience', label: 'Experience', emoji: '💼' }, // Briefcase
  { href: '/projects', label: 'Projects', emoji: '💻' }, // Code
  { href: '/notes', label: 'Notes', emoji: '📚' }, // BookOpen
  { href: '/resume-tailor', label: 'Resume Tailor', emoji: '🤖' }, // BotMessageSquare
  { href: '/contact', label: 'Contact', emoji: '✉️' }, // Mail
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const NavLink = ({ href, label, emoji }: typeof navItems[0] & { onClick?: () => void }) => (
    <Link href={href} passHref legacyBehavior>
      <a
        onClick={() => {
          if (onClick) onClick(); // Call original onClick if present (e.g., for closing mobile menu)
          // Potentially close menu here as well if not handled by parent
          // setIsMobileMenuOpen(false); // Uncomment if direct close needed
        }}
        className={cn(
          "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors font-montserrat", // Ensure heading font for nav items
          pathname === href
            ? 'bg-primary/10 text-primary'
            : 'text-foreground/70 hover:text-primary hover:bg-primary/5',
          "md:text-base"
        )}
      >
        <span role="img" aria-label={label} className="mr-2 text-xl">{emoji}</span>
        {label}
      </a>
    </Link>
  );
  
  if (!isMounted) { // Skeleton loader for header to prevent layout shift / hydration errors
    return (
      <header className="bg-card shadow-md sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary font-heading">
            Fabio's Folio
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
          <nav className="hidden md:flex space-x-1"></nav>
        </div>
      </header>
    );
  }


  return (
    <header className="bg-card shadow-md sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors font-heading">
          Fabio's Folio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full max-w-xs bg-card text-card-foreground p-4 border-l border-border"
            >
              <nav className="flex flex-col space-y-3 mt-6">
                {navItems.map((item) => (
                  <NavLink key={item.href} {...item} onClick={() => setIsMobileMenuOpen(false)} />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
