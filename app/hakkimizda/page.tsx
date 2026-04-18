import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Hakkımızda | 19+ Yıllık Deneyim | GÖKKUŞAĞI Yazılım",
  description: "2005 yılında kurulan GÖKKUŞAĞI Yazılım, 19+ yıllık deneyimiyle ERP entegrasyonları, web uygulamaları, mobil çözümler ve e-ticaret entegrasyonları hizmetleri sunmaktadır.",
  keywords: "GÖKKUŞAĞI Yazılım hakkımızda, 19 yıl deneyim, ERP çözümleri, Mikro bayii, yazılım danışmanlık, teknoloji çözümleri",
};

export default function Hakkimizda() {
  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">GÖKKUŞAĞI Yazılım ve Danışmanlık</h1>
          <div className="text-3xl md:text-4xl font-semibold text-blue-600 mb-8">19+ Yıllık Deneyim</div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            2005 yılında teknolojik yenilikler ve yazılım çözümleri sunmak amacıyla faaliyete geçtik. 
            İnsana ve teknolojiye olan bağlılığımızla, deneyimli ekibimizle dijital dönüşüm alanında 
            işletmelere özel çözümler geliştirmeye devam ediyoruz.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Sağladığımız hizmetler arasında modern teknoloji çözümleri ve entegrasyon hizmetleri yer alıyor
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ERP Entegrasyonları",
                description: "Kurumlar için özel ERP çözümleri ve entegrasyon hizmetleri",
                icon: "🏢"
              },
              {
                title: "Web Uygulamaları",
                description: "Modern ve kullanıcı dostu web tabanlı uygulamalar",
                icon: "🌐"
              },
              {
                title: "Hızlı Satış Yazılımları",
                description: "POS ve hızlı satış çözümleri ile verimlilik artışı",
                icon: "💳"
              },
              {
                title: "Mobil Çözümler",
                description: "iOS ve Android platformlarında özel mobil uygulamalar",
                icon: "📱"
              },
              {
                title: "El Terminali Yazılımları",
                description: "El terminal cihazları için özel yazılım çözümleri",
                icon: "🖥️"
              },
              {
                title: "E-ticaret Entegrasyonları",
                description: "Pazar yeri ve e-ticaret platformu entegrasyonları",
                icon: "🛒"
              },
              {
                title: "POS ve Banka Entegrasyonları",
                description: "Ödeme sistemleri ve banka entegrasyon çözümleri",
                icon: "🏦"
              },
              {
                title: "Mikro Yazılım Destek",
                description: "Mikro programları satışı, kurulumu ve teknik destek",
                icon: "⚙️"
              },
              {
                title: "Bulut Çözümleri",
                description: "Bulut tabanlı yazılım ve veri depolama hizmetleri",
                icon: "☁️"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Approach Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Çalışma Yaklaşımımız</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Müşterilerimize en iyi hizmeti sunmak için benimsediğimiz çalışma prensipleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Detaylı Analiz</h3>
              <p className="text-gray-700 leading-relaxed">
                Kurumların ihtiyaçlarını detaylı bir şekilde analiz ederek en uygun yazılım paketini tespit ediyor 
                ve kurulumunu gerçekleştiriyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Özelleştirme</h3>
              <p className="text-gray-700 leading-relaxed">
                Ticari uygulamaların verimliliği, doğru kurulum ve entegrasyon ile mümkündür.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">İş Birliği</h3>
              <p className="text-gray-700 leading-relaxed">
                Sektörün önde gelen firmalarıyla iş birliği yaparak, teknoloji alanındaki güçlü konumumuzu 
                korumaktayız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-3xl">
              <h2 className="text-4xl font-bold mb-6 text-blue-800">Misyonumuz</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Yenilikçi çözümler sunarak, müşterilerimizin ihtiyaçlarını en üst düzeyde karşılamak ve 
                sektördeki liderliğimizi sürdürebilmek için kaliteli ürün ve hizmetler geliştirmeyi taahhüt ediyoruz. 
                İnsan odaklı yaklaşımımızla, çalışanlarımızın ve paydaşlarımızın sürekli gelişimini destekleriz.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-12 rounded-3xl">
              <h2 className="text-4xl font-bold mb-6 text-purple-800">Vizyonumuz</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                İleri teknolojiler ve sürdürülebilir uygulamalar ile sektördeki en güvenilir ve tercih edilen 
                marka olmak; global ölçekte müşterilerimizin hayatını kolaylaştıran çözümler sunarak, 
                geleceğin iş dünyasına yön vermek.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl">
              <h2 className="text-4xl font-bold mb-6">İşletmenizin Dijital Dönüşümü İçin</h2>
              <p className="text-xl mb-8">Satış ekibimizle tanışın</p>
              <div className="text-2xl font-semibold">Gökkuşağı Yazılım</div>
              <p className="text-lg mt-4 opacity-90">
                Mikro muhasebe programlarının yetkili bayisi olarak, işletmenizin finansal yönetimini 
                kolaylaştıran profesyonel çözümler sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
