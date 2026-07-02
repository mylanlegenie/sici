"use client";
import TypeList from "../component/atoms/TypeList";
import { motion } from "motion/react";
import PlatPage from "./PlatDetailsPage";

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
        <TypeList />
      ) : null}
    </main>
  );
}
