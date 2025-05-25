import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { notesData, Note } from '@/lib/data';

function NoteCard({ note }: { note: Note }) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 border border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center">
          {note.emojiIcon && <span role="img" aria-label={note.title} className="mr-3 text-3xl text-accent flex-shrink-0">{note.emojiIcon}</span>}
          <CardTitle className="text-xl font-heading text-primary hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">{note.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm leading-relaxed text-foreground/80 font-ubuntu">{note.summary}</CardDescription>
      </CardContent>
      {note.readMoreLink && (
        <CardFooter className="mt-auto pt-4 border-t border-border/50">
          <Button asChild variant="link" className="text-primary hover:text-accent p-0">
            <Link href={note.readMoreLink}>
              Read More <span role="img" aria-label="arrow right" className="ml-2 text-lg">➡️</span>
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
        <h1 className="text-4xl font-heading text-primary tracking-tight flex items-center justify-center hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">
           <span role="img" aria-label="notebook" className="mr-3 text-4xl">📖</span> My Notes & Insights
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto font-ubuntu">
          A curated collection of my personal insights, tips, quick posts, and code snippets that I frequently use across my projects.
        </p>
      </header>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8"> {/* Adjusted grid layout */}
        {notesData.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}
