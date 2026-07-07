"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Window from "./Window";
import Burger from "./icons/Burger";
export default function NavBar() {
  const name = "La Sicilienne";
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  return (
    <>
      <header className="h-20 flex w-full justify-between items-center mt-10">
        <motion.nav
          className="border-b-2 border-white rounded-xs"
          initial={{ width: 0 }}
          animate={{ width: "70vw" }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <h1
            className="text-white font-bold tracking-widest p-2 md:text-6xl text-3xl select-none cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
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
          </h1>
        </motion.nav>
        <Burger
          isClicked={isClicked}
          onClick={() => setIsClicked(!isClicked)}
        />
      </header>
      <Window isClicked={isClicked} setIsClicked={setIsClicked} />
    </>
  );
}
