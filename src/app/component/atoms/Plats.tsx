import { pizzas } from "../../plat";
import { desserts } from "../../plat";
import { salades } from "../../plat";

interface PlatsProps {
  plat: "Pizza" | "Salad" | "Dessert";
}

export default function Plat({ plat }: PlatsProps) {
  const data =
    plat === "Pizza" ? pizzas : plat === "Salad" ? salades : desserts;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <div
          key={item.name}
          className="mt-10 min-h-80 w-full border-2 border-white bg-white rounded-xl flex items-center justify-center cursor-pointer px-4 py-6 text-center"
        ></div>
      ))}
    </div>
  );
}
