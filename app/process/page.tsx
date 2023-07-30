import React from "react";
import ProcessBanner from "../../components/ProcessBanner";
import ProcessDiagram from "../../components/ProcessDiagram";
import ProcessFlow from "../../components/ProcessFlow";

export default function Process() {
  return (
    <div>
      <ProcessBanner />
      <ProcessDiagram />
      <ProcessFlow />
    </div>
  );
}
