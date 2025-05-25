
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { experienceData, type Experience } from '@/lib/data';
import { CalendarDays } from 'lucide-react';

function ExperienceItem({ item }: { item: Experience }) {
  return (
    <Card className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 border border-border">
      <CardHeader className="pb-3">
        {/* Container for Title and Period, stacks on mobile and aligns items */}
        <div className="flex flex-col items-start gap-y-1 gap-x-2 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-2xl font-heading text-primary flex items-center hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">
            {item.emojiIcon && <span role="img" aria-label={item.role} className="mr-3 text-3xl text-accent flex-shrink-0">{item.emojiIcon}</span>}
            {item.role} {/* This text will wrap if long */}
          </CardTitle>
          <div className="text-sm text-muted-foreground flex items-center"> {/* Removed whitespace-nowrap for better wrapping */}
            <CalendarDays className="mr-2 h-4 w-4" />
            {item.period}
          </div>
        </div>
        {/* Company description, indented. Added mt-2 for spacing after title/date block. */}
        <CardDescription className="text-lg text-foreground/80 ml-10 font-ubuntu mt-2">
          {item.company} {/* This text will wrap */}
        </CardDescription>
      </CardHeader>
      {/* Responsibilities, indented. Removed list styling. */}
      <CardContent className="ml-10"> {/* ml-10 for consistent indent with CardDescription */}
        <div className="space-y-2 text-foreground/90">
          {item.responsibilities.map((resp, index) => (
            <p key={index} className="text-sm leading-relaxed font-ubuntu">{resp}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function ExperienceSection() {
  return (
    <div className="space-y-10">
      <header className="mb-4"> {/* Adjusted margin */}
        <h3 className="text-xl font-heading text-foreground flex items-center hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out"> {/* Changed h1 to h3 and classes */}
          <span role="img" aria-label="briefcase" className="mr-3 text-3xl">💼</span> {/* Ensured emoji size */}
          Professional Journey
        </h3>
      </header>
      
      <div className="relative pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-primary/20">
        {experienceData.map((item) => (
          <div key={item.id} className="relative pl-8 mb-10 group">
            <div className="absolute left-[-2px] top-1 w-5 h-5 bg-background border-2 border-primary rounded-full z-10 group-hover:bg-accent transition-colors duration-300"></div>
            <ExperienceItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
