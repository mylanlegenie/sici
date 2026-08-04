import PerspectiveButton from "./atoms/PerspectiveButton";
import ImageSlide from "./atoms/ImageSlide";

export default function LocationSection() {
  return (
    <section className="w-[90%] max-w-5xl mx-auto my-12 sm:my-16 relative z-10 text-center px-2 text-gray-900 dark:text-gray-100">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white"
        style={{ fontFamily: "var(--font-tasa)" }}
      >
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
        <div className="mx-auto mt-6 w-full max-w-[974px]">
          <PerspectiveButton text="Google" href="" />
        </div>
      </div>
    </section>
  );
}
