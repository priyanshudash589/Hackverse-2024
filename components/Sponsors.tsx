"use client";

import { sponsors } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div
      style={{
        backgroundImage: `url('./images/sponsors-bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="sponsors"
      className="w-screen bg-black border-y-4 border-white"
    >
      <div className="container-fix">
        <h1 className="uppercase text-center text-stroke-2 text-transparent font-bold tracking-widest sm:tracking-normal text-5xl md:text-7xl lg-text-7xl">
          Sponsors
        </h1>

        <div className="bg-black/20 mt-8 container-fix">
          <SponsorsCategory title="Diamond" />
          <SponsorsCategory title="Gold" />
          <SponsorsCategory title="Silver" />
        </div>

        <h1 className="uppercase mt-8 text-center text-stroke-2 text-transparent font-bold tracking-widest text-5xl md:text-6xl lg:text-7xl">
          Partners
        </h1>

        <div className="bg-black/20 mt-8 container-fix">
          <Marquee pauseOnHover autoFill className="flex gap-2">
            {sponsors.partners.map((sponsor, index) => {
              return (
                <Image
                  key={index}
                  alt="sponsor-image"
                  src={sponsor}
                  width={1920}
                  height={1090}
                  className="w-32 mx-2 h-fit rounded-lg"
                />
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

interface SponsorsCategoryProps {
  title: "Diamond" | "Gold" | "Silver";
}

const SponsorsCategory = ({ title }: SponsorsCategoryProps) => {
  return (
    <div>
      <p
        className={cn(
          title == "Diamond"
            ? "text-[#01FFFF]"
            : title == "Gold"
            ? "text-[#FBFF14]"
            : title == "Silver"
            ? "text-[#EEDFD0]"
            : "text-[#FFFFFF]",
          "text-center font-bold text-lg uppercase"
        )}
      >
        {title}
      </p>

      <div>
        {title === "Diamond" && (
          <div className="grid grid-cols-2 grid-flow-row-dense md:grid-cols-3 gap-4 my-4 rounded-lg">
            {sponsors.diamond.map((sponsor, index) => {
              return (
                <div key={index}>
                  <Image
                    width={1920}
                    height={1080}
                    src={sponsor}
                    className="rounded-lg"
                    alt="sponsor-image"
                  />
                </div>
              );
            })}
          </div>
        )}
        {title === "Gold" && (
          <div className="grid grid-cols-2 grid-flow-row-dense md:grid-cols-3 gap-4 my-4 rounded-lg">
            {sponsors.gold.map((sponsor, index) => {
              return (
                <div key={index}>
                  <Image
                    width={1920}
                    height={1080}
                    src={sponsor}
                    className="rounded-lg h-[15rem]"
                    alt="sponsor-image"
                  />
                </div>
              );
            })}
          </div>
        )}
        {title === "Silver" && (
          <div className="grid grid-cols-2 grid-flow-row-dense md:grid-cols-3 gap-4 my-4 rounded-lg">
            {sponsors.silver.map((sponsor, index) => {
              return (
                <div key={index}>
                  <Image
                    width={1920}
                    height={1080}
                    src={sponsor}
                    className="rounded-lg"
                    alt="sponsor-image"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
