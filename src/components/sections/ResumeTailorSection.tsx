
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ResumeTailorForm from "@/components/resume-tailor/ResumeTailorForm";
import { getPortfolioContentAsString } from "@/lib/data";

export function ResumeTailorSection() {
  const portfolioContent = getPortfolioContentAsString();

  return (
    <div className="space-y-10">
      <header className="mb-4"> {/* Adjusted margin */}
        <h3 className="text-xl font-heading text-foreground flex items-center hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out"> {/* Changed h1 to h3 and classes */}
            <span role="img" aria-label="robot" className="mr-3 text-3xl">🤖</span> {/* Ensured emoji size */}
            AI Resume Tailor
        </h3>
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
