import {
  Workflow,
  FileText,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Database,
  Users,
  Layers,
  ShieldCheck,
  ChevronRight,
  Cpu,
  FileSpreadsheet,
  ArrowRightLeft,
  Coins,
  Route,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import ProcessSimulator from './ProcessSimulator';
import { categories, processes, sss, type Category } from './processes';

const SITE = 'https://gokkusagiyazilim.com.tr';

const CATEGORY_ICONS: Record<Category['icon'], LucideIcon> = {
  coins: Coins,
  layers: Layers,
  workflow: Workflow,
  trending: TrendingUp,
  users: Users,
  cpu: Cpu,
};

export default function EflowSurecleriPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'E-Flow İş Süreçleri Otomasyonu',
    serviceType: 'Süreç Otomasyonu ve Onay Akışı Yönetimi',
    description:
      'Satın alma, e-fatura onay, İK izin ve masraf yönetimi süreçlerinin kodsuz olarak otomatikleştirilmesi ve ERP entegrasyonu.',
    provider: {
      '@type': 'Organization',
      name: 'Gökkuşağı Yazılım ve Danışmanlık',
      url: SITE,
    },
    areaServed: { '@type': 'City', name: 'İstanbul' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'E-Flow Süreç Kataloğu',
      itemListElement: processes.map((process) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: process.name,
          description: process.shortDesc,
        },
      })),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'E-Flow', item: `${SITE}/eflow` },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'E-Flow Süreçleri',
        item: `${SITE}/eflow-surecleri`,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sss.map((f) => ({
      '@type': 'Question',
      name: f.soru,
      acceptedAnswer: { '@type': 'Answer', text: f.cevap },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />

      {/* Hero Section */}
      {/* min-h-svh: "small viewport height" — mobilde tarayıcı adres çubuğu
          açıkken bile hero tam olarak görünür alanı kaplar, böylece aşağıdaki
          beyaz bölüm scroll edilmeden görünmez ve içerik de taşmaz. */}
      <section className="relative min-h-svh flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-[#fdfbff] pt-32 pb-20">
        <div className="absolute top-20 right-20 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[80px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border border-purple-200 rounded-full text-purple-600 text-sm font-semibold mb-6">
              <Sparkles
                size={14}
                className="text-amber-500 animate-spin"
                style={{ animationDuration: '3s' }}
                aria-hidden="true"
              />
              <span>Süreç Otomasyon Kataloğu</span>
            </div>

            <h1
              className="animate-fade-up text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6 text-slate-900"
              style={{ animationDelay: '0.1s' }}
            >
              İş Süreçlerinizi
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-brand-orange bg-clip-text text-transparent">
                E-Flow ile Yönetin
              </span>
            </h1>

            <p
              className="animate-fade-up text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
              style={{ animationDelay: '0.2s' }}
            >
              Satın alma taleplerinden fatura onaylarına, İK izinlerinden masraf formlarına kadar
              kurumsal süreçlerinizi no-code esnekliği ve ERP entegrasyonuyla uçtan uca
              otomatikleştirin.
            </p>

            <div
              className="animate-fade-up flex flex-wrap gap-4 justify-center lg:justify-start"
              style={{ animationDelay: '0.3s' }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-orange to-orange-500 text-white rounded-2xl transition-all duration-300 font-bold hover:scale-105 shadow-lg shadow-orange-500/20"
              >
                <span>Sürecinizi Tasarlayalım</span>
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1.5 transition-transform"
                  aria-hidden="true"
                />
              </Link>
              <a
                href="#surecler-simulasyon"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 rounded-2xl transition-all duration-300 font-bold"
              >
                Süreçleri Keşfet
              </a>
            </div>
          </div>

          {/* Right Visual: Creative workflow node composition */}
          <div
            className="lg:col-span-5 relative w-full h-[400px] flex items-center justify-center select-none"
            aria-hidden="true"
          >
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ed4f37" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <path
                d="M 50 150 Q 180 80 200 200 T 350 250"
                fill="none"
                stroke="url(#flow-grad)"
                strokeWidth="2.5"
                strokeDasharray="6,6"
                className="opacity-50"
              />
            </svg>

            {/* Float Cards */}
            <div
              className="animate-float absolute left-[5%] top-[15%] bg-white/70 backdrop-blur-md border border-slate-200/50 p-4 rounded-2xl shadow-xl flex items-center gap-3 w-60"
              style={{ '--float-duration': '5s' } as React.CSSProperties}
            >
              <div className="w-9 h-9 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-600">
                <FileText size={18} />
              </div>
              <div className="text-left">
                <p className="text-xs font-black text-slate-800">Fatura Onay Akışı</p>
                <p className="text-xs text-slate-500 font-bold">10,000 ₺ Kriteri</p>
              </div>
            </div>

            <div
              className="animate-float absolute right-[5%] bottom-[15%] bg-white/70 backdrop-blur-md border border-slate-200/50 p-4 rounded-2xl shadow-xl flex items-center gap-3 w-60"
              style={
                {
                  '--float-duration': '6s',
                  '--float-distance': '12px',
                  animationDelay: '0.5s',
                } as React.CSSProperties
              }
            >
              <div className="w-9 h-9 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-600">
                <Database size={18} />
              </div>
              <div className="text-left">
                <p className="text-xs font-black text-slate-800">Mikro Tiger ERP Yazımı</p>
                <p className="text-xs text-indigo-600 font-bold">Otomatik &amp; Çift Yönlü</p>
              </div>
            </div>

            {/* Central Badge */}
            <div className="w-20 h-20 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white z-10 animate-pulse">
              <Route size={32} className="text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Process Simulator */}
      <section className="py-24 bg-white relative overflow-hidden" id="surecler-simulasyon">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 border border-purple-200 rounded-full text-purple-600 text-xs font-semibold uppercase tracking-wider">
              <span>SÜREÇ SİMÜLATÖRÜ</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              E-Flow Süreçleri Dijitalde Nasıl Çalışır?
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              E-Flow süreçlerinin adımlarını, onay mekanizmasını ve ERP entegrasyon sistemini
              interaktif simülatörümüzden seçerek anında inceleyin.
            </p>
          </div>

          <ProcessSimulator />
        </div>
      </section>

      {/* Grid: All E-Flow Processes Category Breakdown */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-xs font-semibold uppercase tracking-wider">
              SÜREÇ KAPSAMI
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              E-Flow İle Otomatikleştirebileceğiniz
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-brand-teal bg-clip-text text-transparent">
                Diğer Kurumsal Süreçler
              </span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              İşletmenizin hangi departmanında olursa olsun, onay gerektiren tüm manuel iş
              akışlarını E-Flow No-Code alt yapısıyla dakikalar içinde kurgulayabilirsiniz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const CategoryIcon = CATEGORY_ICONS[category.icon];
              return (
                <div
                  key={category.title}
                  className="bg-white border border-slate-200/60 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden"
                >
                  <div
                    className={`absolute top-0 left-0 w-2 h-full ${category.accent} rounded-l-2xl group-hover:w-3 transition-all`}
                    aria-hidden="true"
                  />
                  <div
                    className={`w-12 h-12 ${category.iconWrap} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <CategoryIcon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-4">{category.title}</h3>
                  <ul className="space-y-2.5">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm font-semibold text-slate-600"
                      >
                        <ChevronRight
                          size={12}
                          className={`${category.chevron} flex-shrink-0`}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ERP Integration details Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Visual ERP flow */}
            <div className="lg:col-span-5 relative w-full h-[380px] flex items-center justify-center select-none bg-slate-50 border border-slate-200/60 rounded-[2.5rem] p-8 shadow-sm">
              {/* Spinning tech wheels */}
              <div
                className="absolute w-60 h-60 border border-dashed border-purple-500/20 rounded-full animate-[spin_40s_linear_infinite]"
                aria-hidden="true"
              />
              <div
                className="absolute w-44 h-44 border border-dotted border-slate-200 rounded-full animate-[spin_20s_linear_infinite]"
                style={{ animationDirection: 'reverse' }}
                aria-hidden="true"
              />

              <div className="flex flex-col items-center gap-6 relative z-10">
                {/* Logo 1: E-Flow */}
                <div className="w-24 h-24 bg-white border border-slate-200 rounded-3xl shadow-xl flex items-center justify-center p-3">
                  <Image
                    src="/eflow3-logo.png"
                    alt="E-Flow logosu — İş Süreçleri Yönetimi yazılımı"
                    width={75}
                    height={75}
                    className="object-contain"
                  />
                </div>

                {/* Sync Arrow */}
                <div className="flex items-center justify-center gap-4 bg-slate-900 text-white py-2.5 px-5 rounded-full shadow-lg border border-slate-800">
                  <ArrowRightLeft size={16} className="text-amber-400" aria-hidden="true" />
                  <span className="text-xs font-black uppercase tracking-wider">
                    İki Yönlü Senkron
                  </span>
                </div>

                {/* Logo 2: ERP Systems */}
                <div className="w-24 h-24 bg-white border border-slate-200 rounded-3xl shadow-xl flex flex-col items-center justify-center p-3 gap-1">
                  <Database size={28} className="text-purple-600" aria-hidden="true" />
                  <span className="text-[11px] font-black text-slate-600 text-center leading-tight">
                    Tiger / Netsis / Mikro
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: ERP Integration explanations */}
            <div className="lg:col-span-7 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 border border-purple-200 rounded-full text-purple-600 text-xs font-semibold uppercase tracking-wider">
                ERP ENTEGRASYONU
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                ERP Sistemlerinizle
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-emerald-500 bg-clip-text text-transparent">
                  Kusursuz Entegrasyon
                </span>
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                E-Flow süreçleri tek başına çalışmaz; şirketinizin kalbi olan ERP ve Veritabanı
                sistemlerinizle çift yönlü olarak konuşur.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 w-full text-left">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                    <Database size={16} aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Tiger, Netsis ve Mikro Desteği</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Logo Tiger, Netsis ve Mikro yazılımları için hazır entegrasyon konnektörleriyle
                    süreçleri dakikalar içinde entegre edin.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <Cpu size={16} aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">İki Yönlü Veri Akışı</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Süreç başlarken stok veya cari bilgilerini ERP&apos;den okuyun; onay bittiğinde
                    siparişi/faturayı doğrudan ERP&apos;ye yazın.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600">
                    <FileSpreadsheet size={16} aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Çoklu Veritabanı Entegrasyonu</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    SQL Server, Oracle, PostgreSQL veritabanlarına veya Web API servislerine
                    doğrudan bağlanarak esnek entegrasyonlar kurun.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center text-violet-600">
                    <ShieldCheck size={16} aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Veri Güvenliği ve Tutarlılık</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Tüm entegrasyonlar güvenli protokollerle gerçekleştirilir. Hatalı veri girişleri
                    sistem tarafından engellenir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="pt-24 pb-12 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-3">
            {sss.map((f, i) => (
              <details key={f.soru} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="flex-1">{f.soru}</span>
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-1 text-gray-400 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 pl-[4.5rem] text-gray-600 leading-relaxed">{f.cevap}</p>
              </details>
            ))}
          </div>

          {/* İlgili sayfalar (iç link) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm font-medium text-gray-500 mr-1">İlgili:</span>
            {[
              { etiket: 'E-Flow', href: '/eflow' },
              { etiket: 'E-Flow BPM', href: '/eflow-bpm' },
              { etiket: 'E-Flow DMS', href: '/eflow-dms' },
              { etiket: 'Çözümler', href: '/solutions' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:border-brand-teal hover:text-brand-teal transition-colors"
              >
                {l.etiket}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="pt-6 pb-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-gradient-to-br from-[#0B192C] via-[#0A192F] to-[#0d223f] p-10 md:p-16 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800">
            {/* Glowing backdrop elements */}
            <div
              className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: '8s' }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: '12s' }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 text-white">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                  Süreçlerinizi Birlikte Dijital Ortama Taşıyalım
                </h2>
                <p className="text-slate-300 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
                  İşletmenizin operasyonel verimliliğini artırmak, kaybolan formları önlemek ve onay
                  hızınızı katlamak için ilk süreci bugün tasarlayalım.
                </p>
              </div>

              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
                <Link
                  href="/contact"
                  className="w-full lg:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl shadow-[0_15px_30px_rgba(249,115,22,0.3)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.5)] hover:scale-105 active:scale-[0.98] transition-all duration-300 font-bold text-lg"
                >
                  <span>Hemen İletişime Geçin</span>
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
