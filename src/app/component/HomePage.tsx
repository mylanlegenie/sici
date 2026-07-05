"use client";

import { motion } from "motion/react";
import "../globals.css";

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto mt-10 flex h-[60vh] w-[60vw] items-center justify-center flex-col gap-10 space-y-3 my-16"
    >
      <div className="relative">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="absolute -left-6 top-6 h-24 w-1 origin-top rounded-full bg-white/40"
        />
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          className="whitespace-nowrap text-7xl font-medium tracking-tight text-white"
        >
          La Sicilienne,
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.24 }}
          className="whitespace-nowrap text-7xl font-medium tracking-tight text-white/80"
        >
          LA Pizzeria du 12ème
        </motion.h1>
      </div>
      <button className="button-3d">Mettez un avis !</button>
    </motion.main>
  );
}
