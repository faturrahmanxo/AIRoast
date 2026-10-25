import React from 'react';

interface PasteFormProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function PasteForm({ value, onChange, disabled }: PasteFormProps) {
  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium tracking-wide text-[#9ba3af] uppercase">
          Tempel Spesifikasi Laptopmu <span className="text-[#FF8066]">*</span>
        </label>
        <span className="text-[11px] font-mono text-[#6e7683]">
          {value.length} / 2000
        </span>
      </div>

      <textarea
        disabled={disabled}
        rows={7}
        maxLength={2000}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Tulis atau tempel spesifikasi laptopmu di sini...\nContoh:\nAsus Zenbook 14 OLED, Intel Core Ultra 7 155H, RAM 32GB LPDDR5X, SSD 1TB NVMe, Intel Arc Graphics.\nDipakai buat coding, buka puluhan tab browser, dan edit video ringan.`}
        className="w-full bg-[#161920] border border-[#2b323f] rounded-lg p-3 text-sm text-[#F4F6FA] placeholder-[#646e7f] focus:border-[#C7F36B] focus:ring-1 focus:ring-[#C7F36B] transition-all resize-none disabled:opacity-50 font-sans leading-relaxed"
      />
    </div>
  );
}
