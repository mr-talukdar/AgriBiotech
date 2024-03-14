import React from "react";
import ProductCard from "@/components/products/ProductsCard";
import { PRODUCTS } from "@/constants";

const Products = () => {
  return (
    <div className="md:mt-52  justify-center mb-20 md:grid md:grid-flow-col md:grid-rows-2 md:gap-32 flex flex-col gap-10 ml-12 md:ml-0">
      {PRODUCTS.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Products;
