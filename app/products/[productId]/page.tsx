"use client";
import ContactForm from "@/components/ContactUs";
import { UrqlProvider } from "@/components/urqlClient";
import Link from "next/link";
import React from "react";

import { useQuery } from "urql";

const GET_PRODUCT = `
`;

const DataItem = ({ productId }: { productId: string }) => {
  const [result] = useQuery({
    query: `
      query GetProduct($productId:String!) {
        product(where: {slug: $productId}) {
          name
          why
          description
          image {
            url
          }
        }
      }
    `,
    variables: { productId },
  });
  const { data, fetching, error } = result;
  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  const PRODUCT = data?.product;

  return (
    <div className="container mx-auto px-4 py-20 lg:py-52">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <img
            className="rounded-lg mb-4"
            src={PRODUCT.image.url}
            alt={PRODUCT.name}
            width={400}
            height={400}
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4">{PRODUCT.name}</h1>
          <p className="text-gray-600 mb-4">{PRODUCT.description}</p>
          <h2 className="text-xl font-semibold mb-2">Why {PRODUCT.name}?</h2>
          <ul className="text-left list-disc">
            {PRODUCT.why.map((reason: string, index: number) => (
              <li key={index} className="mb-2">
                {reason}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link
              href="/products"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductPage = ({ params }: { params: { productId: string } }) => {
  return (
    <UrqlProvider>
      <div className="container mx-auto px-4 py-8">
        <DataItem productId={params.productId} />
        <ContactForm />
      </div>
    </UrqlProvider>
  );
};

export default ProductPage;
