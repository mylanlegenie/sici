import type { Metadata } from "next";
import AboutPage from "../component/AboutPage";

export const metadata: Metadata = {
  title: "À propos | La Sicilienne",
  description: "Horaires, coordonnées et accès à La Sicilienne.",
};

export default function About() {
  return <AboutPage />;
}
