import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, Playfair_Display } from "next/font/google";

import "./globals.css";

/* ==================================================
   FONTS
================================================== */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

/* ==================================================
   METADATA
================================================== */
export const metadata: Metadata = {
  title: "Museum BI AI Guide",
  description: "AI Guide Museum Bank Indonesia",

  manifest: "/manifest.json",

  icons: {
    icon: "/museum-bi-icon.png",
    apple: "/museum-bi-icon.png",
  },
};

/* ==================================================
   ROOT LAYOUT
================================================== */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="id"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${playfair.variable}
        ${poppins.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}