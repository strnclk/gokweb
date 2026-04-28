import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectoralCarousel from '@/components/SectoralCarousel';

export const metadata: Metadata = {
  title: 'Sektörel Çözümler | Sektöre Özel ERP Yazılımları | Gökkuşağı Yazılım',
  description: 'İnşaat, üretim, perakende, lojistik, gıda, tekstil, otomotiv ve daha fazla sektör için özel ERP çözümleri. Mikro sektörel çözümler.',
  keywords: 'sektörel çözümler, inşaat ERP, üretim ERP, perakende ERP, lojistik ERP, gıda ERP, tekstil ERP, otomotiv ERP, mikro sektör',
};

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

      {/* Sektörler - 3D Carousel */}
      <SectoralCarousel />

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
            <div className="text-gray-400 text-sm">Müşteri</div>
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
