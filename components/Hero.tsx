import Image from "next/image";
import { Button } from "./ui/button";
import DimoHack from "../public/images/Dimo White.svg";
import heroRight from "../public/images/hero-r-logo.svg";
import heroLeft from "../public/images/hero-l-logo.svg";
import SRM from "../public/images/Srm White.svg";
import texus from "../public/images/Texus White.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="h-fix flex items-center flex-col justify-center"
      style={{
        backgroundImage: `url('./images/hero-bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center flex-col gap-4 md:-mt-[55px]">
        <div className="section flex flex-col justify-center items-center h-[10rem] w-[25rem] mt-16">
          <Image
            src={DimoHack}
            alt="DimoHack"
            className="sm:w-[180px] w-[120px]"
          />
          <p className="mt-4 mb-2">P r e s e n t s</p>
        </div>
        <div className="flex justify-between items-center md:gap-12 lg:gap-15">
          <Image className="hidden md:flex " src={heroLeft} alt="hero-l" />

          <h1 className="tracking-wider text-center font-extrabold text-3xl md:text-7xl lg:text-7xl xl:text-[8rem] bg-gradient bg-clip-text text-transparent">
            HACKVERSE
          </h1>

          <Image className="hidden md:flex" src={heroRight} alt="hero-r" />
        </div>
        <p className="sm:tracking-widest text-center">{`TamilNadu's Largest Web3 Hackathon`}</p>
        <p className="tracking-widest text-center">April 06 & 07, 2024</p>

        <Link href="https://hackverse2024.devfolio.co/">
          <Button
            className="tracking-widest font-bold uppercase border-2 border-white bg-gradient-to-b from-[#230048] to-[#004945] text-center text-white hover:bg-gradient-to-r"
            variant={"banner"}
          >
            Apply Now
          </Button>
          <button></button>
        </Link>
        <div className="flex">
          <div className="mr-2">
            <Image src={SRM} alt="SRM" className="sm:w-[180px] w-[100px]" />
          </div>
          <div className="ml-2">
            <Image src={texus} alt="Texus" className="sm:w-[180px] w-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
