import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCover from '@/components/BlogCover';
import BlogShare from '@/components/BlogShare';
import { getAllBlogSlugs, getBlogPostBySlug, posts } from '@/lib/blog';

const SITE = 'https://gokkusagiyazilim.com.tr';

// Türkçe karakterleri sadeleştirip anchor-uyumlu bir slug üretir.
function slugifyTr(s: string): string {
  const harita: Record<string, string> = { 'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u' };
  return s
    .replace(/<[^>]+>/g, '')
    .toLocaleLowerCase('tr-TR')
    .replace(/[çğıöşü]/g, (c) => harita[c] ?? c)
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// İçerikteki <h2> başlıklarına id ekler ve içindekiler listesini çıkarır.
function icindekilerCikar(html: string): { html: string; basliklar: { id: string; metin: string }[] } {
  const basliklar: { id: string; metin: string }[] = [];
  const kullanilan = new Set<string>();
  const yeniHtml = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_m, ic) => {
    const metin = ic.replace(/<[^>]+>/g, '').trim();
    let id = slugifyTr(metin) || 'bolum';
    const taban = id;
    let n = 2;
    while (kullanilan.has(id)) id = `${taban}-${n++}`;
    kullanilan.add(id);
    basliklar.push({ id, metin });
    return `<h2 id="${id}">${ic}</h2>`;
  });
  return { html: yeniHtml, basliklar };
}

// Tüm blog yazıları build sırasında statik üretilir; listede olmayan slug → 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

// "25 Nisan 2026" → "2026-04-25" (JSON-LD datePublished için).
const AYLAR: Record<string, string> = {
  Ocak: '01', Şubat: '02', Mart: '03', Nisan: '04', Mayıs: '05', Haziran: '06',
  Temmuz: '07', Ağustos: '08', Eylül: '09', Ekim: '10', Kasım: '11', Aralık: '12',
};
function isoTarih(tr: string): string {
  const [gun, ay, yil] = tr.split(' ');
  const ayNo = AYLAR[ay] ?? '01';
  return `${yil}-${ayNo}-${gun.padStart(2, '0')}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: 'Yazı bulunamadı | Gökkuşağı Yazılım Blog' };

  const url = `${SITE}/blog/${post.slug}`;
  return {
    title: `${post.title} | Gökkuşağı Yazılım Blog`,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      type: 'article',
      publishedTime: isoTarih(post.date),
    },
  };
}

export default async function BlogYaziPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  // İlgili yazılar: aynı kategoriden diğerleri (kendisi hariç), en fazla 3.
  const ilgili = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  // İçeriği işle: h2'lere id ekle + içindekiler listesini üret.
  const { html: icerikHtml, basliklar } = icindekilerCikar(post.content);
  const icindekilerGoster = basliklar.length >= 3;

  const url = `${SITE}/blog/${post.slug}`;

  // SSS varsa FAQPage şeması üret (zengin sonuç + AI alıntısı).
  const faqJsonLd =
    post.faq && post.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faq.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }
      : null;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: isoTarih(post.date),
    dateModified: isoTarih(post.date),
    author: { '@type': 'Organization', name: 'Gökkuşağı Yazılım ve Danışmanlık' },
    publisher: {
      '@type': 'Organization',
      name: 'Gökkuşağı Yazılım ve Danışmanlık',
      logo: { '@type': 'ImageObject', url: `${SITE}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/blog/${post.slug}` },
    articleSection: post.category,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE}/blog/${post.slug}` },
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Navbar />

      <article className="max-w-3xl mx-auto px-5 pt-28 pb-16 text-gray-900">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-2 text-[13px] text-gray-500 mb-8">
          <Link href="/" className="text-blue-600 no-underline hover:underline">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/blog" className="text-blue-600 no-underline hover:underline">Blog</Link>
          <span>/</span>
          <span className="text-gray-400">{post.category}</span>
        </nav>

        {/* Kapak */}
        <BlogCover
          gradient={post.gradient}
          category={post.category}
          className="w-full h-44 sm:h-60 rounded-2xl mb-8"
          iconClassName="w-24 h-24"
        />

        {/* Başlık alanı */}
        <span className={`inline-block px-3 py-1 bg-gradient-to-r ${post.gradient} text-white rounded-full text-xs font-medium mb-4`}>
          {post.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{post.title}</h1>
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime} okuma</span>
        </div>

        {/* İçindekiler */}
        {icindekilerGoster && (
          <nav
            aria-label="İçindekiler"
            className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-3">İçindekiler</p>
            <ol className="space-y-2 list-decimal list-inside marker:text-gray-400">
              {basliklar.map((b) => (
                <li key={b.id} className="text-[15px] leading-snug">
                  <a href={`#${b.id}`} className="text-gray-700 hover:text-purple-600 transition-colors">
                    {b.metin}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* İçerik */}
        <div
          className="space-y-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:leading-tight [&>h2]:scroll-mt-28 [&>p]:text-base [&>p]:text-gray-700 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:text-gray-700 [&>li]:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: icerikHtml }}
        />

        {/* Paylaş */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <BlogShare url={url} title={post.title} />
        </div>

        {/* Sıkça Sorulan Sorular */}
        {post.faq && post.faq.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
            <div className="space-y-3">
              {post.faq.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-gray-200 bg-white overflow-hidden"
                >
                  <summary className="flex items-start gap-4 p-5 cursor-pointer list-none font-semibold text-gray-900">
                    <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{i + 1}</span>
                    <span className="flex-1">{f.question}</span>
                    <svg className="w-5 h-5 flex-shrink-0 mt-1 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-5 pb-5 pl-[4.5rem] text-gray-700 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Mikro ERP çözümleri hakkında bilgi alın</h2>
          <p className="text-gray-600 mb-5">20+ yıllık deneyimimizle işletmenize en uygun çözümü birlikte belirleyelim.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-[15px] px-7 py-3.5 rounded-xl hover:opacity-90 transition"
          >
            Ücretsiz Teklif Al
          </Link>
        </div>

        {/* İlgili yazılar */}
        {ilgili.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">İlgili Yazılar</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {ilgili.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block p-5 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition group"
                >
                  <span className={`inline-block px-2.5 py-0.5 bg-gradient-to-r ${p.gradient} text-white rounded-full text-xs font-medium mb-3`}>
                    {p.category}
                  </span>
                  <h3 className="font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
}
