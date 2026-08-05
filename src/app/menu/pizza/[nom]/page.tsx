import PlatDetailsPage from "../../../component/PlatDetailsPage";
import { pizzas } from "../../../plat";
import { toSlug } from "@/lib/slug";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    nom: string;
  }>;
};

export function generateStaticParams() {
  return pizzas.map((pizza) => ({
    nom: toSlug(pizza.name),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { nom } = await params;
  const pizza = pizzas.find((item) => toSlug(item.name) === toSlug(nom));

  if (!pizza) return {};

  return {
    title: `${pizza.name} | La Sicilienne`,
    description: `Découvrez la pizza ${pizza.name} de La Sicilienne, restaurant italien à Paris 12ème.`,
    alternates: { canonical: `/menu/pizza/${toSlug(pizza.name)}` },
  };
}

export default async function Page({ params }: PageProps) {
  const { nom } = await params;
  if (!pizzas.some((pizza) => toSlug(pizza.name) === toSlug(nom))) notFound();

  return <PlatDetailsPage name={nom} />;
}
