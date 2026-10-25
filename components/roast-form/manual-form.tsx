import React from 'react';

interface ManualFormData {
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  usage: string;
}

interface ManualFormProps {
  data: ManualFormData;
  onChange: (field: keyof ManualFormData, value: string) => void;
  disabled?: boolean;
}

export function ManualForm({ data, onChange, disabled }: ManualFormProps) {
  return (
    <div className="space-y-4">
      {/* CPU */}
      <div>
        <label className="block text-xs font-medium tracking-wide text-[#9ba3af] uppercase mb-1.5">
          Prosesor (CPU) <span className="text-[#FF8066]">*</span>
        </label>
        <input
          type="text"
          disabled={disabled}
          value={data.cpu}
          onChange={(e) => onChange('cpu', e.target.value)}
          placeholder="Contoh: Intel Core i3-1115G4 / Ryzen 5 5600H / Celeron N4020"
          className="w-full bg-[#161920] border border-[#2b323f] rounded-lg px-3.5 py-2.5 text-sm text-[#F4F6FA] placeholder-[#646e7f] focus:border-[#C7F36B] focus:ring-1 focus:ring-[#C7F36B] transition-all disabled:opacity-50"
        />
      </div>

      {/* Grid 2 kolom: RAM & Storage */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium tracking-wide text-[#9ba3af] uppercase mb-1.5">
            Kapasitas RAM <span className="text-[#FF8066]">*</span>
          </label>
          <input
            type="text"
            disabled={disabled}
            value={data.ram}
            onChange={(e) => onChange('ram', e.target.value)}
            placeholder="Contoh: 4 GB / 8 GB DDR4 / 16 GB"
            className="w-full bg-[#161920] border border-[#2b323f] rounded-lg px-3.5 py-2.5 text-sm text-[#F4F6FA] placeholder-[#646e7f] focus:border-[#C7F36B] focus:ring-1 focus:ring-[#C7F36B] transition-all disabled:opacity-50"
          />
        </div>

        <div>
          <label className="block text-xs font-medium tracking-wide text-[#9ba3af] uppercase mb-1.5">
            Penyimpanan (Storage)
          </label>
          <input
            type="text"
            disabled={disabled}
            value={data.storage}
            onChange={(e) => onChange('storage', e.target.value)}
            placeholder="Contoh: 256 GB SSD NVMe / 1 TB HDD 5400rpm"
            className="w-full bg-[#161920] border border-[#2b323f] rounded-lg px-3.5 py-2.5 text-sm text-[#F4F6FA] placeholder-[#646e7f] focus:border-[#C7F36B] focus:ring-1 focus:ring-[#C7F36B] transition-all disabled:opacity-50"
          />
        </div>
      </div>

      {/* GPU */}
      <div>
        <label className="block text-xs font-medium tracking-wide text-[#9ba3af] uppercase mb-1.5">
          Kartu Grafis (GPU) <span className="text-xs lowercase text-[#6e7683] font-normal">(opsional)</span>
        </label>
        <input
          type="text"
          disabled={disabled}
          value={data.gpu}
          onChange={(e) => onChange('gpu', e.target.value)}
          placeholder="Contoh: Integrated Intel UHD / RTX 3050 Laptop / Radeon 680M"
          className="w-full bg-[#161920] border border-[#2b323f] rounded-lg px-3.5 py-2.5 text-sm text-[#F4F6FA] placeholder-[#646e7f] focus:border-[#C7F36B] focus:ring-1 focus:ring-[#C7F36B] transition-all disabled:opacity-50"
        />
      </div>

      {/* Use Case */}
      <div>
        <label className="block text-xs font-medium tracking-wide text-[#9ba3af] uppercase mb-1.5">
          Penggunaan Utama
        </label>
        <input
          type="text"
          disabled={disabled}
          value={data.usage}
          onChange={(e) => onChange('usage', e.target.value)}
          placeholder="Contoh: Ngetik skripsi, buka 40 tab Chrome, render Premiere, main Valorant"
          className="w-full bg-[#161920] border border-[#2b323f] rounded-lg px-3.5 py-2.5 text-sm text-[#F4F6FA] placeholder-[#646e7f] focus:border-[#C7F36B] focus:ring-1 focus:ring-[#C7F36B] transition-all disabled:opacity-50"
        />
      </div>
    </div>
  );
}
