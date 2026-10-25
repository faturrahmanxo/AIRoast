---
document_id: "06_DESIGN"
project: "AI Laptop Roaster"
version: "1.0"
status: "Draft for review"
language: "id-ID"
created_date: "2026-10-25"
depends_on:
  - "01_PROJECT_BLUEPRINT_AI_LAPTOP_ROASTER_v1.0.md"
  - "02_PRD_AI_LAPTOP_ROASTER_v1.0.md"
  - "04_ARCHITECTURE_TECHSTACK_AI_LAPTOP_ROASTER_v1.0.md"
  - "05_UX_ARCHITECTURE_AI_LAPTOP_ROASTER_v1.0.md"
---

# 06. Design Foundation — AI Laptop Roaster

## Daftar Isi

1. [Tujuan dan Batasan](#1-tujuan-dan-batasan)
2. [Arah Brand](#2-arah-brand)
3. [Personality dan Prinsip Desain](#3-personality-dan-prinsip-desain)
4. [Fondasi Visual](#4-fondasi-visual)
5. [Layout, Grid, dan Spacing](#5-layout-grid-dan-spacing)
6. [Typography](#6-typography)
7. [Warna dan Token Semantik](#7-warna-dan-token-semantik)
8. [Shape, Border, dan Elevation](#8-shape-border-dan-elevation)
9. [Iconography dan Imagery](#9-iconography-dan-imagery)
10. [Component Foundation](#10-component-foundation)
11. [Motion dan Feedback](#11-motion-dan-feedback)
12. [Responsive Behavior](#12-responsive-behavior)
13. [Accessibility](#13-accessibility)
14. [Content Design dan Microcopy](#14-content-design-dan-microcopy)
15. [Do / Don't](#15-do--dont)
16. [Design Token Starter](#16-design-token-starter)
17. [Quality Gate dan Checklist](#17-quality-gate-dan-checklist)
18. [Asumsi dan Keputusan Terbuka](#18-asumsi-dan-keputusan-terbuka)

## 1. Tujuan dan Batasan

Dokumen ini menetapkan fondasi visual dan interaksi agar seluruh layar AI Laptop Roaster konsisten sebelum dibuat melalui Google Stitch dan diimplementasikan.

### 1.1 Sasaran desain

- Membuat produk terasa seperti alat teknologi yang cerdas, cepat, dan lucu—bukan dashboard perusahaan yang kaku.
- Menonjolkan input spesifikasi laptop dan hasil roast sebagai fokus utama.
- Membuat hasil mudah dibaca, disalin, dan dibagikan ke media sosial.
- Mendukung pengalaman mobile-first tanpa mengorbankan kenyamanan desktop.
- Menjaga aksesibilitas, keterbacaan, performa, dan biaya implementasi MVP.

### 1.2 Dalam cakupan

- Brand personality dan visual direction.
- Semantic colors, typography, spacing, grid, radius, border, dan elevation.
- Komponen UI inti dan state interaksinya.
- Motion, responsive rules, accessibility, dan microcopy.
- Panduan yang dapat diterjemahkan ke design prompts dan implementasi React/Tailwind.

### 1.3 Di luar cakupan

- Logo final berbentuk vektor atau brand book korporat.
- Ilustrasi kustom kompleks, animasi 3D, atau sistem ilustrasi penuh.
- Design system untuk aplikasi native.
- Komponen premium atau fitur yang tidak termasuk MVP.

## 2. Arah Brand

Tiga arah berikut dipertimbangkan. Rekomendasi dipilih agar identitas produk mudah dikenali sekaligus realistis untuk MVP.

| Arah | Karakter | Kelebihan | Trade-off |
|---|---|---|---|
| A. Tech Editorial + Playful Roast **(rekomendasi)** | Gelap, tajam, kontras tinggi, aksen lime, tipografi tegas | Terasa tech-native, hasil roast menonjol, mudah dibuat konsisten | Perlu disiplin kontras dan penggunaan aksen agar tidak melelahkan |
| B. Meme Lab | Cerah, stiker, warna berani, elemen playful | Sangat ekspresif dan cocok untuk viralitas | Risiko tampak berantakan dan mengurangi keterbacaan |
| C. Minimal Utility | Terang, netral, fokus pada form dan output | Ringan, familiar, mudah diakses | Kepribadian brand dan daya ingat visual lebih lemah |

### 2.1 Rekomendasi: Tech Editorial + Playful Roast

**Deskripsi:** antarmuka seperti publikasi teknologi modern yang bertemu dengan humor internet Indonesia. Layout rapi dan editorial; aksen visualnya nakal, tetapi tidak mengganggu isi.

- **Warna dasar:** charcoal/navy gelap dan permukaan sedikit lebih terang.
- **Aksen utama:** lime terang untuk aksi primer dan penanda penting.
- **Aksen sekunder:** coral/oranye untuk humor, label, atau status yang memerlukan perhatian.
- **Tipografi:** sans-serif modern, heading padat dan tegas, body sangat mudah dibaca.
- **Komposisi:** kartu dengan batas jelas, ruang kosong terukur, output roast sebagai hero.
- **Nada:** blak-blakan, jenaka, sedikit sarkastik; tetap menyerang spesifikasi/perangkat, bukan identitas atau kondisi personal pemilik.

### 2.2 Aturan identitas

1. Roast harus terasa tajam dari copy, bukan dari UI yang agresif atau sulit digunakan.
2. Gunakan aksen warna secara hemat; satu tindakan primer dominan per area.
3. Hindari dekorasi gaming berlebihan, neon di semua elemen, efek glow yang berat, atau tekstur yang menurunkan keterbacaan.
4. Gunakan contoh spesifikasi yang realistis di Indonesia, misalnya RAM 8 GB, SSD 256 GB, Intel Core i5 generasi lama, atau laptop untuk kuliah.
5. Hindari klaim bahwa roast merupakan penilaian teknis objektif. Hasil adalah hiburan berbasis input pengguna.

## 3. Personality dan Prinsip Desain

### 3.1 Personality

- **Witty:** lucu, cepat menangkap konteks, tidak perlu menjelaskan setiap lelucon.
- **Brutal-but-playful:** roasting tajam, tetapi tidak merendahkan kelompok atau menyerang atribut sensitif.
- **Tech-literate:** terminologi perangkat digunakan secara masuk akal.
- **Shareable:** hasil punya struktur dan punchline yang mudah dikutip.
- **Transparent:** pengguna tahu input apa yang diproses dan kapan sistem sedang menghasilkan jawaban.

### 3.2 Prinsip desain

| Prinsip | Implikasi UI |
|---|---|
| Content first | Hasil roast dan tombol salin/bagikan mendapat prioritas tertinggi |
| One obvious next step | Setiap layar memiliki satu aksi primer yang jelas |
| Humor in the content | Humor terutama berada pada teks dan label, bukan animasi yang mengganggu |
| Fast feedback | Validasi, loading, sukses, dan error tampil jelas |
| Mobile-first | Form, hasil, dan tombol berbagi nyaman disentuh dengan satu tangan |
| Progressive disclosure | Opsi tambahan tidak mengalahkan form utama |
| Accessible by default | Kontras, fokus keyboard, label, dan status tidak hanya mengandalkan warna |

## 4. Fondasi Visual

### 4.1 Komposisi halaman utama

Urutan visual yang direkomendasikan:

1. Header ringkas: wordmark teks “AI Laptop Roaster” dan navigasi minimal.
2. Hero: headline dengan humor singkat, subheadline penjelas, tanpa paragraf panjang.
3. Input panel: pilihan input manual atau tempel spesifikasi.
4. Aksi primer: “Roast laptop gue”.
5. Area hasil: muncul setelah hasil tersedia; menjadi fokus halaman.
6. Footer sederhana: catatan hiburan, privasi singkat, dan tautan kebijakan bila tersedia.

### 4.2 Hierarki

- **Level 1:** headline halaman atau judul hasil.
- **Level 2:** judul section dan ringkasan roast.
- **Level 3:** label field, metadata spesifikasi, dan bagian pendukung.
- **Level 4:** hint, disclaimer, karakter tersisa, dan metadata sekunder.

Jangan menggunakan ukuran font besar untuk semua teks. Kontras hierarki harus tetap jelas ketika layar dipersempit.

## 5. Layout, Grid, dan Spacing

### 5.1 Grid dan lebar konten

- **Mobile:** satu kolom, padding horizontal 16–20 px.
- **Tablet:** satu kolom utama; form dapat tetap satu kolom agar urutan mudah dipahami.
- **Desktop:** konten utama dibatasi sekitar 1040–1120 px. Hero boleh lebih lebar, tetapi form dan hasil sebaiknya tidak menjadi terlalu panjang.
- **Hasil roast:** gunakan lebar baca yang nyaman; hindari baris teks sangat panjang.
- Gunakan spacing berbasis kelipatan 4 px untuk konsistensi.

### 5.2 Skala spacing

| Token | Nilai | Penggunaan |
|---|---:|---|
| `space-1` | 4 px | Jarak ikon ke teks atau detail rapat |
| `space-2` | 8 px | Jarak label dan hint |
| `space-3` | 12 px | Jarak antar elemen kecil |
| `space-4` | 16 px | Padding komponen standar |
| `space-5` | 20 px | Padding mobile yang lega |
| `space-6` | 24 px | Jarak antar bagian dalam kartu |
| `space-8` | 32 px | Jarak antarkelompok |
| `space-10` | 40 px | Jarak section |
| `space-12` | 48 px | Jarak section besar |
| `space-16` | 64 px | Jarak vertikal hero/section pada desktop |

### 5.3 Density

- Default: **comfortable**, bukan compact.
- Form memiliki jarak yang cukup antara label, input, dan error.
- Hasil panjang memakai paragraf dan subheading, bukan satu blok teks padat.
- Hindari memenuhi viewport dengan semua fitur sekaligus.

## 6. Typography

### 6.1 Font direction

Gunakan sans-serif yang tersedia luas dan memiliki dukungan karakter Bahasa Indonesia. Rekomendasi awal: **Inter** atau font sans-serif sistem yang setara. Jangan menjadikan pemuatan font eksternal sebagai syarat aplikasi dapat digunakan.

### 6.2 Skala tipografi

| Token | Ukuran / line-height | Penggunaan |
|---|---|---|
| `text-xs` | 12 / 16 px | Metadata nonkritis |
| `text-sm` | 14 / 20 px | Hint, label tambahan |
| `text-base` | 16 / 24 px | Body dan input |
| `text-lg` | 18 / 28 px | Intro atau teks pendukung penting |
| `text-xl` | 20 / 28 px | Judul kartu |
| `text-2xl` | 24 / 32 px | Judul section |
| `text-3xl` | 30 / 36 px | Headline mobile |
| `text-4xl` | 36 / 44 px | Headline desktop |
| `text-5xl` | 48 / 56 px | Opsional untuk hero desktop, jika copy singkat |

### 6.3 Aturan tipografi

- Body dan input minimal 16 px pada mobile untuk kenyamanan.
- Gunakan weight 400–500 untuk body, 600 untuk label/judul kartu, 700–800 untuk headline.
- Hindari ALL CAPS pada kalimat panjang. Gunakan untuk badge singkat saja.
- Jangan gunakan font display dekoratif untuk isi roast.
- Terapkan `overflow-wrap: anywhere` atau penanganan setara pada teks hasil yang sangat panjang.
- Jaga line length hasil sekitar 60–75 karakter per baris di desktop jika memungkinkan.

## 7. Warna dan Token Semantik

Palet di bawah adalah **starter palette**. Kontras final wajib diuji pada kombinasi komponen aktual sebelum rilis. Jangan menganggap pasangan warna otomatis lolos WCAG hanya karena terlihat kontras.

### 7.1 Primitive palette

| Token | Nilai awal | Tujuan |
|---|---|---|
| `color-canvas` | `#101217` | Latar utama |
| `color-surface` | `#191D25` | Kartu dan panel |
| `color-surface-raised` | `#222835` | Panel yang lebih menonjol |
| `color-border` | `#353C4A` | Batas komponen |
| `color-text` | `#F4F6FA` | Teks utama |
| `color-text-muted` | `#B3BBC9` | Teks sekunder |
| `color-text-subtle` | `#8D97A8` | Metadata; hanya bila lolos kontras |
| `color-primary` | `#C7F36B` | Aksi primer dan highlight |
| `color-primary-pressed` | `#B2DF58` | State pressed/hover dengan kontras teruji |
| `color-accent` | `#FF8066` | Aksen humor atau highlight sekunder |
| `color-success` | `#7FE0B0` | Status berhasil |
| `color-warning` | `#FFD166` | Peringatan |
| `color-danger` | `#FF7A86` | Error dan tindakan destruktif |
| `color-focus` | `#E5FF9A` | Ring fokus keyboard |

### 7.2 Semantic tokens

| Token semantik | Dipetakan ke | Aturan |
|---|---|---|
| `bg-page` | `color-canvas` | Latar seluruh halaman |
| `bg-panel` | `color-surface` | Panel, form, hasil |
| `bg-panel-raised` | `color-surface-raised` | Popover atau elemen terangkat |
| `text-primary` | `color-text` | Teks utama |
| `text-secondary` | `color-text-muted` | Teks pendukung |
| `text-disabled` | nilai yang diuji | Jangan gunakan untuk konten yang masih wajib dibaca |
| `border-default` | `color-border` | Border standar |
| `action-primary-bg` | `color-primary` | Tombol utama |
| `action-primary-text` | warna gelap teruji | Teks tombol utama harus memiliki kontras cukup |
| `status-success` | `color-success` | Selalu sertai label/ikon atau teks |
| `status-warning` | `color-warning` | Selalu sertai label/ikon atau teks |
| `status-error` | `color-danger` | Selalu sertai pesan yang menjelaskan masalah |
| `focus-ring` | `color-focus` | Terlihat pada semua kontrol keyboard |

### 7.3 Aturan penggunaan warna

- Warna utama dipakai untuk tombol “Roast laptop gue” dan aksi primer yang paling penting.
- Aksen coral digunakan sebagai aksen, bukan untuk semua tombol.
- Error, warning, dan success harus memiliki ikon/teks, bukan warna saja.
- Jangan menempatkan teks kecil di atas aksen tanpa menguji kontras.
- Jangan memakai warna aksen sebagai satu-satunya pembeda antara input valid dan tidak valid.
- Target kontras minimal: 4.5:1 untuk teks normal dan 3:1 untuk teks besar serta komponen visual penting, mengikuti WCAG AA.

## 8. Shape, Border, dan Elevation

### 8.1 Radius

| Token | Nilai | Penggunaan |
|---|---:|---|
| `radius-sm` | 6 px | Badge kecil |
| `radius-md` | 10 px | Input dan tombol |
| `radius-lg` | 16 px | Kartu standar |
| `radius-xl` | 24 px | Hero atau kartu hasil utama |
| `radius-pill` | 999 px | Chip atau badge berbentuk kapsul |

Gunakan radius yang konsisten. Hindari mencampur banyak bentuk yang tidak memiliki fungsi.

### 8.2 Border dan elevation

- Gunakan border 1 px untuk membedakan panel dari latar.
- Elevation rendah; utamakan perbedaan permukaan dan border daripada bayangan besar.
- Shadow hanya untuk overlay/popover atau elemen yang benar-benar perlu tampak terangkat.
- Jangan gunakan glow neon sebagai indikator fokus keyboard.
- Kartu hasil boleh memiliki border aksen tipis, tetapi jangan membuat seluruh kartu menyala.

## 9. Iconography dan Imagery

### 9.1 Ikon

- Gunakan satu keluarga ikon outline yang konsisten, misalnya Lucide.
- Ukuran standar 16, 20, atau 24 px.
- Ikon dekoratif harus disembunyikan dari screen reader; ikon tombol harus memiliki nama aksesibel melalui teks atau label.
- Jangan memakai emoji sebagai pengganti ikon sistem untuk aksi kritis.
- Emoji boleh digunakan secara editorial pada hasil roast jika konteksnya mendukung, tetapi jangan berlebihan.

### 9.2 Imagery

- MVP tidak membutuhkan foto stok atau ilustrasi besar.
- Prioritaskan wordmark teks, tipografi, kartu, dan elemen grafis sederhana.
- Jika nanti ada kartu berbagi berbentuk gambar, desain harus tetap terbaca ketika dikompresi dan dilihat sebagai thumbnail.
- Jangan menggunakan gambar laptop bermerek tanpa kebutuhan dan izin yang sesuai.
- Hindari gambar latar yang mengurangi kontras teks atau memperlambat halaman.

## 10. Component Foundation

Komponen berikut adalah baseline untuk implementasi React/Tailwind. Setiap komponen perlu mendukung state dan aksesibilitas yang disebutkan.

### 10.1 Header

- Wordmark teks “AI Laptop Roaster”.
- Navigasi minimal; jangan menambahkan menu yang tidak mendukung MVP.
- Pada mobile, jangan membuat header terlalu tinggi.
- Jika ada tautan, gunakan target fokus keyboard yang terlihat.

### 10.2 Input mode selector

- Dua opsi: **Isi manual** dan **Tempel spesifikasi**.
- Tampilkan sebagai segmented control atau tab yang aksesibel.
- State aktif harus dapat dikenali lewat warna, bentuk, dan semantik aksesibel.
- Pergantian mode tidak boleh diam-diam menghapus input tanpa peringatan bila input akan hilang.

### 10.3 Text field dan textarea

- Label selalu terlihat; placeholder bukan pengganti label.
- Border dan background cukup berbeda dari panel.
- Tinggi input standar minimal 44 px; target sentuh minimal 44×44 CSS px.
- Textarea tempel spesifikasi memiliki tinggi awal memadai dan dapat diperbesar.
- Tampilkan hint batas karakter dan validasi yang spesifik.
- Error diletakkan dekat field terkait dan dikaitkan secara programatis.

### 10.4 Tombol

| Variant | Kegunaan | Tampilan |
|---|---|---|
| Primary | Generate roast | Latar lime, teks gelap teruji kontras, bobot font tegas |
| Secondary | Salin atau aksi pendukung | Surface/border netral |
| Tertiary / text | Aksi ringan | Tanpa permukaan dominan |
| Destructive | Hapus/bersihkan jika ada | Menggunakan semantic danger dan konfirmasi bila perlu |

Aturan:
- Label menyebutkan aksi, misalnya “Roast laptop gue”, “Salin roast”, atau “Coba lagi”.
- State disabled harus terlihat dan dijelaskan bila pengguna perlu melakukan sesuatu.
- Saat loading, cegah submit berulang dan tampilkan status yang jelas.
- Jangan membuat tombol primer dan sekunder sama-sama dominan.

### 10.5 Result card

Struktur yang disarankan:
1. Eyebrow atau label singkat, misalnya “HASIL ROAST”.
2. Headline/punchline utama.
3. Isi roast dalam paragraf atau bagian terstruktur.
4. Ringkasan spesifikasi yang digunakan bila relevan.
5. Tombol “Salin roast” dan “Bagikan”.
6. Catatan ringan bahwa hasil dibuat untuk hiburan.

Aturan:
- Berikan jarak paragraf yang cukup.
- Jangan mengunci output pada satu blok teks yang sulit diseleksi.
- Teks hasil harus dapat disalin dengan urutan baca yang masuk akal.
- Jika hasil panjang, pertimbangkan pembagian menjadi bagian seperti “Vonis”, “Bukti”, dan “Kesimpulan” hanya bila format respons AI memang mendukungnya.

### 10.6 Status dan feedback

- **Loading:** indikator progres sederhana dan teks “Lagi nyiapin roast…”.
- **Success:** feedback ringkas setelah salin/bagikan, misalnya “Roast berhasil disalin.”
- **Validation error:** jelaskan apa yang perlu diperbaiki.
- **Network/provider error:** pesan ramah, jangan tampilkan stack trace atau detail internal.
- **Rate limit:** jelaskan bahwa pengguna perlu menunggu sebelum mencoba lagi.
- Status dinamis diumumkan melalui live region yang sesuai tanpa mengganggu pembaca layar.

### 10.7 Toast

- Dipakai untuk konfirmasi singkat, bukan untuk pesan error penting yang harus tetap terlihat.
- Letakkan agar tidak menutupi tombol aksi pada mobile.
- Berikan durasi yang cukup untuk dibaca; jangan mengandalkan toast untuk informasi kritis.
- Pastikan pesan tetap dapat diakses melalui teknologi bantu.

### 10.8 Footer dan disclaimer

- Gunakan copy singkat dan tidak menakut-nakuti.
- Nyatakan bahwa output adalah hiburan dan berdasarkan spesifikasi yang dimasukkan.
- Jangan menjanjikan akurasi benchmark atau diagnosis teknis yang tidak dilakukan aplikasi.

## 11. Motion dan Feedback

### 11.1 Prinsip

- Motion bersifat fungsional, singkat, dan tidak menghambat tindakan.
- Gunakan transisi ringan untuk hover, focus, dan perubahan panel.
- Hindari animasi loop, parallax, glitch berat, atau efek yang membuat pengguna menunggu.

### 11.2 Timing awal

| Interaksi | Durasi awal | Catatan |
|---|---:|---|
| Hover/pressed | 100–160 ms | Jangan mengandalkan hover untuk mobile |
| Focus ring | 100–160 ms | Fokus harus langsung terlihat |
| Pergantian panel | 160–220 ms | Tidak wajib memakai animasi |
| Result reveal | 180–260 ms | Hormati reduced motion |
| Toast | Tanpa animasi berat | Pastikan konten tetap terbaca |

### 11.3 Reduced motion

Hormati `prefers-reduced-motion`. Dalam mode ini, hilangkan atau minimalkan gerakan nonesensial. Jangan membuat informasi hanya muncul setelah animasi selesai.

## 12. Responsive Behavior

| Breakpoint awal | Lebar | Aturan |
|---|---:|---|
| Small mobile | < 360 px | Hindari overflow; tombol bisa full-width |
| Mobile | 360–767 px | Satu kolom; CTA mudah dijangkau |
| Tablet | 768–1023 px | Lebar baca dibatasi; form tetap sederhana |
| Desktop | 1024–1439 px | Konten terpusat dengan max-width |
| Wide desktop | ≥ 1440 px | Jangan memperlebar teks tanpa batas |

Breakpoint adalah nilai awal dan dapat disesuaikan dengan implementasi Tailwind. Gunakan content-driven layout, bukan breakpoint semata.

### Aturan responsive

- Pada mobile, tombol aksi penting boleh full-width.
- Dua field yang berkaitan boleh berdampingan di desktop jika label tetap jelas; kembali menjadi satu kolom pada mobile.
- Hasil roast tidak boleh memaksa scroll horizontal.
- Hindari sticky CTA yang menutupi textarea atau hasil.
- Periksa keyboard virtual mobile, safe area, dan perubahan tinggi viewport.
- Test pada zoom 200% dan lebar setara 320 CSS px.

## 13. Accessibility

Target baseline: **WCAG 2.2 AA** sejauh relevan untuk aplikasi web.

Checklist implementasi:
- [ ] Semua field memiliki label programatis dan petunjuk yang jelas.
- [ ] Semua fungsi dapat dijalankan dengan keyboard.
- [ ] Focus indicator terlihat jelas dan tidak hanya bergantung pada perubahan warna tipis.
- [ ] Urutan fokus mengikuti urutan baca dan tindakan.
- [ ] Kontras teks normal minimal 4.5:1; teks besar dan elemen visual penting minimal 3:1.
- [ ] Target sentuh sekurangnya 24×24 CSS px sesuai minimum WCAG yang relevan; target desain diutamakan 44×44 px untuk kenyamanan.
- [ ] Error dijelaskan dalam teks dan dikaitkan ke field.
- [ ] Status loading/sukses/error diumumkan melalui pola live region yang sesuai.
- [ ] Konten hasil memiliki heading dan paragraf yang terstruktur.
- [ ] Tidak ada informasi yang hanya disampaikan melalui warna, animasi, atau hover.
- [ ] Layout tetap berfungsi pada zoom dan ukuran viewport kecil.
- [ ] `prefers-reduced-motion` dihormati.
- [ ] Tombol ikon saja memiliki accessible name yang jelas.
- [ ] Uji manual dengan keyboard dan setidaknya satu screen reader sebelum rilis.

## 14. Content Design dan Microcopy

### 14.1 Gaya bahasa

- Bahasa Indonesia sehari-hari, langsung, dan tidak bertele-tele.
- Istilah teknis tetap familiar: RAM, SSD, prosesor, GPU, generasi, baterai.
- Gunakan “kamu” atau gaya “gue/lo” secara konsisten dalam satu konteks; rekomendasi UI netral dengan CTA kasual.
- Humor diarahkan ke perangkat, spesifikasi, bottleneck, atau ekspektasi penggunaan.
- Hindari hinaan yang menyerang kondisi ekonomi, identitas sensitif, atau karakter pribadi pengguna.

### 14.2 Contoh microcopy

| Konteks | Copy awal |
|---|---|
| Headline | “Spesifikasi masuk. Harga diri laptop diuji.” |
| Subheadline | “Tempel spek laptopmu, lalu lihat seberapa pedas vonisnya.” |
| CTA primer | “Roast laptop gue” |
| Input manual | “Isi spesifikasi laptop” |
| Input tempel | “Tempel spesifikasi di sini” |
| Placeholder textarea | “Contoh: Core i5 gen 8, RAM 8 GB, SSD 256 GB…” |
| Hint | “Masukkan spesifikasi yang kamu tahu. Nggak harus lengkap.” |
| Loading | “Lagi nyiapin roast…” |
| Hasil | “Vonis sudah turun.” |
| Salin | “Salin roast” |
| Bagikan | “Bagikan” |
| Salin sukses | “Roast berhasil disalin.” |
| Input kosong | “Isi minimal satu detail spesifikasi dulu.” |
| Input terlalu panjang | “Teksnya kepanjangan. Ringkas spesifikasinya lalu coba lagi.” |
| Rate limit | “Santai dulu—terlalu banyak roast dalam waktu singkat. Coba lagi sebentar.” |
| Error umum | “Roast gagal dibuat kali ini. Coba lagi.” |
| Disclaimer | “Untuk hiburan, bukan pengganti evaluasi teknis profesional.” |

Copy adalah usulan awal dan perlu diuji agar sesuai brand voice serta perilaku aplikasi yang benar-benar diimplementasikan.

### 14.3 Aturan hasil AI

- UI harus mampu menampilkan hasil yang lebih pendek atau lebih panjang tanpa rusak.
- Jangan mengandalkan markdown dari model tanpa sanitasi dan renderer yang aman.
- Bila hasil dibagi menjadi bagian, heading harus konsisten dan tidak mengasumsikan jumlah bagian selalu sama.
- Jangan menampilkan klaim spesifikasi yang tidak diberikan atau tidak dapat disimpulkan dengan aman.
- Tombol salin harus memiliki fallback yang jelas jika API clipboard tidak tersedia.

## 15. Do / Don't

### Do

- [ ] Gunakan satu CTA primer yang dominan.
- [ ] Beri ruang cukup pada form dan hasil roast.
- [ ] Pastikan semua state—idle, loading, error, rate limit, success—dirancang.
- [ ] Gunakan copy yang singkat, lucu, dan tidak membingungkan.
- [ ] Pertahankan kontras dan fokus keyboard.
- [ ] Uji tampilan hasil dengan teks pendek, normal, dan sangat panjang.
- [ ] Buat hasil mudah disalin dan dibagikan dari mobile.

### Don't

- [ ] Jangan memenuhi halaman dengan neon, gradient, glow, atau animasi tanpa fungsi.
- [ ] Jangan menggunakan placeholder sebagai satu-satunya label.
- [ ] Jangan menyembunyikan error penting di toast singkat.
- [ ] Jangan membuat tombol salin/bagikan terlihat sama pentingnya dengan CTA generate sebelum hasil ada.
- [ ] Jangan membuat hasil AI menjadi teks kecil berkontras rendah.
- [ ] Jangan menampilkan pesan teknis internal, API key, stack trace, atau detail provider.
- [ ] Jangan menganggap roast sebagai evaluasi benchmark yang akurat.
- [ ] Jangan membuat klaim “data tidak disimpan” jika implementasi atau log belum menjaminnya.

## 16. Design Token Starter

Token berikut dapat dijadikan baseline untuk CSS variables/Tailwind theme. Nilai harus divalidasi dalam implementasi nyata dan boleh disesuaikan setelah pengujian kontras serta usability.

```css
:root {
  color-scheme: dark;

  --color-canvas: #101217;
  --color-surface: #191D25;
  --color-surface-raised: #222835;
  --color-border: #353C4A;

  --color-text: #F4F6FA;
  --color-text-muted: #B3BBC9;
  --color-text-subtle: #8D97A8;

  --color-primary: #C7F36B;
  --color-primary-pressed: #B2DF58;
  --color-accent: #FF8066;

  --color-success: #7FE0B0;
  --color-warning: #FFD166;
  --color-danger: #FF7A86;
  --color-focus: #E5FF9A;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;

  --radius-sm: 0.375rem;
  --radius-md: 0.625rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-pill: 999px;

  --font-body: Inter, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", sans-serif;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
}
```

### 16.1 Token implementation notes

- Pastikan warna teks tombol primary dipilih dan diuji untuk kontras terhadap `--color-primary`.
- Token `color-text-subtle` hanya digunakan untuk teks nonkritis setelah pemeriksaan kontras.
- Jika kelak menambah light mode, buat token semantik terpisah; jangan sekadar membalik warna.
- Hindari hardcode warna di banyak komponen. Gunakan token semantik agar perubahan tema terkontrol.

## 17. Quality Gate dan Checklist

Sebelum design foundation disetujui dan dipakai untuk Google Stitch:

- [ ] Arah visual konsisten dengan positioning “Tech Editorial + Playful Roast”.
- [ ] CTA primer jelas pada mobile dan desktop.
- [ ] Form input manual dan paste memiliki hierarchy yang konsisten.
- [ ] Result card tetap terbaca pada hasil singkat dan panjang.
- [ ] Semua state penting telah tercakup.
- [ ] Palet diuji untuk kontras WCAG AA pada teks, tombol, border, dan focus ring.
- [ ] Komponen berfungsi tanpa hover dan dengan keyboard.
- [ ] Layout tidak overflow pada lebar 320 CSS px dan zoom 200%.
- [ ] Reduced motion diterapkan.
- [ ] Microcopy konsisten dalam Bahasa Indonesia.
- [ ] Tidak ada klaim privasi atau akurasi yang belum didukung implementasi.
- [ ] Design tokens siap diterjemahkan ke CSS variables atau Tailwind theme.

## 18. Asumsi dan Keputusan Terbuka

### 18.1 Asumsi

- MVP menggunakan tema gelap sebagai satu-satunya tema awal.
- Brand belum memiliki logo final; wordmark teks cukup untuk MVP.
- Tidak ada kebutuhan ilustrasi kustom atau aset visual berlisensi pada rilis awal.
- Bahasa UI utama adalah Bahasa Indonesia dengan nada kasual.
- Prioritas desain adalah form → hasil roast → copy/share.

### 18.2 Keputusan terbuka

| ID | Keputusan | Rekomendasi awal | Kapan diputuskan |
|---|---|---|---|
| `DS-01` | Tema awal | Dark-only untuk MVP | Sebelum implementasi visual |
| `DS-02` | Font final | Inter atau system sans-serif | Saat setup UI |
| `DS-03` | Wordmark/logo | Wordmark teks | MVP; logo khusus dapat menyusul |
| `DS-04` | Share-card image | Tidak termasuk MVP; gunakan Web Share/copy | Saat scope sharing dikunci |
| `DS-05` | Aksen warna final | Lime + coral, setelah uji kontras | Sebelum visual QA |

## Status Dokumen

- **Artefak:** Design Foundation / `DESIGN.md`
- **Versi:** 1.0
- **Status:** Draft siap ditinjau
- **Tahap berikutnya:** Google Stitch Prompts, dimulai dari layar utama/input sesuai urutan screen inventory UX Architecture.
- **Catatan:** Ini adalah spesifikasi desain, bukan hasil mockup final. Prompt Stitch berikutnya harus merujuk dokumen ini, PRD, dan UX Architecture.

---
**Akhir dokumen.**
