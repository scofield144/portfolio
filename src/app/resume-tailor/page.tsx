import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ResumeTailorForm from "@/components/resume-tailor/ResumeTailorForm";
import { getPortfolioContentAsString } from "@/lib/data";
import { BotMessageSquare } from "lucide-react";

export default function ResumeTailorPage() {
  const portfolioContent = getPortfolioContentAsString();

  return (
    <div className="space-y-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary tracking-tight flex items-center justify-center">
            <BotMessageSquare className="mr-3 h-10 w-10"/> AI Resume Tailor
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Paste a job description below to generate a tailored summary of my experience, powered by AI.
          My portfolio content is pre-filled for your convenience.
        </p>
      </header>

      <Card className="max-w-3xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-primary">Generate Your Tailored Summary</CardTitle>
          <CardDescription>
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