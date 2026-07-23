'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles, Cpu, Database, Zap, Shield, TrendingUp, Building2, Factory, ShoppingCart, Truck, Users, Briefcase, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

// Referans sözleri — ana sayfadaki Başarı Hikayeleri gibi ok tuşlarıyla gezilir
const referansSozleri = [
  {
    soz: 'Gökkuşağı Yazılım ile çalışmaya başladığımdan bu yana iş süreçlerimiz %90 daha verimli hale geldi. Sektörümüze özel çözümleri ve uzman destekleriyle gerçek bir çözüm ortağı.',
    ad: 'Recep Güngörmüş',
    unvan: 'Müşteri',
  },
  {
    soz: 'Üretim planlamamızı MES entegrasyonuyla dijitale taşıdık; makine duruşlarımız azaldı, teslim tarihlerimizi artık net verebiliyoruz. Kurulumdan eğitime her adımda yanımızdaydılar.',
    ad: 'Necla Türe',
    unvan: 'Üretim Sektörü Müşterisi',
  },
  {
    soz: 'Mağazalarımızda hızlı satış sistemine geçtiğimizden beri kasa kuyruklarımız kısaldı, stok sayımlarımız dakikalar içinde tamamlanıyor. İhtiyacımızı bizden iyi analiz ettiler.',
    ad: 'Emre Uçar',
    unvan: 'Perakende Sektörü Müşterisi',
  },
  {
    soz: 'Depo süreçlerimizi barkodlu sisteme geçirdik; sevkiyat hatalarımız neredeyse sıfırlandı. Sorularımıza aynı gün dönüş almak büyük güven veriyor.',
    ad: 'İrem Kaya',
    unvan: 'Lojistik Sektörü Müşterisi',
  },
];

const sssSektorel = [
  { soru: 'Sektörel çözüm nedir?', cevap: 'Sektörel çözüm, işletmenizin bulunduğu sektörün özel süreçlerine göre uyarlanmış ERP ve yazılım çözümüdür. Genel bir yazılım yerine, sizin ihtiyaçlarınıza birebir oturan bir yapı sunar.' },
  { soru: 'Hangi sektörlere çözüm sunuyorsunuz?', cevap: 'Perakende, üretim, hizmet, e-ticaret, inşaat, lojistik ve daha birçok sektöre özel Mikro tabanlı çözümler sunuyoruz. İhtiyacınıza göre uyarlama yapıyoruz.' },
  { soru: 'Mevcut Mikro sistemime uyarlanabilir mi?', cevap: 'Evet. Sektörel çözümlerimiz mevcut Mikro kurulumunuz üzerine çalışacak şekilde uyarlanır; sıfırdan sistem kurmanıza gerek kalmaz.' },
  { soru: 'Nasıl başlarım?', cevap: 'Önce ihtiyaç analizi yaparız, ardından sektörünüze en uygun çözümü belirleyip devreye alırız. Başlamak için bizimle iletişime geçebilirsiniz.' },
];

const serviceJsonLdSektorel = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sektörel ERP ve Yazılım Çözümleri',
  serviceType: 'Sektörel Çözümler',
  description: 'Perakende, üretim, hizmet, e-ticaret ve inşaat gibi sektörlere özel Mikro tabanlı ERP ve yazılım çözümleri.',
  provider: { '@type': 'Organization', name: 'Gökkuşağı Yazılım ve Danışmanlık', url: 'https://gokkusagiyazilim.com.tr' },
  areaServed: { '@type': 'City', name: 'İstanbul' },
};

const faqJsonLdSektorel = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: sssSektorel.map((f) => ({ '@type': 'Question', name: f.soru, acceptedAnswer: { '@type': 'Answer', text: f.cevap } })),
};

export default function SectoralSolutionsPage() {
  const [aktifSoz, setAktifSoz] = useState(0);

  const sectors = [
    { icon: Building2, name: 'İnşaat', desc: 'Hak-ediş hesaplama, satın alma süreci, proje yönetimi', href: '/sectoral-solutions/solutions/#insaat', features: ['Hak-ediş', 'Satın Alma', 'Proje Yönetimi'], valueProp: 'Hak-ediş ve satın almadan proje takibine inşaatın tümü tek sistemde.' },
    { icon: Factory, name: 'Üretim', desc: 'MES çözümleri, üretim planlama, makine entegrasyonu', href: '/sectoral-solutions/solutions/#uretim', features: ['MES', 'Üretim Planlama', 'Makine Entegrasyonu'], valueProp: 'MES ve makine entegrasyonuyla üretimi anlık izleyin ve planlayın.' },
    { icon: ShoppingCart, name: 'Perakende', desc: 'Hızlı satış, POS entegrasyonu, kampanya yönetimi', href: '/sectoral-solutions/solutions/#perakende', features: ['Hızlı Satış', 'POS', 'Kampanya'], valueProp: 'Hızlı satış ve POS entegrasyonuyla mağazada kesintisiz deneyim.' },
    { icon: Truck, name: 'Lojistik', desc: 'Barkod yönetimi, depo yönetimi, nakliye takibi', href: '/sectoral-solutions/solutions/#lojistik', features: ['Barkod', 'Depo', 'Nakliye Takibi'], valueProp: 'Barkodlu depo yönetimiyle sevkiyatı uçtan uca izleyin.' },
    { icon: Users, name: 'Gıda', desc: 'Parti/lot takibi, kalite yönetimi, izlenebilirlik', href: '/sectoral-solutions/solutions/#gida', features: ['Lot Takibi', 'Kalite', 'İzlenebilirlik'], valueProp: 'Parti/lot takibiyle gıdada tam izlenebilirlik ve kalite kontrolü.' },
    { icon: Briefcase, name: 'Tekstil', desc: 'Mağazacılık çözümleri, renk/beden takibi, fason yönetim', href: '/sectoral-solutions/solutions/#tekstil', features: ['Renk/Beden', 'Mağazacılık', 'Fason'], valueProp: 'Renk/beden ve fason yönetimiyle tekstilin tüm akışını kontrol edin.' },
    { icon: Cpu, name: 'Otomotiv', desc: 'Seri no takibi, teknik servis yönetimi, parça envanteri', href: '/sectoral-solutions/solutions/#otomotiv', features: ['Seri No', 'Teknik Servis', 'Parça Envanteri'], valueProp: 'Seri no ve parça envanteriyle servis süreçlerini eksiksiz yönetin.' },
    { icon: Database, name: 'Sağlık', desc: 'ÜTS entegrasyonu, (lot) reload takibi, son kullanma kontrolü', href: '/sectoral-solutions/solutions/#saglik', features: ['ÜTS', 'Lot Takibi', 'SKT Kontrolü'], valueProp: 'ÜTS entegrasyonu ve SKT kontrolüyle sağlıkta tam uyum.' },
  ];

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLdSektorel) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdSektorel) }} />
      <Navbar />

      {/* Hero Section - Modern SaaS Design */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-white pt-32 md:pt-44">
        {/* Rainbow Background Image */}
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{ zIndex: 1 }}>
          <img src="/rainbw.png" alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        
        {/* Left Side - Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              Sektörel ERP Çözümleri
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900"
            >
              Her Sektör İçin
              <br />
              <span className="bg-gradient-to-r from-red-600 via-blue-600 to-yellow-600 bg-clip-text text-transparent">Özel Çözümler</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed mx-auto"
            >
              İnşattan üretime, perakendeden lojistiğe kadar her sektörün ihtiyacına özel ERP çözümleri ile işletmenizi dijitalleştirin
            </motion.p>

            
          </div>
        </div>
      </section>

      {/* Sektörler - Grid Cards */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
              Her Sektör İçin Özel Çözümler
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              8 farklı sektör için özel olarak tasarlanmış ERP çözümleri ile işletmenizi dijitalleştirin
            </p>
          </motion.div>

          {/* 8 kart 3'er sütunluk yerleşimde son satırda 2 tane bırakıyor.
              Sütunları 6'ya bölüp her kartı 2 sütun genişletince satır başına
              yine 3 kart düşer; son satırdaki iki kartı (Otomotiv, Sağlık) bir
              sütun kaydırmak ise onları tam ortaya alır — 3'lü gridde kartlar
              tek sütun geniş olduğu için bu ortalama mümkün değildi. */}
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              const isFirstOfLastRow = index === sectors.length - 2;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`lg:col-span-2 ${isFirstOfLastRow ? 'lg:col-start-2' : ''}`}
                >
                  <Link href={sector.href} className="block h-full">
                    <Card className="h-full relative overflow-hidden transition-all duration-300 ease-out border-gray-200/90 hover:border-blue-400/80 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2.5 bg-white hover:bg-gradient-to-b hover:from-white hover:to-blue-50/20 group cursor-pointer rounded-2xl">
                      {/* Top Accent Gradient Bar on Hover */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <CardContent className="p-7 flex flex-col justify-between h-full space-y-6">
                        <div className="space-y-4">
                          {/* Header Row */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3.5">
                              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-md group-hover:shadow-blue-500/25 transition-all duration-300">
                                <Icon size={22} className="text-slate-700 group-hover:text-white transition-colors duration-300" />
                              </div>
                              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                                {sector.name}
                              </h3>
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300">
                              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all duration-300" />
                            </div>
                          </div>

                          {/* Description (Full Width - High Contrast Text) */}
                          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                            {sector.desc}
                          </p>
                        </div>

                        {/* Footer Section: Pill Badges by default, Value Proposition on Hover */}
                        <div className="pt-4 border-t border-slate-100 mt-auto">
                          <div className="relative min-h-[64px] flex items-center">
                            {/* Default Pill Badges (Fades out on hover) */}
                            <div className="w-full flex flex-wrap gap-1.5 transition-all duration-300 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                              {sector.features.map((feat, fidx) => (
                                <span
                                  key={fidx}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100/90 border border-slate-200 text-slate-800 shadow-2xs"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                  {feat}
                                </span>
                              ))}
                            </div>

                            {/* Hover Value Proposition Banner (Sharp 100% Visible Box) */}
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                              <div className="w-full flex items-center gap-2.5 px-3.5 py-2.5 bg-blue-50/95 border-2 border-blue-500/80 rounded-xl text-xs sm:text-sm font-bold text-blue-800 shadow-md shadow-blue-500/10">
                                <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                                <span className="leading-snug">{sector.valueProp}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Süreç - Nasıl Çalışırız */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Süreç</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Nasıl Çalışırız?</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Sektörel çözüm sürecimizi 4 adımda tamamlıyoruz</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'İhtiyaç Analizi', desc: 'Sektörünüzü ve iş süreçlerinizi detaylı analiz ediyoruz.' },
              { step: '02', title: 'Çözüm Tasarımı', desc: 'İhtiyaçlarınıza özel çözüm mimarisini tasarlıyoruz.' },
              { step: '03', title: 'Uygulama', desc: 'Profesyonel ekibimizle kurulum ve entegrasyonu gerçekleştiriyoruz.' },
              { step: '04', title: 'Destek', desc: 'Uzman teknik destek ve sürekli iyileştirme ile yanınızdayız.' },
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="text-6xl font-bold bg-gradient-to-br from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2">
                    <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referans - Güven veren sözler (ana sayfadaki Başarı Hikayeleri gibi ok tuşlarıyla gezilir) */}
      <section className="px-6 py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 text-gray-600 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.706 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.706 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>

          {/* Kayan alıntı slaytları */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${aktifSoz * 100}%)` }}
            >
              {referansSozleri.map((r, i) => (
                <div key={i} className="min-w-full px-2 flex flex-col">
                  <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-gray-200">
                    {r.soz}
                  </blockquote>
                  {/* mt-auto: isim bloğu tüm slaytlarda aynı hizada (en altta) durur */}
                  <div className="mt-auto">
                    <div className="font-semibold text-white">{r.ad}</div>
                    <div className="text-gray-400 text-sm">{r.unvan}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kontroller: ok tuşları + sayfa noktaları */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={() => setAktifSoz((prev) => (prev - 1 + referansSozleri.length) % referansSozleri.length)}
              aria-label="Önceki referans"
              className="w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="flex items-center gap-2.5">
              {referansSozleri.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setAktifSoz(i)}
                  aria-label={`Referans ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    aktifSoz === i ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setAktifSoz((prev) => (prev + 1) % referansSozleri.length)}
              aria-label="Sonraki referans"
              className="w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA - Profesyonel */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">İletişim</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Sektörünüze uygun çözümü birlikte bulalım
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Uzman ekibimiz işletmenizin ihtiyaçlarını analiz ederek size en uygun sektörel çözümü öneriyor
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg font-semibold">
              Ücretsiz Danışmanlık
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Sıkça Sorulan Sorular</h2>
          <div className="space-y-3">
            {sssSektorel.map((f, i) => (
              <details key={i} className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <span className="flex-1">{f.soru}</span>
                  <svg className="w-5 h-5 flex-shrink-0 mt-1 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 pl-[4.5rem] text-gray-600 leading-relaxed">{f.cevap}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm font-medium text-gray-500 mr-1">İlgili:</span>
            {[
              { etiket: 'Dikey Çözümler', href: '/vertical-solutions' },
              { etiket: 'Çözümler', href: '/solutions' },
              { etiket: 'Karşılaştırma', href: '/compare' },
              { etiket: 'İletişim', href: '/contact' },
            ].map((b) => (
              <Link key={b.href} href={b.href} className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 bg-white border border-gray-200 rounded-lg px-3 py-1.5 hover:border-purple-300 transition-colors">
                {b.etiket}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
