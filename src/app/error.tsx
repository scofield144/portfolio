'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4">
      <span role="img" aria-label="warning" className="text-7xl text-destructive mb-6">⚠️</span>
      <h2 className="text-3xl font-bold font-heading text-destructive mb-4">Something went wrong!</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-md font-ubuntu">
        We encountered an unexpected issue. Please try again, or if the problem persists, contact support.
      </p>
      <pre className="text-xs bg-muted p-4 rounded-md mb-8 overflow-auto max-w-full font-mono">
        {error.message}
        {error.digest && ` (Digest: ${error.digest})`}
      </pre>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading"
      >
        Try again
      </Button>
    </div>
  );
}
