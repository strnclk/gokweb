export type IconKey =
  | 'smartphone'
  | 'cpu'
  | 'check'
  | 'database'
  | 'file'
  | 'swap'
  | 'fileCheck'
  | 'coins'
  | 'layers'
  | 'users'
  | 'settings';

export interface Step {
  title: string;
  role: string;
  desc: string;
  icon: IconKey;
  color: string;
}

export interface ProcessDetail {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  steps: Step[];
}

export const processes: ProcessDetail[] = [
  {
    id: 'satin-alma',
    name: 'Satın Alma ve Talep Yönetimi',
    shortDesc:
      'Tüm satın alma taleplerinizi limitler dahilinde otomatik onay akışlarından geçirerek ERP sisteminize aktarın.',
    longDesc:
      'Kağıt formları ve kaybolan e-postaları geride bırakın. Satın Alma ve Talep Süreci, şirket içi ihtiyaç bildirimlerinden başlayarak tedarikçi seçimi, fiyat karşılaştırması ve nihai sipariş oluşturma aşamasına kadar tüm akışı dijitalleştirir.',
    benefits: [
      'Tiger/Netsis/Mikro ERP sistemlerine otomatik satın alma siparişi veya talep fişi oluşturma.',
      'Kişi veya departman bazlı bütçe limitlerinin süreç içinde anlık kontrol edilmesi.',
      'Tutar kırılımlarına göre (örn: 10.000 ₺ altı/üstü) dinamik ve kademeli onay yolları.',
      'Sipariş ve fatura kalemlerinin sistem tarafından otomatik olarak karşılaştırılması.',
    ],
    steps: [
      {
        title: 'Talep Girişi',
        role: 'Çalışan (Mobil & Web)',
        desc: 'Çalışan, ihtiyaç duyduğu malzemeleri, miktarları ve talep nedenini seçerek hızlıca dijital talep formu oluşturur.',
        icon: 'smartphone',
        color: 'bg-blue-500 text-white',
      },
      {
        title: 'Limit & Bütçe Kontrolü',
        role: 'Süreç Motoru (Otomatik)',
        desc: 'E-Flow, ilgili departmanın veya projenin kalan bütçe limitlerini anlık sorgular. Limit aşımında onay seviyesini otomatik yükseltir.',
        icon: 'cpu',
        color: 'bg-amber-500 text-white',
      },
      {
        title: 'Kademeli Onay',
        role: 'Departman & Finans Müdürü',
        desc: 'Onay yetkilileri cep telefonlarına gelen bildirimle talebi, detayları ve bütçe durumunu inceleyerek tek tıkla onaylar.',
        icon: 'check',
        color: 'bg-teal-500 text-white',
      },
      {
        title: 'Tiger/Mikro Entegrasyonu',
        role: 'ERP Entegratörü (Otomatik)',
        desc: 'Onay süreci tamamlanan talep, ERP sisteminize (Tiger, Netsis, Mikro vb.) "Sipariş Fişi" olarak insan eli değmeden hatasız kaydedilir.',
        icon: 'database',
        color: 'bg-indigo-500 text-white',
      },
    ],
  },
  {
    id: 'fatura-onay',
    name: 'Fatura & E-Fatura Onay Süreci',
    shortDesc:
      'Gelen e-faturaları sipariş ve irsaliyelerle otomatik eşleştirin, kademeli onaylardan sonra ERP\'de muhasebeleştirin.',
    longDesc:
      'E-Fatura onay süreci, gelen fatura XML verilerini sisteme otomatik çekerek sipariş/irsaliye doğrulamasını saniyeler içinde tamamlar. Onay yetkililerine dinamik olarak atanan faturalar hızla işlenir ve hata payı sıfıra indirilir.',
    benefits: [
      'E-Fatura XML verilerinin anlık olarak sisteme çekilip görselleştirilmesi.',
      'ERP\'deki sipariş ve irsaliyelerle miktar/tutar bazlı otomatik eşleştirme (3-way matching).',
      'Faturadaki vergi dairesi, tedarikçi ve tutara göre ilgili muhasebeci veya müdüre otomatik atama.',
      'Onaylanan faturaların ERP\'de otomatik muhasebeleşmesi ve ödeme listelerine girmesi.',
    ],
    steps: [
      {
        title: 'E-Fatura Gelişi',
        role: 'Entegratör & Sistem (Otomatik)',
        desc: 'Gelen e-fatura XML verisi sisteme düşer düşmez E-Flow onay havuzuna alınır ve görsel fatura şablonu oluşturulur.',
        icon: 'file',
        color: 'bg-purple-500 text-white',
      },
      {
        title: 'Sipariş & İrsaliye Eşleştirme',
        role: 'Süreç Motoru (Otomatik)',
        desc: 'Sistem faturadaki kalemleri, ERP üzerindeki satın alma siparişi ve giriş irsaliyeleri ile otomatik eşleştirir; tutarsızlıkları raporlar.',
        icon: 'swap',
        color: 'bg-cyan-500 text-white',
      },
      {
        title: 'Yetkili Kontrolü & Onay',
        role: 'Proje Sorumlusu & Müdür',
        desc: 'İlgili departman yöneticisi veya proje sorumlusu faturayı ve eşleşme detaylarını inceleyerek onay verir.',
        icon: 'fileCheck',
        color: 'bg-emerald-500 text-white',
      },
      {
        title: 'Muhasebeleştirme',
        role: 'ERP Muhasebe Modülü',
        desc: 'Tüm onayları tamamlanan fatura, ERP sistemine (Tiger/Mikro) otomatik fatura kaydı ve muhasebe fişi olarak işlenir.',
        icon: 'coins',
        color: 'bg-blue-600 text-white',
      },
    ],
  },
  {
    id: 'izin-yonetimi',
    name: 'İK İzin Yönetimi Süreci',
    shortDesc:
      'Çalışanlarınızın izin taleplerini kalan hakedişleri kontrol ederek yönetin, PDKS ve bordroya otomatik aktarın.',
    longDesc:
      'İzin Yönetimi Süreci, çalışanların kağıt form doldurma veya e-posta atma zorunluluğunu ortadan kaldırır. İK veritabanı ile çift yönlü entegre çalışarak kalan izin hakedişlerini anlık olarak kontrol eder ve onaylanan izinleri sisteme işler.',
    benefits: [
      'Çalışanın kalan yıllık izin, mazeret izni vb. haklarının sistemden anlık sorgulanması.',
      'İzin tarihleri çakışan departman çalışanlarının yöneticilere uyarı olarak sunulması.',
      'Mobil uygulama üzerinden nerede olunursa olunsun anlık izin talebi ve onay imkanı.',
      'Bordro ve PDKS (Personel Devam Kontrol) sistemleriyle otomatik veri aktarımı.',
    ],
    steps: [
      {
        title: 'İzin Talebi',
        role: 'Çalışan (Mobil Uygulama)',
        desc: 'Çalışan mobil uygulamadan izin başlangıç/bitiş tarihlerini ve izin türünü (Yıllık, Mazeret vb.) seçerek talep gönderir.',
        icon: 'smartphone',
        color: 'bg-pink-500 text-white',
      },
      {
        title: 'Hakediş & Çakışma Kontrolü',
        role: 'Süreç Motoru (Otomatik)',
        desc: 'Sistem çalışanın kalan izin gününü hesaplar. Aynı departmanda izinli başka çalışan olup olmadığını denetleyip yöneticiye bildirir.',
        icon: 'layers',
        color: 'bg-indigo-500 text-white',
      },
      {
        title: 'Yönetici Onayı',
        role: 'Departman Yöneticisi & İK',
        desc: 'Yönetici, çalışanın kalan hakedişini ve çakışma durumlarını görerek talebi mobil veya webden hızlıca onaylar.',
        icon: 'check',
        color: 'bg-teal-500 text-white',
      },
      {
        title: 'İK & PDKS Entegrasyonu',
        role: 'İK Veritabanı (Otomatik)',
        desc: 'Onaylanan izin bilgisi bordro sistemine ve personel kartına otomatik olarak yansıtılır; kalan hakediş güncellenir.',
        icon: 'users',
        color: 'bg-emerald-500 text-white',
      },
    ],
  },
  {
    id: 'masraf-yonetimi',
    name: 'Masraf Bildirim & Yönetim Süreci',
    shortDesc:
      'Çalışan harcamalarını saha üzerindeki fişlerin fotoğraflarını çekerek bildirmesini sağlayın, muhasebeye otomatik aktarın.',
    longDesc:
      'Saha veya ofis çalışanlarının harcamalarını tek tek kağıtlara yapıştırıp muhasebeye getirmesi dönemini kapatın. Masraf Süreci, fişlerin fotoğrafları ile birlikte mobil üzerinden bildirilmesini sağlar ve şirket masraf limitlerine göre onay zincirini yönetir.',
    benefits: [
      'Mobil kamerayla fiş/fatura fotoğraflarını çekip masraf formuna anında ekleme.',
      'Harcama türüne göre (yemek, yakıt, konaklama vb.) şirket günlük/aylık limit kontrolleri.',
      'Proje kodlarına veya masraf merkezlerine göre harcamaların otomatik sınıflandırılması.',
      'Onaylanan masrafların doğrudan ERP\'de masraf fişi olarak açılması ve banka ödeme listesine alınması.',
    ],
    steps: [
      {
        title: 'Masraf Girişi',
        role: 'Çalışan (Mobil & Fiş Fotoğrafı)',
        desc: 'Çalışan harcama tutarını girer, fiş veya faturanın fotoğrafını çekerek masraf formuna ekler ve onaya gönderir.',
        icon: 'smartphone',
        color: 'bg-orange-500 text-white',
      },
      {
        title: 'Şirket Limit Kontrolü',
        role: 'Süreç Motoru (Otomatik)',
        desc: 'E-Flow, girilen masraf tutarını şirket harcama politikaları ve çalışanın yetki limitleri dahilinde otomatik kontrol eder.',
        icon: 'settings',
        color: 'bg-slate-500 text-white',
      },
      {
        title: 'Müdür & Finans Kontrolü',
        role: 'Yönetici & Finans Uzmanı',
        desc: 'Yönetici fiş fotoğraflarını ve limit aşım uyarılarını inceleyerek masraf listesini tek tıkla onaylar veya revizeye gönderir.',
        icon: 'check',
        color: 'bg-teal-500 text-white',
      },
      {
        title: 'ERP Entegrasyonu & Ödeme',
        role: 'Muhasebe & ERP (Otomatik)',
        desc: 'Onaylı masraf listesi ERP\'ye masraf fişi olarak kaydedilir ve çalışanın hesabına ödenmek üzere banka talimat listesine eklenir.',
        icon: 'database',
        color: 'bg-blue-600 text-white',
      },
    ],
  },
];

export const sss = [
  {
    soru: 'E-Flow ile hangi iş süreçlerini otomatikleştirebilirim?',
    cevap:
      'Satın alma ve talep yönetimi, e-fatura onayı, İK izin yönetimi ve masraf bildirimi hazır olarak sunulan başlıca süreçlerdir. Bunların yanında finans, lojistik, satış, İK, Ar-Ge ve idari işlerde onay gerektiren tüm manuel akışlarınızı E-Flow’un kodsuz altyapısıyla kendiniz kurgulayabilirsiniz.',
  },
  {
    soru: 'Satın alma süreci ERP sistemime nasıl aktarılır?',
    cevap:
      'Onay zinciri tamamlanan talep, hazır entegrasyon konnektörleri aracılığıyla ERP sisteminize (Logo Tiger, Netsis, Mikro vb.) doğrudan sipariş fişi veya talep fişi olarak yazılır. Kayıt insan eli değmeden oluştuğu için veri giriş hatası ortadan kalkar.',
  },
  {
    soru: 'E-Fatura onay sürecinde sipariş ve irsaliye eşleştirmesi yapılıyor mu?',
    cevap:
      'Evet. Gelen e-fatura XML verisi sisteme düştüğü anda, faturadaki kalemler ERP’deki satın alma siparişi ve giriş irsaliyeleriyle miktar ve tutar bazında otomatik karşılaştırılır (3-way matching). Tutarsızlıklar onaycıya uyarı olarak raporlanır.',
  },
  {
    soru: 'Onayları mobil cihazdan verebilir miyim?',
    cevap:
      'Evet. Tüm süreçler mobil uygulama üzerinden çalışır. Onay yetkilileri bildirim aldıkları talebi, bütçe durumu ve fiş fotoğrafları dahil tüm detaylarıyla inceleyip nerede olurlarsa olsunlar tek dokunuşla onaylayabilir.',
  },
  {
    soru: 'Süreçleri kurmak için kod bilgisi gerekiyor mu?',
    cevap:
      'Hayır. E-Flow’un no-code altyapısı sayesinde onay adımlarını, limit kurallarını ve form alanlarını sürükle-bırak arayüzüyle iş birimleri kendisi tasarlayabilir; BT ekibine bağımlılık en aza iner.',
  },
];

export interface Category {
  title: string;
  icon: 'coins' | 'layers' | 'workflow' | 'trending' | 'users' | 'cpu';
  accent: string;
  iconWrap: string;
  chevron: string;
  items: string[];
}

export const categories: Category[] = [
  {
    title: 'Finans & Muhasebe',
    icon: 'coins',
    accent: 'bg-blue-500',
    iconWrap: 'bg-blue-500/10 text-blue-600',
    chevron: 'text-blue-500',
    items: [
      'Ödeme İstek ve Onay Süreci',
      'Müşteri Kredi Limiti Açma Akışı',
      'Cari Hesap Kartı Açılış Onayları',
      'Kasa ve Banka Harcama Talepleri',
      'Banka Mutabakat Süreçleri',
    ],
  },
  {
    title: 'Lojistik & Depo',
    icon: 'layers',
    accent: 'bg-orange-500',
    iconWrap: 'bg-orange-500/10 text-orange-600',
    chevron: 'text-orange-500',
    items: [
      'Stok Çıkış / Transfer Talepleri',
      'Mal Kabul Uyumsuzluk Süreci',
      'Sevkiyat ve Dağıtım Onayları',
      'İade Ürün Bildirim ve Kabul Akışı',
      'Depolar Arası Malzeme İstemi',
    ],
  },
  {
    title: 'İdari & Genel İşler',
    icon: 'workflow',
    accent: 'bg-teal-500',
    iconWrap: 'bg-teal-500/10 text-teal-600',
    chevron: 'text-teal-500',
    items: [
      'Sözleşme Hazırlama ve Onay Akışı',
      'Ziyaretçi ve Araç Rezervasyon Talepleri',
      'Demirbaş Zimmet Bildirimleri',
      'Hukuk Sözleşmeleri İnceleme Süreci',
      'Evrak ve Kargo Dağıtım Akışı',
    ],
  },
  {
    title: 'Satış & CRM',
    icon: 'trending',
    accent: 'bg-pink-500',
    iconWrap: 'bg-pink-500/10 text-pink-600',
    chevron: 'text-pink-500',
    items: [
      'Müşteri Özel İskonto / Fiyat Onayı',
      'Teklif Taslak Onay Akışı',
      'Yeni Müşteri Tanımlama Süreci',
      'Müşteri Şikayet Bildirim ve Çözüm',
      'Sipariş İptal / Değişiklik Talepleri',
    ],
  },
  {
    title: 'İnsan Kaynakları',
    icon: 'users',
    accent: 'bg-purple-500',
    iconWrap: 'bg-purple-500/10 text-purple-600',
    chevron: 'text-purple-500',
    items: [
      'İşe Alım ve Norm Kadro Talepleri',
      'Çalışan Oryantasyon / İşten Çıkış Akışı',
      'Eğitim ve Katılım Talep Süreci',
      'Fazla Mesai Bildirim ve Onayı',
      'Performans Değerlendirme Süreçleri',
    ],
  },
  {
    title: 'Ar-Ge & Kalite',
    icon: 'cpu',
    accent: 'bg-indigo-500',
    iconWrap: 'bg-indigo-500/10 text-indigo-600',
    chevron: 'text-indigo-500',
    items: [
      'Düzeltici Önleyici Faaliyet (DÖF)',
      'Yeni Ürün Tasarım / Geliştirme Akışı',
      'Kalite Kontrol Test ve Red Bildirimi',
      'Doküman Revizyon ve Yayın Talepleri',
      'Müşteri İnceleme Kalite Akışları',
    ],
  },
];
