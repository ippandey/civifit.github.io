import Image from "next/image";
import React from "react";

export default function Recycle() {
  return (
    <div className="w-full h-52">
      <div className="w-1/2 h-full relative">
        <Image
          src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="recycle"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
