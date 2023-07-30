import React from "react";
import { RiArrowDownFill } from "react-icons/ri";

export default function ProcessFlow() {
  return (
    <div className="max-w-[70rem] m-auto flex flex-col items-center px-5 py-5">
      <h1 className="text-3xl font-black text-black/70 dark:text-white/70">
        Process Flow
      </h1>
      <div className="flex flex-col gap-2 max-w-[60rem] text-center py-5 dark:text-white/80 text-black/80">
        <p className="">
          Collection: We have a reliable and efficient waste collection system
          in place that covers residential, commercial, and industrial areas.
          Our team utilizes designated containers and scheduled pick-ups to
          gather waste, ensuring a clean and clutter-free environment.
        </p>
        <RiArrowDownFill className="w-10 h-10 mx-auto" />
        <p className="">
          Transportation: Once collected, the waste is carefully transported to
          our facility using specialized vehicles equipped to handle different
          waste types. We prioritize safe transportation practices to prevent
          any potential harm to the environment or public health.
        </p>
        <RiArrowDownFill className="w-10 h-10 mx-auto" />
        <p className="">
          Recovery: At our facility, we employ advanced technologies and sorting
          techniques to maximize resource recovery. Our trained personnel
          carefully sort and segregate different waste streams, such as
          recyclables, hazardous materials, and organic waste. This enables us
          to divert materials from landfills and redirect them to appropriate
          recycling and recovery processes.
        </p>
        <RiArrowDownFill className="w-10 h-10 mx-auto" />
        <p className="">
          Processing: The sorted waste undergoes various processing methods
          based on its nature. Recyclable materials, such as paper, plastics,
          glass, and metals, are processed through cutting-edge recycling
          technologies to transform them into valuable resources. Organic waste
          may be composted to produce nutrient-rich soil amendments, while
          hazardous waste undergoes specialized treatment processes to ensure
          safe handling and disposal.
        </p>
        <RiArrowDownFill className="w-10 h-10 mx-auto" />
        <p className="">
          Disposal: As part of our waste management process, we prioritize
          responsible and compliant disposal of residual waste that cannot be
          recycled or recovered. We adhere to stringent regulations and
          environmental guidelines to ensure that waste is disposed of in
          designated landfills or treatment facilities designed to minimize
          environmental impact.
        </p>
      </div>
    </div>
  );
}
