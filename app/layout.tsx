import type { Metadata, Viewport } from "next";
import { Unbounded, Onest } from "next/font/google";
import "./globals.css";
import "./site.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealRoot } from "@/components/RevealRoot";
import { site } from "@/content/site";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-unbounded", display: "swap" });
const onest = Onest({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-onest", display: "swap" });

// Placeholder origin for absolute OG URLs; replace with the production domain at launch.
const BASE = "https://bendie-demo.junestudio.nl";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Jachtwerf Bendie · Vakmanschap aan de Maas sinds 1977",
    template: "%s · Jachtwerf Bendie",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: site.name,
    title: "Jachtwerf Bendie · Vakmanschap aan de Maas",
    description: site.description,
    images: [{ url: "/media/hero-impressive-2200-1400.jpg", width: 1400, height: 1019, alt: "De Bendie Impressive 2200 op de Maas" }],
  },
  robots: { index: false, follow: false }, // demo: niet indexeren tot livegang
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#102632", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#werf`,
  name: site.legalName,
  alternateName: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  image: `${BASE}/media/hero-impressive-2200-1400.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    postalCode: site.postalCode,
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "NL",
  },
  memberOf: { "@type": "Organization", name: "Nederlandse Jachtbouw Industrie (NJI)", url: "https://jachtbouw.nl" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${unbounded.variable} ${onest.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#inhoud" className="skip">Naar de inhoud</a>
        <Header />
        <main id="inhoud">{children}</main>
        <Footer />
        <RevealRoot />
      </body>
    </html>
  );
}
