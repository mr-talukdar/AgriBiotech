import React from "react";
import ProductCard from "@/components/products/ProductsCard";
import { PRODUCTS } from "@/constants";
import { useQuery } from "urql";

const ProductsListing = () => {
  const [result] = useQuery({
    query: `
      query {
         products {
          id
  	slug
    name
    applications
    description
    why
    image {
      url
    }
    featured
  }
      }
    `,
  });
  const { data, fetching, error } = result;
  return (
    <div className="md:mt-52 md:grid md:grid-flow-col md:grid-rows-2  justify-center mb-20  md:gap-32 flex  flex-col gap-10 ml-12 md:ml-0">
      {/* {PRODUCTS.map((product) => (
        <ProductCard product={product} />
      ))} */}
      {data?.products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsListing;
