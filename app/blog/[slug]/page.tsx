'use client';

import { useParams } from 'next/navigation';
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
    content: `Mikro ERP ile İşletme Verimliliğini Nasıl Artırırsınız?

Mikro ERP sistemleri, işletmelerin verimliliğini artırmak için tasarlanmış kapsamlı çözümler sunar. Bu sistemler, iş süreçlerini otomatikleştirir, veri yönetimini kolaylaştırır ve karar alma süreçlerini hızlandırır.

Mikro ERP'nin Temel Faydaları

1. Süreç Otomasyonu: Manuel işlemlerin azaltılması, hata oranlarının düşürülmesi ve iş süreçlerinin hızlandırılması
2. Veri Entegrasyonu: Tüm departmanların tek bir platformda toplanması, gerçek zamanlı veri erişimi ve raporlama kolaylığı
3. Maliyet Tasarrufu: Operasyonel maliyetlerin azalması, stok yönetiminin optimize edilmesi ve kaynakların verimli kullanımı

Uygulama Adımları

Mikro ERP sistemini işletmenize entegre etmek için şu adımları takip edebilirsiniz:

1. İhtiyaç Analizi: İşletmenizin mevcut süreçlerini analiz edin
2. Sistem Seçimi: Size en uygun Mikro ERP ürününü seçin (FLY, RUN veya JUMP)
3. Entegrasyon: Sistemi işletmenize entegre edin
4. Eğitim: Personelinizi eğitin
5. Destek: Sürekli teknik destek alın

Sonuç

Mikro ERP sistemleri, işletmenizin verimliliğini %40'a kadar artırabilir ve operasyonel maliyetlerinizi önemli ölçüde düşürebilir.`
  },
  {
    slug: 'e-donusum-surecleri',
    title: 'E-Dönüşüm Süreçlerinde Dikkat Edilmesi Gerekenler',
    excerpt: 'E-fatura, e-defter ve e-arşiv süreçlerinde uymanız gereken kurallar ve en iyi uygulamalar. Dijital dönüşüme uyum sağlayın.',
    date: '2025-01-10',
    category: 'E-Dönüşüm',
    readTime: '7 dk okuma',
    content: `E-Dönüşüm Süreçlerinde Dikkat Edilmesi Gerekenler

E-dönüşüm süreçleri, Türkiye'de zorunlu hale gelmiş önemli bir konudur. E-fatura, e-defter ve e-arşiv sistemlerine geçiş yaparken dikkat etmeniz gereken kritik noktalar vardır.

E-Fatura Gereksinimleri

Zorunluluk Durumu: 2024 yılı itibarıyla belirli ciroların üzerindeki işletmeler için zorunlu. İsteğe bağlı geçiş için GİB portalına başvuru gerekiyor.

Teknik Gereksinimler: Özel entegratör veya GİB portalı üzerinden entegrasyon, uyumlu yazılım kullanımı ve dijital sertifikasyon.

E-Defter Süreci

Kayıt Zorunluluğu: Yıllık cirosu belirli limitlerin üzerinde olan işletmeler ve belirli sektörler için özel düzenlemeler.

Saklama Süreleri: E-defterler 10 yıl saklanmalı, GİB tarafından onaylanmalı ve dijital imza ile imzalanmalı.

En İyi Uygulamalar

1. Düzenli Yedekleme: Veri kaybını önlemek için
2. Personel Eğitimi: Süreçlerin doğru işletilmesi için
3. Entegratör Seçimi: Güvenilir entegratörlerle çalışma
4. Denetim: Düzenli süreç denetimi

Sonuç

E-dönüşüm süreçlerine uyum, işletmeniz için hem zorunlu hem de avantajlıdır. Doğru entegrasyonla süreçlerinizi optimize edebilirsiniz.`
  },
  {
    slug: 'crm-sistemleri',
    title: 'CRM Sistemleri ile Müşteri İlişkilerini Güçlendirin',
    excerpt: 'Müşteri ilişki yönetim sistemlerinin işletmeniz için faydaları ve doğru CRM seçimi ipuçları. Satış verimliliğinizi artırın.',
    date: '2025-01-05',
    category: 'CRM',
    readTime: '6 dk okuma',
    content: `CRM Sistemleri ile Müşteri İlişkilerini Güçlendirin

Müşteri İlişki Yönetimi (CRM) sistemleri, işletmelerin müşteri ilişkilerini güçlendirmek ve satış süreçlerini optimize etmek için kritik öneme sahiptir.

CRM Sistemlerinin Faydaları

1. Müşteri Verileri Yönetimi: Tüm müşteri bilgilerinin merkezi bir yerde toplanması, müşteri geçmişinin takibi ve kişiselleştirilmiş iletişim
2. Satış Süreci Yönetimi: Satış pipeline takibi, lead yönetimi ve performans analizi
3. Pazarlama Otomasyonu: Hedefli pazarlama kampanyaları, e-posta otomasyonu ve müşteri segmentasyonu

CRM Seçimi İpuçları

İşletme İhtiyaçlarını Belirleyin: Mevcut süreçlerinizi analiz edin, ekip boyutunu göz önünde bulundurun ve bütçenizi belirleyin.

Özellikleri Karşılaştırın: Entegrasyon özellikleri, mobil uyumluluk, kullanım kolaylığı ve destek hizmetleri.

Demo İsteyin: Ücretsiz deneme sürümlerini test edin, eğitim süreçlerini değerlendirin ve destek kalitesini kontrol edin.

Başarılı CRM Uygulaması

1. Personel Eğitimi: Tüm çalışanların sistemi kullanmasını sağlayın
2. Veri Girişi: Doğru ve güncel veri girişi yapın
3. Sürekli İyileştirme: Süreçleri düzenli olarak gözden geçirin
4. Entegrasyon: Diğer sistemlerle entegre edin

Sonuç

Doğru CRM sistemi seçimi ve uygulaması, müşteri memnuniyetini %35'e kadar artırabilir ve satış verimliliğinizi önemli ölçüde yükseltebilir.`
  },
  {
    slug: 'e-flow-is-surecleri',
    title: 'E-Flow ile İş Süreçlerini Otomatikleştirin',
    excerpt: 'No-code platform E-Flow ile iş süreçlerinizi nasıl otomatikleştireceğinizi öğrenin. Kod yazmadan iş akışları tasarlayın.',
    date: '2024-12-28',
    category: 'E-Flow',
    readTime: '4 dk okuma',
    content: `E-Flow ile İş Süreçlerini Otomatikleştirin

E-Flow, no-code bir platform olarak iş süreçlerinizi kod yazmadan otomatikleştirmenize olanak tanır. Bu platform ile karmaşık iş akışlarını kolayca tasarlayabilir ve uygulayabilirsiniz.

E-Flow'nin Temel Özellikleri

1. Görsel Tasarım Arayüzü: Sürükle-bırak ile süreç tasarımı, önceden hazırlanmış şablonlar ve kolay kullanım
2. Entegrasyon Desteği: Mikro ERP entegrasyonu, API bağlantıları ve webhook desteği
3. Otomasyon Özellikleri: Koşullu akışlar, otomatik bildirimler ve zamanlanmış görevler

Uygulama Alanları

1. Onay Süreçleri: Masraf onayı, satın alma onayı ve izin talepleri
2. Veri Akışı: Müşteri verisi senkronizasyonu, stok güncellemeleri ve fatura işlemleri
3. Raporlama: Otomatik rapor oluşturma, dashboard'lar ve performans metrikleri

Başlangıç Adımları

1. Süreç Analizi: Otomatikleştirmek istediğiniz süreçleri belirleyin
2. Tasarım: E-Flow ile süreç tasarımı yapın
3. Test: Pilot uygulama ile test edin
4. Deploy: Canlıya alın
5. İzleme: Sürekli izleme ve iyileştirme

Sonuç

E-Flow ile iş süreçlerinizi %50 oranında hızlandırabilir ve operasyonel verimliliğinizi önemli ölçüde artırabilirsiniz.`
  },
  {
    slug: 'mikro-fly-run-jump',
    title: 'Mikro FLY, RUN ve JUMP: Hangisi Size Uygun?',
    excerpt: 'Mikro yazılım ürünlerinin özelliklerini karşılaştırın ve işletmeniz için en uygun çözümü seçin. FLY, RUN veya JUMP?',
    date: '2024-12-20',
    category: 'Mikro Yazılım',
    readTime: '8 dk okuma',
    content: `Mikro FLY, RUN ve JUMP: Hangisi Size Uygun?

Mikro yazılım ürünleri, farklı büyüklükteki işletmeler için tasarlanmış üç ana ürün sunar: FLY, RUN ve JUMP. Her ürünün özellikleri ve hedef kitlesi farklıdır.

Mikro FLY

Özellikler: Başlangıç seviyesi işletmeler için, temel muhasebe ve stok yönetimi, kolay kullanım arayüzü ve uygun fiyat.

Hedef Kitle: Küçük işletmeler, başlangıç seviyesi ve sınırlı bütçe.

Avantajları: Düşük maliyet, kolay öğrenme ve hızlı kurulum.

Mikro RUN

Özellikler: Orta ölçekli işletmeler için, gelişmiş muhasebe özellikleri, CRM entegrasyonu ve çoklu kullanıcılı.

Hedef Kitle: Orta ölçekli işletmeler, büyüme aşamasında ve entegrasyon ihtiyacı olanlar.

Avantajları: Dengeli fiyat/performans, esnek özellikler ve ölçeklenebilirlik.

Mikro JUMP

Özellikler: Büyük ölçekli işletmeler için, gelişmiş ERP özellikleri, tüm entegrasyonlar ve kurumsal düzeyde güvenlik.

Hedef Kitle: Büyük işletmeler, kurumsal düzeyde ve karmaşık süreçler.

Avantajları: Kapsamlı özellikler, yüksek performans ve profesyonel destek.

Seçim Kriterleri

İşletme Büyüklüğü: Küçük için FLY, orta için RUN, büyük için JUMP.

Özellik İhtiyacı: Temel için FLY, orta için RUN, ileri için JUMP.

Bütçe: Sınırlı için FLY, dengeli için RUN, esnek için JUMP.

Sonuç

İşletmenizin ihtiyaçlarına ve büyüme hedeflerine en uygun Mikro ürününü seçerek, verimliliğinizi maksimize edebilirsiniz.`
  },
  {
    slug: 'dijital-donusum-yol-haritasi',
    title: 'Dijital Dönüşüm Yol Haritası: Nereden Başlamalı?',
    excerpt: 'İşletmenizin dijital dönüşüm sürecine nasıl başlayacağınız ve adım adım ilerleyeceğiniz. Başarı yol haritası.',
    date: '2024-12-15',
    category: 'Dijital Dönüşüm',
    readTime: '10 dk okuma',
    content: `Dijital Dönüşüm Yol Haritası: Nereden Başlamalı?

Dijital dönüşüm, işletmenin rekabet gücünü artırmak için kritik bir süreçtir. Doğru bir yol haritasıyla başlamak, başarı şansınızı önemli ölçüde artırır.

Dijital Dönüşüm Nedir?

Dijital dönüşüm, işletmenin tüm süreçlerinin dijital teknolojilerle yeniden tasarlanması ve optimize edilmesi sürecidir. Bu sadece teknoloji kullanımı değil, kültürel bir değişimdir.

Başlangıç Adımları

1. Mevcut Durum Analizi: İş süreçlerinizi analiz edin, dijital yetkinliklerinizi değerlendirin ve fırsatları ve riskleri belirleyin
2. Hedef Belirleme: Kısa vadeli, orta vadeli ve uzun vadeli hedefler
3. Strateji Geliştirme: Teknoloji seçimi, kaynak planlaması ve zaman çizelgesi

Temel Alanlar

1. İş Süreçleri: Manuel süreçlerin dijitalleştirilmesi, otomasyon ve entegrasyon
2. Veri Yönetimi: Veri toplama, analiz ve raporlama
3. Müşteri Deneyimi: Dijital kanallar, kişiselleştirme ve omnichannel
4. Kültür: Eğitim, değişim yönetimi ve liderlik

Uygulama Süreci

Faz 1: Hazırlık (1-3 ay): Analiz ve planlama, ekip oluşturma ve pilot projeler
Faz 2: Uygulama (3-12 ay): Teknoloji entegrasyonu, süreç optimizasyonu ve eğitim
Faz 3: İyileştirme (12+ ay): Sürekli optimizasyon, ölçekleme ve inovasyon

Başarı Faktörleri

1. Liderlik Desteği: Üst yönetimin tam desteği
2. Eğitim: Personelin sürekli eğitimi
3. İletişim: Şeffaf ve etkili iletişim
4. Esneklik: Süreçlere uyum sağlama

Sonuç

Dijital dönüşüm, bir süreçtir ve sabır gerektirir. Doğru planlama ve uygulama ile işletmenizi dijital çağın gereksinimlerine uyumlu hale getirebilirsiniz.`
  }
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug;
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">Blog yazısı bulunamadı</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              {post.title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-4 text-blue-100"
            >
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">{post.category}</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed text-lg space-y-4">
              {post.content.split('\n').map((line, index) => {
                if (line.trim() === '') {
                  return <br key={index} />;
                } else if (index === 0 || (line.trim().endsWith(':') && line[0] === line[0].toUpperCase() && line[0] !== line[0].toLowerCase())) {
                  return <p key={index} className="font-bold text-gray-900 text-xl">{line}</p>;
                } else {
                  return <p key={index}>{line}</p>;
                }
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Back to Blog */}
      <section className="py-32 bg-gradient-to-b from-blue-50 to-purple-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Daha Fazla İçerik</h2>
          <p className="text-gray-600 mb-8">
            ERP, CRM ve dijital dönüşüm hakkında diğer blog yazılarımızı keşfedin.
          </p>
          <a
            href="/blog"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            ← Blog'a Dön
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
