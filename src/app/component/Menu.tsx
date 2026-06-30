"use client";
import { useState } from "react";
export default function Menu() {
  const TYPE_PLATS: string[] = ["Pizza", "Pasta", "Salad", "Dessert", "Drink"];
  const [selectedPlat, setSelectedPlat] = useState<string | null>(null);
  const handlePlatClick = (plat: string) => {
    window.history.pushState(
      {},
      "",
      "?section=menu&plat=" + plat.toLowerCase(),
    );
  };
  return (
    <section className="flex items-center justify-center mt-20">
      {TYPE_PLATS.map((plat) => (
        <div
          key={plat}
          className={`w-25 h-15 border-white border-2 rounded-xl flex items-center justify-center cursor-pointer mx-2 ${plat == selectedPlat ? "bg-white" : ""}`}
          onClick={() => {
            setSelectedPlat(plat);
            handlePlatClick(plat);
          }}
        >
          <span
            className={`text-xl font-semibold ${plat == selectedPlat ? "text-red-500" : "text-white"}`}
          >
            {plat}
          </span>
        </div>
      ))}
    </section>
  );
}
