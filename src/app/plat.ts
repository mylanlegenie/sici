export type Category = "pizza" | "salade" | "dessert";

type PlatBase = {
  name: string;
  categorie: Category;
  image: string;
  bestsellers: boolean;
};

type Pizza = PlatBase & {
  prices: {
    junior: number | null;
    senior: number | null;
    mega: number | null;
  };
};

type PlatSimple = PlatBase & {
  description?: string;
  price: number | null;
};

export const pizza: Pizza[] = [
  {
    name: "CLASSICA",
    categorie: "pizza",
    image: "",
    bestsellers: true,
    prices: { junior: 8.0, senior: 10.0, mega: 15.0 },
  },
  {
    name: "REGINA",
    categorie: "pizza",
    image: "",
    bestsellers: true,
    prices: { junior: 9.5, senior: 13.0, mega: 18.0 },
  },
  {
    name: "SICILIENNE",
    categorie: "pizza",
    image: "",
    bestsellers: true,
    prices: { junior: 9.5, senior: 13.0, mega: 18.0 },
  },
  {
    name: "CALZONE (soufflée)",
    categorie: "pizza",
    image: "",
    bestsellers: false,
    prices: { junior: 9.5, senior: 13.0, mega: 18.0 },
  },
  {
    name: "ORIENTALE",
    categorie: "pizza",
    image: "",
    bestsellers: true,
    prices: { junior: 9.5, senior: 13.0, mega: 18.0 },
  },
  {
    name: "4 SAISONS",
    categorie: "pizza",
    image: "",
    bestsellers: false,
    prices: { junior: 9.5, senior: 13.0, mega: 18.0 },
  },
  {
    name: "PAYSANNE",
    categorie: "pizza",
    image: "",
    bestsellers: true,
    prices: { junior: 9.5, senior: 13.0, mega: 18.0 },
  },
  {
    name: "RIMINI",
    categorie: "pizza",
    image: "",
    bestsellers: false,
    prices: { junior: 9.5, senior: 13.5, mega: null },
  },
];

export const salades: PlatSimple[] = [
  {
    name: "PALERMO",
    categorie: "salade",
    image: "",
    bestsellers: false,
    description:
      "Salade de saison, tomates fraîches, poivrons grillés, artichauts, mozzarella",
    price: 8.0,
  },
  {
    name: "PARIGI",
    categorie: "salade",
    image: "",
    bestsellers: false,
    description: "Salade de saison, tomates fraîches, jambon, champignons",
    price: 8.0,
  },
  {
    name: "ITALIENNE",
    categorie: "salade",
    image: "",
    bestsellers: false,
    description: "Salade de saison, tomates fraîches, thon, œuf dur, olives",
    price: 8.0,
  },
  {
    name: "FERMIÈRE",
    categorie: "salade",
    image: "",
    bestsellers: false,
    description: "Salade de saison, tomates fraîches, poulet, maïs",
    price: 8.0,
  },
  {
    name: "CHAVIGNOL",
    categorie: "salade",
    image: "",
    bestsellers: false,
    description:
      "Salade de saison, tomates fraîches, crottin en toast, lardons",
    price: 8.0,
  },
  {
    name: "NORVÉGIENNE",
    categorie: "salade",
    image: "",
    bestsellers: false,
    description:
      "Salade de saison, tomates fraîches, crevettes, saumon fumé",
    price: 8.0,
  },
];

export const desserts: PlatSimple[] = [
  {
    name: "TARTE AU DAIM",
    categorie: "dessert",
    image: "",
    bestsellers: false,
    price: null,
  },
  {
    name: "BROWNIE",
    categorie: "dessert",
    image: "",
    bestsellers: false,
    price: null,
  },
  {
    name: "TIRAMISU",
    categorie: "dessert",
    image: "",
    bestsellers: false,
    price: null,
  },
  {
    name: "PANINI NUTELLA",
    categorie: "dessert",
    image: "",
    bestsellers: false,
    price: null,
  },
];
