"use client";

import React, { useEffect, useState } from "react";
import AboutPG from "./AboutPG";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="about"
      className=" h-screen relative flex  flex-col md:flex-row md:top-48 top-4  justify-center"
    >
      <div
        className={
          isMobile ? " text-center md:pt-10  flex flex-col " : "hidden"
        }
      >
        <p className="  text-bold"> OUR STORY </p>
        <h1 className="text-2xl text-bold">About Agri Biotech</h1>
      </div>

      <img src="/AboutUS-FG.png" className=" scale-50" />

      <div
        className={
          isMobile
            ? "hidden"
            : "text-left h-f md:pt-10 pt-5 flex flex-col justify-center  "
        }
      >
        <p className=" text-2xl text-bold"> OUR STORY </p>
        <h1 className="text-4xl text-bold">About Agri Biotech</h1>
        <div className=" w-4/5 text-left text-md ">
          <AboutPG />
        </div>
      </div>
      <div className={isMobile ? " text-xs text-center px-12" : "hidden"}>
        <AboutPG />
      </div>
    </div>
  );
};

export default AboutUs;
20;
