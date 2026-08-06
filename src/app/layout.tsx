import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import NavBar from "../app/component/atoms/NavBar";
import Footer from "../app/component/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "La Sicilienne",
  description: "Restaurant italien à Paris 12ème",
  verification: {
    google: "px9hkNhlmh8TeD1PbYDXbTKX0a5TicN4joQoVkWNmg0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={cn(
        "h-full antialiased overscroll-none",
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-red-500">
        <header className="h-20 flex w-full justify-between items-center mt-10">
          <NavBar />
        </header>
        <main className="pb-6">{children}</main>
        <footer className="mx-auto w-full border-t border-white/20 py-6 px-5 text-sm text-white/70 bg-red-500">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
