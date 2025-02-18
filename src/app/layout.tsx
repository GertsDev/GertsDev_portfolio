import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";


export const metadata: Metadata = {
  title: "Gertsdev",
  description: "Kirill Gertsik's portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
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
