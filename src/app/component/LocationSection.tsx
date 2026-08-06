import PerspectiveButton from "./atoms/PerspectiveButton";
import ImageSlide from "./atoms/ImageSlide";

export default function LocationSection() {
  return (
    <section className="relative z-10 mx-auto mb-12 mt-20 w-[80vw] max-w-5xl px-2 text-center text-gray-900 sm:mb-16 dark:text-gray-100">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
        Retrouvez-nous
      </h2>
      <p className="text-white text-sm sm:text-base md:text-lg mb-6 px-2">
        Venez découvrir{" "}
        <span className="font-semibold px-2 text-red-300">La Sicilienne</span>
        dans le 12ème arrondissement de Paris. Notre restaurant vous accueille
        avec des plats italiens et tex-mex préparés avec passion.
      </p>

      <div>
        <ImageSlide />
        <div className="mx-auto mt-6 w-full max-w-243.5">
          <PerspectiveButton
            text="Google"
            href="https://www.google.com/maps/dir/?api=1&destination=6%20rue%20Dagorno%2C%2075012%20Paris"
          />
        </div>
      </div>
    </section>
  );
}
