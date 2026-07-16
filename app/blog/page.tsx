'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCover from '@/components/BlogCover';
import { Sparkles } from 'lucide-react';
import { featuredPost, posts, categories } from '@/lib/blog';

// "6 Temmuz 2026" gibi Türkçe tarihi sıralanabilir bir sayıya çevirir.
const trAylar = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
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
    <div className="bg-white">
      <Navbar />

      {/* Hero - Modern Estetik Tasarım */}
      <section className="relative min-h-[60vh] sm:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Dekoratif Elementler */}
        <div className="absolute top-20 right-20 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-56 h-56 sm:w-80 sm:h-80 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-purple-100/20 to-blue-100/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <Sparkles size={12} className="sm:size-[14px]" />
            Blog
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-gray-900"
          >
            ERP ve
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Dijital Dönüşüm Rehberi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2"
          >
            ERP sistemleri ve dijital dönüşüm stratejileri hakkında kapsamlı rehberler ve ipuçları
          </motion.p>
        </div>
      </section>

      {/* Featured Post - Öne Çıkan */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold text-purple-600 uppercase tracking-wider">Öne Çıkan</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className={`h-64 sm:h-80 lg:h-full bg-gradient-to-br ${featuredPost.gradient} rounded-2xl flex items-center justify-center`}>
              <div className="text-center text-white px-4 sm:px-8">
                <span className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">{featuredPost.category}</span>
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">{featuredPost.title}</h2>
                <p className="text-sm sm:text-lg text-white/80">{featuredPost.excerpt}</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-purple-100 text-purple-700 rounded-full font-medium">{featuredPost.category}</span>
                <span>{featuredPost.date}</span>
                <span>·</span>
                <span>{featuredPost.readTime} okuma</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">{featuredPost.title}</h2>
              <p className="text-sm sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">{featuredPost.excerpt}</p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex px-6 py-3 sm:px-8 sm:py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg border border-slate-800 items-center gap-2 text-sm sm:text-base"
              >
                Devamını Oku
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Yazıları - Filtre + Profesyonel Listeleme */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 sm:mb-12">
            {/* Dinamik başlık: seçili kategoriyi ve sonuç sayısını gösterir */}
            <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1 mb-5 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {selectedCategory === 'Tümü' ? 'Tüm Yazılar' : selectedCategory}
              </h2>
              <span className="text-sm sm:text-base font-medium text-gray-400">
                {filteredPosts.length} yazı
              </span>
            </div>

            {/* Konuya göre filtre — başlıkla aynı çatı altında, amaçlı bir kontrol */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {categories.map((cat, i) => {
                const active = selectedCategory === cat.name;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedCategory(cat.name)}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                      active
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md shadow-purple-600/20'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300 hover:text-purple-700'
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
          <div className="divide-y divide-gray-200">
            {filteredPosts.map((post, index) => (
              <article
                key={index}
                className="py-6 sm:py-10 first:pt-0 last:pb-0 group"
              >
                <Link href={`/blog/${post.slug}`} className="grid sm:grid-cols-[220px_1fr] gap-4 sm:gap-6 items-center">
                  {/* Kapak */}
                  <BlogCover
                    gradient={post.gradient}
                    category={post.category}
                    className="w-full aspect-[16/10] rounded-xl"
                    iconClassName="w-12 h-12"
                  />

                  {/* İçerik */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                      <span className={`inline-block px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r ${post.gradient} text-white rounded-full text-xs font-medium`}>{post.category}</span>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime} okuma</span>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="mt-3 text-purple-600 font-medium text-xs sm:text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Oku
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          ) : (
            <div className="text-center py-16 sm:py-24">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-purple-50 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Bu konuda henüz yazı yok</h3>
              <p className="text-gray-500 text-sm mb-5">
                &ldquo;{selectedCategory}&rdquo; kategorisinde şu an içerik bulunmuyor.
              </p>
              <button
                onClick={() => setSelectedCategory('Tümü')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium hover:shadow-md hover:shadow-purple-600/20 transition-all"
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
