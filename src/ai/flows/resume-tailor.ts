'use server';

/**
 * @fileOverview An AI agent that tailors a resume summary to a specific job description.
 *
 * - generateTailoredSummary - A function that generates a tailored summary of the user's experience.
 * - TailoredSummaryInput - The input type for the generateTailoredSummary function.
 * - TailoredSummaryOutput - The return type for the generateTailoredSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TailoredSummaryInputSchema = z.object({
  jobDescription: z
    .string()
    .describe('The job description to tailor the resume summary to.'),
  portfolioContent: z
    .string()
    .describe("The user's portfolio content, including experience, projects, and skills."),
});
export type TailoredSummaryInput = z.infer<typeof TailoredSummaryInputSchema>;

const TailoredSummaryOutputSchema = z.object({
  tailoredSummary: z
    .string()
    .describe('A tailored summary of the user experience for the job description.'),
});
export type TailoredSummaryOutput = z.infer<typeof TailoredSummaryOutputSchema>;

export async function generateTailoredSummary(input: TailoredSummaryInput): Promise<TailoredSummaryOutput> {
  return tailoredSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'tailoredSummaryPrompt',
  input: {schema: TailoredSummaryInputSchema},
  output: {schema: TailoredSummaryOutputSchema},
  prompt: `You are an expert resume writer. You will generate a tailored summary of the user's experience based on their portfolio content and the job description.

Job Description: {{{jobDescription}}}

Portfolio Content: {{{portfolioContent}}}

Tailored Summary: `,
});

const tailoredSummaryFlow = ai.defineFlow(
  {
    name: 'tailoredSummaryFlow',
    inputSchema: TailoredSummaryInputSchema,
    outputSchema: TailoredSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
