'use client';

import { Landmark, Package, Receipt, BarChart, Users, Wallet, Brain, Cpu, Globe, Star, TrendingUp, Award, Clock, FileText, Activity, Layers, CheckCircle, ArrowRight, Target, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function MikroJumpPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      
      if (scrollableHeight > 0) {
        setScrollProgress((scrollPosition / scrollableHeight) * 100);
      } else {
        setScrollProgress(0);
      }
      
      setShowScrollTop(scrollPosition > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const message = 'Merhaba, Mikro JUMP hakkında bilgi almak istiyorum.';
    window.location.href = `/contact?message=${encodeURIComponent(message)}&subject=teklif`;
  };

  const stats = [
    { value: '85%', label: 'Verimlilik', icon: TrendingUp },
    { value: '60%', label: 'Maliyet Düşüşü', icon: Target },
    { value: '95%', label: 'Hız', icon: Zap },
    { value: '3x', label: 'Performans', icon: Award }
  ];

  const features = [
    {
      icon: Package,
      title: 'Stok/Ürün Yönetimi',
      description: 'Stok ve ürün takibi',
      descriptionDetail: 'Depo yönetimi'
    },
    {
      icon: Landmark,
      title: 'Satış ve Müşteri Yönetimi',
      description: 'Satış süreçleri',
      descriptionDetail: 'Müşteri takibi'
    },
    {
      icon: Users,
      title: 'Satın Alma ve Tedarikçi Yönetimi',
      description: 'Satın alma süreçleri',
      descriptionDetail: 'Tedarikçi yönetimi'
    },
    {
      icon: Wallet,
      title: 'Masraf Yönetimi',
      description: 'Masraf kalemlerinin takibi',
      descriptionDetail: 'Detaylı maliyet analizi'
    },
    {
      icon: BarChart,
      title: 'Finans Yönetimi',
      description: 'Finansal süreçler',
      descriptionDetail: 'Ön muhasebe'
    },
    {
      icon: TrendingUp,
      title: 'Bütçe Yönetimi',
      description: 'Bütçe planlama',
      descriptionDetail: 'Takip ve analiz'
    },

  ];

  const benefits = [
    {
      number: '01',
      title: 'Yazılımdan Daha Fazlası',
      description: 'Yazılım bağımlılığının olmadığı, abonelik ve kiralama modeline sayesinde, düşük ilk yatırım maliyeti ile kullanmanın keyfini sunuyoruz.',
      icon: Zap
    },
    {
      number: '02',
      title: '7/24 Destek Hizmeti',
      description: 'Yaşadığınız soruna kolayca çare bulabileceğiniz bir altyapıya ve dilediğinizde bizden daima yardım alabileceğiniz destek hizmetlerine sahibiz.',
      icon: TrendingUp
    },
    {
      number: '03',
      title: 'Deneyime Dayalı Güven',
      description: '25 yılın bilgi birikimi ve onlarca müşterinin kullanım deneyimi ile geliştiriyor; servislerimizi abonelerimizin ihtiyaçlarına göre şekillendiriyoruz.',
      icon: Award
    }
  ];

  const modules = [
    {
      name: 'e-Fatura',
      icon: FileText,
      description: 'Elektronik fatura kesme ve yönetim',
      features: ['Otomatik gönderim', 'Arşivleme']
    },
    {
      name: 'e-Arşiv Fatura',
      icon: Activity,
      description: 'Elektronik arşiv fatura sistemi',
      features: ['Yasal uyum', 'Güvenli depolama', 'Hızlı erişim']
    },
    {
      name: 'e-İrsaliye',
      icon: Layers,
      description: 'Elektronik irsaliye yönetimi',
      features: ['Sevkiyat takibi', 'Otomatik eşleşme', 'Raporlama']
    },
    {
      name: 'e-Defter',
      icon: BarChart,
      description: 'Elektronik defter sistemi',
      features: ['Yasal uyum', 'Otomatik kayıt', 'Yedekleme']
    },
    {
      name: 'e-Mutabakat',
      icon: CheckCircle,
      description: 'Elektronik mutabakat sistemi',
      features: ['Hızlı mutabakat', 'Otomatik eşleşme', 'Raporlama']
    },
    {
      name: 'e-Bordro',
      icon: Clock,
      description: 'Elektronik bordro sistemi',
      features: ['SGK entegrasyonu', 'Otomatik hesaplama', 'Bildirim']
    },
    {
      name: 'e-SMMM',
      icon: Star,
      description: 'SMM elektronik sistem',
      features: ['Yasal uyum', 'Otomatik bildirim', 'Takip']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10">
            <div className="w-32 h-32 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <Image 
                src="/mikro-jump-logo.png" 
                alt="Mikro JUMP - Hızlı Satış ve Pazarlama Çözümü" 
                width={128}
                height={128}
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-gray-900"
          >
            Mikro
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">JUMP</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
 Mikro Yazılım iş ortağı Gökkuşağı Yazılım ve Danışmanlık'ın uzmanlığı ve Mikro Jump'ın yenilikçi teknolojileriyle, iş süreçlerinizi sektöre özel çözümlerle tek bir platformda yönetin. KOBİ'nizi rekabette öne çıkarmak, işlerinizde fark yaratmak ve geleceğe emin adımlarla ilerlemek için Mikro Jump ile büyük sıçrayışınızı gerçekleştirin!
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors font-medium"
          >
            Teklif Al
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mikro Jump Ana Paket</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mikro Jump Ana pakette Neler Var?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{feature.description}</p>
                  <p className="text-gray-500 text-xs italic">{feature.descriptionDetail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mikro Jump e-Dönüşüm Çözümleri</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mikro Jump İşletmelerin dijital dönüşüm sürecinde ihtiyaç duyduğu tüm e-Dönüşüm çözümlerini tek bir platformda sunarak, iş süreçlerinizi kolaylaştırır ve hızlandırır.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-purple-300 min-h-[280px] flex flex-col w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 text-center">{module.name}</h3>
                  <p className="text-gray-600 text-center text-sm mb-4">{module.description}</p>
                  <div className="space-y-2 flex-grow">
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircle size={12} className="mr-2 text-purple-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Neden <br /> Gökkuşağı Yazılım ve Danışmanlık <br /> ile Mikro Jump'a Geçmelisiniz?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
              Mikro Yazılım iş ortağı Gökkuşağı Yazılım ve Danışmanlık 25 yıllık tecrübesi ile işletmenizin tüm dijital dönüşüm süreçlerinde yanında.
              </p>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Mikro Jump Geçiş Sürecini Nasıl Yönetiyoruz:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
                  Ön Görüşme
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
                  Ücretsiz Analiz ve Checkup Hizmeti
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
                  İşletmenize En Uygun Paket Seçimi
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
                  Teklif ve Teklif Onayı
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
                  Uyarlama ve Aktarım (Ücretsiz)
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
                  Detay Analiz (Ücretsiz)
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
                  Eğitim (Ücretsiz)
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
                  Proje Teslimi
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
                  Uzaktan veya Yerinde Destek
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-2xl blur-xl" />
              <Image 
                src="/mikrojump.webp" 
                alt="Mikro JUMP Hızlı Satış ve Pazarlama Sistemi Ekran Görünümü" 
                width={800}
                height={600}
                className="relative w-full rounded-xl shadow-xl border border-gray-200/50" 
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-900 to-indigo-900 p-8 rounded-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Mikro Jump İle İlgili Detaylı Bilgi ve Sunum İçin Bize Ulaşabilirsiniz</h2>
            <p className="text-base mb-6 text-purple-100">Mikro JUMP, ek çözümler ve özellikleriyle İlgili detaylı bilgi almak, demo ve sunum talep etmek İçin bizimle İletişime geçin!</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="bg-white text-purple-900 py-3 px-8 rounded-lg font-medium hover:bg-purple-50"
            >
              İletişime Geç
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mikro Jump Hakkında Merak Edilenler</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mikro Jump ürünü hakkında sık sorulan soruları sizin için cevapladık.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: 'Mikro Jump\'ı Kimler Tercih Etmeli?',
                answer: 'Çalışan sayısı 5 ile 50 arasında olan, küçük ve orta ölçekli işletmeler, birden fazla sektörle ilgilenen ve birden fazla şubesi bulunan firmalar, sadece bir ürün değil, kurumsal bir çözüm ortağı arayan işletmeler, iş süreçlerini uçtan uca verimli ve kolay bir şekilde takip etmek isteyen, operasyonel verimliliğe önem veren şirketler, kontrollü büyümeyi hedefleyen ve ihtiyacından fazla fonksiyon satın almak istemeyen işletmeler, Mikro Jump\'ı tercih edebilir. Bu çözüm, işletmenizin ihtiyaçlarına uygun olarak ölçeklenebilir ve gereksiz maliyetlerden kaçınmanızı sağlar.'
              },
              { question: 'Mikro Jump\'ı Aynı Anda Kaç Kullanıcı Kullanabilir?', answer: '' },
              { question: 'Mikro Jump ile Zimmet Takibi Yapabilir Miyim?', answer: '' },
              { question: 'Mikro Jump SQL2014 Versiyonunda Çalışıyor Mu?', answer: '' },
              { question: 'İş Makinesi Kiralaması Yapıyorum. Operasyonlarımı Mikro Jump Üzerinden Yürütebilir Miyim?', answer: '' },
              { question: 'Mikro Jump ile Personel Kartlarında Toplu Değişiklik Yapabilir Miyim?', answer: '' },
              { question: 'Mikro Jump Üzerinden Kasalarla ve Yeni Nesil ÖKC\'ler ile Haberleşebilir Miyim?', answer: '' },
              { question: 'Mikro Jump ile Üretim Takibi Yapabilir Miyim?', answer: '' },
              { question: 'Mikro Jump ile Bankalardan Ekstre Aktarımı Yapabilir Miyim?', answer: '' },
              { question: 'Mikro Jump ile Ondalıklı/Tartılı Ürün Kaydı ve Satışı Yapabilir Miyim?', answer: '' },
              { question: 'Mikro Jump ile Birden Fazla Şirket ile Çalışabilir Miyim?', answer: '' },
              { question: 'Mikro Jump ile İrsaliyeyi Faturalaştırabilir Miyim?', answer: '' },
              { question: 'Mikro Jump ile Yeni Tasarlanan Stok Kartı Üzerinden Yetkilendirme Yapabilir Miyim?', answer: '' },
              { question: 'Mikro Jump ile Cari Kartı Oluştururken Karttan Çıkmadan Adres ve Yetkili Kartlarını da Oluşturabilir Miyim?', answer: '' },
              { question: 'Mikro Jump ile Satış Bütçesi Yapabilir Miyim?', answer: '' },
              { question: 'Mikro Jump ile Stok Kartlarındaki Grup Alanlarının İsmini Değiştirince Raporlar da Değişir Mi?', answer: '' },
              { question: 'Mikro Jump ile Satın Alma Şartı Girebilir Miyim?', answer: '' },
              { question: 'Mikro Jump ile Evraklara Excel\'den Aktarım Yapabilir Miyim?', answer: '' },
              { question: 'Mikro Jump ile E-Arşiv Faturası Kesebilir Miyim?', answer: '' },
              { question: 'Mikro Jump ile Bütçe Takibi Yapabilir Miyim?', answer: '' },
              { question: 'Mikro Jump ile Stoklarımı Detaylı Takip Edebilir Miyim?', answer: '' },
              { question: 'Mikro Jump ile Şube Bazlı Takip Yapabilir Miyim?', answer: '' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-bold mb-2">{item.question}</p>
                    {item.answer && <p className="text-gray-600 text-sm">{item.answer}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
