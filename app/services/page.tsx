'use client';

import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { 
  ArrowRight, Layers, Receipt, Code2, Compass, LifeBuoy, GraduationCap,
  Sparkles, Target, Zap, Shield, TrendingUp, CheckCircle2, ChevronRight,
  Database, HelpCircle, ChevronDown, Phone
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Layers,
      name: 'Mikro ERP Kurulumu',
      description: 'İhtiyaç analizinden veri aktarımına, konfigürasyondan kullanıcı eğitimine anahtar teslim devreye alma.',
      color: 'from-blue-600 to-blue-700',
      id: 'mikro-erp-kurulumu',
      features: ['Süreç Analizi', 'Veri Aktarımı', 'Kullanıcı Eğitimi'],
      valueProp: 'Verimliliğinizi %45 artıran anahtar teslim kurulum çözümü.'
    },
    {
      icon: Receipt,
      name: 'E-Dönüşüm Entegrasyonu',
      description: 'e-Fatura, e-Arşiv, e-Defter ve e-İrsaliye çözümlerinin GİB uyumlu olarak Mikro\'ya entegre edilmesi.',
      color: 'from-emerald-600 to-emerald-700',
      id: 'e-donusum-entegrasyonu',
      features: ['e-Fatura', 'e-Defter', 'e-İrsaliye'],
      valueProp: 'Saniyeler içinde GİB onaylı e-Fatura & e-Defter gönderimi.'
    },
    {
      icon: Code2,
      name: 'Özel Yazılım Geliştirme',
      description: 'E-ticaret pazar yeri entegrasyonları, web, mobil ve API entegrasyonu ihtiyaçlarınıza özel çözümler.',
      color: 'from-orange-600 to-orange-700',
      id: 'ozel-yazilim-gelistirme',
      features: ['Pazar Yeri API', 'Mobil Uygulama', 'Özel Raporlar'],
      valueProp: 'İşletmenize %100 özel API & terzi usulü yazılım entegrasyonu.'
    },
    {
      icon: Compass,
      name: 'Danışmanlık Hizmetleri',
      description: 'Doğru ERP seçimi, süreç optimizasyonu ve büyüme stratejisinde 20+ yıllık tecrübemizle rehberlik.',
      color: 'from-amber-600 to-amber-700',
      id: 'danismanlik',
      features: ['Paket Analizi', 'Süreç Optimizasyonu', 'Yol Haritası'],
      valueProp: '20+ yıllık tecrübe ile eksiksiz ERP yol haritası & optimizasyon.'
    },
    {
      icon: LifeBuoy,
      name: 'Teknik Destek ve Bakım',
      description: 'Sistemlerin kesintisiz çalışması için yedekleme, güncelleme ve SQL veritabanı optimizasyonu.',
      color: 'from-sky-600 to-sky-700',
      id: 'teknik-destek',
      features: ['Uzaktan Bağlantı', 'SQL Bakım', 'Bulut Yedekleme'],
      valueProp: '7/24 kesintisiz destek ile 2 saat içinde garantili müdahale.'
    },
    {
      icon: GraduationCap,
      name: 'Eğitim Hizmetleri',
      description: 'Ekiplerinizin Mikro ERP modüllerinden tam verimle faydalanması için pratik kullanıcı eğitimleri.',
      color: 'from-purple-600 to-purple-700',
      id: 'egitim',
      features: ['Kullanıcı Eğitimi', 'Raporlama Eğitimi', 'Sektörel Eğitim'],
      valueProp: 'Ekiplerinizin tüm modüllere %100 hakimiyet sağlama garantisi.'
    }
  ];

  const sss = [
    {
      soru: 'Mikro ERP kurulumu ne kadar sürmektedir?',
      cevap: 'Kurulum yapılacak firmanın büyüklüğü, veri yapısı ve kullanıcı sayısına göre süre değişmektedir. Basit süreçli paketler birkaç gün içinde tamamlanırken, özel entegrasyon ve MES içeren büyük projeler 2 ila 4 hafta arasında değişir.'
    },
    {
      soru: 'E-Dönüşüm geçişinde hangi süreçleri yönetiyorsunuz?',
      cevap: 'Mali mühür veya e-imza başvurusundan, GİB kayıtlarının tamamlanmasına, portala geçiş testlerinden canlı ortamda ilk faturaların oluşturulup gönderilmesine kadar tüm süreçte yanınızda oluyoruz.'
    },
    {
      soru: 'Yerinde servis veya eğitim veriyor musunuz?',
      cevap: 'Evet. İstanbul Ataşehir merkezimiz üzerinden tüm Anadolu Yakası ve İstanbul geneline yerinde servis desteği, teknik bakım ve kullanıcı eğitimleri sunuyoruz.'
    }
  ];

  // Hero görselindeki 6 hizmet etiketi. Tek kaynak: hem masaüstü kompozisyonu
  // (merkez logodan çizgilerle bağlı, koordinat tabanlı) hem de mobil etiket
  // kümesi bu diziden üretilir. x/y değerleri 560×480'lik kutu içindir.
  const heroCenter = { x: 280, y: 205 };
  const heroTags = [
    { label: 'ERP Kurulumu', Icon: Layers, x: 388, y: 66, ring: 'border-blue-200/60 shadow-lg shadow-blue-500/10', iconWrap: 'bg-blue-500/10 text-blue-600', dot: '#3b82f6', dur: 5.2 },
    { label: '7/24 Destek', Icon: LifeBuoy, x: 150, y: 92, ring: 'border-sky-200/60 shadow-lg shadow-sky-500/10', iconWrap: 'bg-sky-500/10 text-sky-600', dot: '#0ea5e9', dur: 6.1 },
    { label: 'e-Dönüşüm', Icon: Receipt, x: 112, y: 240, ring: 'border-emerald-200/60 shadow-lg shadow-emerald-500/10', iconWrap: 'bg-emerald-500/10 text-emerald-600', dot: '#10b981', dur: 5.6 },
    { label: 'Mikro Eğitimleri', Icon: GraduationCap, x: 444, y: 250, ring: 'border-purple-200/60 shadow-lg shadow-purple-500/10', iconWrap: 'bg-purple-500/10 text-purple-600', dot: '#a855f7', dur: 6.4 },
    { label: 'Özel Yazılım', Icon: Code2, x: 178, y: 408, ring: 'border-orange-200/60 shadow-lg shadow-orange-500/10', iconWrap: 'bg-orange-500/10 text-orange-600', dot: '#f97316', dur: 5.9 },
    { label: 'Danışmanlık', Icon: Compass, x: 404, y: 416, ring: 'border-amber-200/60 shadow-lg shadow-amber-500/10', iconWrap: 'bg-amber-500/10 text-amber-600', dot: '#f59e0b', dur: 6.7 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-white pt-16 md:pt-0">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-48 h-48 sm:w-96 sm:h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 sm:w-80 sm:h-80 bg-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
          <div className="text-center lg:text-left">
            <Breadcrumb
              items={[{ label: 'Anasayfa', href: '/' }, { label: 'Hizmetlerimiz' }]}
              accentClass="hover:text-blue-600"
              className="justify-center lg:justify-start mb-6"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6 mx-auto lg:mx-0"
            >
              <Sparkles size={14} className="text-blue-600" />
              Gökkuşağı Hizmetleri
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-gray-900"
            >
              Profesyonel
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mikro Hizmetleri</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2"
            >
              Kurulum, entegrasyon, özel yazılım, danışmanlık, teknik destek ve eğitim hizmetlerimiz ile işletmenizi yarına hazırlayın
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0"
            >
              {[
                { label: 'Uçtan Uca', value: '360°' },
                { label: 'Proje', value: '500+' },
                { label: 'Deneyim', value: '20+ Yıl' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Mobil etiket kümesi: masaüstündeki büyük kompozisyon telefonda
                gizli olduğu için (hidden lg:flex), aynı 6 hizmet burada sade bir
                sarmalanan şerit olarak gösterilir. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex flex-wrap justify-center gap-2.5 max-w-md mx-auto lg:hidden"
            >
              {heroTags.map((t) => {
                const TagIcon = t.Icon;
                return (
                  <div
                    key={t.label}
                    className={`bg-white/80 backdrop-blur-md border ${t.ring} px-3.5 py-2 rounded-full flex items-center gap-2`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${t.iconWrap}`}>
                      <TagIcon size={13} />
                    </div>
                    <span className="text-xs font-extrabold text-slate-800 whitespace-nowrap">{t.label}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center hidden lg:flex"
          >
            <div className="relative w-[560px] h-[480px] select-none">
              {/* Decorative background blur */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-3xl opacity-40 -z-10" />

              {/* Bağlantı çizgileri: merkez logodan her etikete yayılan ışınlar.
                  Etiketlerin nefes hareketi çok küçük (5px) olduğu için statik
                  çizgiler görsel olarak bağlı kalır. */}
              <svg viewBox="0 0 560 480" className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                <defs>
                  <linearGradient id="services-ray" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.55" />
                  </linearGradient>
                </defs>
                {heroTags.map((t) => (
                  <g key={t.label}>
                    <line
                      x1={heroCenter.x}
                      y1={heroCenter.y}
                      x2={t.x}
                      y2={t.y}
                      stroke="url(#services-ray)"
                      strokeWidth="1.5"
                      strokeDasharray="5 6"
                      className="opacity-60"
                    />
                    <circle cx={t.x} cy={t.y} r="3.5" fill={t.dot} className="opacity-70" />
                  </g>
                ))}
                <circle cx={heroCenter.x} cy={heroCenter.y} r="6" fill="#6366f1" className="opacity-30" />
              </svg>

              {/* Merkez logo. Konumlandırma dış div'de (statik transform), döndürme
                  ve hover iç motion.div'de — böylece framer'ın transform'u
                  ortalamayı ezmez. */}
              <div
                className="absolute z-10"
                style={{ left: heroCenter.x, top: heroCenter.y, transform: 'translate(-50%, -50%)' }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5, rotate: 6 }}
                  className="w-40 h-40 bg-white border border-gray-200 rounded-3xl rotate-6 shadow-xl flex items-center justify-center p-6 cursor-pointer transition-all duration-300"
                >
                  <img src="/logo.png" alt="Gökkuşağı Yazılım" className="w-full h-full object-contain" />
                </motion.div>
              </div>

              {/* Yüzen etiketler: sırayla belirir (stagger), sonra çok hafif nefes
                  alır. Eski agresif sallanma/döndürme kaldırıldı. */}
              {heroTags.map((t, i) => {
                const TagIcon = t.Icon;
                const delay = 0.5 + i * 0.12;
                return (
                  <div
                    key={t.label}
                    className="absolute z-20 pointer-events-none"
                    style={{ left: t.x, top: t.y, transform: 'translate(-50%, -50%)' }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85, y: 0 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
                      transition={{
                        opacity: { delay, duration: 0.5, ease: 'easeOut' },
                        scale: { delay, duration: 0.5, ease: 'easeOut' },
                        y: { delay: delay + 0.5, duration: t.dur, repeat: Infinity, ease: 'easeInOut' },
                      }}
                      className={`bg-white/70 backdrop-blur-md border ${t.ring} px-5 py-3.5 rounded-full flex items-center gap-3`}
                    >
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${t.iconWrap}`}>
                        <TagIcon size={18} />
                      </div>
                      <span className="text-sm font-extrabold text-slate-800 whitespace-nowrap">{t.label}</span>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">Kurumsal Hizmetlerimiz</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              İşletmeniz için özel olarak sunduğumuz uçtan uca profesyonel hizmetlerimiz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.21, 0.45, 0.27, 0.9] }}
                >
                  <Link href={`/services/${service.id}/`} className="block h-full">
                    <Card className="h-full relative overflow-hidden transition-all duration-300 ease-out border-gray-200/90 hover:border-blue-400/80 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2.5 bg-white hover:bg-gradient-to-b hover:from-white hover:to-blue-50/20 group cursor-pointer rounded-2xl">
                      {/* Top Accent Gradient Bar on Hover */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <CardContent className="p-7 flex flex-col justify-between h-full space-y-6">
                        <div className="space-y-4">
                          {/* Header Row */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3.5">
                              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-md group-hover:shadow-blue-500/25 transition-all duration-300">
                                <Icon size={22} className="text-slate-700 group-hover:text-white transition-colors duration-300" />
                              </div>
                              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                                {service.name}
                              </h3>
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300">
                              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all duration-300" />
                            </div>
                          </div>

                          {/* Description (Full Width - High Contrast Text) */}
                          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Footer Section: Pill Badges by default, Value Proposition on Hover */}
                        <div className="pt-4 border-t border-slate-100 mt-auto">
                          <div className="relative min-h-[64px] flex items-center">
                            {/* Default Pill Badges (Fades out on hover) */}
                            <div className="w-full flex flex-wrap gap-1.5 transition-all duration-300 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                              {service.features.map((feat, fidx) => (
                                <span
                                  key={fidx}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100/90 border border-slate-200 text-slate-800 shadow-2xs"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                  {feat}
                                </span>
                              ))}
                            </div>

                            {/* Hover Value Proposition Banner (Sharp 100% Visible Box) */}
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                              <div className="w-full flex items-center gap-2.5 px-3.5 py-2.5 bg-blue-50/95 border-2 border-blue-500/80 rounded-xl text-xs sm:text-sm font-bold text-blue-800 shadow-md shadow-blue-500/10">
                                <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                                <span className="leading-snug">{service.valueProp}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SSS Section */}
      <section className="py-16 sm:py-24 bg-gray-50/50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Sıkça Sorulan Sorular</h2>
          </div>
          <div className="space-y-3">
            {sss.map((f, i) => (
              <details key={i} className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                  <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <span className="flex-1">{f.soru}</span>
                  <svg className="w-5 h-5 flex-shrink-0 mt-1 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 pl-[4.5rem] text-gray-600 leading-relaxed">{f.cevap}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl p-8 sm:p-12 md:p-16 text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              İş Süreçlerinizi Hızlandırmaya Hazır Mısınız?
            </h3>
            <p className="text-sm sm:text-base opacity-90">
              Resmi iş ortağımız olarak, işletmenize en uygun çözümü uzmanlarımızla birlikte belirliyoruz.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
              >
                Ücretsiz Analiz İsteyin
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
