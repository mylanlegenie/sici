import { motion } from "motion/react";
export default function Burger({
  isClicked,
  onClick,
}: {
  isClicked: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="flex flex-col gap-2 cursor-pointer select-none border sm:mr-10 mr-3 border-white rounded-full p-5 hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white transition-colors z-50"
      onClick={onClick}
      aria-label={isClicked ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={isClicked}
      aria-controls="menu-principal"
    >
      <motion.span
        aria-hidden="true"
        className={`w-10 bg-white h-0.5 rounded-lg`}
        animate={isClicked ? { rotate: "45deg", translateY: "10px" } : {}}
        transition={{ type: "spring" }}
      ></motion.span>
      <motion.span
        aria-hidden="true"
        className={`w-10 bg-white h-0.5 rounded-lg`}
        animate={isClicked ? { width: 0 } : { width: "2.5rem" }}
      ></motion.span>
      <motion.span
        aria-hidden="true"
        className={`w-10 bg-white h-0.5 rounded-lg `}
        animate={isClicked ? { rotate: "-45deg", translateY: "-10px" } : {}}
        transition={{ type: "spring" }}
      ></motion.span>
    </button>
  );
}
