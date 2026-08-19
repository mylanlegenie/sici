"use client";
import { motion } from "motion/react";
import { useState } from "react";
import Window from "./Window";
import Burger from "./icons/Burger";
import Link from "next/link";
export default function NavBar() {
  const name = "La Sicilienne";
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav className="flex w-full items-center justify-between gap-2">
      <div className="nav-slide relative min-w-0 flex-1 overflow-hidden">
        <Link
          href="/"
          aria-label="Retour à l’accueil – La Sicilienne"
          className="block cursor-pointer select-none whitespace-nowrap p-2 text-[clamp(2.1rem,6vw,3.5rem)] font-bold leading-none tracking-[0.08em] text-white sm:text-4xl md:text-6xl"
        >
          {name.split("").map((letter, index) => (
            <motion.span
              key={index}
              aria-hidden="true"
              className="navbar-letter inline-block"
              initial={{ opacity: 0, x: -20, scale: 0.3 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.2,
                type: "spring",
              }}
            >
              {letter === " " ? <span>&nbsp;</span> : letter}
            </motion.span>
          ))}
        </Link>
      </div>
      <Burger isClicked={isClicked} onClick={() => setIsClicked(!isClicked)} />

      <Window isClicked={isClicked} setIsClicked={setIsClicked} />
    </nav>
  );
}
