import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { personalInfo, educationData, aboutData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-card rounded-lg shadow-sm border border-border">
        <div className="container mx-auto px-4">
          <Image 
            src="/profile-photo.jpeg" 
            alt="Fabio Tales Victorino" 
            width={150} 
            height={150}
            className="rounded-full mx-auto mb-6 border-4 border-accent shadow-lg"
            data-ai-hint="profile photo"
          />
          <h1 className="text-5xl font-heading text-primary mb-3 tracking-tight hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">
            {personalInfo.name}
          </h1>
          <p className="text-2xl font-heading font-semibold text-accent mb-6">
            {personalInfo.title}
          </p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            {personalInfo.portfolioIntro}
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
              <Link href="/projects">
                <span role="img" aria-label="laptop" className="mr-2 text-2xl">💻</span> View My Work
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 shadow-md transition-transform hover:scale-105">
              <Link href="/contact">
                <span role="img" aria-label="envelope" className="mr-2 text-2xl">✉️</span> Get In Touch
              </Link>
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
