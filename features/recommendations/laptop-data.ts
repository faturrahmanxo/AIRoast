export interface LaptopRecommendation {
  id: string;
  category: 'Budget Pelajar' | 'Produktivitas & Desain' | 'Gaming & Rendering' | 'Flagship Tipis';
  name: string;
  priceFormatted: string;
  priceNumeric: number;
  useCases: ('kuliah' | 'office' | 'coding' | 'desain' | 'gaming' | 'render')[];
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
    priceFormatted: 'Rp 4.899.000',
    priceNumeric: 4899000,
    useCases: ['kuliah', 'office', 'coding'],
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
    useCases: ['kuliah', 'office'],
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
    id: 'advan-workplus',
    category: 'Produktivitas & Desain',
    name: 'Advan Workplus AMD Ryzen 5',
    priceFormatted: 'Rp 6.999.000',
    priceNumeric: 6999000,
    useCases: ['kuliah', 'office', 'coding', 'desain'],
    specs: {
      cpu: 'AMD Ryzen 5 6600H (6 Core / 12 Thread, 45W TDP)',
      ram: '16 GB LPDDR5 6400MHz Dual Channel',
      storage: '512 GB SSD PCIe 4.0 (2 slot NVMe)',
      gpu: 'AMD Radeon 660M (RDNA2)',
      display: '14" Full HD+ (1920x1200) IPS 16:10, 100% sRGB',
      weight: '1.40 kg',
    },
    highlight: 'Juara harga 6-7 jutaan: prosesor seri H kencang, RAM 16GB LPDDR5, layar 100% sRGB, dan bodi metal premium.',
  },
  {
    id: 'axioo-pongo-725',
    category: 'Gaming & Rendering',
    name: 'Axioo Pongo 725 Gaming',
    priceFormatted: 'Rp 8.999.000',
    priceNumeric: 8999000,
    useCases: ['gaming', 'render', 'coding', 'desain'],
    specs: {
      cpu: 'Intel Core i7-12650H (10 Core / 16 Thread)',
      ram: '16 GB DDR4 3200MHz Dual Channel',
      storage: '512 GB SSD NVMe PCIe Gen 4',
      gpu: 'Nvidia GeForce RTX 2050 4GB GDDR6',
      display: '15.6" FHD (1920x1080) IPS 144Hz',
      weight: '2.15 kg',
    },
    highlight: 'Laptop gaming Core i7 + RTX termurah di bawah 9 juta. Sanggup libas Valorant, GTA V, dan render Premiere.',
  },
  {
    id: 'asus-vivobook-14x-oled',
    category: 'Produktivitas & Desain',
    name: 'Asus Vivobook 14X OLED K3405VC',
    priceFormatted: 'Rp 10.499.000',
    priceNumeric: 10499000,
    useCases: ['desain', 'render', 'coding', 'kuliah'],
    specs: {
      cpu: 'Intel Core i5-13500H (12 Core / 16 Thread, 45W TDP)',
      ram: '16 GB DDR4 (Dual Channel)',
      storage: '512 GB SSD NVMe PCIe 4.0',
      gpu: 'Nvidia GeForce RTX 3050 4GB GDDR6',
      display: '14" 2.8K (2880x1800) OLED 90Hz, 100% DCI-P3',
      weight: '1.45 kg',
    },
    highlight: 'Layar OLED 2.8K akurasi warna mutlak (100% DCI-P3), dipadu i5 seri H dan GPU RTX untuk video editor dan desainer.',
  },
  {
    id: 'asus-tuf-a15',
    category: 'Gaming & Rendering',
    name: 'Asus TUF Gaming A15 FA506NC',
    priceFormatted: 'Rp 11.499.000',
    priceNumeric: 11499000,
    useCases: ['gaming', 'render', 'coding'],
    specs: {
      cpu: 'AMD Ryzen 5 7535HS (6 Core / 12 Thread, Zen 3+)',
      ram: '16 GB DDR5 4800MHz',
      storage: '512 GB SSD NVMe PCIe 4.0',
      gpu: 'Nvidia GeForce RTX 3050 4GB GDDR6',
      display: '15.6" FHD 144Hz IPS Anti-Glare',
      weight: '2.30 kg',
    },
    highlight: 'Ketahanan standar militer MIL-STD-810H, baterai awet, dan performa stabil untuk gaming kompetitif harian.',
  },
  {
    id: 'acer-swift-go-14-oled',
    category: 'Flagship Tipis',
    name: 'Acer Swift Go 14 OLED (SFG14-72)',
    priceFormatted: 'Rp 11.999.000',
    priceNumeric: 11999000,
    useCases: ['coding', 'desain', 'office', 'kuliah'],
    specs: {
      cpu: 'Intel Core Ultra 5 125H (14 Core / 18 Thread dengan NPU AI)',
      ram: '16 GB LPDDR5X 6400MHz',
      storage: '512 GB SSD NVMe PCIe Gen 4',
      gpu: 'Intel Arc Graphics (7 Xe-cores)',
      display: '14" 2.8K (2880x1800) OLED 90Hz 500 nits',
      weight: '1.32 kg',
    },
    highlight: 'Ultrabook tipis dengan Intel Core Ultra terbaru, NPU pemrosesan AI lokal, baterai tahan lama, dan grafis Intel Arc kencang.',
  },
  {
    id: 'lenovo-loq-15',
    category: 'Gaming & Rendering',
    name: 'Lenovo LOQ 15IAX9',
    priceFormatted: 'Rp 12.899.000',
    priceNumeric: 12899000,
    useCases: ['gaming', 'render', 'coding'],
    specs: {
      cpu: 'Intel Core i5-12450HX (8 Core / 12 Thread, up to 4.4GHz)',
      ram: '12 GB DDR5 4800MHz (Upgradeable)',
      storage: '512 GB SSD NVMe PCIe 4.0',
      gpu: 'Nvidia GeForce RTX 3050 6GB GDDR6 (95W TGP)',
      display: '15.6" FHD (1920x1080) IPS 144Hz 100% sRGB',
      weight: '2.38 kg',
    },
    highlight: 'Laptop gaming entry paling seimbang dengan cooling sistem Legion, layar 100% sRGB, dan VRAM 6GB lega.',
  },
  {
    id: 'hp-victus-15-rtx4050',
    category: 'Gaming & Rendering',
    name: 'HP Victus 15 fb2026AX (RTX 4050)',
    priceFormatted: 'Rp 13.999.000',
    priceNumeric: 13999000,
    useCases: ['gaming', 'render', 'coding'],
    specs: {
      cpu: 'AMD Ryzen 5 8645HS (6 Core / 12 Thread, Zen 4 dengan Ryzen AI)',
      ram: '16 GB DDR5 5600MHz Dual Channel',
      storage: '512 GB SSD NVMe PCIe 4.0',
      gpu: 'Nvidia GeForce RTX 4050 6GB GDDR6 (DLSS 3 Frame Gen)',
      display: '15.6" FHD IPS 144Hz 300 nits',
      weight: '2.29 kg',
    },
    highlight: 'Performa monster dengan RTX 4050 berfitur DLSS 3 Frame Generation. Game berat apapun dilibas lancar 60+ FPS.',
  },
];

/**
 * Filter laptop recommendations based on user budget and desired use-case.
 */
export function filterLaptopRecommendations(options: {
  maxBudget?: number;
  useCase?: string;
  customKeyword?: string;
}): LaptopRecommendation[] {
  const { maxBudget, useCase, customKeyword } = options;

  return LAPTOP_RECOMMENDATIONS.filter((laptop) => {
    // Budget filter
    if (maxBudget && maxBudget > 0) {
      if (laptop.priceNumeric > maxBudget) return false;
    }

    // Use-case filter
    if (useCase && useCase !== 'semua') {
      const matchUseCase = laptop.useCases.includes(useCase as any);
      if (!matchUseCase) return false;
    }

    // Custom keyword search
    if (customKeyword && customKeyword.trim().length > 0) {
      const kw = customKeyword.toLowerCase().trim();
      const match =
        laptop.name.toLowerCase().includes(kw) ||
        laptop.specs.cpu.toLowerCase().includes(kw) ||
        laptop.specs.gpu.toLowerCase().includes(kw) ||
        laptop.highlight.toLowerCase().includes(kw) ||
        laptop.category.toLowerCase().includes(kw);
      if (!match) return false;
    }

    return true;
  });
}
