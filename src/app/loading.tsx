import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-primary">
      <Loader2 className="h-16 w-16 animate-spin mb-4" />
      <p className="text-xl font-semibold">Loading Fabio's Folio...</p>
    </div>
  );
}