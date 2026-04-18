'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    slug: 'mikro-erp-isletme-verimliligi',
    title: 'Mikro ERP ile İşletme Verimliliğini Nasıl Artırırsınız?',
    excerpt: 'Mikro ERP sistemlerinin işletmenizin verimliliğini nasıl artırdığını ve maliyet tasarrufu sağladığını öğrenin. İş süreçlerini otomatikleştirin ve verimliliğinizi artırın.',
    date: '2025-01-15',
    category: 'ERP',
    readTime: '5 dk okuma',
  },
  {
    slug: 'e-donusum-surecleri',
    title: 'E-Dönüşüm Süreçlerinde Dikkat Edilmesi Gerekenler',
    excerpt: 'E-fatura, e-defter ve e-arşiv süreçlerinde uymanız gereken kurallar ve en iyi uygulamalar. Dijital dönüşüme uyum sağlayın.',
    date: '2025-01-10',
    category: 'E-Dönüşüm',
    readTime: '7 dk okuma',
  },
  {
    slug: 'crm-sistemleri',
    title: 'CRM Sistemleri ile Müşteri İlişkilerini Güçlendirin',
    excerpt: 'Müşteri ilişki yönetim sistemlerinin işletmeniz için faydaları ve doğru CRM seçimi ipuçları. Satış verimliliğinizi artırın.',
    date: '2025-01-05',
    category: 'CRM',
    readTime: '6 dk okuma',
  },
  {
    slug: 'e-flow-is-surecleri',
    title: 'E-Flow ile İş Süreçlerini Otomatikleştirin',
    excerpt: 'No-code platform E-Flow ile iş süreçlerinizi nasıl otomatikleştireceğinizi öğrenin. Kod yazmadan iş akışları tasarlayın.',
    date: '2024-12-28',
    category: 'E-Flow',
    readTime: '4 dk okuma',
  },
  {
    slug: 'mikro-fly-run-jump',
    title: 'Mikro FLY, RUN ve JUMP: Hangisi Size Uygun?',
    excerpt: 'Mikro yazılım ürünlerinin özelliklerini karşılaştırın ve işletmeniz için en uygun çözümü seçin. FLY, RUN veya JUMP?',
    date: '2024-12-20',
    category: 'Mikro Yazılım',
    readTime: '8 dk okuma',
  },
  {
    slug: 'dijital-donusum-yol-haritasi',
    title: 'Dijital Dönüşüm Yol Haritası: Nereden Başlamalı?',
    excerpt: 'İşletmenizin dijital dönüşüm sürecine nasıl başlayacağınız ve adım adım ilerleyeceğiniz. Başarı yol haritası.',
    date: '2024-12-15',
    category: 'Dijital Dönüşüm',
    readTime: '10 dk okuma',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 ">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold leading-tight mb-6 text-gray-900"
          >
            Blog
            <br />
            <span className="text-gray-900">Teknoloji ve Dijital Dönüşüm</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-900"
          >
            ERP, CRM, Mikro yazılım ve dijital dönüşüm hakkında en güncel bilgiler ve ipuçları
          </motion.p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-32 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Son Yazılar</h2>
            <p className="text-xl text-gray-900 max-w-2xl mx-auto">
              ERP, CRM, Mikro yazılım ve dijital dönüşüm hakkında en güncel bilgiler
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h2>
                <p className="text-gray-900 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 text-sm">{post.date}</span>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Devamını Oku →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-blue-50 to-purple-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Dijital Dönüşüm Hakkında Daha Fazla Bilgi Alın</h2>
          <p className="text-xl text-gray-900 mb-8">
            İşletmeniz için en uygun teknoloji çözümlerini birlikte belirleyelim.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Ücretsiz Danışmanlık Alın
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
