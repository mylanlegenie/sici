import NavBar from "./component/atoms/NavBar";
import MenuPage from "./component/MenuPage";
import AboutPage from "./component/AboutPage";
import HomePage from "./component/HomePage";
import Footer from "./component/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: "https://www.lasicilienne.fr",
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
  generator: "Next.js",

  referrer: "strict-origin-when-cross-origin",
  publisher: "Mylan Hachemane",
  category: "restaurant",
  classification: "Site de restauration",
  icons: {},
  keywords: [],
  openGraph: {
    title: "La Sicilienne - Restaurant Italien à Paris 12ème",
    description:
      "Découvrez La Sicilienne, votre restaurant italien à Paris 12ème. Savourez nos pizzas, pâtes et spécialités italiennes dans une ambiance chaleureuse. Réservez dès maintenant !",
    url: "https://www.lasicilienne.fr",
    siteName: "La Sicilienne",
    images: [],
    // À définir plus tard
  },
  twitter: {
    card: "summary_large_image",
    title: "La Sicilienne - Restaurant Italien à Paris 12ème",
    description:
      "Découvrez La Sicilienne, votre restaurant italien à Paris 12ème. Savourez nos pizzas, pâtes et spécialités italiennes dans une ambiance chaleureuse. Réservez dès maintenant !",
    images: [],
    // À définir plus tard
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
    date: false,
    url: true,
  },
  // icon: {},
  // verification:{}
  appleWebApp: {
    title: "La Sicilienne",
    statusBarStyle: "default",
    startupImage: [
      "",
      {
        url: "",
        media: "",
      },
    ],
  },
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { section, name } = await searchParams;
  const selectedName = Array.isArray(name) ? name[0] : name;

  return (
    <main className="bg-red-500 pb-6">
      <NavBar />
      {section === "about" ? (
        <AboutPage />
      ) : section === "menu" ? (
        <MenuPage selectedName={selectedName} section={section} />
      ) : (
        <HomePage />
      )}
      <Footer />
    </main>
  );
}
