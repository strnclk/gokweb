'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function SEOSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl mb-12 text-center text-gray-900"
        >
          Mikro ERP ve E-Dönüşüm Rehberi
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-gray-900 leading-relaxed"
        >
          <div>
            <h3 className="text-2xl mb-4 text-gray-900">Mikro ERP Nedir ve Neden Önemlidir?</h3>
            <p className="text-lg text-gray-900">
              Mikro ERP (Enterprise Resource Planning), işletmelerin tüm kaynaklarını planlama, yönetme ve optimize etme süreçlerini tek bir entegre sistemde toplayan kurumsal kaynak planlaması yazılımıdır. Mikro muhasebe programı özelliği ile finans yönetiminden stok takibine, satış süreçlerinden insan kaynakları yönetimine kadar tüm operasyonları kolaylaştırır. Küçük ve orta ölçekli işletmeler için özel olarak tasarlanan mikro ERP çözümleri, büyük kurumsal sistemlerin güçlü özelliklerini daha erişilebilir ve uygun maliyetli bir şekilde sunar.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-4 text-gray-900">E-Fatura Nedir?</h3>
            <p className="text-lg text-gray-900">
              E-fatura nedir sorusunun cevabı oldukça basittir: Kağıt fatura yerine elektronik ortamda oluşturulan, Gelir İdaresi Başkanlığı tarafından onaylanan ve yasal geçerliliği olan dijital faturalardır. E-fatura sistemi, işletmelerin fatura süreçlerini hızlandırır, maliyetleri azaltır ve arşivleme işlemlerini kolaylaştırır. Gökkuşağı Yazılım'ın e-fatura çözümleri ile faturalarınızı saniyeler içinde oluşturabilir, gönderebilir ve takip edebilirsiniz.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-4 text-gray-900">E-Defter Nedir ve Avantajları</h3>
            <p className="text-lg text-gray-900">
              E-defter nedir diye sorduğunuzda, yasal defterlerin elektronik ortamda tutulması ve saklanması sistemi olarak tanımlanabilir. E-defter sistemi ile yevmiye defteri, büyük defter ve envanter defterlerinizi dijital ortamda tutabilir, kağıt kullanımını ortadan kaldırabilirsiniz. Bu sistem hem çevre dostu hem de maliyet tasarrufu sağlayan bir çözümdür. Ayrıca denetim süreçlerini hızlandırır ve arşivleme için fiziksel alan ihtiyacını ortadan kaldırır.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-4 text-gray-900">Mikro Muhasebe Programı Özellikleri</h3>
            <p className="text-lg text-gray-900">
              Mikro muhasebe programı, işletmelerin finansal işlemlerini kolayca yönetmelerine olanak tanıyan kapsamlı bir yazılımdır. Gelir-gider takibi, banka hareketleri, çek-senet yönetimi, cari hesap takibi ve detaylı raporlama özellikleriyle muhasebe süreçlerinizi otomatikleştirir. Mikro ERP sistemiyle entegre çalışan muhasebe modülü, tüm finansal verilerinizi gerçek zamanlı olarak takip etmenizi sağlar.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-4 text-gray-900">Neden Gökkuşağı Yazılım?</h3>
            <p className="text-lg text-gray-900">
              19 yılı aşkın deneyimimiz ve 500'den fazla mutlu müşterimizle, Türkiye'nin lider mikro ERP ve e-dönüşüm çözümleri sağlayıcısıyız. Mikro Fly, Mikro Run ve Mikro Jump ürünlerimiz ile her ölçekteki işletmeye özel çözümler sunuyoruz. E-fatura, e-defter ve e-arşiv sistemlerimiz tamamen yerlidir. 7/24 uzman desteğimizle yanınızdayız.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
