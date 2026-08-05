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
      <body className="min-h-full flex flex-col">
        <main className="bg-red-500 pb-6">
          <NavBar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
