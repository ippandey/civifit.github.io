import Image from "next/image";
import React from "react";

export default function AboutBanner() {
  return (
    <div className="text-center px-5 py-10">
      <h1 className="text-4xl font-black text-black/70 dark:text-white/70">
        WE ARE So Much More Than "Managing Waste"
      </h1>
      <p className="mx-auto text-[16px] text-black/70 dark:text-white/70 px-6 py-4 max-w-[750px]">
        Focused on people, service and sustainability, WM is doing things the
        right way today so we can all share in a better tomorrow.
      </p>
    </div>
  );
}
