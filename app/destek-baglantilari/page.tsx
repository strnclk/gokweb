import { Metadata } from 'next';
import Link from 'next/link';
import {
  Monitor, Laptop, Terminal, Smartphone, Tablet, Download, ExternalLink,
  ShieldCheck, Headphones, ArrowRight, CheckCircle2, Info,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Destek Bağlantıları | Uzak Destek Programları İndir | Gökkuşağı Yazılım',
  description:
    'AnyDesk, TeamViewer ve Alpemix uzak destek programlarını Windows, macOS, Linux, Android ve iOS için resmi ve güvenli bağlantılardan indirin. Gökkuşağı Yazılım uzaktan destek sayfası.',
  keywords:
    'uzak destek, uzaktan bağlantı, AnyDesk indir, TeamViewer indir, Alpemix indir, uzaktan destek programı, remote destek, Mikro destek bağlantısı, Gökkuşağı Yazılım destek',
  alternates: { canonical: 'https://gokkusagiyazilim.com.tr/destek-baglantilari' },
  openGraph: {
    title: 'Destek Bağlantıları | Uzak Destek Programları İndir | Gökkuşağı Yazılım',
    description:
      'Uzaktan destek için AnyDesk, TeamViewer ve Alpemix programlarını cihazınıza uygun sürümle güvenle indirin.',
    url: 'https://gokkusagiyazilim.com.tr/destek-baglantilari',
    locale: 'tr_TR',
    type: 'website',
  },
};

type Platform = {
  label: string;
  icon: typeof Monitor;
  hint: string;
  direct?: { url: string; label: string };
  page?: { url: string; label: string };
};

type App = {
  name: string;
  tagline: string;
  description: string;
  bar: string;
  soft: string;
  chip: string;
  btn: string;
  link: string;
  border: string;
  extra?: { url: string; label: string; note: string };
  platforms: Platform[];
};

const apps: App[] = [
  {
    name: 'AnyDesk',
    tagline: 'Hafif ve hızlı — kurulum gerektirmez',
    description:
      'İndirip çalıştırdığınızda size özel 9 haneli bir adres (ID) verir. Bu adresi bize ilettiğinizde ekranınıza güvenli şekilde bağlanırız. Düşük internet hızında bile akıcı çalışır.',
    bar: 'bg-red-500',
    soft: 'bg-red-50',
    chip: 'bg-red-50 text-red-700',
    btn: 'bg-red-600 hover:bg-red-700',
    link: 'text-red-600 hover:text-red-700',
    border: 'border-red-200',
    platforms: [
      { label: 'Windows', icon: Monitor, hint: 'En yaygın — Windows 7/8/10/11', direct: { url: 'https://download.anydesk.com/AnyDesk.exe', label: 'AnyDesk.exe indir' }, page: { url: 'https://anydesk.com/en/downloads/windows', label: 'Resmi sayfa' } },
      { label: 'macOS', icon: Laptop, hint: 'Apple (Mac) bilgisayarlar', direct: { url: 'https://download.anydesk.com/anydesk.dmg', label: 'anydesk.dmg indir' }, page: { url: 'https://anydesk.com/en/downloads/mac-os', label: 'Resmi sayfa' } },
      { label: 'Linux', icon: Terminal, hint: 'Ubuntu, Debian, Fedora vb.', direct: { url: 'https://anydesk.com/en/downloads/linux', label: 'Linux için indir' }, page: { url: 'https://anydesk.com/en/downloads/linux', label: 'Dağıtımınızı seçin' } },
      { label: 'Android', icon: Smartphone, hint: 'Telefon ve tabletler', page: { url: 'https://anydesk.com/en/downloads/android', label: 'Google Play' } },
      { label: 'iOS', icon: Tablet, hint: 'iPhone ve iPad', page: { url: 'https://anydesk.com/en/downloads/ios', label: 'App Store' } },
    ],
  },
  {
    name: 'TeamViewer',
    tagline: 'Dünyaca yaygın — QuickSupport kurulum istemez',
    description:
      'Aşağıdaki “QuickSupport” sürümü kurulum gerektirmez; açar açmaz size bir ID ve şifre üretir. Bu ikisini bize iletmeniz bağlanmamız için yeterlidir. Tam sürüme resmi sayfadan ulaşabilirsiniz.',
    bar: 'bg-blue-500',
    soft: 'bg-blue-50',
    chip: 'bg-blue-50 text-blue-700',
    btn: 'bg-blue-600 hover:bg-blue-700',
    link: 'text-blue-600 hover:text-blue-700',
    border: 'border-blue-200',
    extra: { url: 'https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe', label: 'Tam sürümü indir (Windows)', note: 'Kalıcı kurulum isteyenler için tam TeamViewer istemcisi.' },
    platforms: [
      { label: 'Windows', icon: Monitor, hint: 'QuickSupport — kurulumsuz destek', direct: { url: 'https://download.teamviewer.com/download/TeamViewerQS_x64.exe', label: 'QuickSupport indir' }, page: { url: 'https://www.teamviewer.com/tr/download/windows/', label: 'Resmi sayfa' } },
      { label: 'macOS', icon: Laptop, hint: 'Apple (Mac) bilgisayarlar', direct: { url: 'https://download.teamviewer.com/download/TeamViewer.dmg', label: 'TeamViewer.dmg indir' }, page: { url: 'https://www.teamviewer.com/tr/download/macos/', label: 'Resmi sayfa' } },
      { label: 'Linux', icon: Terminal, hint: 'Debian / Ubuntu (.deb)', direct: { url: 'https://download.teamviewer.com/download/linux/teamviewer_amd64.deb', label: '.deb indir' }, page: { url: 'https://www.teamviewer.com/tr/download/linux/', label: 'Diğer dağıtımlar' } },
      { label: 'Android', icon: Smartphone, hint: 'Telefon ve tabletler', page: { url: 'https://www.teamviewer.com/tr/download/android/', label: 'Google Play' } },
      { label: 'iOS', icon: Tablet, hint: 'iPhone ve iPad', page: { url: 'https://www.teamviewer.com/tr/download/ios/', label: 'App Store' } },
    ],
  },
  {
    name: 'Alpemix',
    tagline: 'Türkçe arayüz — tek dosya, kurulumsuz',
    description:
      'Türkiye’de yaygın kullanılan, kurulum gerektirmeyen yerli uzak destek programı. Tek dosyayı indirip çalıştırdığınızda bir bağlantı ID’si verir. Kalıcı erişim için ayrıca AlpemixService sürümü bulunur. Alpemix yalnızca Windows ve mobil cihazlarda çalışır.',
    bar: 'bg-amber-500',
    soft: 'bg-amber-50',
    chip: 'bg-amber-50 text-amber-700',
    btn: 'bg-amber-600 hover:bg-amber-700',
    link: 'text-amber-600 hover:text-amber-700',
    border: 'border-amber-200',
    extra: { url: 'https://www.alpemix.com/site/AlpemixService.exe', label: 'AlpemixService indir (kalıcı erişim)', note: 'Sunucu/mağaza gibi sürekli bağlanılan cihazlar için kurulan servis sürümü.' },
    platforms: [
      { label: 'Windows', icon: Monitor, hint: 'Kurulumsuz — çalıştırıp bağlanın', direct: { url: 'https://www.alpemix.com/site/Alpemix.exe', label: 'Alpemix.exe indir' }, page: { url: 'https://www.alpemix.com/en/Download', label: 'Resmi sayfa' } },
      { label: 'Android', icon: Smartphone, hint: 'Telefon ve tabletler', page: { url: 'https://www.alpemix.com/en/Download', label: 'Mobil uygulama' } },
      { label: 'iOS', icon: Tablet, hint: 'iPhone ve iPad', page: { url: 'https://www.alpemix.com/en/Download', label: 'Mobil uygulama' } },
    ],
  },
];

const sss = [
  {
    q: 'Hangi uzak destek programını indirmeliyim?',
    a: 'Fark etmez; en pratik olanı kurulum gerektirmeyen AnyDesk veya TeamViewer QuickSupport’tur. Türkçe arayüz isterseniz Alpemix idealdir. Destek ekibimiz size hangisini açacağınızı da söyleyebilir.',
  },
  {
    q: 'Bu programları kurmam gerekiyor mu?',
    a: 'Hayır. AnyDesk, TeamViewer QuickSupport ve Alpemix indirip çift tıklamanız yeterlidir; kurulum yapmadan çalışırlar. Yalnızca kalıcı erişim gereken cihazlarda servis sürümü kurulur.',
  },
  {
    q: 'Mac veya Linux kullanıyorum, hangisini indirmeliyim?',
    a: 'macOS ve Linux için AnyDesk veya TeamViewer’ı kullanın; her ikisi de bu sistemleri destekler. Alpemix yalnızca Windows üzerinde çalışır.',
  },
  {
    q: 'Uzaktan bağlantı güvenli mi?',
    a: 'Evet. Bağlantılar uçtan uca şifrelenir ve siz onay vermeden kimse bağlanamaz. Ekranınızı istediğiniz an kapatarak bağlantıyı sonlandırabilirsiniz. Destek ekibimiz sizden yalnızca bağlantı ID’nizi ister.',
  },
];

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://gokkusagiyazilim.com.tr' },
    { '@type': 'ListItem', position: 2, name: 'Destek Bağlantıları', item: 'https://gokkusagiyazilim.com.tr/destek-baglantilari' },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: sss.map((s) => ({
    '@type': 'Question',
    name: s.q,
    acceptedAnswer: { '@type': 'Answer', text: s.a },
  })),
};

export default function DestekBaglantilariPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero — Navbar (fixed, h-20) ile çakışmaması için üstten pt-28/pt-36 boşluk */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-16 sm:pb-20 text-center">
          <div className="mb-6 flex flex-col items-center gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-600 text-sm font-medium shadow-sm">
              <Headphones className="w-4 h-4 text-blue-600 animate-pulse" />
              Uzaktan Destek
            </span>
            
            <a 
              href="tel:02165748343" 
              className="group relative inline-flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-md border border-blue-200/50 hover:border-blue-300 hover:bg-white text-slate-800 rounded-2xl shadow-lg shadow-blue-500/5 transition-all duration-300 hover:scale-105 font-bold text-sm sm:text-base"
            >
              {/* Pulsing online status indicator */}
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              
              <span className="tracking-wide text-slate-600">
                Destek Hattı: <span className="text-blue-600 font-black">0216 574 83 43</span>
              </span>
              
              <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider group-hover:bg-blue-100 transition-colors">
                Hemen Ara
              </span>
            </a>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 inline-block leading-[1.25] pb-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Destek Bağlantıları
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Size uzaktan yardımcı olabilmemiz için gereken uzak destek programları burada. Cihazınıza uygun sürümü
            seçin, indirin ve ekranda çıkan bağlantı numarasını bizimle paylaşın — gerisini biz hallederiz.
          </p>
        </div>
      </section>

      {/* Uygulamalar */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12 space-y-8">
        {apps.map((app) => (
          <div key={app.name} className={`bg-white border ${app.border} rounded-2xl overflow-hidden shadow-sm`}>
            <div className={`h-1.5 ${app.bar}`} />
            <div className="p-6 sm:p-8">
              <div className="mb-2">
                <h2 className="text-2xl font-bold text-gray-900">{app.name}</h2>
                <span className={`inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full ${app.chip}`}>
                  {app.tagline}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl">{app.description}</p>

              {/* Kartlar: flex-wrap + justify-center → alt satırdaki kartlar üsttekilere göre ortalanır.
                  Sabit basis + min-height ile tüm kartlar eşit boyutta. */}
              <div className="flex flex-wrap justify-center gap-4">
                {app.platforms.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.label}
                      className={`flex flex-col rounded-xl border border-gray-200 ${app.soft} p-4 basis-full sm:basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-0.7rem)] grow-0`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-5 h-5 text-gray-700" />
                        <span className="font-semibold text-gray-900">{p.label}</span>
                      </div>
                      <p className="text-xs text-gray-500 min-h-[2.25rem]">{p.hint}</p>

                      <div className="mt-auto flex flex-col justify-end gap-2 min-h-[5.25rem]">
                        {p.direct && (
                          <a
                            href={p.direct.url}
                            className={`w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-white text-sm font-semibold ${app.btn} transition-colors`}
                          >
                            <Download className="w-4 h-4" />
                            {p.direct.label}
                          </a>
                        )}
                        {p.page && (
                          <a
                            href={p.page.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium ${app.link} transition-colors`}
                          >
                            {p.page.label}
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {app.extra && (
                <div className="mt-5 flex items-start gap-2 text-sm text-gray-500">
                  <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
                  <span>
                    {app.extra.note}{' '}
                    <a href={app.extra.url} className={`font-medium ${app.link}`}>
                      {app.extra.label}
                    </a>
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Güvenlik notu */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-emerald-900 leading-relaxed space-y-1">
            <p className="font-semibold">Güvenliğiniz için</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600 flex-shrink-0" /> Yalnızca bu sayfadaki resmi bağlantıları kullanın.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600 flex-shrink-0" /> Destek ekibimiz sizden yalnızca bağlantı ID’nizi ister; şifre veya kart bilgisi istemez.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600 flex-shrink-0" /> Bağlantıyı dilediğiniz an kapatabilirsiniz; onayınız olmadan bağlanılamaz.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sıkça Sorulan Sorular</h2>
        <div className="space-y-3">
          {sss.map((s, i) => (
            <details key={s.q} className="group bg-white border border-gray-200 rounded-xl px-5 py-4">
              <summary className="flex items-start gap-4 cursor-pointer font-semibold text-gray-900 list-none">
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{i + 1}</span>
                <span className="flex-1">{s.q}</span>
                <ArrowRight className="w-4 h-4 mt-1.5 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 pl-12 text-gray-600 text-sm leading-relaxed">{s.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Bağlantı kuramıyor musunuz?</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Programı indirmekte ya da bağlanmakta zorlanırsanız, adım adım yardımcı olalım. Bize ulaşın, birlikte
            bağlanalım.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            İletişime geç
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
