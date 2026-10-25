import { z } from 'zod';

export const RoastInputSchema = z.object({
  mode: z.enum(['manual', 'paste']),
  // Fields untuk Mode Manual
  cpu: z.string().max(120).optional(),
  gpu: z.string().max(120).optional(),
  ram: z.string().max(60).optional(),
  storage: z.string().max(120).optional(),
  usage: z.string().max(200).optional(),
  // Field untuk Mode Paste
  pastedSpecs: z.string().max(2000).optional(),
}).refine((data) => {
  if (data.mode === 'manual') {
    return Boolean((data.cpu && data.cpu.trim().length > 0) || (data.ram && data.ram.trim().length > 0));
  }
  if (data.mode === 'paste') {
    return Boolean(data.pastedSpecs && data.pastedSpecs.trim().length >= 8);
  }
  return false;
}, {
  message: "Masukkan minimal info CPU atau RAM yang jelas agar roasting akurat!",
});

export type RoastInput = z.infer<typeof RoastInputSchema>;

export const RoastResultSchema = z.object({
  title: z.string().min(2).max(120),
  roast: z.string().min(15).max(800),
  strengths: z.array(z.string().max(200)).min(1).max(4),
  limitations: z.array(z.string().max(200)).min(1).max(4),
  usageFit: z.string().min(8).max(300),
  shareText: z.string().min(15).max(500),
});

export type RoastResult = z.infer<typeof RoastResultSchema>;

export type ApiResponse<T> = 
  | { ok: true; result: T; requestId: string }
  | { ok: false; error: { code: string; message: string; retryAfter?: number }; requestId: string };
