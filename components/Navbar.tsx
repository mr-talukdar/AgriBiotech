"use client";
// Import necessary modules
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleButtonClick = () => {
    console.log(isMobileMenuOpen);
    toggleMobileMenu();
    console.log(isMobileMenuOpen);
  };

  return (
    // Navbar container with background color and fixed positioning
    <nav className="md:bg-gray-900/10 bg-[#68514f] text-white w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and brand name */}
        <div>
          <Link href="/" className="flex items-center text-xl font-bold">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <span className="ml-2 text-black font-bold text-xl lg:text-2xl">
              Agri Biotech
            </span>
          </Link>
        </div>

        {/* Hamburger icon for mobile menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <Image
              src={isMobileMenuOpen ? "/close.svg" : "/menu.svg"}
              alt="menu"
              width={32}
              height={32}
            />
          </button>
        </div>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex gap-8">
          {/* Map through NAV_LINKS to create navigation links */}
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="text-lg text-black font-semibold hover:text-white transition duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="container mx-auto px-4 py-2">
          <ul className="flex flex-col gap-4">
            {/* Map through NAV_LINKS to create navigation links */}
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-lg font-semibold hover:text-green-500 transition duration-300"
                  onClick={handleButtonClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
