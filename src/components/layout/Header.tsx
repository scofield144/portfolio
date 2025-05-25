
"use client";

import Link from 'next/link';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
// Sheet components are removed as mobile navigation will be handled differently or as part of PageNavigation

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Skeleton loader for header to prevent layout shift / hydration errors
  if (!isMounted) {
    return (
      <header className="bg-card shadow-md sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary font-heading">
          Fabio's Portfolio
          </div>
          {/* Placeholder for potential mobile trigger if needed for other header actions */}
        </div>
      </header>
    );
  }

  return (
    <header className="bg-card shadow-md sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors font-heading">
          Fabio's Portfolio
        </Link>
        {/* Desktop Navigation and Mobile Sheet Trigger are removed from here */}
      </div>
    </header>
  );
}
