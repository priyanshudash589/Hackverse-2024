import Image from "next/image";
import { Button } from "./ui/button";
import DimoHack from "../public/images/dimo-hack.svg";
import heroRight from "../public/images/hero-r-logo.svg";
import heroLeft from "../public/images/hero-l-logo.svg";
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
      <div className="flex items-center flex-col gap-4 md:-mt-[100px]">
        
        <div className="section flex flex-col justify-center items-center h-[10rem] w-[25rem] mb-6">
            <Image src={DimoHack} width={180} alt="DimoHack" />
            <p className="mt-4 mb-2">P r e s e n t s</p>
        </div>
        <div className="flex justify-between items-center md:gap-12 lg:gap-15">

          <Image className="hidden md:flex " src={heroLeft} alt="hero-l" />
      
          <h1 className="tracking-wider text-center font-extrabold text-3xl md:text-7xl lg:text-7xl xl:text-[8rem] bg-gradient bg-clip-text text-transparent">
           HACKVERSE 
          </h1>

          <Image className="hidden md:flex" src={heroRight}  alt="hero-r" />

          </div>
          <p className="tracking-widest text-center">{`TamilNadu's Largest Web3 Hackathon`}</p>
          <p className="tracking-widest text-center">April 06 & 07, 2024</p>

          <Link href="https://hackverse2024.devfolio.co/">
          <Button
          className="tracking-widest font-bold uppercase text-center"
          variant={"banner"}
          >
          Apply Now
          </Button>
            <button>
            </button>
          </Link>
        
      </div>
    </div>
  );
};

export default Hero;
