import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-[#1f242e] bg-[#0d0f13] mt-auto py-6">
      <div className="max-w-2xl mx-auto px-4 text-center flex flex-col items-center gap-2">
        <div className="flex items-center gap-1.5 text-xs text-[#717b8c]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C7F36B]" />
          <span>Untuk hiburan • Spesifikasi diproses instan tanpa disimpan di server</span>
        </div>
      </div>
    </footer>
  );
}
