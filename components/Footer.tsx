import Link from 'next/link';
import ContactWidget from './ContactWidget';
import GoogleReviewInline from './GoogleReviewInline';

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 mb-16">
          
          {/* Company info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Gökkuşağı Yazılım
              </h3>
              <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                2005'ten beri dijital dönüşümün öncüsü. 20+ yıllık deneyimimizle işletmelere özel teknoloji çözümleri sunuyoruz.
              </p>
            </div>
            
            {/* Professional indicators */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-slate-300">Mikro Yazılım İş Ortağı</span>
            </div>

            {/* Google değerlendirme - göze batmayan, site geneli davet */}
            <GoogleReviewInline variant="footer" />
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Ürünler</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/mikro-fly" className="text-slate-300 hover:text-white transition-colors duration-200">Mikro Fly</Link></li>
              <li><Link href="/mikro-run" className="text-slate-300 hover:text-white transition-colors duration-200">Mikro Run</Link></li>
              <li><Link href="/mikro-jump" className="text-slate-300 hover:text-white transition-colors duration-200">Mikro Jump</Link></li>
              <li><Link href="/eflow" className="text-slate-300 hover:text-white transition-colors duration-200">E-Flow</Link></li>
              <li><Link href="/eflow-bpm" className="text-slate-300 hover:text-white transition-colors duration-200">E-Flow BPM</Link></li>
              <li><Link href="/eflow-dms" className="text-slate-300 hover:text-white transition-colors duration-200">E-Flow DMS</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Hizmetler</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/mikro-erp-kurulumu" className="text-slate-300 hover:text-white transition-colors duration-200">ERP Entegrasyonları</Link></li>
              <li><Link href="/custom-software" className="text-slate-300 hover:text-white transition-colors duration-200">Web Uygulamaları</Link></li>
              <li><Link href="/custom-software" className="text-slate-300 hover:text-white transition-colors duration-200">Mobil Çözümler</Link></li>
              <li><Link href="/mikro-fly" className="text-slate-300 hover:text-white transition-colors duration-200">E-ticaret</Link></li>
              <li><Link href="/services/teknik-destek" className="text-slate-300 hover:text-white transition-colors duration-200">Mikro Destek</Link></li>
              <li><Link href="/custom-software" className="text-slate-300 hover:text-white transition-colors duration-200">Özel Yazılım</Link></li>
              <li><Link href="/services/danismanlik" className="text-slate-300 hover:text-white transition-colors duration-200">IT Danışmanlık</Link></li>
              <li><Link href="/services/e-donusum-entegrasyonu" className="text-slate-300 hover:text-white transition-colors duration-200">E-Dönüşüm</Link></li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-slate-300 hover:text-white transition-colors duration-200">Ana Sayfa</Link></li>
              <li><Link href="/#hakkimizda" className="text-slate-300 hover:text-white transition-colors duration-200">Hakkımızda</Link></li>
              <li><Link href="/blog" className="text-slate-300 hover:text-white transition-colors duration-200">Blog</Link></li>
              <li><Link href="/solutions" className="text-slate-300 hover:text-white transition-colors duration-200">Çözümler</Link></li>
              <li><Link href="/vertical-solutions" className="text-slate-300 hover:text-white transition-colors duration-200">Dikey Çözümler</Link></li>
              <li><Link href="/sectoral-solutions" className="text-slate-300 hover:text-white transition-colors duration-200">Sektörel Çözümler</Link></li>
              <li><Link href="/featured-works" className="text-slate-300 hover:text-white transition-colors duration-200">Referanslar</Link></li>
              <li><Link href="/compare" className="text-slate-300 hover:text-white transition-colors duration-200">Karşılaştırma</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white transition-colors duration-200">İletişim</Link></li>
            
            </ul>
          </div>

          {/* İstanbul İlçeleri */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Hizmet Verdiğimiz Noktalar</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <ul className="space-y-1">
                <li><Link href="/atasehir-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Ataşehir</Link></li>
                <li><Link href="/beylikduzu-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Beylikdüzü</Link></li>
                <li><Link href="/kadikoy-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Kadıköy</Link></li>
                <li><Link href="/uskudar-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Üsküdar</Link></li>
                <li><Link href="/umraniye-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Ümraniye</Link></li>
                <li><Link href="/adalar-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Adalar</Link></li>
                <li><Link href="/arnavutkoy-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Arnavutköy</Link></li>
                <li><Link href="/avcilar-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Avcılar</Link></li>
                <li><Link href="/bagcilar-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Bağcılar</Link></li>
                <li><Link href="/bahcelievler-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Bahçelievler</Link></li>
                <li><Link href="/bakirkoy-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Bakırköy</Link></li>
                <li><Link href="/basaksehir-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Başakşehir</Link></li>
                <li><Link href="/bayrampasa-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Bayrampaşa</Link></li>
                <li><Link href="/besiktas-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Beşiktaş</Link></li>
                <li><Link href="/beykoz-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Beykoz</Link></li>
                <li><Link href="/beyoglu-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Beyoğlu</Link></li>
                <li><Link href="/buyukcekmece-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Büyükçekmece</Link></li>
                <li><Link href="/catalca-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Çatalca</Link></li>
                <li><Link href="/cekmekoy-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Çekmeköy</Link></li>
                <li><Link href="/esenler-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Esenler</Link></li>
                <li><Link href="/esenyurt-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Esenyurt</Link></li>
              </ul>
              <ul className="space-y-1">
                <li><Link href="/eyupsultan-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Eyüpsultan</Link></li>
                <li><Link href="/fatih-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Fatih</Link></li>
                <li><Link href="/gaziosmanpasa-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Gaziosmanpaşa</Link></li>
                <li><Link href="/gungoren-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Güngören</Link></li>
                <li><Link href="/kagithane-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Kağıthane</Link></li>
                <li><Link href="/kartal-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Kartal</Link></li>
                <li><Link href="/kucukcekmece-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Küçükçekmece</Link></li>
                <li><Link href="/maltepe-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Maltepe</Link></li>
                <li><Link href="/pendik-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Pendik</Link></li>
                <li><Link href="/sancaktepe-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Sancaktepe</Link></li>
                <li><Link href="/sariyer-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Sarıyer</Link></li>
                <li><Link href="/sile-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Şile</Link></li>
                <li><Link href="/silivri-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Silivri</Link></li>
                <li><Link href="/sultanbeyli-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Sultanbeyli</Link></li>
                <li><Link href="/sultangazi-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Sultangazi</Link></li>
                <li><Link href="/sisli-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Şişli</Link></li>
                <li><Link href="/tuzla-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Tuzla</Link></li>
                <li><Link href="/zeytinburnu-mikro-bayi" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">Zeytinburnu</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact information */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <h5 className="font-semibold text-white mb-3">Adres</h5>
              <p className="text-sm text-slate-300 leading-relaxed">
                İçerenköy Mah. Eryılmazlar Sokak No:2<br />
                Kemal Bey İş Merkezi Kat:4 Daire:18<br />
                Ataşehir/İstanbul
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-3">Telefon</h5>
              <p className="text-sm text-slate-300">0539 856 35 78</p>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-3">E-posta</h5>
              <p className="text-sm text-slate-300">satis@gokkusagiyazilim.com.tr</p>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-3">Sosyal Medya</h5>
              <div className="space-y-2">
                <a href="https://www.linkedin.com/company/gokkusagiyazilim/?originalSubdomain=tr" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors text-sm block flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://instagram.com/gokkusagiyazilim" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors text-sm block flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-3">Çalışma Saatleri</h5>
              <p className="text-sm text-slate-300">Pazartesi - Cuma: 09:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-slate-300 text-sm">
                &copy; 2026 Gökkuşağı Yazılım. Tüm hakları saklıdır.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Mikro Yazılım İş Ortağı • 20+ Yıllık Deneyim
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/gizlilik" className="text-slate-300 hover:text-white transition-colors">Gizlilik Politikası</Link>
              <Link href="/kullanim" className="text-slate-300 hover:text-white transition-colors">Kullanım Koşulları</Link>
              <Link href="/cerezler" className="text-slate-300 hover:text-white transition-colors">Çerez Politikası</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
    {/* Genel iletişim butonu (WhatsApp, telefon, e-posta, form) */}
    <ContactWidget />
    </>
  );
}
