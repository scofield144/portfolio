"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Briefcase, Code, BookOpen, BotMessageSquare, Mail, UserCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: UserCircle },
  { href: '/experience', label: 'Experience', icon: Briefcase },
  { href: '/projects', label: 'Projects', icon: Code },
  { href: '/notes', label: 'Notes', icon: BookOpen },
  { href: '/resume-tailor', label: 'Resume Tailor', icon: BotMessageSquare },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const NavLink = ({ href, label, icon: Icon }: typeof navItems[0] & { onClick?: () => void }) => (
    <Link href={href} passHref legacyBehavior>
      <a
        onClick={() => setIsMobileMenuOpen(false)}
        className={cn(
          "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
          pathname === href
            ? 'bg-primary/10 text-primary'
            : 'text-foreground/70 hover:text-primary hover:bg-primary/5',
          "md:text-base"
        )}
      >
        <Icon className="mr-2 h-5 w-5" />
        {label}
      </a>
    </Link>
  );
  
  if (!isMounted) {
    return (
      <header className="bg-card shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Fabio's Folio
          </Link>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <nav className="hidden md:flex space-x-1"></nav>
        </div>
      </header>
    );
  }


  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
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
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-card p-4">
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