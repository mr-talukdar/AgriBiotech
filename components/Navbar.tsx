"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./button";

const Navbar = () => {
  return (
    <nav className=" border-2  flexBetween  padding-container  relative z-30 py-5">
      <Link href="/" className="flex items-center justify-center">
        <Image src="/logo.jpeg" alt="logo" width={60} height={20} />
        <p className=" font-bold text-3xl p-2 ">
          Agri<span className=" text-teal-500">Biotech</span>
        </p>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
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
