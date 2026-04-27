import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Hizmetler | ERP CRM E-Dönüşüm Çözümleri | Gökkuşağı Yazılım',
  description: 'Mikro ERP kurulumu, e-dönüşüm entegrasyonu, özel yazılım geliştirme, danışmanlık ve destek hizmetleri.',
};

const services = [
  { title: 'Mikro ERP Kurulumu', desc: 'İşletmenizin ihtiyaçlarına göre kurulum, konfigürasyon ve entegrasyon.', features: ['İhtiyaç Analizi', 'Özel Konfigürasyon', 'Veri Transferi', 'Kullanıcı Eğitimi', 'Test ve Devreye Alma', 'Sonrası Destek'], gradient: 'from-purple-600 to-purple-700', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z', num: '01' },
  { title: 'E-Dönüşüm Entegrasyonu', desc: 'E-fatura, e-defter, e-arşiv ve e-imza entegrasyonları.', features: ['E-Fatura Kurulumu', 'E-Defter Entegrasyonu', 'E-Arşiv Sistemi', 'E-İmza Çözümü', 'GİB Uyumluluk', 'Otomatik Akış'], gradient: 'from-blue-600 to-blue-700', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', num: '02' },
  { title: 'Özel Yazılım Geliştirme', desc: 'Web, mobil ve kurumsal yazılımlar geliştiriyoruz.', features: ['Web Uygulamaları', 'Mobil Çözümler', 'API Entegrasyonu', 'Kurumsal Yazılımlar', 'Bulut Altyapı', 'Özel Tasarım'], gradient: 'from-violet-600 to-violet-700', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', num: '03' },
  { title: 'Danışmanlık Hizmetleri', desc: 'ERP seçimi, süreç optimizasyonu ve dijital dönüşüm stratejisi.', features: ['ERP Seçim Danışmanlığı', 'Süreç Optimizasyonu', 'Dijital Dönüşüm Stratejisi', 'Proje Yönetimi', 'Değişim Yönetimi', 'Verimlilik Analizi'], gradient: 'from-emerald-600 to-emerald-700', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', num: '04' },
  { title: 'Teknik Destek ve Bakım', desc: 'Sistemlerinizin sorunsuz çalışması için sürekli destek ve bakım.', features: ['7/24 Teknik Destek', 'Uzaktan Bağlantı', 'Düzenli Bakım', 'Güncelleme Yönetimi', 'Yedekleme Hizmeti', 'Performans İzleme'], gradient: 'from-orange-600 to-orange-700', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z', num: '05' },
  { title: 'Eğitim Hizmetleri', desc: 'Etkin kullanım için kapsamlı eğitim programları.', features: ['Kullanıcı Eğitimi', 'Yönetici Eğitimi', 'Raporlama Eğitimi', 'Sektörel Eğitimler', 'Online Eğitim', 'Sertifika Programı'], gradient: 'from-red-600 to-red-700', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', num: '06' },
];

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

      {/* Zigzag Hizmetler */}
      {services.map((s, index) => (
        <section key={index} className={`px-6 py-24 ${index%2===0?'bg-white':'bg-gray-50'}`}>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className={index%2!==0?'lg:order-2':''}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl font-bold text-gray-100">{s.num}</span>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-md`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon}/></svg>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{s.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{s.desc}</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {s.features.map((f,i)=>(<div key={i} className="flex items-center gap-2.5"><div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${s.gradient}`}></div><span className="text-sm text-gray-700 font-medium">{f}</span></div>))}
              </div>
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors">Detaylı Bilgi <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></button>
            </div>
            <div className={index%2!==0?'lg:order-1':''}>
              <div className={`bg-gradient-to-br ${s.gradient} rounded-2xl p-12 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative">
                  <div className="text-8xl font-bold text-white/20 mb-4">{s.num}</div>
                  <h4 className="text-2xl font-bold mb-3">{s.title}</h4>
                  <div className="space-y-3">
                    {s.features.map((f,i)=>(<div key={i} className="flex items-center gap-3"><div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center flex-shrink-0"><svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg></div><span className="text-sm text-white/90">{f}</span></div>))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Müşteri Sözü */}
      <section className="px-6 py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-10 h-10 text-gray-600 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.706 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.706 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-gray-200">Gökkuşağı Yazılım ile çalışmaya başladığımdan bu yana iş süreçlerimiz %40 daha verimli hale geldi. 7/24 destekleriyle gerçek bir çözüm ortağı.</blockquote>
          <div><div className="font-semibold text-white">Ahmet Yılmaz</div><div className="text-gray-400 text-sm">Genel Müdür, Yılmaz İnşaat</div></div>
        </div>
      </section>

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
