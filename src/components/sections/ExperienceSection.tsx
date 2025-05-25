
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { experienceData, type Experience } from '@/lib/data';
import { CalendarDays } from 'lucide-react';

function ExperienceItem({ item }: { item: Experience }) {
  return (
    <Card className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 border border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-heading text-primary flex items-center hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">
            {item.emojiIcon && <span role="img" aria-label={item.role} className="mr-3 text-3xl text-accent flex-shrink-0">{item.emojiIcon}</span>}
            {item.role}
          </CardTitle>
          <div className="text-sm text-muted-foreground flex items-center whitespace-nowrap">
            <CalendarDays className="mr-2 h-4 w-4" /> {/* Or replace with 📅 emoji if preferred */}
            {item.period}
          </div>
        </div>
        <CardDescription className="text-lg text-foreground/80 ml-10 font-ubuntu">{item.company}</CardDescription>
      </CardHeader>
      <CardContent className="ml-10">
        <ul className="list-disc list-outside space-y-2 pl-5 text-foreground/90">
          {item.responsibilities.map((resp, index) => (
            <li key={index} className="text-sm leading-relaxed font-ubuntu">{resp}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function ExperienceSection() {
  return (
    <div className="space-y-10">
      <header className="mb-12">
        <h1 className="text-4xl font-heading text-primary tracking-tight flex items-center hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">
          <span role="img" aria-label="briefcase" className="mr-3 text-4xl">💼</span>
          Professional Journey
        </h1>
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
