import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const BountyBanner = () => {
  return (
    <div className="w-screen bg-black">
      <div className="container-fix w-full flex  gap-4 flex-col items-center justify-center">
        <Button
          className="tracking-widest text-xs md:text-base font-bold uppercase cursor-default rounded-full"
          variant={"banner"}
        >
          Upto
        </Button>

        <div className="flex items-center justify-between gap-8">
          <Image
            alt="about-image-l"
            src={"/images/banner-l-shape.png"}
            className="w-10 md:w-20 h-fit"
            width={1920}
            height={1080}
          />
          <h1 className="uppercase bg-gradient bg-clip-text text-transparent font-bold text-lg md:text-2xl lg:text-7xl text-center">
            $45000 <br /> Bounties
          </h1>
          <Image
            alt="about-image-r"
            src={"/images/banner-r-shape.png"}
            className="w-10 md:w-20 h-fit"
            width={1920}
            height={1080}
          />
        </div>
        <Link href="https://hackverse2024.devfolio.co/">
        <Button
          className="tracking-widest active:scale-90 duration-200 transition-all hover:shadow-white/20 hover:shadow-xl active:shadow-none ease-out font-bold uppercase bg-black border-4 border-[#A361E9] text-white rounded-full"
          variant={"banner"}
        >
          Apply to Hack
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default BountyBanner;
