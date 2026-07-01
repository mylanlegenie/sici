"use client";
import { useState } from "react";
import Plats from "../component/atoms/Plats";

type PlatType = "Pizza" | "Salad" | "Dessert";
export default function Menu() {
  const TYPE_PLATS: PlatType[] = ["Pizza", "Salad", "Dessert"];
  const [selectedPlat, setSelectedPlat] = useState<PlatType>("Pizza");
  const handlePlatClick = (plat: PlatType) => {
    if (typeof window !== "undefined") {
      window.history.pushState(
        {},
        "",
        "?section=menu&plat=" + plat.toLowerCase(),
      );
    }
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
      <Plats plat={selectedPlat} />
    </section>
  );
}
