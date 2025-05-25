
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ResumeTailorForm from "@/components/resume-tailor/ResumeTailorForm";
import { getPortfolioContentAsString } from "@/lib/data";

export function ResumeTailorSection() {
  const portfolioContent = getPortfolioContentAsString();

  return (
    <div className="space-y-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-heading text-primary tracking-tight flex items-center justify-center hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">
            <span role="img" aria-label="robot" className="mr-3 text-4xl">🤖</span> AI Resume Tailor
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto font-ubuntu">
          Paste a job description below to generate a tailored summary of my experience, powered by AI.
          My portfolio content is pre-filled for your convenience.
        </p>
      </header>

      <Card className="max-w-3xl mx-auto shadow-xl border border-border">
        <CardHeader>
          <CardTitle className="text-2xl font-heading text-primary hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">Generate Your Tailored Summary</CardTitle>
          <CardDescription className="font-ubuntu">
            Let AI help you see how my skills align with specific job requirements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResumeTailorForm initialPortfolioContent={portfolioContent} />
        </CardContent>
      </Card>
    </div>
  );
}
