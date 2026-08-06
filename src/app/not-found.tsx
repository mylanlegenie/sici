import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center text-white">
      <p className="text-7xl font-bold">404</p>
      <h1 className="mt-4 text-3xl font-semibold">Page introuvable</h1>
      <p className="mt-3 text-white/75">Cette page n’existe pas.</p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-white px-5 py-3 font-semibold text-red-600"
      >
        Retour à l’accueil
      </Link>
    </section>
  );
}
