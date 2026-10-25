export interface LaptopRecommendation {
  id: string;
  category: 'Budget Pelajar' | 'Produktivitas & Desain' | 'Gaming & Rendering' | 'Flagship Tipis';
  name: string;
  priceFormatted: string;
  priceNumeric: number;
  specs: {
    cpu: string;
    ram: string;
    storage: string;
    gpu: string;
    display: string;
    weight: string;
  };
  highlight: string;
}

export const LAPTOP_RECOMMENDATIONS: LaptopRecommendation[] = [
  {
    id: 'axioo-hype-5',
    category: 'Budget Pelajar',
    name: 'Axioo Hype 5 AMD',
    priceFormatted: 'Rp 4.999.000',
    priceNumeric: 4999000,
    specs: {
      cpu: 'AMD Ryzen 5 5500U (6 Core / 12 Thread)',
      ram: '8 GB DDR4 (Upgradeable dual-slot)',
      storage: '256 GB SSD NVMe PCIe',
      gpu: 'AMD Radeon Vega 7 Graphics',
      display: '14" Full HD (1920x1080) IPS',
      weight: '1.41 kg',
    },
    highlight: 'Budget di bawah 5 juta terbaik dengan prosesor 6-core 12-thread dan RAM yang bisa di-upgrade.',
  },
  {
    id: 'lenovo-ideapad-slim-3',
    category: 'Budget Pelajar',
    name: 'Lenovo IdeaPad Slim 3 14IAU7',
    priceFormatted: 'Rp 5.499.000',
    priceNumeric: 5499000,
    specs: {
      cpu: 'Intel Core i3-1215U (6 Core / 8 Thread, up to 4.4GHz)',
      ram: '8 GB DDR4 (1 slot SODIMM kosong)',
      storage: '512 GB SSD NVMe PCIe 4.0',
      gpu: 'Intel UHD Graphics',
      display: '14" Full HD (1920x1080) IPS 300 nits',
      weight: '1.43 kg',
    },
    highlight: 'Pilihan paling stabil dan awet untuk tugas kuliah, skripsi, dan multitasking kantor harian.',
  },
  {
    id: 'asus-vivobook-14x-oled',
    category: 'Produktivitas & Desain',
    name: 'Asus Vivobook 14X OLED K3405VC',
    priceFormatted: 'Rp 9.999.000',
    priceNumeric: 9999000,
    specs: {
      cpu: 'Intel Core i5-13500H (12 Core / 16 Thread, 45W TDP)',
      ram: '16 GB DDR4 (Dual Channel)',
      storage: '512 GB SSD NVMe PCIe 4.0',
      gpu: 'Intel Iris Xe Graphics (opsional RTX 3050)',
      display: '14" 2.8K (2880x1800) OLED 90Hz, 100% DCI-P3',
      weight: '1.45 kg',
    },
    highlight: 'Layar OLED 2.8K akurasi warna tinggi dipadukan prosesor H-series kencang untuk editing foto dan video.',
  },
  {
    id: 'acer-swift-go-14-oled',
    category: 'Produktivitas & Desain',
    name: 'Acer Swift Go 14 OLED (SFG14-72)',
    priceFormatted: 'Rp 11.799.000',
    priceNumeric: 11799000,
    specs: {
      cpu: 'Intel Core Ultra 5 125H (14 Core / 18 Thread dengan NPU AI)',
      ram: '16 GB LPDDR5X 6400MHz',
      storage: '512 GB SSD NVMe PCIe Gen 4',
      gpu: 'Intel Arc Graphics (7 Xe-cores)',
      display: '14" 2.8K (2880x1800) OLED 90Hz 500 nits',
      weight: '1.32 kg',
    },
    highlight: 'Ultrabook tipis dengan arsitektur Intel Core Ultra terbaru, grafis Intel Arc kencang, dan baterai tahan lama.',
  },
  {
    id: 'lenovo-loq-15',
    category: 'Gaming & Rendering',
    name: 'Lenovo LOQ 15IAX9',
    priceFormatted: 'Rp 12.899.000',
    priceNumeric: 12899000,
    specs: {
      cpu: 'Intel Core i5-12450HX (8 Core / 12 Thread, up to 4.4GHz)',
      ram: '12 GB DDR5 4800MHz (Upgradeable)',
      storage: '512 GB SSD NVMe PCIe 4.0',
      gpu: 'Nvidia GeForce RTX 3050 6GB GDDR6 (95W TGP)',
      display: '15.6" FHD (1920x1080) IPS 144Hz 100% sRGB',
      weight: '2.38 kg',
    },
    highlight: 'Laptop gaming entry paling seimbang dengan cooling sistem Legion, layar 100% sRGB, dan TGP GPU maksimal.',
  },
  {
    id: 'asus-tuf-a15',
    category: 'Gaming & Rendering',
    name: 'Asus TUF Gaming A15 FA506NC',
    priceFormatted: 'Rp 11.499.000',
    priceNumeric: 11499000,
    specs: {
      cpu: 'AMD Ryzen 5 7535HS (6 Core / 12 Thread, Zen 3+)',
      ram: '16 GB DDR5 4800MHz',
      storage: '512 GB SSD NVMe PCIe 4.0',
      gpu: 'Nvidia GeForce RTX 3050 4GB GDDR6',
      display: '15.6" FHD 144Hz IPS Anti-Glare',
      weight: '2.30 kg',
    },
    highlight: 'Ketahanan standar militer MIL-STD-810H, baterai efisien, dan performa stabil untuk gaming kompetitif.',
  },
];
