"use client";
import { UrqlProvider } from "@/components/urqlClient";
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
  if (data?.product) {
    const PRODUCT = data.product;
    console.log(PRODUCT);
    return (
      <div className=" flex flex-col justify-center text-center">
        <img
          className=" self-center"
          src={PRODUCT.image.url}
          width={50}
          height={50}
        />
        <div>{PRODUCT.name}</div>
        <p>{PRODUCT.description}</p>
        <h1> Why {PRODUCT.name}?</h1>
        <ul>
          {PRODUCT.why.map((why: string) => {
            return <li key={why}>{why}</li>;
          })}
        </ul>
      </div>
    );
  }
};

const page = ({ params }: { params: { productId: string } }) => {
  return (
    <UrqlProvider>
      <DataItem productId={params.productId} />
    </UrqlProvider>
  );
};

export default page;
