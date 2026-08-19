import TypeList from "../../component/atoms/TypeList";
import Plats from "../../component/atoms/ListePlats";

import toSlug from "../../slug";
import { notFound } from "next/navigation";
import { categories, type Category } from "../catalog";

type PageProps = {
  params: {
    categorie: string;
  };
};

export function generateStaticParams() {
  return categories.map((c) => ({
    categorie: toSlug(c),
  }));
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
