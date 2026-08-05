import Link from "next/link";
type TextProp = {
  text: string;
  href: string;
  className?: string;
};
export default function PerspectiveButton({ text, href, className }: TextProp) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`btn-noise 

 inline-block bg-red-600 w-full text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl shadow-md mb-1 ${className}`}
    >
      {text}
    </Link>
  );
}
