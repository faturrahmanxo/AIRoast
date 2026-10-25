'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Preloader } from '@/components/feedback/preloader';
import { LandingIntro } from '@/components/landing-intro';
import { ModeSelector } from '@/components/roast-form/mode-selector';
import { ManualForm } from '@/components/roast-form/manual-form';
import { PasteForm } from '@/components/roast-form/paste-form';
import { ChatBox } from '@/components/chat/chat-box';
import { RecommendationModal } from '@/components/chat/recommendation-modal';
import { formatSpecsForPrompt } from '@/features/roast/normalize-input';
import { ArrowLeft, Send } from 'lucide-react';

export default function HomePage() {
  // Navigation states: 'landing' | 'specs' | 'chat'
  const [view, setView] = useState<'landing' | 'specs' | 'chat'>('landing');

  const [mode, setMode] = useState<'manual' | 'paste'>('manual');
  const [manualData, setManualData] = useState({
    cpu: '',
    gpu: '',
    ram: '',
    storage: '',
    usage: '',
  });
  const [pastedSpecs, setPastedSpecs] = useState('');
  const [activeSpecsText, setActiveSpecsText] = useState('');

  const handleManualChange = (field: keyof typeof manualData, val: string) => {
    setManualData((prev) => ({ ...prev, [field]: val }));
  };

  const handlePasteChange = (val: string) => {
    setPastedSpecs(val);
  };

  // Validasi: Wajib mengetik apapun di inputan (manual / tempel) baru tombol Kirim aktif
  const isFormValid =
    mode === 'manual'
      ? Boolean(
          manualData.cpu.trim() ||
          manualData.ram.trim() ||
          manualData.gpu.trim() ||
          manualData.storage.trim() ||
          manualData.usage.trim()
        )
      : Boolean(pastedSpecs.trim().length > 0);

  const handleStartChatWithSpecs = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const payload =
      mode === 'manual'
        ? { mode: 'manual' as const, ...manualData }
        : { mode: 'paste' as const, pastedSpecs };

    const formatted = formatSpecsForPrompt(payload);
    setActiveSpecsText(formatted);
    setView('chat');
  };

  const [showRecModal, setShowRecModal] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#090a0d] text-[#ededed]">
      {/* Preloader 2 Detik */}
      <Preloader />

      <Header />

      <main className="flex-1 max-w-xl w-full mx-auto px-3.5 sm:px-4 pt-4 sm:pt-8 pb-10 flex flex-col justify-start">
        {/* State 1: Page Awal (Landing Intro) */}
        {view === 'landing' && (
          <div className="my-auto">
            <LandingIntro onStart={() => setView('specs')} />
          </div>
        )}

        {/* State 2: Input Spesifikasi Awal (Wajib Mengetik Spek) */}
        {view === 'specs' && (
          <div className="w-full">
            {/* Header Navigasi (Hanya tombol kembali, tanpa tombol lewati) */}
            <div className="flex items-center justify-between mb-3">
              <button
                type="button"
                onClick={() => setView('landing')}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8D97A8] hover:text-[#C7F36B] transition-colors cursor-pointer py-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>KEMBALI KE AWAL</span>
              </button>

              <button
                type="button"
                onClick={() => setShowRecModal(true)}
                className="text-xs font-mono text-[#C7F36B] hover:underline cursor-pointer py-1"
              >
                Lihat Rekomendasi Laptop
              </button>
            </div>

            {/* Card Form Spesifikasi dengan tinggi stabil */}
            <div className="bg-[#111317] border border-[#222630] rounded-xl p-4 sm:p-6 shadow-sm w-full min-h-[460px] flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <h2 className="text-base sm:text-lg font-bold text-[#F4F6FA] tracking-tight">
                    Masukkan Spesifikasi Laptop
                  </h2>
                  <p className="text-xs text-[#8D97A8] mt-0.5">
                    Ketik spesifikasi laptopmu untuk memulai sesi roasting & tanya jawab AI.
                  </p>
                </div>

                <form onSubmit={handleStartChatWithSpecs}>
                  <ModeSelector
                    mode={mode}
                    onChange={(newMode) => setMode(newMode)}
                  />

                  <div className="min-h-[260px]">
                    {mode === 'manual' ? (
                      <ManualForm
                        data={manualData}
                        onChange={handleManualChange}
                      />
                    ) : (
                      <PasteForm
                        value={pastedSpecs}
                        onChange={handlePasteChange}
                      />
                    )}
                  </div>

                  {/* Primary Button "Kirim" */}
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className="w-full mt-5 bg-[#C7F36B] hover:bg-[#b5e25a] text-[#0d0f13] font-semibold text-sm py-3 px-5 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-35 disabled:cursor-not-allowed active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* State 3: Dialog Percakapan Interaktif dengan Guardrails */}
        {view === 'chat' && (
          <ChatBox
            laptopSpecs={activeSpecsText}
            onBackToLanding={() => setView('landing')}
            onChangeSpecs={() => setView('specs')}
          />
        )}
      </main>

      {/* Modal Rekomendasi Laptop Global */}
      <RecommendationModal
        isOpen={showRecModal}
        onClose={() => setShowRecModal(false)}
        onSelectToAsk={(promptText: string) => {
          setShowRecModal(false);
          setActiveSpecsText(promptText);
          setView('chat');
        }}
      />

      <Footer />
    </div>
  );
}
