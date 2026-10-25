'use client';

import React from 'react';
import { RoastResult } from '@/features/roast/schemas';
import { RotateCcw } from 'lucide-react';

interface ResultCardProps {
  result: RoastResult;
  onRoastAgain: () => void;
}

export function ResultCard({ result, onRoastAgain }: ResultCardProps) {
  return (
    <div className="w-full bg-[#111317] border border-[#222630] rounded-xl p-6 sm:p-8 animate-fade-in">
      {/* Label Kategori */}
      <div className="text-[11px] font-mono tracking-wider text-[#C7F36B] uppercase mb-2">
        HASIL ROASTING
      </div>

      {/* Judul Vonis */}
      <h2 className="text-xl sm:text-2xl font-bold text-[#F4F6FA] tracking-tight mb-5">
        &ldquo;{result.title}&rdquo;
      </h2>

      {/* Teks Roasting Simple & Padat */}
      <div className="border-l-2 border-[#C7F36B] pl-4 py-1 mb-8">
        <p className="text-base sm:text-lg text-[#D6DAE2] leading-relaxed font-normal">
          {result.roast}
        </p>
      </div>

      {/* Simple Action: Uji Laptop Lain */}
      <div className="pt-2 border-t border-[#1c2028]">
        <button
          type="button"
          onClick={onRoastAgain}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-wide text-[#9ba3af] hover:text-[#C7F36B] transition-colors py-2 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>UJI LAPTOP LAIN</span>
        </button>
      </div>
    </div>
  );
}
