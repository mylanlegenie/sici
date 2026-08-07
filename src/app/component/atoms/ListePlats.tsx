import { pizza, desserts, salades } from "../../plat";
import Card from "./Card";

interface PlatsProps {
  platType: "pizza" | "salade" | "dessert";
}

export default function Plat({ platType }: PlatsProps) {
  const data =
    platType === "salade" ? salades : platType === "dessert" ? desserts : pizza;
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6">
      {data.map((item) => {
        const isPizza = "prices" in item;
        return (
          <Card
            name={item.name}
            price={isPizza ? undefined : item?.price}
            key={item.name}
            platType={item.categorie}
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
