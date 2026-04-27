import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog | ERP CRM E-Dönüşüm Yazıları | Gökkuşağı Yazılım',
  description: 'Mikro ERP, e-dönüşüm, dijital dönüşüm ve iş yönetimi hakkında güncel yazılar, rehberler ve sektörel analizler.',
  keywords: 'mikro blog, ERP blog, e-dönüşüm yazıları, dijital dönüşüm, iş yönetimi, sektörel analiz, mikro rehber',
};

const featuredPost = {
  title: '2026\'da ERP Sistemlerinde Öne Çıkan 5 Trend',
  excerpt: 'Yapay zeka destekli otomasyon, bulut ERP geçişleri ve gerçek zamanlı analitik gibi trendler işletmelerin dijital dönüşüm stratejilerini yeniden şekillendiriyor.',
  category: 'ERP',
  date: '25 Nisan 2026',
  readTime: '8 dk',
  gradient: 'from-purple-600 to-blue-600',
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
  },
  {
    title: 'Mikro ERP ile Verimliliğinizi Artırın',
    excerpt: 'Mikro ERP çözümlerinin işletme verimliliğine etkisini rakamlarla inceleyelim. Gerçek müşteri hikayeleri ve istatistikler.',
    category: 'ERP',
    date: '18 Nisan 2026',
    readTime: '7 dk',
    gradient: 'from-green-500 to-green-600',
  },
  {
    title: 'İnşaat Sektöründe ERP Kullanımı',
    excerpt: 'İnşaat projelerinde ERP sistemlerinin nasıl kullanıldığı, sağladığı avantajlar ve dikkat edilmesi gereken noktalar.',
    category: 'Sektörel Çözümler',
    date: '15 Nisan 2026',
    readTime: '5 dk',
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    title: 'E-Defter Geçiş Süreci: Adım Adım',
    excerpt: 'Kağıt defterden e-deftere geçiş sürecinde izlemeniz gereken adımlar, dikkat etmeniz gereken noktalar ve ipuçları.',
    category: 'E-Dönüşüm',
    date: '12 Nisan 2026',
    readTime: '9 dk',
    gradient: 'from-indigo-500 to-indigo-600',
  },
  {
    title: 'Dijital Dönüşümde Başarının 5 Anahtarı',
    excerpt: 'İşletmelerin dijital dönüşüm sürecinde başarılı olmalarını sağlayan 5 kritik faktör ve uygulama stratejileri.',
    category: 'Dijital Dönüşüm',
    date: '8 Nisan 2026',
    readTime: '6 dk',
    gradient: 'from-violet-500 to-violet-600',
  },
  {
    title: 'Mikro FLY vs RUN vs JUMP Karşılaştırması',
    excerpt: 'Mikro ERP ürün ailesinin üç farklı versiyonunu özellik, fiyat ve kullanım alanı açısından detaylı karşılaştırma.',
    category: 'Mikro Ürünler',
    date: '5 Nisan 2026',
    readTime: '10 dk',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    title: 'Üretim Sektöründe Stok Yönetimi',
    excerpt: 'Üretim işletmelerinde etkili stok yönetimi stratejileri, MRP sistemleri ve otomasyon çözümleri.',
    category: 'Sektörel Çözümler',
    date: '1 Nisan 2026',
    readTime: '7 dk',
    gradient: 'from-pink-500 to-pink-600',
  },
  {
    title: 'KOBİ\'ler İçin ERP Seçim Rehberi',
    excerpt: 'Küçük ve orta ölçekli işletmelerin ERP seçiminde dikkat etmesi gereken kriterler, maliyet analizi ve öneriler.',
    category: 'ERP',
    date: '28 Mart 2026',
    readTime: '8 dk',
    gradient: 'from-red-500 to-red-600',
  },
];

export default function BlogPage() {
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
              <button key={i} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${i === 0 ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-gray-700 border border-gray-200 hover:border-slate-900 hover:text-slate-900'}`}>
                {cat.name}
                <span className={`ml-2 text-xs ${i === 0 ? 'text-gray-400' : 'text-gray-400'}`}>({cat.count})</span>
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
            {posts.map((post, index) => (
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

      <Footer />
    </div>
  );
}
