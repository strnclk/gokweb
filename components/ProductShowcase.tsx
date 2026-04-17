import ProductCard from './ProductCard';

export default function ProductShowcase() {
  return (
    <>
      <ProductCard
        image="/eflow3-logo.png"
        title="Dijital Dönüşüm"
        subtitle="E-Dönüşüm çözümleriyle tanışın"
        description="E-fatura, e-defter ve e-arşiv süreçlerinizi otomatikleştirin. GİB uyumlu ve hızlı entegrasyon."
        gradient="from-blue-400 to-indigo-500"
        delay={0.2}
        route="/eflow"
      />
      <ProductCard
        image="/mikro-fly-logo.png"
        title="Mikro ERP Çözümleri"
        subtitle="İşletmenize özel yazılım"
        description="Mikro FLY, RUN ve JUMP ile iş süreçlerinizi optimize edin. Size en uygun çözümü birlikte bulalım."
        gradient="from-green-400 to-emerald-500"
        delay={0.3}
        route="/products"
      />
      <ProductCard
        image="/mikro-run-logo.png"
        title="Özel Yazılım Geliştirme"
        subtitle="İhtiyaçlarınıza özel çözümler"
        description="Web uygulamaları, mobil çözümler ve kurumsal yazılımlar. İşletmenizin dijital geleceğini birlikte inşa edelim."
        gradient="from-purple-500 to-pink-500"
        delay={0.4}
        route="/contact"
      />
    </>
  );
}
