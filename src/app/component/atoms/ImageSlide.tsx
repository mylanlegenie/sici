"use client";
import { motion, useInView } from "motion/react";
import Image from "next/image";

const MotionImage = motion.create(Image);

export default function ImageSlide({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const inView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <>
      <MotionImage
        src="/pizza-facade-1.png"
        alt="Pizza margherita italienne de La Sicilienne aux tomates et au basilic"
        width={487}
        height={362}
        className="absolute top-0 left-0 h-full w-1/2 object-cover z-10"
        initial={{ x: "0%" }}
        animate={inView ? { x: "-100%" } : { x: "0%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <MotionImage
        src="/pizza-facade-2.png"
        alt="Pizza margherita italienne de La Sicilienne aux tomates et au basilic"
        width={487}
        height={362}
        className="absolute top-0 right-0 h-full w-1/2 object-cover z-10"
        initial={{ x: "0%" }}
        animate={inView ? { x: "100%" } : { x: "0%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </>
  );
}
