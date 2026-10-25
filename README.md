# AI Laptop Roaster (AIRoast)

> Web app hiburan AI interaktif berbahasa Indonesia untuk me-roast spesifikasi laptop secara brutal, kocak, dan membuka tabir bottleneck hardware tanpa ampun, lengkap dengan fitur rekomendasi laptop akurat dan harga pasar terkini.

---

## Fitur Utama

- **Interactive Multi-Turn AI Roaster**: Tanya jawab berkelanjutan seputar performa laptop, gaming, suhu, render, hingga upgrade feasibility.
- **Powered by Google Gemini**: Didukung model generatif Google Gemini (`gemini-flash-lite-latest`) dengan fallback cerdas.
- **Strict Out-of-Context Guardrails**: Menolak secara sarkastik pertanyaan di luar topik laptop, hardware, dan komputasi.
- **Katalog Rekomendasi Laptop Terkini**: Rekomendasi laptop resmi Indonesia dengan spesifikasi akurat dan estimasi harga pasar Rupiah up to date (Budget Pelajar, Produktivitas, Gaming).
- **Minimalist Cyber Dark UI**: Desain bersih tanpa animasi berlebihan, dark mode (#090a0d), neon lime accent (#C7F36B), dan tanpa emoji (menggunakan SVG icon murni).
- **Fully Responsive**: Nyaman diakses di perangkat mobile, tablet, hingga desktop.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router + Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **AI SDK**: `@google/genai` (Google Gemini)
- **Validation**: Zod
- **Deployment**: Vercel

---

## Cara Menjalankan Secara Lokal

1. **Clone repository**:
   ```bash
   git clone https://github.com/faturrahmanxo/AIRoast.git
   cd AIRoast
   ```

2. **Install dependensi**:
   ```bash
   npm install
   ```

3. **Konfigurasi Environment**:
   Salin `.env.example` ke `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Isi `GEMINI_API_KEY` dengan kunci API Gemini dari [Google AI Studio](https://aistudio.google.com/).

4. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## Deploy ke Vercel

1. Import repository `AIRoast` di dashboard [Vercel](https://vercel.com).
2. Tambahkan Environment Variable di Vercel:
   - `GEMINI_API_KEY`: Kunci API Gemini Anda.
3. Klik **Deploy**.
