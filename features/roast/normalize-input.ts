import { RoastInput } from './schemas';

/**
 * Membersihkan dan menyusun spesifikasi menjadi teks bersih yang siap diproses oleh LLM.
 */
export function formatSpecsForPrompt(input: RoastInput): string {
  if (input.mode === 'paste') {
    return (input.pastedSpecs || '').trim();
  }

  const parts: string[] = [];

  if (input.cpu?.trim()) {
    parts.push(`- Prosesor (CPU): ${input.cpu.trim()}`);
  }
  if (input.gpu?.trim()) {
    parts.push(`- Kartu Grafis (GPU): ${input.gpu.trim()}`);
  } else {
    parts.push(`- Kartu Grafis (GPU): Tidak disebutkan / Grafis bawaan`);
  }
  if (input.ram?.trim()) {
    parts.push(`- RAM: ${input.ram.trim()}`);
  }
  if (input.storage?.trim()) {
    parts.push(`- Storage: ${input.storage.trim()}`);
  }
  if (input.usage?.trim()) {
    parts.push(`- Sering Dipakai Buat: ${input.usage.trim()}`);
  }

  return parts.join('\n');
}
