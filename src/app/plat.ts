export type Category =
  | "pizza"
  | "salade"
  | "pate"
  | "assiette"
  | "sandwich"
  | "burger"
  | "dessert";
export type PizzaBase = "tomate" | "creme";

type PlatBase = {
  name: string;
  categorie: Category;
  image: string;
  bestsellers: boolean;
};

type Pizza = PlatBase & {
  categorie: "pizza";
  base: PizzaBase;
  ingredients: string[];
  description: string;
  prices: {
    junior: number | null;
    senior: number | null;
    mega: number | null;
  };
};

type PlatSimple = PlatBase & {
  description?: string;
  ingredients?: string[];
  options?: { label: string; price: number }[];
  price: number | null;
};

const tomatoPrices = { junior: 9.5, senior: 13, mega: 18 };
const creamPrices = { junior: 9.5, senior: 13.5, mega: 19.5 };

export const pizza: Pizza[] = [
  {
    name: "CLASSICA",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: true,
    ingredients: ["mozzarella", "origan"],
    description: "La pizza classique par excellence, simple et parfumée à l’origan.",
    prices: { junior: 8, senior: 10, mega: 15 },
  },
  {
    name: "REGINA",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: true,
    ingredients: ["mozzarella", "jambon", "champignons"],
    description: "Une pizza généreuse qui associe jambon et champignons à la mozzarella.",
    prices: tomatoPrices,
  },
  {
    name: "SICILIENNE",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: true,
    ingredients: ["mozzarella", "viande hachée", "pommes de terre", "oignons"],
    description: "La spécialité maison, généreusement garnie de viande hachée et de pommes de terre.",
    prices: tomatoPrices,
  },
  {
    name: "CALZONE (soufflée)",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "jambon ou viande hachée", "œuf"],
    description: "Une pizza soufflée et fondante, proposée au jambon ou à la viande hachée.",
    prices: tomatoPrices,
  },
  {
    name: "PAYSANNE",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: true,
    ingredients: ["mozzarella", "lardons", "oignons", "œuf"],
    description: "Une recette rustique et gourmande aux lardons, oignons et œuf.",
    prices: tomatoPrices,
  },
  {
    name: "CHÈVRE MIEL",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "chèvre", "jambon", "miel"],
    description: "Un accord sucré-salé entre le fromage de chèvre, le jambon et le miel.",
    prices: tomatoPrices,
  },
  {
    name: "PARMIGIANA",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "jambon", "aubergines", "œuf"],
    description: "Une pizza savoureuse aux aubergines, jambon et œuf, gratinée à la mozzarella.",
    prices: tomatoPrices,
  },
  {
    name: "NAPOLITAINE",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "anchois", "câpres", "olives"],
    description: "Une recette méditerranéenne relevée par les anchois, les câpres et les olives.",
    prices: tomatoPrices,
  },
  {
    name: "CAPRI",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "chèvre", "tomates séchées", "basilic"],
    description: "Une pizza ensoleillée au chèvre, aux tomates séchées et au basilic.",
    prices: tomatoPrices,
  },
  {
    name: "DAUPHINE",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "pommes de terre", "chèvre", "jambon"],
    description: "Une composition généreuse aux pommes de terre, au chèvre et au jambon.",
    prices: tomatoPrices,
  },
  {
    name: "GORGONZOLA",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "jambon", "gorgonzola", "origan"],
    description: "Une pizza de caractère au gorgonzola, adoucie par la mozzarella et le jambon.",
    prices: tomatoPrices,
  },
  {
    name: "4 FROMAGES",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "chèvre", "gorgonzola", "parmesan", "brie"],
    description: "Une pizza intensément fromagère réunissant mozzarella, chèvre, gorgonzola, parmesan et brie.",
    prices: tomatoPrices,
  },
  {
    name: "BOURSIN",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "viande hachée", "Boursin", "oignons"],
    description: "Une recette crémeuse et généreuse à la viande hachée, au Boursin et aux oignons.",
    prices: tomatoPrices,
  },
  {
    name: "4 SAISONS",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "jambon", "champignons", "artichauts", "olives"],
    description: "Un grand classique garni de jambon, champignons, artichauts et olives.",
    prices: tomatoPrices,
  },
  {
    name: "3 JAMBONS",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "jambon", "poitrine fumée", "chorizo"],
    description: "Une pizza généreuse réunissant jambon, poitrine fumée et chorizo.",
    prices: tomatoPrices,
  },
  {
    name: "ORIENTALE",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: true,
    ingredients: ["mozzarella", "merguez", "poivrons", "œuf", "olives"],
    description: "Une recette relevée à la merguez, accompagnée de poivrons, d’œuf et d’olives.",
    prices: tomatoPrices,
  },
  {
    name: "KEBAB",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "tomates fraîches", "viande kebab", "oignons", "poivrons"],
    description: "Une pizza copieuse à la viande kebab, aux tomates fraîches, oignons et poivrons.",
    prices: tomatoPrices,
  },
  {
    name: "TORINO",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "thon", "champignons", "œuf", "olives"],
    description: "Une recette complète au thon, aux champignons, à l’œuf et aux olives.",
    prices: tomatoPrices,
  },
  {
    name: "PALERMO",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "poivrons", "chorizo", "œuf", "olives"],
    description: "Une pizza colorée et relevée au chorizo, poivrons, œuf et olives.",
    prices: tomatoPrices,
  },
  {
    name: "JARDINO",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "champignons", "artichauts", "oignons", "olives"],
    description: "Une composition végétarienne généreuse en légumes et en mozzarella.",
    prices: { junior: 8.5, senior: 13, mega: 18 },
  },
  {
    name: "CAMPIONE",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "viande hachée", "champignons", "œuf"],
    description: "Une pizza gourmande à la viande hachée, aux champignons et à l’œuf.",
    prices: tomatoPrices,
  },
  {
    name: "RENOIR",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "chorizo", "merguez", "viande hachée"],
    description: "Une recette généreuse et relevée réunissant chorizo, merguez et viande hachée.",
    prices: tomatoPrices,
  },
  {
    name: "PESCATORI",
    categorie: "pizza",
    base: "tomate",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "fruits de mer", "tomates fraîches", "persil", "citron"],
    description: "Une pizza marine et fraîche aux fruits de mer, relevée de persil et de citron.",
    prices: tomatoPrices,
  },
  {
    name: "RIMINI",
    categorie: "pizza",
    base: "creme",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "crème fraîche", "poulet", "champignons"],
    description: "Une pizza crémeuse au poulet et aux champignons, gratinée à la mozzarella.",
    prices: creamPrices,
  },
  {
    name: "VENEZIA",
    categorie: "pizza",
    base: "creme",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "saumon fumé", "citron"],
    description: "Une recette délicate au saumon fumé et au citron sur une base crème fraîche.",
    prices: creamPrices,
  },
  {
    name: "MARINA",
    categorie: "pizza",
    base: "creme",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "noix de Saint-Jacques"],
    description: "Une pizza crémeuse et raffinée garnie de mozzarella et de noix de Saint-Jacques.",
    prices: creamPrices,
  },
  {
    name: "MILANO",
    categorie: "pizza",
    base: "creme",
    image: "",
    bestsellers: false,
    ingredients: ["mozzarella", "poitrine fumée", "pommes de terre", "oignons"],
    description: "Une pizza généreuse à la poitrine fumée, aux pommes de terre et aux oignons.",
    prices: creamPrices,
  },
];

export const salades: PlatSimple[] = [
  {
    name: "PALERMO",
    categorie: "salade",
    image: "",
    bestsellers: false,
    ingredients: ["salade de saison", "tomates fraîches", "poivrons grillés", "artichauts", "mozzarella"],
    description: "Une salade méditerranéenne colorée aux poivrons grillés, artichauts et mozzarella.",
    price: 8,
  },
  {
    name: "PARIGI",
    categorie: "salade",
    image: "",
    bestsellers: false,
    ingredients: ["salade de saison", "tomates fraîches", "jambon", "champignons"],
    description: "Une salade fraîche et généreuse garnie de jambon et de champignons.",
    price: 8,
  },
  {
    name: "ITALIENNE",
    categorie: "salade",
    image: "",
    bestsellers: false,
    ingredients: ["salade de saison", "tomates fraîches", "thon", "œuf dur", "olives"],
    description: "Une salade complète d’inspiration italienne au thon, à l’œuf dur et aux olives.",
    price: 8,
  },
  {
    name: "FERMIÈRE",
    categorie: "salade",
    image: "",
    bestsellers: false,
    ingredients: ["salade de saison", "tomates fraîches", "poulet", "maïs"],
    description: "Une salade douce et équilibrée au poulet, aux tomates fraîches et au maïs.",
    price: 8,
  },
  {
    name: "CHAVIGNOL",
    categorie: "salade",
    image: "",
    bestsellers: false,
    ingredients: ["salade de saison", "tomates fraîches", "crottin en toast", "lardons"],
    description: "Une salade gourmande au crottin chaud sur toast et aux lardons.",
    price: 8,
  },
  {
    name: "NORVÉGIENNE",
    categorie: "salade",
    image: "",
    bestsellers: false,
    ingredients: ["salade de saison", "tomates fraîches", "crevettes", "saumon fumé", "citron"],
    description: "Une salade marine aux crevettes et au saumon fumé, accompagnée de citron.",
    price: 8,
  },
];

export const pates: PlatSimple[] = [
  {
    name: "CARBONARA",
    categorie: "pate",
    image: "",
    bestsellers: false,
    ingredients: [
      "tagliatelles ou penne",
      "crème fraîche",
      "lardons",
      "jaune d’œuf",
    ],
    description:
      "Des pâtes crémeuses aux lardons, servies avec un jaune d’œuf.",
    price: 9.5,
  },
  {
    name: "FRUITS DE MER",
    categorie: "pate",
    image: "",
    bestsellers: false,
    ingredients: [
      "tagliatelles ou penne",
      "sauce tomate",
      "cocktail de fruits de mer",
    ],
    description:
      "Des pâtes à la sauce tomate accompagnées d’un cocktail de fruits de mer.",
    price: 9.5,
  },
  {
    name: "4 FROMAGES",
    categorie: "pate",
    image: "",
    bestsellers: false,
    ingredients: [
      "tagliatelles ou penne",
      "crème fraîche",
      "assortiment de quatre fromages",
    ],
    description:
      "Des pâtes généreuses nappées d’une sauce crémeuse aux quatre fromages.",
    price: 9.5,
  },
  {
    name: "BOLOGNAISE",
    categorie: "pate",
    image: "",
    bestsellers: false,
    ingredients: [
      "tagliatelles ou penne",
      "sauce tomate",
      "viande hachée",
      "fromage râpé",
    ],
    description:
      "Des pâtes à la sauce tomate et à la viande hachée, parsemées de fromage râpé.",
    price: 9.5,
  },
  {
    name: "PESTO",
    categorie: "pate",
    image: "",
    bestsellers: false,
    ingredients: ["tagliatelles ou penne", "sauce pesto"],
    description:
      "Des tagliatelles ou des penne enrobées d’une sauce pesto parfumée.",
    price: 9.5,
  },
  {
    name: "LASAGNE",
    categorie: "pate",
    image: "",
    bestsellers: false,
    ingredients: [
      "bœuf haché",
      "sauce tomate",
      "béchamel",
      "parmesan",
    ],
    description:
      "Des lasagnes au bœuf haché, à la sauce tomate et à la béchamel, gratinées au parmesan.",
    price: 9.5,
  },
];

export const assiettes: PlatSimple[] = [
  {
    name: "CHICKEN",
    categorie: "assiette",
    image: "",
    bestsellers: false,
    ingredients: ["salade", "tomate", "riz", "poulet mariné", "frites"],
    description:
      "Une assiette complète de poulet mariné servie avec salade, tomate, riz et frites.",
    price: 11,
  },
  {
    name: "MERGUEZ",
    categorie: "assiette",
    image: "",
    bestsellers: false,
    ingredients: ["salade", "tomate", "riz", "trois merguez", "frites"],
    description:
      "Trois merguez servies avec salade, tomate, riz et frites.",
    price: 11,
  },
  {
    name: "CHICKEN STRIPS",
    categorie: "assiette",
    image: "",
    bestsellers: false,
    ingredients: [
      "salade",
      "tomate",
      "quatre filets de poulet marinés",
      "riz",
      "frites",
    ],
    description:
      "Quatre filets de poulet marinés servis avec salade, tomate, riz et frites.",
    price: 11,
  },
  {
    name: "CHICKEN WINGS",
    categorie: "assiette",
    image: "",
    bestsellers: false,
    ingredients: [
      "salade",
      "tomate",
      "huit ailes de poulet marinées",
      "riz",
      "frites",
    ],
    description:
      "Huit ailes de poulet marinées servies avec salade, tomate, riz et frites.",
    price: 11,
  },
  {
    name: "ESCALOPE",
    categorie: "assiette",
    image: "",
    bestsellers: false,
    ingredients: [
      "salade",
      "tomate",
      "escalope de poulet marinée",
      "riz",
      "frites",
    ],
    description:
      "Une escalope de poulet marinée servie avec salade, tomate, riz et frites.",
    price: 11,
  },
  {
    name: "POTATOES",
    categorie: "assiette",
    image: "",
    bestsellers: false,
    ingredients: ["potatoes"],
    description: "Une barquette de potatoes dorées et croustillantes.",
    price: 3.5,
  },
];

export const sandwichs: PlatSimple[] = [
  {
    name: "CHICKEN CHIKA",
    categorie: "sandwich",
    image: "",
    bestsellers: false,
    ingredients: [
      "salade",
      "tomate",
      "poulet mariné",
      "légumes",
      "frites",
    ],
    description:
      "Un sandwich au poulet mariné et aux légumes, servi avec des frites.",
    price: 8,
  },
  {
    name: "MERGUEZ",
    categorie: "sandwich",
    image: "",
    bestsellers: false,
    ingredients: ["salade", "tomate", "merguez", "olives", "frites"],
    description:
      "Un sandwich généreux à la merguez et aux olives, servi avec des frites.",
    price: 8,
  },
  {
    name: "AMERICAN CHEDDAR",
    categorie: "sandwich",
    image: "",
    bestsellers: false,
    ingredients: [
      "salade",
      "tomate",
      "deux steaks hachés",
      "deux cheddars",
      "frites",
    ],
    description:
      "Un sandwich américain composé de deux steaks hachés et de deux tranches de cheddar, servi avec des frites.",
    price: 8,
  },
  {
    name: "TENDERS",
    categorie: "sandwich",
    image: "",
    bestsellers: false,
    ingredients: [
      "salade",
      "tomate",
      "deux filets de poulet",
      "cheddar",
      "frites",
    ],
    description:
      "Un sandwich aux filets de poulet et au cheddar, servi avec des frites.",
    price: 8,
  },
];

export const burgers: PlatSimple[] = [
  {
    name: "DOUBLE CHEESE",
    categorie: "burger",
    image: "",
    bestsellers: false,
    ingredients: [
      "deux steaks hachés",
      "deux cheddars",
      "salade",
      "tomate",
      "frites",
    ],
    description:
      "Un double burger généreux avec deux steaks hachés et deux tranches de cheddar, servi avec des frites.",
    price: 8,
  },
  {
    name: "FISH BURGER",
    categorie: "burger",
    image: "",
    bestsellers: false,
    ingredients: ["poisson pané", "cheddar", "salade", "tomate", "potatoes"],
    description:
      "Un burger au poisson pané et au cheddar, servi avec des potatoes.",
    price: 8,
  },
];

export const desserts: PlatSimple[] = [
  {
    name: "MOUSSE AU CHOCOLAT",
    categorie: "dessert",
    image: "",
    bestsellers: false,
    description: "Une mousse au chocolat onctueuse et gourmande.",
    price: 3,
  },
  {
    name: "BROWNIE",
    categorie: "dessert",
    image: "",
    bestsellers: false,
    description: "Un brownie fondant au chocolat.",
    price: 3,
  },
  {
    name: "SALADE DE FRUITS",
    categorie: "dessert",
    image: "",
    bestsellers: false,
    description: "Une salade de fruits fraîche et colorée.",
    price: 3,
  },
  {
    name: "TARTE AU CITRON",
    categorie: "dessert",
    image: "",
    bestsellers: false,
    description: "Une tarte au citron acidulée sur une pâte croustillante.",
    price: 3,
  },
  {
    name: "TARTE AUX POMMES",
    categorie: "dessert",
    image: "",
    bestsellers: false,
    description: "Une tarte aux pommes douce et fondante.",
    price: 3,
  },
  {
    name: "PANNA COTTA",
    categorie: "dessert",
    image: "",
    bestsellers: false,
    description: "Une panna cotta fraîche et crémeuse.",
    price: 3,
  },
  {
    name: "HÄAGEN-DAZS",
    categorie: "dessert",
    image: "",
    bestsellers: false,
    description: "Une glace Häagen-Dazs proposée en deux formats.",
    options: [
      { label: "100 ml", price: 3.5 },
      { label: "500 ml", price: 7 },
    ],
    price: null,
  },
];
