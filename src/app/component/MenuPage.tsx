"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Plats from "./atoms/Plats";

type PlatType = "Pizza" | "Salad" | "Dessert";
export default function Menu() {
  const TYPE_PLATS: PlatType[] = ["Pizza", "Salad", "Dessert"];
  const [selectedPlat, setSelectedPlat] = useState<PlatType>("Pizza");
  const router = useRouter();
  const handlePlatClick = (plat: PlatType) => {
    router.push("?section=menu&plat=" + plat.toLowerCase());
  };
  return (
    <section className="w-[80vw] mx-auto mb-20">
      <div className="flex items-center justify-center mt-20">
        {TYPE_PLATS.map((plat) => (
          <div
            key={plat}
            className={`w-25 h-15 border-white border-2 rounded-xl flex items-center justify-center cursor-pointer mx-2 ${plat === selectedPlat ? "bg-white" : ""}`}
            onClick={() => {
              setSelectedPlat(plat);
              handlePlatClick(plat);
            }}
          >
            <span
              className={`text-xl font-semibold ${plat === selectedPlat ? "text-red-500" : "text-white"}`}
            >
              {plat}
            </span>
          </div>
        ))}
      </div>
      <Plats platType={selectedPlat} />
    </section>
  );
}
