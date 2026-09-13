import TypeList from "../../component/atoms/TypeList";
import Plats from "../../component/atoms/ListePlats";

import toSlug from "../../slug";
import { notFound } from "next/navigation";
import { categories, type Category } from "../catalog";
import type { Metadata } from "next";
import { OPEN_GRAPH_IMAGE } from "@/lib/site";

type PageProps = {
  params: Promise<{
    categorie: string;
  }>;
};

const categoryLabels: Record<Category, string> = {
  pizza: "Pizzas",
  salade: "Salades",
  dessert: "Desserts",
};

export function generateStaticParams() {
  return categories.map((c) => ({
    categorie: toSlug(c),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { categorie } = await params;
  const category = categories.find((item) => toSlug(item) === categorie);

  if (!category) {
    return {};
  }

  const label = categoryLabels[category];
  const description = `${label} de La Sicilienne : découvrez notre carte et nos prix à Paris 12e.`;
  const path = `/menu/${categorie}`;

  return {
    title: `${label} – Notre carte`,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${label} – La Sicilienne Paris 12e`,
      description,
      url: path,
      images: [OPEN_GRAPH_IMAGE],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { categorie } = await params;
  const category = categories.find((c) => toSlug(c) === categorie) as
    | Category
    | undefined;

  if (!category) {
    notFound();
  }

  return (
    <>
      <TypeList selectedPlat={category} />
      <Plats platType={category} />
    </>
  );
}
