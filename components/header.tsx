import React from 'react';
import { Flame, Cpu } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#232833] bg-[#090a0d]/90 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#14181f] border border-[#2b3544] flex items-center justify-center text-[#C7F36B] shadow-[0_0_12px_rgba(199,243,107,0.15)] flex-shrink-0">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Laptop screen */}
              <rect x="3" y="4" width="18" height="12" rx="2" stroke="#8D97A8" />
              {/* Laptop base */}
              <line x1="2" y1="20" x2="22" y2="20" stroke="#8D97A8" />
              {/* Flame inside screen */}
              <path
                d="M12 7c0 0-2.5 2.5-2.5 4.5 0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5C14.5 9.5 12 7 12 7z"
                fill="#C7F36B"
                stroke="#C7F36B"
              />
            </svg>
          </div>
          <div className="flex items-center gap-1.5 font-mono">
            <span className="font-bold text-sm tracking-tight text-[#F4F6FA]">
              AI LAPTOP ROASTER
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1c222c] text-[#C7F36B] border border-[#2d3848] font-bold">
              v1.0
            </span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs text-[#8D97A8] bg-[#12151b] border border-[#232833] px-2.5 py-1 rounded-md">
            <Cpu className="w-3.5 h-3.5 text-[#C7F36B]" />
            <span className="hidden sm:inline">Gratis & Anonim</span>
            <span className="sm:hidden">Online</span>
          </span>
        </div>
      </div>
    </header>
  );
}
