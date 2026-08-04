import { motion } from "motion/react";
export default function Burger({
  isClicked,
  onClick,
}: {
  isClicked: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="flex h-14 w-14 flex-col items-center justify-center gap-2 cursor-pointer select-none border sm:mr-10 mr-3 border-white rounded-full p-0 md:h-auto md:w-auto md:p-5 hover:bg-red-500fff transition-colors z-50"
      onClick={onClick}
    >
      <motion.span
        className="h-0.5 w-7 rounded-lg bg-white md:w-10"
        animate={isClicked ? { rotate: "45deg", translateY: "10px" } : {}}
        transition={{ type: "spring" }}
      ></motion.span>
      <motion.span
        className="h-0.5 w-7 rounded-lg bg-white md:w-10"
        animate={isClicked ? { scaleX: 0 } : { scaleX: 1 }}
      ></motion.span>
      <motion.span
        className="h-0.5 w-7 rounded-lg bg-white md:w-10"
        animate={isClicked ? { rotate: "-45deg", translateY: "-10px" } : {}}
        transition={{ type: "spring" }}
      ></motion.span>
    </div>
  );
}
