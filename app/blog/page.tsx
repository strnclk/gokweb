'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sparkles, BookOpen, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

const featuredPost = {
  title: '2026\'da ERP Sistemlerinde Öne Çıkan 5 Trend',
  excerpt: 'Yapay zeka destekli otomasyon, bulut ERP geçişleri ve gerçek zamanlı analitik gibi trendler işletmelerin dijital dönüşüm stratejilerini yeniden şekillendiriyor.',
  category: 'ERP',
  date: '25 Nisan 2026',
  readTime: '8 dk',
  gradient: 'from-purple-600 to-blue-600',
  content: `
    <h2>Yapay Zeka Destekli Otomasyon</h2>
    <p>2026'da ERP sistemlerinde yapay zeka entegrasyonu standart haline geliyor. AI destekli otomasyon, rutin görevleri otomatize ederek çalışanların daha stratejik işlere odaklanmasını sağlıyor.</p>
    
    <h2>Bulut ERP Geçişleri</h2>
    <p>Geleneksel on-premise ERP sistemlerinden bulut tabanlı çözümlere geçiş hız kazanıyor. Bulut ERP, daha düşük maliyetler, kolay ölçeklenebilirlik ve uzaktan erişim imkanı sunuyor.</p>
    
    <h2>Gerçek Zamanlı Analitik</h2>
    <p>Gerçek zamanlı veri analitiği, işletmelerin anında kararlar almasını sağlıyor. Dashboard'lar ve raporlar artık saniyelik gecikmelerle güncelleniyor.</p>
    
    <h2>Mobil ERP</h2>
    <p>Mobil ERP uygulamaları, yöneticilerin her yerden sisteme erişebilmesini sağlıyor. Satış ekipleri sahadan, yöneticiler seyahatlerden işlerini yönetebiliyor.</p>
    
    <h2>Sürdürülebilirlik ve ESG</h2>
    <p>ERP sistemleri artık çevresel, sosyal ve yönetişim (ESG) metriklerini takip ediyor. Karbon ayak izi, enerji tüketimi ve sürdürülebilirlik KPI'ları standart özellikler haline geliyor.</p>
  `
};

const categories = [
  { name: 'Tümü', count: 24 },
  { name: 'ERP', count: 8 },
  { name: 'E-Dönüşüm', count: 6 },
  { name: 'Dijital Dönüşüm', count: 5 },
  { name: 'Sektörel Çözümler', count: 3 },
  { name: 'Mikro Ürünler', count: 2 },
];

const posts = [
  {
    title: 'E-Fatura Nedir? Kapsamlı Rehber',
    excerpt: 'E-fatura sistemine geçiş yapmak isteyen işletmeler için adım adım rehber. GİB süreci, entegrasyon ve avantajlar.',
    category: 'E-Dönüşüm',
    date: '22 Nisan 2026',
    readTime: '6 dk',
    gradient: 'from-blue-500 to-blue-600',
    content: `
      <h2>E-Fatura Nedir?</h2>
      <p>E-fatura, Gelir İdaresi Başkanlığı (GİB) tarafından belirlenen standartlara uygun olarak elektronik ortamda oluşturulan, gönderilen ve saklanan fatura türüdür.</p>
      
      <h2>Kimler E-Fatura Kullanmak Zorunda?</h2>
      <p>2024 yılı itibarıyla yıllık cirosu 5 milyon TL ve üzeri olan mükellefler e-fatura kullanmak zorundadır. Bu limit her yıl güncellenmektedir.</p>
      
      <h2>E-Fatura Avantajları</h2>
      <ul>
        <li>Kağıt ve baskı maliyetlerinden tasarruf</li>
        <li>Arşivleme kolaylığı</li>
        <li>Hızlı ve güvenli gönderim</li>
        <li>Otomatik muhasebe entegrasyonu</li>
        <li>Çevre dostu çözüm</li>
      </ul>
      
      <h2>E-Fatura Geçiş Süreci</h2>
      <p>E-fatura sistemine geçiş için GİB portalı üzerinden başvuru yapılması gerekir. Başvuru sonrası entegrasyon süreci başlar.</p>
    `
  },
  {
    title: 'Mikro ERP ile Verimliliğinizi Artırın',
    excerpt: 'Mikro ERP çözümlerinin işletme verimliliğine etkisini rakamlarla inceleyelim. Gerçek müşteri hikayeleri ve istatistikler.',
    category: 'ERP',
    date: '18 Nisan 2026',
    readTime: '7 dk',
    gradient: 'from-green-500 to-green-600',
    content: `
      <h2>Mikro ERP Nedir?</h2>
      <p>Mikro ERP, Türk işletmeleri için özel olarak geliştirilmiş kapsamlı bir iş kaynakları planlama (ERP) sistemidir.</p>
      
      <h2>Verimlilik Artışı</h2>
      <p>Mikro ERP kullanan işletmelerde ortalama %40 verimlilik artışı gözlemlenmiştir. Bu artış süreç otomasyonu ve veri entegrasyonu sayesinde gerçekleşir.</p>
      
      <h2>Gerçek Müşteri Hikayeleri</h2>
      <p>1000+ müşteri ile Mikro ERP, farklı sektörlerde başarıyla kullanılmaktadır. Üretim, perakende, inşaat ve hizmet sektörlerinde referanslarımız bulunmaktadır.</p>
      
      <h2>İstatistikler</h2>
      <ul>
        <li>%40 operasyonel verimlilik artışı</li>
        <li>%25 stok maliyeti azalması</li>
        <li>%60 daha hızlı raporlama</li>
        <li>%90 müşteri memnuniyeti</li>
      </ul>
    `
  },
  {
    title: 'İnşaat Sektöründe ERP Kullanımı',
    excerpt: 'İnşaat projelerinde ERP sistemlerinin nasıl kullanıldığı, sağladığı avantajlar ve dikkat edilmesi gereken noktalar.',
    category: 'Sektörel Çözümler',
    date: '15 Nisan 2026',
    readTime: '5 dk',
    gradient: 'from-orange-500 to-orange-600',
    content: `
      <h2>İnşaat Sektöründe ERP</h2>
      <p>İnşaat sektörü karmaşık proje yönetimi gerektirir. ERP sistemleri bu süreçleri optimize eder.</p>
      
      <h2>Proje Yönetimi</h2>
      <p>Bütçe takibi, ilerleme raporlaması ve sözleşme yönetimi ERP ile kolaylaşır.</p>
      
      <h2>Maliyet Kontrolü</h2>
      <p>Malzeme, işçilik ve ekipman maliyetleri gerçek zamanlı takip edilir.</p>
      
      <h2>Avantajlar</h2>
      <ul>
        <li>Merkezi proje yönetimi</li>
        <li>Gerçek zamanlı maliyet takibi</li>
        <li>Otomatik faturalandırma</li>
        <li>Şantiye stok yönetimi</li>
      </ul>
    `
  },
  {
    title: 'E-Defter Geçiş Süreci: Adım Adım',
    excerpt: 'Kağıt defterden e-deftere geçiş sürecinde izlemeniz gereken adımlar, dikkat etmeniz gereken noktalar ve ipuçları.',
    category: 'E-Dönüşüm',
    date: '12 Nisan 2026',
    readTime: '9 dk',
    gradient: 'from-indigo-500 to-indigo-600',
    content: `
      <h2>E-Defter Nedir?</h2>
      <p>E-defter, kağıt defter yerine elektronik ortamda tutulan ve GİB sistemine gönderilen defter türüdür.</p>
      
      <h2>Geçiş Süreci</h2>
      <p>E-defter sistemine geçiş için öncelikle e-fatura kullanıcısı olmak gerekir. Sonrasında GİB portalı üzerinden başvuru yapılır.</p>
      
      <h2>Avantajları</h2>
      <ul>
        <li>Kağıt tasarrufu</li>
        <li>Kolay arşivleme</li>
        <li>Hızlı erişim</li>
        <li>Güvenli saklama</li>
      </ul>
    `
  },
  {
    title: 'Dijital Dönüşümde Başarının 5 Anahtarı',
    excerpt: 'İşletmelerin dijital dönüşüm sürecinde başarılı olmalarını sağlayan 5 kritik faktör ve uygulama stratejileri.',
    category: 'Dijital Dönüşüm',
    date: '8 Nisan 2026',
    readTime: '6 dk',
    gradient: 'from-violet-500 to-violet-600',
    content: `
      <h2>Liderlik Destek</h2>
      <p>Üst yönetimin desteği dijital dönüşümün başarısı için kritik öneme sahiptir.</p>
      
      <h2>Stratejik Planlama</h2>
      <p>Açık hedefler ve yol haritası belirlenmelidir.</p>
      
      <h2>Personel Eğitimi</h2>
      <p>Çalışanların yeni sistemlere adapte olması için eğitim şarttır.</p>
      
      <h2>Doğru Teknoloji Seçimi</h2>
      <p>İşletmeye uygun ERP ve dijital çözümler seçilmelidir.</p>
      
      <h2>Sürekli İyileştirme</h2>
      <p>Dijital dönüşüm bir süreçtir, sürekli iyileştirme gerekir.</p>
    `
  },
  {
    title: 'Mikro FLY vs RUN vs JUMP Karşılaştırması',
    excerpt: 'Mikro ERP ürün ailesinin üç farklı versiyonunu özellik, fiyat ve kullanım alanı açısından detaylı karşılaştırma.',
    category: 'Mikro Ürünler',
    date: '5 Nisan 2026',
    readTime: '10 dk',
    gradient: 'from-emerald-500 to-emerald-600',
    content: `
      <h2>Mikro FLY</h2>
      <p>KOBİ'ler için ideal, temel ERP fonksiyonları içerir.</p>
      
      <h2>Mikro RUN</h2>
      <p>Orta ölçekli işletmeler için gelişmiş özellikler sunar.</p>
      
      <h2>Mikro JUMP</h2>
      <p>Büyük ölçekli işletmeler ve çoklu şube yapısı için tasarlanmıştır.</p>
      
      <h2>Karşılaştırma</h2>
      <p>Her ürün farklı kullanıcı ihtiyaçlarına hitap eder. İşletmenizin büyüklüğüne ve gereksinimlerine göre seçim yapmalısınız.</p>
    `
  },
  {
    title: 'Üretim Sektöründe Stok Yönetimi',
    excerpt: 'Üretim işletmelerinde etkili stok yönetimi stratejileri, MRP sistemleri ve otomasyon çözümleri.',
    category: 'Sektörel Çözümler',
    date: '1 Nisan 2026',
    readTime: '7 dk',
    gradient: 'from-pink-500 to-pink-600',
    content: `
      <h2>Stok Yönetimi</h2>
      <p>Üretim işletmelerinde stok yönetimi kritik öneme sahiptir.</p>
      
      <h2>MRP Sistemleri</h2>
      <p>Malzeme gereksinim planlama sistemleri, stok maliyetlerini optimize eder.</p>
      
      <h2>Otomasyon</h2>
      <p>Barcode ve RFID sistemleri ile stok takibi otomatize edilir.</p>
    `
  },
  {
    title: 'KOBİ\'ler İçin ERP Seçim Rehberi',
    excerpt: 'Küçük ve orta ölçekli işletmelerin ERP seçiminde dikkat etmesi gereken kriterler, maliyet analizi ve öneriler.',
    category: 'ERP',
    date: '28 Mart 2026',
    readTime: '8 dk',
    gradient: 'from-red-500 to-red-600',
    content: `
      <h2>KOBİ'ler İçin ERP</h2>
      <p>KOBİ'lerin ERP seçerken dikkat etmesi gereken kriterler farklıdır.</p>
      
      <h2>Maliyet Analizi</h2>
      <p>Lisans, kurulum ve eğitim maliyetleri hesaplanmalıdır.</p>
      
      <h2>Kolay Kullanım</h2>
      <p>Kullanıcı dostu arayüz önemlidir.</p>
      
      <h2>Ölçeklenebilirlik</h2>
      <p>İşletme büyüdükçe sistemin de büyümesi gerekir.</p>
    `
  },
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterError('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail })
      });

      const data = await response.json();

      if (data.success) {
        setNewsletterSubmitted(true);
        setNewsletterEmail('');
      } else {
        setNewsletterError(data.error || 'Bir hata oluştu');
      }
    } catch (error) {
      setNewsletterError('Bir hata oluştu');
    }
  };

  const filteredPosts = selectedCategory === 'Tümü' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero - Modern Estetik Tasarım */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Dekoratif Elementler */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-100/20 to-blue-100/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-6"
          >
            <Sparkles size={14} />
            Blog
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900"
          >
            ERP, E-Dönüşüm ve
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Dijital Dönüşüm</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Güncel trendler, uzman görüşleri ve pratik rehberlerle işletmenizin dijital dönüşüm yolculuğuna rehberlik ediyoruz
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          >
            {[
              { icon: BookOpen, label: '24', desc: 'Yazı' },
              { icon: TrendingUp, label: '6', desc: 'Kategori' },
              { icon: Clock, label: '15K+', desc: 'Okuyucu' },
              { icon: Sparkles, label: '19+', desc: 'Yıl' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-white shadow-md flex items-center justify-center">
                  <stat.icon size={24} className="text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Featured Post - Öne Çıkan */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Öne Çıkan</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`h-80 lg:h-full bg-gradient-to-br ${featuredPost.gradient} rounded-2xl flex items-center justify-center`}>
              <div className="text-center text-white px-8">
                <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">{featuredPost.category}</span>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">{featuredPost.title}</h2>
                <p className="text-lg text-white/80">{featuredPost.excerpt}</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">{featuredPost.category}</span>
                <span>{featuredPost.date}</span>
                <span>·</span>
                <span>{featuredPost.readTime} okuma</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">{featuredPost.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{featuredPost.excerpt}</p>
              <button 
                onClick={() => setSelectedPost(featuredPost)}
                className="px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg border border-slate-800 flex items-center gap-2"
              >
                Devamını Oku
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Kategoriler */}
      <section className="px-6 py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat.name ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-gray-700 border border-gray-200 hover:border-slate-900 hover:text-slate-900'}`}
              >
                {cat.name}
                <span className={`ml-2 text-xs ${selectedCategory === cat.name ? 'text-gray-400' : 'text-gray-400'}`}>({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Yazıları - Profesyonel Listeleme */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tüm Yazılar</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredPosts.map((post, index) => (
              <article 
                key={index} 
                className="py-10 first:pt-0 last:pb-0 group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="grid lg:grid-cols-12 gap-6 items-start">
                  {/* Tarih ve Kategori */}
                  <div className="lg:col-span-2 flex lg:flex-col gap-3 lg:gap-1">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${post.gradient} text-white rounded-full text-xs font-medium`}>{post.category}</span>
                  </div>

                  {/* İçerik */}
                  <div className="lg:col-span-8">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Okuma Süresi ve Oku */}
                  <div className="lg:col-span-2 flex lg:flex-col items-start lg:items-end gap-3 lg:gap-2">
                    <span className="text-sm text-gray-400">{post.readTime} okuma</span>
                    <span className="text-purple-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Oku
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bülten - Profesyonel CTA */}
      <section className="px-6 py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">Bülten</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Güncel Kalın</h2>
          <p className="text-lg text-gray-400 mb-8">
            ERP ve e-dönüşüm dünyasındaki gelişmelerden haberdar olmak için bültenimize abone olun
          </p>
          
          {newsletterSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-emerald-400"
            >
              <CheckCircle2 size={24} />
              <span className="text-lg font-medium">Aboneliğiniz başarıyla tamamlandı!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <button type="submit" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Abone Ol
              </button>
            </form>
          )}
          
          {newsletterError && (
            <div className="mt-4 text-red-400 text-sm">{newsletterError}</div>
          )}
        </div>
      </section>

      {/* Post Popup */}
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPost(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`bg-gradient-to-r ${selectedPost.gradient} p-6 text-white`}>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-3">{selectedPost.category}</span>
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight">{selectedPost.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-white/80 mt-2">
                    <span>{selectedPost.date}</span>
                    <span>·</span>
                    <span>{selectedPost.readTime} okuma</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh]">
              <div
                className="space-y-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mb-4 [&>h2]:leading-tight [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:text-gray-700 [&>li]:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 flex justify-between items-center">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
              >
                Kapat
              </button>
              <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                Paylaş
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
