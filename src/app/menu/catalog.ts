import { desserts, pizza, salades } from "../plat";
import toSlug from "../slug";

export type Category = "dessert" | "pizza" | "salade";

export const categories: Category[] = ["dessert", "pizza", "salade"];

export type Product =
  | (typeof pizza)[number]
  | (typeof salades)[number]
  | (typeof desserts)[number];

export function getProductsByCategory(category: Category): Product[] {
  switch (category) {
    case "pizza":
      return pizza;
    case "salade":
      return salades;
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
    : [...pizza, ...salades, ...desserts];

  return products.find((product) => toSlug(product.name) === productSlug);
}
