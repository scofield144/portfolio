import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react'; // Keep brand icons

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 shadow-sm mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/fabiovictorino" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com/in/fabiovictorino" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="mailto:fabio.victorino@example.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
            <span role="img" aria-label="envelope" className="text-2xl">✉️</span>
          </Link>
        </div>
        <p className="text-sm font-ubuntu">
          &copy; {currentYear} Fabio Tales Victorino. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
