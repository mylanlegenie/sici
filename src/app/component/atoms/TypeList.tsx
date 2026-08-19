type PlatType = "pizza" | "salade" | "dessert";
import Link from "next/link";
export default function TypeList({ selectedPlat }: { selectedPlat: PlatType }) {
  const TYPE_PLATS: PlatType[] = ["pizza", "salade", "dessert"];

  return (
    <section className="w-[80vw] mx-auto mb-20">
      <div className="flex items-center justify-center mt-20">
        {TYPE_PLATS.map((plat) => (
          <Link
            href={`/menu/${plat.toLowerCase()}`}
            key={plat}
            className={`w-25 h-15 border-white border-2 rounded-xl flex items-center justify-center cursor-pointer mx-2 ${plat === selectedPlat ? "bg-white" : ""}`}
          >
            <span
              className={`text-xl font-semibold ${plat === selectedPlat ? "text-red-500" : "text-white"} `}
            >
              {plat.charAt(0).toUpperCase() + plat.slice(1)}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
