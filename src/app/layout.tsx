import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "La Sicilienne",
  description: "Restaurant italien à Paris 12ème",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
