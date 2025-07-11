import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/header";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
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
});

export const metadata: Metadata = {
  title: "Leonid Domahalskyy | Portfolio",
  description:
    "Fullstack Developer & UI/UX Designer aus Flensburg für ansprechende und moderne Webseiten.",
  keywords: [
    "Webentwicklung",
    "Fullstack Developer",
    "UI/UX Design",
    "Flensburg",
    "Portfolio",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Leonid Domahalskyy" }],
  creator: "Leonid Domahalskyy",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.leonid-domahalskyy.de",
    title: "Leonid Domahalskyy | Portfolio",
    description:
      "Fullstack Developer & UI/UX Designer aus Flensburg für ansprechende und moderne Webseiten.",
    siteName: "Leonid Domahalskyy Portfolio",
    images: [
      {
        url: "https://www.leonid-domahalskyy.de/img/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Leonid Domahalskyy Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonid Domahalskyy | Portfolio",
    description:
      "Fullstack Developer & UI/UX Designer aus Flensburg für ansprechende und moderne Webseiten.",
    creator: "@leonid_dev",
    images: ["https://www.leonid-domahalskyy.de/img/preview.jpg"],
  },
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
  other: {
    "theme-color": "#a196df",
    "msapplication-tilecolor": "#a196df",
    "format-detection": "telephone=no",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Leonid Domahalskyy",
  jobTitle: "Fullstack Developer & UI/UX Designer",
  description:
    "Webentwickler aus Flensburg für ansprechende und moderne Webseiten",
  url: "https://www.leonid-domahalskyy.de",
  image: "https://www.leonid-domahalskyy.de/img/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Flensburg",
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
    "Node.js",
    "HTML5",
    "CSS3",
    "UI/UX Design",
    "Webentwicklung",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
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
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#a196df" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        <meta name="theme-color" content="#a196df" />
        <link rel="canonical" href="https://www.leonid-domahalskyy.de" />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Preconnect for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/Hanson-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link rel="preload" href="/video/bg-video.mp4" as="video" />
        <link rel="preload" href="/img/fallback-image.webp" as="image" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-portfolio-purple focus:text-white focus:rounded focus:no-underline"
            >
              Zum Hauptinhalt springen
            </a>
            <Navigation />
            <main id="main-content" className="flex-1 relative">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
