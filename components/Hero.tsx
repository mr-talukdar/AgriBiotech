import { Span } from "next/dist/trace";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">
          Welcome to <br />
          Agri
          <span className=" text-gray-50 md:text-white">Biotech</span>
        </h1>
        <p className="text-[20px] font-[500] mt-6 text-black xl:max-w-[520px]">
          Tempor occaecat elit excepteur irure do ex occaecat consectetur quis
          veniam ex ipsum commodo aliquip. Sit minim quis aute culpa enim in
          laborum pariatur eu aliquip esse commodo deserunt mollit. Do sint amet
          excepteur cupidatat laboris culpa minim est amet adipisicing proident.
          Quis duis et nisi velit excepteur anim sit fugiat eu tempor nulla.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1 text-white">
              Excellent Reviews
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
