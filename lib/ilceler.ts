// İlçe sayfaları için özgün SEO içeriği.
// KURAL: Yalnızca doğrulanabilir bilgi (yaka, genel ekonomik karakter) +
// Mikro'nun gerçek ürün yetenekleri + Gökkuşağı'nın sunduğu gerçek hizmetler.
// Uydurma müşteri / istatistik / yerel iddia YOK. Aynı sektör profilindeki ilçeler
// dürüstçe benzer çözümlere sahiptir; farklılaşma özgün giriş metniyle sağlanır.

export interface IlceIcerik {
  ad: string;
  yaka: 'Anadolu Yakası' | 'Avrupa Yakası';
  giris: string;
  odak: string[];
  sss: { s: string; c: string }[];
}

// --- Kullanıcının gördüğü/onayladığı 3 ilçe: birebir korunuyor ---
const onayli: Record<string, IlceIcerik> = {
  'Ataşehir': {
    ad: 'Ataşehir',
    yaka: 'Anadolu Yakası',
    giris:
      "Ataşehir, İstanbul'un Anadolu Yakası'nda yer alan, finans ve iş merkezleriyle öne çıkan bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Ataşehir'deki kurumsal firmalara ve ofislere ERP, CRM ve e-dönüşüm çözümleri sağlar; satıştan kuruluma, veri aktarımından eğitim ve teknik desteğe kadar tüm süreçleri tek elden yürütür.",
    odak: [
      'Çok şubeli yapılar için konsolide finans ve muhasebe yönetimi',
      'e-Fatura, e-Arşiv, e-İrsaliye ve e-Defter süreçlerinin Mikro ile entegrasyonu',
      'Cari, stok ve sipariş takibinin tek platformda toplanması',
      'CRM ile satış ve müşteri ilişkilerinin yönetimi',
    ],
    sss: [
      {
        s: "Ataşehir'deki firmamız için hangi Mikro sürümü uygun?",
        c: 'Ölçeğinize göre değişir: küçük işletmeler için Mikro Jump, büyüyen KOBİ’ler için Mikro Run, çok kullanıcılı ve çok şubeli kurumsal yapılar için Mikro Fly önerilir. Ücretsiz ihtiyaç analiziyle size en uygun sürümü birlikte belirleriz.',
      },
      {
        s: 'Mevcut muhasebe ve stok verilerimiz Mikro’ya aktarılır mı?',
        c: 'Evet. Kurulum sürecinde mevcut verileriniz (cari, stok, açılış bakiyeleri vb.) uygun formatlarda Mikro’ya aktarılır ve kontrol edilir.',
      },
      {
        s: 'e-Dönüşüm (e-Fatura / e-Arşiv / e-Defter) entegrasyonu yapıyor musunuz?',
        c: 'Evet. Mikro’nun e-dönüşüm modülleriyle e-Fatura, e-Arşiv, e-İrsaliye ve e-Defter süreçlerinizi mevzuata uygun şekilde kurar ve devreye alırız.',
      },
    ],
  },

  'Tuzla': {
    ad: 'Tuzla',
    yaka: 'Anadolu Yakası',
    giris:
      "Tuzla, İstanbul'un Anadolu Yakası'nda; organize sanayi bölgeleri ve tersaneleriyle üretim ve deniz ticaretinin yoğun olduğu bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Tuzla’daki sanayi, üretim ve lojistik firmalarına ERP ve e-dönüşüm çözümleri sunar; kurulum, veri aktarımı, eğitim ve teknik desteği tek elden sağlar.",
    odak: [
      'Üretim, reçete ve iş emri takibi',
      'Stok, depo ve tedarikçi (cari) yönetimi',
      'e-İrsaliye ve e-Fatura ile sevkiyat süreçleri',
      'Maliyet ve üretim raporlaması',
    ],
    sss: [
      {
        s: "Tuzla’daki üretim firmamız için Mikro’nun hangi modülleri gerekir?",
        c: 'Üretim yapan firmalarda genellikle stok, üretim/reçete, cari ve muhasebe modülleri birlikte kullanılır. İş akışınızı inceleyip yalnızca ihtiyaç duyduğunuz modülleri içeren bir kurulum öneririz.',
      },
      {
        s: 'Mevcut stok ve cari verilerimiz Mikro’ya aktarılır mı?',
        c: 'Evet. Kurulum sırasında mevcut verileriniz uygun formatlarda Mikro’ya aktarılır ve doğruluğu kontrol edilir.',
      },
      {
        s: 'e-İrsaliye ve e-Fatura entegrasyonu yapıyor musunuz?',
        c: 'Evet. Sevkiyat ve faturalama süreçleriniz için Mikro’nun e-İrsaliye, e-Fatura ve e-Arşiv modüllerini mevzuata uygun şekilde kurar ve devreye alırız.',
      },
    ],
  },

  'Beyoğlu': {
    ad: 'Beyoğlu',
    yaka: 'Avrupa Yakası',
    giris:
      "Beyoğlu, İstanbul'un Avrupa Yakası'nda; turizm, perakende ve hizmet sektörünün yoğun olduğu tarihi bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Beyoğlu’ndaki mağaza, restoran, otel ve hizmet işletmelerine ERP, ön muhasebe ve e-dönüşüm çözümleri sağlar.",
    odak: [
      'Perakende ve mağaza satış takibi',
      'Stok ve sipariş yönetimi',
      'Ön muhasebe, cari ve kasa yönetimi',
      'e-Fatura ve e-Arşiv entegrasyonu',
    ],
    sss: [
      {
        s: 'Beyoğlu’ndaki mağazamız/işletmemiz için hangi Mikro sürümü uygun?',
        c: 'Tek şubeli küçük işletmeler için Mikro Jump, büyüyen ve çok şubeli işletmeler için Mikro Run veya Fly uygundur. İhtiyaç analiziyle size en uygun sürümü birlikte belirleriz.',
      },
      {
        s: 'Perakende satış ve stok takibini Mikro ile yönetebilir miyiz?',
        c: 'Evet. Mikro ile satış, stok, sipariş ve kasa süreçlerinizi tek platformda takip edebilir; şubeler arası stok ve raporlamayı yönetebilirsiniz.',
      },
      {
        s: 'e-Fatura ve e-Arşiv entegrasyonu yapıyor musunuz?',
        c: 'Evet. Mikro’nun e-dönüşüm modülleriyle e-Fatura ve e-Arşiv süreçlerinizi mevzuata uygun şekilde kurar ve devreye alırız.',
      },
    ],
  },
};

// --- Profil bazlı çözüm setleri (gerçek Mikro modülleri) ---
type Profil = 'uretim' | 'ticaret' | 'kurumsal' | 'hizmet' | 'tarim' | 'insaat';

const ODAK: Record<Profil, string[]> = {
  uretim: [
    'Üretim, reçete ve iş emri takibi',
    'Stok, depo ve tedarikçi (cari) yönetimi',
    'e-İrsaliye ve e-Fatura ile sevkiyat süreçleri',
    'Maliyet ve üretim raporlaması',
  ],
  ticaret: [
    'Perakende ve mağaza satış takibi',
    'Stok, sipariş ve şubeler arası ürün yönetimi',
    'Ön muhasebe, cari ve kasa yönetimi',
    'e-Fatura ve e-Arşiv entegrasyonu',
  ],
  kurumsal: [
    'Çok şubeli yapılar için konsolide finans ve muhasebe yönetimi',
    'e-Fatura, e-Arşiv ve e-Defter süreçlerinin Mikro ile entegrasyonu',
    'Cari, stok ve sipariş takibinin tek platformda toplanması',
    'CRM ile satış ve müşteri ilişkilerinin yönetimi',
  ],
  hizmet: [
    'Ön muhasebe, cari ve kasa yönetimi',
    'Stok ve satın alma takibi',
    'Hizmet ve satış süreçlerinin raporlanması',
    'e-Fatura ve e-Arşiv entegrasyonu',
  ],
  tarim: [
    'Stok, parti/lot ve depo takibi',
    'Üretim ve gıda süreçlerinin takibi',
    'Cari (tedarikçi / müşteri) yönetimi',
    'e-İrsaliye ve e-Fatura entegrasyonu',
  ],
  insaat: [
    'Proje ve maliyet takibi',
    'Stok, malzeme ve tedarikçi (cari) yönetimi',
    'Hakediş, muhasebe ve finans yönetimi',
    'e-Fatura ve e-Arşiv entegrasyonu',
  ],
};

// İlçe adının ünlü uyumu/ünsüz benzeşmesine göre doğru hâl eki (bkz. HeroSection.tsx
// getLocativeSuffix — aynı kurallar, giris metinlerindeki mevcut kullanımla birebir eşleşir).
const EK: Record<string, string> = {
  'Adalar': 'da',
  'Arnavutköy': 'de',
  'Avcılar': 'da',
  'Bağcılar': 'da',
  'Bahçelievler': 'de',
  'Bakırköy': 'de',
  'Başakşehir': 'de',
  'Bayrampaşa': 'da',
  'Beşiktaş': 'ta',
  'Beykoz': 'da',
  'Beylikdüzü': 'nde',
  'Büyükçekmece': 'de',
  'Çatalca': 'da',
  'Çekmeköy': 'de',
  'Esenler': 'de',
  'Esenyurt': 'ta',
  'Eyüpsultan': 'da',
  'Fatih': 'te',
  'Gaziosmanpaşa': 'da',
  'Güngören': 'de',
  'Kadıköy': 'de',
  'Kağıthane': 'de',
  'Kartal': 'da',
  'Küçükçekmece': 'de',
  'Maltepe': 'de',
  'Pendik': 'te',
  'Sancaktepe': 'de',
  'Sarıyer': 'de',
  'Şile': 'de',
  'Silivri': 'de',
  'Şişli': 'de',
  'Sultanbeyli': 'de',
  'Sultangazi': 'de',
  'Ümraniye': 'de',
  'Üsküdar': 'da',
  'Zeytinburnu': 'nda',
};

// Profil'e göre ilk (sektöre özel) SSS
const sssQ1: Record<Profil, (ad: string) => { s: string; c: string }> = {
  uretim: (ad) => ({
    s: `${ad}'${EK[ad] ?? 'de'}ki sanayi/üretim firmamız için Mikro’nun hangi modülleri gerekir?`,
    c: 'Üretim yapan firmalarda genellikle stok, üretim/reçete, cari ve muhasebe modülleri birlikte kullanılır. İş akışınızı inceleyip yalnızca ihtiyaç duyduğunuz modülleri içeren bir kurulum öneririz.',
  }),
  ticaret: (ad) => ({
    s: `${ad}'${EK[ad] ?? 'de'}ki mağazamız/işletmemiz için hangi Mikro sürümü uygun?`,
    c: 'Tek şubeli işletmeler için Mikro Jump, büyüyen ve çok şubeli işletmeler için Mikro Run veya Fly uygundur. Ücretsiz ihtiyaç analiziyle size en uygun sürümü birlikte belirleriz.',
  }),
  kurumsal: (ad) => ({
    s: `${ad}'${EK[ad] ?? 'de'}ki kurumsal firmamız için hangi Mikro sürümü uygun?`,
    c: 'Çok kullanıcılı ve çok şubeli kurumsal yapılar için genellikle Mikro Fly, daha küçük ekipler için Mikro Run önerilir. İhtiyaç analiziyle en uygun sürümü birlikte belirleriz.',
  }),
  hizmet: (ad) => ({
    s: `${ad}'${EK[ad] ?? 'de'}ki işletmemiz için hangi Mikro çözümü uygun?`,
    c: 'Ön muhasebe, cari ve kasa takibi ihtiyacınıza göre Mikro Jump veya Run uygundur. İşletmenizin büyüklüğüne göre en uygun sürümü birlikte belirleriz.',
  }),
  tarim: (ad) => ({
    s: `${ad}'${EK[ad] ?? 'de'}ki tarım/gıda işletmemiz için Mikro’nun hangi modülleri gerekir?`,
    c: 'Genellikle stok, parti/lot takibi, cari ve muhasebe modülleri birlikte kullanılır. Süreçlerinizi inceleyip ihtiyacınıza uygun bir kurulum öneririz.',
  }),
  insaat: (ad) => ({
    s: `${ad}'${EK[ad] ?? 'de'}ki inşaat/emlak firmamız için Mikro’nun hangi modülleri gerekir?`,
    c: 'İnşaat ve emlak firmalarında genellikle proje/maliyet takibi, stok, cari ve muhasebe modülleri kullanılır. İş akışınıza göre uygun modülleri öneririz.',
  }),
};

const sssOrtak: { s: string; c: string }[] = [
  {
    s: 'Mevcut muhasebe ve stok verilerimiz Mikro’ya aktarılır mı?',
    c: 'Evet. Kurulum sürecinde mevcut verileriniz (cari, stok, açılış bakiyeleri vb.) uygun formatlarda Mikro’ya aktarılır ve kontrol edilir.',
  },
  {
    s: 'e-Dönüşüm (e-Fatura / e-Arşiv / e-Defter) entegrasyonu yapıyor musunuz?',
    c: 'Evet. Mikro’nun e-dönüşüm modülleriyle e-Fatura, e-Arşiv, e-İrsaliye ve e-Defter süreçlerinizi mevzuata uygun şekilde kurar ve devreye alırız.',
  },
];

// --- Kalan ilçeler: yaka + profil + özgün giriş (karakter, mevcut konumlandırmanızdan) ---
const ham: Record<string, { yaka: IlceIcerik['yaka']; profil: Profil; giris: string }> = {
  'Adalar': { yaka: 'Anadolu Yakası', profil: 'hizmet', giris: "Adalar, İstanbul'un Anadolu Yakası açıklarındaki adalardan oluşan, turizm ve denizciliğin öne çıktığı bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Adalar’daki turizm, konaklama ve hizmet işletmelerine ERP, ön muhasebe ve e-dönüşüm çözümleri sağlar; kurulum, veri aktarımı, eğitim ve teknik desteği tek elden sunar." },
  'Arnavutköy': { yaka: 'Avrupa Yakası', profil: 'uretim', giris: "Arnavutköy, İstanbul'un Avrupa Yakası'nda; organize sanayi ve ticaretin geliştiği bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Arnavutköy’deki sanayi, üretim ve ticaret firmalarına ERP, stok yönetimi ve e-dönüşüm çözümleri sunar; kurulumdan eğitime tüm süreçleri tek elden yürütür." },
  'Avcılar': { yaka: 'Avrupa Yakası', profil: 'uretim', giris: "Avcılar, İstanbul'un Avrupa Yakası'nda; lojistik, üretim ve ticaretin yoğun olduğu sahil ilçelerinden biridir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Avcılar’daki lojistik, sanayi ve ticaret firmalarına ERP ve e-dönüşüm çözümleri sağlar." },
  'Bağcılar': { yaka: 'Avrupa Yakası', profil: 'uretim', giris: "Bağcılar, İstanbul'un Avrupa Yakası'nda; tekstil, konfeksiyon ve çok sayıda KOBİ’ye ev sahipliği yapan yoğun bir üretim ve ticaret ilçesidir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Bağcılar’daki KOBİ’lere ve üretim firmalarına ERP, stok ve muhasebe çözümleri sunar." },
  'Bahçelievler': { yaka: 'Avrupa Yakası', profil: 'ticaret', giris: "Bahçelievler, İstanbul'un Avrupa Yakası'nda; perakende ve toptan ticaretin yoğun olduğu bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Bahçelievler’deki mağaza ve ticaret işletmelerine ERP, satış takibi ve e-dönüşüm çözümleri sağlar." },
  'Bakırköy': { yaka: 'Avrupa Yakası', profil: 'kurumsal', giris: "Bakırköy, İstanbul'un Avrupa Yakası'nda; kurumsal firmaların ve çok şubeli işletmelerin yoğun olduğu köklü bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Bakırköy’deki kurumsal firmalara merkez ofis, şube ve çoklu depo yönetimi için ERP ve e-dönüşüm çözümleri sunar." },
  'Başakşehir': { yaka: 'Avrupa Yakası', profil: 'uretim', giris: "Başakşehir, İstanbul'un Avrupa Yakası'nda; yeni sanayi ve ticaret bölgeleriyle hızla gelişen bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Başakşehir’deki sanayi, üretim ve ticaret firmalarına modern ERP ve e-dönüşüm çözümleri sağlar." },
  'Bayrampaşa': { yaka: 'Avrupa Yakası', profil: 'ticaret', giris: "Bayrampaşa, İstanbul'un Avrupa Yakası'nda; ticaret ve hizmet sektörünün yoğun olduğu bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Bayrampaşa’daki ticaret ve hizmet işletmelerine ERP, stok ve e-dönüşüm çözümleri sunar." },
  'Beşiktaş': { yaka: 'Avrupa Yakası', profil: 'kurumsal', giris: "Beşiktaş, İstanbul'un Avrupa Yakası'nda; kurumsal ofisler ve profesyonel hizmet firmalarının yoğun olduğu bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Beşiktaş’taki kurumsal ve profesyonel hizmet firmalarına ERP, muhasebe ve e-dönüşüm çözümleri sağlar." },
  'Beykoz': { yaka: 'Anadolu Yakası', profil: 'hizmet', giris: "Beykoz, İstanbul'un Anadolu Yakası'nda; Boğaz kıyısı, ormanları ve yeşil alanlarıyla turizm, konaklama ve hizmet sektörünün öne çıktığı bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Beykoz’daki restoran, otel, ticaret ve hizmet işletmelerine ERP, ön muhasebe ve e-dönüşüm çözümleri sağlar; kurulum, veri aktarımı, eğitim ve teknik desteği tek elden sunar." },
  'Beylikdüzü': { yaka: 'Avrupa Yakası', profil: 'ticaret', giris: "Beylikdüzü, İstanbul'un Avrupa Yakası'nda; alışveriş merkezleri, perakende ve lojistiğin geliştiği bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Beylikdüzü’ndeki perakende, mağaza ve lojistik işletmelerine ERP ve e-dönüşüm çözümleri sunar." },
  'Büyükçekmece': { yaka: 'Avrupa Yakası', profil: 'uretim', giris: "Büyükçekmece, İstanbul'un Avrupa Yakası'nda; organize sanayi ve lojistiğin öne çıktığı bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Büyükçekmece’deki sanayi, üretim ve lojistik firmalarına ERP ve e-dönüşüm çözümleri sağlar." },
  'Çatalca': { yaka: 'Avrupa Yakası', profil: 'tarim', giris: "Çatalca, İstanbul'un Avrupa Yakası'nda; tarım, hayvancılık ve gıda üretiminin öne çıktığı bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Çatalca’daki tarım, gıda ve ticaret işletmelerine ERP, stok ve e-dönüşüm çözümleri sunar." },
  'Çekmeköy': { yaka: 'Anadolu Yakası', profil: 'insaat', giris: "Çekmeköy, İstanbul'un Anadolu Yakası'nda; konut, inşaat ve emlak sektörünün geliştiği bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Çekmeköy’deki inşaat, emlak ve müteahhitlik firmalarına ERP, proje ve maliyet takibi çözümleri sağlar." },
  'Esenler': { yaka: 'Avrupa Yakası', profil: 'uretim', giris: "Esenler, İstanbul'un Avrupa Yakası'nda; organize sanayi ve ticaretin yoğun olduğu bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Esenler’deki sanayi, üretim ve ticaret firmalarına ERP, stok ve üretim yönetimi çözümleri sunar." },
  'Esenyurt': { yaka: 'Avrupa Yakası', profil: 'uretim', giris: "Esenyurt, İstanbul'un Avrupa Yakası'nda; mobilya, tekstil ve çeşitli üretim kollarının yoğun olduğu bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Esenyurt’taki üretim ve ticaret firmalarına ERP, stok yönetimi ve e-dönüşüm çözümleri sağlar." },
  'Eyüpsultan': { yaka: 'Avrupa Yakası', profil: 'uretim', giris: "Eyüpsultan, İstanbul'un Avrupa Yakası'nda; sanayi, ticaret ve turizmin bir arada bulunduğu köklü bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Eyüpsultan’daki sanayi ve ticaret firmalarına ERP, stok ve e-dönüşüm çözümleri sunar." },
  'Fatih': { yaka: 'Avrupa Yakası', profil: 'hizmet', giris: "Fatih, İstanbul'un Avrupa Yakası'nda; tarihi yarımadada turizm, konaklama ve ticaretin yoğun olduğu bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Fatih’teki otel, restoran ve ticaret işletmelerine ERP, ön muhasebe ve e-dönüşüm çözümleri sağlar." },
  'Gaziosmanpaşa': { yaka: 'Avrupa Yakası', profil: 'insaat', giris: "Gaziosmanpaşa, İstanbul'un Avrupa Yakası'nda; inşaat, emlak ve konut sektörünün geliştiği bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Gaziosmanpaşa’daki inşaat ve emlak firmalarına ERP, proje ve maliyet takibi çözümleri sunar." },
  'Güngören': { yaka: 'Avrupa Yakası', profil: 'uretim', giris: "Güngören, İstanbul'un Avrupa Yakası'nda; tekstil, hazır giyim ve toptan ticaretin yoğun olduğu bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Güngören’deki tekstil ve ticaret firmalarına ERP, stok ve e-dönüşüm çözümleri sağlar." },
  'Kadıköy': { yaka: 'Anadolu Yakası', profil: 'ticaret', giris: "Kadıköy, İstanbul'un Anadolu Yakası'nda; perakende, restoran-kafe ve hizmet sektörünün yoğun olduğu canlı bir ticaret ilçesidir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Kadıköy’deki mağaza, restoran ve hizmet işletmelerine ERP, satış takibi ve e-dönüşüm çözümleri sunar." },
  'Kağıthane': { yaka: 'Avrupa Yakası', profil: 'uretim', giris: "Kağıthane, İstanbul'un Avrupa Yakası'nda; sanayi, lojistik ve ofis alanlarının bir arada geliştiği bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Kağıthane’deki sanayi ve ticaret firmalarına ERP, stok ve e-dönüşüm çözümleri sağlar." },
  'Kartal': { yaka: 'Anadolu Yakası', profil: 'uretim', giris: "Kartal, İstanbul'un Anadolu Yakası'nda; sanayi, liman ve deniz ticaretinin öne çıktığı bir sahil ilçesidir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Kartal’daki sanayi, lojistik ve ticaret firmalarına ERP ve e-dönüşüm çözümleri sunar." },
  'Küçükçekmece': { yaka: 'Avrupa Yakası', profil: 'uretim', giris: "Küçükçekmece, İstanbul'un Avrupa Yakası'nda; organize sanayi ve ticaretin yoğun olduğu bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Küçükçekmece’deki sanayi ve üretim firmalarına ERP, stok ve üretim yönetimi çözümleri sağlar." },
  'Maltepe': { yaka: 'Anadolu Yakası', profil: 'ticaret', giris: "Maltepe, İstanbul'un Anadolu Yakası'nda; alışveriş merkezleri, perakende ve hizmet sektörünün geliştiği bir sahil ilçesidir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Maltepe’deki mağaza ve hizmet işletmelerine ERP, satış takibi ve e-dönüşüm çözümleri sunar." },
  'Pendik': { yaka: 'Anadolu Yakası', profil: 'uretim', giris: "Pendik, İstanbul'un Anadolu Yakası'nda; organize sanayi, liman ve lojistiğin öne çıktığı bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Pendik’teki sanayi, üretim ve lojistik firmalarına ERP ve e-dönüşüm çözümleri sağlar." },
  'Sancaktepe': { yaka: 'Anadolu Yakası', profil: 'insaat', giris: "Sancaktepe, İstanbul'un Anadolu Yakası'nda; konut, inşaat ve emlak sektörünün hızla geliştiği bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Sancaktepe’deki inşaat ve emlak firmalarına ERP, proje ve maliyet takibi çözümleri sunar." },
  'Sarıyer': { yaka: 'Avrupa Yakası', profil: 'kurumsal', giris: "Sarıyer, İstanbul'un Avrupa Yakası'nda; Boğaz kıyısında kurumsal ofisler, marina ve üst segment hizmetlerin yoğun olduğu bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Sarıyer’deki kurumsal ve hizmet firmalarına ERP, muhasebe ve e-dönüşüm çözümleri sağlar." },
  'Şile': { yaka: 'Anadolu Yakası', profil: 'hizmet', giris: "Şile, İstanbul'un Anadolu Yakası'nda; Karadeniz kıyısında turizm ve tarımsal üretimin öne çıktığı bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Şile’deki turizm, konaklama ve tarım-gıda işletmelerine ERP, ön muhasebe ve e-dönüşüm çözümleri sunar." },
  'Silivri': { yaka: 'Avrupa Yakası', profil: 'tarim', giris: "Silivri, İstanbul'un Avrupa Yakası'nda; Marmara kıyısında tarım, gıda sanayi ve üretimin öne çıktığı bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Silivri’deki tarım, gıda ve sanayi firmalarına ERP, stok ve e-dönüşüm çözümleri sağlar." },
  'Şişli': { yaka: 'Avrupa Yakası', profil: 'kurumsal', giris: "Şişli, İstanbul'un Avrupa Yakası'nda; merkez ofisler, finans ve danışmanlık firmalarının yoğun olduğu bir iş merkezidir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Şişli’deki kurumsal firmalara ERP, muhasebe ve e-dönüşüm çözümleri sunar." },
  'Sultanbeyli': { yaka: 'Anadolu Yakası', profil: 'insaat', giris: "Sultanbeyli, İstanbul'un Anadolu Yakası'nda; konut, inşaat ve ticaretin geliştiği bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Sultanbeyli’deki inşaat, emlak ve ticaret firmalarına ERP ve e-dönüşüm çözümleri sağlar." },
  'Sultangazi': { yaka: 'Avrupa Yakası', profil: 'uretim', giris: "Sultangazi, İstanbul'un Avrupa Yakası'nda; sanayi ve üretim işletmelerinin yoğun olduğu bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Sultangazi’deki sanayi ve üretim firmalarına ERP, stok ve üretim yönetimi çözümleri sunar." },
  'Ümraniye': { yaka: 'Anadolu Yakası', profil: 'uretim', giris: "Ümraniye, İstanbul'un Anadolu Yakası'nda; organize sanayi ve ticaretin yoğun olduğu büyük bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Ümraniye’deki sanayi, üretim ve ticaret firmalarına ERP, stok ve e-dönüşüm çözümleri sağlar." },
  'Üsküdar': { yaka: 'Anadolu Yakası', profil: 'hizmet', giris: "Üsküdar, İstanbul'un Anadolu Yakası'nda; Boğaz kıyısında turizm, ticaret ve hizmet sektörünün yoğun olduğu köklü bir ilçedir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Üsküdar’daki ticaret, restoran ve hizmet işletmelerine ERP, ön muhasebe ve e-dönüşüm çözümleri sunar." },
  'Zeytinburnu': { yaka: 'Avrupa Yakası', profil: 'uretim', giris: "Zeytinburnu, İstanbul'un Avrupa Yakası'nda; sanayi, tekstil ve ticaretin yoğun olduğu sahil ilçelerinden biridir. Gökkuşağı Yazılım, resmi Mikro iş ortağı olarak Zeytinburnu’ndaki sanayi ve ticaret firmalarına ERP, stok ve e-dönüşüm çözümleri sağlar." },
};

const uretilen: Record<string, IlceIcerik> = Object.fromEntries(
  Object.entries(ham).map(([ad, h]) => [
    ad,
    {
      ad,
      yaka: h.yaka,
      giris: h.giris,
      odak: ODAK[h.profil],
      sss: [sssQ1[h.profil](ad), ...sssOrtak],
    },
  ]),
);

export const ilceler: Record<string, IlceIcerik> = { ...onayli, ...uretilen };
