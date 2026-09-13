import PlatDetailsPage from "../../../component/PlatDetailsPage";
import toSlug from "../../../slug";
import { notFound } from "next/navigation";
import {
  categories,
  getProductBySlug,
  getProductsByCategory,
  type Category,
} from "../../catalog";
import type { Metadata } from "next";
import JsonLd from "../../../component/JsonLd";
import { absoluteUrl, OPEN_GRAPH_IMAGE } from "@/lib/site";

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

const categoryLabels: Record<Category, string> = {
  pizza: "pizza",
  salade: "salade",
  dessert: "dessert",
};

function getDescription(
  product: NonNullable<ReturnType<typeof getProductBySlug>>,
) {
  if ("description" in product && product.description) {
    return `${product.name} : ${product.description}. Découvrez-la chez La Sicilienne à Paris 12e.`;
  }

  return `${product.name}, ${categoryLabels[product.categorie]} proposée par La Sicilienne à Paris 12e. Consultez les formats et les prix.`;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { categorie, produit } = await params;
  const category = categories.find((item) => toSlug(item) === categorie);
  const product = category ? getProductBySlug(produit, category) : undefined;

  if (!product) {
    return {};
  }

  const description = getDescription(product);
  const path = `/menu/${categorie}/${produit}`;
  const images = product.image
    ? [{ url: absoluteUrl(product.image), alt: product.name }]
    : [OPEN_GRAPH_IMAGE];

  return {
    title: `${product.name} – ${categoryLabels[product.categorie]}`,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: `${product.name} | La Sicilienne`,
      description,
      url: path,
      images: images.map((image) => image.url),
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | La Sicilienne`,
      description,
      images,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { categorie, produit } = await params;
  const category = categories.find((c) => toSlug(c) === categorie) as
    | Category
    | undefined;

  if (!category) {
    notFound();
  }

  const product = getProductBySlug(produit, category);

  if (!product) {
    notFound();
  }

  const offers =
    "prices" in product
      ? Object.entries(product.prices)
          .filter((entry): entry is [string, number] => entry[1] != null)
          .map(([size, price]) => ({
            "@type": "Offer",
            name: `Format ${size}`,
            price: price.toFixed(2),
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: absoluteUrl(`/menu/${categorie}/${produit}`),
          }))
      : product.price != null
        ? [
            {
              "@type": "Offer",
              price: product.price.toFixed(2),
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
              url: absoluteUrl(`/menu/${categorie}/${produit}`),
            },
          ]
        : undefined;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    "@id": `${absoluteUrl(`/menu/${categorie}/${produit}`)}#menu-item`,
    name: product.name,
    description: getDescription(product),
    url: absoluteUrl(`/menu/${categorie}/${produit}`),
    ...(product.image ? { image: absoluteUrl(product.image) } : {}),
    ...(offers ? { offers } : {}),
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <PlatDetailsPage name={produit} categorie={category} />
    </>
  );
}
