import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import NavBar from "../app/component/atoms/NavBar";
import Footer from "../app/component/Footer";
import JsonLd from "./component/JsonLd";
import {
  absoluteUrl,
  RESTAURANT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "La Sicilienne | Pizzeria à Paris 12e",
    template: "%s | La Sicilienne",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "restaurant",
  keywords: [
    "pizzeria Paris 12",
    "restaurant italien Paris 12",
    "pizza rue Dagorno",
    "pizza Nation",
    "La Sicilienne Paris",
  ],
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    title: "La Sicilienne | Pizzeria à Paris 12e",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/pizza-slide-1.webp",
        width: 842,
        height: 702,
        alt: "Pizza de La Sicilienne à Paris 12e",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Sicilienne | Pizzeria à Paris 12e",
    description: SITE_DESCRIPTION,
    images: ["/pizza-slide-1.webp"],
  },
  verification: {
    google: "px9hkNhlmh8TeD1PbYDXbTKX0a5TicN4joQoVkWNmg0",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#restaurant` },
    },
    {
      "@type": ["Restaurant", "LocalBusiness"],
      "@id": `${SITE_URL}/#restaurant`,
      name: RESTAURANT.name,
      url: SITE_URL,
      image: [
        absoluteUrl("/pizza-slide-1.webp"),
        absoluteUrl("/pizza-slide-2.webp"),
      ],
      telephone: RESTAURANT.telephone,
      priceRange: RESTAURANT.priceRange,
      servesCuisine: ["Italienne", "Pizza", "Tex-Mex"],
      address: {
        "@type": "PostalAddress",
        streetAddress: RESTAURANT.streetAddress,
        postalCode: RESTAURANT.postalCode,
        addressLocality: RESTAURANT.addressLocality,
        addressCountry: RESTAURANT.addressCountry,
      },
      hasMenu: absoluteUrl("/menu/pizza"),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "12:00",
          closes: "22:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "18:00",
          closes: "22:30",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={cn(
        "h-full antialiased overscroll-none",
        "font-sans",
        geist.variable,
      )}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="50x50" />
      </head>
      <body className="min-h-full flex flex-col bg-red-500">
        <JsonLd data={structuredData} />
        <header className="h-20 flex w-full justify-between items-center mt-10">
          <NavBar />
        </header>
        <main className="pb-6">{children}</main>
        <footer className="mx-auto w-full border-t border-white/20 py-6 px-5 text-sm text-white/70 bg-red-500">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
