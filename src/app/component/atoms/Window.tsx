"use client";
import "../../globals.css";
import { motion } from "motion/react";
import Link from "next/link";
export default function Window({
  isClicked,
  setIsClicked,
}: {
  isClicked?: boolean;
  setIsClicked?: React.Dispatch<React.SetStateAction<boolean>>;
  onSendValue?: (value: string) => void;
}) {
  const RUBRIQUES = [
    { title: "Home", link: "/" },
    { title: "Menu", link: "/menu/pizza" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      animate={
        isClicked
          ? { clipPath: "inset(0% 0 0 0)" }
          : { clipPath: "inset(100% 0 0 0)" }
      }
      transition={
        isClicked
          ? { duration: 1, ease: "easeIn" }
          : { duration: 0.8, ease: "anticipate" }
      }
      className={`fixed inset-0 bg-red-600 z-49 ${
        isClicked ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isClicked}
    >
      <div className="flex flex-col gap-10 m-20">
        {RUBRIQUES.map((rubrique, index) => {
          return (
            <Link
              key={index}
              href={rubrique.link}
              onClick={() => {
                setIsClicked?.(false);
              }}
              className="w-fit text-white text-7xl font-bold underline-animation relative cursor-pointer select-none"
            >
              {rubrique.title}
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
