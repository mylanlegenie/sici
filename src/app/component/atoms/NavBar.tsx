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
    <>
      <header className="h-20 flex w-full justify-between items-center mt-10">
        <nav className="border-b-2 border-white rounded-xs nav-slide">
          <Link href="/">
            <button
              type="button"
              className="text-white font-bold tracking-widest p-2 md:text-7xl sm:text-4xl text-3xl select-none cursor-pointer"
              aria-label="Retour à l'accueil"
            >
              {name.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -20, scale: 0.3 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.2,
                    type: "spring",
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </button>
          </Link>
        </nav>
        <Burger
          isClicked={isClicked}
          onClick={() => setIsClicked(!isClicked)}
        />
      </header>
      <Window isClicked={isClicked} setIsClicked={setIsClicked} />
    </>
  );
}
