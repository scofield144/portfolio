import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { personalInfo, educationData, aboutData, EducationItem, AboutItem } from '@/lib/data';
import { UserCircle, Briefcase, Code, BookOpen, BotMessageSquare, Mail, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-br from-primary/10
       to-accent/10 rounded-lg shadow-sm">
        <div className="container mx-auto px-4">
          <Image 
            src="/profile-photo.jpeg" 
            alt="Fabio Tales Victorino" 
            width={150} 
            height={150}
            className="rounded-full mx-auto mb-6 border-4 
            border-card shadow-lg"
            data-ai-hint="profile photo"
          />
          <h1 className="text-5xl font-extrabold text-primary mb-3 tracking-tight">
            {personalInfo.name}
          </h1>
          <p className="text-2xl font-semibold text-accent mb-6">
            {personalInfo.title}
          </p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            {personalInfo.portfolioIntro}
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
              <Link href="/projects">
                <Code className="mr-2 h-5 w-5" /> View My Work
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 shadow-md transition-transform hover:scale-105">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" /> Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-primary flex items-center">
              <UserCircle className="mr-3 h-8 w-8 text-accent" />
              Know a Bit More About Me
            </CardTitle>
            <CardDescription>My journey, motivations, and aspirations in the world of technology.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <BookOpen className="mr-2 h-6 w-6 text-accent" />
                Formação e Influência Profissional
              </h3>
              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <Card key={index} className="bg-background/50 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        {edu.icon && <edu.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />}
                        <div>
                          <h4 className="font-semibold text-lg text-primary">{edu.institution}</h4>
                          <p className="text-muted-foreground">{edu.degree}</p>
                          <p className="text-sm text-muted-foreground">{edu.period}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator />

            {/* Other About Items */}
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {aboutData.map((item, index) => (
                <Card key={index} className="bg-background/50 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      {item.icon && <item.icon className="mr-2 h-6 w-6 text-accent" />}
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
          <h2 className="text-2xl font-semibold text-center mb-6 text-primary">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "My Experience", href: "/experience", icon: Briefcase, description:"Delve into my professional journey." },
              { title: "My Projects", href: "/projects", icon: Code, description:"See what I've built." },
              { title: "My Notes", href: "/notes", icon: BookOpen, description:"Read my thoughts and insights." },
              { title: "Resume Tailor", href: "/resume-tailor", icon: BotMessageSquare, description:"Customize my summary for your needs." },
            ].map(link => (
              <Link href={link.href} key={link.href} className="block group">
                <Card className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <CardHeader className="flex-row items-center space-x-3 pb-3">
                    <link.icon className="w-8 h-8 text-accent" />
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{link.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </CardContent>
                  <CardContent className="pt-0">
                     <Button variant="link" className="p-0 text-primary group-hover:text-accent">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
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