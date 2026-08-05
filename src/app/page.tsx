import HomePage from "./component/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
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
  title: "La Sicilienne - Restaurant Italien à Paris 12ème",
  description:
    "Découvrez La Sicilienne, votre restaurant italien à Paris 12ème. Savourez nos pizzas, pâtes et spécialités italiennes dans une ambiance chaleureuse. Réservez dès maintenant !",
  applicationName: "La Sicilienne",
  authors: [{ name: "Mylan Hachemane" }],
  creator: "Mylan Hachemane",
  referrer: "strict-origin-when-cross-origin",
  publisher: "Mylan Hachemane",
  category: "restaurant",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "La Sicilienne - Restaurant Italien à Paris 12ème",
    description:
      "Découvrez La Sicilienne, votre restaurant italien à Paris 12ème. Savourez nos pizzas, pâtes et spécialités italiennes dans une ambiance chaleureuse. Réservez dès maintenant !",
    url: "https://www.lasicilienne.fr",
    siteName: "La Sicilienne",
  },
};

const restaurantStructuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://www.lasicilienne.fr/#restaurant",
  name: "La Sicilienne",
  url: "https://www.lasicilienne.fr",
  telephone: "+33153330333",
  servesCuisine: ["Italienne", "Pizza", "Tex-Mex"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 rue Dagorno",
    postalCode: "75012",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
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
        "Sunday",
      ],
      opens: "12:00",
      closes: "22:30",
    },
  ],
  hasMenu: "https://www.lasicilienne.fr/menu/pizza",
  sameAs: [
    "https://www.tripadvisor.fr/Restaurant_Review-g187147-d12326598-Reviews-La_Sicilienne_Pizzeria-Paris_Ile_de_France.html",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <HomePage />
    </>
  );
}
