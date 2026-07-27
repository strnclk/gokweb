'use client';

import { Phone, Mail, MapPin, Sparkles, CheckCircle2, Zap, Users, Target, Star, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import GoogleReviewQR from '@/components/GoogleReviewQR';
import { GOOGLE_REVIEWS_URL } from '@/lib/constants';

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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Sol Taraf - İçerik */}
            <div className="text-center lg:text-left">
              <div
                className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6"
                style={{ animationDelay: '0s' }}
              >
                <Sparkles size={14} />
                Profesyonel İletişim
              </div>

              <h1
                className="animate-fade-up text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900"
                style={{ animationDelay: '0.1s' }}
              >
                İşletmenizi
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Dijitalleştirelim</span>
              </h1>

              <p
                className="animate-fade-up text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
                style={{ animationDelay: '0.2s' }}
              >
                20+ yıllık deneyimimizle işletmeniz için en uygun ERP, CRM ve e-dönüşüm çözümlerini birlikte belirleyelim. Ücretsiz danışmanlık için hemen iletişime geçin.
              </p>

              <div
                className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                style={{ animationDelay: '0.15s' }}
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
              </div>

              {/* İstatistikler */}
              <div
                className="animate-fade-up mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
                style={{ animationDelay: '0.15s' }}
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
                  <div className="text-2xl font-bold text-gray-900">Uzman</div>
                  <div className="text-xs text-gray-500">Destek</div>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Özellikler */}
            <div
              className="animate-fade-in-side hidden lg:block"
              style={{ '--fade-x': '3.125rem', animationDelay: '0.2s' } as React.CSSProperties}
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Neden Biz?</h3>
                <div className="grid grid-cols-2 gap-3.5 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold text-xs mb-0.5">Hızlı Entegrasyon</h4>
                      <p className="text-gray-500 text-[11px] leading-tight">Mevcut sistemlerle kolay entegrasyon</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold text-xs mb-0.5">Uzman Ekip</h4>
                      <p className="text-gray-500 text-[11px] leading-tight">20+ yıllık deneyimli profesyonel kadro</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold text-xs mb-0.5">Ölçeklenebilir</h4>
                      <p className="text-gray-500 text-[11px] leading-tight">İşletmenizle birlikte büyüyen modüller</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold text-xs mb-0.5">Sürekli Destek</h4>
                      <p className="text-gray-500 text-[11px] leading-tight">Uzman teknik destek ve danışmanlık</p>
                    </div>
                  </div>
                </div>

                {/* --- MÜŞTERİ DENEYİM KÖŞESİ (Prominent Eye-Catching QR & Social Proof Banner) --- */}
                <div className="pt-5 border-t border-gray-200">
                  <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-5 text-white shadow-2xl border border-indigo-700/50">
                    {/* Arka plan parlama efekti */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/20 rounded-full blur-2xl" />

                    <div className="relative z-10">
                      {/* Üst Başlık & Rozet */}
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                          <h5 className="text-xs font-black uppercase tracking-widest text-blue-200">
                            Deneyimleriniz Bizim İçin Çok Değerli
                          </h5>
                        </div>
                        <div className="flex items-center gap-1 bg-amber-400/20 text-amber-300 px-2.5 py-1 rounded-full border border-amber-400/40 text-xs font-bold shadow-inner">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>5.0 / 5.0</span>
                        </div>
                      </div>

                      {/* Ana İçerik Grid (QR Kod + CTA) */}
                      <div className="flex items-center gap-5">
                        {/* Büyütülmüş Dikkat Çekici QR Kod Kutusu */}
                        <a
                          href={GOOGLE_REVIEWS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Google Haritalar Yorum Yap"
                          className="w-32 h-32 min-w-[128px] min-h-[128px] bg-white rounded-2xl p-2 shadow-2xl border-2 border-blue-400/60 flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer shrink-0 relative group"
                        >
                          <GoogleReviewQR url={GOOGLE_REVIEWS_URL} size={112} />
                          <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center text-[10px] font-bold text-blue-900 bg-white/80 backdrop-blur-[1px]">
                            Taramak İçin Tıklayın
                          </div>
                        </a>

                        {/* Bilgi Metni & Google CTA Butonu */}
                        <div className="flex-1 min-w-0 space-y-2.5">
                          <div className="flex items-center gap-2 text-sm font-extrabold text-white">
                            {/* Google Color G Icon */}
                            <svg className="w-4 h-4 shrink-0 bg-white rounded-full p-0.5" viewBox="0 0 24 24">
                              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                            </svg>
                            <span className="leading-tight">Google&apos;da Bizi Değerlendirin</span>
                          </div>

                          <p className="text-xs text-blue-100/90 leading-snug font-medium">
                            Telefon kameranızı koda tutarak görüşlerinizi paylaşabilir, hizmet kalitemizi taçlandırabilirsiniz.
                          </p>

                          <a
                            href={GOOGLE_REVIEWS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-lg hover:shadow-amber-500/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <span>Google&apos;da Yorum Yapın</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                const isExternal = method.link?.startsWith('http');
                const isPhone = method.iconName === 'Phone';
                const asLink = !!method.link && !isPhone;
                const cardClassName =
                  'flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group';
                const animProps = {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.2 },
                  transition: { duration: 0.25, delay: index * 0.03 },
                };
                const inner = (
                  <>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-gray-900">{method.title}</h3>
                      {isPhone ? (
                        <div className="space-y-0.5">
                          <a href={method.link ?? undefined} className="block text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
                            {method.value}
                          </a>
                          <a href="tel:+902165748343" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
                            0216 574 83 43
                          </a>
                        </div>
                      ) : (
                        <p className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm font-medium">
                          {method.value}
                        </p>
                      )}
                    </div>
                  </>
                );
                return asLink ? (
                  <motion.a
                    key={index}
                    href={method.link!}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    {...animProps}
                    className={`${cardClassName} cursor-pointer`}
                  >
                    {inner}
                  </motion.a>
                ) : (
                  <motion.div key={index} {...animProps} className={cardClassName}>
                    {inner}
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
              title="Gökkuşağı Yazılım Ataşehir ofisi konumu"
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
