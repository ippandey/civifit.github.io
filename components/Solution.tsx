import Image from "next/image";
import React from "react";

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1547984556-0469ba3fa4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1457&q=80",
    title: "E-waste management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rerum quia odit! Eum, reiciendis! Dolores, vero. Pariatur odio sint dolores id dignissimos nemo accusantium modi sit ullam, est fuga nostrum.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523293915678-d126868e96f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "E-waste management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rerum quia odit! Eum, reiciendis! Dolores, vero. Pariatur odio sint dolores id dignissimos nemo accusantium modi sit ullam, est fuga nostrum.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1547984556-0469ba3fa4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1457&q=80",
    title: "E-waste management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rerum quia odit! Eum, reiciendis! Dolores, vero. Pariatur odio sint dolores id dignissimos nemo accusantium modi sit ullam, est fuga nostrum.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523293915678-d126868e96f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "E-waste management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rerum quia odit! Eum, reiciendis! Dolores, vero. Pariatur odio sint dolores id dignissimos nemo accusantium modi sit ullam, est fuga nostrum.",
  },
];

export default function Solution() {
  return (
    <div className="text-center py-5">
      <h1 className="text-3xl font-black text-black/70 dark:text-white/70">
        Solution We Provide
      </h1>
      <p className="mx-auto text-[15px] text-black/70 dark:text-white/70 px-6 py-4 max-w-[750px]">
        We Collect And Recycle your waste. You Just have to your Rewards. Redeem
        that and keep place clean.
      </p>
      <div className="relative w-full max-w-5xl m-auto flex px-6 py-2 pt-6 sm:flex-row flex-col flex-wrap justify-center items-center gap-3">
        {data.map((item, index) => (
          <div
            className="relative sm:flex-1 w-full sm:min-w-[300px] h-80"
            key={index}
          >
            <Image
              src={item.image}
              alt="First Slide"
              style={{ objectFit: "cover" }}
              fill
              priority
              fetchPriority="high"
            />
            <div className="absolute w-full h-full bg-black/40 flex flex-col items-center justify-center gap-2">
              <h1 className="text-2xl text-white/90 font-black px-5">
                {item.title}
              </h1>
              <p className="text-sm text-white/90 font-medium p-2 px-5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
