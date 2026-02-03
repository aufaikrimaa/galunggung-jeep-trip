import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galunggung Jeep Trip - Wisata Offroad Gunung Galunggung",
  description: "Jelajahi keindahan Gunung Galunggung dengan pengalaman jeep offroad yang tak terlupakan. Nikmati pemandangan alam spektakuler, kawah aktif, dan petualangan seru bersama Galunggung Jeep Trip.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${outfit.variable} font-outfit antialiased`}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}

