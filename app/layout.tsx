import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gökkusagi Yazilim ve Danismanlik | Anadolu Yakasi Mikro Bayii | ERP CRM Çözümleri",
  description: "Anadolu Yakasi'nda resmi Mikro bayii olarak ERP hizmeti, CRM çözümleri, Mikro program entegrasyonu ve özel yazilim gelistirme hizmetleri. Ataehir'den tüm Türkiye'ye hizmet.",
  keywords: "Anadolu yakasi mikro bayii, mikro program, ERP hizmeti, CRM çözümleri, Mikro ERP, Ataehir mikro bayii, Istanbul mikro bayii, ERP entegrasyonu, Mikro entegrasyon, özel yazilim, IT danismanlik, e-dönüsüm, mikro yazilim bayii, mikro muhasebe programi, mikro v3, mikro 14, mikro ERP fiyat",
  authors: [{ name: "Gökkusagi Yazilim ve Danismanlik" }],
  creator: "Gökkusagi Yazilim ve Danismanlik",
  publisher: "Gökkusagi Yazilim ve Danismanlik",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Gökkusagi Yazilim ve Danismanlik | Anadolu Yakasi Mikro Bayii | ERP CRM Çözümleri",
    description: "Anadolu Yakasi'nda resmi Mikro bayii olarak ERP hizmeti, CRM çözümleri ve Mikro program entegrasyonu hizmetleri. Ataehir'den hizmet veriyoruz.",
    url: "https://gokkusagiyazilim.com.tr",
    siteName: "Gökkusagi Yazilim ve Danismanlik",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://gokkusagiyazilim.com.tr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gökkusagi Yazilim - Anadolu Yakasi Mikro Bayii",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gökkusagi Yazilim ve Danismanlik | Anadolu Yakasi Mikro Bayii | ERP CRM Çözümleri",
    description: "Anadolu Yakasi'nda resmi Mikro bayii. Mikro program sati, ERP hizmeti, CRM çözümleri.",
    images: ["https://gokkusagiyazilim.com.tr/twitter-image.jpg"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gökkusagi Yazilim ve Danismanlik",
  url: "https://gokkusagiyazilim.com.tr",
  logo: "https://gokkusagiyazilim.com.tr/logo.png",
  description: "Anadolu Yakasi'nda resmi Mikro bayii olarak ERP hizmeti, CRM çözümleri, Mikro program entegrasyonu ve özel yazilim gelistirme hizmetleri.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "içerenköy Mah. Eryilmazlar Sokak No:2 Kemal Bey Is Merkezi Kat:4 Daire:18",
    addressLocality: "Atasehir",
    addressRegion: "Istanbul",
    postalCode: "34746",
    addressCountry: "TR"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+905398563578",
    contactType: "sales",
    availableLanguage: "Turkish"
  },
  areaServed: [
    "Istanbul",
    "Anadolu Yakasi",
    "Atasehir",
    "Kadikoy",
    "Uskudar",
    "Maltepe",
    "Kartal",
    "Pendik",
    "Sancaktepe",
    "Sultanbeyli",
    "Tuzla",
    "Çekmeköy"
  ],
  serviceType: [
    "ERP hizmeti",
    "CRM çözümleri",
    "Mikro program sati ve destek",
    "Özel yazilim gelistirme",
    "IT danismanlik",
    "e-dönüsüm çözümleri"
  ],
  keywords: "Anadolu yakasi mikro bayii, mikro program, ERP hizmeti, CRM çözümleri, Mikro ERP, Atasehir mikro bayii",
  sameAs: [
    "https://www.linkedin.com/company/gokkusagiyazilim"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}
