// components/Footer.tsx
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 mt-auto bg-white p-4 dark:bg-gray-900">
      <div className="flex justify-center items-center space-x-6">
        {/* GitHub Icon */}
        <Link
          href="https://github.com/GertsDev"
          target="_blank"
          aria-label="GitHub"
          className="group"
        >
          <FaGithub className="h-4 w-4 md:h-6 md:w-6 text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300" />
        </Link>

        {/* LinkedIn Icon */}
        <Link
          href="https://linkedin.com/in/GertsDev"
          target="_blank"
          aria-label="LinkedIn"
          className="group"
        >
          <FaLinkedin className="h-4 w-4 md:h-6 md:w-6 text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300" />
        </Link>

        {/* Email Icon and Text */}
        <Link
          href="mailto:hello@gerts.dev"
          target="_blank"
          aria-label="Email"
          className="group flex items-center space-x-1 font-medium text-gray-900 transition-colors duration-200 dark:text-white"
        >
          <FaEnvelope className="h-3 w-3 md:h-4 md:w-4 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
          <span className="text-xs md:text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300">
            hello@gerts.dev
          </span>
        </Link>

        {/* Instagram Icon */}
        <Link
          href="https://www.instagram.com/gerts_official"
          target="_blank"
          aria-label="Instagram"
          className="group"
        >
          <FaInstagram className="h-4 w-4 md:h-6 md:w-6 text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300" />
        </Link>

        {/* Telegram Icon */}
        <Link
          href="https://t.me/Gerts_official"
          target="_blank"
          aria-label="Telegram"
          className="group"
        >
          <FaTelegram className="h-4 w-4 md:h-6 md:w-6 text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
