import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Çerez Politikası | Gökkuşağı Yazılım ve Danışmanlık',
  description: 'Web sitemizin çerez kullanımı hakkında bilgi.',
};

export default function CerezlerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center pt-32 pb-16" style={{ backgroundImage: 'url(/rainbw.png)' }}>
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Çerez Politikası
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Web sitemizin çerez kullanımı hakkında bilgi.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            İnternet sitemizin sorunsuz çalışmasını sağlamak ve ziyaretçilerimize daha iyi hizmet sunmak amacıyla cihazlarınıza belirli çerezler yerleştiriyoruz. Bu Çerez Politikası, çerezler hakkında bilgi vermek ve çerezlerin nasıl kontrol edileceği konusunda sizleri bilgilendirmek amacıyla hazırlanmıştır.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Çerez Nedir?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Çerezler, bir internet sitesini ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır. Bu metin dosyalarına ek olarak web işaretçileri, pikseller ve etiketler gibi diğer izleme teknolojileri de bu politika kapsamında çerez olarak kabul edilmektedir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Çerezlerin Kullanım Amaçları</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Çerezleri aşağıdaki amaçlarla kullanıyoruz:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li>Sitemizin güvenliğini sağlamak,</li>
            <li>Sitemizin işlevselliklerini sunmak ve bu işlevlerden faydalanmanızı sağlamak,</li>
            <li>Kullanıcı davranışlarını analiz ederek hizmetlerimizi geliştirmek,</li>
            <li>Ziyaretçi deneyimini iyileştirmek ve kullanıcı dostu bir tasarım sunmak,</li>
            <li>Reklam ve pazarlama faaliyetlerimizi optimize etmek,</li>
            <li>Sosyal medya paylaşım işlevlerini desteklemek,</li>
            <li>Sitemizin performansını ölçmek ve farklı sürümleri değerlendirmek.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Çerezlerin Genel Özellikleri</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sitemizde kullanılan çerezler, oturum çerezleri ve kalıcı çerezler olarak ikiye ayrılır:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li><strong>Oturum Çerezleri:</strong> Tarayıcınızı kapattığınızda silinir.</li>
            <li><strong>Kalıcı Çerezler:</strong> Cihazınızda belirli bir süre saklanır ve sonraki ziyaretlerinizde kullanılabilir.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Kullanılan Çerez Türleri</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sitemizde kullanılan çerez türleri şunlardır:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li><strong>Zorunlu Çerezler:</strong> Sitenin temel işlevlerini sağlamak için gereklidir.</li>
            <li><strong>İşlevsellik Çerezleri:</strong> Kullanıcı tercihlerinizi hatırlamak için kullanılır.</li>
            <li><strong>Performans Çerezleri:</strong> Sitenin performansını analiz etmeye yardımcı olur.</li>
            <li><strong>Hedefleme ve Reklam Çerezleri:</strong> İlgi alanlarınıza uygun içerik ve reklamlar sunar.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Çerezler aracılığıyla toplanan verilerin kişisel veri niteliği taşıması durumunda, Gizlilik Politikası'nda belirtilen hükümler geçerli olacaktır.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Üçüncü Taraf Çerezler</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Sitemizde üçüncü taraf çerezler de kullanılmaktadır. Bu çerezlerle ilgili daha fazla bilgi edinmek için ilgili üçüncü tarafların politikalarını inceleyebilirsiniz.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Çerezlerin Devre Dışı Bırakılması</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tarayıcı ayarlarınızı kullanarak çerez tercihlerinizi yönetebilirsiniz. Çerezleri devre dışı bırakmak, belirli işlevlerin çalışmamasına neden olabilir. Aşağıdaki bağlantılar, farklı tarayıcılarda çerez yönetimiyle ilgili bilgilere ulaşmanızı sağlar:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/tr/kb/erezleri-yonetme-ve-veb-sitelerine-erisim-izni" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/tr-tr/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Internet Explorer</a></li>
            <li><a href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Safari</a></li>
            <li><a href="https://help.opera.com/en/latest/security-and-privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Opera</a></li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. İletişim</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bu Çerez Politikası zaman zaman güncellenebilir. En güncel bilgileri almak için bu sayfayı düzenli olarak ziyaret etmenizi öneririz. Çerez Politikası veya çerez kullanımı hakkında sorularınız için bizimle destek@gokkusagiyazilim.com.tr adresinden iletişime geçebilirsiniz.
          </p>

          {/* Contact */}
          <section className="bg-gray-50 rounded-xl p-6 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">İletişim</h2>
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
