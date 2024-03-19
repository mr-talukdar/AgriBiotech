"use client";
import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactUs";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import Products from "@/components/Products";

import { Client, Provider, cacheExchange, fetchExchange } from "urql";
import { useQuery } from "urql";

const client = new Client({
  url: "https://ap-south-1.cdn.hygraph.com/content/clty7kh150ci507wdhdyklati/master",
  exchanges: [cacheExchange, fetchExchange],
});

export default function Home() {
  return (
    <Provider value={client}>
      <Hero />
      <AboutUs />
      <Products />
      <ContactForm />
      <Footer />
    </Provider>
  );
}
