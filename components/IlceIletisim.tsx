import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { GOOGLE_REVIEWS_URL } from '@/lib/constants';

// İlçe sayfalarının sonunda (IlceSEOContent'ten sonra, Footer'dan önce) yer alan
// konum + genel iletişim bölümü. Tek merkez ofis olduğu için içerik tüm ilçelerde
// aynıdır; yalnızca başlık/gövde ilçe adıyla yerelleştirilir. Sunucu bileşeni
// ('use client' YOK) — statik HTML, SEO'ya doğrudan katkı, ekstra JS yükü yok.

const PHONE_DISPLAY = '0539 856 35 78';
const PHONE_TEL = '+905398563578';
const EMAIL = 'satis@gokkusagiyazilim.com.tr';
const ADRES =
  'İçerenköy Mah. Eryılmazlar Sokak No:2 Kemal Bey İş Merkezi Kat:4 Daire:18 Ataşehir/İstanbul';

const kartlar = [
  { icon: MapPin, title: 'Adres', value: 'Ataşehir / İstanbul', href: GOOGLE_REVIEWS_URL, external: true },
  { icon: Phone, title: 'Telefon', value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}`, external: false },
  { icon: Mail, title: 'E-posta', value: EMAIL, href: `mailto:${EMAIL}`, external: false },
];

export default function IlceIletisim({ ilce }: { ilce: string }) {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {ilce} İçin İletişim ve Konum
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {ilce} ve çevresindeki işletmelere Ataşehir merkez ofisimizden Mikro ERP, e-dönüşüm ve
            özel yazılım hizmeti veriyoruz. Ücretsiz danışmanlık ve demo için bizimle iletişime geçin.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mb-10">
          {kartlar.map((k) => {
            const isPhone = k.title === 'Telefon';
            const cardClass =
              'flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group';
            const inner = (
              <>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <k.icon className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold mb-1 text-gray-900">{k.title}</h3>
                  {isPhone ? (
                    <div className="space-y-0.5">
                      <a href={k.href} className="block text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium break-words">
                        {k.value}
                      </a>
                      <a href="tel:+902165748343" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium break-words">
                        0216 574 83 43
                      </a>
                    </div>
                  ) : (
                    <p className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm font-medium break-words">
                      {k.value}
                    </p>
                  )}
                </div>
              </>
            );
            return isPhone ? (
              <div key={k.title} className={cardClass}>
                {inner}
              </div>
            ) : (
              <a
                key={k.title}
                href={k.href}
                {...(k.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={cardClass}
              >
                {inner}
              </a>
            );
          })}
        </div>

        {/* Konum — gömülü harita (Teklif Al sayfasındaki ile aynı) */}
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-xl overflow-hidden">
          <div className="flex items-start gap-3 max-w-xl mb-5">
            <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-gray-700 leading-relaxed">{ADRES}</p>
          </div>
          <iframe
            src="https://maps.google.com/maps?q=Eryilmazlar+Sokak+No:2+Icerenkoy+Atasehir+Istanbul&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            className="rounded-xl"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Gökkuşağı Yazılım - Ataşehir ofis konumu"
          ></iframe>
        </div>

        {/* Teklif Al — kapanış CTA kartı (haritanın altında) */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 sm:p-8 text-center shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Size özel çözüm için hazırız
          </h3>
          <p className="text-gray-600 mb-6">
            Ücretsiz danışmanlık ve demo için hemen teklif alın.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Teklif Al <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
