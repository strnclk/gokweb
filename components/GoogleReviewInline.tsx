import GoogleReviewQR from '@/components/GoogleReviewQR';
import { GOOGLE_REVIEWS_URL } from '@/lib/constants';

// Google değerlendirme davetini siteye göze batmadan yaymak için tek, tutarlı
// bileşen. Link yalnızca constants'ta tanımlıdır; buradan üç bağlamda kullanılır:
//   - variant="footer": koyu footer; masaüstünde küçük QR + link, mobilde link.
//   - variant="card":   açık zeminli sayfalar (ör. ilçe SEO); ince güven şeridi.
//   - variant="link":   minimal metin linki (ör. blog yazısı sonu), QR yok.
// İlke: QR yalnızca BAŞKA cihazla taranmak içindir → mobilde QR yerine buton/link.

// 4 renkli Google "G" logosu (tek yerde, tekrar kullanım için).
function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M23.52 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.87c2.26-2.09 3.58-5.17 3.58-8.87z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.94-2.91l-3.87-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.28v3.09A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.27 14.28a7.2 7.2 0 0 1 0-4.56V6.63H1.28a12 12 0 0 0 0 10.74l3.99-3.09z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A11.97 11.97 0 0 0 12 0 12 12 0 0 0 1.28 6.63l3.99 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
    </svg>
  );
}

type Variant = 'footer' | 'card' | 'link';

export default function GoogleReviewInline({
  variant = 'link',
  className = '',
}: {
  variant?: Variant;
  className?: string;
}) {
  const url = GOOGLE_REVIEWS_URL;

  // Blog yazısı sonu vb.: sadece metin linki, QR yok.
  if (variant === 'link') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors ${className}`}
      >
        <GoogleG className="w-4 h-4 flex-shrink-0" />
        <span>
          Hizmetimizden memnun kaldıysanız{' '}
          <span className="underline underline-offset-2">Google&apos;da değerlendirin</span>
        </span>
      </a>
    );
  }

  // Koyu footer: masaüstünde küçük QR + link; mobilde yalnızca link.
  if (variant === 'footer') {
    return (
      <div className={className}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block rounded-lg bg-white p-2 shadow ring-1 ring-white/10 transition-transform hover:scale-105"
          aria-label="Google Yorumları sayfasını aç"
        >
          <GoogleReviewQR url={url} size={84} />
        </a>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
        >
          <GoogleG className="w-4 h-4 flex-shrink-0" />
          Google&apos;da değerlendirin
        </a>
      </div>
    );
  }

  // variant === 'card' → açık zeminli ince güven şeridi (ör. ilçe sayfaları).
  return (
    <div
      className={`flex items-center gap-5 rounded-2xl border border-gray-200 bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6 ${className}`}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <GoogleG className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-semibold text-gray-900">Google Yorumları</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          Bizimle çalıştıysanız deneyiminizi paylaşarak diğer işletmelere yol gösterin.
        </p>
        {/* Mobilde QR taranamaz → buton */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hidden mt-3 inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-700 border border-blue-200 rounded-full text-sm font-semibold shadow-sm hover:bg-blue-50 transition-colors"
        >
          <GoogleG className="w-4 h-4 flex-shrink-0" />
          Google&apos;da değerlendirin
        </a>
      </div>
      {/* Masaüstünde taranabilir QR */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:block flex-shrink-0 rounded-xl bg-white p-2 shadow-sm ring-1 ring-gray-200 transition-transform hover:scale-105"
        aria-label="Google Yorumları sayfasını aç"
      >
        <GoogleReviewQR url={url} size={96} />
      </a>
    </div>
  );
}
