import ProductCard from './ProductCard';
import { Monitor } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <>
      <ProductCard
        image="/eflow3-logo.png"
        title="Dijital Dönüşüm"
        subtitle="E-Dönüşüm çözümleriyle tanışın"
        description="E-fatura, e-defter ve e-arşiv süreçlerinizi otomatikleştirin. GİB uyumlu ve hızlı entegrasyon."
        features={[
          "E-Fatura Entegrasyonu",
          "E-Defter Otomasyonu",
          "GİB Uyumlu Altyapı",
          "Hızlı Kurulum",
          "7/24 Destek",
          "Güvenli Veri İşleme"
        ]}
        gradient="from-blue-600 to-blue-700"
        delay={0.2}
        route="/eflow"
      />
      <ProductCard
        images={["/mikro-fly-logo.png", "/mikro-run-logo.png", "/mikro-jump-logo.png"]}
        title="Mikro ERP Çözümleri"
        subtitle="İşletmenize özel yazılım"
        description="Mikro FLY, RUN ve JUMP ile iş süreçlerinizi optimize edin. Size en uygun çözümü birlikte bulalım."
        features={[
          "Mikro FLY - Başlangıç",
          "Mikro RUN - Orta Ölçek",
          "Mikro JUMP - Büyük Ölçek",
          "Özel Entegrasyon",
          "Bulut Tabanlı",
          "Mobil Erişim"
        ]}
        gradient="from-emerald-600 to-emerald-700"
        delay={0.3}
        route="/products"
      />
      <ProductCard
        icon={<Monitor className="w-12 h-12" />}
        title="Özel Yazılım Geliştirme"
        subtitle="İhtiyaçlarınıza özel çözümler"
        description="Web uygulamaları, mobil çözümler ve kurumsal yazılımlar. İşletmenizin dijital geleceğini birlikte inşa edelim."
        features={[
          "Web Uygulamaları",
          "Mobil Çözümler",
          "Kurumsal Yazılımlar",
          "API Entegrasyonu",
          "Bulut Altyapı",
          "Özel Tasarım"
        ]}
        gradient="from-violet-600 to-violet-700"
        delay={0.4}
        route="/contact"
      />
    </>
  );
}
