import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Laptop Roaster — Uji Nyali & Penderitaan Laptopmu!',
  description: 'Web app hiburan AI berbahasa Indonesia untuk me-roast spesifikasi laptop secara brutal, kocak, dan membuka tabir bottleneck hardware tanpa ampun.',
  keywords: ['roast laptop', 'ai roast', 'laptop kentang', 'cek spek laptop', 'ai laptop roaster'],
  openGraph: {
    title: 'AI Laptop Roaster — Vonis Resmi Penderitaan Laptopmu!',
    description: 'Masukkan spek laptop dan biarkan AI membongkar dosa hardware serta kompromi performanya tanpa ampun.',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#101217] text-[#F4F6FA] selection:bg-[#C7F36B] selection:text-[#101217]">
        {children}
      </body>
    </html>
  );
}
