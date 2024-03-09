import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center text-xs mb-2 gap-1">
      <div>Made with love by, </div>
      <a
        className=" cursor-pointer font-semibold"
        href="https://rahultalukdar.in"
        target="_blank"
      >
        Rahul Talukdar
      </a>
    </div>
  );
};

export default Footer;
