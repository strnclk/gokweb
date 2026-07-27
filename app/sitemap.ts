import { MetadataRoute } from 'next'
import { getTumSluglar } from '@/lib/mikro-tablolari'
import { allBlogPosts } from '@/lib/blog'

export const dynamic = 'force-static'

// Blog yazılarının Türkçe tarihini ("25 Nisan 2026") gerçek Date'e çevirir.
// Böylece her yazı sitemap'te kendi yayın tarihini taşır (gerçek tazelik sinyali).
const TR_AYLAR: Record<string, number> = {
  ocak: 0, 'şubat': 1, mart: 2, nisan: 3, 'mayıs': 4, haziran: 5,
  temmuz: 6, 'ağustos': 7, 'eylül': 8, ekim: 9, 'kasım': 10, 'aralık': 11,
}
function trTarihToDate(s: string, yedek: Date): Date {
  const m = s.trim().toLowerCase().match(/^(\d{1,2})\s+([a-zçğıöşü]+)\s+(\d{4})$/)
  if (!m) return yedek
  const ay = TR_AYLAR[m[2]]
  if (ay === undefined) return yedek
  return new Date(Number(m[3]), ay, Number(m[1]))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gokkusagiyazilim.com.tr'

  // Sabit tarih: her build'de "bugün güncellendi" sinyali vermemek için.
  // İçerik gerçekten değiştiğinde bu tarihi elle güncelleyin.
  const lastModified = new Date('2026-06-30')

  // Görsel sitemap: sayfayla ilişkili logo/görseller Google Görseller dizinine bildirilir.
  const gorsel = (dosyalar: string[]) => dosyalar.map((d) => `${baseUrl}${d}`)

  const staticPages = [
    { url: baseUrl, lastModified, changeFrequency: 'daily' as const, priority: 1, images: gorsel(['/logo.png', '/mikro-run-logo.png', '/mikro-jump-logo.png', '/mikro-fly-logo.png']) },
    { url: `${baseUrl}/solutions`, lastModified, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/eflow`, lastModified, changeFrequency: 'weekly' as const, priority: 0.9, images: gorsel(['/eflow3-logo.png', '/eflow_hero_isometric.jpg']) },
    { url: `${baseUrl}/eflow-surecleri`, lastModified, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/eflow-bpm`, lastModified, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/eflow-dms`, lastModified, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/custom-software`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/maintenance`, lastModified, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/mikro-fly`, lastModified, changeFrequency: 'weekly' as const, priority: 0.9, images: gorsel(['/mikro-fly-logo.png', '/mikrofly.webp']) },
    { url: `${baseUrl}/mikro-jump`, lastModified, changeFrequency: 'weekly' as const, priority: 0.9, images: gorsel(['/mikro-jump-logo.png', '/mikrojump.webp']) },
    { url: `${baseUrl}/mikro-run`, lastModified, changeFrequency: 'weekly' as const, priority: 0.9, images: gorsel(['/mikro-run-logo.png', '/mikrorun.webp']) },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/compare`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7, images: gorsel(['/mikro-run-logo.png', '/mikro-jump-logo.png', '/mikro-fly-logo.png']) },
    { url: `${baseUrl}/destek-baglantilari`, lastModified, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/sectoral-solutions`, lastModified, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/featured-works`, lastModified, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/vertical-solutions`, lastModified, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/crm-cozumleri`, lastModified, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/gizlilik`, lastModified, changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: `${baseUrl}/kullanim`, lastModified, changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: `${baseUrl}/cerezler`, lastModified, changeFrequency: 'monthly' as const, priority: 0.3 },
  ]

  const districtPages = [
    'atasehir-mikro-bayi',
    'beylikduzu-mikro-bayi',
    'kadikoy-mikro-bayi',
    'uskudar-mikro-bayi',
    'umraniye-mikro-bayi',
    'adalar-mikro-bayi',
    'arnavutkoy-mikro-bayi',
    'avcilar-mikro-bayi',
    'bagcilar-mikro-bayi',
    'bahcelievler-mikro-bayi',
    'bakirkoy-mikro-bayi',
    'basaksehir-mikro-bayi',
    'bayrampasa-mikro-bayi',
    'besiktas-mikro-bayi',
    'beykoz-mikro-bayi',
    'beyoglu-mikro-bayi',
    'buyukcekmece-mikro-bayi',
    'catalca-mikro-bayi',
    'cekmekoy-mikro-bayi',
    'esenler-mikro-bayi',
    'esenyurt-mikro-bayi',
    'eyupsultan-mikro-bayi',
    'fatih-mikro-bayi',
    'gaziosmanpasa-mikro-bayi',
    'gungoren-mikro-bayi',
    'kagithane-mikro-bayi',
    'kartal-mikro-bayi',
    'kucukcekmece-mikro-bayi',
    'maltepe-mikro-bayi',
    'pendik-mikro-bayi',
    'sancaktepe-mikro-bayi',
    'sariyer-mikro-bayi',
    'sile-mikro-bayi',
    'silivri-mikro-bayi',
    'sultanbeyli-mikro-bayi',
    'sultangazi-mikro-bayi',
    'sisli-mikro-bayi',
    'tuzla-mikro-bayi',
    'zeytinburnu-mikro-bayi',
  ].map((district) => ({
    url: `${baseUrl}/${district}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Blog yazıları — lib/blog tek kaynağından dinamik (gerçek /blog/[slug] sayfaları).
  // Her yazı kendi yayın tarihini lastModified olarak taşır (gerçek güncellik sinyali).
  const blogPosts = allBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: trTarihToDate(post.date, lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const mikroTabloListe = [
    {
      url: `${baseUrl}/mikro-tablolari`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Mikro Tablolar — 438 tablo sayfası veriden otomatik üretilir.
  const mikroTabloPages = getTumSluglar().map((slug) => ({
    url: `${baseUrl}/mikro-tablolari/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const tumSayfalar = [
    ...staticPages,
    ...districtPages,
    ...blogPosts,
    ...mikroTabloListe,
    ...mikroTabloPages,
  ]

  // trailingSlash: true ile uyum: canonical'lar sonda "/" taşıdığından
  // sitemap URL'leri de aynı biçimde olsun (tutarlılık, gereksiz yönlendirme yok).
  return tumSayfalar.map((sayfa) => ({
    ...sayfa,
    url: sayfa.url.endsWith('/') ? sayfa.url : `${sayfa.url}/`,
  }))
}
