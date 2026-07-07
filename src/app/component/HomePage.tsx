"use client";

import { motion } from "motion/react";
import MarqueeHome from "../component/atoms/Marquee";
import "../globals.css";

import LocationSection from "./LocationSection";

export default function HomePage() {
  return (
    <main>
      <motion.section
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
        <a
          target="_blank"
          href="https://www.tripadvisor.fr/Restaurant_Review-g187147-d12326598-Reviews-La_Sicilienne_Pizzeria-Paris_Ile_de_France.html"
        >
          <button className="button-3d">Mettez un avis !</button>
        </a>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mx-auto mt-20 grid w-[80vw] gap-8 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <h1 className="text-4xl font-bold uppercase tracking-[0.16em] text-white">
              NOS BEST SELLERS
            </h1>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/10 p-3">
            <MarqueeHome />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
          className="mx-auto flex w-full max-w-md flex-col justify-center rounded-[2rem] border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-5 text-center shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold uppercase tracking-tight text-white">
              Menu
            </h2>
            <p className="mt-4 max-w-sm text-base leading-7 text-white/75">
              Découvrez notre sélection de plats thaïlandais, préparés avec des
              ingrédients frais et authentiques.
            </p>
          </div>

          <div className="mt-6 h-px w-full bg-linear-to-r from-white/0 via-white/30 to-white/0" />
        </motion.div>
      </motion.section>
      <section className="mx-auto mt-20 flex w-[80vw] flex-col items-center justify-center gap-6 text-center">
        <LocationSection />
      </section>
    </main>
  );
}
