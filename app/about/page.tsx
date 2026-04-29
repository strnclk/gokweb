'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { Target, Award, Users, Zap, Shield, Heart, Clock, TrendingUp, CheckCircle, Star, Trophy, Briefcase, Code, Database } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { value: '19+', label: 'Yıllık Deneyim', icon: Clock },
    { value: '500+', label: 'Mutlu Müşteri', icon: Users },
    { value: '15+', label: 'Ödül', icon: Trophy },
    { value: '100%', label: 'Müşteri Memnuniyeti', icon: Heart }
  ];

  const services = [
    { title: 'Mikro ERP Entegrasyonu', icon: Database, desc: 'İşletmenizin tüm süreçlerini tek bir platformda yönetin' },
    { title: 'E-Fatura Yönetimi', icon: Code, desc: 'E-fatura, e-defter ve e-arşiv süreçlerini otomatikleştirin' },
    { title: 'E-Ticaret Entegrasyonu', icon: Briefcase, desc: 'Tüm pazar yerlerini tek bir panelden yönetin' },
    { title: 'Özel Yazılım', icon: Zap, desc: 'İşletmenize özel çözümler geliştiriyoruz' }
  ];

  const values = [
    { title: 'Güvenilirlik', desc: 'Müşterilerimize her zaman güvenilir çözümler sunuyoruz', icon: Shield },
    { title: 'Müşteri Odaklılık', desc: 'Müşteri memnuniyeti bizim önceliğimizdir', icon: Heart },
    { title: 'Kalite', desc: 'En yüksek kalite standartlarına uyuyoruz', icon: CheckCircle },
    { title: 'Takım Ruhu', desc: 'Birlikte çalışarak başarıya ulaşıyoruz', icon: Users }
  ];

  const reasons = [
    { title: '15+ Yıl Deneyim', desc: '2005 yılından beri sektörde lider konumdayız', icon: TrendingUp },
    { title: 'Mikro Yazılım İş Ortaklığı', desc: 'Resmi Mikro Yazılım iş ortaklığı ile güvende', icon: Award },
    { title: '15+ Ödül', desc: 'Türkiye genelinde kazandığımız başarılar', icon: Trophy },
    { title: 'Özel Çözümler', desc: 'Her müşteriye özel yazılım çözümleri', icon: Target },
    { title: 'Hızlı Destek', desc: '7/24 teknik destek ve hizmet', icon: Zap },
    { title: 'Esnek Fiyatlandırma', desc: 'Her bütçeye uygun çözüm paketleri', icon: Briefcase },
    { title: 'Lokal Destek', desc: 'Türkiye\'de yerel destek ve hizmet', icon: Users },
    { title: 'Güvenilirlik', desc: 'Müşteri memnuniyeti odaklı hizmet', icon: Shield },
    { title: 'Teknoloji', desc: 'En güncel teknolojileri takip ediyoruz', icon: Code }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold leading-tight mb-6 text-gray-900"
          >
            Hakkımızda
            <br />
            <span className="text-gray-600">Gökkuşağı Yazılım</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8}}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            GÖKKUŞAĞI Yazılım ve Danışmanlık olarak 2005 yılında teknolojik yenilikler ve yazılım çözümleri sunmak amacıyla faaliyete geçtik.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8}}
            className="flex flex-wrap justify-center gap-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Hikayemiz</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  GÖKKUŞAĞI Yazılım ve Danışmanlık olarak 2005 yılında teknolojik yenilikler ve yazılım çözümleri sunmak amacıyla faaliyete geçtik. İnsana ve teknolojiye olan bağlılığımızla, deneyimli ekibimizle dijital dönüşüm alanında işletmelere özel çözümler geliştirmeye devam ediyoruz.
                </p>
                <p>
                  Sağladığımız hizmetler arasında ERP entegrasyonları, web uygulamaları, hızlı satış yazılımları, mobil çözümler, el terminali yazılımları, e-ticaret ve pazar yeri entegrasyonları ile pos ve banka entegrasyonları yer alıyor. Mikro Yazılım uygulamalarının satış ve desteğini sağlıyor, Mikro kullanıcılarının yıllık yazılım ve donanım bakım destek hizmetlerini sunuyoruz.
                </p>
                <p>
                  Ayrıca, finansal yapı, rapor ve analiz danışmanlığı ile bilgisayar ve çevre birimleri satış ve desteği hizmetleri de vermekteyiz.
                </p>
                <p>
                  Kurumların ihtiyaçlarını detaylı bir şekilde analiz ederek en uygun yazılım paketini tespit ediyor ve kurulumunu gerçekleştiriyoruz. Ticari uygulamaların verimliliği, doğru kurulum ve entegrasyon ile mümkündür. GÖKKUŞAĞI olarak, farklı sektörlerde edindiğimiz bilgi birikimi ve deneyim sayesinde en doğru kurulumu en hızlı şekilde gerçekleştiriyoruz.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-16 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-8xl font-bold text-blue-600 mb-4">2005</div>
                <div className="text-gray-600 text-lg">Kuruluş Yılı</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Size sunduğumuz çözümler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl  border border-gray-100 hover:border-blue-200"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Değerlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Bizi farklı kılan değerler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6}}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Misyonumuz</h3>
              <p className="text-lg text-blue-50 leading-relaxed">
                Yenilikçi çözümler sunarak, müşterilerimizin beklentilerini aşan, en üst düzeyde hizmet kalitesini sağlayan bir anlayışla hareket ediyoruz. Sektördeki liderliğimizi pekiştirmek ve sürdürülebilir başarıyı yakalamak adına, sürekli gelişen teknoloji ve pazar dinamiklerine uyum sağlayarak kaliteli ürünler ve hizmetler geliştirmeyi taahhüt ediyoruz. İnsan odaklı yaklaşımımız sayesinde, yalnızca müşterilerimize değil, çalışanlarımıza ve iş ortaklarımıza da değer katmayı hedefliyoruz. Çalışanlarımızın yetkinliklerini artırarak, inovasyonu teşvik eden bir çalışma ortamı oluşturuyor; paydaşlarımızla güçlü ve uzun vadeli iş birlikleri kurarak sektörümüzde fark yaratıyoruz.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8}}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Vizyonumuz</h3>
              <p className="text-lg text-blue-50 leading-relaxed">
                İleri teknolojiler ve sürdürülebilir uygulamaları temel alarak, sektörde güvenilirliğin ve mükemmelliğin simgesi haline gelmeyi amaçlıyoruz. Küresel ölçekte müşterilerimizin hayatını kolaylaştıran, iş süreçlerini daha verimli hale getiren yenilikçi çözümler geliştirerek, yalnızca bugün değil, geleceğin iş dünyasına da yön veren bir marka olmayı hedefliyoruz. Çevreye duyarlı üretim süreçleri, etik değerler ve sürekli iyileştirme anlayışıyla hareket ederek, toplum ve ekonomi için katma değer yaratmayı önemsiyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Başarılarımız ve Ödüllerimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Mikro Yazılım iş ortaklığında kazandığımız başarılar
            </p>
          </motion.div>

          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {[
                { year: '2025', award: 'Mikro Yazılım iş ortaklarımıza sağladığımız eğitim ve gelişim katkıları için teşekkür plaketi', icon: Trophy },
                { year: '2025', award: 'Türkiye genelinde En Çok Mikro Fly Satışı Yapan 3. İş Ortağı', icon: Award },
                { year: '2024', award: 'Türkiye genelinde En Çok Mikro Fly Satışı Yapan İş Ortağı', icon: Star },
                { year: '2024', award: 'Marmara bölgesinde En Çok Yeni Müşteri Kazandıran İş Ortağı', icon: Target },
                { year: '2023', award: 'Türkiye genelinde En Çok Mikro Jump Satışı Yapan 2. İş Ortağı', icon: Trophy },
                { year: '2023', award: 'Marmara bölgesinde En Çok Net Satışı Yapan İş Ortağı', icon: Award },
                { year: '2023', award: 'Marmara bölgesinde En Çok Cross-Sell Satışı Yapan İş Ortağı', icon: Star },
                { year: '2023', award: 'Türkiye genelinde En Çok Cross-Sell Satışı Yapan İş Ortağı', icon: Target },
                { year: '2022', award: 'Türkiye genelinde En Çok Cross-Sell Satışı Yapan 3. İş Ortağı', icon: Trophy },
                { year: '2021', award: 'Türkiye genelinde En Çok Mikro Online Hesabım Satışı Yapan 2. İş Ortağı', icon: Award },
                { year: '2021', award: 'Bölgesinde En Çok Mikro Online Hesabım Satışı Yapan İş Ortağı', icon: Star }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex-shrink-0 w-80 bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md "
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-3">{item.year}</div>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.award}</p>
                </motion.div>
              ))}
              {[...Array(11)].map((_, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 w-80 bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    {[Trophy, Award, Star, Target][index % 4] && React.createElement([Trophy, Award, Star, Target][index % 4], { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-3">2023</div>
                  <p className="text-gray-700 text-sm leading-relaxed">Türkiye genelinde dereceler</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-8 px-8 py-4 bg-gray-900 rounded-xl">
              <span className="text-white font-semibold text-sm">+15 Ödül</span>
              <span className="text-gray-400">|</span>
              <span className="text-white font-semibold text-sm">Türkiye Genelinde Dereceler</span>
              <span className="text-gray-400">|</span>
              <span className="text-white font-semibold text-sm">Mikro Yazılım Resmi İş Ortağı</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Neden Biz?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Bizi tercih etmeniz için 9 neden
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y:20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6}}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl border border-gray-100 hover:border-blue-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{reason.title}</h3>
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
