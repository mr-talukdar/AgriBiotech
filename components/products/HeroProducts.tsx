import React from "react";
import Image from "next/image";

const HeroProducts = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 pt-32  pb-96  md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-mapProd" />

      <div className="relative md:mt-20 z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 text-white lg:bold-88">
          Explore our <br />
          wide range of <br />
          <span className=" text-green-50">Products</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroProducts;
