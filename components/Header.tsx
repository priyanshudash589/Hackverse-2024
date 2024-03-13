"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { navPaths } from "@/lib/constants";
import { ArrowDown, MenuIcon } from "lucide-react";
import Image from "next/image";
import HVlogo  from "@/public/images/hv-logo.svg";
const Header = () => {
  return (
    <div className="bg-[#17121d] sticky top-0 z-50">
      <div className="flex  justify-between p-2 lg:px-16 xl:max-w-7xl xl:mx-auto items-center">
        <Link href={"/"} className=" text-base font-bold">
          <Image src={ HVlogo } width={140} alt="logo" />
        </Link> 
        <div className="hidden md:inline-flex w-full  items-center">
          <div className="mx-auto flex gap-6">
            {navPaths.map((item, index) => {
              return (
                <Link key={index} href={item.path}>
                  <p
                    className={"text-sm text-[#9D9BB5] font-medium rounded-md"}
                  >
                    {item.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
        <Button
          variant={"banner"}
          className="hidden md:inline-flex items-center rounded-none rotate-2 gap-2 relative top-10"
        >
          <p className="text-sm font-serif">April 06 & 07, 2024</p>
        </Button>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <MenuIcon className="w-7 h-7" />
          </SheetTrigger>
          <SheetContent className="bg-[#130F17] border-none">
            <SheetHeader>
              <SheetTitle className="text-white">Contents</SheetTitle>
              <SheetDescription>
                {navPaths.map((item, index) => {
                  return (
                    <Link href={item.path} key={index}>
                      <div className="text-base flex items-center justify-between font-bold my-4 tracking-wider rounded-md">
                        <SheetClose>{item.name}</SheetClose>
                      </div>
                    </Link>
                  );
                })}
                <SheetFooter className="mt-5">
                  <Button
                    variant={"banner"}
                    className="flex items-center gap-2 rotate-1"
                  >
                    <p>April 06 & 07, 2024</p>
                  </Button>
                </SheetFooter>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
