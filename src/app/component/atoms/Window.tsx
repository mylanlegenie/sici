"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { type Dispatch, type SetStateAction, useEffect, useRef } from "react";

const RUBRIQUES = [
  { title: "Accueil", link: "/" },
  { title: "Menu", link: "/menu/pizza" },
  { title: "Contact", link: "/contact" },
] as const;

type WindowProps = {
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
};

export default function Window({ isClicked, setIsClicked }: WindowProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isClicked) {
      return;
    }

    const body = document.body;
    const html = document.documentElement;
    const originalBodyOverflow = body.style.overflow;
    const originalBodyPaddingRight = body.style.paddingRight;
    const originalHtmlOverflow = html.style.overflow;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    previouslyFocusedElement.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : document.querySelector<HTMLElement>(
            '[aria-controls="menu-principal"]',
          );

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      const currentPaddingRight =
        Number.parseFloat(window.getComputedStyle(body).paddingRight) || 0;
      body.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`;
    }

    const focusFrame = window.requestAnimationFrame(() => {
      firstLinkRef.current?.focus({ preventScroll: true });
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsClicked(false);
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) {
        return;
      }

      const focusableElements = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey) {
        if (
          activeElement === firstElement ||
          !menuRef.current.contains(activeElement)
        ) {
          event.preventDefault();
          lastElement.focus();
        }
        return;
      }

      if (
        activeElement === lastElement ||
        !menuRef.current.contains(activeElement)
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      html.style.overflow = originalHtmlOverflow;
      body.style.overflow = originalBodyOverflow;
      body.style.paddingRight = originalBodyPaddingRight;

      const elementToRestore = previouslyFocusedElement.current;
      window.requestAnimationFrame(() => {
        if (elementToRestore?.isConnected) {
          elementToRestore.focus({ preventScroll: true });
        }
      });
    };
  }, [isClicked, setIsClicked]);

  const closeMenu = () => {
    setIsClicked(false);
  };

  return (
    <motion.div
      ref={menuRef}
      id="menu-principal"
      role="dialog"
      aria-label="Menu principal"
      aria-modal={isClicked ? "true" : undefined}
      aria-hidden={!isClicked}
      inert={!isClicked}
      initial={{ width: "100vw", height: "0vh", bottom: 0 }}
      animate={
        isClicked
          ? { width: "100vw", height: "100vh", top: 0, overflow: "visible" }
          : { width: "100vw", height: "0vh", bottom: 0, overflow: "hidden" }
      }
      transition={
        isClicked
          ? { duration: 1, ease: "easeIn" }
          : { duration: 0.8, ease: "anticipate" }
      }
      className="fixed left-0 z-49 bg-red-600"
    >
      <nav aria-label="Navigation principale">
        <div className="m-6 flex max-w-[calc(100vw-3rem)] flex-col gap-8 sm:m-12 sm:max-w-[calc(100vw-6rem)] sm:gap-10 md:m-20 md:max-w-[calc(100vw-10rem)] sm:mt-0 mt-20 ">
          {RUBRIQUES.map((rubrique, index) => (
            <Link
              ref={index === 0 ? firstLinkRef : undefined}
              key={rubrique.link}
              href={rubrique.link}
              onClick={closeMenu}
              className="underline-animation relative w-fit max-w-full cursor-pointer wrap-break-words text-5xl font-bold text-white select-none sm:text-6xl md:text-7xl"
            >
              {rubrique.title}
            </Link>
          ))}
        </div>
      </nav>
    </motion.div>
  );
}
