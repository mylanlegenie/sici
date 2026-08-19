import PlatDetailsPage from "../../../component/PlatDetailsPage";
import { pizza, salades, desserts } from "../../../plat";
import toSlug from "../../../slug";
import { notFound } from "next/navigation";
type Category = "pizza" | "salade" | "dessert";

type PageProps = {
  params: Promise<{
    produit: string;
    categorie: string;
  }>;
};

export function generateStaticParams() {
  const allProducts = [...pizza, ...salades, ...desserts];

  return allProducts.map((product) => ({
    categorie: toSlug(product.categorie),
    produit: toSlug(product.name),
  }));
}

export default async function Page({ params }: PageProps) {
  const { categorie, produit } = await params;
  const category = ["pizza", "salade", "dessert"].find(
    (c) => c === categorie,
  ) as Category | undefined;

  if (!category) {
    notFound();
  }

  const products =
    category === "salade" ? salades : category === "dessert" ? desserts : pizza;

  if (!products.find((product) => toSlug(product.name) === produit)) {
    notFound();
  }

  const selectedPlat: Category = category;

  return (
    <>
      <PlatDetailsPage name={produit} categorie={selectedPlat} />
    </>
  );
}
