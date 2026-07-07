import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-16 mb-8 w-[90vw] border-t border-white/20 pt-6 text-sm text-white/70">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center sm:text-left">
          {`© ${year} La Sicilienne. Tous droits réservés.`}
        </p>

        <div className="flex items-center gap-6">
          <Link href="/mentions-legales" className="transition hover:text-white">
            Mentions légales
          </Link>
          <Link href="/confidentialite" className="transition hover:text-white">
            Confidentialité
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
