'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const whatsappNumber = '905398563578';
  const email = 'satis@gokkusagiyazilim.com.tr';
  const address = 'İçerenköy Mah. Eryılmazlar Sokak No:2 Kemal Bey İş Merkezi Kat:4 Daire:18 Ataşehir/İstanbul';

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefon',
      value: whatsappNumber,
      link: `tel:+90${whatsappNumber}`
    },
    {
      icon: Mail,
      title: 'E-posta',
      value: email,
      link: `mailto:${email}`
    },
    {
      icon: MapPin,
      title: 'Adres',
      value: 'Ataşehir, İstanbul',
      link: null
    }
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
            İletişim
            <br />
            <span className="text-gray-600">Gökkuşağı Yazılım</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Projelerinizi konuşalım, birlikte başaralım
          </motion.p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">İletişim Bilgileri</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Size nasıl yardımcı olabiliriz?
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-blue-100 hover:bg-white/80 transition-all hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                {method.link ? (
                  <a
                    href={method.link}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{method.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Map Section */}
      <section className="py-32 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Konum</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Bizi ziyaret edin
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-blue-100 overflow-hidden shadow-lg"
          >
            <iframe
              src="https://maps.google.com/maps?q=Eryilmazlar+Sokak+No:2+Icerenkoy+Atasehir+Istanbul&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              className="rounded-2xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
