import { GoogleGenAI } from '@google/genai';
import { RoastResult, RoastResultSchema } from '@/features/roast/schemas';
import { buildRoastPrompt } from '@/features/roast/prompt-template';

/**
 * Intelligent Fallback Engine jika GEMINI_API_KEY belum dikonfigurasi di environment
 * atau jika quota AI habis, sehingga app tetap 100% fungsional dan menghibur.
 */
function generateHeuristicRoast(specsText: string): RoastResult {
  const lower = specsText.toLowerCase();

  let title = "Sang Petarung Serbaguna";
  let roast = "Laptop ini tampak seperti hasil kompromi antara tabungan yang menipis dan ambisi yang terlalu tinggi. Setiap kali kamu menyalakannya, kipasnya berputar kencang bukan karena bekerja keras, tapi karena sedang berteriak minta pensiun dini.";
  const strengths: string[] = ["Bisa menyala dan menampilkan desktop tanpa meledak"];
  const limitations: string[] = ["Bakal kewalahan kalau dipaksa multitasking berat"];
  let usageFit = "Cocok buat ngetik Word, browsing santai 5 tab, dan nonton YouTube 720p.";

  const isLowRam = lower.includes('2gb') || lower.includes('4gb') || lower.includes('2 gb') || lower.includes('4 gb');
  const isHighRam = lower.includes('16gb') || lower.includes('32gb') || lower.includes('64gb') || lower.includes('16 gb') || lower.includes('32 gb');
  const isCelerOn = lower.includes('celeron') || lower.includes('pentium') || lower.includes('atom') || lower.includes('athlon');
  const isGamingGpu = lower.includes('rtx') || lower.includes('gtx') || lower.includes('radeon rx');
  const isHdd = lower.includes('hdd') || lower.includes('harddisk') || lower.includes('5400rpm');

  if (isCelerOn) {
    title = "Siput Digital Bertopeng Laptop";
    roast = "Pakai prosesor ini di zaman sekarang itu seperti balapan Formula 1 naik sepeda ontel berkarat. Laptop ini nggak kenal kata 'instan'—setiap klik kanan adalah momen refleksi hidup sambil menunggu kursor loading berputar tiada henti.";
    limitations.push("Prosesor dual-core hemat daya yang terlalu hemat tenaga");
    usageFit = "Cocok untuk mesin ketik digital darurat dan kalkulator layar lebar.";
  } else if (isLowRam) {
    title = "Sang Algojo Tab Chrome";
    roast = "RAM segini di era Windows modern itu bukan multitasking, bro. Ini laptop lagi milih siapa aplikasi yang harus ditumbalkan biar sistem nggak blue screen. Buka satu tab Spotify aja Chrome-nya langsung panik cari bantuan.";
    limitations.push("Kapasitas RAM terlalu sempit untuk aplikasi masa kini");
    usageFit = "Cocok untuk baca dokumen PDF dan pengetikan satu jendela.";
  } else if (isGamingGpu && isHighRam) {
    title = "Pemanas Ruangan Berkedok Laptop";
    roast = "Spek gahar kayak gini tapi ujung-ujungnya cuma dipakai buka YouTube, main game 2D indie, atau scroll media sosial. Selamat, kamu baru saja membeli kompor induksi portabel seharga belasan juta cuma buat pamer lampu RGB!";
    strengths.push("Performa grafis mumpuni untuk gaming dan rendering");
    strengths.push("Kapasitas RAM melimpah untuk puluhan aplikasi aktif");
    limitations.push("Baterai boros dan adaptor charger seberat batu bata");
    usageFit = "Cocok untuk gaming kompetitif, editing video, dan menghangatkan kopi di samping lubang kipas.";
  } else if (isHdd) {
    title = "Museum Kecepatan 5400 RPM";
    roast = "Booting laptop ini lebih lama daripada proses sidang skripsi. Kamu masih sempat seduh kopi, sarapan lontong sayur, dan mandi dua kali sebelum desktop Windows akhirnya siap menerima klik pertamamu.";
    limitations.push("Kecepatan read/write storage mekanis menjadi leher botol parah");
    usageFit = "Bisa dipakai kerja kantoran asalkan pemilik punya stok kesabaran tak terbatas.";
  } else {
    title = "Pahlawan Tugas Menit Terakhir";
    roast = "Spek standar yang berada di batas antara 'cukup bersyukur' dan 'kepingin banting'. Nggak terlalu lambat buat bikin frustrasi, tapi nggak cukup kencang buat bikin bangga. Teman setia di tanggal tua.";
    strengths.push("Cukup responsif untuk kebutuhan komputasi harian");
    usageFit = "Cocok untuk kerja hybrid, kuliah, spreadsheet, dan streaming multimedia.";
  }

  return {
    title,
    roast,
    strengths,
    limitations,
    usageFit,
    shareText: `Laptop gue divonis '${title}' oleh AI Laptop Roaster! Vonis: "${roast.slice(0, 120)}..." Cek nasib laptopmu di AI Laptop Roaster!`
  };
}

/**
 * Adapter pemanggilan AI Provider.
 */
export async function generateRoastFromAI(specsText: string): Promise<RoastResult> {
  const apiKey = process.env.GEMINI_API_KEY?.trim();

  // Jika API key belum diisi, fallback ke engine roasting lokal yang cerdas
  if (!apiKey) {
    // Tambah delay buatan 1.2 detik agar user feel interaksi "AI thinking"
    await new Promise((r) => setTimeout(r, 1200));
    return generateHeuristicRoast(specsText);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const prompt = buildRoastPrompt(specsText);

    // Timeout signal 12 detik
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);

    const response = await ai.models.generateContent({
      model: 'gemini-flash-lite-latest',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.85,
        maxOutputTokens: 850,
      },
    });

    clearTimeout(timeout);

    const rawText = response.text || '';
    if (!rawText.trim()) {
      throw new Error("Output AI kosong");
    }

    // Bersihkan code fences markdown bila model menyertakannya
    let cleanedJson = rawText.trim();
    if (cleanedJson.startsWith('```')) {
      cleanedJson = cleanedJson.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
    }

    const parsedJson = JSON.parse(cleanedJson);
    const validated = RoastResultSchema.parse(parsedJson);

    return validated;
  } catch (err: unknown) {
    console.warn("Gemini API call failed or timed out, falling back to heuristic roaster:", err);
    // Fallback gracefully bila quota habis atau jaringan bermasalah
    return generateHeuristicRoast(specsText);
  }
}
