import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import '../../../i18n';
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from "next-i18next";

const Navbar = () => {
  const { t } = useTranslation('translation');
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t("Home") },
    { href: "/gallery", label: t("Gallery") },
    { href: "/pricing", label: t("Pricing") },
    { href: "/contact", label: t("Contact") },
    { href: "/aboutme", label: t("About Me") },
  ];

  return (
    <nav className="sticky top-0 bg-black text-ivory flex items-center p-4 shadow-lg z-10">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/foxx_logo.png"
          alt="A logo of a fox skull"
          width={80}
          height={80}
          className="mr-2"
        />
        <div className="logo-font text-4xl tracking-wide drop-shadow-lg whitespace-nowrap">
          The Foxx Forge
        </div>
      </div>

      {/* Desktop links */}
      <div className="flex-1 hidden md:flex justify-start ml-8 nav-link">
        <div className="flex space-x-6 text-3xl tracking-wide drop-shadow-lg">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-[#4b0c18] transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop language buttons */}
      <div className="hidden md:flex space-x-2 ml-4">
        <Link href={pathname} locale="en" aria-label="Switch to English"
          className="hover:bg-[#4b0c18] hover:text-ivory cursor-pointer px-2 py-1 rounded transition-colors duration-200">
          EN

        </Link>
        <Link href={pathname} locale="de" aria-label="Switch to German"
          className="hover:bg-[#4b0c18] hover:text-ivory cursor-pointer px-2 py-1 rounded transition-colors duration-200">

          DE

        </Link>
      </div>

      {/* Mobile menu toggle */}
      <div className="ml-auto md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="text-ivory focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4b0c18]"
        >
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-48 bg-black text-ivory rounded shadow-lg mt-2 p-4 flex flex-col space-y-4 z-20 md:hidden">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-[#4b0c18] transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <div className="flex space-x-2 mt-2">
            <Link href={pathname} locale="en">
              <button
                aria-label="Switch to English"
                className="hover:bg-[#4b0c18] hover:text-ivory cursor-pointer px-2 py-1 rounded transition-colors duration-200"
              >
                EN
              </button>
            </Link>
            <Link href={pathname} locale="de">
              <button
                aria-label="Switch to German"
                className="hover:bg-[#4b0c18] hover:text-ivory cursor-pointer px-2 py-1 rounded transition-colors duration-200"
              >
                DE
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
