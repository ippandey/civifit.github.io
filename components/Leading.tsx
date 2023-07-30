import Image from "next/image";
import React from "react";

export default function Leading() {
  return (
    <div className="relative w-full h-fit max-w-[70rem] m-auto flex px-6 py-2 pt-6 sm:flex-row flex-col flex-wrap justify-center items-center gap-3">
      <div className="relative sm:flex-1 max-sm:w-full h-[300px] shrink-0 overflow-hidden rounded-[4px]">
        <Image
          src={"/leading.avif"}
          alt={"leading"}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-1 max-sm:text-center max-sm:w-full h-[300px] shrink py-5 px-5 flex flex-col">
        <h2 className="text-3xl font-black text-black/70 dark:text-white/70">
          Leading the Way
        </h2>
        <p className="my-4 text-black/80 dark:text-white/70">
          Our leadership serves with a focus on maximizing resource value while
          minimizing environmental impact so that both our economy and
          environment can thrive.
        </p>
      </div>
    </div>
  );
}
