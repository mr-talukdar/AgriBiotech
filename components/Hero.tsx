import { Span } from "next/dist/trace";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 pt-32  pb-96  md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative md:mt-20 z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 text-white lg:bold-88">
          Welcome to <br />
          <span className=" text-black"> Agri Biotech</span>
        </h1>
        <p
          className="  text-xl  md:mt-20 mt-8 text-white  font-bold xl:max-w-[520px]"
          style={{ textShadow: "1px 1px black" }}
        >
          Agri Biotech-India is focusing to promote an ecologically sustainable
          agriculture with the help of modern biotechnology. Our vision is to
          provide growth and development of rural economy by using research and
          technological support.
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
