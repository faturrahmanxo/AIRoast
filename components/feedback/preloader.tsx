'use client';

import React, { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

export function Preloader() {
  const [mounted, setMounted] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Durasi preloader tepat 2 detik
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090a0c] transition-opacity duration-500 ease-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Monogram / Minimalist Logo mark */}
        <div className="w-10 h-10 rounded-lg bg-[#12141a] border border-[#232730] flex items-center justify-center text-[#ededed] mb-4">
          <Terminal className="w-5 h-5 text-[#C7F36B]" />
        </div>

        {/* Minimal Label */}
        <div className="text-[11px] font-mono tracking-widest text-[#717886] uppercase mb-4">
          SYSTEM_BOOT // 2.0s
        </div>

        {/* Hairline Progress Bar */}
        <div className="w-44 h-0.5 bg-[#171a21] rounded-full overflow-hidden relative">
          <div className="absolute inset-y-0 bg-[#C7F36B] rounded-full animate-progress-bar" />
        </div>
      </div>
    </div>
  );
}
