"use client";
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      {!pathname.startsWith("/auth") && <Navbar />}
      {children}
      {!pathname.startsWith("/auth") && <Footer />}
    </>
  );
};
