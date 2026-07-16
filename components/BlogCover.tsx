import { Layers, Building2, Cpu, Rocket, Receipt, Calculator, Database, Sparkles, type LucideIcon } from 'lucide-react';

// Kategoriye göre kapak ikonu. Görsel dosyası değil, SVG/CSS ile üretilir:
// telif yok, anında yüklenir, statik export'ta sorunsuz, her ekranda net.
const KATEGORI_IKON: Record<string, LucideIcon> = {
  'ERP': Layers,
  'Sektörel Çözümler': Building2,
  'Dijital Dönüşüm': Cpu,
  'Mikro Ürünler': Rocket,
  'e-Dönüşüm': Receipt,
  'Muhasebe ve Finans': Calculator,
  'Mikro Tablolar': Database,
};

interface BlogCoverProps {
  gradient: string;
  category: string;
  className?: string;
  iconClassName?: string;
}

export default function BlogCover({
  gradient,
  category,
  className = '',
  iconClassName = 'w-20 h-20',
}: BlogCoverProps) {
  const Icon = KATEGORI_IKON[category] ?? Sparkles;

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
    >
      {/* Yumuşak dekoratif şekiller */}
      <div className="absolute -top-10 -right-8 w-40 h-40 rounded-full bg-white/10" />
      <div className="absolute -bottom-12 -left-6 w-36 h-36 rounded-full bg-white/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl border border-white/20 rotate-12" />
      {/* Kategori ikonu (filigran) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className={`${iconClassName} text-white/90`} strokeWidth={1.5} />
      </div>
    </div>
  );
}
