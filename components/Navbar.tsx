"use client";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import getFirebaseApp from "../firebase/app";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentRoute = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const app = getFirebaseApp();
  const auth = getAuth(app);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  // const [user, setUser] = useState<User | null>(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between h-20 dark:bg-slate-800 bg-slate-700 px-5 md:px-10">
      
        <div className="w-20 h-full relative shrink-0">
          <Link href={"/"}>
            <Image
              src={"/svg/logo-no-background.svg"}
              alt={"logo"}
              fill
              priority
            />
          </Link>
        </div>
        <ul className="md:flex hidden gap-6 text-black dark:text-white/60">
          <li
            className={`hover:text-green-500 ${
              currentRoute === "/" ? "text-green-500" : ""
            }`}
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className={`hover:text-green-500 ${
              currentRoute === "/about" ? "text-green-500" : ""
            }`}
          >
            <Link href={"/about"}>About us</Link>
          </li>
          <li
            className={`hover:text-green-500 ${
              currentRoute === "/services" ? "text-green-500" : ""
            }`}
          >
            <Link href={"/services"}>Services</Link>
          </li>
          <li
            className={`hover:text-green-500 ${
              currentRoute === "/process" ? "text-green-500" : ""
            }`}
          >
            <Link href={"/process"}>Process</Link>
          </li>
          <li
            className={`hover:text-green-500 ${
              currentRoute === "/contact" ? "text-green-500" : ""
            }`}
          >
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>

        {/* ----  */}
        <div className="w-75 h-full shrink-0 md:flex gap-3 hidden justify-center items-center ">
          <div>
          {
          !user ? (
            <Link href="/auth/login">
              <div className="bg-green-500 text-white p-2 px-6 rounded-sm">
                Login
              </div>
            </Link>

          ) : (
            <Link
              href="/account"
              className="text-black/60 font-semibold p-2 px-6 text-sm"
            >
              {user.photoURL ? (
                <div className="w-10 h-10 relative overflow-hidden rounded-full">
                  <Image
                    src={user.photoURL}
                    alt={"logo"}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ) : user.displayName ? (
                <> {user.displayName}</>
              ) : (
                <> {user.email?.split("@")[0]}</>
              )}
            </Link>
          )
          }
          </div>
          <div>
            {!user && (
              <Link href="/auth/signup">
                <div className="bg-green-500 text-white p-2 px-6 rounded-sm">
                <button onClick={() => {
                        setUser(null);
                    }}>Signup</button>
                </div>
              </Link>
              )
            }
          </div>
          <div>
            {user && (
              <Link href="/">
                <div className="bg-green-500 text-white p-2 px-6 rounded-sm">
                <button onClick={() => {
                        setUser(null);
                    }}>logout</button>
                </div>
              </Link>
              )
            }
          </div>
        </div>
        {/* ----- */}
        
        <div
          className="w-10 h-full shrink-0 md:hidden flex justify-center items-center cursor-pointer transition-all delay-[50ms]"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            <AiOutlineClose className="w-6 h-6 text-green-600" />
          ) : (
            <AiOutlineMenu className="w-6 h-6 text-green-600" />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <ul className="text-black/60 dark:text-white/60 pb-5 z-50 border-b border-green-400 text-center md:hidden bg-inherit w-full shadow-md absolute">
          <li className="p-2 hover:text-green-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="p-2 hover:text-green-500">
            <Link href={"/about"}>About us</Link>
          </li>
          <li className="p-2 hover:text-green-500">
            <Link href={"/services"}>Services</Link>
          </li>
          <li className="p-2 hover:text-green-500">
            <Link href={"/process"}>Process</Link>
          </li>
          <li className="p-2 hover:text-green-500">
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li className="p-2 hover:text-green-500">
            {!user && (
              <Link href="/auth/login">Login</Link>
            )}
          </li>
          <li className="p-2 hover:text-green-500">
            {!user && (
              <Link href="/auth/signup">signup</Link>
            )}
          </li>
          <li className="p-2 hover:text-green-500">
            {user && (
              <Link href="/">
                <button onClick={() => {
                        setUser(null);
                    }}>logout</button>
              </Link>
            )}
          </li>
        </ul>
      )}
    </>
  );
}
