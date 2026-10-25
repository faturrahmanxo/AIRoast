'use client';

import React, { useState, useMemo } from 'react';
import { LAPTOP_RECOMMENDATIONS, LaptopRecommendation } from '@/features/recommendations/laptop-data';
import { X, Laptop, Tag, Cpu, HardDrive, Monitor, MessageSquare, Search, Sliders, DollarSign, ArrowRight, RotateCcw } from 'lucide-react';

interface RecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectToAsk: (laptopName: string) => void;
}

export function RecommendationModal({ isOpen, onClose, onSelectToAsk }: RecommendationModalProps) {
  // Input Kebutuhan
  const [selectedUseCase, setSelectedUseCase] = useState<string>('semua');
  const [customNeed, setCustomNeed] = useState<string>('');

  // Input Budget
  const [budgetRange, setBudgetRange] = useState<number | null>(null);
  const [customBudgetInput, setCustomBudgetInput] = useState<string>('');

  // State apakah user sudah menekan tombol cari rekomendasi
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  if (!isOpen) return null;

  const useCaseOptions = [
    { id: 'semua', label: 'Semua Kebutuhan' },
    { id: 'kuliah', label: 'Kuliah & Skripsi' },
    { id: 'coding', label: 'Coding & Dev' },
    { id: 'desain', label: 'Desain & Editing' },
    { id: 'gaming', label: 'Gaming & 3D' },
  ];

  const budgetPresets = [
    { label: '< 5 Juta', value: 5000000 },
    { label: '< 8 Juta', value: 8000000 },
    { label: '< 12 Juta', value: 12000000 },
    { label: '< 15 Juta', value: 15500000 },
    { label: 'Bebas', value: 99999999 },
  ];

  const handleCustomBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/\D/g, '');
    setCustomBudgetInput(rawVal);
    if (rawVal) {
      setBudgetRange(parseInt(rawVal, 10));
    } else {
      setBudgetRange(null);
    }
  };

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setHasSearched(true);
  };

  const handleReset = () => {
    setSelectedUseCase('semua');
    setCustomNeed('');
    setBudgetRange(null);
    setCustomBudgetInput('');
    setHasSearched(false);
  };

  // Filter laptop berdasarkan input user
  const filteredLaptops: LaptopRecommendation[] = LAPTOP_RECOMMENDATIONS.filter((laptop) => {
    // 1. Budget filter
    if (budgetRange && budgetRange > 0 && budgetRange < 90000000) {
      if (laptop.priceNumeric > budgetRange) return false;
    }

    // 2. Use-case preset
    if (selectedUseCase && selectedUseCase !== 'semua') {
      if (!laptop.useCases.includes(selectedUseCase as any)) {
        return false;
      }
    }

    // 3. Custom text input
    if (customNeed.trim()) {
      const q = customNeed.toLowerCase().trim();
      const match =
        laptop.name.toLowerCase().includes(q) ||
        laptop.specs.cpu.toLowerCase().includes(q) ||
        laptop.specs.gpu.toLowerCase().includes(q) ||
        laptop.specs.ram.toLowerCase().includes(q) ||
        laptop.highlight.toLowerCase().includes(q) ||
        laptop.category.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#111317] border border-[#2b323f] rounded-xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header Modal */}
        <div className="p-4 border-b border-[#222630] flex items-center justify-between bg-[#161920]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#C7F36B]/15 border border-[#C7F36B]/40 flex items-center justify-center text-[#C7F36B]">
              <Laptop className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#F4F6FA] tracking-tight">
                Cari Rekomendasi Laptop Sesuai Budget
              </h3>
              <p className="text-[11px] text-[#8D97A8]">
                Masukkan kebutuhan & budgetmu untuk menampilkan opsi paling akurat
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

        {/* Form Input Kebutuhan & Budget */}
        <div className="p-4 border-b border-[#1f242e] bg-[#13161c] space-y-3.5">
          {/* Input 1: Kebutuhan Penggunaan */}
          <div>
            <label className="block text-xs font-mono uppercase text-[#A0AEC0] mb-1.5">
              1. Pengennya laptop untuk apa?
            </label>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {useCaseOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setSelectedUseCase(opt.id);
                  }}
                  className={`text-xs px-2.5 py-1 rounded-md font-mono transition-all cursor-pointer ${
                    selectedUseCase === opt.id
                      ? 'bg-[#C7F36B] text-[#0d0f13] font-bold shadow-sm'
                      : 'bg-[#1a1e27] text-[#8D97A8] hover:text-[#F4F6FA] border border-[#29303d]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <input
                type="text"
                value={customNeed}
                onChange={(e) => setCustomNeed(e.target.value)}
                placeholder="Atau ketik kebutuhan spesifik (contoh: Layar OLED, RTX, i7, ringan)..."
                className="w-full bg-[#181c24] border border-[#2b3342] rounded-lg px-3 py-1.5 text-xs text-[#F4F6FA] placeholder-[#657082] focus:border-[#C7F36B] focus:ring-1 focus:ring-[#C7F36B] transition-all"
              />
            </div>
          </div>

          {/* Input 2: Budget */}
          <div>
            <label className="block text-xs font-mono uppercase text-[#A0AEC0] mb-1.5">
              2. Berapa budget maksimalmu?
            </label>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {budgetPresets.map((preset) => {
                const isActive = budgetRange === preset.value;
                return (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => {
                      setBudgetRange(preset.value);
                      setCustomBudgetInput(preset.value < 90000000 ? preset.value.toLocaleString('id-ID') : '');
                    }}
                    className={`text-xs px-2.5 py-1 rounded-md font-mono transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#C7F36B] text-[#0d0f13] font-bold shadow-sm'
                        : 'bg-[#1a1e27] text-[#8D97A8] hover:text-[#F4F6FA] border border-[#29303d]'
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-2 text-xs font-mono text-[#8D97A8]">Rp</span>
                <input
                  type="text"
                  value={customBudgetInput}
                  onChange={handleCustomBudgetChange}
                  placeholder="Ketik angka budget kustom (misal: 7.500.000)"
                  className="w-full bg-[#181c24] border border-[#2b3342] rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#F4F6FA] placeholder-[#657082] focus:border-[#C7F36B] focus:ring-1 focus:ring-[#C7F36B] transition-all font-mono"
                />
              </div>

              <button
                type="button"
                onClick={handleSearch}
                className="inline-flex items-center gap-1.5 bg-[#C7F36B] hover:bg-[#b5e25a] text-[#0d0f13] font-bold text-xs py-2 px-4 rounded-lg transition-all cursor-pointer active:scale-98 shadow-sm flex-shrink-0"
              >
                <span>Cari Laptop</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Area: Hasil Rekomendasi */}
        <div className="p-4 overflow-y-auto space-y-3.5 flex-1 bg-[#101217]">
          {!hasSearched ? (
            <div className="py-10 text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-xl bg-[#161a22] border border-[#28303e] flex items-center justify-center text-[#C7F36B] mb-3">
                <Sliders className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-[#F4F6FA]">
                Tentukan Kebutuhan & Budgetmu di Atas
              </h4>
              <p className="text-xs text-[#8D97A8] max-w-sm mt-1 leading-relaxed">
                Pilih kebutuhan (kuliah, coding, desain, atau gaming) dan tetapkan budget maksimal untuk menampilkan pilihan laptop terbaik yang relevan.
              </p>
              <button
                type="button"
                onClick={() => handleSearch()}
                className="mt-4 text-xs font-mono text-[#C7F36B] hover:underline cursor-pointer"
              >
                Atau tampilkan semua rekomendasi laptop &rarr;
              </button>
            </div>
          ) : filteredLaptops.length === 0 ? (
            <div className="py-8 text-center flex flex-col items-center justify-center">
              <p className="text-sm font-semibold text-[#F4F6FA]">
                Belum ada laptop yang cocok dengan kriteria ini.
              </p>
              <p className="text-xs text-[#8D97A8] max-w-xs mt-1">
                Coba naikkan budget atau pilih opsi kebutuhan lainnya untuk melihat model yang sesuai.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-[#C7F36B] hover:underline cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Pencarian</span>
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between text-xs text-[#8D97A8] font-mono pb-1">
                <span>Ditemukan {filteredLaptops.length} laptop yang sesuai:</span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="hover:text-[#C7F36B] transition-colors cursor-pointer"
                >
                  Ubah Filter
                </button>
              </div>

              {filteredLaptops.map((laptop: LaptopRecommendation) => (
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
