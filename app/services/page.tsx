'use client';

import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollIndicator from '@/components/ScrollIndicator';
import ServicesCarousel from '@/components/ServicesCarousel';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, CheckCircle2, Zap, Shield, TrendingUp } from 'lucide-react';

export default function ServicesPage() {
  const scrollToContact = () => {
    const message = 'Merhaba%20Hizmetler%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim?';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=905398563578&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white">
      <Navbar />
      <section className="relative min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center px-4 md:px-6 py-12 md:py-0 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 md:pt-0">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6"
          >
            <Sparkles size={14} />
            Profesyonel Hizmetler
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-gray-900"
          >
            İşletmeniz İçin
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Kapsamlı Çözümler</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            ERP kurulumu, e-dönüşüm entegrasyonu, özel yazılım geliştirme ve danışmanlık hizmetleri ile işletmenizi dijitalleştirin
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 font-medium shadow-xl"
            >
              Teklif Al
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="px-8 py-4 bg-white border-gray-300 text-gray-900 rounded-xl hover:bg-gray-50 font-medium"
            >
              Demo İsteyin
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: Zap, label: '20+ Yıl', desc: 'Sektör deneyimi' },
              { icon: CheckCircle2, label: '500+', desc: 'Tamamlanan proje' },
              { icon: Shield, label: '%99.9', desc: 'Sistem uptime' },
              { icon: TrendingUp, label: '7/24', desc: 'Teknik destek' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 rounded-xl bg-white shadow-md flex items-center justify-center">
                  <stat.icon size={20} className="text-blue-600" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-gray-900">{stat.label}</div>
                <div className="text-[10px] md:text-xs text-gray-500">{stat.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Çözümlerimiz Carousel */}
      <ServicesCarousel />

     

      {/* CTA */}
      <section className="px-4 md:px-6 py-12 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white p-6 md:p-10 lg:p-16 rounded-3xl text-center overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-blue-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-purple-200/30 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-4 md:mb-6">
                <Sparkles size={14} />
                Başlayın
              </div>
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
                İşinizi dijitalleştirmeye hazır mısınız?
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Size özel çözümlerimiz hakkında bilgi almak için hemen iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={scrollToContact}
                  className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 font-semibold shadow-xl text-sm md:text-base"
                >
                  Teklif Al
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="px-6 md:px-8 py-3 md:py-4 bg-white border-gray-300 text-gray-900 rounded-xl hover:bg-gray-50 font-semibold text-sm md:text-base"
                >
                  Demo İsteyin
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
