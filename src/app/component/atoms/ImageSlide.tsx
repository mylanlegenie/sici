"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=La%20Sicilienne%2C%206%20rue%20Dagorno%2C%2075012%20Paris&output=embed";

export default function ImageSlide() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

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
          src={MAP_EMBED_URL}
          className="absolute inset-0 z-0 h-full w-full rounded-xl border-4 border-white"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsMapReady(true)}
        />
      )}
      <Image
        src="/pizza-slide-1.webp"
        alt="Pizza margherita italienne de La Sicilienne aux tomates et au basilic"
        width={487}
        height={362}
        sizes="(max-width: 640px) 36vw, (max-width: 1350px) 40vw, 487px"
        quality={60}
        className={`image-slide-panel absolute left-0 top-0 z-10 h-full w-1/2 object-cover ${
          isMapReady ? "image-slide-panel-left-open" : ""
        }`}
      />

      <Image
        src="/pizza-slide-2.webp"
        alt="Pizza margherita italienne de La Sicilienne aux tomates et au basilic"
        width={487}
        height={362}
        sizes="(max-width: 640px) 36vw, (max-width: 1350px) 40vw, 487px"
        quality={60}
        className={`image-slide-panel absolute right-0 top-0 z-10 h-full w-1/2 object-cover ${
          isMapReady ? "image-slide-panel-right-open" : ""
        }`}
      />
    </div>
  );
}
