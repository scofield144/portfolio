import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { notesData, Note } from '@/lib/data';
import { ArrowRight, BookOpen } from 'lucide-react';

function NoteCard({ note }: { note: Note }) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-center">
          {note.icon && <note.icon className="mr-3 h-7 w-7 text-accent flex-shrink-0" />}
          <CardTitle className="text-xl font-semibold text-primary">{note.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm leading-relaxed text-foreground/80">{note.summary}</CardDescription>
      </CardContent>
      {note.readMoreLink && (
        <CardFooter className="mt-auto pt-4 border-t">
          <Button asChild variant="link" className="text-primary hover:text-accent p-0">
            <Link href={note.readMoreLink}>
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

export default function NotesPage() {
  return (
    <div className="space-y-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary tracking-tight flex items-center justify-center">
           <BookOpen className="mr-3 h-10 w-10" /> My Notes & Insights
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          A curated collection of my personal insights, tips, quick posts, and code snippets that I frequently use across my projects.
        </p>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {notesData.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}