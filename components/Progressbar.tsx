"use client";
import ProgressBar from "next-nprogress-bar";

export default function Progressbar() {
  return (
    <>
      <ProgressBar
        height="2px"
        color="#11ff11"
        options={{ showSpinner: false }}
        shallowRouting
        appDirectory
      />
    </>
  );
}
