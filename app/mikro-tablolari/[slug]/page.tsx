import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  getTabloBySlug,
  getTumSluglar,
  getFkSlugHaritasi,
  getGidenLinkli,
  getAyniModul,
  faqUret,
  sqlOrnekleriUret,
} from '@/lib/mikro-tablolari';
import TabloDetay from './TabloDetay';

const SITE = 'https://gokkusagiyazilim.com.tr';

// Tüm tablolar build sırasında statik üretilir; listede olmayan slug → 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getTumSluglar().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = getTabloBySlug(slug);
  if (!t) return { title: 'Tablo bulunamadı | Mikro Tablolar' };

  const desc = `Mikro V16 ${t.db} tablosu (${t.tr}): ${t.alan_sayisi} alan, birincil anahtar ${
    t.pk || '—'
  }. Alan yapısı, indeksler, ilişkiler ve SQL örnekleriyle teknik dokümantasyon.`;
  const url = `${SITE}/mikro-tablolari/${t.slug}`;

  return {
    title: `${t.db} Tablosu | Mikro V16 ${t.tr} | Gökkuşağı Yazılım`,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${t.db} - Mikro V16 Tablo Yapısı`,
      description: desc,
      url,
      type: 'article',
    },
  };
}

export default async function TabloDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tablo = getTabloBySlug(slug);
  if (!tablo) notFound();

  const fkSlugHaritasi = getFkSlugHaritasi(tablo);
  const gidenLinkli = getGidenLinkli(tablo);
  const { liste: ayniModul, fazla: ayniModulFazla } = getAyniModul(tablo);
  const faqlar = faqUret(tablo);
  const sqlOrnekleri = sqlOrnekleriUret(tablo);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqlar.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: (f.a + (f.code ? ' ' + f.code : '')).replace(/<[^>]+>/g, ''),
      },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Mikro Tablolar',
        item: `${SITE}/mikro-tablolari`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: tablo.modul,
        item: `${SITE}/mikro-tablolari`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: tablo.db,
        item: `${SITE}/mikro-tablolari/${tablo.slug}`,
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <TabloDetay
        tablo={tablo}
        fkSlugHaritasi={fkSlugHaritasi}
        gidenLinkli={gidenLinkli}
        ayniModul={ayniModul}
        ayniModulFazla={ayniModulFazla}
        faqlar={faqlar}
        sqlOrnekleri={sqlOrnekleri}
      />
      <Footer />
    </div>
  );
}
