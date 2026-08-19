import Link from "next/link";
import { categories, type Category } from "../../menu/catalog";

export default function TypeList({ selectedPlat }: { selectedPlat: Category }) {
  return (
    <section className="mx-auto mb-20 w-[80vw]">
      <div className="mt-20 flex items-center justify-center">
        {categories.map((plat) => (
          <Link
            href={`/menu/${plat}`}
            key={plat}
            className={`mx-2 flex h-15 w-25 cursor-pointer items-center justify-center rounded-xl border-2 border-white ${plat === selectedPlat ? "bg-white" : ""}`}
          >
            <span
              className={`text-xl font-semibold ${plat === selectedPlat ? "text-red-500" : "text-white"}`}
            >
              {plat.charAt(0).toUpperCase() + plat.slice(1)}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
