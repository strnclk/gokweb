import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Wallet, CalendarRange, ClipboardCheck, BarChart3, ArrowRight, Sparkles, Layers, Check } from 'lucide-react';

const SITE = 'https://gokkusagiyazilim.com.tr';

export const metadata: Metadata = {
  title: 'Bütçe Merkezi (Budget Lab) | E-Flow | Gökkuşağı Yazılım',
  description:
    'Bütçe Merkezi; bütçe tanımlarının, dönemsel planların, gerçekleşen değerlerin ve onay süreçlerinin tek bir çalışma alanında daha düzenli biçimde takip edilmesine yardımcı olur.',
  keywords:
    'bütçe merkezi, budget lab, bütçe takibi, bütçe planlama, dönemsel bütçe, onay süreci, bütçe raporlama, E-Flow, Gökkuşağı Yazılım',
  alternates: { canonical: `${SITE}/eflow-butce-merkezi` },
  openGraph: {
    title: 'Bütçe Merkezi (Budget Lab) | E-Flow',
    description:
      'Bütçe tanımları, dönemsel planlar, gerçekleşen değerler ve onay süreçleri için ortak bir çalışma alanı.',
    url: `${SITE}/eflow-butce-merkezi`,
    type: 'website',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bütçe Merkezi (Budget Lab)',
  serviceType: 'Bütçe Planlama ve Takip',
  description:
    'Bütçe tanımları, dönemsel planlar, gerçekleşen değerler ve onay süreçlerinin tek bir çalışma alanında takip edilmesine yardımcı olan çözüm.',
  provider: { '@type': 'Organization', name: 'Gökkuşağı Yazılım ve Danışmanlık', url: SITE },
  areaServed: { '@type': 'City', name: 'İstanbul' },
};

const ozellikler = [
  {
    icon: Wallet,
    title: 'Bütçe Tanımları',
    desc: 'Ana başlık, alt başlık, yıl, ay, adet veya tutar gibi bilgiler üzerinden bütçe kayıtları hazırlanabilir.',
  },
  {
    icon: CalendarRange,
    title: 'Dönemsel Takip',
    desc: 'Planlanan ve gerçekleşen değerler aylık ya da yıllık dönemler üzerinden karşılaştırılabilir.',
  },
  {
    icon: ClipboardCheck,
    title: 'Onay Süreçleri',
    desc: 'Hazırlanan bütçeler ilgili kullanıcıların değerlendirme ve onay adımlarına yönlendirilebilir.',
  },
  {
    icon: BarChart3,
    title: 'Raporlama',
    desc: 'Bütçe dağılımları, kalan tutarlar ve gerçekleşme oranları özet raporlar üzerinden incelenebilir.',
  },
];

const adimlar = [
  { no: '01', title: 'Tanımlama', desc: 'Bütçe başlıkları ve dönem bilgileri tanımlanır.' },
  { no: '02', title: 'Planlama', desc: 'Adet veya tutar bazlı planlar oluşturulur.' },
  { no: '03', title: 'Takip & Rapor', desc: 'Kayıtlar takip, değerlendirme ve raporlama süreçlerinde kullanılır.' },
];

export default function ButceMerkeziPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Navbar />

      {/* 1. Karşılama */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#fcfdff] to-[#f2f8f9] pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#40949c]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Sol: metin */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#40949c]/10 border border-[#40949c]/20 rounded-full text-[#40949c] text-sm font-semibold mb-6">
              <Sparkles size={14} />
              <span>E-Flow Çözümü</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4 text-slate-900 tracking-tight">
              Bütçe Merkezi{' '}
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-400 whitespace-nowrap">(Budget Lab)</span>
            </h1>

            <p className="text-xl sm:text-2xl font-bold mb-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-[#40949c] bg-clip-text text-transparent">
              Bütçe Süreçlerinizi Tek Bir Merkezden İzleyin
            </p>

            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Bütçe Merkezi; bütçe tanımlarının, dönemsel planların, gerçekleşen değerlerin ve onay süreçlerinin daha düzenli biçimde takip edilmesine yardımcı olan bir çalışma alanıdır.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 items-center justify-center lg:justify-start w-full sm:w-auto">
              <a
                href="#ornek-gorunum"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-[#40949c] text-white rounded-2xl font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Bütçe Merkezini Keşfedin
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-slate-800 border border-slate-200 rounded-2xl font-bold text-base hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 w-full sm:w-auto"
              >
                Bilgi Alın
              </Link>
            </div>
          </div>

          {/* Sağ: sade bütçe ekranı (örnek) */}
          <div className="lg:col-span-6 w-full animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#40949c]/10 to-blue-500/10 rounded-[2.5rem] blur-2xl" />
              <div className="relative bg-white border border-slate-200/70 rounded-3xl shadow-2xl shadow-[#40949c]/10 p-5 sm:p-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-[#40949c] text-white flex items-center justify-center">
                      <Wallet size={16} />
                    </div>
                    <span className="text-sm font-bold text-slate-800">Bütçe Merkezi</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-wide">Özet</span>
                </div>

                <div className="grid grid-cols-3 gap-2.5 mb-4">
                  {['Planlanan', 'Gerçekleşen', 'Kalan'].map((l) => (
                    <div key={l} className="rounded-xl border border-slate-100 bg-slate-50/60 p-3">
                      <p className="text-[9px] font-bold uppercase tracking-wide text-slate-400">{l}</p>
                      <div className="mt-2 h-2.5 w-full rounded-full bg-gradient-to-r from-slate-200 to-slate-100" />
                    </div>
                  ))}
                </div>

                {/* Kategori dağılımı — planlanan/gerçekleşen (sayı içermez) */}
                <div className="rounded-xl border border-slate-100 bg-slate-50/40 p-3.5 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-slate-600">Kategori Dağılımı</span>
                    <div className="flex items-center gap-2.5 text-[9px] font-semibold text-slate-400">
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500/40" />Planlanan</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#40949c]" />Gerçekleşen</span>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { k: 'Pazarlama', w1: 'w-[88%]', w2: 'w-[62%]' },
                      { k: 'Operasyon', w1: 'w-[72%]', w2: 'w-[64%]' },
                      { k: 'İnsan Kaynakları', w1: 'w-[56%]', w2: 'w-[40%]' },
                    ].map((r) => (
                      <div key={r.k}>
                        <p className="text-[10px] font-semibold text-slate-500 mb-1">{r.k}</p>
                        <div className="relative h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div className={`absolute inset-y-0 left-0 rounded-full bg-blue-500/30 ${r.w1}`} />
                          <div className={`absolute inset-y-0 left-0 rounded-full bg-[#40949c] ${r.w2}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-white p-3">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-500 mb-2">
                    <span>Genel Gerçekleşme</span>
                    <span className="text-[#40949c]">Dönem içi</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100">
                    <div className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-[#40949c] w-[68%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Kısa özellikler */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">Bütçe Merkezi Ne Sunar?</h2>
            <p className="text-slate-600 leading-relaxed">
              Planlama, dönemsel takip, onay ve raporlamayı tek bir düzen içinde bir araya getirir.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ozellikler.map((o) => (
              <div
                key={o.title}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#40949c]/10 text-[#40949c] flex items-center justify-center mb-4">
                  <o.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">{o.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Örnek görünüm */}
      <section id="ornek-gorunum" className="scroll-mt-16 py-12 md:py-16 bg-[#fafbfc] border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 pt-1">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#40949c] bg-[#40949c]/10 px-3.5 py-1 rounded-full inline-block">
              Yapı ve Kavramlar
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-4 mb-3">
              Bütçe Merkezi Nasıl Bir Yapı Sunar?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Bütçe Merkezi, bütçe yönetimine dair temel kavramları tek bir düzen içinde bir araya getirir.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {/* Sol: genel tespit ve tanım */}
            <div className="space-y-5">
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="text-base font-bold text-slate-900 mb-2">Dağınık Bütçelerden Ortak Bir Düzene</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Bütçe bilgileri çoğu zaman farklı dosyalarda ve farklı kişilerde dağınık biçimde tutulabilir. Ortak bir çalışma alanı, bu bilgilerin daha tutarlı ve izlenebilir bir yapıda ele alınmasına yardımcı olabilir.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="text-base font-bold text-slate-900 mb-2">Planlama ile Uygulama Arasındaki İlişki</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Bütçe yönetiminde temel yaklaşım; hedeflenen değerler ile zaman içinde oluşan değerlerin ayrı ayrı ele alınmasıdır. Bu ayrım, planlama ile uygulama arasındaki genel ilişkinin gözlemlenmesine olanak tanır.
                </p>
              </div>
            </div>

            {/* Sağ: bir bütçe kaydının yapısı (sayı içermez) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-[#40949c] text-white flex items-center justify-center">
                  <Layers size={16} />
                </div>
                <span className="text-sm font-bold text-slate-800">Bir Bütçe Kaydının Yapısı</span>
              </div>
              <ul className="space-y-3.5">
                {[
                  { k: 'Ana Başlık & Alt Başlık', v: 'Bütçenin ait olduğu grup ve kırılım.' },
                  { k: 'Dönem', v: 'Yıllık ya da aylık zaman aralığı.' },
                  { k: 'Bütçe Türü', v: 'Adet veya tutar bazlı tanımlama.' },
                  { k: 'Planlanan ve Gerçekleşen', v: 'Hedeflenen ve oluşan değerlerin ayrımı.' },
                  { k: 'Durum', v: 'Hazırlık, değerlendirme ve onay aşamaları.' },
                ].map((item) => (
                  <li key={item.k} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#40949c]/10 text-[#40949c] flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{item.k}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.v}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Kısa kullanım */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Bütçe Süreci Nasıl İlerler?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {adimlar.map((a) => (
              <div key={a.no} className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6">
                <span className="text-4xl font-black bg-gradient-to-br from-blue-600 to-[#40949c] bg-clip-text text-transparent">{a.no}</span>
                <h3 className="text-base font-bold text-slate-900 mt-3 mb-1.5">{a.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Kapanış */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-[#f2f8f9] border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Bütçe Yapınıza Uygun Bir Çalışma Alanı Oluşturun
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Bütçe Merkezi, işletmenin mevcut süreçleri ve raporlama ihtiyaçları doğrultusunda farklı kullanım senaryolarına uyarlanabilir.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-[#40949c] text-white rounded-2xl font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Çözüm Hakkında Bilgi Alın
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
