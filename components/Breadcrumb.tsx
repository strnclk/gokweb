import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export type Crumb = { label: string; href?: string };

/**
 * Site geneli breadcrumb (Anasayfa > Kategori > Sayfa).
 * Temalı arka planla uyumlu olması için sayfanın ilk (renkli) bölümünün
 * içine, en üste yerleştirilir — ayrı beyaz şerit kullanılmaz.
 *
 * accentClass: link hover rengi TAM statik sınıf olarak verilir
 * (ör. "hover:text-amber-600") — Tailwind JIT'in üretebilmesi için
 * dinamik birleştirme yerine sayfa dosyasında birebir string geçilir.
 */
export default function Breadcrumb({
  items,
  accentClass = 'hover:text-blue-600',
  className = '',
  light = false,
}: {
  items: Crumb[];
  accentClass?: string;
  className?: string;
  /** Koyu/renkli hero üzerinde açık renkli metin için. */
  light?: boolean;
}) {
  const baseText = light ? 'text-white/70' : 'text-slate-500';
  const currentText = light ? 'text-white font-bold' : 'text-slate-900 font-bold';
  const chevronColor = light ? 'text-white/50' : 'text-slate-400';
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-2 text-xs sm:text-sm ${baseText} font-medium ${className}`}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <ChevronRight size={14} className={`${chevronColor} flex-shrink-0`} />}
            {item.href && !isLast ? (
              <Link href={item.href} className={`${accentClass} transition-colors`}>
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? currentText : baseText}>{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
