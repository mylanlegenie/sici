"use client";
import "../../globals.css";
import { motion } from "framer-motion";
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
    { title: "Menu", link: "/?section=menu" },
    { title: "About", link: "/about" },
  ];

  return (
    <motion.span
      initial={{ width: "100vw", height: "0vh", bottom: 0 }}
      animate={
        isClicked
          ? { width: "100vw", height: "100vh", top: 0 }
          : { width: "100vw", height: "0vh", bottom: 0 }
      }
      transition={
        isClicked
          ? { duration: 1, ease: "easeIn" }
          : { duration: 0.8, ease: "anticipate" }
      }
      className="fixed left-0 bg-red-600 z-49"
    >
      <div className="flex flex-col gap-10 m-20">
        {RUBRIQUES.map((rubrique, index) => {
          return (
            <Link href={rubrique.link} key={index} scroll={false}>
              <span
                onClick={() => setIsClicked?.(false)}
                className="w-fit text-white text-7xl font-bold underline-animation relative cursor-pointer select-none"
              >
                {rubrique.title}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.span>
  );
}
