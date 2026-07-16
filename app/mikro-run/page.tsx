'use client';

import { Landmark, Package, Receipt, BarChart, Users, Wallet, Brain, Cpu, Globe, Star, TrendingUp, Award, Clock, FileText, Activity, Layers, CheckCircle, ArrowRight, Target, Zap, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import HeroSection from "@/components/HeroSection";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function MikroRunPage() {
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
    const message = 'Merhaba, Mikro RUN hakkında bilgi almak istiyorum.';
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
      icon: Receipt,
      title: 'E-Dönüşüm Çözümleri',
      description: 'E-Fatura, E-Arşiv',
      descriptionDetail: 'E-İrsaliye, E-Defter'
    },
    {
      icon: BarChart,
      title: 'Raporlama',
      description: 'Detaylı raporlar',
      descriptionDetail: 'Analiz ve istatistikler'
    }
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
      features: [ 'Otomatik gönderim', 'Arşivleme']
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

  const faqlar = [
    {
      question: 'Mikro Run ile Neler Yapabilirsiniz?',
      answer: 'Mikro Run ile stok ve ürün takibi, fatura ve irsaliye düzenleme, e-Fatura/e-Arşiv gönderimi, cari hesap alacak-borç yönetimi ve kasa/banka hareketlerinin anlık takibini yapabilirsiniz.'
    },
    {
      question: 'Mikro Run\'ı Kimler Tercih Etmeli?',
      answer: 'Esnaf, serbest meslek sahipleri, yeni kurulan girişimler ve 5 çalışan altındaki mikro ölçekli işletmeler için ideal bir ön muhasebe ve e-Dönüşüm paketidir.'
    },
    {
      question: 'Mikro Run Çalışması için Başka Bir Yazılım Almalı mıyım?',
      answer: 'Hayır, Mikro Run tam kapsamlı bir ön muhasebe altyapısı sunar ve çalışması için ek bir yazılım lisansına ihtiyaç duymaz.'
    },
    {
      question: 'Mikro Run ile e-Fatura ve e-Arşiv Faturası Kesebilir miyim?',
      answer: 'Evet, hazır e-Fatura ve e-Arşiv entegrasyonu sayesinde GİB ile uyumlu şekilde saniyeler içinde e-fatura düzenleyebilirsiniz.'
    },
    {
      question: 'Mikro Run Birden Fazla Şirket ile Çalışabilir mi?',
      answer: 'Evet, tek bir lisans üzerinden birden fazla firmanın ön muhasebe kayıtlarını ayrı ayrı tutabilirsiniz.'
    },
    {
      question: 'Mikro Run\'da Stok Ürünlerinin Fiyat, Adet ve Birimlerini Listeleyebilir miyim?',
      answer: 'Evet, gelişmiş stok yönetimi modülü ile ürünlerinizin miktar, birim, grup ve fiyat detaylarını anlık olarak listeleyebilirsiniz.'
    },
    {
      question: 'Mikro Run Bulut Üzerinden veya Mobil Cihazlardan Kullanılabilir mi?',
      answer: 'Evet, Mikro Run masaüstü ve bulut seçenekleriyle hem web hem de mobil uygulama desteği üzerinden güvenle erişilebilir.'
    },
    {
      question: 'İleride İşletmem Büyüdüğünde Mikro Jump veya Fly\'a Geçiş Yapabilir miyim?',
      answer: 'Evet, veri kaybı yaşamadan tek tıkla Mikro Jump veya Mikro Fly üst segment çözümlere kolayca yükseltme yapabilirsiniz.'
    },
    {
      question: 'Mikro Run Kullanımı İçin Özel Eğitim Gerekli mi?',
      answer: 'Sade ve kullanıcı dostu arayüzü sayesinde muhasebe bilgisi olmayan personel dahi birkaç saatlik ücretsiz oryantasyon eğitimiyle kullanmaya başlayabilir.'
    },
    {
      question: 'Verilerimiz Otomatik Olarak Yedekleniyor mu?',
      answer: 'Evet, güvenli otomatik yedekleme altyapısı ile ticari verileriniz olası donanım arızalarına ve siber risklere karşı şifreli olarak korunur.'
    }
  ];
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqlar
      .filter((f) => f.answer)
      .map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-white pt-32 md:pt-44 pb-24">
        <div className="max-w-6xl mx-auto text-center">
          <Breadcrumb
            items={[{ label: 'Anasayfa', href: '/' }, { label: 'Ürünler' }, { label: 'Mikro Run' }]}
            accentClass="hover:text-blue-600"
            className="justify-center mb-8"
          />
          <div className="mb-10">
            <div className="w-32 h-32 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <Image 
                src="/mikro-run-logo.png" 
                alt="Mikro RUN - KOBİ ERP ve İş Yönetim Çözümü" 
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
            <span className="text-rose-900">RUN</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
Esnaf, serbest meslek sahipleri ve mikro işletmeler için ideal bir e-Dönüşüm paketidir. Kolay kullanım, sade ve anlaşılır menülerle, hazır fatura tasarımı, e-fatura kesme özelliği ve anahtar teslim e-fatura çözümleri sunar. Mikro RUN, tüm finansal ve organizasyonel süreçlerinizi yönetmek için mükemmel bir destek sağlar.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-3 bg-rose-900 text-white rounded-lg hover:bg-rose-800 transition-colors font-medium"
          >
            Teklif Al
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mikro Run Ana Paket</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mikro Run Ana pakette Neler Var?
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
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-rose-300"
                >
                  <div className="w-12 h-12 bg-rose-900 rounded-lg flex items-center justify-center mb-4">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mikro Run e-Dönüşüm Çözümleri</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mikro RUN İşletmelerin dijital dönüşüm sürecinde ihtiyaç duyduğu tüm e-Dönüşüm çözümlerini tek bir platformda sunarak, iş süreçlerinizi kolaylaştırır ve hızlandırır.
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
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-rose-300 min-h-[280px] flex flex-col w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                  <div className="w-12 h-12 bg-rose-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 text-center">{module.name}</h3>
                  <p className="text-gray-600 text-center text-sm mb-4">{module.description}</p>
                  <div className="space-y-2 flex-grow">
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircle size={12} className="mr-2 text-rose-900" />
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Neden <br /> Gökkuşağı Yazılım ve Danışmanlık <br /> ile Mikro Yazılım'a Geçmelisiniz?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
              Mikro Yazılım iş ortağı Gökkuşağı Yazılım ve Danışmanlık 25 yıllık tecrübesi ile işletmenizin tüm dijital dönüşüm süreçlerinde yanında.
              </p>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Mikro Yazılım Geçiş Sürecini Nasıl Yönetiyoruz:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-rose-900 flex-shrink-0" />
                  Ön Görüşme
                </div>
                
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-rose-900 flex-shrink-0" />
                  İşletmenize En Uygun Paket Seçimi
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-rose-900 flex-shrink-0" />
                  Teklif ve Teklif Onayı
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-rose-900 flex-shrink-0" />
                  Uyarlama ve Aktarım (Ücretsiz)
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-rose-900 flex-shrink-0" />
                  Detay Analiz (Ücretsiz)
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-rose-900 flex-shrink-0" />
                  Eğitim (Ücretsiz)
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-rose-900 flex-shrink-0" />
                  Proje Teslimi
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-rose-900 flex-shrink-0" />
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
              <div className="absolute -inset-4 bg-rose-900/10 rounded-2xl blur-xl" />
              <Image 
                src="/mikrorun.webp" 
                alt="Mikro RUN KOBİ ERP ve İş Yönetim Sistemi Ekran Görünümü" 
                width={800}
                height={600}
                className="relative w-full rounded-xl shadow-xl border border-gray-200/50" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mikro Run ile İşlerinizi Geleceğe Taşıyın!</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mikro Run, işletmenizin ihtiyaçlarına özel çözümler sunarak muhasebe ve iş yönetimini kolaylaştırır. Modern teknolojilerle desteklenen bu yazılım, her zaman güncel kalarak değişen mevzuat ve iş gereksinimlerine hızlıca uyum sağlar. Kullanıcı dostu arayüzü sayesinde karmaşık işlemleri basit adımlarla yönetebilir, işinizi daha verimli hale getirebilirsiniz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Kolay Ve İşlevsel Çözümler',
              'Daima Güncel Sistem',
              'Anahtar Teslim e-Fatura',
              '7/24 Canlı Destek Hizmeti',
              'Güvenli Yedekleme',
              'E-Ticaret Entegrasyonu',
              'Mobil Uygulama Desteği',
              'Masaüstü veya Bulut Uygulama',
              'Masraf Yönetimi',
              '1 Ek Kullanıcı',
              'Sektörel Çözümler',
              'Ek Çözümler'
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-rose-300"
              >
                <CheckCircle size={20} className="text-rose-900 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
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
            className="bg-rose-900 p-8 rounded-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Mikro Run İle İlgili Detaylı Bilgi ve Sunum İçin Bize Ulaşabilirsiniz</h2>
            <p className="text-base mb-6 text-rose-100">Mikro RUN, ek çözümler ve özellikleriyle İlgili detaylı bilgi almak, demo ve sunum talep etmek İçin bizimle İletişime geçin!</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="bg-white text-rose-900 py-3 px-8 rounded-lg font-medium hover:bg-rose-50"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mikro Run Hakkında Merak Edilenler</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mikro Run ürünü hakkında sık sorulan soruları sizin İçin cevapladık.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqlar.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-start gap-4 p-6 cursor-pointer list-none">
                    <span className="w-8 h-8 bg-rose-900 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{index + 1}</span>
                    <h3 className="flex-1 text-lg font-bold text-gray-900">{faq.question}</h3>
                    <svg className="w-5 h-5 flex-shrink-0 mt-1 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-6 pl-[4.5rem] text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
