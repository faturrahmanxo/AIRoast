import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '@/features/chat/schemas';
import { getChatSystemPrompt } from './chat-system-prompt';

/**
 * Deteksi dasar out-of-context untuk engine fallback lokal.
 */
function isOutOfContext(text: string): boolean {
  const lower = text.toLowerCase();
  
  // Kata kunci hardware/komputer/game yang relevan
  const relevantKeywords = [
    'laptop', 'spek', 'spec', 'komputer', 'pc', 'ram', 'cpu', 'gpu', 'prosesor',
    'intel', 'ryzen', 'amd', 'nvidia', 'rtx', 'gtx', 'celeron', 'core i',
    'ssd', 'hdd', 'storage', 'vga', 'game', 'gaming', 'fps', 'render', 'gta',
    'valorant', 'genshin', 'dota', 'premiere', 'blender', 'chrome', 'tab',
    'upgrade', 'panas', 'suhu', 'kipas', 'baterai', 'layar', 'beli', 'bagus',
    'kuat', 'mampu', 'bisa', 'skripsi', 'office', 'windows', 'macbook', 'asus',
    'lenovo', 'acer', 'hp', 'dell', 'msi', 'axioo', 'advan', 'fan', 'thermal'
  ];

  const hasRelevantKeyword = relevantKeywords.some((kw) => lower.includes(kw));

  // Kata kunci jelas di luar konteks
  const explicitOffTopic = [
    'resep', 'masak', 'bumbu', 'politik', 'presiden', 'pemilu', 'pacar', 'cinta',
    'jodoh', 'zodiak', 'cuaca', 'hujan', 'puisi', 'cerpen', 'agama', 'sholat',
    'gereja', 'doa', 'obat', 'penyakit', 'sakit apa', 'ibu kota', 'sejarah perang'
  ];

  const hasOffTopic = explicitOffTopic.some((kw) => lower.includes(kw));

  if (hasOffTopic) return true;
  // Jika pertanyaan sangat umum tanpa kaitan dengan laptop sama sekali
  if (!hasRelevantKeyword && lower.length > 25) return true;

  return false;
}

/**
 * Intelligent Local Conversational Engine (jika tanpa API key atau saat offline/fallback).
 */
function generateHeuristicChatReply(messages: ChatMessage[], laptopSpecs?: string): string {
  const lastMsg = messages[messages.length - 1]?.content || '';
  const lower = lastMsg.toLowerCase();
  const specs = (laptopSpecs || '').toLowerCase();

  // Guardrail Penolakan di luar konteks
  if (isOutOfContext(lastMsg)) {
    return "Fokus ngab. Gue ini AI Laptop Roaster, bukan guru les umum atau tempat curhat asmara. Pertanyaan lu melenceng jauh dari urusan hardware. Tanya soal laptop atau spek lu aja, jangan ngelantur!";
  }

  // Cek apakah pertanyaan seputar gaming
  if (lower.includes('gta') || lower.includes('game') || lower.includes('valorant') || lower.includes('genshin') || lower.includes('kuat')) {
    if (specs.includes('celeron') || specs.includes('4gb') || specs.includes('4 gb') || specs.includes('intel uhd')) {
      return "Kuat main game berat? Jangankan GTA V, buka menu loading-nya aja laptop lu udah bernapas tersengal-sengal kayak habis lari maraton. Game yang paling cocok buat spek ini ya Solitaire atau game catur bawaan Windows. Jangan siksa hardware kentang lu demi ambisi gaming!";
    }
    if (specs.includes('rtx') || specs.includes('gtx') || specs.includes('16gb') || specs.includes('16 gb')) {
      return "Bisa dan kuat banget. Tapi siap-siap aja lubang exhaust laptop lu menyemburkan hawa panas kayak oven martabak, plus kipasnya bakal meraung kayak pesawat tempur lepas landas. Jangan main di atas kasur kalau nggak mau kasur lu ikutan matang!";
    }
    return "Tergantung game apa yang lu tuju. Buat game kompetitif ringan kayak Valorant resolusi rendah masih bisa dapat FPS lumayan. Tapi kalau mau maksa game AAA modern, siap-siap lu disuguhkan pengalaman nonton slideshow foto 15 FPS!";
  }

  // Cek seputar rendering / editing / software berat
  if (lower.includes('render') || lower.includes('premiere') || lower.includes('blender') || lower.includes('edit')) {
    if (specs.includes('4gb') || specs.includes('celeron') || specs.includes('hdd')) {
      return "Render video di laptop ini? Lu klik tombol export jam 9 pagi, jadinya mungkin pas anak lu wisuda. RAM mepet dan prosesor pas-pasan bakal bikin software editing lu langsung freeze begitu lu nambahin transisi kedua.";
    }
    return "Buat cut to cut video 1080p santai masih sanggup. Tapi kalau lu nekat import video 4K dengan puluhan layer efek warna, lu mending seduh mie instan dulu sambil nunggu timeline-nya selesai ngelag.";
  }

  // Cek seputar upgrade
  if (lower.includes('upgrade') || lower.includes('tambah') || lower.includes('ganti')) {
    if (specs.includes('hdd') || specs.includes('harddisk')) {
      return "Satu kata: Ganti ke SSD sekarang juga! Lu bertahan pakai HDD di zaman sekarang itu kayak naik delman di jalan tol. Kalau ada slot RAM kosong, naikin minimal ke 8GB atau 16GB biar Windows lu nggak panik.";
    }
    if (specs.includes('4gb') || specs.includes('8gb')) {
      return "Upgrade RAM adalah pertolongan pertama paling masuk akal. Tambah RAM jadi minimal 16GB dual-channel biar multitasking lu nggak saling sikut antar tab Chrome.";
    }
    return "Cek dulu apakah komponen laptop lu solderan atau bisa dicopot. Kalau RAM dan SSD udah aman, hal terbaik yang bisa lu upgrade selanjutnya adalah stop buka puluhan aplikasi nggak penting secara bersamaan!";
  }

  // Cek apakah laptopnya bagus atau tidak
  if (lower.includes('bagus') || lower.includes('worth') || lower.includes('gimana')) {
    if (specs.includes('rtx') || specs.includes('core i7') || specs.includes('ryzen 7') || specs.includes('16gb')) {
      return "Secara hardware ini tergolong kencang dan mumpuni. Masalah utamanya bukan di laptopnya, tapi di pemiliknya: spek sultan belasan juta masa cuma lu pakai buat ngetik dokumen Word sama nonton streaming anime bajakan?";
    }
    if (specs.includes('celeron') || specs.includes('4gb')) {
      return "Jujur aja, spek ini serba terbatas. Buat ngetik tugas kuliah atau admin kasir masih jalan, tapi buat tuntutan komputasi modern lu harus punya stok kesabaran seluas samudra.";
    }
    return "Laptop standar yang berada di kelas pekerja keras. Nggak kencang-kencang amat buat disombongin ke tongkrongan, tapi cukup setia buat ngerjain tugas harian selama lu nggak menyiksanya di luar batas.";
  }

  // Cek rekomendasi laptop
  if (lower.includes('rekomendasi') || lower.includes('beli laptop') || lower.includes('pilihan laptop')) {
    if (lower.includes('gaming') || lower.includes('12') || lower.includes('13') || lower.includes('10')) {
      return "Buat kebutuhan kencang dan gaming di kelas 10-13 jutaan, pilihan paling solid ada Lenovo LOQ 15IAX9 (i5-12450HX, RAM 12GB DDR5, RTX 3050 6GB, layar 100% sRGB) di harga Rp 12.899.000 atau Asus TUF Gaming A15 (Ryzen 5 7535HS, 16GB DDR5, RTX 3050 4GB) di harga Rp 11.499.000. Spek ini udah tahan banting dan ga bakal bikin lu nangis pas buka game berat.";
    }
    if (lower.includes('5') || lower.includes('6') || lower.includes('7') || lower.includes('coding') || lower.includes('kuliah')) {
      return "Di budget 6-7 jutaan buat koding dan kuliah, lirik Advan Workplus AMD (Ryzen 5 6600H, RAM 16GB LPDDR5, SSD 512GB PCIe 4.0, layar 100% sRGB) seharga Rp 6.999.000 atau Lenovo IdeaPad Slim 3 (i3-1215U, 8GB) seharga Rp 5.499.000. Multitasking aman tanpa takut laptop lu meledak.";
    }
    return "Pilihan paling oke saat ini:\n1. Advan Workplus AMD (Ryzen 5 6600H / 16GB RAM / 512GB SSD) ~ Rp 6.999.000 buat koding & kuliah.\n2. Lenovo LOQ 15 (i5-12450HX / RTX 3050 6GB / 144Hz 100% sRGB) ~ Rp 12.899.000 buat gaming & render berat.";
  }

  // Default roast conversation
  return "Gue udah liat kondisi spek laptop lu. Pertanyaan berikutnya apa nih? Mau nanya kuat main game apa, mau nanya solusi biar nggak lemot, atau mau curhat kenapa kipasnya bunyi kayak traktor sawah?";
}

/**
 * Adapter pemanggilan Chat Generatif via Google Gemini API dengan fallback cerdas.
 */
export async function sendChatMessage(messages: ChatMessage[], laptopSpecs?: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY?.trim();

  // Jika tanpa API Key, jalankan engine lokal interaktif
  if (!apiKey) {
    await new Promise((r) => setTimeout(r, 700));
    return generateHeuristicChatReply(messages, laptopSpecs);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const systemPrompt = getChatSystemPrompt(laptopSpecs);

    // Format chat history
    const contents = messages.map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-flash-lite-latest',
      contents: contents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.9,
        maxOutputTokens: 350,
      },
    });

    const reply = response.text?.trim();
    if (!reply) {
      throw new Error("Respons AI kosong.");
    }

    return reply;
  } catch (err: unknown) {
    console.error("Gemini API call failed:", err);
    return generateHeuristicChatReply(messages, laptopSpecs);
  }
}
