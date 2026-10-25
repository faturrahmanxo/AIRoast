import React from 'react';
import { SlidersHorizontal, FileText } from 'lucide-react';

interface ModeSelectorProps {
  mode: 'manual' | 'paste';
  onChange: (mode: 'manual' | 'paste') => void;
  disabled?: boolean;
}

export function ModeSelector({ mode, onChange, disabled }: ModeSelectorProps) {
  return (
    <div className="flex items-center p-1 bg-[#111318] rounded-lg border border-[#232833] w-full mb-5">
      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange('manual')}
        className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md font-medium text-xs sm:text-sm transition-all duration-150 cursor-pointer ${
          mode === 'manual'
            ? 'bg-[#1e232d] text-[#C7F36B] border border-[#2e3644] shadow-sm'
            : 'text-[#8D97A8] hover:text-[#F4F6FA]'
        } disabled:opacity-50`}
      >
        <SlidersHorizontal className="w-3.5 h-3.5" />
        <span>Isi Manual</span>
      </button>

      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange('paste')}
        className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md font-medium text-xs sm:text-sm transition-all duration-150 cursor-pointer ${
          mode === 'paste'
            ? 'bg-[#1e232d] text-[#C7F36B] border border-[#2e3644] shadow-sm'
            : 'text-[#8D97A8] hover:text-[#F4F6FA]'
        } disabled:opacity-50`}
      >
        <FileText className="w-3.5 h-3.5" />
        <span>Tempel Teks</span>
      </button>
    </div>
  );
}
