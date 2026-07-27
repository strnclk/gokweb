import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import GravityParticlesClient from "@/components/GravityParticlesClient";
import ScrollToTop from "@/components/ScrollToTop";
import SiteBreadcrumb from "@/components/SiteBreadcrumb";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Gökkuşağı Yazılım ve Danışmanlık | Anadolu Yakası Mikro Bayi | ERP CRM Çözümleri",
  description:
    "Anadolu Yakası'nda resmi Mikro bayi olarak ERP hizmeti, CRM çözümleri, Mikro program entegrasyonu ve özel yazılım geliştirme hizmetleri. Ataşehir'den tüm Türkiye'ye hizmet.",
  keywords:
    "Anadolu yakası mikro bayi, mikro program, ERP hizmeti, CRM çözümleri, Mikro ERP, Ataşehir mikro bayi, İstanbul mikro bayi, ERP entegrasyonu, Mikro entegrasyon, özel yazılım, IT danışmanlık, e-dönüşüm",
  authors: [{ name: "Gökkuşağı Yazılım ve Danışmanlık" }],
  creator: "Gökkuşağı Yazılım ve Danışmanlık",
  publisher: "Gökkuşağı Yazılım ve Danışmanlık",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

  openGraph: {
    title:
      "Gökkuşağı Yazılım ve Danışmanlık | Anadolu Yakası Mikro Bayi",
    description:
      "ERP, CRM ve Mikro entegrasyon çözümleri. Ataşehir merkezli hizmet.",
    url: "https://gokkusagiyazilim.com.tr",
    siteName: "Gökkuşağı Yazılım",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://gokkusagiyazilim.com.tr/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gökkuşağı Yazılım - Resmi Mikro İş Ortağı",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gökkuşağı Yazılım",
    description: "ERP ve Mikro çözümleri",
    images: ["https://gokkusagiyazilim.com.tr/og-image.png"],
  },

  verification: {
    google: "OpgQfaWMQ_GN6TYB-YpXrkzGPFqvUYVc1MVMg1MgHT4",
  },

  alternates: {
    canonical: "https://gokkusagiyazilim.com.tr",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gökkuşağı Yazılım ve Danışmanlık",
  url: "https://gokkusagiyazilim.com.tr",
  logo: "https://gokkusagiyazilim.com.tr/logo.png",
  description: "Anadolu Yakası'nda resmi Mikro bayi olarak ERP hizmeti, CRM çözümleri, Mikro program entegrasyonu ve özel yazılım geliştirme hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ataşehir",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+905398563578",
    contactType: "sales",
  },
  sameAs: ["https://www.linkedin.com/company/gokkusagiyazilim"],
  serviceArea: [
    {
      "@type": "City",
      name: "Adalar"
    },
    {
      "@type": "City",
      name: "Arnavutköy"
    },
    {
      "@type": "City",
      name: "Avcılar"
    },
    {
      "@type": "City",
      name: "Bağcılar"
    },
    {
      "@type": "City",
      name: "Bahçelievler"
    },
    {
      "@type": "City",
      name: "Bakırköy"
    },
    {
      "@type": "City",
      name: "Başakşehir"
    },
    {
      "@type": "City",
      name: "Bayrampaşa"
    },
    {
      "@type": "City",
      name: "Beşiktaş"
    },
    {
      "@type": "City",
      name: "Beyoğlu"
    },
    {
      "@type": "City",
      name: "Büyükçekmece"
    },
    {
      "@type": "City",
      name: "Çatalca"
    },
    {
      "@type": "City",
      name: "Çekmeköy"
    },
    {
      "@type": "City",
      name: "Esenler"
    },
    {
      "@type": "City",
      name: "Esenyurt"
    },
    {
      "@type": "City",
      name: "Eyüpsultan"
    },
    {
      "@type": "City",
      name: "Fatih"
    },
    {
      "@type": "City",
      name: "Gaziosmanpaşa"
    },
    {
      "@type": "City",
      name: "Güngören"
    },
    {
      "@type": "City",
      name: "Kağıthane"
    },
    {
      "@type": "City",
      name: "Kartal"
    },
    {
      "@type": "City",
      name: "Küçükçekmece"
    },
    {
      "@type": "City",
      name: "Maltepe"
    },
    {
      "@type": "City",
      name: "Pendik"
    },
    {
      "@type": "City",
      name: "Sancaktepe"
    },
    {
      "@type": "City",
      name: "Sarıyer"
    },
    {
      "@type": "City",
      name: "Şile"
    },
    {
      "@type": "City",
      name: "Silivri"
    },
    {
      "@type": "City",
      name: "Sultanbeyli"
    },
    {
      "@type": "City",
      name: "Sultangazi"
    },
    {
      "@type": "City",
      name: "Şişli"
    },
    {
      "@type": "City",
      name: "Tuzla"
    },
    {
      "@type": "City",
      name: "Zeytinburnu"
    },
    {
      "@type": "City",
      name: "Ataşehir"
    },
    {
      "@type": "City",
      name: "Beylikdüzü"
    },
    {
      "@type": "City",
      name: "Kadıköy"
    },
    {
      "@type": "City",
      name: "Üsküdar"
    },
    {
      "@type": "City",
      name: "Ümraniye"
    }
  ],
  areaServed: {
    "@type": "City",
    name: "İstanbul"
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50"
  }
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: "https://gokkusagiyazilim.com.tr"
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={poppins.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body className="min-h-screen font-poppins antialiased">
        {/* Google Analytics (GA4) + Google Ads artık AnalyticsProvider içinde,
            YALNIZCA çerez onayı verildikten sonra yükleniyor (KVKK/GDPR uyumu). */}

        {/* ✅ JSON-LD doğru yerde */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ✅ BreadcrumbList JSON-LD */}
        <Script
          id="breadcrumb-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>

        {/* Site geneli breadcrumb — her sayfada navbar altında SABİT konum.
            Eşleşmeyen rotalarda (anasayfa, ilçe, blog yazısı) kendini gizler. */}
        <SiteBreadcrumb />

        {/* Tüm sayfalarda: aşağı inince görünen "yukarı çık" butonu */}
        <ScrollToTop />
      </body>
    </html>
  );
}