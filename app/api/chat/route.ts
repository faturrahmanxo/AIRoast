import { NextRequest, NextResponse } from 'next/server';
import { ChatRequestSchema } from '@/features/chat/schemas';
import { sendChatMessage } from '@/server/ai/chat-adapter';
import { checkRateLimit } from '@/server/rate-limit/limiter';

export async function POST(req: NextRequest) {
  const requestId = `chat_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  try {
    // 1. Rate Limiting per IP
    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : (req.headers.get('x-real-ip') || '127.0.0.1');

    const rateLimit = checkRateLimit(clientIp);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            code: 'RATE_LIMIT_EXCEEDED',
            message: `Santai dulu ngab—batas chat sementara tercapai. Coba lagi dalam ${rateLimit.retryAfter || 60} detik!`,
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

    // 2. Parse & Validasi Request
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            code: 'INVALID_JSON',
            message: 'Format request chat tidak valid.',
          },
          requestId,
        },
        { status: 400 }
      );
    }

    const validation = ChatRequestSchema.safeParse(body);
    if (!validation.success) {
      const firstError = validation.error.issues[0]?.message || 'Pesan chat tidak valid.';
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

    // 3. Panggil Chat Adapter
    const reply = await sendChatMessage(validation.data.messages, validation.data.laptopSpecs);

    return NextResponse.json({
      ok: true,
      message: reply,
      requestId,
    });
  } catch (error: unknown) {
    console.error(`[${requestId}] Error in chat endpoint:`, error);
    return NextResponse.json(
      {
        ok: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Gagal memproses pesan. Silakan coba kembali.',
        },
        requestId,
      },
      { status: 500 }
    );
  }
}
