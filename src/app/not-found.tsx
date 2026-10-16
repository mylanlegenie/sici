import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-12rem)] items-center justify-center px-6 py-20 text-center text-white">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
          Erreur 404
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
          Désolé, vous vous êtes trompé de chemin.
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/90 sm:text-xl">
          Passez par la rue Dagorno pour prendre une pizza.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex border-2 border-white px-5 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-red-500"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
