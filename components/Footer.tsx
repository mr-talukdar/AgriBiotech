"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between text-xs mb-2 gap-1">
      <Link href="/termsofservice" className=" hover:underline">
        Terms of Service
      </Link>
      <div className="flex ">
        <div>Made with love by, </div>
        <a
          className=" cursor-pointer font-semibold hover:underline"
          href="https://rahultalukdar.in"
          target="_blank"
        >
          Rahul Talukdar
        </a>
      </div>
    </div>
  );
};

export default Footer;
