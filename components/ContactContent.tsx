'use client';

import { Phone, Mail, MapPin, Sparkles, CheckCircle2, Zap, Users, Target } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap: Record<string, any> = {
  Phone,
  Mail,
  MapPin,
};

interface ContactContentProps {
  whatsappNumber: string;
  email: string;
  contactMethods: Array<{
    iconName: string;
    title: string;
    value: string;
    link: string | null;
  }>;
}

export default function ContactContent({ whatsappNumber, email, contactMethods }: ContactContentProps) {
  return (
    <>
      {/* Hero Section - Profesyonel Modern Tasarım */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-32 md:pt-44">
        {/* Dekoratif Elementler */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Sol Taraf - İçerik */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6"
              >
                <Sparkles size={14} />
                Profesyonel İletişim
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900"
              >
                İşletmenizi
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Dijitalleştirelim</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
              >
                20+ yıllık deneyimimizle işletmeniz için en uygun ERP, CRM ve e-dönüşüm çözümlerini birlikte belirleyelim. Ücretsiz danışmanlık için hemen iletişime geçin.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a
                  href={`tel:+90${whatsappNumber}`}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 font-medium shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  <Phone size={20} />
                  Hemen Ara
                </a>
                <a
                  href={`mailto:${email}`}
                  className="px-8 py-4 bg-white border-gray-300 text-gray-900 rounded-xl hover:bg-gray-50 font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  <Mail size={20} />
                  E-posta Gönder
                </a>
              </motion.div>

              {/* İstatistikler */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">20+</div>
                  <div className="text-xs text-gray-500">Yıl Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-xs text-gray-500">Proje</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">7/24</div>
                  <div className="text-xs text-gray-500">Destek</div>
                </div>
              </motion.div>
            </div>

            {/* Sağ Taraf - Özellikler */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Neden Biz?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-1">Hızlı Entegrasyon</h4>
                      <p className="text-gray-600 text-sm">Mevcut sistemlerinizle kolay entegrasyon</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-1">Uzman Ekip</h4>
                      <p className="text-gray-600 text-sm">20+ yıllık deneyimli profesyonel ekip</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-1">Ölçeklenebilir Çözümler</h4>
                      <p className="text-gray-600 text-sm">İşletmenizle birlikte büyüyen sistemler</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-1">Sürekli Destek</h4>
                      <p className="text-gray-600 text-sm">7/24 teknik destek ve danışmanlık</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">İletişim</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Size nasıl yardımcı olabiliriz?
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = iconMap[method.iconName];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-gray-900">{method.title}</h3>
                      {method.link ? (
                        <a
                          href={method.link}
                          className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm">{method.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Konum</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Bizi ziyaret edin
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 overflow-hidden shadow-xl"
          >
            <iframe
              src="https://maps.google.com/maps?q=Eryilmazlar+Sokak+No:2+Icerenkoy+Atasehir+Istanbul&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              className="rounded-xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
}
