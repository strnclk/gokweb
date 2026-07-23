import { CheckCircle } from 'lucide-react';
import { ilceler } from '@/lib/ilceler';
import GoogleReviewInline from '@/components/GoogleReviewInline';

// Sunucu bileşeni: 'use client' YOK — statik HTML olarak basılır, SEO'ya doğrudan katkı.
// Tipografi sitenin baskın konvansiyonuna (AboutSection) göre: başlıklar font-bold text-gray-900,
// gövde text-lg text-gray-600, listeler CheckCircle ikonlu.
export default function IlceSEOContent({ ilce }: { ilce: string }) {
  const d = ilceler[ilce];
  if (!d) return null;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: d.sss.map((f) => ({
      '@type': 'Question',
      name: f.s,
      acceptedAnswer: { '@type': 'Answer', text: f.c },
    })),
  };

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Başlık + giriş + Öne Çıkan Çözümler sayfaya göre ortalanır */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          {d.ad}&apos;da Mikro Bayi ve ERP Çözümleri
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl mx-auto text-center">{d.giris}</p>

        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Öne Çıkan Çözümler</h3>
        <ul className="space-y-4 mb-12 w-fit mx-auto">
          {d.odak.map((o, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-gray-600 leading-relaxed">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>{o}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-20 text-center">Sıkça Sorulan Sorular</h3>
        <div className="space-y-3 max-w-4xl mx-auto">
          {d.sss.map((f, i) => (
            <details key={i} className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                <h4 className="text-lg font-bold text-gray-900">{f.s}</h4>
                <svg className="w-5 h-5 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-lg text-gray-600 leading-relaxed">{f.c}</p>
            </details>
          ))}
        </div>

        {/* Yerel güven: Google değerlendirme daveti (masaüstünde QR / mobilde buton) */}
        <GoogleReviewInline variant="card" className="mt-16 max-w-4xl mx-auto" />
      </div>
    </section>
  );
}
