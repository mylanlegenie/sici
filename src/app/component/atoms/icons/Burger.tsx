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
      className="flex flex-col gap-2 cursor-pointer select-none border sm:mr-10 mr-3 border-white rounded-full p-5 hover:bg-red-500fff transition-colors z-50"
      onClick={onClick}
    >
      <motion.span
        className={`w-10 bg-white h-0.5 rounded-lg`}
        animate={isClicked ? { rotate: "45deg", translateY: "10px" } : {}}
        transition={{ type: "spring" }}
      ></motion.span>
      <motion.span
        className="w-10 origin-left bg-white h-0.5 rounded-lg"
        animate={{ scaleX: isClicked ? 0 : 1 }}
      ></motion.span>
      <motion.span
        className={`w-10 bg-white h-0.5 rounded-lg `}
        animate={isClicked ? { rotate: "-45deg", translateY: "-10px" } : {}}
        transition={{ type: "spring" }}
      ></motion.span>
    </div>
  );
}
