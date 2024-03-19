"use client";
import ContactForm from "@/components/ContactUs";
import HeroProducts from "@/components/products/HeroProducts";
import ProductsListing from "@/components/products/ProductsListing";

import React from "react";

import { useQuery } from "urql";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";

const page = () => {
  const client = new Client({
    url: "https://ap-south-1.cdn.hygraph.com/content/clty7kh150ci507wdhdyklati/master",
    exchanges: [cacheExchange, fetchExchange],
  });

  return (
    <Provider value={client}>
      <div className="flex flex-col">
        <HeroProducts />
        <ProductsListing />
        <ContactForm />
      </div>
    </Provider>
  );
};

export default page;
