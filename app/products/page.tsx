import ContactForm from "@/components/ContactUs";
import HeroProducts from "@/components/products/HeroProducts";
import Products from "@/components/products/Products";

import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <HeroProducts />
      <Products />
      <ContactForm />
    </div>
  );
};

export default page;
