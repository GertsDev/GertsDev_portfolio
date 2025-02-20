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
    <footer className="sticky bottom-0 mt-auto bg-gray-900 p-4">
      <div className="flex items-center justify-center space-x-6">
        <Link
          href="https://github.com/GertsDev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="group"
        >
        <FaGithub className="h-6 w-6 text-white group-hover:text-gray-300" />
        </Link>
        <Link
          href="https://linkedin.com/in/GertsDev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="group"
        >
        <FaLinkedin className="h-6 w-6 text-white group-hover:text-gray-300" />
        </Link>
        <Link
          href="mailto:hello@gerts.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="group flex items-center space-x-1 font-medium text-white transition-colors duration-200"
        >
          <FaEnvelope className="h-5 w-5 group-hover:text-gray-300" />
          <span className="text-sm group-hover:text-gray-300">
            hello@gerts.dev
          </span>
        </Link>
        <Link
          href="https://www.instagram.com/gerts_official"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="group"
          >
          <FaInstagram className="h-6 w-6 text-white group-hover:text-gray-300" />
        </Link>
        <Link
          href="https://t.me/Gerts_official"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="group"
          >
        <FaTelegram className="h-6 w-6 text-white group-hover:text-gray-300" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
