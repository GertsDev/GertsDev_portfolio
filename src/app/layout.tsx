import "styles/animations.css";
import "styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import dynamic from "next/dynamic";

import { ThemeProvider } from "components/providers/ThemeProvider";
import { inter, spaceGrotesk, syne } from "../../public/fonts";

// Dynamically import components that might cause hydration issues
const Navbar = dynamic(() => import("components/layout/Navbar"), { ssr: true });
const Footer = dynamic(() => import("components/footer/Footer"), { ssr: true });
const ClientParticlesWrapper = dynamic(() => import("components/ui/ClientParticlesWrapper"));

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
        url: `${host}/OG-PREVIEW.jpg`,
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
      <body className="theme-apple flex min-h-screen flex-col bg-background text-foreground antialiased scroll-smooth">
        <ThemeProvider>
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black"></div>
          <div className="fixed inset-0 -z-10 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 z-50 rounded bg-accent px-3 py-2 text-sm text-background"
          >
            Skip to content
          </a>
          <ClientParticlesWrapper />
          <Navbar />
          <main id="content" className="flex flex-grow flex-col items-center justify-center w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
