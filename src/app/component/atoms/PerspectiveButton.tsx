"use client";
import Link from "next/link";
type TextProp = {
  text: string;
  href: string;
  className?: string;
};
export default function PerspectiveButton({ text, href, className }: TextProp) {
  return (
    <Link
      href={href}
      className={`btn-noise 

 inline-block bg-red-600 w-full text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl shadow-md mb-1 ${className}`}
    >
      {text}
    </Link>
  );
}
