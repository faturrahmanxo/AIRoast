'use client';

import React, { useState } from 'react';
import { X, Laptop, Send, Sparkles } from 'lucide-react';

interface RecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectToAsk: (promptText: string) => void;
}

export function RecommendationModal({ isOpen, onClose, onSelectToAsk }: RecommendationModalProps) {
  const [needInput, setNeedInput] = useState('');
  const [budgetInput, setBudgetInput] = useState('');

  if (!isOpen) return null;

  const quickNeeds = [
    'Kuliah & Tugas Harian',
    'Coding & Software Dev',
    'Desain Grafis & Edit Video',
    'Gaming Kompetitif & AAA',
    'Ringan & Baterai Tahan Lama',
  ];

  const quickBudgets = [
    '< 5 Juta',
    '5 - 8 Juta',
    '8 - 12 Juta',
    '12 - 16 Juta',
    '> 16 Juta (Sultan)',
  ];

  const isValid = Boolean(needInput.trim() || budgetInput.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    const needText = needInput.trim() || 'Penggunaan umum serbaguna';
    const budgetText = budgetInput.trim() || 'Fleksibel / Sesuai value for money terbaik';

    const prompt = `Tolong buatkan rekomendasi 2 sampai 3 pilihan laptop resmi di Indonesia yang paling cocok untuk kebutuhan: "${needText}" dengan budget sekitar: "${budgetText}". Sertakan rincian spesifikasi akurat (prosesor, RAM, SSD, kartu grafis, layar) dan estimasi harga pasar terkini dalam Rupiah secara ringkas dan padat!`;

    onSelectToAsk(prompt);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#111317] border border-[#2b323f] rounded-xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col">
        {/* Header Modal */}
        <div className="p-4 border-b border-[#222630] flex items-center justify-between bg-[#161920]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#C7F36B]/15 border border-[#C7F36B]/40 flex items-center justify-center text-[#C7F36B]">
              <Laptop className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#F4F6FA] tracking-tight">
                Form Rekomendasi Laptop
              </h3>
              <p className="text-[11px] text-[#8D97A8]">
                Kirim kebutuhan & budgetmu, AI akan membuatkan daftar rekomendasinya
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-[#8D97A8] hover:text-[#F4F6FA] p-1.5 rounded-lg hover:bg-[#222630] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-4 bg-[#111317]">
          {/* Field 1: Kebutuhan Laptop */}
          <div>
            <label className="block text-xs font-mono uppercase text-[#A0AEC0] mb-1.5">
              1. Kebutuhan Laptop (Pengennya seperti apa?)
            </label>
            <textarea
              rows={3}
              value={needInput}
              onChange={(e) => setNeedInput(e.target.value)}
              placeholder="Contoh: Butuh laptop buat koding web, buka banyak tab Chrome, skripsi, dan sesekali edit video atau main Valorant..."
              className="w-full bg-[#181c24] border border-[#2b3342] rounded-lg p-3 text-xs sm:text-sm text-[#F4F6FA] placeholder-[#657082] focus:border-[#C7F36B] focus:ring-1 focus:ring-[#C7F36B] transition-all resize-none leading-relaxed"
            />
            {/* Quick chips kebutuhan */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {quickNeeds.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setNeedInput((prev) => (prev ? `${prev}, ${item}` : item))}
                  className="text-[11px] px-2 py-0.5 rounded bg-[#181d27] text-[#8D97A8] hover:text-[#C7F36B] border border-[#262f3e] hover:border-[#384457] font-mono transition-colors cursor-pointer"
                >
                  + {item}
                </button>
              ))}
            </div>
          </div>

          {/* Field 2: Budget */}
          <div>
            <label className="block text-xs font-mono uppercase text-[#A0AEC0] mb-1.5">
              2. Budget Maksimal
            </label>
            <input
              type="text"
              value={budgetInput}
              onChange={(e) => setBudgetInput(e.target.value)}
              placeholder="Contoh: Rp 7.500.000 atau sekitar 8-10 Juta"
              className="w-full bg-[#181c24] border border-[#2b3342] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#F4F6FA] placeholder-[#657082] focus:border-[#C7F36B] focus:ring-1 focus:ring-[#C7F36B] transition-all font-mono"
            />
            {/* Quick chips budget */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {quickBudgets.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setBudgetInput(item)}
                  className="text-[11px] px-2 py-0.5 rounded bg-[#181d27] text-[#8D97A8] hover:text-[#C7F36B] border border-[#262f3e] hover:border-[#384457] font-mono transition-colors cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={!isValid}
              className="w-full bg-[#C7F36B] hover:bg-[#b5e25a] text-[#0d0f13] font-bold text-sm py-2.5 px-4 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed active:scale-98 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Kirim & Minta Rekomendasi AI</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
