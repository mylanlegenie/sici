import {
  assiettes,
  burgers,
  desserts,
  pates,
  pizza,
  salades,
  sandwichs,
  type Category,
} from "../plat";
import toSlug from "../slug";

export type { Category };

export const categories: Category[] = [
  "pizza",
  "salade",
  "pate",
  "assiette",
  "sandwich",
  "burger",
  "dessert",
];

export type Product =
  | (typeof pizza)[number]
  | (typeof salades)[number]
  | (typeof pates)[number]
  | (typeof assiettes)[number]
  | (typeof sandwichs)[number]
  | (typeof burgers)[number]
  | (typeof desserts)[number];

export function getProductsByCategory(category: Category): Product[] {
  switch (category) {
    case "pizza":
      return pizza;
    case "salade":
      return salades;
    case "pate":
      return pates;
    case "assiette":
      return assiettes;
    case "sandwich":
      return sandwichs;
    case "burger":
      return burgers;
    case "dessert":
      return desserts;
    default:
      return [];
  }
}

export function getProductBySlug(
  productSlug: string,
  category?: Category,
): Product | undefined {
  const products = category
    ? getProductsByCategory(category)
    : [
        ...pizza,
        ...salades,
        ...pates,
        ...assiettes,
        ...sandwichs,
        ...burgers,
        ...desserts,
      ];

  return products.find((product) => toSlug(product.name) === productSlug);
}
