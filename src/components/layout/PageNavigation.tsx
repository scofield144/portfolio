
"use client";

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useIsMobile } from '@/hooks/use-mobile'; // Assuming you have this hook

export type NavItemType = {
  id: string;
  label: string;
  emoji: string;
};

export const navItems: NavItemType[] = [
  { id: 'home', label: 'Home', emoji: '😎' },
  { id: 'experience', label: 'Experience', emoji: '💼' },
  { id: 'projects', label: 'Projects', emoji: '💻' },
  { id: 'notes', label: 'Notes', emoji: '📚' },
  { id: 'resume-tailor', label: 'Resume Tailor', emoji: '🤖' },
  { id: 'contact', label: 'Contact', emoji: '✉️' },
];

interface PageNavigationProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export default function PageNavigation({ activeSection, onNavClick }: PageNavigationProps) {
  const isMobile = useIsMobile();

  const NavButton = ({ item }: { item: NavItemType }) => (
    <Button
      variant="ghost"
      onClick={() => onNavClick(item.id)}
      className={cn(
        "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors font-montserrat",
        activeSection === item.id
          ? 'bg-primary/10 text-primary'
          : 'text-foreground/70 hover:text-primary hover:bg-primary/5',
        "md:text-base flex-shrink-0" // Ensure buttons don't shrink too much in flex container
      )}
    >
      <span role="img" aria-label={item.label} className="mr-2 text-xl">{item.emoji}</span>
      {item.label}
    </Button>
  );

  if (isMobile) {
    return (
      <ScrollArea className="w-full whitespace-nowrap rounded-md border my-6">
        <div className="flex w-max space-x-2 p-2">
          {navItems.map((item) => (
            <NavButton key={item.id} item={item} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    );
  }

  return (
    <nav className="flex justify-center space-x-2 md:space-x-4 my-6 py-3 bg-card border border-border rounded-lg shadow-sm overflow-x-auto">
      {navItems.map((item) => (
         <NavButton key={item.id} item={item} />
      ))}
    </nav>
  );
}
