interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();

const WINDOW_MS = 5 * 60 * 1000; // 5 menit
const MAX_REQUESTS = 5; // 5 requests per window

/**
 * In-memory sliding window rate limiter per client IP.
 */
export function checkRateLimit(clientIp: string): { allowed: boolean; retryAfter?: number; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(clientIp) || { timestamps: [] };

  // Filter timestamps dalam jendela aktif
  const validTimestamps = record.timestamps.filter((ts) => now - ts < WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS) {
    const oldest = validTimestamps[0];
    const retryAfter = Math.ceil((oldest + WINDOW_MS - now) / 1000);
    return {
      allowed: false,
      retryAfter: Math.max(1, retryAfter),
      remaining: 0,
    };
  }

  validTimestamps.push(now);
  rateLimitMap.set(clientIp, { timestamps: validTimestamps });

  // Bersihkan record lama sesekali agar memory tidak bocor
  if (rateLimitMap.size > 2000) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (val.timestamps.every((t) => now - t >= WINDOW_MS)) {
        rateLimitMap.delete(key);
      }
    }
  }

  return {
    allowed: true,
    remaining: MAX_REQUESTS - validTimestamps.length,
  };
}
