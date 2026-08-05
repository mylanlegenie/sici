"use client";
import { useState } from "react";
import Window from "./Window";
import Burger from "./icons/Burger";
import Link from "next/link";

export default function NavBar() {
  const name = "La Sicilienne";
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <header className="h-20 flex w-full justify-between items-center mt-10">
        <nav className="nav-slide relative">
          <Link
            href="/"
            className="block cursor-pointer select-none p-2 text-4xl font-bold tracking-widest text-white md:text-7xl"
            aria-label="Retour à l'accueil"
          >
            {name.split("").map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="nav-brand-letter inline-block"
                style={{ animationDelay: `${index * 0.2}s` }}
                aria-hidden="true"
              >
                {letter === " " ? "\u00a0" : letter}
              </span>
            ))}
            <span className="sr-only">{name}</span>
          </Link>
        </nav>
        <Burger
          isClicked={isClicked}
          onClick={() => setIsClicked(!isClicked)}
        />
      </header>
      <Window isClicked={isClicked} setIsClicked={setIsClicked} />
    </>
  );
}
