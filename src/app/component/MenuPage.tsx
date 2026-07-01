"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Plats from "./atoms/ListePlats";
import { motion } from "motion/react";
import PlatPage from "./PlatDetailsPage";

type PlatType = "Pizza" | "Salad" | "Dessert";
function MenuComponent() {
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

export default function MenuPage({
  selectedName,
  section,
}: {
  selectedName: string | undefined;
  section: string | string[] | undefined;
}) {
  return (
    <main className="bg-red-500">
      {selectedName ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <PlatPage name={selectedName} />
        </motion.div>
      ) : section === "menu" ? (
        <MenuComponent />
      ) : null}
    </main>
  );
}
