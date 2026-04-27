import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mikro Dikey Çözümler | Sektörel ERP Yazılımları | Gökkuşağı Yazılım',
  description: 'Mikro program dikey çözümleri. İnşaat, üretim, perakende, lojistik, hizmet ve finans sektörleri için özel ERP yazılımları.',
  keywords: 'mikro dikey çözümler, mikro inşaat, mikro üretim, mikro perakende, mikro lojistik, mikro hizmet, mikro finans',
};

const solutions = [
  {
    title: 'Mikro İnşaat',
    subtitle: 'İnşaat sektörüne özel ERP çözümü',
    description: 'İnşaat projelerinin tüm aşamalarını yönetebileceğiniz kapsamlı ERP çözümü. Proje yönetimi, maliyet kontrolü ve sözleşme takibi.',
    features: ['Proje Yönetimi', 'Maliyet Kontrolü', 'Raporlama ve Analiz', 'Sözleşme Takibi', 'Şantiye Yönetimi', 'İlerleme Takibi'],
    gradient: 'from-blue-600 to-blue-700',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    title: 'Mikro Üretim',
    subtitle: 'Üretim süreçlerinizi optimize edin',
    description: 'Üretim süreçlerinizi optimize eden modern üretim planlama sistemi. Kalite kontrol, stok yönetimi ve verimlilik analizi.',
    features: ['Üretim Planlama', 'Kalite Kontrol', 'Stok Yönetimi', 'Verimlilik Analizi', 'Malzeme Takibi', 'İş Emri Yönetimi'],
    gradient: 'from-green-600 to-green-700',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    title: 'Mikro Perakende',
    subtitle: 'Perakende satış yönetiminizi kolaylaştırın',
    description: 'Perakende satış ve envanter yönetiminizi kolaylaştıran çözüm. POS entegrasyonu, müşteri yönetimi ve kampanya yönetimi.',
    features: ['POS Entegrasyonu', 'Envanter Yönetimi', 'Müşteri Yönetimi', 'Kampanya Yönetimi', 'Satış Raporlama', 'Çoklu Şube'],
    gradient: 'from-purple-600 to-purple-700',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z',
  },
  {
    title: 'Mikro Lojistik',
    subtitle: 'Lojistik süreçlerinizi yönetin',
    description: 'Lojistik ve dağıtım süreçlerinizi yöneten kapsamlı sistem. Filo yönetimi, rota optimizasyonu ve kargo takibi.',
    features: ['Filo Yönetimi', 'Rota Optimizasyonu', 'Kargo Takibi', 'Depo Yönetimi', 'Sevkiyat Planlama', 'Teslimat Takibi'],
    gradient: 'from-orange-600 to-orange-700',
    icon: 'M8 17l4 4 4-4m-4-5v9M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29',
  },
  {
    title: 'Mikro Hizmet',
    subtitle: 'Hizmet sektörüne özel çözüm',
    description: 'Hizmet sektörlerinin yönetim ihtiyaçlarına özel çözüm. CRM entegrasyonu, servis yönetimi ve performans analizi.',
    features: ['CRM Entegrasyonu', 'Servis Yönetimi', 'Personel Takibi', 'Performans Analizi', 'Randevu Sistemi', 'Müşteri Memnuniyeti'],
    gradient: 'from-indigo-600 to-indigo-700',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Mikro Finans',
    subtitle: 'Finansal yönetiminizi optimize edin',
    description: 'Finansal yönetim ve muhasebe süreçlerinizi optimize eden sistem. Muhasebe yönetimi, bütçeleme ve finansal raporlama.',
    features: ['Muhasebe Yönetimi', 'Bütçeleme', 'Finansal Raporlama', 'Vergi Yönetimi', 'Cari Hesap Takibi', 'Banka Entegrasyonu'],
    gradient: 'from-red-600 to-red-700',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

export default function VerticalSolutionsPage() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero - Anasayfa tarzı full screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl tracking-tight text-gray-900">
              Mikro Dikey<br />Çözümler
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

      {/* Çözümler - ProductCard tarzı tam ekran bölümler */}
      {solutions.map((solution, index) => (
        <section key={index} className={`min-h-[70vh] flex items-center justify-center px-6 py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-6xl mx-auto text-center">
            <div className={`inline-flex p-8 rounded-2xl bg-gradient-to-br ${solution.gradient} text-white mb-10 shadow-lg`}>
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={solution.icon} />
              </svg>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 tracking-tight">{solution.title}</h3>
            <p className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">{solution.subtitle}</p>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed mb-10">{solution.description}</p>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
              {solution.features.map((feature, i) => (
                <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <span className="text-white text-sm font-semibold">✓</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <button className="px-10 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg border border-slate-800">
              Daha Fazla Bilgi
            </button>
          </div>
        </section>
      ))}

      {/* Trust Section tarzı - Koyu arka plan */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl text-center mb-20">
            Güvenilir Çözüm Ortağınız
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-blue-400">500+</div>
              <div className="text-gray-400 text-lg">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-purple-400">19+</div>
              <div className="text-gray-400 text-lg">Yıl Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-green-400">100%</div>
              <div className="text-gray-400 text-lg">Uzman Destek</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Anasayfa tarzı */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl mb-8 text-gray-900">
            Sektörünüze uygun<br />çözümü bulun
          </h2>
          <p className="text-xl text-gray-900 mb-12">
            Uzmanlarımız size en uygun Mikro dikey çözümü seçmenize yardımcı olsun
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg flex items-center justify-center gap-2">
              Teklif Al
            </button>
            <button className="px-10 py-5 border-2 border-gray-300 text-gray-900 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 text-lg">
              Demo İsteyin
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
