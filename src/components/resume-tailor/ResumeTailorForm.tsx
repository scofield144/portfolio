"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label"; // Not used, FormLabel is used
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { tailorResumeAction } from "@/app/resume-tailor/actions";
// import { Loader2, Sparkles } from "lucide-react"; // Replaced with emojis

const formSchema = z.object({
  jobDescription: z.string().min(50, { message: "Job description must be at least 50 characters." }),
  portfolioContent: z.string().min(100, { message: "Portfolio content seems too short." }),
});

type FormValues = z.infer<typeof formSchema>;

interface ResumeTailorFormProps {
  initialPortfolioContent: string;
}

export default function ResumeTailorForm({ initialPortfolioContent }: ResumeTailorFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [tailoredSummary, setTailoredSummary] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobDescription: "",
      portfolioContent: initialPortfolioContent,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setTailoredSummary(null);
    try {
      const result = await tailorResumeAction(data);
      if (result.error) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        });
      } else if (result.summary) {
        setTailoredSummary(result.summary.tailoredSummary);
        toast({
          title: "Success!",
          description: "Tailored summary generated.",
          variant: "default",
          className: "bg-green-600 text-white" // Adjusted color for better visibility with new theme
        });
      }
    } catch (error) {
      console.error("Error tailoring resume:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="jobDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="jobDescription" className="text-lg font-medium font-heading">Job Description</FormLabel>
              <FormControl>
                <Textarea
                  id="jobDescription"
                  placeholder="Paste the job description here..."
                  rows={8}
                  className="border-input focus:border-primary focus:ring-primary font-ubuntu"
                  {...field}
                />
              </FormControl>
              <FormDescription className="font-ubuntu">
                Provide the full job description for the best results.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="portfolioContent"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="portfolioContent" className="text-lg font-medium font-heading">My Portfolio Content (Auto-filled)</FormLabel>
              <FormControl>
                <Textarea
                  id="portfolioContent"
                  rows={10}
                  className="border-input focus:border-primary focus:ring-primary bg-muted/50 font-ubuntu"
                  readOnly
                  {...field}
                />
              </FormControl>
              <FormDescription className="font-ubuntu">
                This is an aggregation of my skills, experiences, and projects.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading} size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105 font-heading">
          {isLoading ? (
            <>
              <span role="img" aria-label="hourglass" className="mr-2 text-2xl animate-spin">⏳</span>
              Generating...
            </>
          ) : (
            <>
              <span role="img" aria-label="sparkles" className="mr-2 text-2xl">✨</span>
              Tailor My Summary
            </>
          )}
        </Button>
      </form>

      {tailoredSummary && (
        <Card className="mt-10 shadow-lg bg-card border border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-heading text-primary flex items-center hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">
                <span role="img" aria-label="sparkles" className="mr-2 text-3xl text-accent">✨</span>
                Your Tailored Summary
            </CardTitle>
            <CardDescription className="font-ubuntu">Here's the AI-generated summary based on the job description you provided:</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none bg-background/70 p-4 rounded-md border border-border/50 text-foreground whitespace-pre-line font-ubuntu">
              {tailoredSummary}
            </div>
          </CardContent>
        </Card>
      )}
    </Form>
  );
}
