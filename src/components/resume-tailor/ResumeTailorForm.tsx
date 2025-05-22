"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { tailorResumeAction } from "@/app/resume-tailor/actions";
import { Loader2, Sparkles } from "lucide-react";

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
          className: "bg-green-500 text-white"
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
              <FormLabel htmlFor="jobDescription" className="text-lg font-medium">Job Description</FormLabel>
              <FormControl>
                <Textarea
                  id="jobDescription"
                  placeholder="Paste the job description here..."
                  rows={8}
                  className="border-input focus:border-primary focus:ring-primary"
                  {...field}
                />
              </FormControl>
              <FormDescription>
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
              <FormLabel htmlFor="portfolioContent" className="text-lg font-medium">My Portfolio Content (Auto-filled)</FormLabel>
              <FormControl>
                <Textarea
                  id="portfolioContent"
                  rows={10}
                  className="border-input focus:border-primary focus:ring-primary bg-muted/50"
                  readOnly // Or disable if you want it editable but pre-filled
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is an aggregation of my skills, experiences, and projects.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading} size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              Tailor My Summary
            </>
          )}
        </Button>
      </form>

      {tailoredSummary && (
        <Card className="mt-10 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary flex items-center">
                <Sparkles className="mr-2 h-6 w-6 text-accent"/>
                Your Tailored Summary
            </CardTitle>
            <CardDescription>Here's the AI-generated summary based on the job description you provided:</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none bg-background/70 p-4 rounded-md border border-border text-foreground whitespace-pre-line">
              {tailoredSummary}
            </div>
          </CardContent>
        </Card>
      )}
    </Form>
  );
}