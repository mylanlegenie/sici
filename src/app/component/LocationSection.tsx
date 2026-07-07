"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

import PerspectiveButton from "./atoms/PerspectiveButton";

const MotionImage = motion.create(Image);

export default function LocationSection() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section className="w-[90%] max-w-5xl mx-auto my-12 sm:my-16 relative z-10 text-center px-2 text-gray-900 dark:text-gray-100">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white"
        style={{ fontFamily: "var(--font-tasa)" }}
      >
        Retrouvez-nous
      </h2>
      <p className="parapgrahe text-white text-sm sm:text-base md:text-lg mb-6 px-2">
        Venez découvrir
        <span className="font-semibold px-2 text-red-300">La Sicilienne</span>
        Situé à deux pas de votre quartier, notre restaurant vous accueille avec
        des plats italien et tex-mex préparés avec passion.
      </p>

      <div>
        <div
          ref={containerRef}
          className="relative mx-auto min-h-[220px] w-full max-w-[974px] overflow-hidden rounded-xl shadow-lg max-sm:min-h-[320px]"
          style={{
            aspectRatio: "974 / 362",
            height: "auto",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41986.00609450645!2d2.464657439453113!3d48.874886317986814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6734ae1c8dabd%3A0xff7b1228e00744e4!2sLe%20Tiger%20Asian%20FOOD!5e0!3m2!1sfr!2sfr!4v1753626946544!5m2!1sfr!2sfr"
            className="absolute inset-0 z-0 h-full w-full rounded-xl border-4 border-amber-500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <MotionImage
            src="/pizza-facade-1.png"
            alt="facade gauche"
            width={487}
            height={362}
            className="absolute top-0 left-0 h-full w-1/2 object-cover z-10"
            initial={{ x: "0%" }}
            animate={inView ? { x: "-100%" } : { x: "0%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <MotionImage
            src="/pizza-facade-2.png"
            alt="facade droite"
            width={487}
            height={362}
            className="absolute top-0 right-0 h-full w-1/2 object-cover z-10"
            initial={{ x: "0%" }}
            animate={inView ? { x: "100%" } : { x: "0%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>

        <div className="mx-auto mt-6 w-full max-w-[974px]">
          <PerspectiveButton text="Google" href="" />
        </div>
      </div>
    </section>
  );
}
