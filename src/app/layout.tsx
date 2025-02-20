import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

const host = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000";

export const metadata = {
  openGraph: {
    title: "GertsDev | Kirill Gertsik's Portfolio",
    description:
      "Showcasing Kirill Gertsik's best web development projects, skills, and experience.",
    url: `${host}`,
    images: [
      {
        url: `${host}/.jpg`,
        width: 1200,
        height: 630,
        alt: "Preview of GertsDev Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GertsDev | Kirill Gertsik's Portfolio",
    description:
      "Showcasing Kirill Gertsik's best web development projects, skills, and experience.",
    images: [`${host}/OG-PREVIEW.jpg`],
  },
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark `}>
     <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-grow flex-col items-center justify-center bg-gradient-to-tr from-[#0A192F] via-[#112240] to-[#0A192F] text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
