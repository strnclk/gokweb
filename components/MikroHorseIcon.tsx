// Mikro Run/Jump/Fly ürünlerinin at silüetlerini (yazısı kırpılmış, şeffaf
// zeminli) diğer menü ikonlarıyla aynı boyutta gösterir. Böylece at tam
// görünür ve alt başlıklar hizalı kalır.
export default function MikroHorseIcon({
  src,
  className = '',
}: {
  src: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`w-4 h-4 object-contain flex-shrink-0 ${className}`}
    />
  );
}
