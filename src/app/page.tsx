
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Twitter, Linkedin, Github, Languages, Sun, Moon, X } from 'lucide-react'; // Added X here
import { useTheme } from 'next-themes';

import PageNavigation from '@/components/layout/PageNavigation';
import { HomeSection } from '@/components/sections/HomeSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { NotesSection } from '@/components/sections/NotesSection';
import { ResumeTailorSection } from '@/components/sections/ResumeTailorSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'notes':
        return <NotesSection />;
      case 'resume-tailor':
        return <ResumeTailorSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  if (!mounted) {
    // Render a basic skeleton or null to avoid hydration mismatch during initial load
    // This helps prevent the theme icon from flickering
    return (
      <div className="space-y-8">
        <section className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-8 py-4 md:py-6">
          <div className="flex-shrink-0">
            <div className="w-[120px] h-[160px] bg-muted rounded-xl shadow-md border border-border"></div>
          </div>
          <div className="flex flex-col gap-3 items-center md:items-start w-full max-w-sm md:max-w-none">
            <div className="bg-card p-3 rounded-lg shadow-sm border border-border w-full h-[50px]"></div>
            <div className="bg-card p-2.5 rounded-lg shadow-sm border border-border flex gap-2.5 w-full justify-center md:justify-start h-[40px]"></div>
          </div>
        </section>
        <nav className="flex justify-center space-x-2 md:space-x-4 my-6 py-3 bg-card border border-border rounded-lg shadow-sm h-[58px]"></nav>
        <div className="mt-8">
           {/* Placeholder for section content */}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-8 py-4 md:py-6">
        <div className="flex-shrink-0">
          <Image
            src="/me.jpeg"
            alt="Fabio Tales Victorino"
            width={120} 
            height={160} 
            className="rounded-xl shadow-md border border-border object-cover"
            priority
          />
        </div>
        <div className="flex flex-col gap-3 items-center md:items-start w-full max-w-sm md:max-w-none">
          <div className="bg-card p-3 rounded-lg shadow-sm border border-border w-full">
            <div className="flex items-baseline gap-2">
              <h1 className="text-xl font-heading text-primary leading-tight">Fabio</h1>
              <Badge className="bg-yellow-400 text-black hover:bg-yellow-500 px-2 py-0.5 text-xs font-semibold self-center">DevOps</Badge>
            </div>
            <h2 className="text-xl font-heading text-primary leading-tight">Tales Victorino</h2>
          </div>
          <div className="bg-card p-2.5 rounded-lg shadow-sm border border-border flex gap-2.5 w-full justify-center md:justify-start">
            <Link href="https://x.com/FbioVictorino1" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-foreground/70 hover:text-primary transition-colors p-1">
              <X className="h-4 w-4" />
            </Link>
            <Link href="https://linkedin.com/in/fabiovictorino" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-foreground/70 hover:text-primary transition-colors p-1">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="https://github.com/scofield144" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-foreground/70 hover:text-primary transition-colors p-1">
              <Github className="h-4 w-4" />
            </Link>
            <Button variant="ghost" size="icon" aria-label="Translate" className="text-foreground/70 hover:text-primary h-6 w-6 p-1">
              <Languages className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Toggle Theme" 
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="text-foreground/70 hover:text-primary h-6 w-6 p-1"
            >
              {resolvedTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </section>

      <PageNavigation activeSection={activeSection} onNavClick={handleNavClick} />

      <div className="mt-8">
        {renderSection()}
      </div>
    </div>
  );
}
