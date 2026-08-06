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
    <nav className="flex w-full items-center justify-between">
      <div className="nav-slide relative">
        <Link
          href="/"
          className="text-white font-bold tracking-widest p-2 md:text-7xl text-4xl select-none cursor-pointer"
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
        </Link>
      </div>
      <Burger isClicked={isClicked} onClick={() => setIsClicked(!isClicked)} />

      <Window isClicked={isClicked} setIsClicked={setIsClicked} />
    </nav>
  );
}
