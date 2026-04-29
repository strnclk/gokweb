'use client';

import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';
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
  ContactForm: React.ComponentType;
}

export default function ContactContent({ whatsappNumber, email, contactMethods, ContactForm }: ContactContentProps) {
  return (
    <>
      {/* Hero Section - Modern Estetik Tasarım */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Dekoratif Elementler */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6"
          >
            <Sparkles size={14} />
            İletişim
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900"
          >
            Projelerinizi
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Konuşalım</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            İşletmenizin ihtiyaçları için en uygun ERP ve CRM çözümlerini birlikte belirleyelim
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={`tel:+90${whatsappNumber}`}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 font-medium shadow-xl flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Hemen Ara
            </a>
            <a
              href={`mailto:${email}`}
              className="px-8 py-4 bg-white border-gray-300 text-gray-900 rounded-xl hover:bg-gray-50 font-medium flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              E-posta Gönder
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">İletişim Bilgileri</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Size nasıl yardımcı olabiliriz?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = iconMap[method.iconName];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{method.title}</h3>
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mesaj Gönderin</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Size en kısa sürede dönüş yapacağız
            </p>
          </motion.div>

          <ContactForm />
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
