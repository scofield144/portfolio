
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projectData, type Project } from '@/lib/data';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 border border-border">
      {project.imageUrl && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill
            style={{objectFit:"cover"}}
            data-ai-hint={project.imageHint || "project image"}
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="pb-3">
        <div className="flex items-center">
           {project.emojiIcon && <span role="img" aria-label={project.name} className="mr-2 text-3xl text-accent">{project.emojiIcon}</span>}
          <CardTitle className="text-2xl font-heading text-primary hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">{project.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm leading-relaxed text-foreground/80 mb-4 font-ubuntu">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/30">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto pt-4 border-t border-border/50">
        <div className="flex space-x-2 w-full">
          {project.fontCodeUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1 border-primary/50 text-primary hover:bg-primary/10">
              <Link href={project.fontCodeUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Source Code
              </Link>
            </Button>
          )}
          {project.openProjectUrl && (
            <Button asChild variant="default" size="sm" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href={project.openProjectUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <div className="space-y-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-heading text-primary tracking-tight hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">My Projects</h1>
        <p className="text-lg text-muted-foreground mt-2 font-ubuntu">A showcase of my technical skills and creative endeavors.</p>
      </header>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
