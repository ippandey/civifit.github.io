import Image from "next/image";
import React from "react";
import Counter from "./Counter";

const data = [
  {
    number: 1800,
    suffix: "+",
    statement: "Empowered Waste Pickers",
    image:
      "https://images.unsplash.com/photo-1547984556-0469ba3fa4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1457&q=80",
  },
  {
    number: 250,
    suffix: "+",
    statement: "Professional Workers",
    image:
      "https://images.unsplash.com/photo-1547984556-0469ba3fa4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1457&q=80",
  },
  {
    number: 30,
    suffix: "+",
    statement: "Industries Served",
    image:
      "https://images.unsplash.com/photo-1547984556-0469ba3fa4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1457&q=80",
  },
  {
    number: 80,
    suffix: "k Kg+",
    statement: "Plastic Waste Recycle",
    image:
      "https://images.unsplash.com/photo-1547984556-0469ba3fa4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1457&q=80",
  },
];

export default function Impact() {
  return (
    <div className="text-center py-5">
      <h1 className="text-3xl font-black text-black/70 dark:text-white/70">
        Our Impact
      </h1>
      <p className="mx-auto text-[15px] text-black/70 dark:text-white/70 px-6 py-4 max-w-[750px]">
        Zero waste is making social, economic, and environmental impacts in the
        cities it operates.
      </p>
      <div className="relative w-full max-w-[70rem] m-auto flex px-6 py-2 pt-6 sm:flex-row flex-col flex-wrap justify-center items-center gap-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative w-full sm:min-w-[250px] sm:flex-1 h-[200px] shrink-0 overflow-hidden rounded-[4px]"
          >
            <Image
              src={item.image}
              alt={index as unknown as string}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute w-full h-full bg-black/30 flex flex-col items-center justify-center gap-2">
              <Counter number={item.number} suffix={item.suffix} />
              <p className="text-[15px] text-white/80 font-medium">
                {item.statement}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
