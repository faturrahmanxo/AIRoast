import { NextRequest, NextResponse } from 'next/server';
import { RoastInputSchema } from '@/features/roast/schemas';
import { formatSpecsForPrompt } from '@/features/roast/normalize-input';
import { generateRoastFromAI } from '@/server/ai/provider-adapter';
import { checkRateLimit } from '@/server/rate-limit/limiter';

export async function POST(req: NextRequest) {
  const requestId = `req_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  try {
    // 1. Ekstrak IP klien untuk Rate Limiting
    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : (req.headers.get('x-real-ip') || '127.0.0.1');

    const rateLimit = checkRateLimit(clientIp);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            code: 'RATE_LIMIT_EXCEEDED',
            message: `Santai dulu ngab—batas kuota tercapai. Coba lagi dalam ${rateLimit.retryAfter || 60} detik!`,
            retryAfter: rateLimit.retryAfter,
          },
          requestId,
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimit.retryAfter || 60),
          },
        }
      );
    }

    // 2. Parse dan validasi body request
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            code: 'INVALID_JSON',
            message: 'Format request tidak valid.',
          },
          requestId,
        },
        { status: 400 }
      );
    }

    const validationResult = RoastInputSchema.safeParse(body);
    if (!validationResult.success) {
      const firstError = validationResult.error.issues[0]?.message || 'Input spesifikasi belum memenuhi syarat.';
      return NextResponse.json(
        {
          ok: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: firstError,
          },
          requestId,
        },
        { status: 400 }
      );
    }

    // 3. Normalisasi spesifikasi
    const specsText = formatSpecsForPrompt(validationResult.data);

    // 4. Proses generasi roasting lewat AI adapter
    const roastResult = await generateRoastFromAI(specsText);

    return NextResponse.json(
      {
        ok: true,
        result: roastResult,
        requestId,
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Remaining': String(rateLimit.remaining),
        },
      }
    );
  } catch (error: unknown) {
    console.error(`[${requestId}] Error processing roast request:`, error);
    return NextResponse.json(
      {
        ok: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Gagal memproses roasting. Silakan coba sesaat lagi.',
        },
        requestId,
      },
      { status: 500 }
    );
  }
}
