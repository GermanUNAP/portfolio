import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ScrollEffects } from "@/components/ScrollEffects";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const title = `${siteConfig.name} | ${siteConfig.role} en Puno, Perú`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.name,
  category: "technology",
  keywords: [
    "German Chura",
    "German Oliver Chura Condori",
    "desarrollador full stack Puno",
    "desarrollador web Puno",
    "ingeniero de sistemas Puno",
    "React",
    "Next.js",
    "Laravel",
    "NestJS",
    "React Native",
    "Perdido app",
    "En Camino",
    "COAR Puno",
    "portafolio desarrollador Perú",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "es_PE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description: siteConfig.shortDescription,
    firstName: "German",
    lastName: "Chura Condori",
    username: "GermanUNAP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.role} en Puno, Perú`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.shortDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#070f1d" },
  ],
};

const themeInit = `(function(){try{var s=localStorage.getItem("theme");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");var r=document.documentElement;r.dataset.theme=t;r.style.colorScheme=t;if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&"IntersectionObserver" in window){r.classList.add("reveal-ready");}}catch(e){}})();`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.fullName,
      alternateName: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}/german-chura.jpg`,
      email: `mailto:${siteConfig.email}`,
      jobTitle: siteConfig.role,
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Puno",
        addressRegion: "Puno",
        addressCountry: "PE",
      },
      sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Universidad Nacional del Altiplano",
        },
        {
          "@type": "HighSchool",
          name: "COAR Puno",
        },
      ],
      worksFor: {
        "@type": "Organization",
        name: "En Camino",
        url: siteConfig.links.encamino,
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Laravel",
        "NestJS",
        "Node.js",
        "React Native",
        "Firebase",
        "SQL",
        "Desarrollo web",
        "Desarrollo móvil",
      ],
      knowsLanguage: ["es", "qu", "en"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "es-PE",
      author: {
        "@id": `${siteConfig.url}/#person`,
      },
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profile`,
      url: siteConfig.url,
      name: title,
      description: siteConfig.description,
      inLanguage: "es-PE",
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      mainEntity: {
        "@id": `${siteConfig.url}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${sora.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <div className="scroll-progress" aria-hidden="true" />
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Header />
        {children}
        <Footer />
        <ScrollEffects />
        <JsonLd data={structuredData} />
      </body>
    </html>
  );
}
