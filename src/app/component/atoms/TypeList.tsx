import Link from "next/link";
import { categories, type Category } from "../../menu/catalog";

const categoryLabels: Record<Category, string> = {
  pizza: "Pizzas",
  salade: "Salades",
  pate: "Pâtes",
  assiette: "Assiettes",
  sandwich: "Sandwichs",
  burger: "Burgers",
  dessert: "Desserts",
};

export default function TypeList({ selectedPlat }: { selectedPlat: Category }) {
  return (
    <section className="mx-auto mb-20 w-[80vw]">
      <div className="mt-20 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((plat) => (
          <Link
            href={`/menu/${plat}`}
            key={plat}
            className={`flex h-12 min-w-24 cursor-pointer items-center justify-center rounded-xl border-2 border-white px-3 sm:h-15 sm:min-w-28 ${plat === selectedPlat ? "bg-white" : ""}`}
          >
            <span
              className={`text-xl font-semibold ${plat === selectedPlat ? "text-red-500" : "text-white"}`}
            >
              {categoryLabels[plat]}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
