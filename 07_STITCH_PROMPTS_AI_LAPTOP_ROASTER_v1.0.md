---
document_id: "07_STITCH_PROMPTS_AI_LAPTOP_ROASTER"
title: "Google Stitch Prompts — AI Laptop Roaster"
version: "1.0"
status: "Draft for review"
created_date: "2026-10-25"
language: "id-ID"
project_name: "AI Laptop Roaster"
depends_on:
  - "01_PROJECT_BLUEPRINT_AI_LAPTOP_ROASTER_v1.0.md"
  - "02_PRD_AI_LAPTOP_ROASTER_v1.0.md"
  - "04_ARCHITECTURE_TECHSTACK_AI_LAPTOP_ROASTER_v1.0.md"
  - "05_UX_ARCHITECTURE_AI_LAPTOP_ROASTER_v1.0.md"
  - "06_DESIGN_AI_LAPTOP_ROASTER_v1.0.md"
---

# 07. Google Stitch Prompts — AI Laptop Roaster

> **Tujuan dokumen:** Menyediakan prompt siap pakai berpresisi tinggi untuk Google Stitch (atau tool AI UI generation serupa) guna menghasilkan mockup antarmuka yang 100% selaras dengan PRD, UX Architecture, dan Design Foundation AI Laptop Roaster.

---

## Daftar Isi

1. [Panduan Penggunaan Google Stitch](#1-panduan-penggunaan-google-stitch)
2. [Global Design System Injection](#2-global-design-system-injection)
3. [Prompt 1: SCR-01 — Landing & Input Form (Manual Mode)](#3-prompt-1-scr-01--landing--input-form-manual-mode)
4. [Prompt 2: SCR-01B — Input Paste Mode](#4-prompt-2-scr-01b--input-paste-mode)
5. [Prompt 3: SCR-02 — Generating / Processing State](#5-prompt-3-scr-02--generating--processing-state)
6. [Prompt 4: SCR-03 — Roast Result & Share Card](#6-prompt-4-scr-03--roast-result--share-card)
7. [Prompt 5: SCR-04 & SCR-05 — Error, Rate Limit, & Recovery States](#7-prompt-5-scr-04--scr-05--error-rate-limit--recovery-states)
8. [Prompt 6: Mobile Viewport Variations](#8-prompt-6-mobile-viewport-variations)
9. [Checklist Evaluasi Hasil Stitch](#9-checklist-evaluasi-hasil-stitch)

---

## 1. Panduan Penggunaan Google Stitch

Agar hasil rendering UI di Google Stitch konsisten dan akurat:
1. **Sertakan Global Design System:** Selalu sertakan konteks desain global (Section 2) pada sesi prompt Stitch.
2. **Fokus Single Screen / State:** Generate per layar atau per state utama agar detail mikro tidak terabaikan.
3. **Cek Kepatuhan Tokens:** Pastikan warna latar `#101217`, kartu `#191D25`, aksen utama Lime `#C7F36B`, dan aksen humor Coral `#FF8066`.
4. **Tanpa Dekorasi Berlebih:** Cegah AI menambahkan efek neon berlebihan, 3D gaming render berat, atau layout dashboard korporat yang kaku.

---

## 2. Global Design System Injection

Salin blok konteks ini ke dalam prompt Stitch sebelum instruksi spesifik layar:

```text
[DESIGN SYSTEM CONTEXT]
Product: AI Laptop Roaster (Web App Hiburan Berbahasa Indonesia)
Theme: Dark Mode Only
Visual Direction: "Tech Editorial + Playful Roast" (Sleek, high contrast, tech-native, subtle humor)
Palette:
- Canvas/Background: #101217
- Surface/Card: #191D25
- Surface Raised/Inputs: #222835
- Border: #353C4A (1px clean border)
- Primary Accent (Actions): #C7F36B (Electric Lime) with dark text #101217
- Secondary Accent (Roast/Humor Highlight): #FF8066 (Vibrant Coral)
- Text Primary: #F4F6FA
- Text Muted: #B3BBC9
- Text Subtle: #8D97A8
Typography: Modern clean sans-serif (Inter/system-ui), bold compact headings, highly legible body (min 16px).
Corners: Radius lg (16px) for cards, md (10px) for inputs/buttons, pill (999px) for badges.
Layout: Centered responsive single-column feed (max width 760px on desktop, full-width 16px padding on mobile).
Tone: Witty, sharp, tech-literate, Indonesian casual ("gue/kamu", "spek", "vonis").
No heavy glows, no cluttered gaming graphics, no corporate dashboard widgets.
```

---

## 3. Prompt 1: SCR-01 — Landing & Input Form (Manual Mode)

### Sasaran
Menghasilkan tampilan landing page utama ketika pengguna pertama kali membuka web app dan memilih mode isi form manual.

### Prompt Text untuk Stitch

```text
Create a modern, high-contrast dark mode web UI for "AI Laptop Roaster" (Desktop viewport, 1440x900, centered max-width 760px container).

[DESIGN SYSTEM CONTEXT APPLIED]
Canvas background #101217. Card panels in #191D25 with subtle 1px border in #353C4A and 16px rounded corners.

Header:
- Top bar with minimal text wordmark "AI LAPTOP ROASTER" with a subtle fire/cpu icon tag in #C7F36B.
- Right side: Small pill badge "v1.0 MVP • Gratis Tanpa Akun".

Hero Section:
- Bold modern headline: "Spesifikasi Masuk. Harga Diri Laptop Diuji."
- Subtitle: "Masukkan spek laptopmu dan biarkan AI membedah bottleneck serta penderitaannya tanpa ampun."

Input Section (SCR-01):
- Segmented control / Tab toggle with 2 options: [Isi Manual (Active)] | [Tempel Teks (Inactive)]. Active tab has dark background #222835 with lime indicator.
- Form Grid (Manual Mode):
  1. Processor (CPU): Input field with label "Prosesor (CPU)", placeholder "Contoh: Intel Core i5-8250U / Ryzen 5 5600H".
  2. Kartu Grafis (GPU): Input field with label "Kartu Grafis (GPU) - Opsional", placeholder "Contoh: Integrated Intel UHD / RTX 3050".
  3. Kapasitas RAM: Dropdown/Input with label "RAM (GB)", placeholder "Contoh: 8 GB DDR4".
  4. Penyimpanan (Storage): Input with label "Storage", placeholder "Contoh: 256 GB SSD NVMe / 1 TB HDD".
  5. Penggunaan Utama: Input with label "Dipakai Buat Apa?", placeholder "Contoh: Buka 50 tab Chrome, skripsi, main Valorant".
- Input fields have #222835 background, #353C4A border, #F4F6FA text, and clear focus ring ready.

Primary Call-to-Action:
- Big prominent primary button across full width of card:
  "🔥 Roast Laptop Gue!"
  Background #C7F36B (Lime), text #101217 (Bold, 18px), height 54px, rounded-md (10px).

Footer Note:
- Discreet helper text below CTA: "100% anonim • Data spek diproses instan tanpa disimpan permanen • Untuk hiburan semata."
```

---

## 4. Prompt 2: SCR-01B — Input Paste Mode

### Sasaran
Menghasilkan tampilan saat pengguna beralih ke tab "Tempel Teks" untuk langsung menempelkan spesifikasi panjang dari toko online atau DxDiag.

### Prompt Text untuk Stitch

```text
Update the central input card of "AI Laptop Roaster" to display the "Tempel Teks" (Paste Mode).

[DESIGN SYSTEM CONTEXT APPLIED]
Keep Header, Hero, and layout from SCR-01.

Input Section Changes:
- Segmented control toggle now has: [Isi Manual (Inactive)] | [Tempel Teks (Active)].
- In place of the multi-input form, display a large clean multiline Textarea:
  - Background: #222835, border: 1px solid #353C4A, border-radius: 10px.
  - Height: 200px.
  - Placeholder text:
    "Tempel spek laptopmu di sini...
    Contoh:
    Asus Vivobook 14
    Intel Core i3 Gen 11, RAM 4GB onboard, SSD 512GB, Intel UHD Graphics.
    Sering dipakai buat ngedit Premiere sama multitasking kuliah."
  - Character counter bottom right of textarea: "128 / 1000 karakter" in #8D97A8.
- Quick preset buttons below textarea:
  - Small pills: "+ Contoh Laptop Kentang" | "+ Contoh Laptop Gaming Murah" | "+ Contoh Laptop Kerja Tipis"
- Primary CTA button remains identical: "🔥 Roast Laptop Gue!" (#C7F36B).
```

---

## 5. Prompt 3: SCR-02 — Generating / Processing State

### Sasaran
Menghasilkan micro-interaction state ketika sistem backend sedang memanggil AI dan memvalidasi output.

### Prompt Text untuk Stitch

```text
Render the Processing / Loading state (SCR-02) for "AI Laptop Roaster".

[DESIGN SYSTEM CONTEXT APPLIED]
The input card transforms into an engaging, animated processing card.

Card Content:
- Center-aligned layout inside #191D25 panel with #353C4A border.
- Animated Visual Element: A stylized pulsing CPU chip with thermal heat wave lines glowing subtly in #FF8066 (Coral) and #C7F36B (Lime).
- State Heading: "Lagi Menghitung Tingkat Penderitaan Laptop..." (22px bold, #F4F6FA).
- Dynamic Rotating Subtext / Funny loading status ticker:
  "Mengecek apakah kipas laptopmu berbunyi seperti helikopter militer..."
  (in #B3BBC9, 15px).
- Linear indeterminate progress bar (not fake percentage, but a sleek ping-pong loading bar in Lime #C7F36B).
- Form inputs behind or below are smoothly dimmed/disabled with opacity 0.4.
- Button is disabled with label: "Sedang Menganalisis Spek..." and a small spinner.
```

---

## 6. Prompt 4: SCR-03 — Roast Result & Share Card

### Sasaran
Menghasilkan result screen yang menjadi bintang utama produk: kartu vonis roast yang brutal, analisis teknis terpisah, dan tombol aksi sharing.

### Prompt Text untuk Stitch

```text
Create the core Result Screen (SCR-03) for "AI Laptop Roaster" showing a completed roast.

[DESIGN SYSTEM CONTEXT APPLIED]
Centered container (max-width 760px), dark background #101217.

Result Card (#191D25, 1px border #FF8066 with subtle warm accent tint, 16px radius, padding 32px):

1. Card Header & Badge:
   - Eyebrow badge: "VONIS RESMI AI" in pill badge (Coral #FF8066 background with dark text).
   - Laptop Nickname / Title: "Sang Petarung Chrome 4 Tab" (Bold 28px, #F4F6FA).

2. Core Roast (Visual Highlight):
   - Large quote block with subtle quote mark icon:
     "RAM 4 GB di tahun 2026 itu bukan multitasking, bro. Itu laptop lagi memilih siapa aplikasi yang harus dikorbankan demi Windows bisa bernapas. Cuma kuat buka skripsi sambil dengerin lagu 128kbps."
   - Typography: 18px line-height 28px, color #F4F6FA, with high-contrast callout border in Coral #FF8066.

3. Structured Technical Analysis (Clear Separation from Humor):
   - Three distinct mini-panels side by side or stacked cleanly:
     a. Kekuatan (Strengths - Green icon #7FE0B0):
        "• Hemat daya untuk ngetik dokumen offline
         • Storage SSD cukup responsif untuk boot Windows"
     b. Keterbatasan (Limitations - Coral icon #FF7A86):
        "• RAM 4 GB onboard menjadi bottleneck parah saat browsing
         • Tidak memiliki GPU diskrit untuk rendering atau game 3D"
     c. Kecocokan (Usage Fit - Lime icon #C7F36B):
        "Cocok untuk: Pengetikan tugas darurat, admin kasir, dan nonton streaming resolusi 720p."

4. Action Button Bar:
   - Button 1 (Primary Share): "📤 Bagikan Hasil" (Lime #C7F36B background, dark text #101217, bold, flex-1).
   - Button 2 (Secondary Copy): "📋 Salin Teks Roast" (Surface raised #222835, border #353C4A, text #F4F6FA).
   - Button 3 (Secondary Ghost): "🔄 Roast Laptop Lain" (Transparent with border, resets back to input).

5. Feedback Toast Preview (Bottom floating):
   - Pill toast: "✅ Teks roast berhasil disalin ke clipboard!"
```

---

## 7. Prompt 5: SCR-04 & SCR-05 — Error, Rate Limit, & Recovery States

### Sasaran
Menghasilkan tampilan saat terjadi kesalahan input, batas kuota tercapai, atau koneksi timeout tanpa menghilangkan input yang sudah diketik pengguna.

### Prompt Text untuk Stitch

```text
Render the Error & Rate Limit Recovery States (SCR-04 & SCR-05) for "AI Laptop Roaster".

State A: Inline Validation Error (SCR-04)
- Form inputs are visible. The "Processor" and "RAM" fields have red-coral border (#FF7A86).
- Below the field, an explicit helpful error message in 14px:
  "⚠️ Minimal isi prosesor dan RAM dulu ya, biar AI nggak asal nuduh."
- Submit button remains enabled or shows active state once fixed.

State B: Rate Limit Modal / Banner (SCR-05)
- An alert banner inside the main card (#222835 with 1px border #FFD166):
  - Warning Icon in Amber (#FFD166).
  - Title: "Santai Dulu, Mesin Lagi Panas! ☕"
  - Description: "Kamu sudah melakukan 5 roasting dalam waktu singkat. Kuota request sementara tercapai demi menjaga server tidak meleleh. Coba lagi dalam 5 menit."
  - Action: "Coba Lagi Nanti" (disabled button with timer "04:59").
  - Form input remains preserved below so user doesn't lose their typed specs.
```

---

## 8. Prompt 6: Mobile Viewport Variations

### Sasaran
Memastikan komposisi layout pada layar smartphone (375x812 iPhone viewport) tetap nyaman disentuh, teks tidak overflow, dan CTA menjangkau ibu jari pengguna.

### Prompt Text untuk Stitch

```text
Create the Mobile UI layout (375x812 viewport) for "AI Laptop Roaster" showing the Roast Result Card (SCR-03).

[DESIGN SYSTEM CONTEXT APPLIED]
- Padding horizontal: 16px.
- Wordmark compact at top.
- Nickname: 24px bold.
- Roast quote card: full width, 16px text, 24px line-height.
- Technical breakdown: Stacked vertically with clear bullet points.
- Bottom Bar: Sticky floating bottom bar with full-width primary CTA "📤 Bagikan Roast" and icon button for "📋 Copy".
- Touch targets: Minimum 48px height for all buttons and interactive chips.
- Zero horizontal scrolling.
```

---

## 9. Checklist Evaluasi Hasil Stitch

Saat hasil render visual dari Google Stitch selesai, gunakan checklist ini sebelum implementasi kode:

| Kriteria Desain | Ekspektasi | Lolos? |
|---|---|:---:|
| **Color Fidelity** | Background `#101217`, Cards `#191D25`, Lime `#C7F36B`, Coral `#FF8066` | [ ] |
| **Separation of Concerns** | Bagian candaan (Roast) terpisah tegas dari analisis teknis (Kekuatan & Batasan) | [ ] |
| **Input Flexibility** | Toggle *Isi Manual* dan *Tempel Teks* terlihat jelas dan intuitif | [ ] |
| **Legibility** | Teks body di atas 16px, kontras memenuhi WCAG AA, tidak ada teks kecil berkontras rendah | [ ] |
| **Touch Ergonomics** | Target sentuh mobile minimal 44x44 px, tombol CTA mendominasi dan mudah dijangkau | [ ] |
| **No Hallucination UI** | Tidak ada grafik FPS game palsu, tachometer suhu 3D, atau elemen gadget berlebihan | [ ] |
