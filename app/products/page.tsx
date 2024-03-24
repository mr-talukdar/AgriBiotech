"use client";
import ContactForm from "@/components/ContactUs";
import HeroProducts from "@/components/products/HeroProducts";
import ProductsListing from "@/components/products/ProductsListing";
import { UrqlProvider } from "@/components/urqlClient";

import React from "react";

const page = () => {
  return (
    <UrqlProvider>
      <div className="flex flex-col">
        <HeroProducts />
        <ProductsListing />
        <ContactForm />
      </div>
    </UrqlProvider>
  );
};

export default page;
