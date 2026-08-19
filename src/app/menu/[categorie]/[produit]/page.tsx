import PlatDetailsPage from "../../../component/PlatDetailsPage";
import toSlug from "../../../slug";
import { notFound } from "next/navigation";
import {
  categories,
  getProductBySlug,
  getProductsByCategory,
  type Category,
} from "../../catalog";

type PageProps = {
  params: Promise<{
    produit: string;
    categorie: string;
  }>;
};

export function generateStaticParams() {
  return categories.flatMap((category) =>
    getProductsByCategory(category).map((product) => ({
      categorie: toSlug(category),
      produit: toSlug(product.name),
    })),
  );
}

export default async function Page({ params }: PageProps) {
  const { categorie, produit } = await params;
  const category = categories.find((c) => toSlug(c) === categorie) as
    | Category
    | undefined;

  if (!category) {
    notFound();
  }

  if (!getProductBySlug(produit, category)) {
    notFound();
  }

  return <PlatDetailsPage name={produit} categorie={category} />;
}
