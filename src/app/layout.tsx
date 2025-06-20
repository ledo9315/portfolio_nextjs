import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

// Font-Optimierungen mit preload
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const hanson = localFont({
  src: [
    {
      path: "../../public/fonts/Hanson-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-hanson",
  display: "swap",
  preload: true,
  fallback: ["Impact", "Arial Black", "sans-serif"],
});

// Erweiterte Metadata für bessere SEO
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.leonid-domahalskyy.de"
  ),
  title: {
    default: "Leonid Domahalskyy | Fullstack Developer & UI/UX Designer",
    template: "%s | Leonid Domahalskyy Portfolio",
  },
  description:
    "Erfahrener Fullstack Developer & UI/UX Designer aus Flensburg. Spezialisiert auf moderne Webentwicklung mit React, Next.js, TypeScript und ansprechendes Design.",
  keywords: [
    "Leonid Domahalskyy",
    "Fullstack Developer",
    "UI/UX Designer",
    "Webentwicklung",
    "React",
    "Next.js",
    "TypeScript",
    "Flensburg",
    "Portfolio",
    "JavaScript",
    "Frontend",
    "Backend",
    "Responsive Design",
  ],
  authors: [
    { name: "Leonid Domahalskyy", url: "https://www.leonid-domahalskyy.de" },
  ],
  creator: "Leonid Domahalskyy",
  publisher: "Leonid Domahalskyy",
  applicationName: "Leonid Domahalskyy Portfolio",
  generator: "Next.js",

  // Enhanced OpenGraph
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.leonid-domahalskyy.de",
    title: "Leonid Domahalskyy | Fullstack Developer & UI/UX Designer",
    description:
      "Erfahrener Fullstack Developer & UI/UX Designer aus Flensburg für moderne und ansprechende Webseiten.",
    siteName: "Leonid Domahalskyy Portfolio",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Leonid Domahalskyy - Fullstack Developer & UI/UX Designer",
        type: "image/jpeg",
      },
    ],
  },

  // Enhanced Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Leonid Domahalskyy | Fullstack Developer & UI/UX Designer",
    description:
      "Erfahrener Fullstack Developer & UI/UX Designer aus Flensburg für moderne und ansprechende Webseiten.",
    creator: "@leonid_dev",
    images: ["/img/og-image.jpg"],
  },

  // Erweiterte Robots-Einstellungen
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification Tags
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },

  // Kategorie und Klassifizierung
  category: "portfolio",
  classification: "business",

  other: {
    "theme-color": "#a196df",
    "msapplication-tilecolor": "#a196df",
    "msapplication-navbutton-color": "#a196df",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
    "format-detection": "telephone=no",
    "revisit-after": "7 days",
    rating: "general",
    distribution: "global",
  },
};

// Enhanced Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.leonid-domahalskyy.de/#person",
  name: "Leonid Domahalskyy",
  givenName: "Leonid",
  familyName: "Domahalskyy",
  jobTitle: ["Fullstack Developer", "UI/UX Designer"],
  description:
    "Erfahrener Fullstack Developer und UI/UX Designer aus Flensburg, spezialisiert auf moderne Webentwicklung und ansprechendes Design",
  url: "https://www.leonid-domahalskyy.de",
  image: {
    "@type": "ImageObject",
    url: "https://www.leonid-domahalskyy.de/img/og-image.jpg",
    width: 1200,
    height: 630,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Flensburg",
    addressRegion: "Schleswig-Holstein",
    addressCountry: "DE",
  },
  sameAs: [
    "https://github.com/ledo9315",
    "https://www.linkedin.com/in/leonid-domahalskyy-0a6b95206",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "HTML5",
    "CSS3",
    "UI/UX Design",
    "Responsive Design",
    "Webentwicklung",
    "Frontend Development",
    "Backend Development",
    "Fullstack Development",
  ],
  workLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Flensburg",
      addressCountry: "DE",
    },
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Fullstack Developer",
    occupationLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Flensburg",
        addressCountry: "DE",
      },
    },
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* Prefetch DNS für externe Ressourcen */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//identity.netlify.com" />
        <link rel="dns-prefetch" href="//vitals.vercel-analytics.com" />

        {/* Preconnect für kritische Ressourcen */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Preload kritischer Ressourcen */}
        <link
          rel="preload"
          href="/fonts/Hanson-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/videos/bg-video.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="/img/fallback-image.webp"
          as="image"
          type="image/webp"
        />

        {/* Favicon und App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.leonid-domahalskyy.de" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Netlify Identity Widget */}
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${montserrat.variable} ${hanson.variable} font-montserrat antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative flex min-h-screen flex-col">
            {/* Skip to main content link für Accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-purple focus:text-white focus:rounded focus:no-underline focus:outline-none focus:ring-2 focus:ring-white"
            >
              Zum Hauptinhalt springen
            </a>

            <Navigation />
            <main id="main-content" className="flex-1">
              {modal}
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>

        {/* Analytics - nur in Production */}
        <Analytics />

        {/* Netlify Identity Handler */}
        <Script id="netlify-identity-redirect" strategy="afterInteractive">
          {`
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
