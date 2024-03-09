"use client";
import React from "react";

const Footer = () => {
  <div className="flex justify-center text-xs mb-2 gap-1">
    <div>Made with love by, </div>
    <div
      className=" cursor-pointer font-semibold"
      onClick={() => {
        window.open("https://rahultalukdar.in", "_blank");
      }}
    >
      {" "}
      Rahul Talukdar
    </div>
  </div>;
};

export default Footer;
