"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface image {
  url: string;
}

// Define a type for the product
interface Product {
  name: string;
  description: string;
  applications: string;
  why: string[];
  price: number;
  image: image;
  slug: string;
}

// Define the props interface with the product prop
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/products/${product.slug}`);
  };

  return (
    <div className="max-w-xs  rounded overflow-hidden shadow-lg">
      <img className="w-full" src={product.image.url} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
