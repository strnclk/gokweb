'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const services = [
    'Mikro ERP Entegrasyonu',
    'E-Fatura Yönetimi',
    'E-Ticaret Entegrasyonu',
    'Özel Yazılım'
  ];

  const values = [
    { title: 'Güvenilirlik', desc: 'Müşterilerimize her zaman güvenilir çözümler sunuyoruz' },
    { title: 'Müşteri Odaklılık', desc: 'Müşteri memnuniyeti bizim önceliğimizdir' },
    { title: 'Kalite', desc: 'En yüksek kalite standartlarına uyuyoruz' },
    { title: 'Takım Ruhu', desc: 'Birlikte çalışarak başarıya ulaşıyoruz' }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold leading-tight mb-6"
          >
            Hakkımızda
            <br />
            <span className="text-gray-600">Gökkuşağı Yazılım</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            2005 yılından beri işletmelerin dijital dönüşümünde güvenilir ortağınız.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Hikayemiz</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Gökkuşağı Yazılım, 2005 yılında İstanbul'da kuruldu. Kurulduğumuz günden bu yana, işletmelerin dijital dönüşümüne katkıda bulunuyoruz.
                </p>
                <p>
                  Mikro ERP entegrasyonu, e-fatura yönetimi, e-ticaret çözümleri ve özel yazılım geliştirme alanlarında uzmanlaşmış ekibimizle, müşterilerimize en iyi çözümleri sunuyoruz.
                </p>
                <p>
                  Amacımız, işletmelerin verimliliğini artırmak ve dijital çağa hazırlamak.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-12 flex items-center justify-center">
              <div className="text-6xl font-bold text-blue-600">2005</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Hizmetlerimiz</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Size sunduğumuz çözümler
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-purple-100 hover:bg-white/80 transition-all hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Değerlerimiz</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Bizi farklı kılan değerler
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-blue-100 hover:bg-white/80 transition-all hover:shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12"
            >
              <h3 className="text-2xl font-bold mb-6">Misyonumuz</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                İşletmelerin dijital dönüşümüne katkıda bulunarak, verimliliklerini artırmak ve rekabet avantajı sağlamak.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12"
            >
              <h3 className="text-2xl font-bold mb-6">Vizyonumuz</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Türkiye'nin lider yazılım çözümleri sağlayıcısı olmak ve global ölçekte rekabet edebilebilir çözümler sunmak.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Başarılarımız ve Ödüllerimiz</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Mikro Yazılım iş ortaklığında kazandığımız başarılar
            </p>
          </motion.div>
          
          {/* Awards Carousel */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {[
                { year: '2025', awards: [
                  'Mikro Yazılım iş ortaklarımıza sağladığımız eğitim ve gelişim katkıları için teşekkür plaketi',
                  'Türkiye genelinde En Çok Mikro Fly Satışı Yapan 3. İş Ortağı'
                ]},
                { year: '2024', awards: [
                  'Türkiye genelinde En Çok Mikro Fly Satışı Yapan İş Ortağı',
                  'Marmara bölgesinde En Çok Yeni Müşteri Kazandıran İş Ortağı'
                ]},
                { year: '2023', awards: [
                  'Türkiye genelinde En Çok Mikro Jump Satışı Yapan 2. İş Ortağı',
                  'Marmara bölgesinde En Çok Net Satışı Yapan İş Ortağı',
                  'Marmara bölgesinde En Çok Cross-Sell Satışı Yapan İş Ortağı',
                  'Türkiye genelinde En Çok Cross-Sell Satışı Yapan İş Ortağı'
                ]},
                { year: '2022', awards: [
                  'Türkiye genelinde En Çok Cross-Sell Satışı Yapan 3. İş Ortağı'
                ]},
                { year: '2021', awards: [
                  'Türkiye genelinde En Çok Mikro Online Hesabım Satışı Yapan 2. İş Ortağı',
                  'Bölgesinde En Çok Mikro Online Hesabım Satışı Yapan İş Ortağı'
                ]}
              ].map((yearData, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex-shrink-0 w-80 bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-slate-900 mb-4">{yearData.year}</div>
                  <div className="space-y-3">
                    {yearData.awards.map((award, awardIndex) => (
                      <div key={awardIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-700 text-sm leading-relaxed">{award}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Awards Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-6 px-6 py-3 bg-slate-900 rounded-lg">
              <span className="text-white font-semibold text-sm">+15 Ödül</span>
              <span className="text-slate-400">|</span>
              <span className="text-white font-semibold text-sm">Türkiye Genelinde Dereceler</span>
              <span className="text-slate-400">|</span>
              <span className="text-white font-semibold text-sm">Mikro Yazılım Resmi İş Ortağı</span>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>


      {/* Why Us Section */}
      <section className="py-32 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Neden Biz?</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Bizi tercih etmeniz için 10 neden
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: '15+ Yıl Deneyim', desc: '2005 yılından beri sektörde lider konumdayız' },
              { title: 'Mikro Yazılım İş Ortaklığı', desc: 'Resmi Mikro Yazılım iş ortaklığı ile güvende' },
              { title: '15+ Ödül', desc: 'Türkiye genelinde kazandığımız başarılar' },
              { title: 'Özel Çözümler', desc: 'Her müşteriye özel yazılım çözümleri' },
              { title: 'Hızlı Destek', desc: '7/24 teknik destek ve hizmet' },
              { title: 'Esnek Fiyatlandırma', desc: 'Her bütçeye uygun çözüm paketleri' },
              { title: 'Lokal Destek', desc: 'Türkiye\'de yerel destek ve hizmet' },
              { title: 'Güvenilirlik', desc: 'Müşteri memnuniyeti odaklı hizmet' },
              { title: 'Teknoloji', desc: 'En güncel teknolojileri takip ediyoruz' },
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 hover:bg-white/80 transition-all hover:shadow-lg"
              >
                <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
