"use client";
import { LegacyRef } from "react";
import CountUp from "react-countup";

type props = {
  number: number;
  suffix: string;
};

export default function Counter({ number, suffix }: props) {
  return (
    <CountUp
      delay={0}
      duration={10}
      start={0}
      end={number}
      startVal={0}
      suffix={suffix}
      enableScrollSpy
    >
      {({ countUpRef }) => (
        <div
          className="text-white/80 font-extrabold text-2xl"
          ref={countUpRef as LegacyRef<HTMLDivElement>}
        ></div>
      )}
    </CountUp>
  );
}
