import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';
import { Github, Linkedin } from 'lucide-react'; // Keep for brand icons
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-heading text-primary tracking-tight hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">Get In Touch</h1>
        <p className="text-lg text-muted-foreground mt-2 font-ubuntu">I'm always open to discussing new projects, creative ideas, or opportunities.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-lg border border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-heading text-primary flex items-center hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">
              <span role="img" aria-label="person" className="mr-3 text-3xl text-accent">👤</span>
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90 font-ubuntu">
            <div className="flex items-center">
              <span role="img" aria-label="map pin" className="mr-3 text-2xl text-accent">📍</span>
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center">
              <span role="img" aria-label="envelope" className="mr-3 text-2xl text-accent">✉️</span>
              <a href="mailto:fabio.victorino@example.com" className="hover:text-primary transition-colors">
                fabio.victorino@example.com
              </a>
            </div>
            
            <div className="pt-4">
              <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">Connect with me:</h3>
              <div className="flex space-x-4">
                <Button asChild variant="outline" size="icon" className="border-primary/50 text-primary hover:bg-primary/10">
                  <Link href="https://github.com/fabiovictorino" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon" className="border-primary/50 text-primary hover:bg-primary/10">
                  <Link href="https://linkedin.com/in/fabiovictorino" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                 <Button asChild variant="outline" size="icon" className="border-primary/50 text-primary hover:bg-primary/10">
                  <Link href="mailto:fabio.victorino@example.com" aria-label="Email">
                     <span role="img" aria-label="envelope" className="text-xl">✉️</span>
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-heading text-primary hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-foreground/80 font-ubuntu">
              {personalInfo.professionalSummary}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
