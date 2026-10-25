'use client';

import React, { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';

const FUNNY_QUOTES = [
  "Mengecek apakah kipas laptopmu berbunyi seperti helikopter militer...",
  "Menghitung tingkat penderitaan RAM saat membuka tab browser...",
  "Mencari sisa-sisa harapan di dalam storage mekanis...",
  "Menilai toleransi termal motherboard saat rendering tugas...",
  "Menyiapkan vonis yang paling menusuk harga diri hardware...",
  "Mengukur level kompromi antara anggaran dan tuntutan aplikasi...",
];

export function LoadingState() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % FUNNY_QUOTES.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 px-4 flex flex-col items-center text-center animate-fade-in">
      {/* Minimalist Loading Spinner / CPU */}
      <div className="relative mb-5">
        <div className="w-14 h-14 rounded-xl bg-[#161920] border border-[#2b323f] flex items-center justify-center text-[#C7F36B]">
          <Cpu className="w-7 h-7 animate-pulse" />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-[#F4F6FA] mb-2 tracking-tight">
        Menganalisis Spesifikasi Hardware...
      </h3>

      <p className="text-xs sm:text-sm text-[#8D97A8] max-w-md h-10 flex items-center justify-center font-normal transition-all duration-300">
        &ldquo;{FUNNY_QUOTES[quoteIndex]}&rdquo;
      </p>

      {/* Hairline Progress Bar */}
      <div className="w-56 h-1 bg-[#1a1e27] rounded-full overflow-hidden relative mt-4 border border-[#2b323f]">
        <div className="absolute inset-y-0 bg-[#C7F36B] rounded-full animate-progress-bar" />
      </div>
    </div>
  );
}
