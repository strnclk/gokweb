import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Kullanım Şartları | Gökkuşağı Yazılım ve Danışmanlık',
  description: 'Web sitemizin kullanım şartları ve koşulları.',
};

export default function KullanimPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center pt-32 pb-16" style={{ backgroundImage: 'url(/rainbw.png)' }}>
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kullanım Şartları
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Web sitemizi kullanmadan önce lütfen bu şartları dikkatlice okuyun.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Bu servis sadece kişisel kullanım içindir. Sitenin içeriğinin, tamamının ya da bir bölümünün farklı amaçlarla kullanılması kesinlikle yasaklanmıştır. Site kullanım kurallarına uymayanlar telif haklarını ihlal etmiş sayılıp, haklarında yasal işlemlere başvurulacaktır. Sitede bulunan bilgiler kontrat konusu olamaz ve tarafımızca bir uyarı yapılmadan değiştirilebilir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">DANIŞMANLIK SORUMLULUĞU</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Web sitesinde bahsedilen hizmetler var olan halinden farklılıklar gösterebilir. Web sitesi herhangi bir durumda danışman ya da danışmanlık servisi olarak kabul edilmemelidir. Gökkuşağı Yazılım ve Danışmanlık, karşılaşılan herhangi bir sorunda sitenin bir danışmanlık mercii gibi kullanılmasından doğacak herhangi bir sorumluluk kabul etmemektedir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">DIŞ BAĞLANTILAR</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bu sitedeki bazı bağlantılar aracılığıyla, Gökkuşağı Yazılım ve Danışmanlık'ın üzerinde herhangi bir kontrol ve yetkiye sahip olmadığı üçüncü şahıslarca yönetilen internet sitelerine ulaşılmaktadır. Gökkuşağı Yazılım ve Danışmanlık, diğer internet sitelerindeki bilgilerin doğruluğuyla veya bu bilgilerle ilgili herhangi bir beyanda bulunmamaktadır.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Gökkuşağı Yazılım ve Danışmanlık, üçüncü şahıslarca yayınlanan bilgi ve malzemeyle ilgili olarak herhangi bir sorumluluk kabul etmemekte ve söz konusu üçüncü şahıslarca yayınlanan bilgiler içinde yer alan beyan ve görüşleri doğrudan doğruya veya dolaylı olarak onaylamamaktadır. Gökkuşağı Yazılım ve Danışmanlık, üçüncü şahıslara ait olan ve herhangi bir nedenle uygun olmadığını düşündüğü bilgileri siteden çıkarma hakkını saklı tutmaktadır.
          </p>

          {/* Contact */}
          <section className="bg-gray-50 rounded-xl p-6 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">İletişim</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kullanım şartlarıyla ilgili herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>E-posta:</strong> info@gokkusagiyazilim.com.tr</p>
              <p><strong>Telefon:</strong> +90 539 856 3578</p>
              <p><strong>Adres:</strong> Ataşehir, İstanbul, Türkiye</p>
            </div>
          </section>

          {/* Last Updated */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Son güncelleme: Nisan 2026
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
