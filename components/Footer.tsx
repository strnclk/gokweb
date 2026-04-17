import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl text-white mb-4">Gökkuşağı Yazılım</h3>
            <p className="text-sm">Dijital dönüşümün öncüsü</p>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Ürünler</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/mikro-fly" className="hover:text-white transition">Mikro Fly</Link></li>
              <li><Link href="/mikro-run" className="hover:text-white transition">Mikro Run</Link></li>
              <li><Link href="/mikro-jump" className="hover:text-white transition">Mikro Jump</Link></li>
              <li><Link href="/eflow" className="hover:text-white transition">E-Flow</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">E-Dönüşüm</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/eflow" className="hover:text-white transition">E-Fatura</Link></li>
              <li><Link href="/eflow" className="hover:text-white transition">E-Defter</Link></li>
              <li><Link href="/eflow" className="hover:text-white transition">E-Arşiv</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">Hakkımızda</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">İletişim</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Destek</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 Gökkuşağı Yazılım. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
