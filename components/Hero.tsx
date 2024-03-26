import Image from "next/image";
import { Button } from "./ui/button";
import DimoHack from "../public/images/dimo1.png";
import heroRight from "../public/images/hero-r-logo.svg";
import heroLeft from "../public/images/hero-l-logo.svg";
import pnblogo from "../public/images/pnblogo.png";
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
        <div className="flex justify-center mt-16">
          <div className="section flex flex-col justify-center items-center h-[10rem] w-[12.5rem]">
            <Image
              src={pnblogo}
              alt="pnblogo"
              className="sm:w-[180px] w-[110px]"
            />
            <p className="mt-4 mb-2">S p o n s o r e d</p>
            <p className="mt-2 mb-4">B y</p>
          </div>
          <div className="section flex flex-col justify-center items-center h-[10rem] w-[12.5rem] ml-10">
            <Image
              src={DimoHack}
              alt="dimohack"
              className="sm:w-[180px] w-[110px]"
            />
            <p className="mt-4 mb-2">P o w e r e d</p>
            <p className="mt-2 mb-4">B y</p>
          </div>
        </div>
        <div className="flex justify-between items-center md:gap-12 lg:gap-15">
          <Image className="hidden md:flex " src={heroLeft} alt="hero-l" />

          <h1 className="tracking-wider text-center font-extrabold text-4xl md:text-7xl lg:text-7xl xl:text-[8rem] bg-gradient bg-clip-text text-transparent">
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
        <p className="text-center text-3xl font-bold mt-1"><a href="https://maps.app.goo.gl/u5nCaUoFmD1tF79F7">RMZ One Paramount</a></p>
        <p className="text-center mt-1">Venue Partner</p>
      </div>
    </div>
  );
};

export default Hero;
