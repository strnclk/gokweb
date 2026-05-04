import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gokkusagiyazilim.com.tr'
  
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/solutions`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/gib`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/eflow`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/eflow-detail`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/eflow-bpm`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/eflow-dms`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/custom-software`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/it-consulting`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/maintenance`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/mikro-fly`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/mikro-jump`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/mikro-run`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/compare`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/sectoral-solutions`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/featured-works`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/vertical-solutions`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/crm-cozumleri`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/gizlilik`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: `${baseUrl}/kullanim`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: `${baseUrl}/cerezler`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.3 },
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
    'anadolu-yakasi-mikro-bayii',
  ].map((district) => ({
    url: `${baseUrl}/${district}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const blogPosts = [
    'erp-sistemleri-2026-trendleri-yapay-zeka-bulut-dijital-donusum',
    'e-fatura-gecis-sureci-kobiler-icin-kilavuz',
    'mikro-erp-kullanim-avantajlari',
    'insaat-sektoru-erp-cozumleri',
    'e-defter-kayit-sistemi-nedir',
    'dijital-donusumde-5-anahtar',
    'mikro-fly-vs-jump-vs-run-karsilastirmasi',
    'uretim-sektorunde-stok-yonetimi',
    'kobi-icin-erp-secim-rehberi',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...districtPages, ...blogPosts]
}
