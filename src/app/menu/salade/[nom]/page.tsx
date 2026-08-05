import PlatDetailsPage from "../../../component/PlatDetailsPage";
import { salades } from "../../../plat";
import { toSlug } from "@/lib/slug";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    nom: string;
  }>;
};
export function generateStaticParams() {
  return salades.map((salad) => ({
    nom: toSlug(salad.name),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { nom } = await params;
  const salad = salades.find((item) => toSlug(item.name) === toSlug(nom));

  if (!salad) return {};

  return {
    title: `${salad.name} | La Sicilienne`,
    description: `${salad.description}. Découvrez-la chez La Sicilienne à Paris 12ème.`,
    alternates: { canonical: `/menu/salade/${toSlug(salad.name)}` },
  };
}

export default async function Page({ params }: PageProps) {
  const { nom } = await params;
  if (!salades.some((salad) => toSlug(salad.name) === toSlug(nom))) notFound();

  return <PlatDetailsPage name={nom} />;
}
