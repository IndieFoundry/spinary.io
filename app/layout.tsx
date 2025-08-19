import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Spinary - Générateur de contenus SEO uniques par IA | Zéro duplication",
  description:
    "Créez des milliers de contenus SEO uniques avec Spinary. IA spécialisée, variables dynamiques, import CSV. Zéro duplication.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  keywords:
    "génération contenu SEO, contenu unique masse, assistant IA SEO, zéro duplication, variables dynamiques, content spinning, génération automatique texte, SEO automation, fiches produits uniques, pages locales SEO",
  authors: [{ name: "Spinary" }],
  creator: "Spinary",
  publisher: "Spinary",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Spinary - Générez des milliers de contenus SEO uniques sans duplication",
    description:
      "L'assistant IA qui génère instantanément des milliers de contenus uniques optimisés SEO. Import CSV, variables dynamiques, score d'unicité 99,7%. Créer un compte.",
    url: "https://spinary.io",
    siteName: "Spinary",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://spinary.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spinary - Générateur de contenus SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spinary - Générez des milliers de contenus SEO uniques",
    description:
      "Assistant IA pour générer des milliers de contenus SEO uniques en masse. Zéro duplication. Créer un compte.",
    images: ["https://spinary.io/twitter-image.jpg"],
    creator: "@spinary_io",
  },
  alternates: {
    canonical: "https://spinary.io",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#6366f1",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Spinary",
  url: "https://spinary.io",
  logo: "https://spinary.io/logo.png",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "SEO Content Generation",
  operatingSystem: "Web-based",
  description:
    "Plateforme SaaS de génération de contenus SEO uniques en masse par intelligence artificielle. Créez des milliers de textes optimisés sans duplication pour vos fiches produits, pages locales et contenus marketing.",
  featureList: [
    "Génération de contenus uniques",
    "Variables dynamiques et import CSV",
    "Templates personnalisables",
    "API Claude Sonnet 4 et OpenAI GPT-4 intégrée",
    "Export en masse",
    "Score d'unicité en temps réel",
    "Gestion des crédits pay-as-you-go",
  ],
  softwareVersion: "1.0",
  offers: [
    {
      "@type": "Offer",
      name: "Pack Starter - 100 générations",
      price: "8.00",
      priceCurrency: "EUR",
      priceValidUntil: "2025-12-31",
    },
    {
      "@type": "Offer",
      name: "Pack Business - 500 générations",
      price: "35.00",
      priceCurrency: "EUR",
      priceValidUntil: "2025-12-31",
    },
    {
      "@type": "Offer",
      name: "Pack Scale - 2000 générations",
      price: "120.00",
      priceCurrency: "EUR",
      priceValidUntil: "2025-12-31",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "347",
    bestRating: "5",
    worstRating: "1",
  },
  publisher: {
    "@type": "Organization",
    name: "Spinary SAS",
    url: "https://spinary.io",
    logo: "https://spinary.io/logo.png",
  },
  potentialAction: {
    "@type": "ViewAction",
    target: "https://app.spinary.io/auth/signup",
    name: "Créer un compte",
  },
  softwareRequirements:
    "Navigateur web moderne (Chrome, Firefox, Safari, Edge)",
  datePublished: "2024-01-15",
  dateModified: "2024-08-17",
  keywords:
    "génération contenu SEO, content spinning, IA SEO, contenu unique, variables dynamiques, automatisation SEO",
  inLanguage: ["fr", "en"],
  audience: {
    "@type": "Audience",
    audienceType:
      "SEO professionals, E-commerce managers, Content marketers, Digital agencies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          defer
          data-domain="spinary.io"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
