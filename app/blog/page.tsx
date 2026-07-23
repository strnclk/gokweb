'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCover from '@/components/BlogCover';
import { Sparkles, ArrowRight, Compass, Cloud, TrendingUp, Workflow } from 'lucide-react';
import { featuredPost, posts, categories } from '@/lib/blog';


// "6 Temmuz 2026" gibi Türkçe tarihi sıralanabilir bir sayıya çevirir.
const trAylar = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
const parseTrTarih = (tarih: string): number => {
  const [gun, ay, yil] = tarih.trim().split(/\s+/);
  const ayIndex = trAylar.indexOf(ay);
  if (ayIndex === -1) return 0;
  return new Date(Number(yil), ayIndex, Number(gun)).getTime();
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  // Yeniden eskiye sırala (en yeni yazı en üstte).
  const sortedPosts = [...posts].sort((a, b) => parseTrTarih(b.date) - parseTrTarih(a.date));

  const filteredPosts = selectedCategory === 'Tümü'
    ? sortedPosts
    : sortedPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="bg-[#FAFBFD] min-h-screen">
      <Navbar />

      {/* Hero Header - Kesintisiz, Çizgisiz Yumuşak Bütünlük Sağlayan Zemin */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#A8E6E2] via-[#D8F5F2] via-75% to-[#FAFBFD] pt-32 md:pt-40 pb-16 lg:pb-24">
        
        {/* Soyut Geometrik Ağ & Üst Oval Gökyüzü/Turkuaz Işık Halesi */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-70">
          <div className="absolute inset-0 opacity-[0.05] bg-center bg-cover pointer-events-none" style={{ backgroundImage: 'url(/rainbow-lines.svg)' }} />
          <svg className="w-full h-full text-[#00A896]/20" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
            <defs>
              <pattern id="blog-hero-grid" width="44" height="44" patternUnits="userSpaceOnUse">
                <path d="M 44 0 L 0 0 0 44" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                <circle cx="44" cy="44" r="1.2" fill="#00A896" opacity="0.35" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-hero-grid)" />
          </svg>

          {/* Derine Ve Aşağıya Doğru Genişleyen Oval Gökyüzü Mavisi & Turkuaz Işık Halesi */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[1150px] h-[520px] bg-gradient-to-b from-[#38BDF8]/35 via-[#00A896]/30 to-transparent rounded-full blur-[110px] pointer-events-none" />
        </div>

        {/* Hero İçerik Konteynırı & Yüzen 4 Cam Kutu */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="relative">

            {/* Kutu 1: Üst Sol (Dijital Yol Haritası Analizi) - Optimal Çapraz Konumlandırma */}
            <motion.div
              initial={{ opacity: 0, y: -15, x: -15 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute -top-6 left-8 xl:left-16 hidden lg:flex items-center gap-4.5 p-5 rounded-2xl bg-white/70 backdrop-blur-[15px] border border-white/90 shadow-xl shadow-[#00A896]/10 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95)] z-20 max-w-[315px] hover:shadow-2xl hover:shadow-[#00A896]/25 hover:border-[#00A896]/50 hover:bg-white/85 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#E6F4F1]/90 border border-[#CDEAE4] text-[#00A896] flex items-center justify-center shrink-0 shadow-xs backdrop-blur-md">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#00A896] tracking-wider uppercase mb-0.5">YOL HARİTASI</div>
                <div className="text-[15px] font-bold text-[#0F172A] leading-tight mb-1">Dijital Yol Haritası Analizi</div>
                <div className="text-[13px] text-slate-500 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00A896] shrink-0" />
                  <span>Stratejik Mimari Planlama</span>
                </div>
              </div>
            </motion.div>

            {/* Kutu 2: Üst Sağ (Bulut & Entegre Sunucular) - Optimal Çapraz Konumlandırma */}
            <motion.div
              initial={{ opacity: 0, y: -15, x: 15 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -top-3 right-8 xl:right-16 hidden lg:flex items-center gap-4.5 p-5 rounded-2xl bg-white/70 backdrop-blur-[15px] border border-white/90 shadow-xl shadow-[#00A896]/10 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95)] z-20 max-w-[315px] hover:shadow-2xl hover:shadow-[#00A896]/25 hover:border-[#00A896]/50 hover:bg-white/85 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#E6F4F1]/90 border border-[#CDEAE4] text-[#00A896] flex items-center justify-center shrink-0 shadow-xs backdrop-blur-md">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#00A896] tracking-wider uppercase mb-0.5">BULUT ALTYAPISI</div>
                <div className="text-[15px] font-bold text-[#0F172A] leading-tight mb-1">Bulut & Entegre Sunucular</div>
                <div className="text-[13px] text-slate-500 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00A896] shrink-0" />
                  <span>%99.99 Veri Güvenliği</span>
                </div>
              </div>
            </motion.div>

            {/* Kutu 3: Alt Sol (Sektörel Teknoloji Trendleri) - Optimal Çapraz Konumlandırma */}
            <motion.div
              initial={{ opacity: 0, y: 15, x: -15 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="absolute bottom-0 left-0 xl:left-10 hidden lg:flex items-center gap-4.5 p-5 rounded-2xl bg-white/70 backdrop-blur-[15px] border border-white/90 shadow-xl shadow-[#00A896]/10 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95)] z-20 max-w-[315px] hover:shadow-2xl hover:shadow-[#00A896]/25 hover:border-[#00A896]/50 hover:bg-white/85 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#E6F4F1]/90 border border-[#CDEAE4] text-[#00A896] flex items-center justify-center shrink-0 shadow-xs backdrop-blur-md">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#00A896] tracking-wider uppercase mb-0.5">SEKTÖREL TRENDLER</div>
                <div className="text-[15px] font-bold text-[#0F172A] leading-tight mb-1">Sektörel Teknoloji Trendleri</div>
                <div className="text-[13px] text-slate-500 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00A896] shrink-0" />
                  <span>Veri Odaklı Metrikler</span>
                </div>
              </div>
            </motion.div>

            {/* Kutu 4: Alt Sağ (ERP Entegrasyon Modelleri) - Optimal Çapraz Konumlandırma */}
            <motion.div
              initial={{ opacity: 0, y: 15, x: 15 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="absolute bottom-0 right-0 xl:right-10 hidden lg:flex items-center gap-4.5 p-5 rounded-2xl bg-white/70 backdrop-blur-[15px] border border-white/90 shadow-xl shadow-[#00A896]/10 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95)] z-20 max-w-[315px] hover:shadow-2xl hover:shadow-[#00A896]/25 hover:border-[#00A896]/50 hover:bg-white/85 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#E6F4F1]/90 border border-[#CDEAE4] text-[#00A896] flex items-center justify-center shrink-0 shadow-xs backdrop-blur-md">
                <Workflow className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#00A896] tracking-wider uppercase mb-0.5">ENTEGRASYON</div>
                <div className="text-[15px] font-bold text-[#0F172A] leading-tight mb-1">ERP Entegrasyon Modelleri</div>
                <div className="text-[13px] text-slate-500 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00A896] shrink-0" />
                  <span>Otomatik İş Akışları</span>
                </div>
              </div>
            </motion.div>

            {/* MERKEZİ BAŞLIK VE AÇIKLAMA BLOĞU */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center max-w-4xl mx-auto py-8 sm:py-12 px-4 relative z-30 flex flex-col items-center pointer-events-none"
            >
              {/* Yıldız ve 'Blog' Rozeti (Orijinal Canlı Turkuaz) */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#023744] border border-[#00B4D8]/30 rounded-full text-xs sm:text-sm font-bold tracking-wide mb-6 shadow-sm backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[#00E5C0] animate-pulse" />
                <span className="text-[#00E5C0] font-black">Blog</span>
              </div>

              {/* Orijinal Canlı Turkuaz Mavi -> Turkuaz -> Yeşil Gradient Başlık */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.2] mb-6">
                <span className="inline-block">
                  ERP ve{' '}
                  <span className="bg-gradient-to-r from-[#00B4D8] via-[#00A896] to-[#02C39A] bg-clip-text text-transparent">
                    Dijital Dönüşüm
                  </span>
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-[#00A896] via-[#00B8A9] to-[#02C39A] bg-clip-text text-transparent">
                  Rehberi
                </span>
              </h1>

              {/* 3 Spesifik Satıra Bölünmüş Alt Açıklama Metni */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl leading-relaxed mb-8 font-medium">
                ERP sistemleri ve dijital dönüşüm stratejileri hakkında <br className="hidden sm:inline" />
                uzman rehberleri, sektör trendleri ve pratik uygulama <br className="hidden sm:inline" />
                önerileri.
              </p>

              {/* Orijinal Eylem Butonu & Şık Hover Animasyonu */}
              <div className="flex justify-center">
                <a
                  href="#rehberler"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('rehberler')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group pointer-events-auto inline-flex items-center justify-center gap-3.5 px-9 py-4 bg-gradient-to-r from-[#032B3A] via-[#005F73] to-[#0A9396] hover:from-[#005F73] hover:via-[#0A9396] hover:to-[#02C39A] text-white font-extrabold text-base sm:text-lg rounded-xl shadow-lg shadow-[#032B3A]/20 hover:shadow-xl hover:shadow-[#005F73]/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <span>Tüm Rehberleri Keşfet</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5 text-teal-300" />
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Featured Post - Öne Çıkan */}
      <section id="rehberler" className="px-4 sm:px-6 py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold text-teal-700 uppercase tracking-wider">Öne Çıkan Rehber</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center bg-slate-50/60 border border-slate-200/80 p-5 sm:p-7 rounded-3xl">
            <Link href={`/blog/${featuredPost.slug}`} className="group relative block overflow-hidden rounded-2xl w-full h-[260px] sm:h-[340px] lg:h-[360px] shadow-md hover:shadow-xl transition-all duration-300">
              <BlogCover
                gradient={featuredPost.gradient}
                category={featuredPost.category}
                image={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="inline-block px-3 py-1 bg-teal-500/90 text-white backdrop-blur-md rounded-full text-xs font-bold mb-2.5 self-start shadow-sm border border-white/20">{featuredPost.category}</span>
                <h3 className="text-base sm:text-xl font-bold mb-1.5 leading-snug group-hover:text-teal-200 transition-colors line-clamp-2">{featuredPost.title}</h3>
                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 font-medium">{featuredPost.excerpt}</p>
              </div>
            </Link>
            <div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 mb-4">
                <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full font-medium">{featuredPost.category}</span>
                <span>{featuredPost.date}</span>
                <span>·</span>
                <span>{featuredPost.readTime} okuma</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">{featuredPost.title}</h2>
              <p className="text-sm sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">{featuredPost.excerpt}</p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex px-6 py-3.5 bg-gradient-to-r from-[#031d28] to-[#092d3a] text-white rounded-xl hover:opacity-90 transition-all duration-300 font-semibold shadow-md items-center gap-2 text-sm sm:text-base"
              >
                <span>Devamını Oku</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Yazıları - Filtre + Profesyonel Listeleme */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1 mb-5 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {selectedCategory === 'Tümü' ? 'Tüm Yazılar' : selectedCategory}
              </h2>
              <span className="text-sm sm:text-base font-medium text-gray-400">
                {filteredPosts.length} yazı
              </span>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {categories.map((cat, i) => {
                const active = selectedCategory === cat.name;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedCategory(cat.name)}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      active
                        ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md shadow-teal-600/20'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-teal-300 hover:text-teal-700'
                    }`}
                  >
                    {cat.name}
                    <span
                      className={`inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 rounded-full text-[11px] font-semibold ${
                        active ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid gap-6">
              {filteredPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  <Link href={`/blog/${post.slug}`} className="grid sm:grid-cols-[220px_1fr] gap-4 sm:gap-6 items-center">
                    <BlogCover
                      gradient={post.gradient}
                      category={post.category}
                      image={post.image}
                      alt={post.title}
                      className="w-full aspect-[16/10] rounded-xl"
                      iconClassName="w-12 h-12"
                    />

                    <div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 mb-2 font-medium">
                        <span className="inline-block px-2.5 py-0.5 bg-teal-50 text-teal-700 rounded-full text-xs font-medium">{post.category}</span>
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime} okuma</span>
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <span className="mt-3 text-teal-600 font-semibold text-xs sm:text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        <span>Oku</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 sm:py-24 bg-white rounded-2xl border border-slate-200/80">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-teal-50 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Bu konuda henüz yazı yok</h3>
              <p className="text-gray-500 text-sm mb-5">
                &ldquo;{selectedCategory}&rdquo; kategorisinde şu an içerik bulunmuyor.
              </p>
              <button
                onClick={() => setSelectedCategory('Tümü')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-sm font-medium hover:shadow-md transition-all"
              >
                Tüm yazıları göster
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
