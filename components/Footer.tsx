"use client ";

import Image from "next/image";
import { IconType } from "react-icons";

import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black">
      <div className="bg-black p-6 border-t border-white/20 ">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-center text-stroke-2 text-transparent text-7xl font-light">
            Join our Community
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <SocialCard
              id="@hackverse.ind"
              title="Instagram"
              icon={FaTwitter}
            />
            <SocialCard id="@hackverse.ind" title="Twitter" icon={FaTwitter} />
            <SocialCard id="@hackverse.ind" title="Youtube" icon={FaTwitter} />
          </div>
        </div>
      </div>
      <Image
        alt="footer-image"
        className="w-fit h-26 mx-auto"
        src="/images/footer-image.png"
        width={1920}
        height={1080}
      />
      <div className="border-t border-white/20 p-4 bg-[#130F17]">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-col-reverse gap-4 md:flex-row">
          <div>
            <p className="font-bold text-center md:text-left tracking-widest text-xs">
              &copy; TEXUS x HACKVERSE
            </p>
            <p className="font-bold text-center md:text-left tracking-widest text-xs">
              Designed and Developed by Texus x Hackverse Team
            </p>
          </div>
          <Image
            alt="texus-logo"
            src={"/images/texus-logo.png"}
            width={1920}
            height={1080}
            className="w-20 h-fit invert"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

interface SocialCardProps {
  icon: IconType;
  title: "Twitter" | "Instagram" | "Youtube";
  id: string;
}

const SocialCard = ({ icon, title, id }: SocialCardProps) => {
  const Icon = icon;

  return (
    <div className="flex flex-col gap-4 hover:shadow-xl hover:shadow-white/15 cursor-pointer active:scale-95 transition-all duration-300 ease-out">
      <div className="w-full h-[0.1px] bg-white/50" />
      <div className="px-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Icon />
          <p className="text-sm uppercase">{title}</p>
        </div>
        <p className="text-sm font-sans font-bold text-[#6B4098]">{id}</p>
      </div>
      <div className="w-full h-[0.1px] bg-white/50" />
    </div>
  );
};
