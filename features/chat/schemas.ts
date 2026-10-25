import { z } from 'zod';

export const ChatMessageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().min(1).max(2500),
});

export type ChatMessage = z.infer<typeof ChatMessageSchema>;

export const ChatRequestSchema = z.object({
  messages: z.array(ChatMessageSchema).min(1).max(40),
  laptopSpecs: z.string().max(2000).optional(),
});

export type ChatRequest = z.infer<typeof ChatRequestSchema>;

export interface ChatResponse {
  ok: boolean;
  message?: string;
  error?: {
    code: string;
    message: string;
    retryAfter?: number;
  };
  requestId: string;
}
