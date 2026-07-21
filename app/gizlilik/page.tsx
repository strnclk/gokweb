import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Gizlilik Politikası | Gökkuşağı Yazılım ve Danışmanlık',
  description: 'Kişisel verilerinizin güvenliği ve gizliliği bizim önceliğimizdir.',
};

export default function GizlilikPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center pt-32 pb-16" style={{ backgroundImage: 'url(/rainbw.png)' }}>
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gizlilik Politikası
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Kişisel verilerinizin güvenliği ve gizliliği bizim önceliğimizdir.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Biz, Gökkuşağı Yazılım ve Danışmanlık ("Şirket") olarak, kişisel verilerinizin güvenliğini ve bizim buna dair yasal sorumluluklarımızı son derece ciddiye alıyoruz. Bu nedenle, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, Şirketimizle ilişkisi olan tüm gerçek kişilere ait kişisel verilerin işlenmesine ve korunmasına büyük önem atfediyoruz.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">I. POLİTİKA HAKKINDA</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            İşbu Politika'nın amacı, özellikle de Şirketimizin ticari hayatı esnasında bir ilişki kurduğu gerçek kişilere ait kişisel verilerin işlenmesi ve aktarılmasında, başta özel hayatın gizliliği olmak üzere gerçek kişilerin temel haklarını ve özgürlüklerini korumak amacıyla, İlgili Kişi'nin gerek KVKK gerek yürürlükte bulunan ilgili ikincil mevzuatlar çerçevesinde sahip olduğu hakları, açıklamaktır.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            İşbu Politika ayrıca, 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili ikincil mevzuatlar kapsamında, kişisel verilerin işlenme amaçlarını, hukuki sebeplerini, aktarılmasını ve toplama yöntemlerini amaçlamayı hedeflemektedir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Şirketimiz; Kişisel Verileri İşleme Amaçlarını, Yasal Gerekçelerini, Verileri Toplama ve Aktarma Yöntemlerini ve Kişisel Verilerin Korunması ve İşlenmesi Politikasını değişiklik yapma hakkını saklı tutar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            İşbu Politika'nın, misalen yürürlüğe yeni giren yasal gereklilikleri yerine getirmek adına, ancak bunlarla sınırlı kalmamak kaydıyla değiştirilmesi durumunda, ilgili metnin en güncel versiyonu web sitemizde ilan edilecektir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">II. TANIMLAR</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            İşbu Politika'da kullanılan tanımlar ve terimler için, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nda ve bu kapsamda çıkartılan ilgili ikincil mevzuatlarda tanımlanan anlamlar haiz olacaktır. Bu bağlamda:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li><strong>Açık Rıza:</strong> Belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rızayı,</li>
            <li><strong>İlgili kişi:</strong> Kişisel verisi işlenen gerçek kişiyi,</li>
            <li><strong>Kişisel Veri:</strong> Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgiyi,</li>
            <li><strong>Kişisel Verilerin İşlenmesi:</strong> Kişisel verilerin tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla elde edilmesi, kaydedilmesi, depolanması, muhafaza edilmesi, değiştirilmesi, yeniden düzenlenmesi, açıklanması, aktarılması, devralınması, elde edilebilir hâle getirilmesi, sınıflandırılması ya da kullanılmasının engellenmesi gibi veriler üzerinde gerçekleştirilen her türlü işlemi,</li>
            <li><strong>Veri İşleyen:</strong> Veri sorumlusunun verdiği yetkiye dayanarak onun adına kişisel verileri işleyen gerçek veya tüzel kişiyi,</li>
            <li><strong>Veri Sorumlusu:</strong> Kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu olan gerçek veya tüzel kişiyi ifade etmektedir.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">III. İLGİLİ KİŞİLER</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Şirket şu kişilerden kişisel veri toplayabilir veya işleyebilir:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li>Müşterilerimiz, hissedarlarımız, tedarikçilerimiz, iş kontaklarımız ve potansiyel müşterilerimiz (ve / veya onlarla ilişkili gerçek kişiler) ve diğer iş ortaklarımız;</li>
            <li>Müşterilerimize sağladığımız profesyonel hizmetler çerçevesinde kişisel verilerini edindiğimiz Gerçek Kişiler (örneğin müşterilerimizin çalışanları, müşterileri ve tedarikçileri, müşterilerimizin kamu kuruluşlarındaki irtibat kişileri ve İlgili Kişi'nin diğer referansları);</li>
            <li>Çalışanlarımız, eski çalışanlarımız, çalışanlarımızın aile fertleri ve iş başvurusu yapanlar;</li>
            <li>Web sitemizi ve sosyal medya hesaplarımızı ziyaret edenler.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">IV. VERİ SORUMLUSU</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Veri Sorumlusu sıfatıyla hareket eden Şirket, KVKK'nın izin verdiği ölçüde ve ticari veya iş ilişkilerimiz kapsamında, açık rızanın teminin gerektiği hallerde ise İlgili Kişi'nin rızasına da başvurarak kişisel verilerinizi işleyebilmekte, kaydedebilmekte, muhafaza edebilmekte, yeniden düzenleyebilmekte, yurtiçi veya yurtdışına aktarım sağlayabilmektedir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">V. KİŞİSEL VERİ TOPLAMA YÖNTEMLERİ VE HUKUKİ DAYANAĞI</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kişisel verileri, bizlere sağladığınız için, üçüncü kişiler o verileri bize sağladığı için toplayabilir veya edinebiliriz (örneğin müşterilerimiz bize çalışanları, müşterileri veya kişisel verisini topladıkları diğer İlgili Kişilerle ilgili, İlgili Kişi'nin diğer referanslarıyla ilgili bilgi verebilir, kamu kurumları veya sözleşmesel yükümlülüklerimizi yerine getirmek için destek aldığımız üçüncü taraf servis sağlayıcılar vs. bu verileri sağlayabilir); veya bizim Wi-Fi ağımıza bağlandığınız için, internet sitemiz ya da sosyal medya hesaplarımız kanalından, ya da kamuya açık olduğu için toplayabilir veya edinebiliriz.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Yasal gerekliliklerin yerine getirilmesi, sözleşmeden doğan yükümlülüklerimizin ifası, Şirketimizin meşru menfaatleri ve aşağıda detaylı olarak belirtilen diğer amaçlar ve sebepler nedeniyle, sizlerden talep ettiğimiz veya doğrudan sizlerin bizler ile paylaşmayı tercih ettiğinizi kişisel verilerinizi, otomatik veya otomatik olmayan yöntemler ve kaynaklar ile toplayabilir ve yine yasal olan süreler ile saklayabiliriz:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Şirketimizin tüm hizmet birimleri ile sizler arasındaki görüşmeler;</li>
            <li>Şirketimize sözlü, yazılı veya elektronik olarak yapılan başvurular;</li>
            <li>Yakın ilişkimiz bulunan bağlı ortaklık, iştirakler ve üçüncü kişi ve kuruluşlar;</li>
            <li>Toplantılar ve kongreler;</li>
            <li>Kamu kurumları;</li>
            <li>Şirket faaliyetlerimizi yürütmek için yararlandığımız üçüncü taraf hizmet sağlayıcıları;</li>
            <li>İnternet üzerinden yapılmış olan başvurular, SMS kanalları, sosyal medya;</li>
            <li>Destek hizmeti alınan sair şirketler;</li>
            <li>Her türlü mevzuat veya sözleşme kapsamında işlem yaptığımız gerçek ve / veya tüzel kişiler;</li>
            <li>PTT, SGK ve özel sağlık sigortası kapsamında sigorta şirketleri ile paylaşılan kayıtlar;</li>
            <li>Kamuya açık bilgiler.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bunların dışında, web sitemizi kullanmanız ve onay vermeniz durumunda, Çerez Politikamız uyarınca (bkz. Bölüm XI "Çerez Politikası") web sitemizde yer alan çerezler aracılığıyla da kişisel verilerinizi toplamaktayız.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">VI. İŞLENEN KİŞİSEL VERİLER</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Şirketimiz tarafından toplanan ve işlenen kişisel veriler, sizin Şirketimizle olan ticari ve hukuki ilişki uyarınca değişkenlik gösterebilecektir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bununla beraber örnek olarak aşağıdaki veri kategorizasyonunu belirtebiliriz: kimlik bilgileriniz, iletişim bilgileriniz, finansal bilgileriniz, özel nitelikli kişisel veriler, eğitim ve görsel veriler, aile yakınlarınızın verileri gibi kişisel verileriniz tarafımızca işlenmelerini gerektiren amaç çerçevesinde ve bu amaç ile bağlantılı, sınırlı, ölçülü ve gerektiğinde güncel olacak şekilde ve 6698 Sayılı Kanun'un 5 inci ve 6 ncı maddelerinde belirtilen şartlara uygun olarak işlenebilmektedir:
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">KİMLİK BİLGİLERİ</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Ad, soyad, doğum tarihi, yaş, doğduğu ülke, doğduğu şehir, cinsiyet, medeni durumu, milliyeti, TC kimlik kartı bilgileri, önceki soyadı, kimlik fotokopisi, vb.</p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">İLETİŞİM BİLGİLERİ</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Telefon numarası, açık adres bilgisi, e-posta adresi, Şirket telefon numarası, dahilisi, Şirket e-posta adresi, sosyal medya hesapları iletişim bilgileri vb.</p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">ÖZEL NİTELİKLİ KİŞİSEL VERİLER</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Elde edilmesi halinde 6698 Sayılı Kanun'daki tanıma göre özel nitelikli kişisel veri niteliğine haiz bilgiler. Belirli hizmetler veya faaliyetlerde ve hukuki yükümlülüklerimiz doğrultusunda veya ilgili kişinin açık rızasıyla, özel nitelikli kişisel verileri de toplayabiliriz.</p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">GÖRSEL VE İŞİTSEL VERİLER</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Fotoğraflar, görüntüler, kamera kayıtları, ses kayıtları vb.</p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">FİNANSAL BİLGİLER</h3>
          <p className="text-gray-700 leading-relaxed mb-4">İlgili kişi tarafından yapılmış işlemlerin finansal sonucunu gösteren fatura, kredi kartı borcu, faiz oranı, vergi tutarı, borç ve bakiye alacakları, IBAN bilgileri, sair hesap bilgileri vb.</p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">ELEKTRONİK VERİLER</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Üyelik kayıtları, internet şifre parola bilgileri, IP adresi, işlem güvenliği bilgileri, log kayıtları vb.</p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">MÜŞTERİ BİLGİLERİ</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Müşterinin talepleri, siparişleri, talimatları, şikayetleri, ürün sepeti, beğenileri, çerez kayıtları, müşteri numarası, meslek bilgisi, eğitim bilgisi vs.</p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">PAZARLAMA BİLGİLERİ</h3>
          <p className="text-gray-700 leading-relaxed mb-4">İlgili kişinin beğenileri ve ilgi alanları doğrultusunda gerçekleştirilen istatistik, değerlendirme ve raporlama faaliyetleri, anketler, müşteri memnuniyeti formları, tanıtım ve pazarlama faaliyetleri kapsamında elde edilen veriler vb.</p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">HUKUKİ KAYITLAR</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Mahkeme veya idari merci kararları ile icra müdürlüğü belgelerinde yer alan veriler.</p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">GÜVENLİK BİLGİLERİ</h3>
          <p className="text-gray-700 leading-relaxed mb-4">İşyeri giriş-çıkış bilgileri, görüşme kayıtları, ziyaret saatleri ve detayları, kamera kayıtları vb.</p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">ADAY BİLGİLERİ</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Özgeçmiş, mülakat notları, test sonuçları, alışkanlıklar, vb.</p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">DİĞER VERİLER</h3>
          <p className="text-gray-700 leading-relaxed mb-6">Denetim faaliyetleri kapsamında sunulması gereken kayıtlar, belgeler vb.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">VII. KİŞİSEL VERİLERİN İŞLENME AMAÇLARI</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Şirket, kişisel verileri yasal sürelere bağlı kalarak aşağıdaki amaçlar için işleyebilir:</p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">A. YASAL GEREKLİLİKLERİMİZİN YERİNE GETİRİLMESİ</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Herhangi kanun hükmüne, mevzuata veya üyesi olduğumuz meslek kuruluşuna riayet etmek;</li>
            <li>Diğer bütün profesyonel hizmet sağlayıcıları gibi, biz de kanunlara, yönetmeliklere ve mesleki yükümlülüklere tabiyiz. Hizmetlerimizin bu yükümlülüklere uygun biçimde sağlandığını göstermek için belirli kayıtlar tutmak zorundayız ve söz konusu kayıtlar kişisel veriler içerebilir.</li>
            <li>Adli, idari ve yasal merciler ile icra dairelerinin emirlerini yerine getirmek;</li>
            <li>Şirket için denetim hizmetlerini yürütmek.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">B. SÖZLEŞMELERDEN DOĞAN YÜKÜMLÜLÜKLERİMİZİN İFASI</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Geniş bir yelpazede sunduğumuz profesyonel hizmetlerin sağlanması. Bu ürün ve hizmetleri bizzat İlgili Kişi, İlgili Kişi'nin işvereni veya İlgili Kişi'nin sözleşme yaptığı bir taraf olan (potansiyel) müşterilerimize sunmak adına kişisel verileri işlemekteyiz.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">C. ŞİRKETİMİZİN MEŞRU MENFAATLERİ</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Faaliyetlerimizin ve hizmetlerimizin yönetimi, idaresi ve gelişimi;</li>
            <li>Müşterilerimizle ilişkimizi yönetmeyi, idari, muhasebe ve kurumsal yükümlülüklerimizi yerine getirmeyi, potansiyel müşterilere, çalışanlarımızın kimlik bilgilerini içeren hizmet teklifleri gönderilmesi, BT sistemlerimizi sürdürmeyi ve kullanmayı, iş ve hizmetlerimizi geliştirmeyi, çeşitli etkinliklere ev sahipliği yapmayı, sistemlerimizi ve uygulamalarımızı yönetmeyi ve de aşağıdaki başlıkları içerecek şekilde işimizi yürütmek için, kişisel verileri işliyoruz;</li>
            <li>Tedarikçilerimiz ve alt yüklenicilerimizle ve bu tedarikçi ve altyükleniciler ile ilişkili gerçek kişilerle ilgili kişisel verileri, aradaki ilişkiyi yönetmek, sözleşmeyi yönetmek, tedarikçilerimizden hizmet almak ve gerektiğinde müşterilerimize profesyonel hizmetler sunmak için işlemek;</li>
            <li>Kişisel verilerin güncel olmasını sağlamak;</li>
            <li>Kendi bilgimizi ve müşterimizin bilgilerini korumak ve iç kalite ve risk analizi kapsamında güvenlik, kalite ve risk yönetimi sağlamak:</li>
            <li>Müşteri memnuniyetini ve hizmet kalitesini değerlendirmek;</li>
            <li>Kutlama ve tebrik amacıyla iletişim kurmak;</li>
            <li>Şirketin iş stratejilerini belirlemek ve hayata geçirmek amacıyla süreçleri ve işlemleri, yazılım, erp, crm, mali kayıt operasyonları, iletişimi, pazar araştırmalarını ve satın alma işlemlerini (talep, teklif, değerlendirme, sipariş, bütçeleme, sözleşmeler) yürütmek.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">D. ŞİRKETİMİZLE İŞ İLİŞKİSİ OLAN KİŞİLERİN HUKUKİ VE TİCARİ GÜVENLİĞİNİN TESİSİ</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Yetkili kuruluşlara mevzuattan doğan bilgi verme yükümlülüğümüzün yerine getirilmesi;</li>
            <li>Yasal işlemlerin yerine getirilmesi;</li>
            <li>Güvenlik ve ziyaretçi kartı temini amacıyla ziyaretçilerin kimlik kontrolü.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">E. İLETİŞİM KURULMASI VE İLETİŞİME YÖNELİK OPERASYONLAR</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>İlgili kişiler ile iletişim kurmak;</li>
            <li>İlgili kişilerin verilerinin güncel olarak tutulmasının sağlanması.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">F. İNSAN KAYNAKLARI POLİTİKALARININ YÜRÜTÜLMESİ</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>İşe alım amacıyla veri toplama; ki bu, İnsan Kaynakları Departmanı'na e-posta veya farklı sosyal medya kanallarından iletilen özgeçmişleri de içerir;</li>
            <li>İşe alım sürecini tamamlamak;</li>
            <li>Olası adayları değerlendirmek;</li>
            <li>İnsan Kaynakları politikalarına uygun olarak insan kaynakları faaliyetlerini gerçekleştirmek ve İş Sağlığı ve Güvenliği çerçevesindeki yükümlülükleri yerine getirmek;</li>
            <li>İş sözleşmelerinden ve / veya mevzuattan kaynaklanan (şirket çalışanlarına yönelik) yükümlülüklerimizi yerine getirmek.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">G. GİRİŞİMCİLİK, SÜRDÜRÜLEBİLİRLİK, SOSYAL SORUMLULUK, İNOVASYON, GİZLİLİK, RİSK İZLEME, MODELLEME, RAPORLAMA, SKORLAMA, GÜVENLİK, DEĞERLENDİRME FAALİYETLERİ</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Ürünlerimiz ve hizmetlerimiz ile ilgili satış ve pazarlama faaliyetlerini değerlendirmek, planlamak ve yürütmek;</li>
            <li>Sürdürülebilirlik çabalarımızı hayata geçirmek;</li>
            <li>Şirketimizdeki hizmet yelpazesini çeşitlendirmek;</li>
            <li>Müşteri ilişkilerin yönetiminin iyileştirilmesi;</li>
            <li>Sürdürülebilirlik ve sosyal sorumluluk projelerini planlamak ve yürütmek.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">H. DOĞRUDAN PAZARLAMA</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hizmetlerimizi tanıtmak ve geliştirmek, sizi ilgilendireceğini düşündüğümüz bilgileri sunmak ve etkinliklerimize davetiye göndermek.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">VIII. KİŞİSEL VERİ AKTARIMI</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Şirketimizin Borçlar Kanunu, Ticaret Kanunu, Vergi Usul Kanunu, Kimlik Bildirme Kanunu, Kişisel Verilerin Korunması Kanunu'nu kapsayan ancak bunlarla sınırlı olmayan ilgili mevzuattan kaynaklı yükümlülüklerini yerine getirebilmesi için, kişisel verileriniz yürürlükteki kanuni hükümler çerçevesinde, KVKK'nın 8. ve 9. maddelerinde belirtilen koşullar temelinde, üçüncü taraflara aktarılabilir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            KVKK'nın 5 ve 6. Maddelerinde belirtilen koşullarda, açık rıza almaksızın veri aktarımı yapmak mümkündür. Gökkuşağı Yazılım ve Danışmanlık, KVKK ve diğer ilgili mevzuata uygun olması koşuluyla, yönetmeliklerde belirtilen tüm güvenlik önlemlerini alarak, kanunda veya ilgili mevzuatta veya varsa Veri Sorumlusu ile imzalanan sözleşmede aksine bir hüküm olmadığı sürece, gerektiği hallerde ise ilgili kişinin rızasına da başvurarak Türkiye'deki üçüncü kişilere ve Grup şirketlerine kişisel verileri aktarabilir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ayrıca, – açık rıza teminin gerektiği hallerde ise rızanıza başvurarak – veri işleme ekipmanının donanım ve yazılımının gizlilik, erişilebilirlik, bütünlük ve dayanıklılığını sağlamak için ya da şirketimizin fiziksel güvenliği korumak için güvenlik kamerası kayıtlarını aktararak, şirketlerle, üreticilerle, ayrıca telekom hizmetleri, posta / nakliye hizmetleri, bakım ve kullanıcı destek hizmetleri, veri taşıyıcı, BT sistemi bakım şirketleri gibi ara servis sağlayıcılarla, ve de idari amaçlar için gerekli olduğunda ya da müşterilerimize profesyonel hizmetler sağlamak için diğer Gökkuşağı Yazılım ve Danışmanlık üyesi firmalarla (örneğin farklı ülkelerdeki Gökkuşağı Yazılım ve Danışmanlık üyesi şirketleri içeren hizmetleri sağlarken), veya bina yönetimi, hukuki hizmetler ve hukuki destek alanlarında ziyaretçi / çalışan giriş-çıkış kontrolleri esnasında kişisel verilerinizi aktarabiliriz.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Kişisel verilerinizin yurt dışına aktarımını ancak açık rızanızın bulunması halinde veya açık rızanızın bulunmadığı hallerde ise Kanun'un öngördüğü çerçevede – verilerin aktarıldığı ülkede Kişisel Verilerin Korunması Kurulu kararınca yeterli koruma bulunması durumunda aktarılabilecektir. Yeterli korumanın bulunmadığı hallerde aktarımın yapıldığı ülkelerde Şirketimizin ilgili yabancı ülkedeki Veri Sorumlusu ile birlikte yeterli korumayı sağlamayı yazılı olarak taahhüt etmesi ve Kurul'un bu konudaki iznin alınması kaydıyla – gerçekleştirilebilecektir. Bilgilerinizi aktardığımızda, ilgili alıcılarla KVKK standartlarındaki hükümlere dayanan veri aktarımı sözleşmeleri imzalayarak, kişisel bilgilerinizin bu ülkelerdeki alıcılara aktarımında yeterli korumayı sağlıyoruz.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">IX. İŞLENEN VERİNİN MUHAFAZASI</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kişisel verilerinizi aşağıdaki dönemlerden en uzun olanı boyunca sistemlerimizde tutacağız:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>(i) toplandığı amaç için gerekli olduğu süre;</li>
            <li>(ii) yasaların gerektirdiği herhangi bir gereklilik veya saklama süresi; veya</li>
            <li>(iii) hizmetlerimizden kaynaklı dava veya soruşturmaların açılabileceği yükümlülük süresinin bitimi.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            İlgili saklama süreleri dolduğunda, kişisel veriler imha edilecek veya anonim hale getirilecektir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">X. VERİ GÜVENLİĞİ</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            KVKK'nın 12. Maddesi uyarınca, kişisel verilerinizin kayıp, yanlış kullanım, değişiklik veya sehven tahribattan korumak için, uygun teknolojik ve organizasyonel kontrollerin yapılmasını sağlıyoruz.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kişisel verilerinize erişimi olan personelimiz, bu bilgilerin gizliliğini korumak üzere eğitim almıştır. Kişisel verilerinize erişmelerine, ancak görevlerini uygun bir şekilde yerine getirmeleri için bu bilgilere ihtiyaç duydukları ölçüde izin verilir. Verilerinize erişebilecek kişiler aynı zamanda sıkı profesyonel gizlilik kurallarına tabidir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            En yeni tehditlere karşı etkili olmasını sağlamak adına, güvenlik savunma önlemlerimiz düzenli olarak izlenir ve test edilir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">XI. ÇEREZ POLİTİKASI</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            İnternet sitemizde gezinmeniz, bilgisayarınıza çerez gönderilmesine neden olabilir. Çerezler, ziyaret ettiğiniz web siteleri tarafından bilgisayarınıza yerleştirilen küçük metin dosyalarıdır. Daha fazla bilgi için lütfen Çerez Politikamızı inceleyin.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">XII. HAKLARINIZ</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, Veri Sorumlusu'na başvurmak suretiyle, şu haklarınızı kullanabilirsiniz:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
            <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
            <li>Kişisel verilerinizin işlenme amacını ve verilerin bu amaca uygun olarak kullanılıp kullanılmadığını öğrenme,</li>
            <li>Yurtiçinde veya yurtdışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
            <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
            <li>Kanun'un 7'nci maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme, düzeltilmesi/silinmesi/yok edilmesi/anonim hale getirilmesi hallerinde düzeltme veya silme/yok etme/anonim hale getirme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz ve işlenmesi sonucunda sizin aleyhinize oluşan bir sonuca itiraz etme, kişisel verilerin mevzuata aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            KVKK veya ilgili yan mevzuat hükümleri uyarınca, İlgili Kişi haklarınızla ilgili bütün başvurularınızla Şirket ilgilenecektir. İlgili Kişi olarak haklarınızdan herhangi birini kullanmak isterseniz, lütfen aşağıda belirtilen e-posta adreslerimize veya destek@gokkusagiyazilim.com.tr adresine, bu Başvuru Formunu kullanarak ve "Kişisel Veri Başvuru Talep Formu" başlığıyla iletişime geçin; bu esnada, bize daha önce bildirdiğiniz ve halihazırda sistemimizde kayıtlı bulunan e-posta adresinizi kullanın ya da 5070 sayılı Elektronik İmza Kanunu uyarınca tanımlanmış elektronik veya mobil imzanızı kullanın.
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

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">XIII. ÇOCUKLAR VE WEB SİTEMİZ</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Şirket özellikle internet ortamında çocukların mahremiyetinin korunmasının öneminin bilincindedir. Sitelerimiz çocuklara yönelik olarak tasarlanmış değildir. Politikamız, internet sitelerimiz aracılığıyla 18 yaş altındaki hiç kimse hakkında kasten bilgi toplamak veya saklamamak şeklindedir. Eğer 18 yaş altındaysanız, internet sitemiz kanalıyla bilgi göndermek için bir veli veya vasinizin rızasını almanız gerekmektedir. Lütfen bizimle iletişim kurmadan önce, onlardan bu bilgileri incelemelerini isteyin.
          </p>

          {/* Last Updated */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Politika Versiyonu ve en son güncelleme tarihi: V.1.1 – 11.06.2024
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
