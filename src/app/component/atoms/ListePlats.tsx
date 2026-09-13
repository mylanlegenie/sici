import { pizza, type Category } from "../../plat";
import { getProductsByCategory } from "../../menu/catalog";
import Card from "./Card";

interface PlatsProps {
  platType: Category;
}

const categoryLabels: Record<Exclude<Category, "pizza">, string> = {
  salade: "Salades",
  pate: "Pâtes",
  assiette: "Assiettes",
  sandwich: "Sandwichs",
  burger: "Burgers",
  dessert: "Desserts",
};

export default function Plat({ platType }: PlatsProps) {
  const data = getProductsByCategory(platType);

  const renderCards = (items: typeof data) =>
    items.map((item) => {
      const isPizza = "prices" in item;

      return (
        <Card
          name={item.name}
          ingredients={item.ingredients}
          description={item.description}
          options={"options" in item ? item.options : undefined}
          price={isPizza ? undefined : item.price}
          key={`${item.categorie}-${item.name}`}
          platType={item.categorie}
          sizePrices={
            isPizza
              ? {
                  junior: item.prices.junior,
                  medium: item.prices.senior,
                  grand: item.prices.mega,
                }
              : undefined
          }
        />
      );
    });

  if (platType === "pizza") {
    const tomatoPizzas = pizza.filter((item) => item.base === "tomate");
    const creamPizzas = pizza.filter((item) => item.base === "creme");

    return (
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="-mt-10 mb-8 text-center text-4xl font-bold text-white sm:text-left sm:text-6xl">
          Nos Pizzas
        </h1>

        <section aria-labelledby="pizzas-tomate">
          <h2
            id="pizzas-tomate"
            className="rounded-xl bg-green-700 px-5 py-3 text-2xl font-bold text-white sm:text-3xl"
          >
            Base sauce tomate
          </h2>
          <div className="grid grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {renderCards(tomatoPizzas)}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="pizzas-creme">
          <h2
            id="pizzas-creme"
            className="rounded-xl bg-sky-500 px-5 py-3 text-2xl font-bold text-white sm:text-3xl"
          >
            Base crème fraîche
          </h2>
          <div className="grid grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {renderCards(creamPizzas)}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      <h1 className="col-span-full mb-2 sm:text-6xl sm:text-left text-center text-4xl font-bold text-white -mt-10">
        Nos{" "}
        {categoryLabels[platType]}
      </h1>

      {renderCards(data)}
    </div>
  );
}
