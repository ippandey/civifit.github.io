import Image from "next/image";
import { RiRecycleFill } from "react-icons/ri";

export default function Hero() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-black text-black/70 dark:text-white/70">
        ZERO WASTE
      </h1>
      <p className="mx-auto text-[16px] text-black/70 dark:text-white/70 px-6 py-4 max-w-[750px]">
        Reuse, recycle, and reduce the waste for a better future. Increase
        greenery by recycling waste. Save earth by reusing, recycling waste.
        Waste isn't waste until we waste.
      </p>
      <div className="relative w-full max-w-5xl m-auto flex px-6 py-2 pt-6 sm:flex-row flex-col justify-center items-center gap-3">
        <div className="sm:w-1/2 w-full sm:h-72 h-[270px] relative overflow-hidden rounded-[10px]">
          <Image
            src={
              "https://images.unsplash.com/photo-1523293915678-d126868e96f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
            alt="First Slide"
            style={{ objectFit: "cover" }}
            fill
            priority
            fetchPriority="high"
          />
        </div>
        <div className="absolute w-20 h-20 bg-green-500 flex items-center justify-center overflow-hidden z-10 rounded-full border-[10px] dark:border-[rgb(25,25,25)] border-[rgb(240,255,244)]">
          <RiRecycleFill className="w-12 h-12 text-white font-black" />
        </div>
        <div className="sm:w-1/2 w-full sm:h-72 h-[270px] relative overflow-hidden rounded-[10px]">
          <Image
            src={
              "https://images.unsplash.com/photo-1547984556-0469ba3fa4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1457&q=80"
            }
            alt="Second Slide"
            style={{ objectFit: "cover" }}
            fill
            priority
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
}
