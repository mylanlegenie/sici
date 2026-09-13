"use client";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

import Image from "next/image";

const MotionImage = motion.create(Image);
const SLIDE_IMAGE_SIZES = "(max-width: 1353px) 36vw, 487px";

export default function ImageSlide() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const inView = useInView(containerRef, { once: true, margin: "-50px" });
  const shouldRevealMap = inView && isMapLoaded;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto min-h-55 w-full max-w-243.5 overflow-hidden rounded-xl shadow-lg max-sm:min-h-80"
      style={{
        aspectRatio: "974 / 362",
        height: "auto",
      }}
    >
      <iframe
        title="Localisation de La Sicilienne"
        src="https://www.google.com/maps?q=La+Sicilienne,+Rue+Dagorno,+75012+Paris&z=17&output=embed"
        className="absolute inset-0 z-0 h-full w-full rounded-xl border-4 border-white"
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsMapLoaded(true)}
      />
      <MotionImage
        src="/pizza-slide-1.webp"
        alt=""
        aria-hidden="true"
        width={487}
        height={362}
        sizes={SLIDE_IMAGE_SIZES}
        quality={65}
        className="absolute top-0 left-0 h-full w-1/2 object-cover z-10"
        initial={{ x: "0%" }}
        animate={shouldRevealMap ? { x: "-100%" } : { x: "0%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <MotionImage
        src="/pizza-slide-2.webp"
        alt=""
        width={487}
        height={362}
        sizes={SLIDE_IMAGE_SIZES}
        quality={65}
        className="absolute top-0 right-0 h-full w-1/2 object-cover z-10"
        initial={{ x: "0%" }}
        animate={shouldRevealMap ? { x: "100%" } : { x: "0%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </div>
  );
}
