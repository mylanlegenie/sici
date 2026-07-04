import { pizzas, desserts, salades } from "../../plat";
import Card from "./Card";

interface PlatsProps {
  platType: "Pizza" | "Salad" | "Dessert";
}

export default function Plat({ platType }: PlatsProps) {
  if (platType === "Pizza") {
    return (
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pizzas.map((item) => (
          <Card
            name={item.name}
            key={item.name}
            platType={platType}
            sizePrices={{
              junior: item.prices.junior,
              medium: item.prices.senior,
              grand: item.prices.mega,
            }}
          />
        ))}
      </div>
    );
  }

  const data = platType === "Salad" ? salades : desserts;

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((item) => (
        <Card
          name={item.name}
          price={item.price}
          key={item.name}
          platType={platType}
        />
      ))}
    </div>
  );
}
