
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // CardDescription removed as it's not used directly here
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Twitter, Linkedin, Github, Languages, Sun } from 'lucide-react';

import PageNavigation from '@/components/layout/PageNavigation';
import { HomeSection } from '@/components/sections/HomeSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { NotesSection } from '@/components/sections/NotesSection';
import { ResumeTailorSection } from '@/components/sections/ResumeTailorSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');

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
        return <HomeSection />; // Default to home section
    }
  };

  return (
    <div className="space-y-8"> {/* Adjusted overall spacing if needed */}
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-8 py-8 md:py-10">
        <div className="flex-shrink-0">
          <Image
            src="/me.png"
            alt="Fabio Tales Victorino"
            width={130}
            height={190}
            className="rounded-xl shadow-md border border-border object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 items-center md:items-start w-full max-w-md md:max-w-none">
          <div className="bg-card p-4 rounded-lg shadow-sm border border-border w-full">
            <div className="flex items-baseline gap-2">
              <h1 className="text-2xl font-heading text-primary leading-tight">Fabio</h1>
              <Badge className="bg-yellow-400 text-black hover:bg-yellow-500 px-2.5 py-1 text-xs font-semibold self-center">DevOps</Badge>
            </div>
            <h2 className="text-2xl font-heading text-primary leading-tight">Tales Victorino</h2>
          </div>
          <div className="bg-card p-3 rounded-lg shadow-sm border border-border flex gap-3 w-full justify-center md:justify-start">
            <Link href="https://twitter.com/fabiovictorino" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-foreground/70 hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com/in/fabiovictorino" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://github.com/fabiovictorino" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-foreground/70 hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Button variant="ghost" size="icon" aria-label="Translate" className="text-foreground/70 hover:text-primary h-7 w-7 p-0">
              <Languages className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Toggle Theme" className="text-foreground/70 hover:text-primary h-7 w-7 p-0">
              <Sun className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Page Navigation Menu */}
      <PageNavigation activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Dynamically Rendered Section */}
      <div className="mt-8"> {/* Added margin-top for spacing below navigation */}
        {renderSection()}
      </div>
      
      {/* "Explore More" section has been removed as per request */}
    </div>
  );
}
