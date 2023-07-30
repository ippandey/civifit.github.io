import React from "react";
import AboutBanner from "../../components/AboutBanner";
import Leading from "../../components/Leading";
import Commitment from "../../components/Commitment";
import CoreValues from "../../components/CoreValues";

export default function About() {
  return (
    <main className="">
      <AboutBanner />
      <Leading />
      <Commitment />
      <CoreValues />
    </main>
  );
}
