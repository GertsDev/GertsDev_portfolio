"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { sortsMillGoudy } from "~/lib/fonts";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  const pathname = usePathname();
  const isAbout = pathname === "/about"; // <-- check if we're on the /about page

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    // If we're not on /about, skip the scroll logic
    if (!isAbout) {
      setShowNav(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Keep the nav shown if near the top
      if (currentScrollY < 10) {
        setShowNav(true);
      }
      // Hide if scrolling down, show if scrolling up
      else if (currentScrollY > lastScrollY.current) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAbout]);

  return (
    <nav
      className={`fixed top-0 z-20 w-full border-b border-gray-600 bg-gray-900 transition-transform duration-300 ${
        // If on /about, apply the hide/show logic. Else, always show.
        isAbout
          ? showNav
            ? "translate-y-0"
            : "-translate-y-full"
          : "translate-y-0"
      } md:translate-y-0`}
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <span
            className={`self-center text-3xl ${sortsMillGoudy.className} text-white`}
          >
            Gerts
            <span className={`${sortsMillGoudy.className} text-blue-500`}>
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
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 focus:outline-none"
          >
            Download Resume
          </a>
          {/* Hide burger button on md+ screens */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-700 focus:ring-2 focus:ring-gray-600 focus:outline-none md:hidden"
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
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-700 bg-gray-800 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-gray-900">
            <li>
              <Link
                href="/"
                className={`block rounded px-3 py-2 md:p-0 ${
                  isActive("/")
                    ? "bg-blue-500 text-white md:bg-transparent md:text-blue-500"
                    : "text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500"
                }`}
                aria-current={isActive("/") ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block rounded px-3 py-2 md:p-0 ${
                  isActive("/about")
                    ? "bg-blue-500 text-white md:bg-transparent md:text-blue-500"
                    : "text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500"
                }`}
                aria-current={isActive("/about") ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`block rounded px-3 py-2 md:p-0 ${
                  isActive("/projects")
                    ? "bg-blue-500 text-white md:bg-transparent md:text-blue-500"
                    : "text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500"
                }`}
                aria-current={isActive("/projects") ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`block rounded px-3 py-2 md:p-0 ${
                  isActive("/blog")
                    ? "bg-blue-500 text-white md:bg-transparent md:text-blue-500"
                    : "text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500"
                }`}
                aria-current={isActive("/blog") ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className={`block rounded px-3 py-2 md:p-0 ${
                  isActive("/contact")
                    ? "bg-blue-500 text-white md:bg-transparent md:text-blue-500"
                    : "text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500"
                }`}
                aria-current={isActive("/contact") ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
