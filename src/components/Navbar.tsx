"use client";
import Link from "next/link";
import { useState } from "react";
// If you're on Next.js 13 (App Router):
import { usePathname } from "next/navigation";
import { sortsMillGoudy } from "~/lib/fonts";
// For Next.js 12 or older (Pages Router), you'd do:
// import { useRouter } from 'next/router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Next.js 13 approach:
  const pathname = usePathname();

  // Helper function to check if a given href is the current route
  const isActive = (href: string) => {
    return pathname === href;
  };

  console.log("🚀 ~ sortsMillGoudy:", sortsMillGoudy);
  console.log("hello!");
  return (
    <nav className="fixed top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <span
            className={`self-center text-3xl ${sortsMillGoudy.className} whitespace-nowrap dark:text-white`}
          >
            Gerts
            <span className={`${sortsMillGoudy.className} dark:text-blue-500`}>
              Dev
            </span>
          </span>
        </Link>

        {/* Right side: Resume + Mobile Menu Button */}
        <div className="flex space-x-3 md:order-2">
          <a
            href="/GertsDev_CV.pdf"
            download
            target="_blank"
            className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Download Resume
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`w-full items-center justify-between md:order-1 md:flex md:w-auto ${
            menuOpen ? "" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
            <li>
              <Link
                href="/"
                // Conditionally apply the active styles
                className={`block rounded px-3 py-2 md:p-0 ${
                  isActive("/")
                    ? // Active styles:
                      "bg-blue-700 text-white md:bg-transparent md:text-blue-700 dark:md:text-blue-500"
                    : // Default (inactive) styles:
                      "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-blue-500"
                } `}
                aria-current={isActive("/") ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block rounded px-3 py-2 md:p-0 ${
                  isActive("/about")
                    ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700 dark:md:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-blue-500"
                } `}
                aria-current={isActive("/about") ? "page" : undefined}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/project"
                className={`block rounded px-3 py-2 md:p-0 ${
                  isActive("/project")
                    ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700 dark:md:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-blue-500"
                } `}
                aria-current={isActive("/project") ? "page" : undefined}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`block rounded px-3 py-2 md:p-0 ${
                  isActive("/blog")
                    ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700 dark:md:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-blue-500"
                } `}
                aria-current={isActive("/blog") ? "page" : undefined}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block rounded px-3 py-2 md:p-0 ${
                  isActive("/contact")
                    ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700 dark:md:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-blue-500"
                } `}
                aria-current={isActive("/contact") ? "page" : undefined}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
