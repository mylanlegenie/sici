import HomePage from "./component/HomePage";
import type { Metadata } from "next";
import { OPEN_GRAPH_IMAGE, SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pizzeria et restaurant italien à Paris 12e",
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "La Sicilienne | Pizzeria et restaurant italien à Paris 12e",
    description: SITE_DESCRIPTION,
    url: "/",
    images: [OPEN_GRAPH_IMAGE],
  },
};

export default function Home() {
  return <HomePage />;
}
