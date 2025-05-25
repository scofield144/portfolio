import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { personalInfo, educationData, aboutData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Twitter, Linkedin, Github, Languages, Sun } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* New Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-8 py-10 md:py-12">
        {/* Left Side: Image Placeholder */}
        <div className="flex-shrink-0">
          <Image
            src="/me.jpeg" // Changed from placeholder URL
            alt="Fabio Tales Victorino" // Updated alt text
            width={120}
            height={160}
            className="rounded-xl shadow-md border border-border object-cover"
            // Removed data-ai-hint
          />
        </div>

        {/* Right Side: Name, Badge, Icons */}
        <div className="flex flex-col gap-4 items-center md:items-start w-full max-w-md md:max-w-none">
          {/* Name and Badge Container */}
          <div className="bg-card p-4 rounded-lg shadow-sm border border-border w-full">
            <div className="flex items-baseline gap-2">
              <h1 className="text-3xl font-heading text-primary leading-tight">Fabio</h1>
              <Badge className="bg-yellow-400 text-black hover:bg-yellow-500 px-2.5 py-1 text-xs font-semibold self-center">DevOps</Badge>
            </div>
            <h2 className="text-3xl font-heading text-primary leading-tight">Tales Victorino</h2>
          </div>

          {/* Icons Container */}
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
              {/* This would need theme context integration for actual toggling */}
              <Sun className="h-5 w-5" />
            </Button>
          </div>
          
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me">
        <Card className="shadow-lg border border-border">
          <CardHeader>
            <CardTitle className="text-3xl font-heading text-primary flex items-center hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">
              <span role="img" aria-label="person" className="mr-3 text-3xl">👤</span>
              Know a Bit More About Me
            </CardTitle>
            <CardDescription>My journey, motivations, and aspirations in the world of technology.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-heading text-foreground mb-4 flex items-center hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">
                <span role="img" aria-label="graduation cap" className="mr-2 text-3xl">🎓</span>
                Formação e Influência Profissional
              </h3>
              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <Card key={index} className="bg-background/50 hover:shadow-md transition-shadow border border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        {edu.emojiIcon && <span role="img" aria-label={edu.degree} className="text-3xl text-primary mt-1 flex-shrink-0">{edu.emojiIcon}</span>}
                        <div>
                          <h4 className="font-heading font-semibold text-lg text-primary">{edu.institution}</h4>
                          <p className="text-muted-foreground">{edu.degree}</p>
                          <p className="text-sm text-muted-foreground">{edu.period}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator className="bg-border" />

            {/* Other About Items */}
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
              {aboutData.map((item, index) => (
                <Card key={index} className="bg-background/50 hover:shadow-md transition-shadow border border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading flex items-center hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">
                      {item.emojiIcon && <span role="img" aria-label={item.title} className="mr-2 text-3xl text-accent">{item.emojiIcon}</span>}
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 text-sm leading-relaxed">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick Navigation Links */}
      <section className="py-8">
          <h2 className="text-2xl font-heading text-center mb-6 text-primary hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
            {[
              { title: "My Experience", href: "/experience", emoji: "💼", description:"Delve into my professional journey." },
              { title: "My Projects", href: "/projects", emoji: "💻", description:"See what I've built." },
              { title: "My Notes", href: "/notes", emoji: "📚", description:"Read my thoughts and insights." },
              { title: "Resume Tailor", href: "/resume-tailor", emoji: "🤖", description:"Customize my summary for your needs." },
            ].map(link => (
              <Link href={link.href} key={link.href} className="block group">
                <Card className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border border-border">
                  <CardHeader className="flex-row items-center space-x-3 pb-3">
                    <span role="img" aria-label={link.title} className="text-3xl text-accent">{link.emoji}</span>
                    <CardTitle className="text-xl font-heading text-primary group-hover:text-accent transition-colors hover:scale-105 motion-safe:duration-200 ease-in-out">{link.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </CardContent>
                  <CardContent className="pt-0">
                     <Button variant="link" className="p-0 text-primary group-hover:text-accent">
                      Learn More <span role="img" aria-label="arrow right" className="ml-1 text-lg">➡️</span>
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
      </section>
    </div>
  );
}
