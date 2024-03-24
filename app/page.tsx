"use client";
import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactUs";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { UrqlProvider } from "@/components/urqlClient";

export default function Home() {
  return (
    <UrqlProvider>
      <Hero />
      <AboutUs />
      <Products />
      <ContactForm />
      <Footer />
    </UrqlProvider>
  );
}
