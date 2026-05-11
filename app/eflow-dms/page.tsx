'use client';

import { FolderOpen, FileText, Shield, Search, Clock, Users, Lock, Share2, CheckCircle, TrendingUp, Target, Award, Zap, ArrowRight, Sparkles, Download, Brain, Smartphone, PenTool, History, Star, Eye, Archive, Trash2, BarChart3 } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollIndicator from '@/components/ScrollIndicator';

export default function EflowDmsPage() {
  const router = useRouter();

  const capabilities = [
    { title: 'Tüm dosyalarınız tek bir noktada', icon: FolderOpen },
    { title: 'OCR Teknolojisi', icon: Brain },
    { title: 'Son Kullanılanlar', icon: Clock },
    { title: 'Form İçerikli Klasör Oluşturma', icon: FileText },
    { title: 'E-İmza / Mobil İmza', icon: PenTool },
    { title: 'Doküman Versiyonlama', icon: History },
    { title: 'Kullanıcı yetkilendirme sistemi', icon: Lock },
    { title: 'Favorilerim', icon: Star }
  ];

  const features = [
    { title: 'Doküman depolama ve organizasyon', desc: 'Belgelerinizi sistematik bir şekilde saklayın.', icon: FolderOpen },
    { title: 'Belge arama ve erişim kolaylığı', desc: 'Belgelerinize anında erişim sağlayın.', icon: Search },
    { title: 'Versiyon kontrolü', desc: 'Belgelerinizin farklı versiyonlarını kaydedin ve en güncel sürüme kolay ulaşın.', icon: History },
    { title: 'Çevrimiçi işbirliği', desc: 'Aynı doküman üzerinde ekip arkadaşlarınızla eş zamanlı olarak çalışın.', icon: Users },
    { title: 'Uyumluluk ve denetim', desc: 'Belge yönetim süreçlerinin yasal düzenlemelere ve şirket politikalarına uygunluğunu sağlayın ve denetim süreçlerini kolaylaştırın.', icon: Shield },
    { title: 'Güvenli doküman paylaşımı', desc: 'Belgeleri yetkilendirilmiş kişilerle güvenli bir şekilde paylaşın ve veri ihlallerine karşı korunun.', icon: Share2 },
    { title: 'İzleme ve raporlama', desc: 'Belgelerin kullanımını izleyin, kimlerin ne zaman eriştiğini ve değişikliklerini raporlayın.', icon: BarChart3 },
    { title: 'İmha ve arşivleme', desc: 'Gerekli olmayan belgeleri güvenli şekilde imha edin veya uzun süreli saklama için arşivleyin.', icon: Archive },
    { title: 'Hız ve verimlilik', desc: 'Belgeleri düzenli depolayarak, arama ve iş süreçlerini hızlandırın, verimliliğizi artırın.', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-white pt-20 md:pt-0">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#40949c]/10 border border-[#40949c]/20 rounded-full text-[#40949c] text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              No-Code DMS Platform
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900"
            >
              İş süreçlerinizin
              <br />
              <span className="bg-gradient-to-r from-[#40949c] to-[#ed4f37] bg-clip-text text-transparent">parçası olan dosyaları yönetin</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              No-code platformda geliştirilen E-Flow DMS ile işinizin bir parçası olan dokümanlarınızı tamamen dijital ortamda depolayın, organize edin ve ihtiyacınız olan dokümana her an erişim sağlayın.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={() => router.push('/contact')}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#ed4f37] text-white rounded-xl hover:bg-[#d64530] transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Teklif Al
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-[#40949c] to-[#ed4f37] rounded-3xl flex items-center justify-center">
                <FolderOpen size={64} className="text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur-2xl opacity-40" />
            </div>
          </motion.div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Description Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl border border-gray-200"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              E-Flow DMS ile iş akışınızda yer alan form, tablo, sunum, rapor, fatura gibi tüm dokümanları merkezi bir sistemde saklayın. Üstelik fiziksel olarak üretilmiş dokümanlar da dahil her türden dosyayı sisteminize ekleyerek daha etkili kullanın. Böylece belgelerin kaybolma riski azalır, zaman ve kaynak tasarrufu sağlanır, iş birliği kolaylaşır ve gerektiğinde belgelerin geçmişi ve revizyonları takip edilebilir.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              E-Flow DMS aynı zamanda belge tabanlı iş akışlarını otomatikleştirme ve dijital dönüşüm süreçlerine katkı sağlama konularında da önemli bir rol oynar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OCR & E-İmza Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Yeni eklenen E-imza, Mobil imza ve yapay zeka destekli OCR teknolojisi ile:</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200"
            >
              <div className="w-12 h-12 bg-[#40949c]/10 rounded-xl flex items-center justify-center mb-4">
                <PenTool size={24} className="text-[#40949c]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Elektronik ve Mobil İmza</h3>
              <p className="text-gray-600 text-sm">Dokümanlarınıza elektronik ve mobil imza ekleyerek onay süreçlerini hızlandırır.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200"
            >
              <div className="w-12 h-12 bg-[#40949c]/10 rounded-xl flex items-center justify-center mb-4">
                <Brain size={24} className="text-[#40949c]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">OCR Teknolojisi</h3>
              <p className="text-gray-600 text-sm">OCR teknolojisi sayesinde fatura, fiş gibi belgelerdeki veriler otomatik olarak okunur ve sistemde ilgili alanlara aktarılır.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200"
            >
              <div className="w-12 h-12 bg-[#40949c]/10 rounded-xl flex items-center justify-center mb-4">
                <Zap size={24} className="text-[#40949c]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Gelişmiş Özellikler</h3>
              <p className="text-gray-600 text-sm">Bu gelişmiş özellikler, manuel işlemleri azaltır, hata riskini minimize eder ve iş süreçlerinizi daha verimli hale getirir.</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Her yerden erişim imkânı sunan mobil uygulaması ve kişiselleştirilebilir ekranlarıyla E-Flow DMS, doküman yönetiminde ihtiyaçlarınıza özel esnek çözümler sunar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Dijital Doküman Merkezimizin Yetenekleri</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-[#40949c]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-[#40949c]" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{capability.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Yapay zeka destekli E-Flow DMS ile dijital ve esnek doküman yönetimi</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              E-Flow DMS ile iş süreçlerinizin parçası olan belgelerinizi merkezi bir platformda toplayarak yönetim sürecinizi tamamen dijitalleştirin.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-xl border border-gray-200"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              No-Code platformunda geliştirilen yapay zeka destekli E-Flow DMS, doküman yönetimini tamamen dijital bir platformda yapmaya olanak tanır. Form, tablo, sunum, rapor ve fatura vb. tüm belgelerinizi tek bir merkezde saklayarak, her an erişim imkânı sağlar, belgelerin kaybolma riskini azaltır. DMS mobil uygulaması, belgelere her yerden erişmeyi sağlar.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              E-Flow DMS ekranlar kişisel kullanımıza en uygun şekilde uyarlanabilir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">E-Flow DMS'in iş akışınızın verimliliğini arttıracak güçlü özellikleri</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-[#40949c]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#40949c]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 sm:p-8 md:p-10 lg:p-16 rounded-3xl text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#40949c]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-[#ed4f37]/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm font-medium mb-6">
                <Sparkles size={14} />
                Başlayın
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                E-Flow DMS hakkında daha fazla bilgi edinin.
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  E-Flow DMS, işletmelerin belge yönetim süreçlerini otomatikleştiren, verimliliği artıran ve iş süreçlerini kolaylaştıran kapsamlı bir belge yönetim sistemidir. 
              </p>
             
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
