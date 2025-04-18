import { Sorts_Mill_Goudy, Space_Grotesk, Inter, Syne } from "next/font/google";

export const sortsMillGoudy = Sorts_Mill_Goudy({
  weight: "400",
  subsets: ["latin"],
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});
