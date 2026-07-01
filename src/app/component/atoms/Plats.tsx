import { pizzas } from "../../plat";
import { desserts } from "../../plat";
import { salades } from "../../plat";
import Image from "next/image";

interface PlatsProps {
  platType: "Pizza" | "Salad" | "Dessert";
}

function Card({
  name,
  price,
  platType,
}: {
  name: string;
  price: number;
  platType: string;
}) {
  return (
    <div className="mt-10 min-h-90 w-full border-2 border-white bg-white rounded-xl flex items-center justify-center px-4 py-6 text-center">
      <div>
        {/* <div className="flex justify-end">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-red-500 cursor-pointer bg-white text-sm ">
            ?
          </span>
        </div> */}
        <Image
          src=""
          alt={name}
          width={200}
          height={200}
          className="mx-auto mb-4 rounded-full bg-black"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.history.pushState(
                {},
                "",
                "?section=menu&plat=" +
                  platType.toLowerCase() +
                  "&name=" +
                  name.toLowerCase(),
              );
            }
          }}
        />

        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-800 font-bold">{price.toFixed(2)}€</p>
      </div>
    </div>
  );
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
