export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-primary">
      <span role="img" aria-label="hourglass" className="text-6xl animate-spin mb-4">⏳</span>
      <p className="text-xl font-semibold font-heading">Loading Fabio's Folio...</p>
      <p className="text-sm text-muted-foreground font-ubuntu">Please wait a moment.</p>
    </div>
  );
}
