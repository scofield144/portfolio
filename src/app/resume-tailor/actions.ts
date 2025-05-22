"use server";

import { generateTailoredSummary, type TailoredSummaryInput, type TailoredSummaryOutput } from "@/ai/flows/resume-tailor";
import { z } from "zod";

const TailoredSummaryInputSchema = z.object({
  jobDescription: z.string(),
  portfolioContent: z.string(),
});

interface ActionResult {
  summary?: TailoredSummaryOutput;
  error?: string;
}

export async function tailorResumeAction(data: TailoredSummaryInput): Promise<ActionResult> {
  const validationResult = TailoredSummaryInputSchema.safeParse(data);
  if (!validationResult.success) {
    return { error: "Invalid input data." };
  }

  try {
    const summary = await generateTailoredSummary(validationResult.data);
    return { summary };
  } catch (e: any) {
    console.error("Error in tailorResumeAction:", e);
    return { error: e.message || "Failed to generate tailored summary." };
  }
}