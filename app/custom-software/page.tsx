import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import GravityParticles from '@/components/GravityParticles';
import {
  Plug, BarChart3, ShoppingCart, Store, Smartphone, Webhook,
  ArrowRight, CheckCircle2, MapPin, Award, Database, ShieldCheck,
} from 'lucide-react';

const SITE = 'https://gokkusagiyazilim.com.tr';

export const metadata: Metadata = {
  title: 'Mikro Özel Yazılım ve Entegrasyon Çözümleri | Gökkuşağı Yazılım',
  description:
    'Mikro ERP entegrasyonları (pazar yeri, banka, kargo, GİB), Mikro veritabanı üzerinden özel raporlama ve dashboard, e-ticaret senkronizasyonu, B2B bayi portalı ve mobil saha uygulamaları. Ataşehir merkezli, resmi Mikro iş ortağı.',
  alternates: { canonical: `${SITE}/custom-software` },
  openGraph: {
    title: 'Mikro Özel Yazılım ve Entegrasyon Çözümleri | Gökkuşağı Yazılım',
    description:
      'Mikro ERP entegrasyonları, özel raporlama, e-ticaret senkronizasyonu, B2B portal ve mobil saha uygulamaları. Anadolu Yakası ve İstanbul geneli.',
    url: `${SITE}/custom-software`,
    type: 'website',
  },
};

// Mikro-merkezli kabiliyetler (hub); derinlik ilgili sayfalara (spoke) linklenir.
const kabiliyetler = [
  {
    id: 'mikro-entegrasyon',
    num: '01',
    icon: Plug,
    baslik: 'Mikro ERP Entegrasyonları',
    tanim:
      'Mikro ERP’nizi dış sistemlerle (pazar yeri, banka, kargo, GİB) çift yönlü bağlayan entegrasyonlar geliştiririz.',
    aciklama:
      'Verilerin elle taşınmasını ortadan kaldırır; sipariş, stok, cari ve belge akışını Mikro ile dış sistemler arasında otomatik ve hatasız hâle getiririz. Akış üzerinde hata izleme ve loglama ile süreç güvenli işler.',
    kapsam: ['Pazar yeri entegrasyonu', 'Banka / POS entegrasyonu', 'Kargo entegrasyonu', 'GİB / e-Dönüşüm', 'Çift yönlü veri akışı', 'Hata izleme ve loglama'],
    kimIcin: 'Mikro kullanıp veriyi farklı sistemler arasında elle aktarmaktan kurtulmak isteyen işletmeler.',
    baglantilar: [
      { etiket: 'B2B / Bayi çözümleri', href: '/solutions/#b2b-bayi' },
      { etiket: 'e-Fatura geçiş rehberi', href: '/blog/mikroda-e-fatura-gecis-kurulum-rehberi' },
    ],
  },
  {
    id: 'ozel-raporlama',
    num: '02',
    icon: BarChart3,
    baslik: 'Özel Raporlama ve Dashboard',
    tanim:
      'Mikro veritabanı üzerinden işletmenize özel raporlar ve anlık yönetim panoları (dashboard) üretiriz.',
    aciklama:
      'Standart ekranların ötesinde; satış, stok, cari ve kârlılık verilerinizi tam ihtiyacınıza göre raporlar, otomatik e-posta ve anlık panolarla yöneticinin önüne getiririz. Raporlar STOKLAR, cari ve hareket tabloları gibi Mikro veri yapıları üzerine kurulur.',
    kapsam: ['Satış / stok / cari raporları', 'Yönetici dashboard', 'Otomatik e-posta raporları', 'Excel / PDF çıktı', 'Kârlılık analizi', 'İşletmeye özel KPI'],
    kimIcin: 'Mikro verisinden daha derin ve özelleştirilmiş raporlar almak isteyen işletmeler.',
    baglantilar: [
      { etiket: 'Mikro veritabanı tabloları', href: '/mikro-tablolari' },
      { etiket: 'STOKLAR tablosu', href: '/mikro-tablolari/stoklar' },
    ],
  },
  {
    id: 'eticaret-senkron',
    num: '03',
    icon: ShoppingCart,
    baslik: 'E-Ticaret ve Pazar Yeri Senkronizasyonu',
    tanim:
      'Stok, sipariş ve fiyatı Mikro ile pazar yerleri ve e-ticaret siteniz arasında otomatik senkronize ederiz.',
    aciklama:
      'Aynı ürünü birden fazla kanalda satarken oluşan stok ve fiyat karmaşasını ortadan kaldırırız. Siparişler Mikro’ya otomatik düşer, faturalar otomatik kesilir, kargo eşleştirilir; kanallar arası tutarlılık korunur.',
    kapsam: ['Stok senkronizasyonu', 'Otomatik sipariş aktarımı', 'Fiyat / kampanya güncelleme', 'Çoklu pazar yeri', 'Fatura otomasyonu', 'Kargo eşleştirme'],
    kimIcin: 'Pazar yeri ve/veya kendi e-ticaret sitesinden satış yapan Mikro kullanıcıları.',
    baglantilar: [
      { etiket: 'Mikro Fly (E-Ticaret ERP)', href: '/mikro-fly' },
      { etiket: 'Hızlı satış çözümleri', href: '/solutions/#hizli-satis' },
    ],
  },
  {
    id: 'b2b-portal',
    num: '04',
    icon: Store,
    baslik: 'B2B / Bayi Portalları',
    tanim:
      'Bayilerinizin 7/24 sipariş verip bakiye ve ekstresini görebildiği, Mikro’ya entegre B2B portalları kurarız.',
    aciklama:
      'Bayi ve müşterileriniz kendilerine özel fiyat ve iskontolarla online sipariş verir; bakiye, cari ekstre ve sipariş durumunu anlık görür. Tüm işlemler onay akışıyla Mikro’ya otomatik aktarılır.',
    kapsam: ['Bayi sipariş ekranı', 'Cari / bakiye görüntüleme', 'Özel fiyat ve iskonto', 'Ödeme entegrasyonu', 'Sipariş onay akışı', 'Mikro’ya otomatik aktarım'],
    kimIcin: 'Bayi ağı olan, sipariş sürecini dijitalleştirmek isteyen üretici ve toptancılar.',
    baglantilar: [{ etiket: 'B2B / Bayi çözümleri', href: '/solutions/#b2b-bayi' }],
  },
  {
    id: 'mobil-saha',
    num: '05',
    icon: Smartphone,
    baslik: 'Mobil Saha ve Satış Uygulamaları',
    tanim:
      'Saha ekiplerinizin sipariş, tahsilat ve stok işlemlerini mobilden Mikro’ya işleyebildiği uygulamalar geliştiririz.',
    aciklama:
      'Plasiyer ve saha ekipleriniz müşteri ziyaretinde sipariş girer, tahsilat yapar ve stok görür; veriler anlık olarak Mikro ile senkronize olur. Çevrimdışı çalışma desteğiyle bağlantı kesilse de iş durmaz.',
    kapsam: ['Mobil sipariş', 'Saha tahsilat', 'Stok / sayım', 'Rota ve ziyaret takibi', 'Çevrimdışı çalışma', 'Anlık Mikro senkronu'],
    kimIcin: 'Plasiyer / saha satış veya servis ekibi olan işletmeler.',
    baglantilar: [{ etiket: 'Bize danışın', href: '/contact' }],
  },
  {
    id: 'api-entegrasyon',
    num: '06',
    icon: Webhook,
    baslik: 'API Entegrasyonları',
    tanim:
      'Üçüncü parti servisleri (ödeme, e-Dönüşüm, lojistik, CRM) Mikro ve sistemlerinizle güvenli şekilde bağlarız.',
    aciklama:
      'İşletmenizin kullandığı dış servisleri web servisleri üzerinden Mikro’ya ve iç sistemlerinize bağlar; güvenli kimlik doğrulama ve veri doğrulamayla sürdürülebilir entegrasyonlar kurarız.',
    kapsam: ['Ödeme sistemleri', 'e-Dönüşüm servisleri', 'Lojistik / kargo API', 'CRM / pazarlama', 'Web servisleri', 'Güvenli kimlik doğrulama'],
    kimIcin: 'Farklı yazılımları tek akışta buluşturmak isteyen işletmeler.',
    baglantilar: [
      { etiket: 'Mikro veritabanı tabloları', href: '/mikro-tablolari' },
      { etiket: 'Tüm hizmetler', href: '/services' },
    ],
  },
];

// Kart tabanlı tasarım için renk seti: ikon gradyanı, sol aksan çubuğu,
// filigran numara ve kapsam rozeti renkleri.
const renkler = [
  { ikon: 'from-blue-500 to-blue-600', border: 'border-blue-500', watermark: 'text-blue-600', pill: 'bg-blue-50 text-blue-700 border border-blue-100', link: 'text-blue-600 hover:text-blue-800' },
  { ikon: 'from-cyan-500 to-blue-600', border: 'border-cyan-500', watermark: 'text-cyan-600', pill: 'bg-cyan-50 text-cyan-700 border border-cyan-100', link: 'text-cyan-600 hover:text-cyan-800' },
  { ikon: 'from-violet-500 to-purple-600', border: 'border-violet-500', watermark: 'text-violet-600', pill: 'bg-violet-50 text-violet-700 border border-violet-100', link: 'text-violet-600 hover:text-violet-800' },
  { ikon: 'from-emerald-500 to-teal-600', border: 'border-emerald-500', watermark: 'text-emerald-600', pill: 'bg-emerald-50 text-emerald-700 border border-emerald-100', link: 'text-emerald-600 hover:text-emerald-800' },
  { ikon: 'from-amber-500 to-orange-600', border: 'border-amber-500', watermark: 'text-amber-600', pill: 'bg-amber-50 text-amber-700 border border-amber-100', link: 'text-amber-600 hover:text-amber-800' },
  { ikon: 'from-rose-500 to-pink-600', border: 'border-rose-500', watermark: 'text-rose-600', pill: 'bg-rose-50 text-rose-700 border border-rose-100', link: 'text-rose-600 hover:text-rose-800' },
];

const surec = [
  { step: '01', title: 'Analiz', description: 'İhtiyaç ve mevcut Mikro yapınızı inceleriz.' },
  { step: '02', title: 'Tasarım', description: 'Akış ve arayüzü birlikte tasarlarız.' },
  { step: '03', title: 'Geliştirme', description: 'Entegrasyon/yazılımı kodlarız.' },
  { step: '04', title: 'Test', description: 'Gerçek veriyle doğrularız.' },
  { step: '05', title: 'Yayın', description: 'Canlıya alır, devreye alırız.' },
  { step: '06', title: 'Destek', description: 'Sonrasında sürekli destek veririz.' },
];

const nedenBiz = [
  { icon: Award, baslik: '20+ Yıl Deneyim', metin: 'Resmi Mikro iş ortağı olarak yüzlerce projeyi hayata geçirdik.' },
  { icon: Database, baslik: 'Mikro Veritabanına Hâkimiyet', metin: 'Tablolar ve veri yapıları üzerinde derin uzmanlık, doğru ve hızlı çözüm demek.' },
  { icon: ShieldCheck, baslik: 'Sürdürülebilir Çözüm', metin: 'Yazılımı Mikro güncellemeleriyle uyumlu tutar, kurulum sonrası desteğini veririz.' },
];

const sss = [
  {
    soru: 'Mevcut Mikro programıma entegrasyon yapılabilir mi?',
    cevap: 'Evet. Geliştirdiğimiz çözümler mevcut Mikro kurulumunuz üzerine çalışır; sıfırdan sistem kurmanıza gerek yoktur. Önce mevcut yapınızı analiz eder, ardından ihtiyacınıza uygun entegrasyonu kurarız.',
  },
  {
    soru: 'Hangi pazar yerleri ve servislerle entegrasyon yapıyorsunuz?',
    cevap: 'Popüler pazar yerleri, banka/POS sistemleri, kargo firmaları ve e-Dönüşüm servisleriyle entegrasyon geliştiriyoruz. İhtiyacınıza özel servisler için de web servisleri üzerinden çözüm üretiriz; kullandığınız sistemleri bize iletmeniz yeterli.',
  },
  {
    soru: 'Mikro veritabanından özel rapor alınabilir mi?',
    cevap: 'Evet. STOKLAR, cari ve hareket tabloları gibi Mikro veri yapıları üzerinden işletmenize özel raporlar, dashboard’lar ve otomatik e-posta raporları hazırlıyoruz. Alan yapıları için Mikro Tablolar rehberimizi de inceleyebilirsiniz.',
  },
  {
    soru: 'Geliştirdiğiniz yazılım Mikro güncellemelerinde bozulur mu?',
    cevap: 'Çözümleri Mikro’nun veri yapısına uygun ve sürdürülebilir şekilde geliştiririz. Güncellemelerde uyumu gözetir, destek anlaşmasıyla sistemlerin çalışır kalmasını sağlarız.',
  },
  {
    soru: 'Proje süresi ve fiyatı nasıl belirlenir?',
    cevap: 'Süre ve maliyet, kapsam analizinden sonra netleşir. İhtiyaçlarınızı dinler, işin sınırlarını belirler ve size şeffaf bir teklif sunarız.',
  },
  {
    soru: 'Yerinde mi uzaktan mı çalışıyorsunuz?',
    cevap: 'Ataşehir merkezli olarak Anadolu Yakası’nda yerinde, İstanbul geneli ve uzaktan bağlantı ile çalışıyoruz. Projenin ihtiyacına göre en uygun yöntemi birlikte belirleriz.',
  },
];

export default function CustomSoftwarePage() {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Gökkuşağı Yazılım ve Danışmanlık',
    url: `${SITE}/custom-software`,
    image: `${SITE}/logo.png`,
    telephone: '+905398563578',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ataşehir',
      addressRegion: 'İstanbul',
      addressCountry: 'TR',
    },
    areaServed: { '@type': 'City', name: 'İstanbul' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Özel Yazılım ve Entegrasyon Hizmetleri',
      itemListElement: kabiliyetler.map((k) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: k.baslik, description: k.tanim },
      })),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Özel Yazılım', item: `${SITE}/custom-software` },
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
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />

      {/* Hero — animasyonlu yıldız arka planı korunuyor */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <GravityParticles />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="text-center">
            <Breadcrumb
              items={[{ label: 'Anasayfa', href: '/' }, { label: 'Özel Yazılım' }]}
              accentClass="hover:text-white"
              light
              className="justify-center mb-8"
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Mikro’ya Özel Yazılım ve Entegrasyon
            </h1>
            <p className="text-lg md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Mikro ERP’nizi pazar yerleri, banka, kargo ve GİB ile entegre eden; özel rapor, B2B portal ve
              mobil saha uygulamaları geliştiren çözüm ortağınız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                Projenizi Konuşalım
              </Link>
              <Link href="/featured-works" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                Referanslar
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Kabiliyet bölümleri (hub) */}
      <div className="bg-gray-50 py-10 md:py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-6 md:space-y-8">
          {kabiliyetler.map((k, index) => {
            const Icon = k.icon;
            const renk = renkler[index % renkler.length];
            return (
              <section
                key={k.id}
                id={k.id}
                className={`scroll-mt-24 relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm border-l-[5px] ${renk.border} p-6 md:p-9`}
              >
                {/* Dekoratif filigran numara */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute top-1 right-5 leading-none font-black select-none opacity-[0.07] ${renk.watermark} text-[6rem] md:text-[8rem]`}
                >
                  {k.num}
                </span>

                <div className="relative grid md:grid-cols-[5rem_1fr] gap-5 md:gap-7 items-start">
                  {/* Daire ikon */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${renk.ikon} flex items-center justify-center shadow-lg ring-4 ring-white`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3">{k.baslik}</h2>
                    <p className="text-lg text-gray-900 font-medium leading-relaxed mb-3">{k.tanim}</p>
                    <p className="text-base text-gray-600 leading-relaxed mb-5 max-w-3xl">{k.aciklama}</p>

                    {/* Kapsam: rozetler */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {k.kapsam.map((x) => (
                        <span key={x} className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm ${renk.pill}`}>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {x}
                        </span>
                      ))}
                    </div>

                    {/* Kimler için: renkli sol çubuk */}
                    <p className={`border-l-2 ${renk.border} pl-3 mb-5 text-sm text-gray-600`}>
                      <span className="font-semibold text-gray-900">Kimler için? </span>{k.kimIcin}
                    </p>

                    {/* İlgili sayfalar: sade metin linkleri */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      {k.baglantilar.map((b) => (
                        <Link
                          key={b.href}
                          href={b.href}
                          className={`inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline ${renk.link}`}
                        >
                          {b.etiket}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Süreç */}
      <section className="py-14 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Geliştirme Süreci</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Analizden sürekli desteğe, adım adım ve şeffaf.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {surec.map((item) => (
              <div key={item.step} className="text-center p-4 rounded-2xl border border-gray-200 bg-gray-50">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Gökkuşağı (EEAT) */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Neden Gökkuşağı Yazılım?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Sadece yazılımcı değil, Mikro ekosistemine hâkim çözüm ortağı.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {nedenBiz.map((n) => {
              const Icon = n.icon;
              return (
                <div key={n.baslik} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{n.baslik}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{n.metin}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Yerel / GEO */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Anadolu Yakası ve İstanbul Geneli</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ataşehir merkezli olarak Anadolu Yakası’nda yerinde; İstanbul geneli ve uzaktan bağlantı ile
            özel yazılım ve entegrasyon projelerinizi yürütüyoruz.
          </p>
        </div>
      </section>

      {/* SSS */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Sıkça Sorulan Sorular</h2>
          <div className="space-y-3">
            {sss.map((f, i) => (
              <details key={i} className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <span className="flex-1">{f.soru}</span>
                  <svg className="w-5 h-5 flex-shrink-0 mt-1 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 pl-[4.5rem] text-gray-600 leading-relaxed">{f.cevap}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 md:p-16 rounded-3xl text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-xl md:text-4xl font-bold text-white mb-4">Projenizi konuşalım</h2>
              <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Mikro entegrasyonu, özel rapor veya bir portal/uygulama fikriniz mi var? İhtiyacınızı dinleyip
                en uygun çözümü birlikte belirleyelim.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 font-semibold shadow-xl">
                  Ücretsiz Danışmanlık
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link href="/mikro-tablolari" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/30 text-white rounded-xl hover:bg-white/20 font-semibold">
                  Mikro Tablolarını İncele
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
