import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "~/components/ThemeProvider";
import { spaceGrotesk, inter, syne } from "~/lib/fonts";
import dynamic from "next/dynamic";

// Dynamically import components that might cause hydration issues
const Navbar = dynamic(() => import("~/components/Navbar"), { ssr: true });
const Footer = dynamic(() => import("~/components/Footer"), { ssr: true });

const host = process.env.NEXT_PUBLIC_HOST ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "GertsDev | Kirill Gertsik's Portfolio",
  description: "Showcasing Kirill Gertsik's best web development projects, skills, and experience.",
  metadataBase: new URL(host),
  authors: [{ name: "Kirill Gertsik" }],
  keywords: ["web development", "frontend", "portfolio", "react", "next.js"],
  robots: "index, follow",
  openGraph: {
    title: "GertsDev | Kirill Gertsik's Portfolio",
    description:
      "Showcasing Kirill Gertsik's best web development projects, skills, and experience.",
    url: `${host}`,
    images: [
      {
        url: `${host}/og-preview.jpg`,
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
    images: [`${host}/og-preview.jpg`],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0A192F" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${spaceGrotesk.variable} ${inter.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <ThemeProvider>
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black"></div>
          <div className="fixed inset-0 -z-10 bg-grid-white"></div>
          <Navbar />
          <main className="flex flex-grow flex-col items-center justify-center w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
