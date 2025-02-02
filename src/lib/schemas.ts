import { z } from "zod";

export const productSubmissionSchema = z.object({
  productName: z.string().min(1, "Product name is required"),
  company: z.string().min(1, "Company name is required"),
  percentCanadian: z.number().min(1).max(100),
  notes: z.string().optional(),
  category: z.string().min(1, "Category is required"),
  searchAliases: z.string().optional(),
  proposedPopularity: z.number().min(1).max(100),
  submitterName: z.string().min(1, "Your name is required"),
  submitterEmail: z.string().email("Please enter a valid email address")
});

export type ProductSubmission = z.infer<typeof productSubmissionSchema>;

export const productRequestSchema = z.object({
  requesterName: z.string().min(1, "Your name is required"),
  requesterEmail: z.string().email("Please enter a valid email address"),
  productRequest: z.string().min(1, "Please describe the product you're looking for"),
  okToContact: z.boolean().default(false)
});

export type ProductRequest = z.infer<typeof productRequestSchema>;

export const feedbackSchema = z.object({
  email: z.string().email("Invalid email address"),
  feedback: z.string().min(1, "Feedback is required"),
})

export type FeedbackSchema = z.infer<typeof feedbackSchema> 