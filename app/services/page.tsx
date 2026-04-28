import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesCarousel from '@/components/ServicesCarousel';

export const metadata: Metadata = {
  title: 'Hizmetler | ERP CRM E-Dönüşüm Çözümleri | Gökkuşağı Yazılım',
  description: 'Mikro ERP kurulumu, e-dönüşüm entegrasyonu, özel yazılım geliştirme, danışmanlık ve destek hizmetleri.',
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl tracking-tight text-gray-900 mb-6">Hizmetlerimiz</h1>
          <p className="text-xl md:text-2xl text-gray-900 mb-12 max-w-3xl mx-auto">İşletmenizin dijital dönüşümü için kapsamlı çözümler</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105">Teklif Al</button>
            <button className="px-8 py-4 border border-gray-300 text-gray-900 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105">Demo İsteyin</button>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"><div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full" /></div></div>
      </section>

      {/* Garantiler */}
      <section className="px-6 py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[{t:'19+ Yıl',d:'Sektör deneyimi'},{t:'500+',d:'Tamamlanan proje'},{t:'%99.9',d:'Sistem uptime'},{t:'7/24',d:'Teknik destek'}].map((item,i)=>(
            <div key={i} className="text-center"><div className="text-3xl font-bold text-gray-900 mb-1">{item.t}</div><div className="text-sm text-gray-500">{item.d}</div></div>
          ))}
        </div>
      </section>

      {/* Çözümlerimiz Carousel */}
      <ServicesCarousel />

     

      {/* CTA */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">İletişim</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">İşinizi dijitalleştirmeye hazır mısınız?</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">Size özel çözümlerimiz hakkında bilgi almak için hemen iletişime geçin.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg font-semibold">Teklif Al</button>
            <button className="px-10 py-5 border-2 border-gray-200 text-gray-900 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 text-lg font-semibold">Demo İsteyin</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
