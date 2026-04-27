import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sektörel Çözümler | Sektöre Özel ERP Yazılımları | Gökkuşağı Yazılım',
  description: 'İnşaat, üretim, perakende, lojistik, gıda, tekstil, otomotiv ve daha fazla sektör için özel ERP çözümleri. Mikro sektörel çözümler.',
  keywords: 'sektörel çözümler, inşaat ERP, üretim ERP, perakende ERP, lojistik ERP, gıda ERP, tekstil ERP, otomotiv ERP, mikro sektör',
};

const sectors = [
  {
    title: 'İnşaat',
    description: 'Proje planlama, şantiye yönetimi, maliyet analizi ve sözleşme takibi ile inşaat süreçlerinizi uçtan uca yönetin.',
    features: ['Proje Planlama', 'Şantiye Yönetimi', 'Maliyet Analizi', 'Sözleşme Takibi', 'İlerleme Raporu', 'İş Programı'],
    gradient: 'from-blue-600 to-blue-700',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    clients: '120+ işletme',
  },
  {
    title: 'Üretim',
    description: 'İş emri yönetimi, MRP planlama, kalite kontrol ve verimlilik analizi ile üretim süreçlerinizi optimize edin.',
    features: ['İş Emri Yönetimi', 'MRP Planlama', 'Kalite Kontrol', 'Verimlilik Analizi', 'Malzeme Takibi', 'Üretim Raporlama'],
    gradient: 'from-green-600 to-green-700',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    clients: '85+ işletme',
  },
  {
    title: 'Perakende',
    description: 'POS entegrasyonu, çoklu şube yönetimi ve müşteri sadakat programları ile perakende operasyonlarınızı güçlendirin.',
    features: ['POS Entegrasyonu', 'Çoklu Şube', 'Envanter Takibi', 'Sadakat Programı', 'Satış Analizi', 'Kampanya Yönetimi'],
    gradient: 'from-purple-600 to-purple-700',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z',
    clients: '95+ işletme',
  },
  {
    title: 'Lojistik',
    description: 'Filo yönetimi, rota optimizasyonu ve gerçek zamanlı takip ile lojistik maliyetlerinizi düşürün, verimliliği artırın.',
    features: ['Filo Yönetimi', 'Rota Optimizasyonu', 'Depo Yönetimi', 'Gerçek Zamanlı Takip', 'Sevkiyat Planlama', 'Teslimat Raporu'],
    gradient: 'from-orange-600 to-orange-700',
    icon: 'M8 17l4 4 4-4m-4-5v9M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29',
    clients: '60+ işletme',
  },
  {
    title: 'Gıda',
    description: 'Lot yönetimi, son kullanma takibi ve gıda güvenliği standartlarıyla güvenli üretim süreçleri oluşturun.',
    features: ['Lot Yönetimi', 'Son Kullanma Takibi', 'Gıda Güvenliği', 'Hijyen Raporlaması', 'Tarım Entegrasyonu', 'Sertifika Yönetimi'],
    gradient: 'from-emerald-600 to-emerald-700',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2.5 2.5 0 012.5 2.5V14a2 2 0 004 0v-2.945',
    clients: '45+ işletme',
  },
  {
    title: 'Tekstil',
    description: 'Kesim planlama, reçete yönetimi ve sezon takibi ile tekstil üretim süreçlerinizi dijitalleştirin.',
    features: ['Kesim Planlama', 'Reçete Yönetimi', 'Tedarik Zinciri', 'Sezon Takibi', 'Renk/Beden Yönetimi', 'Üretim Raporlama'],
    gradient: 'from-pink-600 to-pink-700',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    clients: '35+ işletme',
  },
  {
    title: 'Otomotiv',
    description: 'Servis yönetimi, yedek parça takibi ve garanti yönetimi ile otomotiv operasyonlarınızı profesyonelce yönetin.',
    features: ['Servis Yönetimi', 'Yedek Parça Takibi', 'Garanti Yönetimi', 'Müşteri İlişkileri', 'Bakım Planlama', 'Stok Optimizasyonu'],
    gradient: 'from-red-600 to-red-700',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    clients: '40+ işletme',
  },
  {
    title: 'Hizmet',
    description: 'CRM yönetimi, proje takibi ve faturalama otomasyonu ile hizmet tabanlı işletmenizin tüm süreçlerini yönetin.',
    features: ['CRM Yönetimi', 'Proje Takibi', 'Personel Performansı', 'Faturalama Otomasyonu', 'Randevu Sistemi', 'Memnuniyet Analizi'],
    gradient: 'from-indigo-600 to-indigo-700',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    clients: '70+ işletme',
  },
];

export default function SectoralSolutionsPage() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero - Aynı kalıyor */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl tracking-tight text-gray-900">
              Sektörel<br />Çözümler
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-900 mb-12 max-w-3xl mx-auto">
            Her sektörün ihtiyacına özel olarak tasarlanmış ERP çözümleri
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Ücretsiz Demo
            </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-900 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105">
              Broşür İndir
            </button>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* İstatistikler - Güven veren rakamlar */}
      <section className="px-6 py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">8</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider font-medium">Sektör</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider font-medium">Sektörel Modül</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider font-medium">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">19+</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider font-medium">Yıl Deneyim</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sektörler - Profesyonel Tablo Yapısı */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Çözümlerimiz</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Sektörel ERP Çözümleri</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl">Her sektörün kendine özgü ihtiyaçlarına yönelik olarak geliştirilmiş, deneyimli ekibimizle desteklediğimiz çözümler.</p>
          </div>

          <div className="space-y-4">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden group">
                <div className="grid lg:grid-cols-12 gap-0">
                  {/* Sol - İkon ve Başlık */}
                  <div className="lg:col-span-4 p-8 lg:p-10 flex items-center gap-5">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sector.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sector.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{sector.title}</h3>
                      <span className="text-sm text-gray-400">{sector.clients}</span>
                    </div>
                  </div>

                  {/* Orta - Açıklama */}
                  <div className="lg:col-span-4 p-8 lg:p-10 lg:border-x border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{sector.description}</p>
                  </div>

                  {/* Sağ - Özellikler ve Buton */}
                  <div className="lg:col-span-4 p-8 lg:p-10">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {sector.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">{feature}</span>
                      ))}
                      <span className="px-3 py-1 bg-gray-100 text-gray-400 rounded-md text-xs font-medium">+{sector.features.length - 3}</span>
                    </div>
                    <button className="text-sm font-semibold text-purple-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Detayları Gör
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
              { step: '04', title: 'Destek', desc: '7/24 teknik destek ve sürekli iyileştirme ile yanınızdayız.' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-gray-100 mb-4">{item.step}</div>
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

      {/* Referans - Güven veren söz */}
      <section className="px-6 py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 text-gray-600 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.706 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.706 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-gray-200">
            Gökkuşağı Yazılım ile çalışmaya başladığımdan bu yana iş süreçlerimiz %40 daha verimli hale geldi. Sektörümüze özel çözümleri ve 7/24 destekleriyle gerçek bir çözüm ortağı.
          </blockquote>
          <div>
            <div className="font-semibold text-white">Ahmet Yılmaz</div>
            <div className="text-gray-400 text-sm">Genel Müdür, Yılmaz İnşaat</div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg font-semibold">
              Ücretsiz Danışmanlık
            </button>
            <button className="px-10 py-5 border-2 border-gray-200 text-gray-900 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 text-lg font-semibold">
              Demo Talep Et
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
