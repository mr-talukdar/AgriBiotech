"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Navbar = () => {
  const clickHandler = (event: Event) => {
    event.preventDefault();
    const targetElementId = (event.target as HTMLAnchorElement).getAttribute(
      "href"
    );
    if (targetElementId) {
      const targetId = targetElementId.substring(1);
      handleSmoothScroll(targetId);
    }
  };

  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    // Attach click event listener to all navigation links
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
      link.addEventListener("click", clickHandler as EventListener);
    });

    // Clean up event listeners on component unmount
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", clickHandler as EventListener);
      });
    };
  }, []);

  return (
    <nav className="   flexBetween  padding-container  relative z-30 py-5 ">
      <Link href="/" className="flex items-center justify-center">
        <Image src="/logo.png" alt="logo" width={60} height={60} />
        <p className=" font-bold text-white text-3xl p-2 ">
          Agri<span className=" text-teal-500">Biotech</span>
        </p>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <a
            href={link.href}
            key={link.key}
            className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:underline"
          >
            {link.label}
          </a>
        ))}
      </ul>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
