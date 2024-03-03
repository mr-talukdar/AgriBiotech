"use client";
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="2xl:w-full relative flex flex-col pt-40">
      <div className="my-10 px-5 text-4xl font-semibold">
        Our<span className=" text-green-50"> Products</span>
      </div>
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Product Name"
          subtitle="Product Type"
          peopleJoined="50+ Bought"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Product Name"
          subtitle="Product Type"
          peopleJoined="50+ Bought"
        />
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Product Name"
          subtitle="Product Type"
          peopleJoined="50+ Bought"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Product Name"
          subtitle="Product Type"
          peopleJoined="50+ Bought"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Want the Best</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Explore our diverse range of agricultural products and tools
            designed to optimize production. Discover innovative solutions that
            prioritize sustainability and efficiency, ensuring responsible
            practices for long-term success in farming.
          </p>
          <div
            className="text-white text-xl mt-2 hover:font-semibold cursor-pointer"
            onClick={() => {
              console.log("see more");
            }}
          >
            Explore More {`>>>`}
          </div>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
