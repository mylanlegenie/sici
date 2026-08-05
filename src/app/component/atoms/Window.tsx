"use client";
import Link from "next/link";

export default function Window({
  isClicked,
  setIsClicked,
}: {
  isClicked?: boolean;
  setIsClicked?: React.Dispatch<React.SetStateAction<boolean>>;
  onSendValue?: (value: string) => void;
}) {
  const RUBRIQUES = [
    { title: "Home", link: "/" },
    { title: "Menu", link: "/menu/pizza" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <aside
      id="site-menu"
      className={`nav-window fixed inset-x-0 bottom-0 z-49 overflow-hidden bg-red-600 ${
        isClicked ? "nav-window-open" : ""
      }`}
      aria-hidden={!isClicked}
      inert={!isClicked}
    >
      <nav className="m-20 flex flex-col gap-10" aria-label="Menu principal">
        {RUBRIQUES.map((rubrique) => (
          <Link
            key={rubrique.link}
            href={rubrique.link}
            onClick={() => {
              setIsClicked?.(false);
            }}
            className="w-fit text-white text-7xl font-bold underline-animation relative cursor-pointer select-none"
          >
            {rubrique.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
