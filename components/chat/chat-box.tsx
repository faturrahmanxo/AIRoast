'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '@/features/chat/schemas';
import { RecommendationModal } from './recommendation-modal';
import { Send, Terminal, Cpu, RotateCcw, ArrowLeft, Shield, Laptop } from 'lucide-react';

interface ChatBoxProps {
  laptopSpecs: string;
  onBackToLanding: () => void;
  onChangeSpecs: () => void;
}

export function ChatBox({ laptopSpecs, onBackToLanding, onChangeSpecs }: ChatBoxProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initialFetchRef = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  // Otomatis meminta AI memberikan vonis awal saat spek dimasukkan
  useEffect(() => {
    if (initialFetchRef.current) return;
    initialFetchRef.current = true;

    const fetchInitialRoast = async () => {
      if (!laptopSpecs.trim()) {
        setMessages([
          {
            role: 'assistant',
            content: 'Gue AI Laptop Roaster. Kasih tau spek laptop lu di sini, atau tanyakan apa saja seputar hardware dan gaming komputer!',
          },
        ]);
        return;
      }

      setLoading(true);
      try {
        const isRec = laptopSpecs.toLowerCase().includes('rekomendasi');
        const initialPrompt = isRec
          ? laptopSpecs.trim()
          : `Berikut spesifikasi laptop gue:\n${laptopSpecs.trim()}\n\nCoba berikan roasting awal dan evaluasi jujur untuk spek ini secara singkat dan padat!`;

        if (isRec) {
          setMessages([{ role: 'user', content: initialPrompt }]);
        }

        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: [{ role: 'user', content: initialPrompt }],
            laptopSpecs: isRec ? undefined : laptopSpecs.trim(),
          }),
        });

        const data = await res.json();
        if (data.ok && data.message) {
          setMessages((prev) => [
            ...prev.filter((m) => m.role === 'user'),
            {
              role: 'assistant',
              content: data.message,
            },
          ]);
        } else {
          setMessages([
            {
              role: 'assistant',
              content: 'Gue udah catat spek laptop lu. Tanyakan apa saja seputar bottleneck, performa game, atau kelayakan hardware-nya!',
            },
          ]);
        }
      } catch {
        setMessages([
          {
            role: 'assistant',
            content: 'Gue udah catat spek laptop lu. Tanyakan apa saja seputar bottleneck, performa game, atau kelayakan hardware-nya!',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialRoast();
  }, [laptopSpecs]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    setErrorMsg(null);
    const newMessages: ChatMessage[] = [...messages, { role: 'user', content: query }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          laptopSpecs: laptopSpecs || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        const errorText = data.error?.message || 'Gagal menerima balasan AI.';
        setErrorMsg(errorText);
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: `[GANGGUAN]: ${errorText}`,
          },
        ]);
        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.message || 'Sistem tidak menghasilkan balasan.',
        },
      ]);
    } catch {
      setErrorMsg('Koneksi terputus. Periksa jaringan internet.');
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '[KONEKSI ERROR]: Gagal menghubungi server roaster.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: laptopSpecs.trim()
          ? `Percakapan di-reset. Spek laptopmu tetap tercatat. Tanyakan apa saja seputar performa hardware ini.`
          : `Gue AI Laptop Roaster. Kasih tau spek laptop lu di sini atau tanyakan seputar hardware komputer!`,
      },
    ]);
    setErrorMsg(null);
  };

  return (
    <div className="w-full flex flex-col bg-[#111317] border border-[#222630] rounded-xl overflow-hidden shadow-2xl animate-fade-in">
      {/* Top Bar Navigation & Context Badge */}
      <div className="px-3 sm:px-4 py-2.5 sm:py-3 border-b border-[#222630] bg-[#161920] flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 truncate">
          <button
            type="button"
            onClick={onBackToLanding}
            className="text-[#8D97A8] hover:text-[#C7F36B] transition-colors p-1 rounded cursor-pointer flex-shrink-0"
            title="Kembali ke awal"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#F4F6FA] truncate">
            <Terminal className="w-3.5 h-3.5 text-[#C7F36B] flex-shrink-0" />
            <span className="truncate">AI ROASTER SESSION</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {/* Tombol Fitur Rekomendasi Laptop */}
          <button
            type="button"
            onClick={() => setShowRecommendations(true)}
            className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1e232d] hover:bg-[#282f3d] text-[#C7F36B] border border-[#2e3644] transition-colors cursor-pointer flex items-center gap-1"
            title="Lihat rekomendasi laptop resmi & harga terbaru"
          >
            <Laptop className="w-3 h-3" />
            <span>Rekomendasi</span>
          </button>

          {laptopSpecs.trim() && (
            <button
              type="button"
              onClick={onChangeSpecs}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1e232d] hover:bg-[#2b323f] text-[#B3BBC9] border border-[#2b323f] transition-colors cursor-pointer"
            >
              Ubah Spek
            </button>
          )}

          <button
            type="button"
            onClick={handleResetChat}
            className="text-[#8D97A8] hover:text-[#FF8066] transition-colors p-1 rounded cursor-pointer"
            title="Reset Percakapan"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Out-of-Context Protection Notice */}
      <div className="px-3 sm:px-4 py-1.5 bg-[#0f1115] border-b border-[#1c2028] flex items-center gap-1.5 text-[11px] text-[#717b8c] font-mono">
        <Shield className="w-3 h-3 text-[#C7F36B] flex-shrink-0" />
        <span className="truncate">Keamanan aktif: Hanya meladeni laptop, hardware & komputasi</span>
      </div>

      {/* Messages Stream Container */}
      <div className="p-3.5 sm:p-5 flex-1 min-h-[380px] max-h-[500px] overflow-y-auto space-y-3.5">
        {messages.map((msg, index) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={index}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} animate-fade-in`}
            >
              <div
                className={`max-w-[92%] sm:max-w-[82%] rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-[#1e2430] border border-[#2e3646] text-[#F4F6FA]'
                    : 'bg-[#15181f] border border-[#262c37] text-[#D6DAE2] border-l-2 border-l-[#C7F36B]'
                }`}
              >
                {!isUser && (
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#C7F36B] mb-1 font-bold">
                    <Cpu className="w-3 h-3" />
                    <span>AIRoast</span>
                  </div>
                )}
                <div className="whitespace-pre-wrap">{msg.content}</div>
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex items-start animate-fade-in">
            <div className="bg-[#15181f] border border-[#262c37] border-l-2 border-l-[#C7F36B] rounded-xl px-3.5 py-2.5 text-xs font-mono text-[#8D97A8] flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#C7F36B] animate-pulse" />
              <span>Sedang menjawab...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input Bar */}
      <div className="p-2.5 sm:p-3 bg-[#161920] border-t border-[#222630]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            disabled={loading}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tanyakan performa, game, atau rekomendasi laptop..."
            className="flex-1 bg-[#101217] border border-[#2b323f] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#F4F6FA] placeholder-[#646e7f] focus:border-[#C7F36B] focus:ring-1 focus:ring-[#C7F36B] transition-all disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-[#C7F36B] hover:bg-[#b5e25a] text-[#0d0f13] p-2.5 rounded-lg font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex-shrink-0 active:scale-[0.96]"
            title="Kirim pesan"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Modal Rekomendasi Laptop */}
      <RecommendationModal
        isOpen={showRecommendations}
        onClose={() => setShowRecommendations(false)}
        onSelectToAsk={(promptText) => {
          handleSend(promptText);
        }}
      />
    </div>
  );
}
