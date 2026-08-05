import PlatDetailsPage from "../../../component/PlatDetailsPage";
import { desserts } from "../../../plat";
import { toSlug } from "@/lib/slug";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    nom: string;
  }>;
};

export function generateStaticParams() {
  return desserts.map((dessert) => ({
    nom: toSlug(dessert.name),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { nom } = await params;
  const dessert = desserts.find((item) => toSlug(item.name) === toSlug(nom));

  if (!dessert) return {};

  return {
    title: `${dessert.name} | La Sicilienne`,
    description: `Découvrez le dessert ${dessert.name} de La Sicilienne, restaurant italien à Paris 12ème.`,
    alternates: { canonical: `/menu/dessert/${toSlug(dessert.name)}` },
  };
}

export default async function Dessert({ params }: PageProps) {
  const { nom } = await params;
  if (!desserts.some((dessert) => toSlug(dessert.name) === toSlug(nom))) notFound();

  return <PlatDetailsPage name={nom} />;
}
