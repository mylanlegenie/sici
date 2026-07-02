import { pizzas, desserts, salades } from "../../plat";
import Card from "./Card";

interface PlatsProps {
  platType: "Pizza" | "Salad" | "Dessert";
}

export default function Plat({ platType }: PlatsProps) {
  const data =
    platType === "Pizza" ? pizzas : platType === "Salad" ? salades : desserts;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <Card
          name={item.name}
          price={11.99}
          key={item.name}
          platType={platType}
        ></Card>
      ))}
    </div>
  );
}
