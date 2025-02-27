"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { sortsMillGoudy } from "~/lib/fonts";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const isAbout = pathname === "/about";

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuOpen) return;

      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!isAbout) {
      setShowNav(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY.current) {
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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contacts", label: "Contacts" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-20 w-full transition-transform duration-300 ${
        isAbout ? (showNav ? "translate-y-0" : "-translate-y-full") : "translate-y-0"
      } md:translate-y-0`}
    >
      <div className="glass-card-dark border-b border-gray-800/50 backdrop-blur-xl">
        <div
          ref={navRef}
          className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4"
        >
          {/* Brand / Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.span
              className={`self-center text-3xl ${sortsMillGoudy.className} text-gradient-subtle`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Gerts
              <span className={`${sortsMillGoudy.className} text-gradient-vibrant`}>Dev</span>
            </motion.span>
          </Link>

          {/* Right side: Resume + Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:order-2">
            <motion.a
              href="/GertsDev_CV.pdf"
              download
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 focus:ring-4 focus:ring-blue-800 focus:outline-none"
            >
              Download Resume
            </motion.a>

            {/* Hide burger button on md+ screens */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-700 focus:ring-2 focus:ring-gray-600 focus:outline-none md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </motion.button>
          </div>

          {/* Navigation Links */}
          <AnimatePresence>
            <div
              className={`w-full items-center justify-between md:order-1 md:flex md:w-auto ${
                menuOpen ? "" : "hidden"
              }`}
              id="navbar-sticky"
            >
              <motion.ul
                className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:p-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      className={`relative block rounded px-3 py-2 transition-colors duration-200 md:p-0 ${
                        isActive(link.href)
                          ? "text-blue-500"
                          : "text-white hover:bg-gray-800/50 md:hover:bg-transparent md:hover:text-blue-500"
                      }`}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                      {isActive(link.href) && (
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500 md:block hidden"
                          layoutId="navbar-indicator"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
