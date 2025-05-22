import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { experienceData, Experience } from '@/lib/data';
import { Briefcase, CalendarDays } from 'lucide-react';

function ExperienceItem({ item }: { item: Experience }) {
  return (
    <Card className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-semibold text-primary flex items-center">
            {item.icon && <item.icon className="mr-3 h-7 w-7 text-accent flex-shrink-0" />}
            {item.role}
          </CardTitle>
          <div className="text-sm text-muted-foreground flex items-center whitespace-nowrap">
            <CalendarDays className="mr-2 h-4 w-4" />
            {item.period}
          </div>
        </div>
        <CardDescription className="text-lg text-foreground/80 ml-10">{item.company}</CardDescription>
      </CardHeader>
      <CardContent className="ml-10">
        <ul className="list-disc list-outside space-y-2 pl-5 text-foreground/90">
          {item.responsibilities.map((resp, index) => (
            <li key={index} className="text-sm leading-relaxed">{resp}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary tracking-tight">My Professional Journey</h1>
        <p className="text-lg text-muted-foreground mt-2">A timeline of my roles, responsibilities, and accomplishments.</p>
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