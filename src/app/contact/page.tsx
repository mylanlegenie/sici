import type { Metadata } from "next";
import ContactPage from "../component/ContactPage";
import { OPEN_GRAPH_IMAGE } from "@/lib/site";
export const metadata: Metadata = {
  title: "Contact et horaires",
  description:
    "Horaires, téléphone et itinéraire vers La Sicilienne, 6 rue Dagorno à Paris 12e.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact et horaires | La Sicilienne",
    description:
      "Retrouvez les horaires, le téléphone et l'adresse de La Sicilienne à Paris 12e.",
    url: "/contact",
    images: [OPEN_GRAPH_IMAGE],
  },
};

export default function Contact() {
  return <ContactPage />;
}
