'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string;
  visible: boolean;
}

export function Toast({ message, visible }: ToastProps) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in pointer-events-none">
      <div className="flex items-center gap-2 bg-[#161920] text-[#F4F6FA] border border-[#2b323f] px-4 py-2 rounded-lg shadow-lg text-xs sm:text-sm font-medium">
        <CheckCircle2 className="w-4 h-4 text-[#C7F36B] flex-shrink-0" />
        <span>{message}</span>
      </div>
    </div>
  );
}
