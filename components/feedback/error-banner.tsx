'use client';

import React, { useState, useEffect } from 'react';
import { AlertCircle, Clock, RefreshCw } from 'lucide-react';

interface ErrorBannerProps {
  code?: string;
  message: string;
  retryAfter?: number;
  onRetry?: () => void;
}

export function ErrorBanner({ code, message, retryAfter, onRetry }: ErrorBannerProps) {
  const [secondsLeft, setSecondsLeft] = useState<number | undefined>(retryAfter);

  useEffect(() => {
    if (!secondsLeft || secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev && prev > 1 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  const isRateLimit = code === 'RATE_LIMIT_EXCEEDED';

  return (
    <div
      role="alert"
      className={`p-3.5 rounded-lg border mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm ${
        isRateLimit
          ? 'bg-[#1b1916] border-[#FFD166]/40 text-[#FFD166]'
          : 'bg-[#1b1516] border-[#FF7A86]/40 text-[#FF7A86]'
      }`}
    >
      <div className="flex items-start gap-2.5">
        {isRateLimit ? (
          <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
        ) : (
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
        )}
        <div>
          <p className="font-medium text-[#F4F6FA]">{message}</p>
          {isRateLimit && secondsLeft !== undefined && secondsLeft > 0 && (
            <p className="text-xs text-[#8D97A8] mt-1 font-mono">
              Silakan coba lagi dalam <span className="text-[#FFD166]">{secondsLeft} detik</span>.
            </p>
          )}
        </div>
      </div>

      {onRetry && (!isRateLimit || secondsLeft === 0) && (
        <button
          type="button"
          onClick={onRetry}
          className="self-end sm:self-auto flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#2b323f] hover:bg-[#353c4a] text-[#F4F6FA] text-xs font-medium transition-colors"
        >
          <RefreshCw className="w-3 h-3" />
          Coba Lagi
        </button>
      )}
    </div>
  );
}
