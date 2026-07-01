import { pizzas } from "../../plat";
import { desserts } from "../../plat";
import { salades } from "../../plat";
import Image from "next/image";

interface PlatsProps {
  plat: "Pizza" | "Salad" | "Dessert";
}

function Card({ name, price }: { name: string; price: number }) {
  return (
    <div className="mt-10 min-h-80 w-full border-2 border-white bg-white rounded-xl flex items-center justify-center cursor-pointer px-4 py-6 text-center">
      <div>
        <Image
          src=""
          alt={name}
          width={200}
          height={200}
          className="mx-auto mb-4 rounded-full bg-black"
        />
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-800 font-bold">{price.toFixed(2)}€</p>
      </div>
    </div>
  );
}
export default function Plat({ plat }: PlatsProps) {
  const data =
    plat === "Pizza" ? pizzas : plat === "Salad" ? salades : desserts;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <Card name={item.name} price={11.99} key={item.name}></Card>
      ))}
    </div>
  );
}
