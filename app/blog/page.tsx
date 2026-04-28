'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPopup from '@/components/BlogPopup';

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
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const filteredPosts = selectedCategory === 'Tümü' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero - Diğer sayfalarla aynı */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl tracking-tight text-gray-900">
              Blog
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-900 mb-12 max-w-3xl mx-auto">
            ERP, e-dönüşüm ve dijital dönüşüm hakkında güncel yazılar
          </p>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
          </div>
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
              <button className="px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg border border-slate-800 flex items-center gap-2">
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
              <article key={index} className="py-10 first:pt-0 last:pb-0 group cursor-pointer">
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
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Abone Ol
            </button>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">24</div>
              <div className="text-gray-500">Yazı</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">6</div>
              <div className="text-gray-500">Kategori</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">15K+</div>
              <div className="text-gray-500">Aylık Okuyucu</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">19+</div>
              <div className="text-gray-500">Yıl Deneyim</div>
            </div>
          </div>
        </div>
      </section>

      <BlogPopup posts={[featuredPost, ...posts]} />

      <Footer />
    </div>
  );
}
