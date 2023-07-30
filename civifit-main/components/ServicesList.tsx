import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "Waste Collection",
    description:
      "Waste management services collect waste from residential, commercial, and industrial areas. This includes scheduled pick-ups of garbage, recyclables, organic waste, and hazardous materials.",
    image:
      "https://images.unsplash.com/photo-1495556650867-99590cea3657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 2,
    title: "Recycling",
    description:
      "Many waste management services facilitate recycling programs. They collect recyclable materials such as paper, plastics, glass, and metal, and ensure they are properly sorted and sent for recycling.",
    image:
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 3,
    title: "Waste Sorting and Segregation",
    description:
      "Waste management companies have facilities where they sort and segregate different types of waste. They use manual and mechanical processes to separate recyclables from non-recyclables, hazardous waste from non-hazardous waste, and organic waste from other waste streams.",
    image:
      "https://images.unsplash.com/photo-1523293915678-d126868e96f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 4,
    title: "Hazardous Waste Management",
    description:
      "Specialized waste management services handle hazardous materials, such as chemicals, medical waste, electronic waste (e-waste), and batteries. They ensure proper containment, transportation, and disposal of these hazardous materials, following strict regulations and guidelines.",
    image:
      "https://images.unsplash.com/photo-1495556650867-99590cea3657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
];

export default function ServicesList() {
  return (
    <div className="w-full max-w-[70rem] m-auto flex flex-col md:gap-10 px-5 py-5 pb-10">
      {data.map((item) => (
        <div
          className="flex md:h-[350px] h-[600px] md:gap-4 md:flex-row flex-col"
          key={item.id}
        >
          <div className="relative h-full flex-1">
            <Image
              src={item.image}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="md:flex-1 py-10 flex flex-col gap-3">
            <h1 className="text-4xl font-extrabold text-black/70 dark:text-white/70">
              {item.title}
            </h1>
            <p className="text-black/80 dark:text-white/70">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
