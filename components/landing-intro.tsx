import React from 'react';
import { ArrowRight, Terminal, Shield } from 'lucide-react';

interface LandingIntroProps {
  onStart: () => void;
}

export function LandingIntro({ onStart }: LandingIntroProps) {
  return (
    <div className="py-10 sm:py-14 text-center animate-fade-in flex flex-col items-center">
      {/* Minimal Tech Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#13161c] border border-[#222732] text-[#C7F36B] text-xs font-mono tracking-widest uppercase mb-6">
        <Terminal className="w-3.5 h-3.5" />
        <span>INTERACTIVE ROASTER AI</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F6FA] tracking-tight leading-tight max-w-xl mx-auto mb-4">
        Tanya & Uji Nasib <br />
        Laptopmu ke AI Roaster
      </h1>

      {/* Clean Subtitle */}
      <p className="text-xs sm:text-sm text-[#8D97A8] max-w-md mx-auto leading-relaxed mb-8">
        Bukan sekadar vonis sekali jalan. Diskusikan dan tanyakan performa laptopmu secara interaktif—dari bottleneck, game yang sanggup dimainkan, hingga kelayakan upgrade—secara objektif dan pedas.
      </p>

      {/* Primary Mulai Button */}
      <button
        type="button"
        onClick={onStart}
        className="inline-flex items-center gap-2 bg-[#C7F36B] hover:bg-[#b5e25a] text-[#0d0f13] font-semibold text-sm sm:text-base py-3 px-6 rounded-lg transition-all duration-150 shadow-sm cursor-pointer active:scale-[0.98]"
      >
        <span>Mulai Percakapan</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      {/* Feature Footnotes with Security Guardrail */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#6e7683] font-mono mt-12 pt-8 border-t border-[#1c2028] w-full max-w-md">
        <span>• DIALOG INTERAKTIF</span>
        <span className="flex items-center gap-1">
          <Shield className="w-3 h-3 text-[#C7F36B]" />
          GUARDRAIL HARDWARE
        </span>
        <span>• TANPA REGISTRASI</span>
      </div>
    </div>
  );
}
