import TypeList from "../../component/atoms/TypeList";
import Plats from "../../component/atoms/ListePlats";

import toSlug from "../../slug";
import { notFound } from "next/navigation";
type Category = "dessert" | "pizza" | "salade";

type PageProps = {
  params: {
    categorie: string;
  };
};

const categories: Category[] = ["dessert", "pizza", "salade"];

export function generateStaticParams() {
  return categories.map((c) => ({
    categorie: toSlug(c),
  }));
}

export default async function Page({ params }: PageProps) {
  const { categorie } = await params;
  const category = categories.find((c) => toSlug(c) === categorie);

  if (!category) {
    notFound();
  }

  const selectedPlat: Category = category;

  return (
    <>
      <TypeList selectedPlat={selectedPlat} />
      <Plats platType={selectedPlat} />
    </>
  );
}
