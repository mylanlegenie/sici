"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

import Image from "next/image";

const MotionImage = motion.create(Image);
const SLIDE_IMAGE_SIZES = "(max-width: 1353px) 36vw, 487px";

export default function ImageSlide() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-50px" });
  // Start the map request shortly before it becomes visible, not on page load.
  const shouldLoadMap = useInView(containerRef, {
    once: true,
    margin: "300px",
  });

  return (
    <div
      ref={containerRef}
      className="relative mx-auto min-h-55 w-full max-w-243.5 overflow-hidden rounded-xl shadow-lg max-sm:min-h-80"
      style={{
        aspectRatio: "974 / 362",
        height: "auto",
      }}
    >
      {shouldLoadMap && (
        <iframe
          title="Localisation de La Sicilienne"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41986.00609450645!2d2.464657439453113!3d48.874886317986814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6734ae1c8dabd%3A0xff7b1228e00744e4!2sLe%20Tiger%20Asian%20FOOD!5e0!3m2!1sfr!2sfr!4v1753626946544!5m2!1sfr!2sfr"
          className="absolute inset-0 z-0 h-full w-full rounded-xl border-4 border-white"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
      <MotionImage
        src="/pizza-slide-1.webp"
        alt="Pizza margherita italienne de La Sicilienne aux tomates et au basilic"
        width={487}
        height={362}
        sizes={SLIDE_IMAGE_SIZES}
        quality={65}
        className="absolute top-0 left-0 h-full w-1/2 object-cover z-10"
        initial={{ x: "0%" }}
        animate={inView ? { x: "-100%" } : { x: "0%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <MotionImage
        src="/pizza-slide-2.webp"
        alt="Pizza margherita italienne de La Sicilienne aux tomates et au basilic"
        width={487}
        height={362}
        sizes={SLIDE_IMAGE_SIZES}
        quality={65}
        className="absolute top-0 right-0 h-full w-1/2 object-cover z-10"
        initial={{ x: "0%" }}
        animate={inView ? { x: "100%" } : { x: "0%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </div>
  );
}
