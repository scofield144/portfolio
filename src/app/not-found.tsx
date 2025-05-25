import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4">
      <span role="img" aria-label="shrug" className="text-7xl mb-6">🤷</span>
      <h1 className="text-5xl font-bold font-heading text-primary mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8 font-ubuntu">
        Oops! The page you're looking for doesn't seem to exist.
      </p>
      <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  );
}
