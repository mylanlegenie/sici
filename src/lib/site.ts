export const SITE_URL = "https://www.lasicilienne.fr";

export const SITE_NAME = "La Sicilienne";

export const SITE_DESCRIPTION =
  "Pizzeria et restaurant italien au 6 rue Dagorno, dans le 12e arrondissement de Paris. Découvrez nos pizzas, salades et desserts.";

export const OPEN_GRAPH_IMAGE = {
  url: "/pizza-slide-1.webp",
  width: 842,
  height: 702,
  alt: "Pizza de La Sicilienne à Paris 12e",
} as const;

export const RESTAURANT = {
  name: SITE_NAME,
  telephone: "+33153330333",
  streetAddress: "6 rue Dagorno",
  postalCode: "75012",
  addressLocality: "Paris",
  addressCountry: "FR",
  priceRange: "€€",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
