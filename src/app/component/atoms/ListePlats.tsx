import { pizzas, desserts, salades } from "../../plat";
import Card from "./Card";

interface PlatsProps {
  platType: "Pizza" | "Salade" | "Dessert";
}

export default function Plat({ platType }: PlatsProps) {
  const data =
    platType === "Salade"
      ? salades
      : platType === "Dessert"
        ? desserts
        : pizzas;
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((item) => {
        const isPizza = "prices" in item;
        return (
          <Card
            name={item.name}
            price={isPizza ? undefined : item?.price}
            key={item.name}
            platType={platType}
            sizePrices={
              isPizza
                ? {
                    junior: item.prices?.junior,
                    medium: item.prices?.senior,
                    grand: item.prices?.mega,
                  }
                : undefined
            }
          />
        );
      })}
    </div>
  );
}
