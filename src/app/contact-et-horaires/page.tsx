import type { Metadata } from "next";
import ContactPage from "../component/ContactPage";
export const metadata: Metadata = {
  title: "Contact et Horaires | La Sicilienne",
  description: "Horaires, coordonnées et accès à La Sicilienne.",
};

export default function Contact() {
  return <ContactPage />;
}
