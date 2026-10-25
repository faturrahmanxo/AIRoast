'use client';

import React, { useState } from 'react';
import { LAPTOP_RECOMMENDATIONS, LaptopRecommendation } from '@/features/recommendations/laptop-data';
import { X, Check, Laptop, Tag, Cpu, HardDrive, Monitor, MessageSquare } from 'lucide-react';

interface RecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectToAsk: (laptopName: string) => void;
}

export function RecommendationModal({ isOpen, onClose, onSelectToAsk }: RecommendationModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  if (!isOpen) return null;

  const categories = ['Semua', 'Budget Pelajar', 'Produktivitas & Desain', 'Gaming & Rendering'];

  const filtered = selectedCategory === 'Semua'
    ? LAPTOP_RECOMMENDATIONS
    : LAPTOP_RECOMMENDATIONS.filter((l) => l.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#111317] border border-[#2b323f] rounded-xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header Modal */}
        <div className="p-4 border-b border-[#222630] flex items-center justify-between bg-[#161920]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-[#C7F36B]/20 border border-[#C7F36B]/40 flex items-center justify-center text-[#C7F36B]">
              <Laptop className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#F4F6FA] tracking-tight">
                Rekomendasi Laptop Resmi Indonesia
              </h3>
              <p className="text-[11px] text-[#8D97A8]">
                Spesifikasi akurat & estimasi harga pasar terbaru
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

        {/* Category Filter Tabs */}
        <div className="px-4 py-2.5 border-b border-[#1c2028] bg-[#0d0f13] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-2.5 py-1 rounded-md font-mono whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#222835] text-[#C7F36B] border border-[#353C4A]'
                  : 'text-[#8D97A8] hover:text-[#F4F6FA]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Laptop List */}
        <div className="p-4 overflow-y-auto space-y-3.5 flex-1">
          {filtered.map((laptop: LaptopRecommendation) => (
            <div
              key={laptop.id}
              className="bg-[#15181f] border border-[#232833] rounded-lg p-3.5 hover:border-[#353c4a] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C7F36B] bg-[#1d241e] border border-[#C7F36B]/30 px-1.5 py-0.5 rounded">
                    {laptop.category}
                  </span>
                  <h4 className="text-sm font-bold text-[#F4F6FA] mt-1">
                    {laptop.name}
                  </h4>
                </div>

                <div className="text-right self-start sm:self-auto">
                  <span className="text-sm font-mono font-bold text-[#C7F36B]">
                    {laptop.priceFormatted}
                  </span>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#B3BBC9] my-2.5 bg-[#0f1115] p-2.5 rounded-md border border-[#1f242e]">
                <div className="flex items-center gap-1.5 truncate">
                  <Cpu className="w-3.5 h-3.5 text-[#8D97A8] flex-shrink-0" />
                  <span className="truncate">{laptop.specs.cpu}</span>
                </div>
                <div className="flex items-center gap-1.5 truncate">
                  <HardDrive className="w-3.5 h-3.5 text-[#8D97A8] flex-shrink-0" />
                  <span className="truncate">{laptop.specs.ram} • {laptop.specs.storage}</span>
                </div>
                <div className="flex items-center gap-1.5 truncate">
                  <Monitor className="w-3.5 h-3.5 text-[#8D97A8] flex-shrink-0" />
                  <span className="truncate">{laptop.specs.display}</span>
                </div>
                <div className="flex items-center gap-1.5 truncate">
                  <Tag className="w-3.5 h-3.5 text-[#8D97A8] flex-shrink-0" />
                  <span className="truncate">{laptop.specs.gpu}</span>
                </div>
              </div>

              <p className="text-[11px] text-[#8D97A8] leading-relaxed mb-3">
                {laptop.highlight}
              </p>

              <button
                type="button"
                onClick={() => {
                  onSelectToAsk(`Menurut lu gimana laptop ${laptop.name} (${laptop.priceFormatted}) dengan spek ${laptop.specs.cpu}, RAM ${laptop.specs.ram}, ${laptop.specs.gpu}? Worth it ga?`);
                  onClose();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-mono font-medium py-1.5 px-3 rounded bg-[#1e232d] hover:bg-[#282f3d] text-[#C7F36B] border border-[#2e3644] transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Tanyakan Laptop Ini ke AI</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
