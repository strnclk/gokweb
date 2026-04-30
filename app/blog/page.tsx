'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sparkles, BookOpen, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

const featuredPost = {
  title: '2026\'da ERP Sistemlerinde Öne Çıkan 5 Trend - Yapay Zeka, Bulut ve Dijital Dönüşüm',
  excerpt: 'Yapay zeka destekli otomasyon, bulut ERP geçişleri ve gerçek zamanlı analitik gibi trendler işletmelerin dijital dönüşüm stratejilerini yeniden şekillendiriyor.',
  category: 'ERP',
  date: '25 Nisan 2026',
  readTime: '8 dk',
  gradient: 'from-purple-600 to-blue-600',
  slug: 'erp-sistemleri-2026-trendleri-yapay-zeka-bulut-dijital-donusum',
  metaDescription: '2026 yılında ERP sistemlerinde öne çıkan 5 trend: Yapay zeka destekli otomasyon, bulut ERP geçişleri, gerçek zamanlı analitik, mobil ERP ve ESG uyumluluğu. İşletmelerin dijital dönüşüm stratejileri.',
  content: `
    <h2>Yapay Zeka Destekli Otomasyon</h2>
    <p>2026'da ERP sistemlerinde yapay zeka entegrasyonu standart haline geliyor. AI destekli otomasyon, rutin görevleri otomatize ederek çalışanların daha stratejik işlere odaklanmasını sağlıyor. Makine öğrenimi algoritmaları, satış tahminlerinde %85 doğruluk oranına ulaşırken, otomatik faturalandırma süreçlerinde %60 zaman tasarrufu sağlıyor. Ayrıca AI destekli chatbot'lar, müşteri hizmetleri taleplerinin %70'ini otomatik olarak yanıtlayarak insan kaynaklarını daha karmaşık sorunlara yönlendiriyor. İstanbul'da Ataşehir, Beylikdüzü, Kadıköy gibi ilçelerde faaliyet gösteren işletmeler, AI destekli ERP sistemleri ile verimliliklerini %40 artırıyor.</p>
    
    <h2>Bulut ERP Geçişleri</h2>
    <p>Geleneksel on-premise ERP sistemlerinden bulut tabanlı çözümlere geçiş hız kazanıyor. Bulut ERP, daha düşük maliyetler, kolay ölçeklenebilirlik ve uzaktan erişim imkanı sunuyor. 2026'da işletmelerin %65'i bulut ERP kullanıyor ve bu oran her yıl %12 artıyor. Bulut geçişleri, ilk yatırım maliyetlerini %45 düşürürken, sistem güncelleme sürelerini haftalardan saatlere indiriyor. Ayrıca 7/24 erişim imkanı, uzaktan çalışan ekipler için kritik önem taşıyor. Ümraniye, Üsküdar, Kartal gibi İstanbul ilçelerindeki işletmeler, bulut ERP ile çoklu şube yönetimini kolaylaştırıyor.</p>
    
    <h2>Gerçek Zamanlı Analitik</h2>
    <p>Gerçek zamanlı veri analitiği, işletmelerin anında kararlar almasını sağlıyor. Dashboard'lar ve raporlar artık saniyelik gecikmelerle güncelleniyor. İşletmeler, gerçek zamanlı analitik ile envanter maliyetlerini %20, stok outs oranlarını %35 düşürüyor. Öngörücü analitik, talep tahminlerinde %90 doğruluk sağlayarak stok yönetimini optimize ediyor. Ayrıca anlık nakit akışı görünürlüğü, finansal karar alma sürelerini %50 hızlandırıyor. Maltepe, Pendik, Tuzla gibi İstanbul'un Anadolu Yakası ilçelerindeki perakende işletmeleri, gerçek zamanlı analitik ile satış verilerini optimize ediyor.</p>
    
    <h2>Mobil ERP</h2>
    <p>Mobil ERP uygulamaları, yöneticilerin her yerden sisteme erişebilmesini sağlıyor. Satış ekipleri sahadan, yöneticiler seyahatlerden işlerini yönetebiliyor. 2026'da ERP kullanıcılarının %80'i mobil uygulamaları aktif kullanıyor. Mobil ERP ile saha satış ekipleri, sipariş giriş sürelerini %70 hızlandırırken, onay süreçlerini %60 azaltıyor. Push bildirimleri ile kritik uyarılar anında iletiliyor, böylece yanıt süreleri dakikalara iniyor. İstanbul'un tüm ilçelerinde faaliyet gösteren saha ekipleri, mobil ERP ile Beylikdüzü'den Kadıköy'e kadar tüm bölgelerden işlerini yönetebiliyor.</p>
    
    <h2>Sürdürülebilirlik ve ESG</h2>
    <p>ERP sistemleri artık çevresel, sosyal ve yönetişim (ESG) metriklerini takip ediyor. Karbon ayak izi, enerji tüketimi ve sürdürülebilirlik KPI'ları standart özellikler haline geliyor. 2026'da ERP sistemlerinin %90'ı ESG raporlama modülleri içeriyor. Otomatik karbon emisyonu hesaplamaları, işletmelerin çevresel hedeflerini %25 daha iyi takip etmesini sağlıyor. Enerji tüketimi analitiği, operasyonel maliyetleri %15 düşürürken, sürdürülebilirlik sertifikalarına ulaşma sürecini hızlandırıyor. Ataşehir'deki üretim firmalarından Kadıköy'deki hizmet sektörüne kadar tüm İstanbul işletmeleri, ESG uyumlu ERP ile sürdürülebilirlik hedeflerine ulaşıyor.</p>
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
    title: 'E-Fatura Nedir? 2026 Kapsamlı Rehber - GİB, Zorunluluklar ve Avantajlar',
    excerpt: 'E-fatura sistemine geçiş yapmak isteyen işletmeler için adım adım rehber.',
    category: 'E-Dönüşüm',
    date: '22 Nisan 2026',
    readTime: '6 dk',
    gradient: 'from-blue-500 to-blue-600',
    slug: 'e-fatura-nedir-2026-rehber-gib-zorunluluk-avantajlar',
    metaDescription: 'E-fatura nedir? 2026 yılında kimler e-fatura kullanmak zorunda? E-fatura avantajları, geçiş süreci ve GİB portalı hakkında detaylı rehber. İşletmeler için e-dönüşüm.',
    content: `
      <h2>E-Fatura Nedir?</h2>
      <p>E-fatura, belirlenen standartlara uygun olarak elektronik ortamda oluşturulan, gönderilen ve saklanan fatura türüdür. Türkiye'de e-fatura sistemi 2010 yılında başlamış olup, 2026 itibarıyla 2 milyondan fazla mükellef tarafından kullanılmaktadır. İstanbul'da Ataşehir, Beylikdüzü, Kadıköy gibi ilçelerde faaliyet gösteren işletmeler, e-fatura sistemine hızla geçiş yapmaktadır. Gökkuşağı Yazılım olarak İstanbul'un tüm ilçelerinde e-fatura entegrasyon hizmeti sunuyoruz.</p>
      
      <h2>Kimler E-Fatura Kullanmak Zorunda?</h2>
      <p>2026 yılı itibarıyla yıllık cirosu 1 milyon TL ve üzeri olan mükellefler e-fatura kullanmak zorundadır. Bu limit her yıl güncellenmektedir. Ayrıca özel sektör faturalarında 10.000 TL ve üzeri, kamu faturalarında ise 5.000 TL ve üzeri tutarlı faturalar zorunlu olarak e-fatura olarak kesilmelidir. İsteğe bağlı e-fatura kullanımı da mümkündür ve küçük işletmeler için büyük avantajlar sunar. Ümraniye, Üsküdar, Kartal gibi İstanbul ilçelerindeki KOBİ'ler de e-fatura kullanımına hızla geçmektedir.</p>
      
      <h2>E-Fatura Avantajları</h2>
      <ul>
        <li>Kağıt ve baskı maliyetlerinden %70-80 oranında tasarruf</li>
        <li>Arşivleme kolaylığı - 10 yıl yasal saklama süresi boyunca güvenli saklama</li>
        <li>Hızlı ve güvenli gönderim - faturalar saniyeler içinde alıcıya ulaşıyor</li>
        <li>Otomatik muhasebe entegrasyonu - muhasebe kayıtları otomatik oluşuyor</li>
        <li>Çevre dostu çözüm - yılda ortalama 500.000 ağaç tasarrufu sağlanıyor</li>
        <li>İade ve iade kabul süreçlerinde %50 zaman tasarrufu</li>
        <li>Yanlış fatura kesme riskini %90 azaltıyor</li>
      </ul>
      
      <h2>İstanbul'da E-Fatura Hizmeti</h2>
      <p>Gökkuşağı Yazılım olarak İstanbul'un tüm ilçelerinde e-fatura entegrasyon hizmeti sunuyoruz. Ataşehir merkezli ofisimizden Beylikdüzü'ye, Kadıköy'den Ümraniye'ye kadar tüm İstanbul ilçelerine yerinde kurulum ve destek hizmeti sağlıyoruz. Maltepe, Pendik, Tuzla gibi Anadolu Yakası ilçelerindeki işletmeler için özel e-fatura çözümleri sunuyoruz.</p>
      
      <h2>İpuçları ve Öneriler</h2>
      <ul>
        <li>ERP sisteminiz ile uyumlu entegratör seçin</li>
        <li>Personelinizi e-fatura kullanımı konusunda eğitin</li>
        <li>Geçiş öncesi tüm süreçlerinizi gözden geçirin</li>
        <li>Yedekleme sistemleri kurun</li>
        <li>İstanbul ilçelerinde yerinde destek alın</li>
      </ul>
    `
  },
  {
    title: 'Mikro ERP ile Verimliliğinizi Artırın - 2026 İstatistikler ve Müşteri Hikayeleri',
    excerpt: 'Mikro ERP çözümlerinin işletme verimliliğine etkisini rakamlarla inceleyelim. Gerçek müşteri hikayeleri ve istatistikler.',
    category: 'ERP',
    date: '18 Nisan 2026',
    readTime: '7 dk',
    gradient: 'from-green-500 to-green-600',
    slug: 'mikro-erp-verimlilik-artisi-2026-istatistikler-musteri-hikayeleri',
    metaDescription: 'Mikro ERP ile işletme verimliliğinizi %40 artırın. Gerçek müşteri hikayeleri, istatistikler ve Mikro ERP avantajları. Türk işletmeleri için ideal ERP çözümü.',
    content: `
      <h2>Mikro ERP Nedir?</h2>
      <p>Mikro ERP, Türk işletmeleri için özel olarak geliştirilmiş kapsamlı bir iş kaynakları planlama (ERP) sistemidir. 30 yılı aşkın deneyimi ile Mikro Yazılım, Türkiye'de 50.000'den fazla işletmeye hizmet vermektedir. Mikro ERP, üretim, satın alma, satış, stok, muhasebe, finans ve insan kaynakları gibi tüm iş süreçlerini tek bir platformda birleştirir. Türk mevzuatına tam uyumlu, Türkçe arayüzü ve yerel destek avantajları ile öne çıkar. Gökkuşağı Yazılım olarak İstanbul'un tüm ilçelerinde Mikro ERP satış ve kurulum hizmeti sunuyoruz.</p>
      
      <h2>Verimlilik Artışı</h2>
      <p>Mikro ERP kullanan işletmelerde ortalama %40 operasyonel verimlilik artışı gözlemlenmiştir. Bu artış süreç otomasyonu, veri entegrasyonu ve hata azaltımı sayesinde gerçekleşir. Manuel işlemlerin otomatize edilmesi, çalışanların daha stratejik işlere odaklanmasını sağlar. İşletmeler, siparişten sevkiyata kadar geçen süreyi %60 kısaltarak müşteri memnuniyetini artırır. Ataşehir, Beylikdüzü, Kadıköy gibi İstanbul ilçelerindeki işletmeler, Mikro ERP ile verimliliklerini %40 artırıyor.</p>
      
      <h2>Gerçek Müşteri Hikayeleri</h2>
      <p>1000+ müşteri ile Mikro ERP, farklı sektörlerde başarıyla kullanılmaktadır. Üretim, perakende, inşaat ve hizmet sektörlerinde referanslarımız bulunmaktadır. Örneğin, Ümraniye'deki bir üretim firması Mikro ERP ile üretim planlama sürelerini %50 hızlandırmış ve stok devir hızını %30 artırmıştır. Beylikdüzü'deki bir perakende zinciri ise çoklu mağaza yönetimi ile satış verilerini gerçek zamanlı takip ederek stok outs oranlarını %45 düşürmüştür.</p>
      
      <h2>İstatistikler</h2>
      <ul>
        <li>%40 operasyonel verimlilik artışı</li>
        <li>%25 stok maliyeti azalması</li>
        <li>%60 daha hızlı raporlama</li>
        <li>%90 müşteri memnuniyeti</li>
        <li>%35 sipariş süresi kısalması</li>
        <li>%70 faturalandırma hızı artışı</li>
      </ul>
      
      <h2>İstanbul'da Mikro ERP Hizmeti</h2>
      <p>Gökkuşağı Yazılım olarak İstanbul'un tüm ilçelerinde Mikro ERP satış, kurulum ve destek hizmeti sunuyoruz. Ataşehir merkezli ofisimizden Beylikdüzü'ye, Kadıköy'den Ümraniye'ye kadar tüm İstanbul ilçelerine yerinde kurulum ve eğitim hizmeti sağlıyoruz. Maltepe, Pendik, Tuzla gibi Anadolu Yakası ilçelerindeki işletmeler için özel Mikro ERP çözümleri sunuyoruz.</p>
      
      <h2>Özellikler</h2>
      <p>Mikro ERP, modüler yapısı ile işletmenizin ihtiyaçlarına göre özelleştirilebilir. Temel modüller: Finansal Yönetim, Üretim Yönetimi, Stok Yönetimi, Satın Alma, Satış, CRM, İnsan Kaynakları ve Raporlama. Her modül birbiriyle entegre çalışarak veri bütünlüğünü sağlar. Ayrıca Mikro ERP, e-fatura, e-defter, e-irsaliye gibi e-dönüşüm uygulamaları ile tam uyumludur.</p>
    `
  },
  {
    title: 'İnşaat Sektöründe ERP Kullanımı - Proje Yönetimi ve Maliyet Kontrolü',
    excerpt: 'İnşaat projelerinde ERP sistemlerinin nasıl kullanıldığı, sağladığı avantajlar ve dikkat edilmesi gereken noktalar.',
    category: 'Sektörel Çözümler',
    date: '15 Nisan 2026',
    readTime: '5 dk',
    gradient: 'from-orange-500 to-orange-600',
    slug: 'insaat-sektorunde-erp-kullanimi-proje-yonetimi-maliyet-kontrolu',
    metaDescription: 'İnşaat sektöründe ERP kullanımı: Proje yönetimi, maliyet kontrolü, şantiye yönetimi ve avantajlar. İnşaat firmaları için ideal ERP çözümleri.',
    content: `
      <h2>İnşaat Sektöründe ERP</h2>
      <p>İnşaat sektörü karmaşık proje yönetimi gerektirir. ERP sistemleri bu süreçleri optimize eder. İnşaat projeleri, çok sayıda paydaş, uzun süreçler, yüksek bütçeler ve karmaşık koordinasyon gerektirir. ERP sistemleri, bu karmaşıklığı yönetmek için merkezi bir platform sunar. Türkiye'de inşaat firmalarının %45'i ERP kullanıyor ve bu sayede proje başarı oranlarını %35 artırıyorlar. İstanbul'da Beylikdüzü, Ataşehir, Kadıköy gibi ilçelerdeki inşaat projeleri, ERP sistemleri ile %35 daha yüksek başarı oranlarına ulaşıyor.</p>
      
      <h2>Proje Yönetimi</h2>
      <p>Bütçe takibi, ilerleme raporlaması ve sözleşme yönetimi ERP ile kolaylaşır. ERP ile proje başından sonuna kadar tüm süreçler takip edilebilir. Bütçe sapmaları %25 düşerken, proje teslim süreleri %15 kısalıyor. İlerleme raporları gerçek zamanlı olarak güncellenir, böylece yöneticiler anlık kararlar alabilir. Sözleşme yönetimi modülü ile hakedişler otomatik hesaplanır ve onay süreçleri hızlanır. Ümraniye, Üsküdar, Kartal gibi İstanbul ilçelerindeki inşaat firmaları, ERP ile proje yönetimini optimize ediyor.</p>
      
      <h2>Maliyet Kontrolü</h2>
      <p>Malzeme, işçilik ve ekipman maliyetleri gerçek zamanlı takip edilir. ERP ile şantiye giderleri, malzeme alımları ve işçilik maliyetleri tek bir ekranda görülebilir. Maliyet sapmaları %30 düşerken, karlılık %20 artıyor. Gerçek zamanlı takip sayesinde bütçe aşımları erken tespit edilir ve önlem alınabilir. Malzeme israfı %40 azalırken, kaynak kullanım verimliliği %35 artar.</p>
      
      <h2>Şantiye Yönetimi</h2>
      <p>Şantiye stok yönetimi, personel takibi ve ekipman planlaması ERP ile optimize edilir. Şantiye stokları merkezi olarak yönetilir, malzeme eksikleri önceden tespit edilir. Personel devamsızlığı takip edilir ve işçilik maliyetleri hesaplanır. Ekipman kullanım süreleri optimize edilir, bakım planlaması yapılır. Şantiye yönetiminde %25 zaman tasarrufu sağlanır.</p>
      
      <h2>İstanbul'da İnşaat ERP Hizmeti</h2>
      <p>Gökkuşağı Yazılım olarak İstanbul'un tüm ilçelerinde inşaat sektörü için özel ERP çözümleri sunuyoruz. Beylikdüzü, Ataşehir, Kadıköy, Ümraniye, Üsküdar gibi ilçelerdeki inşaat projeleri için yerinde kurulum ve destek hizmeti sağlıyoruz. Maltepe, Pendik, Tuzla gibi Anadolu Yakası ilçelerindeki inşaat firmaları için özel ERP çözümleri sunuyoruz.</p>
      
      <h2>Avantajlar</h2>
      <ul>
        <li>Merkezi proje yönetimi - tüm projeler tek ekranda</li>
        <li>Gerçek zamanlı maliyet takibi - bütçe sapmaları %25 düşer</li>
        <li>Otomatik faturalandırma - hakediş süreçleri %50 hızlanır</li>
        <li>Şantiye stok yönetimi - malzeme israfı %40 azalır</li>
        <li>İşçilik maliyeti takibi - personel verimliliği %30 artar</li>
        <li>Ekipman planlaması - kullanım maliyetleri %20 düşer</li>
        <li>Sözleşme yönetimi - onay süreleri %60 kısalır</li>
      </ul>
      
      <h2>Uygulama İpuçları</h2>
      <ul>
        <li>Proje başlamadan önce ERP sistemini kurun</li>
        <li>Personelinizi eğitin ve süreçleri tanımlayın</li>
        <li>Mobil uygulamaları aktif kullanın</li>
        <li>Düzenli raporlama yapın</li>
        <li>Entegrasyonları test edin</li>
        <li>İstanbul ilçelerinde yerinde destek alın</li>
      </ul>
    `
  },
  {
    title: 'E-Defter Geçiş Süreci: Adım Adım Rehber - GİB ve Zorunluluklar',
    excerpt: 'Kağıt defterden e-deftere geçiş sürecinde izlemeniz gereken adımlar, dikkat etmeniz gereken noktalar ve ipuçları.',
    category: 'E-Dönüşüm',
    date: '12 Nisan 2026',
    readTime: '9 dk',
    gradient: 'from-indigo-500 to-indigo-600',
    slug: 'e-defter-gecis-sureci-adim-adim-rehber-gib-zorunluluklar',
    metaDescription: 'E-defter geçiş süreci: Kimler e-defter kullanmak zorunda? GİB başvurusu, avantajlar ve adım adım rehber. Kağıt defterden e-deftere geçiş.',
    content: `
      <h2>E-Defter Nedir?</h2>
      <p>E-defter, kağıt defter yerine elektronik ortamda tutulan defter türüdür. 6736 Sayılı Kanun kapsamında, mükelleflerin yevmiye defter, büyük defter ve envanter defterlerini elektronik ortamda tutmaları ve saklamaları zorunludur. 2026 itibarıyla 1.5 milyondan fazla mükellef e-defter kullanmaktadır. Kağıt defterlerin saklanma zorunluluğu ortadan kalkar, elektronik ortamda güvenli saklama sağlanır.</p>
      
      <h2>Kimler E-Defter Kullanmak Zorunda?</h2>
      <p>2026 yılı itibarıyla e-fatura kullanıcısı olan tüm mükellefler e-defter kullanmak zorundadır. Ayrıca yıllık cirosu 3 milyon TL ve üzeri olan mükellefler de e-defter kullanmak zorundadır. İsteğe bağlı e-defter kullanımı da mümkündür ve küçük işletmeler için avantajlar sunar. E-defter kullanımı, defter beyanname yükümlülüğünü de ortadan kaldırır.</p>

      <h2>Avantajları</h2>
      <ul>
        <li>Kağıt tasarrufu - yılda ortalama 300.000 sayfa kağıt tasarrufu</li>
        <li>Kolay arşivleme - 10 yıl yasal saklama süresi boyunca güvenli saklama</li>
        <li>Hızlı erişim - defterlere saniyeler içinde erişim</li>
        <li>Defter beyanname yükümlülüğü kalkar</li>
        <li>Audit süreçlerinde zaman tasarrufu - %70 daha hızlı denetim</li>
        <li>Defter tutma maliyetlerinden %60 tasarruf</li>
        <li>Gerçek zamanlı defter görünürlüğü</li>
      </ul>
      
      <h2>Dikkat Edilmesi Gerekenler</h2>
      <ul>
        <li>Doğru entegratör seçin - ERP sisteminizle uyumlu olmalı</li>
        <li>Personelinizi eğitin</li>
        <li>Yedekleme sistemleri kurun</li>
        <li>Düzenli olarak defterleri kontrol edin</li>
        <li>Meşruhatları düzenli tutun</li>
      </ul>
    `
  },
  {
    title: 'Dijital Dönüşümde Başarının 5 Anahtarı - Strateji ve Uygulama Rehberi',
    excerpt: 'İşletmelerin dijital dönüşüm sürecinde başarılı olmalarını sağlayan 5 kritik faktör ve uygulama stratejileri.',
    category: 'Dijital Dönüşüm',
    date: '8 Nisan 2026',
    readTime: '6 dk',
    gradient: 'from-violet-500 to-violet-600',
    slug: 'dijital-donusumde-basarinin-5-anahtari-strateji-uygulama-rehberi',
    metaDescription: 'Dijital dönüşümde başarının 5 anahtarı: Liderlik desteği, stratejik planlama, personel eğitimi, doğru teknoloji seçimi ve sürekli iyileştirme. İşletmeler için rehber.',
    content: `
      <h2>1. Liderlik Desteği</h2>
      <p>Üst yönetimin desteği dijital dönüşümün başarısı için kritik öneme sahiptir. Başarılı dijital dönüşüm projelerinin %90'ında üst yönetimin aktif katılımı vardır. CEO ve diğer üst yöneticiler, dijital dönüşümü bir öncelik olarak ele almalı ve kaynak ayırmalıdır. Liderlik desteği olmadan, dijital dönüşüm projeleri başarısızlık riskiyle karşı karşıya kalır. Üst yönetim, vizyonu belirlemeli, hedefleri netleştirmeli ve süreci yönlendirmelidir.</p>
      
      <h2>2. Stratejik Planlama</h2>
      <p>Açık hedefler ve yol haritası belirlenmelidir. Dijital dönüşüm, rastgele adımlarla değil, kapsamlı bir strateji ile gerçekleştirilmelidir. İşletmenin mevcut durumu analizi edilmeli, hedefler belirlenmeli ve yol haritası çizilmelidir. Başarılı dijital dönüşüm projelerinin %80'i detaylı bir strateji ile başlar. KPI'lar belirlenmeli, başarı ölçümleri tanımlanmalı ve ilerleme düzenli olarak takip edilmelidir.</p>
      
      <h2>3. Personel Eğitimi</h2>
      <p>Çalışanların yeni sistemlere adapte olması için eğitim şarttır. Dijital dönüşüm sadece teknoloji değişimi değil, aynı zamanda kültürel değişimdir. Çalışanların %70'i yeni teknolojilere direnç gösterir, bu nedenle eğitim ve değişim yönetimi kritik önem taşır. Kapsamlı eğitim programları, workshop'lar ve sürekli destek ile personelin adaptasyonu hızlandırılır. Eğitim, projenin başarısında %45 etkili bir faktördür.</p>
      
      <h2>4. Doğru Teknoloji Seçimi</h2>
      <p>İşletmeye uygun ERP ve dijital çözümler seçilmelidir. Teknoloji seçimi, işletmenin ihtiyaçlarına, büyüklüğüne ve sektörüne göre yapılmalıdır. Yanlış teknoloji seçimi, projenin başarısızlık riskini %60 artırır. ERP sistemi seçerken ölçeklenebilirlik, entegrasyon kolaylığı, kullanıcı dostu arayüz ve yerel destek gibi kriterler göz önünde bulundurulmalıdır. Ayrıca e-dönüşüm uygulamaları ile uyumluluk da kritik önem taşır.</p>
      
      <h2>5. Sürekli İyileştirme</h2>
      <p>Dijital dönüşüm bir süreçtir, sürekli iyileştirme gerekir. Dijital dönüşüm tek seferlik bir proje değil, sürekli evrilen bir yolculuktur. Başarılı işletmeler, dijital dönüşüm sürecinde sürekli geri bildirim alır, performansı ölçer ve iyileştirmeler yapar. Agil metodolojiler ve iteratif yaklaşım, sürekli iyileştirmeyi kolaylaştırır. Dijital dönüşüm projelerinin %75'i sürekli iyileştirme ile başarıya ulaşır.</p>
      
      <h2>Uygulama İpuçları</h2>
      <ul>
        <li>Küçük başlayın ve ölçekleyin - pilot projeler ile başlayın</li>
        <li>Hızlı kazanımlar hedefleyin - erken başarılar motivasyon sağlar</li>
        <li>Çapraz fonksiyonel ekipler kurun - departmanlar arası işbirliği şart</li>
        <li>İletişimi güçlendirin - tüm paydaşları bilgilendirin</li>
        <li>Riskleri yönetin - risk analizi yapın ve önlem alın</li>
        <li>Dışarıdan uzman desteği alın - danışmanlardan faydalanın</li>
      </ul>
      
      <h2>Ölçülebilir Sonuçlar</h2>
      <ul>
        <li>Operasyonel verimlilikte %40 artış</li>
        <li>Müşteri memnuniyetinde %35 iyileşme</li>
        <li>İş karar alma sürelerinde %50 hızlanma</li>
        <li>İş maliyetlerinde %25 düşüş</li>
        <li>İnovasyon kapasitesinde %60 artış</li>
      </ul>
    `
  },
  {
    title: 'Mikro FLY vs RUN vs JUMP Karşılaştırması - 2026 Fiyat ve Özellik Analizi',
    excerpt: 'Mikro ERP ürün ailesinin üç farklı versiyonunu özellik, fiyat ve kullanım alanı açısından detaylı karşılaştırma.',
    category: 'Mikro Ürünler',
    date: '5 Nisan 2026',
    readTime: '10 dk',
    gradient: 'from-emerald-500 to-emerald-600',
    slug: 'mikro-fly-vs-run-vs-jump-karsilastirmasi-2026-fiyat-ozellik-analizi',
    metaDescription: 'Mikro FLY, RUN ve JUMP karşılaştırması: Özellikler, fiyatlar, kullanıcı kapasitesi ve hangi ürünü seçmelisiniz? 2026 Mikro ERP ürün rehberi.',
    content: `
      <h2>Mikro FLY</h2>
      <p>Mikro FLY, KOBİ'ler için ideal, temel ERP fonksiyonları içerir. Yıllık cirosu 10 milyon TL'ye kadar olan işletmeler için tasarlanmıştır. Temel modüller: Stok Yönetimi, Satın Alma, Satış, Faturalandırma ve Raporlama. 10 kullanıcıya kadar destekler, bulut veya on-premise seçenekleri mevcuttur. Kurulum süresi 1-2 hafta, yıllık maliyet ortalama 50.000-100.000 TL arasındadır. KOBİ'lerin %60'ı Mikro FLY kullanmayı tercih etmektedir.</p>
      
      <h2>Mikro RUN</h2>
      <p>Mikro RUN, orta ölçekli işletmeler için gelişmiş özellikler sunar. Yıllık cirosu 10-100 milyon TL arasındaki işletmeler için uygundur. Ek modüller: Üretim Yönetimi, CRM, İnsan Kaynakları, Bütçe Yönetimi ve Proje Yönetimi. 50 kullanıcıya kadar destekler, çoklu şube yönetimi özelliği vardır. Kurulum süresi 3-4 hafta, yıllık maliyet ortalama 150.000-300.000 TL arasındadır. Orta ölçekli işletmelerin %70'i Mikro RUN kullanmaktadır.</p>
      
      <h2>Mikro JUMP</h2>
      <p>Mikro JUMP, büyük ölçekli işletmeler ve çoklu şube yapısı için tasarlanmıştır. Yıllık cirosu 100 milyon TL ve üzeri olan işletmeler için uygundur. Tüm modüller + Gelişmiş Analitik, AI Entegrasyonu ve Çoklu Döviz Yönetimi. Sınırsız kullanıcı desteği, çoklu şirket yapısı, gelişmiş güvenlik özellikleri. Kurulum süresi 4-8 hafta, yıllık maliyet 500.000 TL'den başlar. Büyük işletmelerin %80'i Mikro JUMP kullanmayı tercih etmektedir.</p>
      
      <h2>Detaylı Karşılaştırma Tablosu</h2>
      <ul>
        <li>Kullanıcı Kapasitesi: FLY 10, RUN 50, JUMP Sınırsız</li>
        <li>Şube Sayısı: FLY 1, RUN 5, JUMP 50+</li>
        <li>Modül Sayısı: FLY 5, RUN 12, JUMP 20+</li>
        <li>Entegrasyon: FLY Temel, RUN Orta, JUMP Gelişmiş</li>
        <li>Özel Geliştirme: FLY Yok, RUN Sınırlı, JUMP Tam</li>
        <li>7/24 Destek: FLY Yok, RUN Var, JUMP Var</li>
        <li>AI Entegrasyonu: FLY Yok, RUN Var, JUMP Gelişmiş</li>
      </ul>
      
      <h2>Hangi Ürünü Seçmelisiniz?</h2>
      <p>Her ürün farklı kullanıcı ihtiyaçlarına hitap eder. İşletmenizin büyüklüğüne, çalışan sayısına, şube yapısına ve gereksinimlerine göre seçim yapmalısınız. KOBİ'ler için FLY ideal başlangıçtır. Büyüdükçe RUN'a geçiş yapılabilir. Büyük işletmeler doğrudan JUMP'u tercih edebilir. Tüm ürünler birbirine uyumludur ve geçiş süreci sorunsuz gerçekleşir.</p>
      
      <h2>Seçim İpuçları</h2>
      <ul>
        <li>Çalışan sayınız 10'dan az ise FLY</li>
        <li>Çoklu şubeniz varsa RUN veya JUMP</li>
        <li>Üretim yapıyorsanız RUN veya JUMP</li>
        <li>AI özelliklerine ihtiyacınız varsa JUMP</li>
        <li>Bütçenizi belirleyin ve ürünleri karşılaştırın</li>
        <li>Demo talep edin ve ürünü test edin</li>
      </ul>
    `
  },
  {
    title: 'Üretim Sektöründe Stok Yönetimi - MRP Sistemleri ve Otomasyon Çözümleri',
    excerpt: 'Üretim işletmelerinde etkili stok yönetimi stratejileri, MRP sistemleri ve otomasyon çözümleri.',
    category: 'Sektörel Çözümler',
    date: '1 Nisan 2026',
    readTime: '7 dk',
    gradient: 'from-pink-500 to-pink-600',
    slug: 'uretim-sektorunde-stok-yonetimi-mrp-sistemleri-otomasyon-cozumleri',
    metaDescription: 'Üretim sektöründe stok yönetimi: MRP sistemleri, otomasyon çözümleri, stok optimizasyon stratejileri ve KPI\'lar. Üretim işletmeleri için rehber.',
    content: `
      <h2>Stok Yönetiminin Önemi</h2>
      <p>Üretim işletmelerinde stok yönetimi kritik öneme sahiptir. Etkili stok yönetimi, üretim sürekliliğini sağlar, maliyetleri düşürür ve müşteri memnuniyetini artırır. Yanlış stok yönetimi, üretim durmalarına, müşteri kayıplarına ve yüksek maliyetlere yol açabilir. Türkiye'de üretim işletmelerinin %45'i stok yönetiminde sorun yaşamaktadır. Etkili stok yönetimi ile stok maliyetleri %30, stok outs oranları %40 düşürülmektedir.</p>
      
      <h2>MRP Sistemleri</h2>
      <p>Malzeme gereksinim planlama (MRP) sistemleri, stok maliyetlerini optimize eder. MRP sistemleri, üretim programına göre malzeme ihtiyacını hesaplar, sipariş zamanlarını belirler ve stok seviyelerini optimize eder. MRP kullanımı ile stok devir hızı %25 artarken, stok maliyetleri %20 düşer. Otomatik sipariş önerileri ile manuel sipariş hataları %80 azalır. Üretim işletmelerinin %60'ı MRP sistemlerini kullanmaktadır.</p>
      
      <h2>Otomasyon Çözümleri</h2>
      <p>Barcode ve RFID sistemleri ile stok takibi otomatize edilir. RFID teknolojisi, stok sayım sürelerini %95 hızlandırırken, doğruluk oranını %99'a çıkarır. Barcode sistemleri ise düşük maliyetli bir başlangıç çözümü sunar. Otomatik stok takibi ile insan hatası %90 azalır. IoT sensörleri ile gerçek zamanlı stok görünürlüğü sağlanır. Otomasyon yatırımı, ortalama 12-18 ayda kendini amorti eder.</p>
      
      <h2>Stok Optimizasyon Stratejileri</h2>
      <ul>
        <li>JIT (Just-in-Time) - Malzemeleri tam ihtiyaç anında temin etme</li>
        <li>ABC Analizi - Stokları önem derecesine göre sınıflandırma</li>
        <li>Güvenlik Stoku - Riskleri karşılamak için asgari stok seviyesi</li>
        <li>Vendor Managed Inventory - Tedarikçilerin stok yönetimi</li>
        <li>Cross-docking - Depolama süresini azaltma</li>
      </ul>
      
      <h2>Stok Yönetiminde KPI'lar</h2>
      <ul>
        <li>Stok Devir Hızı - Yıllık ortalama 8-12 kez</li>
        <li>Stok Outs Oranı - %5'in altında olmalı</li>
        <li>Stok Taşıma Maliyeti - Toplam maliyetin %15-20'si</li>
        <li>Sipariş Döngü Süresi - 2-5 gün arası</li>
        <li>Tahmin Doğruluğu - %85 ve üzeri</li>
      </ul>
      
      <h2>ERP Entegrasyonu</h2>
      <p>Stok yönetimi, ERP sistemi ile tam entegre çalışmalıdır. Üretim, satın alma ve satış modülleri ile veri paylaşımı, stok görünürlüğünü artırır. Gerçek zamanlı stok verileri, doğru kararlar alınmasını sağlar. ERP entegrasyonu ile stok yönetimi süreçleri %50 hızlanır. Mikro ERP gibi yerel çözümler, Türk üretim işletmelerinin ihtiyaçlarına özel olarak geliştirilmiştir.</p>
    `
  },
  {
    title: 'KOBİ\'ler İçin ERP Seçim Rehberi - 2026 Kriterler, Maliyet ve Öneriler',
    excerpt: 'Küçük ve orta ölçekli işletmelerin ERP seçiminde dikkat etmesi gereken kriterler, maliyet analizi ve öneriler.',
    category: 'ERP',
    date: '28 Mart 2026',
    readTime: '8 dk',
    gradient: 'from-red-500 to-red-600',
    slug: 'kobi-icin-erp-secim-rehberi-2026-kriterler-maliyet-oneriler',
    metaDescription: 'KOBİ\'ler için ERP seçim rehberi: Seçim kriterleri, maliyet analizi, ölçeklenebilirlik ve öneriler. Küçük işletmeler için doğru ERP seçimi.',
    content: `
      <h2>KOBİ'ler İçin ERP'nin Önemi</h2>
      <p>KOBİ'lerin ERP seçerken dikkat etmesi gereken kriterler farklıdır. KOBİ'ler, sınırlı kaynakları, hızlı değişen ihtiyaçları ve büyüme potansiyelleri nedeniyle özel ERP çözümlerine ihtiyaç duyarlar. Türkiye'de KOBİ'lerin sadece %35'i ERP kullanıyor, ancak bu oran hızla artıyor. ERP kullanımı ile KOBİ'lerin operasyonel verimliliği %45 artıyor. KOBİ'ler için doğru ERP seçimi, büyüme yolculuğunda kritik önem taşır.</p>
      
      <h2>Maliyet Analizi</h2>
      <p>Lisans, kurulum ve eğitim maliyetleri hesaplanmalıdır. KOBİ'ler için toplam sahip olma maliyeti (TCO) kritik bir faktördür. Lisans maliyeti dışında, kurulum, eğitim, bakım ve yükseltme maliyetleri de hesaba katılmalıdır. KOBİ'ler için yıllık ERP maliyeti 50.000-150.000 TL arasındadır. Bulut ERP, başlangıç maliyetlerini %60 düşürürken, aylık ödeme modeli ile nakit akışını kolaylaştırır. ROI (Yatırım Getirisi) ortalama 12-18 ayda sağlanır.</p>
      
      <h2>Kolay Kullanım</h2>
      <p>Kullanıcı dostu arayüz önemlidir. KOBİ'lerde genellikle sınırlı IT ekibi vardır, bu nedenle ERP'nin kolay kullanılabilir olması şarttır. Türkçe arayüz, yerel terminoloji ve tanıdık iş akışları adaptasyonu hızlandırır. KOBİ'lerin %70'i kullanım kolaylığını en önemli kriter olarak belirtmektedir. Demo testleri ve kullanıcı eğitimi, seçim sürecinde kritik rol oynar.</p>
      
      <h2>Ölçeklenebilirlik</h2>
      <p>İşletme büyüdükçe sistemin de büyümesi gerekir. KOBİ'ler hızlı büyüme potansiyeline sahiptir, bu nedenle ERP'nin ölçeklenebilir olması şarttır. Kullanıcı sayısı, modül sayısı ve veri hacmi kolayca artırılmalıdır. Mikro FLY'den RUN'a veya JUMP'a geçiş, sorunsuz olmalıdır. Ölçeklenebilir olmayan ERP, işletme büyümesini engeller ve ek maliyetler yaratır.</p>
      
      <h2>Yerel Uyumluluk</h2>
      <p>Türk mevzuatına uyum ve yerel destek kritik öneme sahiptir. E-fatura, e-defter, e-irsaliye gibi e-dönüşüm uygulamaları ile tam uyumluluk şarttır. Türk muhasebe standartlarına uygun raporlama, SGK entegrasyonu ve yerel vergi kuralları desteklenmelidir. Yerel destek, sorunlara hızlı çözüm sağlar. Yabancı ERP çözümleri, yerel uyumlulukta sorun yaşayabilir.</p>
      
      <h2>Seçim Kriterleri</h2>
      <ul>
        <li>İşletme büyüklüğüne uygunluk</li>
        <li>Sektör özelinde özellikler</li>
        <li>Kullanım kolaylığı</li>
        <li>Toplam sahip olma maliyeti</li>
        <li>Ölçeklenebilirlik</li>
        <li>Yerel uyumluluk ve destek</li>
        <li>Entegrasyon kolaylığı</li>
        <li>Mobil uygulama desteği</li>
      </ul>
      
      <h2>Yaygın Hatalar</h2>
      <ul>
        <li>Aşırı özellikli ERP seçimi - gereksiz maliyetler</li>
        <li>Demo yapmadan seçim - sürprizler kaçınılmaz</li>
        <li>Personel eğitimi ihmal - adaptasyon sorunu</li>
        <li>Uzun sözleşmeler - esneklik kaybı</li>
        <li>Yerel destek göz ardı - çözüm zorluğu</li>
      </ul>
      
      <h2>Öneriler</h2>
      <ul>
        <li>İhtiyaçlarınızı netleştirin</li>
        <li>3-5 ERP çözümü kısa listeye alın</li>
        <li>Her biri için demo talep edin</li>
        <li>Referanslarla konuşun</li>
        <li>Personelinizi sürece dahil edin</li>
        <li>Küçük başlayın, ölçekleyin</li>
      </ul>
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
