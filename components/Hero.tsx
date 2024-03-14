import Image from "next/image";
import { Button } from "./ui/button";
import DimoHack from "../public/images/dimo-hack.svg";
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
      <div className="flex items-center flex-col gap-4">
        <div className="section flex flex-col justify-center items-center h-[10rem] w-[25rem] mb-6">
            <Image src={DimoHack} width={280} alt="DimoHack" />
            <p className="mt-4 mb-2">P r e s e n t s</p>
        </div>
        <h1 className="tracking-wider text-center font-bold text-2xl md:text-6xl lg:text-7xl xl:text-7xl bg-gradient bg-clip-text text-transparent cursor-default">
          H A C K V E R S E
        </h1>
        <p className="tracking-widest text-center">{`The Next Big Thing`}</p>
        <p className="tracking-widest text-center">April 06 & 07, 2024</p>

        <Link href="https://hackverse2024.devfolio.co/">
        <Button
          className="tracking-widest font-bold uppercase text-center"
          variant={"banner"}
        >
          Apply Now
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
