import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex items-center justify-between flex-col md:flex-row h-fit px-5 py-5 md:px-32 bg-black/90 text-white/80 dark:bg-green-600">
      <div className="sm:w-40 w-32 h-32 sm:h-32 relative shrink-0 sm:flex hidden">
        <Image
          src={"/svg/logo-white.svg"}
          className="mix-blend-screen"
          alt={"logo"}
          fill
          priority
        />
      </div>
      <div className="flex flex-col md:flex-row max-md:gap-2 max-md:w-full flex-1 justify-between md:pl-32 ">
        <div className="flex-1 flex flex-col gap-1">
          <h3 className="text-xl font-semibold">Links</h3>
          <ul className="text-[16px] max-md:flex flex-row gap-3 flex-wrap">
            <li>
              <Link href={"#"}>About us</Link>
            </li>
            <li>
              <Link href={"#"}>Services</Link>
            </li>
            <li>
              <Link href={"#"}>Process</Link>
            </li>
            <li>
              <Link href={"#"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <h3 className="text-xl font-semibold">Contact</h3>
          <div className="text-[16px]">
            abc@gmail.com
            <br />
            +12 1234 432 234
            <br />
          </div>
        </div>
        <div className="flex-1 flex flex-col md:text-center gap-1">
          <h3 className="text-xl font-semibold">Location</h3>
          <div className="text-[16px]">
            24392 Lanark Rd, <br />
            Brooksville, Florida 34601,
            <br /> United States
            <br /> +1 352-796-7788
          </div>
        </div>
      </div>
    </div>
  );
}
